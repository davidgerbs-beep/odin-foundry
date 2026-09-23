// Bögen für Agenten, Gegner und Items (ApplicationV2)
import { DATEN } from './daten.mjs';
import * as A from './aktionen.mjs';
import { generatorDialog } from './import.mjs';
import { baumKontext, knotenUmschalten, steigern, steigerKosten } from './baum.mjs';
import { signaturKontext } from './signatur.mjs';
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
const nachFertName = Object.fromEntries(DATEN.fertigkeiten.map((d) => [d.name.toLowerCase(), d.key]));
/** Kreise wie auf dem Papierbogen: gefüllt, schraffiert (Bonus), der sechste gestrichelt. */
function pips(wert, bonus = 0, max = 6) {
  return Array.from({ length: max }, (_, i) => [i < wert ? (i >= wert - bonus ? 'bonus' : 'an') : '', i === 5 ? 'sechs' : ''].filter(Boolean).join(' '));
}
/** Kästchenleiste: n = 1..max, "an" bis zum aktuellen Wert. */
const kaestchen = (wert, max, cls = 'an') => Array.from({ length: Math.max(0, max) }, (_, i) => ({ n: i + 1, cls: i < wert ? cls : '' }));

export class AgentBogen extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ['odin', 'bogen', 'akte', 'agent'],
    position: { width: 900, height: 900 },
    window: { resizable: true },
    form: { submitOnChange: true },
    actions: {
      probe: AgentBogen.#probe, attribut: AgentBogen.#attribut, grauen: AgentBogen.#grauen, preis: AgentBogen.#preis,
      auffuellen: AgentBogen.#auffuellen, import: AgentBogen.#import, angriff: AgentBogen.#angriff, wirken: AgentBogen.#wirken,
      itemNeu: AgentBogen.#itemNeu, itemBearbeiten: AgentBogen.#itemBearbeiten, itemLoeschen: AgentBogen.#itemLoeschen,
      ruestungToggle: AgentBogen.#ruestungToggle, initiative: AgentBogen.#initiative,
      bearbeiten: AgentBogen.#bearbeiten, kasten: AgentBogen.#kasten, faehigkeit: AgentBogen.#faehigkeit,
      preisKasten: AgentBogen.#preisKasten, knoten: AgentBogen.#knoten, steigern: AgentBogen.#steigern, senken: AgentBogen.#senken,
      laufbahnNeu: AgentBogen.#laufbahnNeu, laufbahnLoeschen: AgentBogen.#laufbahnLoeschen,
    },
  };

  static PARTS = {
    kopf: { template: 'systems/odin-rpg/templates/agent-kopf.hbs' },
    tabs: { template: 'templates/generic/tab-navigation.hbs' },
    akte: { template: 'systems/odin-rpg/templates/agent-akte.hbs', scrollable: [''] },
    einsatz: { template: 'systems/odin-rpg/templates/agent-einsatz.hbs', scrollable: [''] },
    signatur: { template: 'systems/odin-rpg/templates/agent-signatur.hbs', scrollable: [''] },
    notizen: { template: 'systems/odin-rpg/templates/agent-notizen.hbs', scrollable: [''] },
  };

  static TABS = {
    primary: {
      tabs: [{ id: 'akte' }, { id: 'einsatz' }, { id: 'signatur' }, { id: 'notizen' }],
      initial: 'akte',
      labelPrefix: 'ODIN.Tab',
    },
  };

  /** Bearbeitungsmodus: Punkte statt Kreise. Neue Agenten ohne Klasse starten im Bearbeitungsmodus. */
  _bearbeiten = null;
  /** Auf Blatt 3 angezeigter fremder Ast. */
  _fremdSub = '';

  async _prepareContext(options) {
    const ctx = await super._prepareContext(options);
    const actor = this.actor;
    const s = actor.system;
    if (this._bearbeiten === null) this._bearbeiten = !s.klasse;
    const K = DATEN.klassen[s.klasse];
    const items = (t) => actor.items.filter((i) => i.type === t).sort((a, b) => a.sort - b.sort);

    // Fertigkeiten in drei Spalten wie auf Blatt 1
    const alle = [];
    for (const g of DATEN.gruppen) {
      if ((g === 'psi' && s.klasse !== 'Psion') || (g === 'magie' && s.klasse !== 'Thaumaturg')) continue;
      alle.push({ kopf: L(`Gruppe.${g}`) });
      for (const d of DATEN.fertigkeiten.filter((x) => x.gruppe === g)) {
        const f = s.fertigkeiten[d.key];
        alle.push({
          key: d.key, name: fertName(d.key), attr: d.attr, punkte: f.punkte, wert: f.wert,
          pips: pips(f.wert, Math.min(f.wert, f.bonus + f.steig)), pool: `${s.attribute[d.attr].wert}+${f.wert}`, steig: f.steig,
          steigKosten: steigerKosten(actor, 'fert', d.key),
          kern: !!K?.kern.includes(d.key), grund: DATEN.grundausbildung.includes(d.key), hauptgabe: s.hauptgabe === d.key,
          tip: DATEN.beschreibung[d.key] ?? '',
        });
      }
    }
    const pro = Math.ceil(alle.length / 3);
    const fertSpalten = [0, 1, 2].map((i) => alle.slice(i * pro, (i + 1) * pro));

    // Deine Würfel: die stärksten Proben
    const deineWuerfel = alle.filter((x) => x.key && x.wert > 0)
      .map((x) => ({ ...x, w: s.attribute[x.attr].wert, b: x.wert }))
      .sort((a, b) => (b.w + b.b) - (a.w + a.b) || b.b - a.b)
      .slice(0, 10)
      .map((x) => ({ ...x, weiss: Array(x.w).fill(0), bunt: Array(x.b).fill(0) }));

    // Fähigkeiten der Subklasse mit Probe
    const faehigkeiten = (DATEN.faehigkeiten[s.subklasse] ?? []).map((f) => {
      const probe = (f.name.match(/\((.*)\)/) ?? ['', ''])[1];
      const m = /^(ST|GE|KO|IN|WE|WK|CH|MA|GL)\s*\+\s*([^,]+)/.exec(probe);
      return { name: f.name.split(' (')[0], probe, text: f.text, attr: m?.[1] ?? '', fert: m ? (nachFertName[m[2].trim().toLowerCase()] ?? '') : '' };
    });
    const grundausruestung = [K?.ausruestung, DATEN.subAusruestung[s.subklasse]].filter(Boolean).join('; ');

    const klassen = Object.keys(DATEN.klassen);
    Object.assign(ctx, {
      actor, system: s, source: actor.system._source, editable: this.isEditable, bearbeiten: this._bearbeiten,
      akzent: K?.akzent ?? '#5c5140', emblem: K?.emblem ?? '', zweig: K?.zweig ?? 'Occult Dynamics Intelligence Network',
      attribute: DATEN.attribute.map((a) => {
        const x = s.attribute[a];
        return { key: a, name: attrName(a), kurz: DATEN.attrKurz[a] ?? '', ...x, pips: pips(x.wert, Math.min(x.wert, x.bonus)), steigKosten: steigerKosten(actor, 'attr', a) };
      }),
      fertSpalten, deineWuerfel, faehigkeiten, grundausruestung,
      lpKaestchen: kaestchen(s.lp.value, s.lp.max),
      belKaestchen: kaestchen(s.belastung.value, s.belastung.max, 'belastet'),
      psiKaestchen: kaestchen(s.psi.value, s.psi.max),
      meKaestchen: kaestchen(s.me.value, s.me.max),
      preisKaestchen: Array.from({ length: 6 }, (_, i) => ({ n: i + 1, cls: i < s.preisAuto ? 'auto' : (i < s.preisWert ? 'an' : '') })),
      baum: baumKontext(actor, this._fremdSub),
      sig: signaturKontext(actor),
      laufbahn: Object.entries(s.laufbahn ?? {}).filter(([, z]) => z && typeof z === 'object').map(([i, z]) => ({ i, ...z })),
      klassen: Object.fromEntries([['', '–'], ...klassen.map((k) => [k, k])]),
      subklassen: Object.fromEntries([['', '–'], ...(K?.subs ?? Object.values(DATEN.klassen).flatMap((k) => k.subs)).map((x) => [x, x])]),
      raenge: Object.fromEntries(DATEN.raenge.map((r) => [r, r])),
      warnungen: s.warnungen,
      istPsion: s.klasse === 'Psion', istThaumaturg: s.klasse === 'Thaumaturg',
      waffen: items('waffe').map((w) => ({ w, art: L(`Waffe.${w.system.art}`) })),
      ruestungen: items('ruestung'), ausruestung: items('ausruestung'),
      kraefte: [...items('kraft'), ...items('zauber')].map((k) => ({ k, kat: L(`Kategorie.${k.system.kategorie}`), kosten: KATEGORIEN[k.system.kategorie]?.kosten, res: KATEGORIEN[k.system.kategorie]?.res === 'psi' ? 'PSI' : 'ME', probe: `${k.system.attr} + ${fertName(k.system.fertigkeit)}` })),
      signaturen: items('signatur'), knoten: items('knoten'), traumata: items('trauma'), kontakte: items('kontakt'), extraFert: items('fertigkeit'),
      html: await anreichern(actor, ['system.hintergrund', 'system.rekrutierung', 'system.ersterFall', 'system.detail', 'system.anker', 'system.notizen', 'system.signatur', 'system.klassenbaum']),
    });
    return ctx;
  }

  async _preparePartContext(partId, ctx) {
    ctx = await super._preparePartContext(partId, ctx);
    if (ctx.tabs?.[partId]) ctx.tab = ctx.tabs[partId];
    return ctx;
  }

  _onRender(ctx, options) {
    super._onRender?.(ctx, options);
    this.element.querySelector('select.fremd-ast')?.addEventListener('change', (ev) => { this._fremdSub = ev.target.value; this.render(); });
  }

  static #probe(ev, el) { A.fertigkeitsProbe(this.actor, el.dataset.fert); }
  static #attribut(ev, el) { A.fertigkeitsProbe(this.actor, '', true, el.dataset.attr); }
  static #faehigkeit(ev, el) { A.fertigkeitsProbe(this.actor, el.dataset.fert, false, el.dataset.attr); }
  static #grauen() { A.grauenProbe(this.actor); }
  static #preis() { A.preisWurf(this.actor); }
  static #auffuellen() { A.auffuellen(this.actor); }
  static #import() { generatorDialog(this.actor); }
  static #initiative() { this.actor.rollInitiative({ createCombatants: true }); }
  static #preisKasten(ev, el) {
    const s = this.actor.system;
    const n = Number(el.dataset.n);
    if (n <= s.preisAuto) return ui.notifications.info(L('Preis.Auto', { preis: s.preisName, n: s.preisAuto }));
    const neu = n - s.preisAuto;
    this.actor.update({ 'system.preis': s.preis === neu ? neu - 1 : neu });
  }
  static #knoten(ev, el) { knotenUmschalten(this.actor, el.closest('[data-knoten]').dataset.knoten); }
  static #steigern(ev, el) { steigern(this.actor, el.dataset.art, el.dataset.key, 1); }
  static #senken(ev, el) { steigern(this.actor, el.dataset.art, el.dataset.key, -1); }
  static #laufbahnNeu() {
    const n = Math.max(-1, ...Object.keys(this.actor.system.laufbahn ?? {}).map(Number).filter(Number.isFinite)) + 1;
    this.actor.update({ [`system.laufbahn.${n}`]: { datum: new Date().toLocaleDateString('de-DE'), mission: '', ep: 0, fuer: '', rang: this.actor.system.rang } });
  }
  static #laufbahnLoeschen(ev, el) { this.actor.update({ [`system.laufbahn.-=${el.closest('[data-zeile]').dataset.zeile}`]: null }); }
  static #bearbeiten() { this._bearbeiten = !this._bearbeiten; this.render(); }
  /** Klick auf ein Kästchen setzt den Wert; Klick auf das letzte gefüllte nimmt es zurück. */
  static #kasten(ev, el) {
    const pfad = el.closest('[data-pfad]').dataset.pfad;
    const n = Number(el.dataset.n);
    const alt = foundry.utils.getProperty(this.actor, pfad) ?? 0;
    this.actor.update({ [pfad]: alt === n ? n - 1 : n });
  }
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
    classes: ['odin', 'bogen', 'akte', 'gegner'],
    position: { width: 780, height: 820 },
    window: { resizable: true },
    form: { submitOnChange: true },
    actions: { kasten: GegnerBogen.#kasten, pool: GegnerBogen.#pool, poolNeu: GegnerBogen.#poolNeu, poolLoeschen: GegnerBogen.#poolLoeschen, grauenAusloesen: GegnerBogen.#grauen },
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
      akzent: '#5E1B16', quelle: this.actor.getFlag('odin-rpg', 'quelle') ?? '',
      lpKaestchen: kaestchen(s.lp.value, Math.min(s.lp.max, 60)),
    });
    return ctx;
  }

  static #kasten(ev, el) {
    const n = Number(el.dataset.n);
    const alt = this.actor.system.lp.value;
    this.actor.update({ 'system.lp.value': alt === n ? n - 1 : n });
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
