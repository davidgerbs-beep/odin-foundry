// O.D.I.N. – Occult Dynamics Intelligence Network, Spielsystem für Foundry VTT
import { DATEN } from './module/daten.mjs';
import { AgentModell, GegnerModell, ITEM_MODELLE } from './module/modelle.mjs';
import { AgentBogen, GegnerBogen, OdinItemBogen } from './module/blaetter.mjs';
import * as aktionen from './module/aktionen.mjs';
import * as wuerfel from './module/wuerfel.mjs';
import { generatorImport } from './module/import.mjs';
import * as baum from './module/baum.mjs';

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

  foundry.applications.handlebars.loadTemplates({
    odinZelle: 'systems/odin-rpg/templates/odin-zelle.hbs',
    odinKnoten: 'systems/odin-rpg/templates/odin-knoten.hbs',
  });
  game.odin = { DATEN, aktionen, wuerfel, generatorImport, baum };
});

Hooks.on('renderChatMessageHTML', (message, html) => aktionen.chatKnoepfe(message, html));

/* Dice So Nice: weiße und bunte Würfel farblich trennen */
Hooks.once('diceSoNiceReady', (dice3d) => {
  dice3d.addColorset({ name: 'odin-weiss', description: 'O.D.I.N. weiß', category: 'O.D.I.N.', foreground: '#1d1a15', background: '#f4efe3', outline: '#1d1a15', edge: '#c9bb99', material: 'plastic' });
  dice3d.addColorset({ name: 'odin-bunt', description: 'O.D.I.N. bunt', category: 'O.D.I.N.', foreground: '#f4efe3', background: '#7a2a20', outline: '#4d1812', edge: '#4d1812', material: 'plastic' });
});
Hooks.on('diceSoNiceRollStart', (id, ctx) => {
  for (const d of ctx.roll?.dice ?? []) {
    if (d.flavor === 'weiss') d.options.appearance = { colorset: 'odin-weiss' };
    if (d.flavor === 'bunt') d.options.appearance = { colorset: 'odin-bunt' };
  }
});
