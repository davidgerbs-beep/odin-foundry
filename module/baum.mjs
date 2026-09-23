// Klassenbaum, Steigerungen und Laufbahn (Grundregelwerk Kapitel VIII und Klassenbücher)
import { DATEN } from './daten.mjs';
import { AgentModell } from './modelle.mjs';
import { attrName, fertName } from './wuerfel.mjs';
import { baumAnzeige, knotenLokal, knotenName, rangName, subName } from './sprache.mjs';

const L = (k, d) => game.i18n.format(`ODIN.${k}`, d ?? {});
const esc = (s) => foundry.utils.escapeHTML(String(s ?? ''));
const rangIndex = (r) => Math.max(0, DATEN.raenge.indexOf(r));

/** EP-Kosten eines Knotens inklusive Aufpreis für fremde Äste (Scientist: Nachbarn ohne Aufpreis). */
export function knotenKosten(s, n) {
  const B = DATEN.baeume[s.klasse];
  const fremd = !!n.subklasse && n.subklasse !== s.subklasse;
  let aufpreis = fremd ? (B?.fremdAufpreis ?? 2) : 0;
  if (fremd && s.klasse === 'Scientist' && B?.nachbarn) {
    const i = B.nachbarn.indexOf(s.subklasse), j = B.nachbarn.indexOf(n.subklasse), m = B.nachbarn.length;
    if (i >= 0 && j >= 0 && (Math.abs(i - j) === 1 || Math.abs(i - j) === m - 1)) aufpreis = B.fremdAufpreisNachbarn ?? 0;
  }
  return (n.kosten ?? 0) + aufpreis;
}

/** Prüft, ob ein Knoten gekauft werden darf. Liefert {ok, grund, kosten, fremd, warnung}. */
export function kaufbar(actor, id) {
  const s = actor.system;
  const B = DATEN.baeume[s.klasse];
  const idx = AgentModell.knotenIndex(s.klasse);
  const n = idx[id];
  if (!B || !n) return { ok: false, grund: L('Baum.Unbekannt') };
  const hat = new Set(s.baum);
  if (hat.has(id)) return { ok: false, grund: L('Baum.Schon') };
  const fremd = !!n.subklasse && n.subklasse !== s.subklasse;
  const kosten = knotenKosten(s, n);
  const BA = baumAnzeige(s.klasse) ?? B;
  const nL = knotenLokal(s.klasse, n);
  const name = (x) => knotenName(s.klasse, x);
  const r = { ok: true, kosten, fremd, knoten: n, warnung: fremd ? (BA.fremdGrenze ?? B.fremdGrenze ?? '') : '' };
  if (rangIndex(s.rang) < rangIndex(n.rang)) return { ...r, ok: false, grund: L('Baum.Rang', { rang: rangName(n.rang) }) };
  // Voraussetzungen
  const vor = n.voraussetzung;
  if (s.klasse === 'Investigator') {
    const eigeneEins = !fremd && n.stufe === 'I';
    if (n.meisterschaft && fremd) return { ...r, ok: false, grund: L('Baum.NurEigene') };
    if (n.meisterschaft && !hat.has(vor)) return { ...r, ok: false, grund: L('Baum.Voraussetzung', { v: name(vor) }) };
    if (!eigeneEins && !(n.verbunden ?? []).some((x) => hat.has(x))) return { ...r, ok: false, grund: L('Baum.Faden') };
  } else if (Array.isArray(vor) && vor.length) {
    const erfuellt = n.voraussetzungModus === 'eine' ? vor.some((x) => hat.has(x)) : vor.every((x) => hat.has(x));
    if (!erfuellt) return { ...r, ok: false, grund: L('Baum.Voraussetzung', { v: vor.map(name).join(n.voraussetzungModus === 'eine' ? ' / ' : ', ') }) };
  } else if (vor && !hat.has(vor)) return { ...r, ok: false, grund: L('Baum.Voraussetzung', { v: name(vor) }) };
  if (n.voraussetzungText) r.warnung = [r.warnung, nL.voraussetzungText].filter(Boolean).join(' ');
  if (n.nachbarVoraussetzung && s.klasse === 'Scientist') {
    const nb = B.nachbarn ?? [];
    const i = nb.indexOf(n.subklasse);
    const nachbarn = [nb[(i + 1) % nb.length], nb[(i - 1 + nb.length) % nb.length]];
    const ok = s.baum.some((x) => nachbarn.includes(idx[x]?.subklasse) && idx[x]?.stufe === n.nachbarVoraussetzung);
    if (!ok) return { ...r, ok: false, grund: L('Baum.Nachbar', { stufe: n.nachbarVoraussetzung }) };
  }
  if ((s.epFrei ?? 0) < kosten) return { ...r, ok: false, grund: L('Baum.ZuWenigEP', { k: kosten, frei: s.epFrei }) };
  return r;
}

function logZeile(actor, text, ep) {
  const lb = foundry.utils.deepClone(actor.system.laufbahn ?? {});
  const n = Math.max(-1, ...Object.keys(lb ?? {}).map(Number).filter(Number.isFinite)) + 1;
  return { [`system.laufbahn.${n}`]: { datum: new Date().toLocaleDateString(game.i18n.lang), mission: '', ep: -ep, fuer: text, rang: rangName(actor.system.rang) } };
}

export async function knotenUmschalten(actor, id) {
  const s = actor.system;
  const idx = AgentModell.knotenIndex(s.klasse);
  const n0 = idx[id];
  if (!n0) return;
  const n = knotenLokal(s.klasse, n0);
  if (s.baum.includes(id)) {
    // Zurücknehmen: nur wenn kein anderer Knoten darauf aufbaut
    const abh = s.baum.filter((x) => { const v = idx[x]?.voraussetzung; return Array.isArray(v) ? v.includes(id) && !(idx[x].voraussetzungModus === 'eine' && v.some((y) => y !== id && s.baum.includes(y))) : v === id; });
    if (abh.length) return ui.notifications.warn(L('Baum.Abhaengig', { n: abh.map((x) => knotenName(s.klasse, x)).join(', ') }));
    const k = knotenKosten(s, n0);
    const ok = await foundry.applications.api.DialogV2.confirm({ window: { title: n.name }, content: `<p>${L('Baum.Zuruecknehmen', { n: esc(n.name), k })}</p>` });
    if (!ok) return;
    return actor.update({ 'system.baum': s.baum.filter((x) => x !== id), 'system.epFrei': s.epFrei + k });
  }
  const r = kaufbar(actor, id);
  if (!r.ok) return ui.notifications.warn(`${n.name}: ${r.grund}`);
  const content = `<p><b>${esc(n.name)}</b> (${esc(n.stufe)}${n.subklasse ? ', ' + esc(subName(n.subklasse)) : ''})</p><p>${esc(n.wirkung)}</p>
    <p>${L('Baum.Kosten', { k: r.kosten, frei: s.epFrei })}</p>${r.warnung ? `<p class="odin-dialog-hinweis">${esc(r.warnung)}</p>` : ''}${n.preisPlus ? `<p class="odin-dialog-hinweis">${L('Baum.PreisPlus', { preis: esc(s.preisName) })}</p>` : ''}`;
  const ok = await foundry.applications.api.DialogV2.confirm({ window: { title: L('Baum.Kaufen') }, content });
  if (!ok) return;
  await actor.update({ 'system.baum': [...s.baum, id], 'system.epFrei': s.epFrei - r.kosten, ...logZeile(actor, `${L('Baum.Knoten')}: ${n.name}`, r.kosten) });
}

/** Kosten einer Steigerung um 1 (Kapitel VIII). */
export function steigerKosten(actor, art, key) {
  const s = actor.system;
  if (art === 'attr') { const w = s.attribute[key].wert; return w >= 6 ? null : (w + 1) * 5; }
  const w = s.fertigkeiten[key].wert;
  if (w >= 6) return null;
  if (s.klasse === 'Psion' && DATEN.psi.includes(key) && key !== s.hauptgabe && key !== 'psi_kampf' && w >= 4) return null;
  return w === 0 ? 3 : (w + 1) * 2;
}

export async function steigern(actor, art, key, richtung = 1) {
  const s = actor.system;
  const pfad = art === 'attr' ? `system.attribute.${key}` : `system.fertigkeiten.${key}`;
  const x = art === 'attr' ? s.attribute[key] : s.fertigkeiten[key];
  const name = art === 'attr' ? attrName(key) : fertName(key);
  if (richtung < 0) {
    if (!x.steig) return;
    const k = art === 'attr' ? x.wert * 5 : (x.wert === 1 ? 3 : x.wert * 2);
    return actor.update({ [`${pfad}.steig`]: x.steig - 1, 'system.epFrei': s.epFrei + k });
  }
  const k = steigerKosten(actor, art, key);
  if (k == null) return ui.notifications.warn(L('Steigern.Max', { n: name }));
  if (s.epFrei < k) return ui.notifications.warn(L('Baum.ZuWenigEP', { k, frei: s.epFrei }));
  await actor.update({ [`${pfad}.steig`]: x.steig + 1, 'system.epFrei': s.epFrei - k, ...logZeile(actor, `${name} ${x.wert} → ${x.wert + 1}`, k) });
}

/** Kontext für Blatt 3: Gruppen und Äste mit Status. */
export function baumKontext(actor, zeigeSub) {
  const s = actor.system;
  const B = DATEN.baeume[s.klasse];
  if (!B) return null;
  const BA = baumAnzeige(s.klasse) ?? B;
  const hat = new Set(s.baum);
  const knoten = (liste) => liste.filter(Boolean).map((n0) => {
    const id = n0.id;
    const r = hat.has(id) ? null : kaufbar(actor, id);
    return { ...knotenLokal(s.klasse, n0), hat: hat.has(id), offen: !!r?.ok, grund: r?.grund ?? '', kosten: r?.kosten ?? n0.kosten, zeigeSub: n0.subklasse && n0.subklasse !== s.subklasse ? subName(n0.subklasse) : '' };
  });
  const idx = AgentModell.knotenIndex(s.klasse);
  const gruppen = B.gruppen.map((g, i) => ({ ...g, titel: BA.gruppen?.[i]?.titel ?? g.titel, hinweis: BA.gruppen?.[i]?.hinweis ?? g.hinweis, knoten: knoten(g.knoten.map((n) => idx[n.id])) }));
  const eigen = B.subklassen[s.subklasse];
  const titel = (sub) => BA.subklassen?.[sub]?.titel ?? B.subklassen[sub]?.titel ?? '';
  const subs = Object.keys(B.subklassen).filter((x) => x !== s.subklasse);
  const fremdSub = zeigeSub && subs.includes(zeigeSub) ? zeigeSub : null;
  const fremdGekauft = s.baum.map((x) => idx[x]).filter((n) => n?.subklasse && n.subklasse !== s.subklasse);
  return {
    name: BA.baumName ?? B.baumName, regeln: BA.regeln ?? B.regeln, preis: BA.preis ?? B.preis,
    stufen: BA.stufen ?? B.stufen, spalten: BA.spalten ?? B.spalten ?? null,
    gruppen,
    eigen: eigen ? { titel: titel(s.subklasse), sub: subName(s.subklasse), knoten: knoten(eigen.knoten.map((n) => idx[n.id])) } : null,
    fremd: fremdSub ? { titel: titel(fremdSub), sub: subName(fremdSub), knoten: knoten(B.subklassen[fremdSub].knoten.map((n) => idx[n.id])) } : null,
    fremdGekauft: knoten(fremdGekauft),
    subOptionen: Object.fromEntries([['', L('Baum.FremdWaehlen')], ...subs.map((x) => [x, subName(x)])]),
    fremdSub: fremdSub ?? '',
    fremdGrenze: BA.fremdGrenze ?? B.fremdGrenze ?? '',
  };
}
