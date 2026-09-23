// Import einer Figur aus dem Charaktergenerator (odin-rpg.pages.dev/generator/)
// Format: {odin: "charakter", version: 1, state: {...}}
import { DATEN } from './daten.mjs';

const L = (k, d) => game.i18n.format(`ODIN.${k}`, d ?? {});
const esc = (s) => foundry.utils.escapeHTML(String(s ?? ''));
const nachName = Object.fromEntries(DATEN.fertigkeiten.map((d) => [d.name, d.key]));
const SIG_NAMEN = { helmNr: 'Helm-Nr.', frage: 'Frage', kristall: 'Kristall', kristallArt: 'Art des Kristalls', kristallNr: 'Kristall-Nr.', bruch: 'Bruchstück', legName: 'Legende', legBeruf: 'Beruf der Legende', proName: 'Prototyp', proArt: 'Art', proWas: 'Zweck', silberName: 'Vorbesitzer', silberNr: 'Stück-Nr.', silberWarum: 'Verliehen für' };

export async function generatorDialog(actor) {
  const content = `<p>${L('Import.Text')}</p>
    <input type="file" name="datei" accept=".json,.odin,application/json">
    <textarea name="text" rows="6" placeholder='{"odin":"charakter","version":1,"state":{…}}'></textarea>`;
  const eingabe = await foundry.applications.api.DialogV2.prompt({
    window: { title: L('Import.Titel', { name: actor.name }) },
    content,
    ok: { label: L('Import.Einlesen'), icon: 'fa-solid fa-file-import', callback: async (ev, btn) => { const f = btn.form.elements.datei.files?.[0]; return f ? f.text() : btn.form.elements.text.value; } },
    rejectClose: false,
  });
  if (!eingabe) return;
  try { await generatorImport(actor, JSON.parse(eingabe)); } catch (err) { ui.notifications.error(L('Import.Fehler', { f: err.message })); }
}

export async function generatorImport(actor, j) {
  const S = j?.state ?? j;
  if (!S?.cls || (j.odin && j.odin !== 'charakter')) throw new Error(L('Import.KeineFigur'));
  const psion = S.cls === 'Psion';
  const K = DATEN.import.klassen[S.cls] ?? {};
  const txt = (x) => (Array.isArray(x) ? `<p><b>${esc(x[0])}</b>: ${esc(x[1])}</p>` : (x ? `<p>${esc(x)}</p>` : ''));
  const upd = {
    name: S.code || S.name || actor.name,
    'prototypeToken.name': S.code || S.name || actor.name,
    'system.codename': S.code ?? '', 'system.klarname': S.name ?? '', 'system.klasse': S.cls, 'system.subklasse': S.sub ?? '',
    'system.alter': String(S.alter ?? ''), 'system.herkunft': S.herkunft ?? '', 'system.hintergrund': txt(S.hinter), 'system.rang': 'Kadett',
  };
  for (const a of DATEN.attribute) upd[`system.attribute.${a}.punkte`] = Number(S.attr?.[a] ?? 0);
  for (const d of DATEN.fertigkeiten) upd[`system.fertigkeiten.${d.key}.punkte`] = 0;
  for (const [n, v] of Object.entries(S.skills ?? {})) if (nachName[n]) upd[`system.fertigkeiten.${nachName[n]}.punkte`] = Number(v) || 0;
  if (S.rek != null) upd['system.rekrutierung'] = txt(K.rek?.[S.rek]);
  if (S.firstcase != null) upd['system.ersterFall'] = txt(psion ? DATEN.import.first.Psion?.[S.firstcase] : (DATEN.import.subs[S.sub]?.[S.firstcase] ?? DATEN.import.first[S.cls]?.[S.firstcase]));
  if (S.detail != null && K.det) upd['system.detail'] = txt(K.det[S.detail]);
  if (S.antrieb != null) {
    const quelle = S.antSrc === 'grw' ? DATEN.import.antrieb.map((a) => [a[0], 'Bleibt, weil ' + a[1]]) : K.arche;
    const a = quelle?.[S.antrieb];
    if (a) { upd['system.antrieb'] = Array.isArray(a) ? a[0] : a; upd['system.anker'] = txt(a); }
  }
  const sig = Object.entries(S.sig ?? {}).filter(([, v]) => v !== '' && v != null).map(([k, v]) => `<p><b>${esc(SIG_NAMEN[k] ?? k)}</b>: ${esc(typeof v === 'object' ? JSON.stringify(v) : v)}</p>`).join('');
  if (sig) upd['system.signatur'] = sig;
  if (S.photo && String(S.photo).startsWith('data:image')) upd.img = S.photo;
  await actor.update(upd);

  // Kräfte und Zauber als Items
  const P = DATEN.import.powers;
  const neu = (S.powers ?? []).map((pw) => {
    const liste = psion ? (pw.t === 'm' ? P.psi_mittel : P.psi_klein) : (pw.t === 'm' ? P.z_minor : P.z_trick);
    const d = liste?.find((x) => x.name === pw.n) ?? { name: pw.n, probe: '', text: '' };
    const m = /^(ST|GE|KO|IN|WE|WK|CH|MA|GL)(?:\s*\+\s*([^,]+))?/.exec(d.probe ?? '');
    const teile = String(d.probe ?? '').split(',').map((s) => s.trim());
    const ueb = /Überschuss[^:]*:\s*(.*)$/.exec(d.text ?? '');
    return {
      name: d.name, type: psion ? 'kraft' : 'zauber',
      system: {
        kategorie: psion ? (pw.t === 'm' ? 'mittel' : 'klein') : (pw.t === 'm' ? 'minor' : 'trick'),
        attr: m?.[1] ?? (psion ? 'WK' : 'IN'), fertigkeit: (m?.[2] && nachName[m[2].trim()]) || (psion ? 'telepathie' : 'thaumaturgie'),
        reichweite: teile[1] ?? '', dauer: teile[2] ?? '', ueberschuss: ueb?.[1] ?? '', beschreibung: `<p>${esc(d.text)}</p>`,
      },
    };
  });
  const alt = actor.items.filter((i) => ['kraft', 'zauber'].includes(i.type) && neu.some((n) => n.name === i.name)).map((i) => i.id);
  if (alt.length) await actor.deleteEmbeddedDocuments('Item', alt);
  if (neu.length) await actor.createEmbeddedDocuments('Item', neu);
  const s = actor.system;
  await actor.update({ 'system.lp.value': s.lp.max, 'system.belastung.value': 0, 'system.psi.value': s.psi.max, 'system.me.value': s.me.max });
  ui.notifications.info(L('Import.Fertig', { name: actor.name }));
}
