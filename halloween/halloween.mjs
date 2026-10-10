/* O.D.I.N. Halloween-Würfel für Dice So Nice: Farben wie im Spieltisch und in der Owlbear-Erweiterung. Knochen (#e8dcc0) und
   Kürbis (#e8701a), Augen fast schwarz (#1a120c), auf der Sechs ein Kürbisgesicht. Ein Würfelsystem für den W6 und zwei Farbsätze,
   in jedem Spielsystem in den Einstellungen von Dice So Nice wählbar. Mit dem System O.D.I.N. würfeln die Proben je nach
   Einstellung im Oktober, immer oder nie damit: weiße Würfel Knochen, bunte Kürbis (Bilder: werkzeuge/halloween-wuerfel.mjs).
   Ab Dice So Nice 6.4 zusätzlich als 3D-Modell (modelFile, assets/v2/, aus den Realm-Würfeln Fassung 2 über
   werkzeuge/wuerfel-v2.mjs): Knochen mit eingekerbter Tinte, Kürbis durchgeschnitzt und innen leuchtend. Mit O.D.I.N. folgen
   die Proben der Einstellung „Würfel von Dice So Nice“ des Systems (3D oder klassisch), in anderen Systemen sind beide als
   Würfelsätze wählbar. */
const MODUL = 'odin-halloween';
const BILDER = `modules/${MODUL}/assets/`;
const SYSTEM = 'odin-halloween';
export const FARBSAETZE = {
  knochen: { name: 'odin-halloween-knochen', background: '#e8dcc0', edge: '#cdbf9f' },
  kuerbis: { name: 'odin-halloween-kuerbis', background: '#e8701a', edge: '#a94f10' },
};
export const AUGEN = '#1a120c';
export const MODELLE = { knochen: `${SYSTEM}-v2-knochen`, kuerbis: `${SYSTEM}-v2-kuerbis` };
export const DSN_MODELL_AB = '6.4.0';

/** Versionen „a.b.c“ vergleichen: true, wenn v mindestens min ist (wie module/dsn.mjs im System). */
export function mindestens(v, min) {
  const a = String(v ?? '').split('.').map((x) => parseInt(x, 10) || 0), b = min.split('.').map(Number);
  for (let i = 0; i < 3; i++) if ((a[i] ?? 0) !== b[i]) return (a[i] ?? 0) > b[i];
  return true;
}

/** Halloween-Würfel bei O.D.I.N.-Proben: „oktober“ nur im Oktober (Uhr des eigenen Geräts), „immer“ oder „nie“. */
export const halloweenAn = (wahl, d = new Date()) => wahl === 'immer' || (wahl === 'oktober' && d.getMonth() === 9);

/** Aussehen eines Würfels einer O.D.I.N.-Probe: weiß und ohne Farbe Knochen, bunt Kürbis, andere Würfel unverändert (null).
 *  modell: 3D-Modelle statt Etiketten (der Farbsatz bleibt als Rückfall für Würfel ohne Modell, etwa versteckte Würfe). */
export function aussehen(wuerfel, modell = false) {
  if (wuerfel?.faces !== 6) return null;
  const art = wuerfel.flavor === 'bunt' ? 'kuerbis' : (wuerfel.flavor === 'weiss' || !wuerfel.flavor) ? 'knochen' : null;
  if (!art) return null;
  return { colorset: FARBSAETZE[art].name, system: modell ? MODELLE[art] : SYSTEM };
}

if (globalThis.Hooks) {
  Hooks.once('init', () => {
    game.settings.register(MODUL, 'odinProben', {
      name: 'ODIN_HALLOWEEN.Einst.Name', hint: 'ODIN_HALLOWEEN.Einst.Hinweis', scope: 'world', config: true, type: String,
      choices: { oktober: 'ODIN_HALLOWEEN.Einst.Oktober', immer: 'ODIN_HALLOWEEN.Einst.Immer', nie: 'ODIN_HALLOWEEN.Einst.Nie' },
      default: 'oktober',
    });
  });

  Hooks.once('diceSoNiceReady', async (dice3d) => {
    const t = (k) => game.i18n.localize(`ODIN_HALLOWEEN.${k}`);
    const seiten = (art) => [1, 2, 3, 4, 5, 6].map((n) => `${BILDER}${art}_${n}.png`);
    dice3d.addSystem({ id: SYSTEM, name: t('System'), group: 'O.D.I.N.' }, 'default');
    dice3d.addDicePreset({ type: 'd6', labels: seiten('augen'), bumpMaps: seiten('relief'), system: SYSTEM });
    for (const [k, f] of Object.entries(FARBSAETZE)) {
      await dice3d.addColorset({ name: f.name, description: t(k === 'knochen' ? 'Knochen' : 'Kuerbis'), category: t('Kategorie'),
        foreground: AUGEN, background: f.background, outline: 'none', edge: f.edge, texture: 'none', material: 'plastic' });
    }
    if (!modellMoeglich()) return;
    for (const [k, id] of Object.entries(MODELLE)) {
      dice3d.addSystem({ id, name: t(k === 'knochen' ? 'Modell.Knochen' : 'Modell.Kuerbis'), group: 'O.D.I.N.' }, 'default');
      dice3d.addDicePreset({ type: 'd6', modelFile: `${BILDER}v2/${k}/dice_6.gltf`, system: id });
    }
  });
  const modellMoeglich = () => mindestens(game.modules.get('dice-so-nice')?.version, DSN_MODELL_AB);

  /* Läuft nach dem Haken des Systems (Module laden nach dem System) und ersetzt dessen Aussehen für die W6 der Probe. */
  Hooks.on('diceSoNiceRollStart', (id, ctx) => {
    if (game.system.id !== 'odin-rpg' || !halloweenAn(game.settings.get(MODUL, 'odinProben'))) return;
    // Einstellung des Systems (ab 0.10.11); ältere Systeme kennen sie nicht, dann 3D
    let darstellung = '3d';
    try { darstellung = game.settings.get('odin-rpg', 'wuerfelDarstellung'); } catch { /* nicht registriert */ }
    const modell = darstellung !== 'klassisch' && modellMoeglich();
    for (const d of ctx.roll?.dice ?? []) {
      const a = aussehen(d, modell);
      if (a) d.options.appearance = a;
    }
  });
}
