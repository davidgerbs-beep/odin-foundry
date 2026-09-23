// Sprache der Spieldaten (deutsch oder englisch).
// Gespeichert wird immer der deutsche interne Schlüssel (Klasse, Subklasse, Rang, Knoten-ids, Signatur-Werte);
// nur die Anzeige wechselt. Deutsch kommt aus DATEN, Englisch aus DATEN.en (build_foundry.py).
import { DATEN } from './daten.mjs';

/** true, wenn Foundry auf Englisch läuft. */
export const istEnglisch = () => String(globalThis.game?.i18n?.lang ?? '').toLowerCase().startsWith('en');

let DE = null;
/** Deutscher Datenblock in derselben Form wie DATEN.en. */
export function datenDe() {
  if (DE) return DE;
  DE = {
    klassen: Object.fromEntries(Object.entries(DATEN.klassen).map(([k, v]) => [k, { name: k, zweig: v.zweig, preis: v.preis, signatur: v.signatur, ausruestung: v.ausruestung }])),
    subklassen: {},
    faehigkeiten: DATEN.faehigkeiten,
    subAusruestung: DATEN.subAusruestung,
    attrKurz: DATEN.attrKurz,
    attrAbk: Object.fromEntries(DATEN.attribute.map((a) => [a, a])),
    beschreibung: DATEN.beschreibung,
    fertName: Object.fromEntries(DATEN.fertigkeiten.map((d) => [d.key, d.name])),
    raenge: DATEN.raenge,
    baeume: DATEN.baeume,
    import: DATEN.import,
    namen: { klassen: {}, subklassen: {}, fert: Object.fromEntries(DATEN.fertigkeiten.map((d) => [d.name, d.key])), attr: {}, powers: {} },
  };
  return DE;
}
/** Englischer Datenblock (fällt auf Deutsch zurück, falls er fehlt). */
export const datenEn = () => DATEN.en ?? datenDe();
/** Datenblock der aktuellen Sprache. */
export const T = () => (istEnglisch() && DATEN.en ? DATEN.en : datenDe());

/* ---------------- Anzeigenamen ---------------- */
export const klasseName = (k) => (k ? T().klassen[k]?.name ?? k : '');
export const subName = (s) => (s ? T().subklassen?.[s] ?? s : '');
export const rangName = (r) => { const i = DATEN.raenge.indexOf(r); return i < 0 ? (r ?? '') : (T().raenge[i] ?? r); };
/** Attributkürzel der Anzeige: ST/GE … auf Deutsch, STR/DEX … auf Englisch. */
export const abk = (a) => (a ? T().attrAbk?.[a] ?? a : '');
/** Fertigkeitsname der Spieldaten (so, wie er in Fähigkeiten und Knoten steht). */
export const fertDatenName = (k) => (k ? T().fertName?.[k] ?? k : '');

/* ---------------- Proben lesen, deutsch und englisch ---------------- */
/** Kürzel beider Sprachen -> interner Attributschlüssel. */
export const ATTR_NACH = { ...Object.fromEntries(DATEN.attribute.map((a) => [a, a])), ...(DATEN.en?.namen?.attr ?? {}) };
const ABK = Object.keys(ATTR_NACH).sort((a, b) => b.length - a.length).join('|');
/** "ATTR + Fertigkeit, …" am Anfang einer Probe. */
export const PROBE_RE = new RegExp(`^(${ABK})\\b(?:\\s*\\+\\s*([^,]+))?`);
const FERT_NACH = {};
for (const d of DATEN.fertigkeiten) FERT_NACH[d.name.toLowerCase()] = d.key;
for (const [n, k] of Object.entries(DATEN.en?.namen?.fert ?? {})) FERT_NACH[n.toLowerCase()] = k;
/** Fertigkeitsname (deutsch oder englisch) -> Schlüssel, sonst ''. */
export const fertNachName = (n) => FERT_NACH[String(n ?? '').trim().toLowerCase()] ?? '';
/** Liest "WK + Telepathie, 10 m" oder "WIL + Telepathy, 10 m": {attr, fert} mit internen Schlüsseln oder null. */
export function probeLesen(probe) {
  const m = PROBE_RE.exec(String(probe ?? '').trim());
  return m ? { attr: ATTR_NACH[m[1]], fert: m[2] ? fertNachName(m[2]) : '' } : null;
}

/* ---------------- Klassenbaum in der Anzeige ---------------- */
const CACHE = new Map();
/** Knoten des Klassenbaums der aktuellen Sprache nach id (nur für die Anzeige). */
export function knotenAnzeige(klasse) {
  const B = T().baeume?.[klasse];
  if (!B) return {};
  const schluessel = `${istEnglisch() ? 'en' : 'de'}:${klasse}`;
  if (CACHE.has(schluessel)) return CACHE.get(schluessel);
  const idx = {};
  for (const g of B.gruppen) for (const n of g.knoten) idx[n.id] = n;
  for (const sb of Object.values(B.subklassen)) for (const n of sb.knoten) idx[n.id] = n;
  CACHE.set(schluessel, idx);
  return idx;
}
/** Deutscher Knoten (Logik) mit Name, Wirkung und Spalte in der aktuellen Sprache. */
export function knotenLokal(klasse, n) {
  if (!n) return n;
  const l = knotenAnzeige(klasse)[n.id];
  if (!l) return n;
  return { ...n, name: l.name, wirkung: l.wirkung, spalte: l.spalte ?? n.spalte, voraussetzungText: l.voraussetzungText ?? n.voraussetzungText, kreisTitel: l.kreisTitel ?? n.kreisTitel };
}
export const knotenName = (klasse, id) => knotenAnzeige(klasse)[id]?.name ?? id;
/** Baum der aktuellen Sprache (Titel, Regeln, Preis, Stufen, Grenzen). */
export const baumAnzeige = (klasse) => T().baeume?.[klasse] ?? DATEN.baeume[klasse] ?? null;
