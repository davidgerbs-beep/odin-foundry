/* Dice So Nice: Aussehen der O.D.I.N.-Würfel, ohne Foundry testbar (tests/dsn.test.mjs). Benutzt von odin.mjs.
   Zwei Darstellungen, Einstellung „wuerfelDarstellung“ je Gerät:
   - „3d“: 3D-Modelle aus den Realm-Würfeln Fassung 2 (assets/wuerfel/v2/, werkzeuge/wuerfel-v2.mjs), über modelFile, das
     Dice So Nice ab 6.4 lädt. Farbe und Zeichen stecken im Modell: weiß, bunt (Windrose), je Klasse bunt in der Klassenfarbe
     und weiß mit dem Zeichen der Klasse auf der Sechs. Ein Farbsatz (colorset) wirkt auf Modelle nicht, er bleibt als
     Rückfall für Würfel, die Dice So Nice ohne Modell zeigt (versteckte Würfe).
   - „klassisch“: die bisherigen Würfel mit Etiketten (assets/wuerfel/*.png) und Farbsätzen.
   Ohne Dice So Nice 6.4 und bei bunten Würfeln in Spielerfarbe (frei wählbare Farbe, Modelle lassen sich nicht einfärben)
   gelten die klassischen Würfel. */

export const V2 = 'systems/odin-rpg/assets/wuerfel/v2/';
export const KLASSEN = ['soldier', 'investigator', 'scientist', 'thaumaturg', 'agent', 'psion'];
export const DSN_MODELL_AB = '6.4.0';

/** Die 3D-Systeme: id -> Ordner unter assets/wuerfel/v2/. */
export const MODELLE = {
  'odin-v2-weiss': 'odin-weiss',
  'odin-v2-bunt': 'odin-bunt',
  ...Object.fromEntries(KLASSEN.flatMap((k) => [[`odin-v2-${k}`, `odin-${k}`], [`odin-v2-weiss-${k}`, `odin-weiss-${k}`]])),
};

/** Versionen „a.b.c“ vergleichen (ohne Foundry): true, wenn v mindestens min ist. */
export function mindestens(v, min) {
  const a = String(v ?? '').split('.').map((x) => parseInt(x, 10) || 0), b = min.split('.').map(Number);
  for (let i = 0; i < 3; i++) if ((a[i] ?? 0) !== b[i]) return (a[i] ?? 0) > b[i];
  return true;
}

/** Ob die 3D-Modelle gelten: Einstellung „3d“ und Dice So Nice ab 6.4. */
export const modellAn = (darstellung, dsnVersion) => darstellung !== 'klassisch' && mindestens(dsnVersion, DSN_MODELL_AB);

/**
 * Aussehen eines W6 einer O.D.I.N.-Probe für Dice So Nice (options.appearance), oder null für andere Würfel.
 * flavor „weiss“ (Attribut), „bunt“ (Fertigkeit) oder leer (Initiative, Preis, Trauma: weiß).
 * kl: Klasse in Kleinbuchstaben oder null, modell: 3D-Modelle an, eigen: Aussehen der bunten Würfel in Spielerfarbe oder null.
 */
export function aussehen(wuerfel, { kl = null, modell = false, eigen = null } = {}) {
  if (wuerfel?.faces !== 6) return null;
  const nach = kl ? `-${kl}` : '';
  const bunt = wuerfel.flavor === 'bunt';
  if (!bunt && wuerfel.flavor && wuerfel.flavor !== 'weiss') return null;
  if (bunt && eigen) return eigen;
  const klassisch = bunt ? { colorset: kl ? `odin-${kl}` : 'odin-bunt', system: `odin-dunkel${nach}` } : { colorset: 'odin-weiss', system: `odin-hell${nach}` };
  if (!modell) return klassisch;
  return { ...klassisch, system: bunt ? (kl ? `odin-v2-${kl}` : 'odin-v2-bunt') : (kl ? `odin-v2-weiss-${kl}` : 'odin-v2-weiss') };
}
