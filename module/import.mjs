// Import einer Figur aus dem Charaktergenerator (odin-rpg.pages.dev/generator/), deutsch oder englisch
// Format: {odin: "charakter", version: 1, state: {...}}
// Englische Exporte werden erkannt (Klassenname, Fertigkeiten, Attributkürzel, Kräfte) und auf die internen
// (deutschen) Schlüssel abgebildet; die Texte kommen aus den Daten in der Sprache des Exports.
import { DATEN } from './daten.mjs';
import { datenDe, datenEn, ATTR_NACH, fertNachName, probeLesen } from './sprache.mjs';

const L = (k, d) => game.i18n.format(`ODIN.${k}`, d ?? {});
const esc = (s) => foundry.utils.escapeHTML(String(s ?? ''));

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

/** true, wenn der Export aus dem englischen Generator stammt. */
export function istEnglischerExport(j, S = j?.state ?? j) {
  const lang = String(j?.lang ?? j?.sprache ?? S?.lang ?? '').toLowerCase();
  if (lang) return lang.startsWith('en');
  const N = DATEN.en?.namen;
  if (!N || !S) return false;
  if (N.klassen[S.cls] && !DATEN.klassen[S.cls]) return true;
  const deFert = new Set(DATEN.fertigkeiten.map((d) => d.name));
  const dePowers = new Set(Object.values(N.powers));
  let en = 0, de = 0;
  for (const n of Object.keys(S.skills ?? {})) { if (N.fert[n] && !deFert.has(n)) en++; if (deFert.has(n) && !N.fert[n]) de++; }
  for (const a of Object.keys(S.attr ?? {})) { if (N.attr[a]) en++; else if (DATEN.attribute.includes(a)) de++; }
  for (const pw of S.powers ?? []) { if (N.powers[pw?.n]) en++; else if (dePowers.has(pw?.n)) de++; }
  return en > de;
}

/** Wandelt einen Export (deutsch oder englisch) in Updates und Items um, ohne Foundry-Dokumente anzufassen. */
export function importDaten(j) {
  const S = j?.state ?? j;
  if (!S?.cls || (j.odin && j.odin !== 'charakter')) throw new Error(L('Import.KeineFigur'));
  const en = istEnglischerExport(j, S);
  const Q = en ? datenEn() : datenDe();
  const N = en ? (DATEN.en?.namen ?? {}) : {};
  const klasse = N.klassen?.[S.cls] ?? S.cls;
  const sub = N.subklassen?.[S.sub] ?? S.sub ?? '';
  const psion = klasse === 'Psion';
  const I = Q.import;
  const K = I.klassen[klasse] ?? {};
  const txt = (x) => (Array.isArray(x) ? `<p><b>${esc(x[0])}</b>: ${esc(x[1])}</p>` : (x ? `<p>${esc(x)}</p>` : ''));
  const upd = {
    name: S.code || S.name || undefined,
    'system.codename': S.code ?? '', 'system.klarname': S.name ?? '', 'system.klasse': klasse, 'system.subklasse': sub,
    'system.alter': String(S.alter ?? ''), 'system.herkunft': S.herkunft ?? '', 'system.hintergrund': txt(S.hinter), 'system.rang': 'Kadett',
  };
  for (const a of DATEN.attribute) upd[`system.attribute.${a}.punkte`] = 0;
  for (const [k, v] of Object.entries(S.attr ?? {})) if (ATTR_NACH[k]) upd[`system.attribute.${ATTR_NACH[k]}.punkte`] = Number(v) || 0;
  for (const d of DATEN.fertigkeiten) upd[`system.fertigkeiten.${d.key}.punkte`] = 0;
  for (const [n, v] of Object.entries(S.skills ?? {})) { const k = fertNachName(n); if (k) upd[`system.fertigkeiten.${k}.punkte`] = Number(v) || 0; }
  if (S.rek != null) upd['system.rekrutierung'] = txt(K.rek?.[S.rek]);
  if (S.firstcase != null) upd['system.ersterFall'] = txt(psion ? I.first.Psion?.[S.firstcase] : (I.subs[sub]?.[S.firstcase] ?? I.first[klasse]?.[S.firstcase]));
  if (S.detail != null && K.det) upd['system.detail'] = txt(K.det[S.detail]);
  if (S.antrieb != null) {
    const quelle = S.antSrc === 'grw' ? I.antrieb.map((a) => [a[0], (I.antriebPraefix ?? '') + a[1]]) : K.arche;
    const a = quelle?.[S.antrieb];
    if (a) { upd['system.antrieb'] = Array.isArray(a) ? a[0] : a; upd['system.anker'] = txt(a); }
  }
  const SN = I.sigNamen ?? {};
  const sig = Object.entries(S.sig ?? {}).filter(([, v]) => v !== '' && v != null).map(([k, v]) => `<p><b>${esc(SN[k] ?? k)}</b>: ${esc(typeof v === 'object' ? JSON.stringify(v) : v)}</p>`).join('');
  if (sig) upd['system.signatur'] = sig;
  if (S.photo && String(S.photo).startsWith('data:image')) upd.img = S.photo;

  // Aufstieg aus dem Generator: Steigerungen, Klassenbaum, EP, Laufbahn, Zwischenzeit
  const A = S.auf;
  for (const a of DATEN.attribute) upd[`system.attribute.${a}.steig`] = 0;
  for (const d of DATEN.fertigkeiten) upd[`system.fertigkeiten.${d.key}.steig`] = 0;
  if (A && typeof A === 'object') {
    for (const [k, v] of Object.entries(A.attr ?? {})) if (ATTR_NACH[k]) upd[`system.attribute.${ATTR_NACH[k]}.steig`] = Number(v) || 0;
    for (const [n, v] of Object.entries(A.skills ?? {})) { const k = fertNachName(n); if (k) upd[`system.fertigkeiten.${k}.steig`] = Number(v) || 0; }
    const ids = new Set([...(DATEN.baeume[klasse]?.gruppen ?? []).flatMap((g) => g.knoten), ...Object.values(DATEN.baeume[klasse]?.subklassen ?? {}).flatMap((s) => s.knoten)].map((n) => n.id));
    upd['system.baum'] = (A.baum ?? []).filter((id) => ids.has(id));
    const ep = Math.max(0, Number(A.ep) || 0);
    upd['system.ep'] = ep;
    upd['system.epFrei'] = Math.max(0, Number(A.frei) || 0);
    upd['system.rang'] = DATEN.raenge[DATEN.rangEp.reduce((r, x, i) => (ep >= x ? i : r), 0)];
    const lb = {};
    (A.log ?? []).forEach((l, i) => { lb[i] = { datum: l.d ?? '', mission: l.m ?? '', ep: Number(l.e) || 0, fuer: (l.f ?? []).map((x) => `${x.t} (${x.c})`).join('; '), rang: l.r ?? '' }; });
    upd['system.laufbahn'] = lb;
    upd['flags.odin-rpg.zwischenzeit'] = Number(A.zz) || 0;
    upd['flags.odin-rpg.attrZwischenzeit'] = Number.isFinite(A.attrZZ) ? A.attrZZ : -1;
  }

  // Kräfte und Zauber als Items, Texte in der Sprache des Exports
  const P = I.powers, P2 = (en ? datenDe() : datenEn()).import.powers;
  const ueb = new RegExp(`${I.ueberschuss ?? 'Überschuss'}[^:]*:\\s*(.*)$`);
  const items = (S.powers ?? []).map((pw) => {
    // Aufstieg: mächtige Kräfte, Major und Grand Magica bringen Probe und Text selbst mit
    const KAT = psion ? { s: 'klein', m: 'mittel', g: 'maechtig' } : { s: 'trick', m: 'minor', g: 'major', x: 'grand' };
    if (pw.t === 'g' || pw.t === 'x' || (pw.auf && pw.p)) {
      const m = probeLesen(pw.p);
      const teile = String(pw.p ?? '').split(',').map((s) => s.trim());
      return {
        name: pw.n, type: psion ? 'kraft' : 'zauber',
        system: { kategorie: KAT[pw.t] ?? KAT.s, attr: m?.attr ?? (psion ? 'WK' : 'IN'), fertigkeit: m?.fert || (psion ? 'telepathie' : 'thaumaturgie'), reichweite: teile[1] ?? '', dauer: teile.slice(2).join(', '), ueberschuss: ueb.exec(pw.x ?? '')?.[1] ?? '', beschreibung: `<p>${esc(pw.x ?? '')}</p>` },
      };
    }
    const art = psion ? (pw.t === 'm' ? 'psi_mittel' : 'psi_klein') : (pw.t === 'm' ? 'z_minor' : 'z_trick');
    const liste = P?.[art] ?? [];
    // Name nicht gefunden? Dann in der anderen Sprache suchen und über die Position zuordnen
    let d = liste.find((x) => x.name === pw.n);
    if (!d) { const i = (P2?.[art] ?? []).findIndex((x) => x.name === pw.n); if (i >= 0) d = liste[i]; }
    d ??= { name: pw.n, probe: '', text: '' };
    const m = probeLesen(d.probe);
    const teile = String(d.probe ?? '').split(',').map((s) => s.trim());
    return {
      name: d.name, type: psion ? 'kraft' : 'zauber',
      system: {
        kategorie: psion ? (pw.t === 'm' ? 'mittel' : 'klein') : (pw.t === 'm' ? 'minor' : 'trick'),
        attr: m?.attr ?? (psion ? 'WK' : 'IN'), fertigkeit: m?.fert || (psion ? 'telepathie' : 'thaumaturgie'),
        reichweite: teile[1] ?? '', dauer: teile[2] ?? '', ueberschuss: ueb.exec(d.text ?? '')?.[1] ?? '', beschreibung: `<p>${esc(d.text)}</p>`,
      },
    };
  });
  return { upd, items, englisch: en };
}

export async function generatorImport(actor, j) {
  const { upd, items: neu } = importDaten(j);
  upd.name ??= actor.name;
  upd['prototypeToken.name'] = upd.name;
  await actor.update(upd);
  const alt = actor.items.filter((i) => ['kraft', 'zauber'].includes(i.type) && neu.some((n) => n.name === i.name)).map((i) => i.id);
  if (alt.length) await actor.deleteEmbeddedDocuments('Item', alt);
  if (neu.length) await actor.createEmbeddedDocuments('Item', neu);
  const s = actor.system;
  await actor.update({ 'system.lp.value': s.lp.max, 'system.belastung.value': 0, 'system.psi.value': s.psi.max, 'system.me.value': s.me.max });
  ui.notifications.info(L('Import.Fertig', { name: actor.name }));
}
