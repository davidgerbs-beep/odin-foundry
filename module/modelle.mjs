// Datenmodelle für Actor und Item (TypeDataModel)
import { DATEN } from './daten.mjs';

const f = foundry.data.fields;
const zahl = (initial = 0, min = 0, max = 99) => new f.NumberField({ required: true, nullable: false, integer: true, initial, min, max });
const text = (initial = '') => new f.StringField({ required: true, blank: true, initial });
const html = () => new f.HTMLField({ required: true, blank: true, initial: '' });
export const RANG_INDEX = (rang) => Math.max(0, DATEN.raenge.indexOf(rang));

/* ------------------------------------------------------------ */
/* Agent                                                        */
/* ------------------------------------------------------------ */
export class AgentModell extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const attribute = {};
    for (const a of DATEN.attribute) attribute[a] = new f.SchemaField({ punkte: zahl(0, 0, 5) });
    const fertigkeiten = {};
    for (const x of DATEN.fertigkeiten) fertigkeiten[x.key] = new f.SchemaField({ punkte: zahl(0, 0, 6) });
    return {
      codename: text(), klarname: text(), klasse: text(), subklasse: text(), rang: text('Kadett'),
      antrieb: text(), alter: text(), herkunft: text(),
      attribute: new f.SchemaField(attribute),
      fertigkeiten: new f.SchemaField(fertigkeiten),
      lp: new f.SchemaField({ value: zahl(7, -99, 99) }),
      belastung: new f.SchemaField({ value: zahl(0, 0, 99) }),
      psi: new f.SchemaField({ value: zahl(0, 0, 99) }),
      me: new f.SchemaField({ value: zahl(0, 0, 99) }),
      preis: zahl(0, 0, 6),
      ruestungBonus: zahl(0, -10, 20),
      ep: zahl(0, 0, 9999), epFrei: zahl(0, 0, 9999), vertrauen: zahl(0, 0, 5),
      geldPrivat: text(), geldDienst: text(),
      hintergrund: html(), rekrutierung: html(), ersterFall: html(), detail: html(), anker: html(),
      notizen: html(), signatur: html(), klassenbaum: html(),
    };
  }

  /** Boni aus Subklasse, Kernfertigkeiten und Grundausbildung, Endwerte und abgeleitete Werte. */
  prepareDerivedData() {
    const kl = DATEN.klassen[this.klasse];
    const sub = DATEN.subklassen[this.subklasse] ?? { attr: {}, fert: {} };
    for (const a of DATEN.attribute) {
      const x = this.attribute[a];
      x.bonus = sub.attr[a] ?? 0;
      x.wert = Math.min(6, 1 + x.punkte + x.bonus);
    }
    for (const d of DATEN.fertigkeiten) {
      const x = this.fertigkeiten[d.key];
      x.bonus = (kl && DATEN.grundausbildung.includes(d.key) ? 1 : 0) + (kl?.kern.includes(d.key) ? 1 : 0) + (sub.fert[d.key] ?? 0);
      let w = Math.min(6, x.punkte + x.bonus);
      if (DATEN.psi.includes(d.key) && this.klasse !== 'Psion') w = 0;
      if (DATEN.magie.includes(d.key) && this.klasse !== 'Thaumaturg') w = 0;
      x.wert = w;
      x.attr = d.attr;
    }
    const A = (k) => this.attribute[k].wert;
    const F = (k) => this.fertigkeiten[k].wert;
    this.lp.max = 6 + A('KO') + F('zaehigkeit');
    this.belastung.max = 4 + A('WK') + A('GL');
    this.psi.max = this.klasse === 'Psion' ? A('WK') + A('WE') + A('IN') : 0;
    this.me.max = this.klasse === 'Thaumaturg' ? A('CH') + A('WE') + A('IN') : 0;
    this.initiative = A('GE');
    this.verteidigung = 1 + Math.floor((A('GE') + F('ausweichen')) / 4);
    this.startkapital = (A('IN') + A('WE')) * 1000;
    this.preisName = kl?.preis ?? '';
    this.signaturName = kl?.signatur ?? '';
    this.hauptgabe = DATEN.hauptgabe[this.subklasse] ?? '';
    this.rangIndex = RANG_INDEX(this.rang);
  }

  /** Rüstung aus angelegten Rüstungen (die beste zählt) plus Boni. Braucht die Items, deshalb am Actor berechnet. */
  berechneRuestung(items) {
    const angelegt = items.filter((i) => i.type === 'ruestung' && i.system.angelegt).map((i) => i.system.wert);
    this.ruestung = (angelegt.length ? Math.max(...angelegt) : 0) + this.ruestungBonus;
  }

  /** Warnungen zu Punktbudgets und Obergrenzen (Änderungsliste 2). */
  get warnungen() {
    const w = [];
    const attrSumme = DATEN.attribute.reduce((s, a) => s + this.attribute[a].punkte, 0);
    const fertSumme = DATEN.fertigkeiten.reduce((s, d) => s + this.fertigkeiten[d.key].punkte, 0);
    if (attrSumme > 12) w.push(game.i18n.format('ODIN.Warnung.AttrSumme', { n: attrSumme }));
    if (fertSumme > 25) w.push(game.i18n.format('ODIN.Warnung.FertSumme', { n: fertSumme }));
    if (this.klasse && this.klasse !== 'Psion' && DATEN.psi.some((k) => this.fertigkeiten[k].punkte > 0)) w.push(game.i18n.localize('ODIN.Warnung.NurPsion'));
    if (this.klasse && this.klasse !== 'Thaumaturg' && DATEN.magie.some((k) => this.fertigkeiten[k].punkte > 0)) w.push(game.i18n.localize('ODIN.Warnung.NurThaumaturg'));
    if (this.klasse === 'Psion') {
      const haupt = this.hauptgabe;
      for (const k of DATEN.psi) if (k !== haupt && k !== 'psi_kampf' && this.fertigkeiten[k].wert > 4) w.push(game.i18n.format('ODIN.Warnung.Nebengabe', { f: game.i18n.localize(`ODIN.Fertigkeit.${k}`) }));
    }
    if (this.subklasse && this.klasse && !DATEN.klassen[this.klasse]?.subs.includes(this.subklasse)) w.push(game.i18n.localize('ODIN.Warnung.Subklasse'));
    return w;
  }
}

/* ------------------------------------------------------------ */
/* Gegner                                                       */
/* ------------------------------------------------------------ */
export class GegnerModell extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      stufe: text('Profi'), ursprung: text('Die Menschen'), grauen: zahl(0, 0, 5), aktionen: zahl(1, 1, 5),
      initiative: zahl(2, 0, 20), verteidigung: zahl(2, 1, 10), ruestung: zahl(0, 0, 20),
      lp: new f.SchemaField({ value: zahl(8, -99, 999), max: zahl(8, 1, 999) }),
      pools: new f.ArrayField(new f.SchemaField({
        name: text(), weiss: zahl(3, 0, 20), bunt: zahl(3, 0, 20), schaden: zahl(0, 0, 30), durchschlag: zahl(0, 0, 10), notiz: text(),
      })),
      beschreibung: html(), besonderheit: html(),
    };
  }
}

/* ------------------------------------------------------------ */
/* Items                                                        */
/* ------------------------------------------------------------ */
class ItemBasis extends foundry.abstract.TypeDataModel {
  static basis() { return { beschreibung: html() }; }
}
export class FertigkeitModell extends ItemBasis {
  static defineSchema() { return { ...this.basis(), attr: text('IN'), wert: zahl(0, 0, 6) }; }
}
export class KraftModell extends ItemBasis {
  static defineSchema() {
    return { ...this.basis(), kategorie: text('klein'), attr: text('WK'), fertigkeit: text('telepathie'), reichweite: text(), dauer: text(), ueberschuss: text() };
  }
}
export class ZauberModell extends ItemBasis {
  static defineSchema() {
    return { ...this.basis(), kategorie: text('trick'), attr: text('IN'), fertigkeit: text('thaumaturgie'), reichweite: text(), dauer: text(), ueberschuss: text() };
  }
}
export class AusruestungModell extends ItemBasis {
  static defineSchema() { return { ...this.basis(), anzahl: zahl(1, 0, 999), preis: text(), verfuegbarkeit: text() }; }
}
export class WaffeModell extends ItemBasis {
  static defineSchema() {
    return { ...this.basis(), art: text('fern'), schaden: zahl(3, 0, 30), durchschlag: zahl(0, 0, 10), reichweite: text(), eigenschaften: text() };
  }
}
export class RuestungModell extends ItemBasis {
  static defineSchema() { return { ...this.basis(), wert: zahl(1, 0, 20), angelegt: new f.BooleanField({ initial: true }), behinderung: text() }; }
}
export class SignaturModell extends ItemBasis {
  static defineSchema() { return { ...this.basis(), art: text(), nummer: text(), zustand: text() }; }
}
export class KnotenModell extends ItemBasis {
  static defineSchema() { return { ...this.basis(), baum: text(), stufe: zahl(1, 1, 5), kosten: zahl(0, 0, 99) }; }
}
export class TraumaModell extends ItemBasis {
  static defineSchema() { return { ...this.basis(), aktiv: new f.BooleanField({ initial: true }) }; }
}
export class KontaktModell extends ItemBasis {
  static defineSchema() { return { ...this.basis(), beziehung: text(), gefallen: zahl(0, 0, 10) }; }
}

export const ITEM_MODELLE = {
  fertigkeit: FertigkeitModell, kraft: KraftModell, zauber: ZauberModell, ausruestung: AusruestungModell, waffe: WaffeModell,
  ruestung: RuestungModell, signatur: SignaturModell, knoten: KnotenModell, trauma: TraumaModell, kontakt: KontaktModell,
};
