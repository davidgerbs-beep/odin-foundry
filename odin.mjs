// O.D.I.N. – Occult Dynamics Intelligence Network, Spielsystem für Foundry VTT
import { DATEN } from './module/daten.mjs';
import { AgentModell, GegnerModell, ITEM_MODELLE } from './module/modelle.mjs';
import { AgentBogen, GegnerBogen, OdinItemBogen } from './module/blaetter.mjs';
import * as aktionen from './module/aktionen.mjs';
import * as wuerfel from './module/wuerfel.mjs';
import { generatorImport } from './module/import.mjs';
import * as baum from './module/baum.mjs';
import * as sprache from './module/sprache.mjs';

class OdinActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();
    if (this.type === 'agent') this.system.berechneRuestung(this.items);
  }
  getRollData() {
    const d = super.getRollData();
    d.ini = this.system.initiative ?? 0;
    d.we = this.type === 'agent' ? this.system.attribute.WE.wert : 0;
    return d;
  }
  /** Neue Agenten bekommen einen verknüpften Token, damit Schaden am Bogen landet. */
  async _preCreate(data, options, user) {
    if ((await super._preCreate(data, options, user)) === false) return false;
    if (this.type === 'agent') this.updateSource({ prototypeToken: { actorLink: true, disposition: CONST.TOKEN_DISPOSITIONS.FRIENDLY } });
  }
}

Hooks.once('init', () => {
  CONFIG.Actor.documentClass = OdinActor;
  Object.assign(CONFIG.Actor.dataModels, { agent: AgentModell, gegner: GegnerModell });
  Object.assign(CONFIG.Item.dataModels, ITEM_MODELLE);
  CONFIG.Actor.trackableAttributes = {
    agent: { bar: ['lp', 'belastung', 'psi', 'me'], value: ['preis'] },
    gegner: { bar: ['lp'], value: [] },
  };
  CONFIG.Combat.initiative = { formula: '@ini + @we / 10 + 1d6 / 100', decimals: 2 };

  const DSC = foundry.applications.apps.DocumentSheetConfig;
  DSC.registerSheet(Actor, 'odin-rpg', AgentBogen, { types: ['agent'], makeDefault: true, label: 'ODIN.Bogen.Agent' });
  DSC.registerSheet(Actor, 'odin-rpg', GegnerBogen, { types: ['gegner'], makeDefault: true, label: 'ODIN.Bogen.Gegner' });
  DSC.registerSheet(Item, 'odin-rpg', OdinItemBogen, { makeDefault: true, label: 'ODIN.Bogen.Item' });

  Handlebars.registerHelper('odinGleich', (a, b) => a === b);
  Handlebars.registerHelper('odinFert', (k) => wuerfel.fertName(k));
  Handlebars.registerHelper('odinAbk', (a) => sprache.abk(a));

  foundry.applications.handlebars.loadTemplates({
    odinZelle: 'systems/odin-rpg/templates/odin-zelle.hbs',
    odinKnoten: 'systems/odin-rpg/templates/odin-knoten.hbs',
  });
  game.odin = { DATEN, aktionen, wuerfel, generatorImport, baum, sprache };
});

/* Kompendien nur in der eigenen Sprache zeigen (umschaltbar in den Einstellungen) */
Hooks.once('init', () => {
  game.settings.register('odin-rpg', 'alleSprachen', {
    name: 'ODIN.Einstellung.AlleSprachen', hint: 'ODIN.Einstellung.AlleSprachenHinweis',
    scope: 'client', config: true, type: Boolean, default: false, onChange: () => ui.compendium?.render(),
  });
  game.settings.register('odin-rpg', 'buntSpielerfarbe', {
    name: 'ODIN.Einstellung.BuntSpielerfarbe', hint: 'ODIN.Einstellung.BuntSpielerfarbeHinweis',
    scope: 'world', config: true, type: Boolean, default: true,
  });
});
Hooks.on('renderCompendiumDirectory', (app, html) => {
  if (game.settings.get('odin-rpg', 'alleSprachen')) return;
  const root = html instanceof HTMLElement ? html : html?.[0];
  if (!root) return;
  const eigene = game.i18n.lang?.startsWith('en') ? 'en' : 'de';
  for (const li of root.querySelectorAll('[data-pack]')) {
    const sprache = game.packs.get(li.dataset.pack)?.metadata.flags?.['odin-rpg']?.sprache;
    li.classList.toggle('odin-andere-sprache', !!sprache && sprache !== eigene);
  }
  // Ordner ohne sichtbare Einträge ausblenden, von innen nach außen
  const ordner = [...root.querySelectorAll('.folder, [data-folder-id]')].reverse();
  for (const f of ordner) {
    const eintraege = [...f.querySelectorAll('[data-pack]')];
    f.classList.toggle('odin-andere-sprache', eintraege.length > 0 && eintraege.every((li) => li.classList.contains('odin-andere-sprache')));
  }
});

Hooks.on('renderChatMessageHTML', (message, html) => aktionen.chatKnoepfe(message, html));

/* Dice So Nice: weiße und bunte Würfel farblich trennen */
Hooks.once('diceSoNiceReady', (dice3d) => {
  dice3d.addColorset({ name: 'odin-weiss', description: 'O.D.I.N. weiß', category: 'O.D.I.N.', foreground: '#1d1a15', background: '#f4efe3', outline: '#1d1a15', edge: '#c9bb99', material: 'plastic' });
  dice3d.addColorset({ name: 'odin-bunt', description: 'O.D.I.N. bunt', category: 'O.D.I.N.', foreground: '#f4efe3', background: '#7a2a20', outline: '#4d1812', edge: '#4d1812', material: 'plastic' });
});
/* Bunte Würfel in der Farbe des würfelnden Spielers (Einstellung), Schrift je nach Helligkeit hell oder dunkel */
function spielerFarbe(id, ctx) {
  if (!game.settings.get('odin-rpg', 'buntSpielerfarbe')) return null;
  const nutzer = ctx?.user ?? game.messages.get(id)?.author ?? game.user;
  const c = foundry.utils.Color.from(nutzer?.color ?? '#7a2a20');
  if (!Number.isFinite(c.valueOf())) return null;
  const [r, g, b] = c.rgb;
  const hell = 0.299 * r + 0.587 * g + 0.114 * b > 0.6;
  const rand = c.multiply(0.6).css;
  return { colorset: 'custom', background: c.css, foreground: hell ? '#1d1a15' : '#f4efe3', outline: hell ? '#1d1a15' : rand, edge: rand, material: 'plastic' };
}
Hooks.on('diceSoNiceRollStart', (id, ctx) => {
  const eigen = spielerFarbe(id, ctx);
  for (const d of ctx.roll?.dice ?? []) {
    if (d.flavor === 'weiss') d.options.appearance = { colorset: 'odin-weiss' };
    if (d.flavor === 'bunt') d.options.appearance = eigen ?? { colorset: 'odin-bunt' };
  }
});
