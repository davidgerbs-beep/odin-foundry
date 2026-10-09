/* O.D.I.N. Halloween-Würfel für Dice So Nice: Farben wie im Spieltisch und in der Owlbear-Erweiterung. Knochen (#e8dcc0) und
   Kürbis (#e8701a), Augen fast schwarz (#1a120c), auf der Sechs ein Kürbisgesicht. Ein Würfelsystem für den W6 und zwei Farbsätze,
   in jedem Spielsystem in den Einstellungen von Dice So Nice wählbar. Mit dem System O.D.I.N. würfeln die Proben je nach
   Einstellung im Oktober, immer oder nie damit: weiße Würfel Knochen, bunte Kürbis (Bilder: werkzeuge/halloween-wuerfel.mjs). */
const MODUL = 'odin-halloween';
const BILDER = `modules/${MODUL}/assets/`;
const SYSTEM = 'odin-halloween';
export const FARBSAETZE = {
  knochen: { name: 'odin-halloween-knochen', background: '#e8dcc0', edge: '#cdbf9f' },
  kuerbis: { name: 'odin-halloween-kuerbis', background: '#e8701a', edge: '#a94f10' },
};
export const AUGEN = '#1a120c';

/** Halloween-Würfel bei O.D.I.N.-Proben: „oktober“ nur im Oktober (Uhr des eigenen Geräts), „immer“ oder „nie“. */
export const halloweenAn = (wahl, d = new Date()) => wahl === 'immer' || (wahl === 'oktober' && d.getMonth() === 9);

/** Aussehen eines Würfels einer O.D.I.N.-Probe: weiß und ohne Farbe Knochen, bunt Kürbis, andere Würfel unverändert (null). */
export function aussehen(wuerfel) {
  if (wuerfel?.faces !== 6) return null;
  if (wuerfel.flavor === 'bunt') return { colorset: FARBSAETZE.kuerbis.name, system: SYSTEM };
  if (wuerfel.flavor === 'weiss' || !wuerfel.flavor) return { colorset: FARBSAETZE.knochen.name, system: SYSTEM };
  return null;
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
  });

  /* Läuft nach dem Haken des Systems (Module laden nach dem System) und ersetzt dessen Aussehen für die W6 der Probe. */
  Hooks.on('diceSoNiceRollStart', (id, ctx) => {
    if (game.system.id !== 'odin-rpg' || !halloweenAn(game.settings.get(MODUL, 'odinProben'))) return;
    for (const d of ctx.roll?.dice ?? []) {
      const a = aussehen(d);
      if (a) d.options.appearance = a;
    }
  });
}
