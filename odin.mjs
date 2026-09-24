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
    scope: 'world', config: true, type: Boolean, default: false,
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

/* Dice So Nice: eigene O.D.I.N.-Würfel. Weiß für das Attribut, bunt in der Farbe der Klasse für die Fertigkeit.
   Augen statt Zahlen, auf der Sechs das Zeichen der Klasse (ohne Klasse die Windrose), Oberfläche wie gealtertes Bakelit. */
const WUERFEL = 'systems/odin-rpg/assets/wuerfel/';
const KLASSENFARBE = { Soldier: '#4e595c', Investigator: '#8c2a20', Scientist: '#2e6b54', Thaumaturg: '#896423', Agent: '#36322f', Psion: '#42607f' };
const BUNT_STANDARD = '#7a2a20';
const klasseVon = (actor) => {
  const k = String(actor?.system?.klasse ?? '').trim();
  return Object.keys(KLASSENFARBE).find((x) => k.toLowerCase().startsWith(x.toLowerCase().slice(0, 6))) ?? null;
};
Hooks.once('diceSoNiceReady', async (dice3d) => {
  // Je Klasse zwei Würfelsätze (dunkle und helle Augen) mit dem Zeichen der Klasse auf der Sechs, ohne Klasse die Windrose
  const seiten = (t, k) => [1, 2, 3, 4, 5].map((n) => `${WUERFEL}${t}_${n}.png`).concat(`${WUERFEL}${t}_6${k ? '_' + k : ''}.png`);
  for (const k of [null, ...Object.keys(KLASSENFARBE).map((x) => x.toLowerCase())]) {
    const nach = k ? `-${k}` : '';
    dice3d.addSystem({ id: `odin-hell${nach}`, name: `O.D.I.N.${k ? ' ' + k : ''} (dunkle Augen)`, group: 'O.D.I.N.' }, 'default');
    dice3d.addSystem({ id: `odin-dunkel${nach}`, name: `O.D.I.N.${k ? ' ' + k : ''} (helle Augen)`, group: 'O.D.I.N.' }, 'default');
    dice3d.addDicePreset({ type: 'd6', labels: seiten('dunkel', k), bumpMaps: seiten('relief', k), system: `odin-hell${nach}` });
    dice3d.addDicePreset({ type: 'd6', labels: seiten('hell', k), bumpMaps: seiten('relief', k), system: `odin-dunkel${nach}` });
  }
  await dice3d.addTexture('odin-bakelit', { name: 'O.D.I.N. Bakelit', composite: 'multiply', source: `${WUERFEL}korn.png`, bump: `${WUERFEL}korn_relief.png` });
  const satz = (name, description, background, foreground, edge) => dice3d.addColorset({ name, description, category: 'O.D.I.N.', foreground, background, outline: 'none', edge, texture: 'odin-bakelit', material: 'plastic' });
  await satz('odin-weiss', 'O.D.I.N. weiß (Attribut)', '#ebe2cd', '#26201a', '#d8cbad');
  await satz('odin-bunt', 'O.D.I.N. bunt (Fertigkeit)', BUNT_STANDARD, '#eee5d2', '#4d1812');
  for (const [k, c] of Object.entries(KLASSENFARBE)) await satz(`odin-${k.toLowerCase()}`, `O.D.I.N. ${k}`, c, '#eee5d2', c);
});
/* Bunte Würfel: Farbe der Klasse des würfelnden Agenten. Mit der Einstellung "Spielerfarbe" die Farbe des Spielers,
   Augen dann je nach Helligkeit hell oder dunkel. Gegner und Figuren ohne Klasse würfeln dunkelrot. */
function spielerFarbe(id, ctx) {
  if (!game.settings.get('odin-rpg', 'buntSpielerfarbe')) return null;
  const nutzer = ctx?.user ?? game.messages.get(id)?.author ?? game.user;
  const c = foundry.utils.Color.from(nutzer?.color ?? BUNT_STANDARD);
  if (!Number.isFinite(c.valueOf())) return null;
  const [r, g, b] = c.rgb;
  const hell = 0.299 * r + 0.587 * g + 0.114 * b > 0.6;
  const rand = c.multiply(0.6).css;
  return { colorset: 'custom', background: c.css, foreground: hell ? '#26201a' : '#eee5d2', outline: 'none', edge: rand, texture: 'odin-bakelit', material: 'plastic', system: hell ? 'odin-hell' : 'odin-dunkel' };
}
Hooks.on('diceSoNiceRollStart', (id, ctx) => {
  const msg = game.messages.get(id);
  const actor = msg ? ChatMessage.getSpeakerActor(msg.speaker) : null;
  const kl = klasseVon(actor);
  const nach = kl ? `-${kl.toLowerCase()}` : '';
  const eigen = spielerFarbe(id, ctx);
  if (eigen) eigen.system += nach;
  const bunt = eigen ?? { colorset: kl ? `odin-${kl.toLowerCase()}` : 'odin-bunt', system: `odin-dunkel${nach}` };
  for (const d of ctx.roll?.dice ?? []) {
    if (d.flavor === 'weiss') d.options.appearance = { colorset: 'odin-weiss', system: `odin-hell${nach}` };
    if (d.flavor === 'bunt') d.options.appearance = bunt;
  }
});
