// Bögen für Agenten, Gegner und Items (ApplicationV2)
import { DATEN } from './daten.mjs';
import * as A from './aktionen.mjs';
import { generatorDialog } from './import.mjs';
import { attrName, fertName, KATEGORIEN, WAFFEN_ARTEN } from './wuerfel.mjs';

const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2, ItemSheetV2 } = foundry.applications.sheets;
const L = (k, d) => game.i18n.format(`ODIN.${k}`, d ?? {});
const TE = foundry.applications.ux.TextEditor.implementation;

async function anreichern(obj, felder) {
  const out = {};
  for (const f of felder) out[f] = await TE.enrichHTML(foundry.utils.getProperty(obj, f) ?? '', { secrets: true });
  return out;
}

/* ------------------------------------------------------------ */
export class AgentBogen extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ['odin', 'bogen', 'agent'],
    position: { width: 860, height: 820 },
    window: { resizable: true },
    form: { submitOnChange: true },
    actions: {
      probe: AgentBogen.#probe, attribut: AgentBogen.#attribut, grauen: AgentBogen.#grauen, preis: AgentBogen.#preis,
      auffuellen: AgentBogen.#auffuellen, import: AgentBogen.#import, angriff: AgentBogen.#angriff, wirken: AgentBogen.#wirken,
      itemNeu: AgentBogen.#itemNeu, itemBearbeiten: AgentBogen.#itemBearbeiten, itemLoeschen: AgentBogen.#itemLoeschen,
      ruestungToggle: AgentBogen.#ruestungToggle, initiative: AgentBogen.#initiative,
    },
  };

  static PARTS = {
    kopf: { template: 'systems/odin-rpg/templates/agent-kopf.hbs' },
    tabs: { template: 'templates/generic/tab-navigation.hbs' },
    akte: { template: 'systems/odin-rpg/templates/agent-akte.hbs', scrollable: [''] },
    fertigkeiten: { template: 'systems/odin-rpg/templates/agent-fertigkeiten.hbs', scrollable: [''] },
    kampf: { template: 'systems/odin-rpg/templates/agent-kampf.hbs', scrollable: [''] },
    signatur: { template: 'systems/odin-rpg/templates/agent-signatur.hbs', scrollable: [''] },
    notizen: { template: 'systems/odin-rpg/templates/agent-notizen.hbs', scrollable: [''] },
  };

  static TABS = {
    primary: {
      tabs: [{ id: 'akte' }, { id: 'fertigkeiten' }, { id: 'kampf' }, { id: 'signatur' }, { id: 'notizen' }],
      initial: 'akte',
      labelPrefix: 'ODIN.Tab',
    },
  };

  async _prepareContext(options) {
    const ctx = await super._prepareContext(options);
    const actor = this.actor;
    const s = actor.system;
    const items = (t) => actor.items.filter((i) => i.type === t).sort((a, b) => a.sort - b.sort);
    const gruppen = DATEN.gruppen
      .filter((g) => (g !== 'psi' || s.klasse === 'Psion') && (g !== 'magie' || s.klasse === 'Thaumaturg'))
      .map((g) => ({
        id: g, label: L(`Gruppe.${g}`),
        fert: DATEN.fertigkeiten.filter((d) => d.gruppe === g).map((d) => ({
          key: d.key, name: fertName(d.key), attr: d.attr, ...s.fertigkeiten[d.key],
          grund: DATEN.grundausbildung.includes(d.key), hauptgabe: s.hauptgabe === d.key, tip: DATEN.beschreibung[d.key] ?? '',
        })),
      }));
    const klassen = Object.keys(DATEN.klassen);
    Object.assign(ctx, {
      actor, system: s, source: actor.system._source, editable: this.isEditable,
      attribute: DATEN.attribute.map((a) => ({ key: a, name: attrName(a), ...s.attribute[a] })),
      gruppen,
      klassen: Object.fromEntries([['', '–'], ...klassen.map((k) => [k, k])]),
      subklassen: Object.fromEntries([['', '–'], ...(DATEN.klassen[s.klasse]?.subs ?? Object.values(DATEN.klassen).flatMap((k) => k.subs)).map((x) => [x, x])]),
      raenge: Object.fromEntries(DATEN.raenge.map((r) => [r, r])),
      preisStufen: [0, 1, 2, 3, 4, 5, 6].map((i) => ({ i, an: i <= s.preis && i > 0, aktuell: i === s.preis })),
      warnungen: s.warnungen,
      istPsion: s.klasse === 'Psion', istThaumaturg: s.klasse === 'Thaumaturg',
      waffen: items('waffe').map((w) => ({ w, art: L(`Waffe.${w.system.art}`) })),
      ruestungen: items('ruestung'), ausruestung: items('ausruestung'),
      kraefte: [...items('kraft'), ...items('zauber')].map((k) => ({ k, kat: L(`Kategorie.${k.system.kategorie}`), kosten: KATEGORIEN[k.system.kategorie]?.kosten, res: KATEGORIEN[k.system.kategorie]?.res === 'psi' ? 'PSI' : 'ME', probe: `${k.system.attr} + ${fertName(k.system.fertigkeit)}` })),
      signaturen: items('signatur'), knoten: items('knoten'), traumata: items('trauma'), kontakte: items('kontakt'), extraFert: items('fertigkeit'),
      html: await anreichern(actor, ['system.hintergrund', 'system.rekrutierung', 'system.ersterFall', 'system.detail', 'system.anker', 'system.notizen', 'system.signatur', 'system.klassenbaum']),
      lpProzent: Math.max(0, Math.min(100, Math.round(100 * s.lp.value / Math.max(1, s.lp.max)))),
      belProzent: Math.max(0, Math.min(100, Math.round(100 * s.belastung.value / Math.max(1, s.belastung.max)))),
    });
    return ctx;
  }

  async _preparePartContext(partId, ctx) {
    ctx = await super._preparePartContext(partId, ctx);
    if (ctx.tabs?.[partId]) ctx.tab = ctx.tabs[partId];
    return ctx;
  }

  static #probe(ev, el) { A.fertigkeitsProbe(this.actor, el.dataset.fert); }
  static #attribut(ev, el) { A.fertigkeitsProbe(this.actor, '', true, el.dataset.attr); }
  static #grauen() { A.grauenProbe(this.actor); }
  static #preis() { A.preisWurf(this.actor); }
  static #auffuellen() { A.auffuellen(this.actor); }
  static #import() { generatorDialog(this.actor); }
  static #initiative() { this.actor.rollInitiative({ createCombatants: true }); }
  static #angriff(ev, el) { const i = this.actor.items.get(el.closest('[data-item-id]').dataset.itemId); if (i) A.angriff(this.actor, i); }
  static #wirken(ev, el) { const i = this.actor.items.get(el.closest('[data-item-id]').dataset.itemId); if (i) A.wirken(this.actor, i); }
  static async #itemNeu(ev, el) {
    const type = el.dataset.type;
    const [i] = await this.actor.createEmbeddedDocuments('Item', [{ name: game.i18n.localize(`TYPES.Item.${type}`), type }]);
    i?.sheet.render(true);
  }
  static #itemBearbeiten(ev, el) { this.actor.items.get(el.closest('[data-item-id]').dataset.itemId)?.sheet.render(true); }
  static async #itemLoeschen(ev, el) {
    const i = this.actor.items.get(el.closest('[data-item-id]').dataset.itemId);
    if (i) await i.deleteDialog();
  }
  static #ruestungToggle(ev, el) { const i = this.actor.items.get(el.closest('[data-item-id]').dataset.itemId); i?.update({ 'system.angelegt': !i.system.angelegt }); }
}

/* ------------------------------------------------------------ */
export class GegnerBogen extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ['odin', 'bogen', 'gegner'],
    position: { width: 720, height: 700 },
    window: { resizable: true },
    form: { submitOnChange: true },
    actions: { pool: GegnerBogen.#pool, poolNeu: GegnerBogen.#poolNeu, poolLoeschen: GegnerBogen.#poolLoeschen, grauenAusloesen: GegnerBogen.#grauen },
  };
  static PARTS = { haupt: { template: 'systems/odin-rpg/templates/gegner.hbs', scrollable: [''] } };

  async _prepareContext(options) {
    const ctx = await super._prepareContext(options);
    const s = this.actor.system;
    Object.assign(ctx, {
      actor: this.actor, system: s, editable: this.isEditable,
      stufen: Object.fromEntries(['Handlanger', 'Profi', 'Elite', 'Anführer', 'Kreatur'].map((x) => [x, x])),
      urspruenge: Object.fromEntries(['Die Stimme', 'Das Fremde', 'Die Verwandelten', 'Das Alte', 'Die Toten', 'Die Maschine', 'Die Menschen', 'Das Verschobene'].map((x) => [x, x])),
      grauenStufen: Object.fromEntries([[0, L('Grauen.Kein')], [1, L('Grauen.Unheimlich')], [2, L('Grauen.Verstoerend')], [3, L('Grauen.Grauenhaft')], [4, L('Grauen.Wahnsinnig')], [5, L('Grauen.Kosmisch')]]),
      html: await anreichern(this.actor, ['system.beschreibung', 'system.besonderheit']),
      lpProzent: Math.max(0, Math.min(100, Math.round(100 * s.lp.value / Math.max(1, s.lp.max)))),
    });
    return ctx;
  }

  static #pool(ev, el) { A.gegnerPool(this.actor, Number(el.closest('[data-index]').dataset.index)); }
  static #poolNeu() { const p = [...this.actor.system.toObject().pools, { name: L('Gegner.NeuerPool'), weiss: 3, bunt: 3, schaden: 0, durchschlag: 0, notiz: '' }]; this.actor.update({ 'system.pools': p }); }
  static #poolLoeschen(ev, el) { const i = Number(el.closest('[data-index]').dataset.index); const p = this.actor.system.toObject().pools; p.splice(i, 1); this.actor.update({ 'system.pools': p }); }
  static #grauen() {
    const s = this.actor.system;
    if (!s.grauen) return;
    ChatMessage.create({ speaker: ChatMessage.getSpeaker({ actor: this.actor }), content: `<div class="odin-karte"><h3>${foundry.utils.escapeHTML(this.actor.name)}</h3><div class="odin-erg patzer">${L('Gegner.GrauenAus', { stufe: s.grauen })}</div><div class="odin-hinweis">${L('Gegner.GrauenHinweis')}</div></div>` });
  }
}

/* ------------------------------------------------------------ */
export class OdinItemBogen extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ['odin', 'bogen', 'item'],
    position: { width: 520, height: 520 },
    window: { resizable: true },
    form: { submitOnChange: true },
  };
  static PARTS = { haupt: { template: 'systems/odin-rpg/templates/item.hbs', scrollable: [''] } };

  async _prepareContext(options) {
    const ctx = await super._prepareContext(options);
    const item = this.item;
    const psi = item.type === 'kraft';
    Object.assign(ctx, {
      item, system: item.system, typ: item.type, editable: this.isEditable,
      attribute: Object.fromEntries(DATEN.attribute.map((a) => [a, `${a} ${attrName(a)}`])),
      fertigkeiten: Object.fromEntries(DATEN.fertigkeiten.map((d) => [d.key, fertName(d.key)])),
      kategorien: Object.fromEntries(Object.entries(KATEGORIEN).filter(([, k]) => (psi ? k.res === 'psi' : k.res === 'me')).map(([id]) => [id, L(`Kategorie.${id}`)])),
      waffenArten: Object.fromEntries(Object.keys(WAFFEN_ARTEN).map((id) => [id, L(`Waffe.${id}`)])),
      beschreibung: await TE.enrichHTML(item.system.beschreibung ?? '', { secrets: item.isOwner }),
      istKraft: ['kraft', 'zauber'].includes(item.type),
    });
    return ctx;
  }
}
