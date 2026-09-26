// Datenmodelle für Actor und Item (TypeDataModel)
import { DATEN } from './daten.mjs';
import { T, rangName } from './sprache.mjs';

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
    for (const a of DATEN.attribute) attribute[a] = new f.SchemaField({ punkte: zahl(0, 0, 5), steig: zahl(0, 0, 6) });
    const fertigkeiten = {};
    for (const x of DATEN.fertigkeiten) fertigkeiten[x.key] = new f.SchemaField({ punkte: zahl(0, 0, 6), steig: zahl(0, 0, 6) });
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
      // Klassenbaum: gekaufte Knoten (ids aus DATEN.baeume)
      baum: new f.ArrayField(new f.StringField({ blank: false })),
      // Signatur der Klasse (Helm, Kristall, Silber, Legenden, Prototypen, Akten), frei strukturiert
      sig: new f.ObjectField(),
      // Laufbahn: Zeilen mit Datum, Mission, EP, ausgegeben für, Rang
      laufbahn: new f.ObjectField(),
    };
  }

  /** Boni aus Subklasse, Kernfertigkeiten und Grundausbildung, Endwerte und abgeleitete Werte. */
  prepareDerivedData() {
    const kl = DATEN.klassen[this.klasse];
    const sub = DATEN.subklassen[this.subklasse] ?? { attr: {}, fert: {} };
    for (const a of DATEN.attribute) {
      const x = this.attribute[a];
      x.bonus = sub.attr[a] ?? 0;
      x.wert = Math.min(6, 1 + x.punkte + x.bonus + x.steig);
    }
    for (const d of DATEN.fertigkeiten) {
      const x = this.fertigkeiten[d.key];
      x.bonus = (kl && DATEN.grundausbildung.includes(d.key) ? 1 : 0) + (kl?.kern.includes(d.key) ? 1 : 0) + (sub.fert[d.key] ?? 0);
      let w = Math.min(6, x.punkte + x.bonus + x.steig);
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
    // Knoten des Klassenbaums: Boni aus passiven Knoten
    const knoten = this.knotenListe;
    const mod = { psi: 0, belastung: 0, lp: 0, me: 0, verteidigung: 0, initiative: 0, ruestung: 0 };
    for (const n of knoten) for (const [k, v] of Object.entries(n.mod ?? {})) mod[k] += v;
    this.lp.max += mod.lp; this.belastung.max += mod.belastung;
    if (this.klasse === 'Psion') this.psi.max += mod.psi;
    if (this.klasse === 'Thaumaturg') this.me.max += mod.me;
    this.initiative += mod.initiative; this.verteidigung += mod.verteidigung;
    this.knotenRuestung = mod.ruestung;
    // Laufende Werte nie über dem Maximum (fertige Agenten starten mit vollen Leisten)
    this.lp.value = Math.min(this.lp.value, this.lp.max);
    this.psi.value = Math.min(this.psi.value, this.psi.max);
    this.me.value = Math.min(this.me.value, this.me.max);
    const kl2 = T().klassen[this.klasse];
    this.preisName = kl2?.preis ?? kl?.preis ?? '';
    this.preisAuto = this.berechnePreisAuto(knoten);
    this.preisWert = Math.min(6, this.preisAuto + this.preis);
    this.rangEp = DATEN.raenge[DATEN.rangEp.reduce((r, ep, i) => (this.ep >= ep ? i : r), 0)];
    this.rangEpName = rangName(this.rangEp);
    this.signaturName = kl2?.signatur ?? kl?.signatur ?? '';
    this.hauptgabe = DATEN.hauptgabe[this.subklasse] ?? '';
    this.rangIndex = RANG_INDEX(this.rang);
  }

  /** Rüstung aus angelegten Rüstungen (die beste zählt) plus Boni. Braucht die Items, deshalb am Actor berechnet. */
  berechneRuestung(items) {
    // Grundrüstung: höchster angelegter Wert; Helm, Schild und Energieschild (zuschlag) kommen obendrauf
    const angelegt = items.filter((i) => i.type === 'ruestung' && i.system.angelegt);
    const grund = angelegt.filter((i) => !i.system.zuschlag).map((i) => i.system.wert);
    const zuschlag = angelegt.filter((i) => i.system.zuschlag).reduce((s, i) => s + (i.system.wert ?? 0), 0);
    this.ruestung = (grund.length ? Math.max(...grund) : 0) + zuschlag + this.ruestungBonus + (this.knotenRuestung ?? 0);
  }

  /** Alle Knoten des eigenen Klassenbaums (Gruppen und alle Subklassen), nach id. */
  get baumDaten() { return DATEN.baeume[this.klasse] ?? null; }
  static knotenIndex(klasse) {
    const B = DATEN.baeume[klasse];
    if (!B) return {};
    const idx = {};
    for (const g of B.gruppen) for (const n of g.knoten) idx[n.id] = { ...n, gruppe: g.id, preisPlus: n.preisPlus ?? g.preisPlus };
    for (const [sub, sb] of Object.entries(B.subklassen)) for (const n of sb.knoten) idx[n.id] = { ...n, subklasse: sub };
    return idx;
  }
  get knotenListe() {
    const idx = AgentModell.knotenIndex(this.klasse);
    return this.baum.map((id) => idx[id]).filter(Boolean);
  }

  /** Automatischer Anteil am Preis der Klasse (Grundregelwerk und Klassenbücher). */
  berechnePreisAuto(knoten) {
    const sig = this.sig ?? {};
    const zeilen = (o) => Object.values(o ?? {}).filter((z) => z && typeof z === 'object');
    const plus = knoten.filter((n) => n.preisPlus).length;
    switch (this.klasse) {
      case 'Psion': return plus;
      case 'Thaumaturg': return plus + (Number(sig.steine) || 0);
      case 'Soldier': return Math.max(0, zeilen(sig.silber).filter((z) => z.besitz).length - 4);
      case 'Agent': return Math.max(0, zeilen(sig.legenden).filter((z) => z.name && z.stand !== 'verbrannt').length - 1) + plus;
      case 'Scientist': return zeilen(sig.prototypen).filter((z) => z.probe).length + plus;
      case 'Investigator': return zeilen(sig.akten).filter((z) => z.stand !== 'geschlossen' && (Number(z.faeden) || 0) >= 3).length + plus;
      default: return 0;
    }
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
    if (this.klasse && DATEN.raenge.indexOf(this.rangEp) > DATEN.raenge.indexOf(this.rang)) w.push(game.i18n.format('ODIN.Warnung.Rang', { rang: rangName(this.rangEp), ep: this.ep }));
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
      initiative: zahl(2, 0, 20), verteidigung: zahl(2, 0, 10), ruestung: zahl(0, 0, 20),
      lp: new f.SchemaField({ value: zahl(8, -99, 999), max: zahl(8, 0, 999) }),
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
  static defineSchema() { return { ...this.basis(), wert: zahl(1, 0, 20), angelegt: new f.BooleanField({ initial: true }), zuschlag: new f.BooleanField({ initial: false }), behinderung: text() }; }
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
