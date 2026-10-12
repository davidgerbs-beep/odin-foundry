// Halbautomatische Korrektur der Abenteuer nach den überarbeiteten PDF-Bänden (Journalsätze und Gegnerwerte).
//
// Schritt 1, Vorschläge: node werkzeuge/korrektur.mjs vorschlaege <band|alle>
//   Lädt die Bände von odin-rpg.pages.dev (Zwischenspeicher außerhalb des Repos: ODIN_BAENDE, sonst <tmp>/odin-baende),
//   zieht den Text mit pdftotext (poppler) und vergleicht jeden Satz der Journalseiten und jede Zeile der Gegnerwerte
//   mit dem Band. Ergebnis: werkzeuge/korrektur/<band>.md, je Sprache eine Liste „alt → neu“ mit Fundstelle
//   (Journal und Seite, PDF-Seite) und einer Zeile „Freigabe: offen“ je Vorschlag. Ein neuer Lauf behält ja/nein bei.
//   Fehltreffer durch den Zweispaltensatz (Text der Nachbarspalte, Fußzeilen, abgeschnittene Wörter am Rand,
//   Spaltenumbruch mitten im Satz, reine Schreibweise) werden vorab aussortiert und nur gezählt.
// Schritt 2, nach Freigabe: node werkzeuge/korrektur.mjs anwenden <band|alle> [--probelauf]
//   Übernimmt nur Einträge mit „Freigabe: ja“ in odin-abenteuer(-en), die Journale und Akteure in
//   odin-abenteuerpakete(-en) und odin-gegner(-en). Gegnerwerte ziehen die Zahlen nach (Verteidigung, Rüstung, LP,
//   Initiative, Grauen, Würfel der Angriffe). Stellen, die über Formatierung oder Verweise laufen, meldet es als
//   „von Hand“. Braucht classic-level (npm install --no-save classic-level@1.4.1), Foundry vorher beenden.
// Prüfen: node werkzeuge/korrektur.mjs pruefen (Freigabedateien lesbar, ids eindeutig, „alt“ steht noch in den Packs)
// Nachträge: node werkzeuge/korrektur.mjs nachtraege <writer_nachtraege_<Band>.md> … [--probelauf]
//   Für Stellen, die der Satzvergleich nicht findet: je Stelle Absatz alt und neu aus den Buchquellen. Gesucht wird der passende
//   Absatz in den Journalen (zuerst im Ordner des Bandes) und in den Texten der Gegner; die Änderung wird wortweise übertragen,
//   auch wenn das Journal in Kleinigkeiten abweicht. Was sich so nicht sicher übertragen lässt, meldet es als „von Hand“.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { lesePack } from './leveldb.mjs';

const WURZEL = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
export const ZIEL = path.join(WURZEL, 'werkzeuge', 'korrektur');
const QUELLE = 'https://odin-rpg.pages.dev/';

// Bände in der gewünschten Reihenfolge. ordner: oberste Journalordner in odin-abenteuer(-en) und Gegnerordner in
// odin-gegner(-en); abenteuer: Name im Kompendium der Abenteuerpakete; pdf: Band und Handouts.
export const BAENDE = {
  'graue-akten': {
    kuerzel: 'GA', titel: 'Graue Akten',
    de: { ordner: ['Graue Akten'], abenteuer: ['Graue Akten'], pdf: ['buecher/ODIN_14_Graue_Akten.pdf', 'buecher/ODIN_14_Graue_Akten_Handouts.pdf'] },
    en: { ordner: ['Grey Files'], abenteuer: ['Grey Files'], pdf: ['en/books/ODIN_EN_14_Grey_Files.pdf', 'en/books/ODIN_EN_14_Grey_Files_Handouts.pdf'] },
  },
  'nordlicht-1977': {
    kuerzel: 'NL', titel: 'Nordlicht 1977',
    de: { ordner: ['Nordlicht 1977'], abenteuer: ['Nordlicht 1977'], pdf: ['buecher/ODIN_18_Nordlicht_1977.pdf', 'buecher/ODIN_18_Nordlicht_1977_Handouts.pdf'] },
    en: { ordner: ['Nordlicht 1977'], abenteuer: ['Nordlicht 1977'], pdf: ['en/books/ODIN_EN_18_Nordlicht_1977.pdf', 'en/books/ODIN_EN_18_Nordlicht_1977_Handouts.pdf'] },
  },
  'die-tuer': {
    kuerzel: 'DT', titel: 'Die Tür',
    de: { ordner: ['Die Tür'], abenteuer: ['Die Tür'], pdf: ['buecher/ODIN_10_Kampagne_Die_Tuer.pdf', 'buecher/ODIN_11_Die_Tuer_Handouts.pdf'] },
    en: { ordner: ['The Door'], abenteuer: ['The Door'], pdf: ['en/books/ODIN_EN_10_The_Door_Campaign.pdf', 'en/books/ODIN_EN_11_The_Door_Handouts.pdf'] },
  },
  'horte-der-welt': {
    kuerzel: 'HW', titel: 'Horte der Welt',
    de: { ordner: ['Horte der Welt'], abenteuer: ['Horte der Welt'], pdf: ['buecher/ODIN_16_Horte_der_Welt.pdf'] },
    en: { ordner: ['Holds of the World'], abenteuer: ['Holds of the World'], pdf: ['en/books/ODIN_EN_16_Holds_of_the_World.pdf'] },
  },
  schnellstart: {
    kuerzel: 'SS', titel: 'Schnellstart',
    de: { ordner: ['Schnellstart'], abenteuer: ['Schnellstart'], pdf: ['buecher/ODIN_13_Schnellstart.pdf'] },
    en: { ordner: ['Quickstart'], abenteuer: ['Quickstart'], pdf: ['en/books/ODIN_EN_13_Quickstart.pdf'] },
  },
  fremdkoerper: {
    kuerzel: 'FK', titel: 'Fremdkörper (Gegner)', nurGegner: true,
    de: { ordner: ['Fremdkörper'], abenteuer: [], pdf: ['buecher/ODIN_24_Fremdkoerper.pdf'] },
    en: { ordner: ['Foreign Bodies'], abenteuer: [], pdf: ['en/books/ODIN_EN_24_Foreign_Bodies.pdf'] },
  },
  'die-anderen-dienste': {
    kuerzel: 'AD', titel: 'Die anderen Dienste',
    de: { ordner: ['Die anderen Dienste'], abenteuer: ['Die anderen Dienste'], pdf: ['buecher/ODIN_15_Die_anderen_Dienste.pdf'] },
    en: { ordner: ['The Other Services'], abenteuer: ['The Other Services'], pdf: ['en/books/ODIN_EN_15_The_Other_Services.pdf'] },
  },
  // Kräfte, Zauber und Ausrüstung, deren Name im Band steht (Beschreibung satzweise); keine Journale, keine eigenen Gegner
  schattenoffiziere: {
    kuerzel: 'SO', titel: 'Schattenoffiziere (Kräfte, Zauber, Ausrüstung)', nurGegenstaende: true,
    de: { ordner: [], abenteuer: [], pdf: ['buecher/ODIN_19_Schattenoffiziere.pdf'] },
    en: { ordner: [], abenteuer: [], pdf: ['en/books/ODIN_EN_19_Shadow_Officers.pdf'] },
  },
  // Gegner des Bedrohungsatlas im Spielleiterbuch (ohne die Ordner der Bände)
  bedrohungsatlas: {
    kuerzel: 'BA', titel: 'Bedrohungsatlas (Gegner im Spielleiterbuch)', nurGegner: true,
    de: { ordner: ['Die Menschen', 'Die Verwandelten', 'Die Stimme', 'Das Fremde', 'Das Verschobene', 'Die Toten', 'Die Maschine', 'Das Alte'], abenteuer: [], pdf: ['buecher/ODIN_08_Spielleiterbuch.pdf'] },
    en: { ordner: ['The Humans', 'The Transformed', 'The Voice', 'The Alien', 'The Shifted', 'The Dead', 'The Machine', 'The Old'], abenteuer: [], pdf: ['en/books/ODIN_EN_08_Game_Masters_Book.pdf'] },
  },
  einstiegsmission: {
    kuerzel: 'EM', titel: 'Einstiegsmission Nexus-Splitter (Grundregelwerk)',
    de: { ordner: ['Einstiegsmission', 'Nexus-Splitter (Einstiegsmission)'], abenteuer: [], pdf: ['buecher/ODIN_01_Grundregelwerk.pdf'] },
    en: { ordner: ['Intro Mission', 'Nexus Shard (Intro Mission)'], abenteuer: [], pdf: ['en/books/ODIN_EN_01_Core_Rulebook.pdf'] },
  },
  registratur: {
    kuerzel: 'RG', titel: 'Die Registratur (Gegner)', nurGegner: true,
    de: { ordner: ['Die Registratur'], abenteuer: [], pdf: ['buecher/ODIN_22_Registratur.pdf'] },
    en: { ordner: ['The Registry'], abenteuer: [], pdf: ['en/books/ODIN_EN_22_The_Registry.pdf'] },
  },
};
// Nur zum Abgleich: Werte und Sätze, die im Spielleiterbuch (Bedrohungsatlas) stehen, gelten als gefunden.
const ABGLEICH = { de: 'buecher/ODIN_08_Spielleiterbuch.pdf', en: 'en/books/ODIN_EN_08_Game_Masters_Book.pdf' };
const PACKS = {
  de: { abenteuer: 'odin-abenteuer', pakete: 'odin-abenteuerpakete', gegner: 'odin-gegner', kraefte: 'odin-kraefte', zauber: 'odin-zauber', ausruestung: 'odin-ausruestung' },
  en: { abenteuer: 'odin-abenteuer-en', pakete: 'odin-abenteuerpakete-en', gegner: 'odin-gegner-en', kraefte: 'odin-kraefte-en', zauber: 'odin-zauber-en', ausruestung: 'odin-ausruestung-en' },
};
// Packs mit Gegenständen (Feld system.beschreibung), für Bände wie Schattenoffiziere
const GEGENSTAND_PACKS = ['kraefte', 'zauber', 'ausruestung'];
const SPRACHE = { de: 'Deutsch', en: 'Englisch' };

// Schwellen des Satzvergleichs (wie in der Bestandsaufnahme): ab 0,75 gleicher Satz mit Änderung, ab 0,85 „sicher“;
// ab 0,6 „umformuliert“, wenn Anfang und Ende des Satzes im Band stehen
const SCH = 10;
const AEHNLICH = 0.75;
const SICHER = 0.85;
const UMFORMULIERT = 0.6;

// ---------------------------------------------------------------------------------------------------------------
// Vergleich von Folgen (wie difflib.SequenceMatcher ohne Junk-Heuristik), für Zeichen und für Wörter

export class Abgleich {
  constructor(a, b) {
    this.a = a; this.b = b;
    this.b2j = new Map();
    for (let j = 0; j < b.length; j++) {
      let l = this.b2j.get(b[j]);
      if (!l) this.b2j.set(b[j], (l = []));
      l.push(j);
    }
  }

  laengste(alo, ahi, blo, bhi) {
    let bi = alo, bj = blo, bn = 0;
    let j2len = new Map();
    for (let i = alo; i < ahi; i++) {
      const neu = new Map();
      for (const j of this.b2j.get(this.a[i]) ?? []) {
        if (j < blo) continue;
        if (j >= bhi) break;
        const k = (j2len.get(j - 1) ?? 0) + 1;
        neu.set(j, k);
        if (k > bn) { bi = i - k + 1; bj = j - k + 1; bn = k; }
      }
      j2len = neu;
    }
    return [bi, bj, bn];
  }

  bloecke() {
    if (this._bloecke) return this._bloecke;
    const offen = [[0, this.a.length, 0, this.b.length]], fertig = [];
    while (offen.length) {
      const [alo, ahi, blo, bhi] = offen.pop();
      const [i, j, k] = this.laengste(alo, ahi, blo, bhi);
      if (!k) continue;
      fertig.push([i, j, k]);
      if (alo < i && blo < j) offen.push([alo, i, blo, j]);
      if (i + k < ahi && j + k < bhi) offen.push([i + k, ahi, j + k, bhi]);
    }
    fertig.sort((x, y) => x[0] - y[0] || x[1] - y[1]);
    const aus = [];
    let [i1, j1, k1] = [0, 0, 0];
    for (const [i2, j2, k2] of fertig) {
      if (i1 + k1 === i2 && j1 + k1 === j2) k1 += k2;
      else { if (k1) aus.push([i1, j1, k1]); [i1, j1, k1] = [i2, j2, k2]; }
    }
    if (k1) aus.push([i1, j1, k1]);
    aus.push([this.a.length, this.b.length, 0]);
    return (this._bloecke = aus);
  }

  schritte() {
    const aus = [];
    let i = 0, j = 0;
    for (const [ai, bj, n] of this.bloecke()) {
      const art = i < ai && j < bj ? 'ersetzen' : i < ai ? 'loeschen' : j < bj ? 'einfuegen' : null;
      if (art) aus.push([art, i, ai, j, bj]);
      i = ai + n; j = bj + n;
      if (n) aus.push(['gleich', ai, i, bj, j]);
    }
    return aus;
  }

  quote() {
    const m = this.bloecke().reduce((s, b) => s + b[2], 0);
    const n = this.a.length + this.b.length;
    return n ? (2 * m) / n : 1;
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Texte

const ALNUM = /[\p{L}\p{N}]/u;
/** Nur Buchstaben und Ziffern, klein; dazu die Position jedes Zeichens im Original. */
export function normMitIndex(t) {
  let n = '';
  const idx = [];
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (!ALNUM.test(c)) continue;
    const k = c.toLowerCase();
    n += k;
    for (let x = 0; x < k.length; x++) idx.push(i);
  }
  return [n, idx];
}
export const norm = (t) => normMitIndex(t)[0];

// Kopf- und Fußzeilen wie „31 O.D.I.N. Graue Akten“ oder „O.D.I.N. Graue Akten 31“ (ohne Seitenzahl ist es eine Satzzeile)
const FUSS = /^[ \t]*(?:\d{1,3}[ \t]+O\.D\.I\.N\.[ \t]+[^\n]{0,45}?|O\.D\.I\.N\.[ \t]+[^\n]{0,45}?[ \t]+\d{1,3})[ \t]*$/gm;
/** Eine PDF-Seite aus pdftotext: Kopf- und Fußzeilen, Seitenzahlen und Silbentrennung heraus. */
export function bereinigeSeite(t) {
  // Seitenzahlen nur in der ersten und letzten Zeile (Zahlen allein auf einer Zeile sind sonst oft Tabellenwerte)
  return t.replace(FUSS, '').replace(/^\s*\d{1,3}[ \t]*\n/, '').replace(/\n[ \t]*\d{1,3}\s*$/, '\n').replace(/\n{2,}/g, '\n')
    .replace(/([\p{L}\p{N}_])-\n([\p{L}\p{N}_])/gu, '$1$2').normalize('NFC');
}

const ENTITAETEN = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', shy: '' };
const BLOCKENDE = /^<(br|\/p|\/li|\/h\d|\/tr|\/blockquote|\/div)\b/i;

/**
 * Sichtbarer Text einer Journalseite mit Karte zurück ins HTML. Tags werden zu Leerzeichen (Blockenden zu Zeilenumbrüchen),
 * Entitäten zu Zeichen, @UUID[…]{Name} zu Name. Jedes Zeichen kennt seine Stelle im HTML [von, bis) und ob es
 * künstlich (Tag) oder Teil eines Verweises ist; Leerraum ist zu einem Leerzeichen bzw. einem Umbruch verdichtet.
 */
export function textKarte(html) {
  const roh = [];
  const schiebe = (c, von, bis, art = '') => roh.push({ c, von, bis, art });
  let i = 0;
  while (i < html.length) {
    const c = html[i];
    if (c === '<') {
      const e = html.indexOf('>', i);
      const ende = e < 0 ? html.length : e + 1;
      schiebe(BLOCKENDE.test(html.slice(i, ende)) ? '\n' : ' ', i, ende, 'tag');
      i = ende;
      continue;
    }
    if (html.startsWith('@UUID[', i)) {
      const m = /^@UUID\[[^\]]*\](?:\{([^}]*)\})?/.exec(html.slice(i));
      if (m) {
        const start = i + m[0].length - (m[1] !== undefined ? m[1].length + 1 : 0);
        if (m[1] !== undefined) for (let k = 0; k < m[1].length; k++) schiebe(m[1][k], start + k, start + k + 1, 'verweis');
        i += m[0].length;
        continue;
      }
    }
    if (c === '&') {
      const m = /^&(#x[0-9a-f]+|#\d+|[a-z]+);/i.exec(html.slice(i, i + 12));
      if (m) {
        const n = m[1];
        const z = n[0] === '#' ? String.fromCodePoint(n[1].toLowerCase() === 'x' ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10)) : ENTITAETEN[n.toLowerCase()];
        if (z !== undefined) {
          for (const e of z.split('')) schiebe(e, i, i + m[0].length);
          i += m[0].length;
          continue;
        }
      }
    }
    schiebe(c, i, i + 1);
    i++;
  }
  // Leerraum verdichten: ein Lauf wird zu „\n“, wenn er einen Umbruch enthält, sonst zu „ “
  const zeichen = [];
  for (let k = 0; k < roh.length;) {
    if (!/\s/.test(roh[k].c)) {
      zeichen.push({ ...roh[k], c: roh[k].c.normalize('NFC') });
      k++;
      continue;
    }
    let l = k, umbruch = false, tag = false;
    while (l < roh.length && /\s/.test(roh[l].c)) { umbruch ||= roh[l].c === '\n'; tag ||= roh[l].art === 'tag'; l++; }
    zeichen.push({ c: umbruch ? '\n' : ' ', von: roh[k].von, bis: roh[l - 1].bis, art: tag ? 'tag' : '' });
    k = l;
  }
  // Zeilenränder ohne Leerzeichen
  const aus = [];
  for (let k = 0; k < zeichen.length; k++) {
    const z = zeichen[k];
    if (z.c === ' ' && (k === 0 || k === zeichen.length - 1 || zeichen[k - 1].c === '\n' || zeichen[k + 1].c === '\n')) continue;
    aus.push(z);
  }
  return { text: aus.map((z) => z.c).join(''), zeichen: aus };
}

export const text = (html) => textKarte(html).text;

/** Sätze einer Seite (wie in der Bestandsaufnahme): je Zeile an Satzenden getrennt, mindestens 25 Buchstaben. */
export function saetze(t) {
  const aus = [];
  for (const zeile of t.split('\n')) {
    for (let s of zeile.trim().split(/(?<=[.!?…])\s+(?=[A-ZÄÖÜ„"(])/)) {
      s = s.trim();
      if (s.replace(/[^\p{L}\p{N}_]/gu, '').length >= 25) aus.push(s);
    }
  }
  return aus;
}

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const kurzId = (...teile) => createHash('sha1').update(teile.join('\u0000')).digest('hex').slice(0, 6);

// ---------------------------------------------------------------------------------------------------------------
// PDF-Text: alle Seiten eines Bandes hintereinander, normalisiert, mit Seitenzahlen und Schindel-Index

export class BandText {
  /** dateien: [{ name, kurz, seiten: [text] }] */
  constructor(dateien) {
    let roh = '';
    this.seiten = [];
    for (const d of dateien) {
      d.seiten.forEach((s, i) => {
        this.seiten.push({ pos: roh.length, datei: d.name, kurz: d.kurz, seite: i + 1 });
        roh += bereinigeSeite(s) + '\n';
      });
    }
    this.roh = roh;
    [this.N, this.NI] = normMitIndex(roh);
    this.schindel = new Map();
    for (let i = 0; i < this.N.length - SCH; i += 3) {
      const k = this.N.slice(i, i + SCH);
      const l = this.schindel.get(k);
      if (l) l.push(i); else this.schindel.set(k, [i]);
    }
  }

  /** Seite zu einer Stelle in roh */
  seite(pos) {
    let lo = 0, hi = this.seiten.length - 1;
    while (lo < hi) {
      const m = (lo + hi + 1) >> 1;
      if (this.seiten[m].pos <= pos) lo = m; else hi = m - 1;
    }
    return this.seiten[lo];
  }

  /** Beste Stelle für einen normalisierten Satz: [quote, [s0, s1], innere Unterschiede] */
  besteStelle(ns) {
    const treffer = new Map();
    for (let i = 0; i < Math.max(1, ns.length - SCH); i += 2) {
      for (const p of this.schindel.get(ns.slice(i, i + SCH)) ?? []) {
        const k = Math.floor((p - i) / 40);
        treffer.set(k, (treffer.get(k) ?? 0) + 1);
      }
    }
    if (!treffer.size) return [0, null, []];
    let blk = null, best = 0;
    for (const [k, n] of treffer) if (n > best) { best = n; blk = k; }
    const N = this.N;
    const a = Math.max(0, blk * 40 - 200), b = Math.min(N.length, blk * 40 + ns.length + 200);
    const bl = new Abgleich(ns, N.slice(a, b)).bloecke().filter((x) => x[2] >= 4);
    if (!bl.length) return [0, null, []];
    const [a0, b0] = bl[0], [aL, bLe, nL] = bl[bl.length - 1];
    const s0 = Math.max(0, a + b0 - a0), s1 = Math.min(N.length, a + bLe + nL + (ns.length - aL - nL));
    const sm = new Abgleich(ns, N.slice(s0, s1));
    const innen = sm.schritte().filter((o) => o[0] !== 'gleich')
      .filter((o) => !(o[1] <= 3 && o[3] <= 3) && !(o[2] >= ns.length - 3 && o[4] >= s1 - s0 - 3));
    // Kern: erster und letzter sicherer Treffer, dazu wie viel vom Satz davor und danach ohne Treffer bleibt
    const kb = sm.bloecke().filter((x) => x[2] >= 6);
    const kern = kb.length ? { von: s0 + kb[0][1], kopf: kb[0][0], bis: s0 + kb.at(-1)[1] + kb.at(-1)[2], schwanz: ns.length - kb.at(-1)[0] - kb.at(-1)[2] } : null;
    return [sm.quote(), [s0, s1], innen, kern];
  }

  /**
   * Originaltext (roh) zu einer normalisierten Spanne, auf ganze Wörter erweitert. Hat der Satz vorn oder hinten keinen
   * Treffer, geht es im Band bis zum Satzanfang bzw. Satzende, wenn das nah genug liegt; sonst endet die Spanne am letzten
   * Treffer (Spalten- oder Seitenumbruch), und der Rand ohne Treffer bleibt, wie er ist.
   * Rückgabe: { von, bis, erweitert, randKopf, randSchwanz }
   */
  spanne(s0, s1, kern = null, satz = '') {
    const { roh, NI } = this;
    let von = NI[s0], bis = NI[Math.min(s1, NI.length) - 1] + 1, erweitert = false, randKopf = false, randSchwanz = false;
    if (kern && kern.schwanz > 0) {
      let ab = NI[kern.bis - 1] + 1;
      while (ab > 0 && ALNUM.test(roh[ab]) && ALNUM.test(roh[ab - 1])) ab--; // Treffer endet mitten im Wort
      if (/[.!?…]["“”»)]*\s$/.test(roh.slice(Math.max(0, ab - 3), ab))) ab -= 2; // Satzende direkt davor
      const m = /[.!?…]["“”»)]*(?=\s|$)/.exec(roh.slice(ab, ab + kern.schwanz * 3 + 120));
      if (m && /[.!?…]["“”»)]*$/.test(satz) && !/[▪•]/.test(roh.slice(ab, ab + m.index))) { bis = ab + m.index + m[0].length; erweitert ||= kern.schwanz > 3; } else if (kern.schwanz > 3) { bis = ab; randSchwanz = true; }
    }
    if (kern && kern.kopf > 0) {
      let bis0 = NI[kern.von];
      while (bis0 > 0 && ALNUM.test(roh[bis0 - 1]) && bis0 < roh.length && ALNUM.test(roh[bis0])) bis0++;
      const vorne = roh.slice(Math.max(0, bis0 - kern.kopf * 2 - 20), bis0);
      const m = [...vorne.matchAll(/[.!?…:]["“”»)]*\s+/g)].at(-1);
      if (m && /^["„(]?[\p{Lu}\d]/u.test(satz) && !/[▪•]/.test(vorne.slice(m.index))) { von = bis0 - vorne.length + m.index + m[0].length; erweitert ||= kern.kopf > 3; } else if (kern.kopf > 3) { von = bis0; randKopf = true; }
    }
    while (von > 0 && ALNUM.test(roh[von - 1])) von--;
    while (bis < roh.length && ALNUM.test(roh[bis])) bis++;
    return { von, bis, erweitert, randKopf, randSchwanz };
  }
}

/** Seiten einer PDF-Datei: zwischengespeichert, mit pdftotext -raw (Lesereihenfolge) gelesen */
export function ladePdf(rel, { ordner = process.env.ODIN_BAENDE || path.join(os.tmpdir(), 'odin-baende') } = {}) {
  fs.mkdirSync(ordner, { recursive: true });
  const name = path.basename(rel);
  const pdf = path.join(ordner, name);
  if (!fs.existsSync(pdf)) {
    console.log(`lade ${QUELLE}${rel}`);
    execFileSync('curl', ['-sSfL', '--retry', '3', '-o', `${pdf}.teil`, QUELLE + rel]);
    fs.renameSync(`${pdf}.teil`, pdf);
  }
  const txt = path.join(ordner, name.replace(/\.pdf$/, '.raw.txt'));
  if (!fs.existsSync(txt) || fs.statSync(txt).mtimeMs < fs.statSync(pdf).mtimeMs) execFileSync('pdftotext', ['-raw', '-enc', 'UTF-8', pdf, txt]);
  const seiten = fs.readFileSync(txt, 'utf8').split('\f');
  if (seiten.length > 1 && !seiten[seiten.length - 1].trim()) seiten.pop();
  const pruef = createHash('sha256').update(fs.readFileSync(pdf)).digest('hex').slice(0, 12);
  return { name: name.replace(/\.pdf$/, ''), kurz: /Handouts/.test(name) ? 'Handouts' : 'Band', seiten, pruef };
}

// ---------------------------------------------------------------------------------------------------------------
// Foundry: Journalseiten und Gegner eines Bandes

const PACKORDNER = path.join(WURZEL, 'packs');

function ordnerWurzel(ordner) {
  return (id) => {
    let o = ordner.get(id);
    while (o?.folder && ordner.get(o.folder)) o = ordner.get(o.folder);
    return o?.name;
  };
}

/** Journalseiten der Ordner eines Bandes aus odin-abenteuer(-en): [{ journal, seite, html }] */
export function journalSeiten(spr, cfg, packs = PACKORDNER) {
  const d = lesePack(path.join(packs, PACKS[spr].abenteuer));
  const ordner = new Map(), seiten = new Map(), journale = [];
  for (const [k, v] of d) {
    if (k.startsWith('!folders!')) ordner.set(v._id, v);
    else if (k.startsWith('!journal.pages!')) seiten.set(v._id, v);
    else if (k.startsWith('!journal!')) journale.push(v);
  }
  const wurzel = ordnerWurzel(ordner);
  const aus = [];
  for (const j of journale.filter((j) => cfg.ordner.includes(wurzel(j.folder))).sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name))) {
    for (const s of j.pages.map((id) => seiten.get(id)).filter(Boolean).sort((a, b) => a.sort - b.sort)) {
      if (s.type === 'text' && s.text?.content) aus.push({ journal: j.name, seite: s.name, html: s.text.content });
    }
  }
  return aus;
}

/** Gegner eines Bandes: Ordner in odin-gegner(-en) und Akteure der Abenteuerpakete, gleiche Fassung nur einmal */
export function gegnerDesBandes(spr, cfg, packs = PACKORDNER) {
  const aus = new Map();
  const nimm = (a) => {
    if (a.type !== 'gegner') return;
    const k = `${a.name}\u0000${a.system?.besonderheit ?? ''}\u0000${a.system?.initiative ?? ''}`;
    if (!aus.has(k)) aus.set(k, a);
  };
  const g = lesePack(path.join(packs, PACKS[spr].gegner));
  const ordner = new Map([...g].filter(([k]) => k.startsWith('!folders!')).map(([, v]) => [v._id, v]));
  const wurzel = ordnerWurzel(ordner);
  for (const [k, a] of g) if (k.startsWith('!actors!') && cfg.ordner.includes(wurzel(a.folder))) nimm(a);
  for (const ad of lesePack(path.join(packs, PACKS[spr].pakete)).values()) if (cfg.abenteuer.includes(ad.name)) (ad.actors ?? []).forEach(nimm);
  return [...aus.values()];
}

/** Zeilen der Gegnerwerte aus dem Feld „besonderheit“: [{ label, wert, html }] */
/** Gegenstände (Kräfte, Zauber, Ausrüstung), deren Name im Band steht: als Seiten { journal: Packart, seite: Name, html } */
export function gegenstaendeDesBandes(spr, pdf, packs = PACKORDNER) {
  const aus = [];
  for (const art of GEGENSTAND_PACKS) {
    for (const [k, v] of lesePack(path.join(packs, PACKS[spr][art]))) {
      if (!k.startsWith('!items!') || !v.name || v.name.length < 5 || !v.system?.beschreibung || !pdf.roh.includes(v.name)) continue;
      aus.push({ journal: art, seite: v.name, html: v.system.beschreibung });
    }
  }
  return aus;
}

export function zeilen(html) {
  const aus = [];
  for (const m of (html ?? '').matchAll(/<p><strong>(.*?)<\/strong>\s*(.*?)<\/p>/gs)) {
    const label = text(m[1]).trim().replace(/:$/, '').trim();
    const wert = text(m[2]).replace(/\s+/g, ' ').trim();
    if (wert && !/^(Stufe laut Buch|Level per book|Rank in the book)/.test(label)) aus.push({ label, wert, html: m[2] });
  }
  return aus;
}

// ---------------------------------------------------------------------------------------------------------------
// Vorschläge für Journalsätze

const woerter = (t) => t.split(/\s+/).filter(Boolean);
const istNurZeichen = (t) => !norm(t);

/**
 * Wortweiser Unterschied zwischen dem Satz in Foundry und dem Text im Band, mit Filter für Fehltreffer.
 * Rückgabe: { neu, aenderungen: [[alt, neu]], verworfen: { grund: anzahl } }
 * kontext: { seite: norm. Text der Journalseite, band: norm. Text aller Seiten des Bandes, pdf: BandText, von, bis }
 */
export function vergleicheSatz(alt, pdfText, kontext = {}) {
  const aw = woerter(alt);
  let pw = woerter(pdfText);
  // Ein, zwei Wörter des nächsten oder vorigen Satzes am Rand weg (der Satz im Band ist kürzer)
  const satzende = (w) => /[.!?…]["“”»)]*$/.test(w);
  if (satzende(alt)) {
    const k = pw.findLastIndex((w, i) => i < pw.length - 1 && satzende(w));
    if (k >= 0 && k >= pw.length - 3) pw = pw.slice(0, k + 1);
  }
  if (/^["„(]?\p{Lu}/u.test(alt) && satzende(alt)) {
    const k = pw.findIndex(satzende);
    if (k >= 0 && k <= 1 && k < pw.length - 1 && !satzende(aw[k] ?? '')) pw = pw.slice(k + 1);
  }
  const sm = new Abgleich(aw.map(norm), pw.map(norm));
  const verworfen = {};
  const raus = (g) => { verworfen[g] = (verworfen[g] ?? 0) + 1; };
  const ops = [];
  for (const [art, i1, i2, j1, j2] of sm.schritte()) {
    if (art === 'gleich') continue;
    const vorher = aw.slice(i1, i2).join(' '), nachher = pw.slice(j1, j2).join(' ');
    const nv = norm(vorher), nn = norm(nachher);
    if (nv === nn) { raus('Schreibweise'); continue; }
    // Rand: Ausschnitt im Band beginnt oder endet mitten in einem Wort oder ein, zwei Zeichen daneben
    const rand = (i1 === 0 && j1 === 0) || (i2 === aw.length && j2 === pw.length);
    if (rand && nv.length + nn.length <= 3) { raus('Rand'); continue; }
    // Rand ohne Treffer im Band (Umbruch): was dort in Foundry steht, bleibt
    if ((art === 'loeschen' && kontext.randKopf && i1 === 0 && j1 === 0) || (kontext.randSchwanz && i2 === aw.length && j2 === pw.length)) { raus('Spaltenumbruch'); continue; }
    if (/O\.D\.I\.N\.[ \t]+[^\n]{0,45}[ \t]+\d{1,3}\b|\b\d{1,3}[ \t]+O\.D\.I\.N\./.test(nachher)) { raus('Fußzeile'); continue; }
    // Aufzählungszeichen gibt es in den Journalen nicht: Text eines Kastens oder einer Liste daneben
    if (/[▪•]/.test(nachher)) { raus('Nachbartext'); return { neu: alt, aenderungen: [], verworfen }; }
    // Text der Nachbarspalte: steht so auf derselben Journalseite oder an anderer Stelle des Bandes in Foundry
    const nachbar = nn.length >= 12 && (kontext.seite?.includes(nn) || (nn.length >= 20 && kontext.band?.includes(nn)));
    // Spaltenumbruch: der fehlende Teil steht im Band kurz davor oder danach
    // (Tabellenzeilen ohne Satzzeichen: auch kurze Teile, aber nur in der näheren Umgebung)
    const tabelle = !/[.!?…:]/.test(alt);
    const weit = tabelle ? 300 : 3000;
    const umbruch = nv.length >= (tabelle ? 2 : rand ? 4 : 15) && kontext.pdf && kontext.pdf.N.slice(Math.max(0, kontext.von - weit), kontext.bis + weit).includes(nv)
      && !kontext.pdf.N.slice(kontext.von, kontext.bis).includes(nv);
    if (art === 'einfuegen' && nachbar) { raus('Nachbartext'); continue; }
    if (art === 'loeschen' && umbruch) { raus('Spaltenumbruch'); continue; }
    // ersetzt: der verdrängte Teil steht im Band gleich daneben (eingeschobener Text der Nachbarspalte)
    // (der eingeschobene Text steht schon an anderer Stelle in Foundry, also genügt hier ein kürzerer Rest)
    const nah = nv.length >= 6 && kontext.pdf && kontext.pdf.N.slice(Math.max(0, kontext.von - 3000), kontext.bis + 3000).includes(nv) && !kontext.pdf.N.slice(kontext.von, kontext.bis).includes(nv);
    if (art === 'ersetzen' && nachbar && (!nv || umbruch || nah)) { raus('Nachbartext'); continue; }
    if (art === 'loeschen' && rand && nv.length <= 3) { raus('Rand'); continue; }
    // eine einzelne Zahl ohne weiteren Unterschied: Seitenzahl, Zelle oder Fußnote aus dem Satz
    if (art !== 'ersetzen' && /^\d{1,3}$/.test(nv || nn)) { raus('Zahl aus dem Satz'); continue; }
    // Tabellenzeile: eingefügte Wörter, die alle schon auf der Seite stehen (Spaltenköpfe, Nachbarzellen)
    // (auch beim Ersetzen, solange keine Zahl dazukommt: dann sind nur Zellen vertauscht, etwa Überschrift und Spaltenkopf)
    if (tabelle && art !== 'loeschen' && !/\d/.test(nachher) && kontext.seite && pw.slice(j1, j2).every((w) => !norm(w) || kontext.seite.includes(norm(w)) || norm(alt).includes(norm(w)))) { raus('Nachbartext'); continue; }
    ops.push({ i1, i2, j1, j2, nachher: pw.slice(j1, j2) });
  }
  // Wörter neben einer Änderung übernehmen die Satzzeichen des Bandes (etwa ein neues Satzende)
  const zeichenBand = new Map();
  for (const [art, i1, i2, j1] of sm.schritte()) {
    if (art !== 'gleich') continue;
    for (let k = 0; k < i2 - i1; k++) zeichenBand.set(i1 + k, pw[j1 + k]);
  }
  const nachbarn = new Set(ops.flatMap((o) => [o.i1 - 1, o.i2]));
  const nw = [];
  let i = 0;
  const gleich = (bis) => { for (; i < bis; i++) nw.push(nachbarn.has(i) && zeichenBand.has(i) ? zeichenBand.get(i) : aw[i]); };
  for (const o of ops) {
    gleich(o.i1);
    nw.push(...o.nachher);
    i = o.i2;
  }
  gleich(aw.length);
  // Satzende aus Foundry behalten, wenn der Satz im Band weiterläuft
  const ende = /[.!?…]["“”»)]*$/.exec(alt);
  if (ende && ops.length && nw.length && !/[.!?…]["“”»)]*$/.test(nw.at(-1))) nw[nw.length - 1] = nw.at(-1).replace(/[,;:]$/, '') + ende[0];
  return { neu: nw.join(' '), aenderungen: unterschiede(alt, nw.join(' ')), verworfen };
}

/** Wortweise Änderungen zwischen zwei Fassungen: [[alt, neu]] (leer, wenn gleich) */
export function unterschiede(alt, neu) {
  const aw = woerter(alt), nw = woerter(neu);
  return new Abgleich(aw, nw).schritte().filter((o) => o[0] !== 'gleich').map(([, i1, i2, j1, j2]) => [aw.slice(i1, i2).join(' '), nw.slice(j1, j2).join(' ')]);
}

/** Satzvorschläge einer Sprache */
export function satzVorschlaege(seiten, pdf, abgleich) {
  const bandNorm = seiten.map((s) => norm(text(s.html))).join('\n');
  const nachSatz = new Map();
  const statistik = { seiten: seiten.length, saetze: 0, gleich: 0, verworfen: {}, nichtGefunden: 0 };
  const hinweise = [];
  for (const s of seiten) {
    const seiteNorm = norm(`${s.journal} ${s.seite} ${text(s.html)}`);
    for (const satzRoh of saetze(text(s.html))) {
      const satz = satzRoh.replace(/\s+/g, ' ');
      statistik.saetze++;
      const ns = norm(satz);
      if (pdf.N.includes(ns) || abgleich?.N.includes(ns)) { statistik.gleich++; continue; }
      const [q, st, innen, kern] = pdf.besteStelle(ns);
      // umformuliert: weniger ähnlich, aber Anfang und Ende des Satzes stehen im Band
      const umformuliert = q < AEHNLICH && q >= UMFORMULIERT && kern && kern.kopf <= 3 && kern.schwanz <= 3;
      if (q < AEHNLICH && !umformuliert) { statistik.nichtGefunden++; continue; }
      if (!innen.length) { statistik.gleich++; continue; }
      const { von, bis, erweitert, randKopf, randSchwanz } = pdf.spanne(st[0], st[1], kern, satz);
      const imBand = pdf.roh.slice(von, bis).replace(/\s+/g, ' ').trim();
      const ohneSatz = seiteNorm.replace(ns, ' ');
      const v = vergleicheSatz(satz, imBand, { seite: ohneSatz, band: bandNorm.replace(ns, ' '), pdf, von: st[0], bis: st[1], randKopf, randSchwanz });
      for (const [g, n] of Object.entries(v.verworfen)) if (!v.aenderungen.length) statistik.verworfen[g] = (statistik.verworfen[g] ?? 0) + n;
      if (!v.aenderungen.length) continue;
      const fund = pdf.seite(von);
      // Fertigkeitslisten der Agenten (1947 und 1977 nebeneinander) sind im Zweispaltensatz nicht sicher zu lesen
      if ((satz.match(/\p{L} \d[,.]/gu) ?? []).length >= 4 && v.aenderungen.length >= 2) {
        hinweise.push(`„${s.journal}“ › „${s.seite}“, ${fundPdf(fund)}: Liste mit Werten weicht ab („${satz.slice(0, 80)}…“), bitte mit der Tabelle im Band vergleichen.`);
        continue;
      }
      const alt = nachSatz.get(satz);
      if (alt) { if (!alt.fundstellen.some(([j, x]) => j === s.journal && x === s.seite)) alt.fundstellen.push([s.journal, s.seite]); continue; }
      nachSatz.set(satz, {
        art: 'satz', alt: satz, neu: v.neu, quote: q,
        umformuliert,
        stufe: q >= SICHER && !erweitert && !Object.keys(v.verworfen).some((g) => g !== 'Schreibweise') ? 'sicher' : 'prüfen',
        fundstellen: [[s.journal, s.seite]], pdf: fund,
      });
    }
  }
  return { vorschlaege: [...nachSatz.values()], hinweise: [...new Set(hinweise)], statistik };
}

// ---------------------------------------------------------------------------------------------------------------
// Vorschläge für Gegnerwerte

/** Kurzname für die Suche im Band: ohne Jahreszahl, ohne Zusatz nach Komma oder „als“ */
export const kurzname = (n) => n.replace(/\s*\((19\d\d)\)$/, '').split(/,| als | as | alias /)[0].trim();

const labelMuster = (l) => new RegExp('(?:^|[\\s.])' + woerter(l).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s*') + '\\s*:?\\s', 'g');

/** Wert einer Zeile im Werteblock des Bandes: Text nach dem Label bis zum nächsten bekannten Label */
export function wertImBlock(block, label, alleLabels) {
  const m = labelMuster(label).exec(block);
  if (!m) return null;
  const rest = block.slice(m.index + m[0].length, m.index + m[0].length + 700);
  let ende = rest.length;
  for (const l of alleLabels) {
    if (l === label) continue;
    const mm = labelMuster(l).exec(rest);
    if (mm && mm.index < ende) ende = mm.index;
  }
  return rest.slice(0, ende).replace(/\s+/g, ' ').trim().replace(/[.;]$/, '');
}

const GRUNDLABEL = ['Initiative', 'Angriff', 'Attack', 'Verteidigung / Rüstung / LP', 'Defence / Armour / HP', 'Defense / Armor / HP', 'Grauen', 'Horror',
  'Besonderheit', 'Special', 'Schwäche', 'Weakness', 'Verhalten', 'Behaviour', 'Behavior', 'Spuren', 'Signs', 'Traces', 'Kräfte', 'Powers', 'Fertigkeiten', 'Skills', 'Wert', 'Value', 'Angabe'];

/** Gegnervorschläge einer Sprache */
export function gegnerVorschlaege(gegner, pdf, abgleich) {
  const vorschlaege = [], hinweise = [];
  const statistik = { gegner: 0, zeilen: 0, gleich: 0 };
  for (const a of gegner) {
    const s = a.system ?? {};
    const rows = zeilen(s.besonderheit);
    if (s.initiative !== undefined && s.initiative !== null && typeof s.lp === 'object') rows.push({ label: 'Initiative', wert: String(s.initiative), html: null });
    if (!rows.length) continue;
    statistik.gegner++;
    const name = norm(kurzname(a.name));
    const lagen = [];
    if (name.length >= 4) {
      for (const q of [pdf, abgleich].filter(Boolean)) for (let p = q.N.indexOf(name); p >= 0; p = q.N.indexOf(name, p + 1)) lagen.push({ q, p });
    }
    if (!lagen.length) { hinweise.push(`Gegner „${a.name}“: Name im Band nicht gefunden, Werte nicht geprüft.`); continue; }
    const bereich = lagen.map(({ q, p }) => q.N.slice(Math.max(0, p - 500), p + 5000)).join(' ');
    const fehlt = [];
    for (const r of rows) {
      statistik.zeilen++;
      const nw = norm(r.wert);
      if (bereich.includes(nw) || (r.label === 'Initiative' && bereich.includes('initiative' + nw))) { statistik.gleich++; continue; }
      fehlt.push(r);
    }
    if (!fehlt.length) continue;
    // Werteblock im Band: ab dem Namen bis vor die nächste Initiative (der nächste Block), höchstens 5000 Zeichen.
    // Gilt nur, wenn die Initiative bald nach dem Namen kommt und dazwischen kein Verweis auf den Bedrohungsatlas steht.
    const labels = [...new Set([...rows.map((r) => r.label), ...GRUNDLABEL])];
    let besterBlock = null, besteZahl = -1, atlas = false;
    for (const { p } of lagen.filter((l) => l.q === pdf)) {
      const von = pdf.NI[p];
      // nur der Name als Überschrift: am Zeilenanfang, Zeile nicht viel länger als der Name
      const zeile = pdf.roh.slice(pdf.roh.lastIndexOf('\n', von) + 1, (pdf.roh.indexOf('\n', von) + 1 || pdf.roh.length + 1) - 1);
      if (!zeile.trimStart().startsWith(pdf.roh.slice(von, von + 1)) || zeile.trim().length > kurzname(a.name).length + 40) continue;
      let block = pdf.roh.slice(von, von + 5000);
      const ini = [...block.matchAll(/(?:^|\s)Initiative\b/g)];
      if (!ini.length || ini[0].index > 1500) continue;
      if (/Bedrohungsatlas|Threat Atlas/.test(block.slice(0, ini[0].index))) { atlas = true; continue; }
      if (ini[1]) block = block.slice(0, ini[1].index);
      const nb = norm(block);
      const zahl = rows.filter((r) => nb.includes(norm(r.wert))).length;
      if (zahl > besteZahl) { besteZahl = zahl; besterBlock = { block, von }; }
    }
    if (!besterBlock) {
      hinweise.push(`Gegner „${a.name}“: ${atlas ? 'Der Band verweist auf Werte aus dem Bedrohungsatlas' : 'Kein Werteblock im Band gefunden'}; in Foundry ohne Gegenstück im Band: ${fehlt.map((r) => r.label).join(', ')}.`);
      continue;
    }
    for (const r of fehlt) {
      let neu = null;
      if (besterBlock) {
        if (r.label === 'Initiative') neu = /Initiative\s*:?\s*(\d+)/.exec(besterBlock.block)?.[1] ?? null;
        else neu = wertImBlock(besterBlock.block, r.label, labels);
      }
      const passt = neu && (r.label === 'Initiative' || /\d\s*\/\s*\d/.test(r.wert) || new Abgleich(norm(r.wert), norm(neu)).quote() >= 0.35);
      if (!passt) {
        hinweise.push(`Gegner „${a.name}“, Zeile „${r.label}“: „${r.wert}“ steht so nicht im Band, Wert im Band nicht sicher gefunden.`);
        continue;
      }
      if (norm(neu) === norm(r.wert)) continue;
      if (/\.$/.test(r.wert) && !/[.!?]$/.test(neu)) neu += '.';
      vorschlaege.push({
        art: 'gegner', name: a.name, label: r.label, alt: r.wert, neu, stufe: 'prüfen',
        pdf: pdf.seite(besterBlock.von + Math.max(0, besterBlock.block.indexOf(neu.slice(0, 12)))),
      });
    }
  }
  return { vorschlaege, hinweise, statistik };
}

// ---------------------------------------------------------------------------------------------------------------
// Freigabedatei (Markdown)

export const eintragsId = (kuerzel, spr, v) => `${kuerzel}-${spr}-${kurzId(spr, v.art, v.art === 'gegner' ? v.name : '', v.art === 'gegner' ? v.label : '', v.alt)}`;
const anzeige = (aenderungen) => aenderungen.map(([a, n]) => `«${a || '(nichts)'}» → «${n || '(gestrichen)'}»`).join('; ');
function fundPdf(p) { return p ? `${p.kurz} S. ${p.seite}` : 'PDF ?'; }

/** Liest eine Freigabedatei: [{ id, spr, art, freigabe, alt, neu, daten }] */
export function leseFreigabe(md) {
  const aus = [];
  let spr = null, akt = null;
  for (const zeile of md.split('\n')) {
    const sp = /^## (Deutsch|Englisch)\b/.exec(zeile);
    if (sp) { spr = sp[1] === 'Deutsch' ? 'de' : 'en'; akt = null; continue; }
    if (/^##(#)? /.test(zeile)) { akt = null; continue; }
    const kopf = /^#### (\S+)/.exec(zeile);
    if (kopf) { akt = { id: kopf[1], spr, freigabe: 'offen' }; aus.push(akt); continue; }
    if (!akt) continue;
    let m;
    if ((m = /^Freigabe:\s*(\S+)/.exec(zeile))) akt.freigabe = m[1].toLowerCase().replace(/[^a-zäöü]/g, '');
    else if ((m = /^- alt: (.*)$/.exec(zeile))) akt.alt = m[1].trim();
    else if ((m = /^- neu: (.*)$/.exec(zeile))) akt.neu = m[1].trim();
    else if ((m = /^<!-- daten: (.*) -->$/.exec(zeile))) { akt.daten = JSON.parse(m[1]); akt.art = akt.daten.art; }
  }
  return aus;
}

/** Schreibt die Freigabedatei eines Bandes; vorhandene Entscheidungen (ja/nein) bleiben erhalten */
export function schreibeFreigabe(band, cfg, teile, alt = [], nachlauf = false) {
  const entscheidung = new Map(alt.filter((e) => e.freigabe !== 'offen').map((e) => [e.id, e]));
  const z = [];
  z.push(`# Korrekturvorschläge: ${cfg.titel}${nachlauf ? ' (Nachlauf)' : ''}`, '');
  z.push(`Erzeugt mit \`node werkzeuge/korrektur.mjs vorschlaege ${band}${nachlauf ? ' --nachlauf' : ''}\` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).`);
  if (nachlauf) z.push(`Nachlauf nach neuen Fassungen der Bände: Die Liste \`${band}.md\` mit ihren Entscheidungen bleibt, wie sie ist; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. \`anwenden ${band}\` nimmt beide Dateien.`);
  z.push(cfg.nurGegenstaende ? 'Verglichen wird jeder Satz der Beschreibung von Kräften, Zaubern und Ausrüstung in Foundry, deren Name im Band steht, mit dem Text des Bandes.'
    : 'Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.', '');
  z.push('**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,');
  z.push('übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit');
  z.push(`\`node werkzeuge/korrektur.mjs anwenden ${band} --probelauf\` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von`);
  z.push('„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung');
  z.push('oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.');
  z.push('Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die');
  z.push('Änderungslisten der Writer da.', '');
  const benutzt = new Set();
  for (const t of teile) {
    z.push(`## ${SPRACHE[t.spr]}`, '');
    const ss = t.saetze.statistik, gs = t.gegner?.statistik;
    const verw = Object.entries(ss?.verworfen ?? {}).map(([g, n]) => `${g} ${n}`).join(', ') || 'keine';
    z.push(`Bände: ${t.pdfs.map((p) => `${p.name} (Seiten ${p.seiten.length}, Prüfsumme ${p.pruef})`).join(', ')}.`, '');
    if (ss) {
      z.push(`${cfg.nurGegenstaende ? 'Gegenstände mit Namen im Band' : 'Journalseiten'} ${ss.seiten}, Sätze ${ss.saetze}, davon gleich ${ss.gleich}, im Band nicht gefunden ${ss.nichtGefunden} (umgeschrieben, gestrichen oder nur in Foundry).`);
      z.push(`Vorschläge zu Sätzen: ${t.saetze.vorschlaege.length} (sicher ${t.saetze.vorschlaege.filter((v) => v.stufe === 'sicher').length}). Als Fehltreffer aussortiert: ${verw}.`);
    }
    if (gs) z.push(`Gegner ${gs.gegner} mit ${gs.zeilen} Zeilen, gleich ${gs.zeilen ? gs.gleich : 0}; Vorschläge ${t.gegner.vorschlaege.length}.`);
    z.push(`Hinweise ohne Vorschlag: ${(t.saetze.hinweise?.length ?? 0) + (t.gegner?.hinweise.length ?? 0)}.`);
    z.push('');
    const abschnitt = (titel, liste) => {
      if (!liste.length) return;
      z.push(`### ${titel}`, '');
      for (const v of liste) {
        let id = eintragsId(BAENDE[band].kuerzel, t.spr, v);
        while (benutzt.has(id)) id += 'x';
        benutzt.add(id);
        const e = entscheidung.get(id);
        const neu = e?.neu && e.alt === v.alt ? e.neu : v.neu;
        const wo = v.art === 'satz' ? v.fundstellen.map(([j, s]) => (j === s ? `„${j}“` : `„${j}“ › „${s}“`)).join('; ')
          : v.art === 'gegenstand' ? v.fundstellen.map(([a, n]) => `${PACKS[t.spr][a]} › „${n}“`).join('; ') : `Gegner „${v.name}“, Zeile „${v.label}“`;
        z.push(`#### ${id} · ${wo} · ${fundPdf(v.pdf)} · ${v.stufe}${v.umformuliert ? ', umformuliert' : ''}`);
        z.push(`Freigabe: ${e?.freigabe ?? 'offen'}`, '');
        z.push(`- alt: ${v.alt}`, `- neu: ${neu}`, `- Änderung: ${anzeige(unterschiede(v.alt, neu))}`);
        const daten = v.art === 'gegner' ? { art: 'gegner', name: v.name, label: v.label } : { art: v.art, fundstellen: v.fundstellen };
        z.push(`<!-- daten: ${JSON.stringify(daten)} -->`, '');
      }
    };
    abschnitt(cfg.nurGegenstaende ? 'Kräfte, Zauber, Ausrüstung' : 'Journalsätze', t.saetze.vorschlaege);
    abschnitt('Gegnerwerte', t.gegner?.vorschlaege ?? []);
    const hinweise = [...(t.saetze.hinweise ?? []), ...(t.gegner?.hinweise ?? [])];
    if (hinweise.length) {
      z.push('### Hinweise ohne Vorschlag', '', 'Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.', '');
      for (const h of hinweise) z.push(`- ${h}`);
      z.push('');
    }
  }
  const verloren = [...entscheidung.keys()].filter((id) => !benutzt.has(id));
  return { md: z.join('\n').replace(/\n+$/, '\n'), verloren };
}

// ---------------------------------------------------------------------------------------------------------------
// Anwenden

/**
 * Ersetzt einen Satz im HTML einer Journalseite wortweise, an jeder Stelle, an der er steht (ganze Wörter).
 * Rückgabe { html, status: 'ok'|'schon'|'fehlt'|'von Hand', grund, stellen }
 */
export function ersetzeSatz(html, alt, neu) {
  const { text: t, zeichen } = textKarte(html);
  const flach = t.replace(/\n/g, ' ');
  const lagen = [];
  for (let p = flach.indexOf(alt); p >= 0; p = flach.indexOf(alt, p + alt.length)) {
    if (!ALNUM.test(flach[p - 1] ?? ' ') && !ALNUM.test(flach[p + alt.length] ?? ' ')) lagen.push(p);
  }
  if (!lagen.length) return { html, status: flach.includes(neu) ? 'schon' : 'fehlt' };
  // Satzanfang verloren: „alt“ beginnt groß, „neu“ klein (etwa wenn der Band den Satz an „O.D.I.N.“ getrennt hat)
  if (/^\p{Lu}/u.test(alt) && /^\p{Ll}/u.test(neu)) return { html, status: 'von Hand', grund: '„neu“ beginnt klein, der Satzanfang fehlt wohl' };
  const aw = woerter(alt), nw = woerter(neu);
  const schritte = new Abgleich(aw, nw).schritte();
  const edits = [];
  for (const pos of lagen) {
  // Wortgrenzen im Satz
  const wo = [];
  for (const m of alt.matchAll(/\S+/g)) wo.push([pos + m.index, pos + m.index + m[0].length]);
  for (const [art, i1, i2, j1, j2] of schritte) {
    if (art === 'gleich') continue;
    const neuText = esc(nw.slice(j1, j2).join(' '));
    let von, bis, rein;
    if (i1 < i2) {
      von = wo[i1][0]; bis = wo[i2 - 1][1]; rein = neuText;
      if (j1 === j2) {
        // gestrichene Wörter samt einem Leerzeichen
        if (zeichen[bis]?.c === ' ' && zeichen[bis].art !== 'tag') bis++;
        else if (zeichen[von - 1]?.c === ' ' && zeichen[von - 1].art !== 'tag') von--;
      }
    } else {
      // Einfügen hinter dem vorigen Wort oder vor dem ersten
      if (i1 > 0) { von = bis = wo[i1 - 1][1]; rein = ' ' + neuText; } else { von = bis = wo[0][0]; rein = neuText + ' '; }
    }
    const betroffen = zeichen.slice(von, bis);
    if (betroffen.some((z) => z.art)) return { html, status: 'von Hand', grund: 'Änderung läuft über Formatierung oder einen Verweis' };
    const hv = von < bis ? zeichen[von].von : (von > 0 ? zeichen[von - 1].bis : zeichen[0].von);
    const hb = von < bis ? zeichen[bis - 1].bis : hv;
    if (i1 === i2 && von > 0 && zeichen[von - 1].art) return { html, status: 'von Hand', grund: 'Einfügestelle an Formatierung oder Verweis' };
    edits.push([hv, hb, rein]);
  }
  }
  let aus = html;
  for (const [hv, hb, rein] of edits.sort((x, y) => y[0] - x[0])) aus = aus.slice(0, hv) + rein + aus.slice(hb);
  if (!textKarte(aus).text.replace(/\n/g, ' ').includes(neu)) return { html, status: 'von Hand', grund: 'Ergebnis nicht wie erwartet' };
  // „neu“ reicht in den Nachbarsatz: derselbe Satz stünde danach doppelt
  const zaehle = (t) => { const z = new Map(); for (const x of saetze(t.replace(/\n/g, ' ')).filter((x) => x.length > 30)) z.set(x, (z.get(x) ?? 0) + 1); return z; };
  const vorher = zaehle(flach);
  for (const [x, n] of zaehle(textKarte(aus).text)) if (n > 1 && n > (vorher.get(x) ?? 0)) return { html, status: 'von Hand', grund: `Ergebnis verdoppelt einen Satz („${x.slice(0, 50)}…“)` };
  return { html: aus, status: 'ok', stellen: lagen.length };
}

/** Zahlen aus einer Werte-Zeile in die Felder des Gegners übernehmen. Rückgabe: Liste der Änderungen als Text */
export function zieheZahlenNach(system, label, wert) {
  const aus = [];
  const setze = (feld, neu, ziel = system) => {
    if (ziel[feld] !== neu) { aus.push(`${feld}: ${JSON.stringify(ziel[feld])} → ${JSON.stringify(neu)}`); ziel[feld] = neu; }
  };
  if (/^(Verteidigung|Defen[cs]e)\b/.test(label)) {
    const m = /(\d+)\s*\/\s*(\d+)[^/]*\/\s*(\d+)/.exec(wert);
    if (m) {
      setze('verteidigung', +m[1]); setze('ruestung', +m[2]);
      system.lp ??= {};
      if (system.lp.max !== +m[3]) { aus.push(`lp: ${system.lp.max} → ${+m[3]}`); system.lp.max = +m[3]; system.lp.value = +m[3]; }
    } else aus.push('Verteidigung / Rüstung / LP nicht lesbar, Zahlen von Hand prüfen');
  } else if (label === 'Initiative') {
    if (/^\d+$/.test(wert)) setze('initiative', +wert);
  } else if (/^(Grauen|Horror)$/.test(label)) {
    // „Keines. Würfelt selbst gegen Unheimlich (1)“: der Gegner selbst hat kein Grauen, die Zahl ist der Wurf der Leute
    const m = /\((\d+)\)/.exec(wert);
    if (/^(Kein|None|No\b)/.test(wert)) setze('grauen', 0);
    else if (m) setze('grauen', +m[1]);
  } else if (/^(Angriff|Attack|Psi)/.test(label)) {
    const angriffe = [...wert.matchAll(/(?:^|,\s*(?:oder|or)\s+|;\s*|,\s*)([^,;]+?)\s+(\d+)\s*\+\s*(\d+)(?:,\s*(?:Schaden|[Dd]amage)\s*(\d+))?/g)];
    const pools = system.pools ?? [];
    angriffe.forEach((m, i) => {
      const name = m[1].replace(/^(oder|or)\s+/i, '').trim();
      let pool = pools.find((p) => p.name.toLowerCase() === name.toLowerCase()) ?? (label === 'Psi' ? pools.find((p) => p.name === 'Psi') : null);
      // umbenannte Waffe: gleiche Zahl von Angriffen und Pools, dann nach Reihenfolge
      if (!pool && angriffe.length === pools.length && label !== 'Psi') {
        pool = pools[i];
        aus.push(`Pool „${pool.name}“ heißt jetzt „${name}“`);
        pool.name = name;
      }
      if (!pool) { aus.push(`Würfel „${name} ${m[2]} + ${m[3]}“ ohne passenden Pool, von Hand prüfen`); return; }
      for (const [f, v] of [['weiss', +m[2]], ['bunt', +m[3]], ...(m[4] ? [['schaden', +m[4]]] : [])]) {
        if (pool[f] !== v) { aus.push(`${pool.name}.${f}: ${pool[f]} → ${v}`); pool[f] = v; }
      }
    });
  }
  return aus;
}

/** Ändert eine Zeile der Gegnerwerte (und die Zahlenfelder dazu). Rückgabe { status, nachgezogen } */
export function ersetzeZeile(system, label, alt, neu) {
  if (label === 'Initiative' && !zeilen(system.besonderheit).some((r) => r.label === 'Initiative')) {
    if (String(system.initiative) === neu) return { status: 'schon', nachgezogen: [] };
    if (String(system.initiative) !== alt) return { status: 'fehlt', nachgezogen: [] };
    return { status: 'ok', nachgezogen: zieheZahlenNach(system, label, neu) };
  }
  const passend = zeilen(system.besonderheit).filter((x) => x.label === label);
  if (passend.some((x) => x.wert === neu)) return { status: 'schon', nachgezogen: [] };
  const r = passend.find((x) => x.wert === alt);
  if (!r) return { status: 'fehlt', nachgezogen: [] };
  if (/<[^>]+>|@UUID/.test(r.html)) return { status: 'von Hand', grund: 'Zeile enthält Formatierung oder Verweise', nachgezogen: [] };
  const m = [...system.besonderheit.matchAll(/<p><strong>(.*?)<\/strong>(\s*)(.*?)<\/p>/gs)].find((x) => text(x[1]).trim().replace(/:$/, '').trim() === label && x[3] === r.html);
  const start = m.index + m[0].length - 4 - m[3].length;
  system.besonderheit = system.besonderheit.slice(0, start) + esc(neu) + system.besonderheit.slice(start + m[3].length);
  return { status: 'ok', nachgezogen: zieheZahlenNach(system, label, neu) };
}

/** Übernimmt die freigegebenen Einträge eines Bandes in die Packs (Map key → doc, wird verändert). */
export function wendeAn(eintraege, packs) {
  const bericht = [];
  for (const e of eintraege) {
    const p = packs[e.spr];
    const stellen = [];
    if (e.art === 'satz') {
      const fund = new Set(e.daten.fundstellen.map(([j, s]) => `${j}\u0000${s}`));
      const journale = new Map([...p.abenteuer].filter(([k]) => k.startsWith('!journal!')).map(([, v]) => [v._id, v]));
      for (const [k, s] of p.abenteuer) {
        if (!k.startsWith('!journal.pages!')) continue;
        const j = journale.get(k.slice(15).split('.')[0]);
        if (j && fund.has(`${j.name}\u0000${s.name}`) && s.text?.content) stellen.push({ wo: `${PACKS[e.spr].abenteuer}: ${j.name} › ${s.name}`, seite: s, pack: 'abenteuer', key: k });
      }
      for (const [k, ad] of p.pakete) {
        for (const j of ad.journal ?? []) for (const s of j.pages ?? []) {
          if (fund.has(`${j.name}\u0000${s.name}`) && s.text?.content) stellen.push({ wo: `${PACKS[e.spr].pakete}: ${ad.name} › ${j.name} › ${s.name}`, seite: s, pack: 'pakete', key: k });
        }
      }
      for (const st of stellen) {
        const r = ersetzeSatz(st.seite.text.content, e.alt, e.neu);
        if (r.status === 'ok') { st.seite.text.content = r.html; p.geaendert.add(st.pack); }
        bericht.push({ id: e.id, wo: st.wo, status: r.status, grund: r.grund });
      }
    } else if (e.art === 'begriff') {
      // Pack über seinen Namen: ein schon geladenes (abenteuer, gegner …) oder zusätzlich
      const art = Object.entries(PACKS[e.spr]).find(([, n]) => n === e.daten.pack)?.[0] ?? `pack:${e.daten.pack}`;
      p[art] ??= lesePack(path.join(PACKORDNER, e.daten.pack));
      const doc = p[art].get(e.daten.key);
      if (doc) {
        const n = ersetzeInFeldern(doc, e.alt, e.neu, !!e.daten.ganzesFeld);
        if (n) p.geaendert.add(art);
        bericht.push({ id: e.id, wo: `${e.daten.pack}: ${doc.name ?? e.daten.key}`, status: n ? 'ok' : JSON.stringify(doc).includes(e.neu) ? 'schon' : 'fehlt' });
        stellen.push(doc);
      }
    } else if (e.art === 'gegenstand') {
      for (const [art, name] of e.daten.fundstellen) {
        for (const [k, v] of p[art] ?? []) if (k.startsWith('!items!') && v.name === name && v.system?.beschreibung) stellen.push({ wo: `${PACKS[e.spr][art]}: ${name}`, item: v, pack: art });
      }
      for (const st of stellen) {
        const r = ersetzeSatz(st.item.system.beschreibung, e.alt, e.neu);
        if (r.status === 'ok') { st.item.system.beschreibung = r.html; p.geaendert.add(st.pack); }
        bericht.push({ id: e.id, wo: st.wo, status: r.status, grund: r.grund });
      }
    } else {
      for (const [k, a] of p.gegner) if (k.startsWith('!actors!') && a.type === 'gegner' && a.name === e.daten.name) stellen.push({ wo: `${PACKS[e.spr].gegner}: ${a.name}`, akteur: a, pack: 'gegner' });
      for (const ad of p.pakete.values()) for (const a of ad.actors ?? []) if (a.type === 'gegner' && a.name === e.daten.name) stellen.push({ wo: `${PACKS[e.spr].pakete}: ${ad.name} › ${a.name}`, akteur: a, pack: 'pakete' });
      for (const st of stellen) {
        const r = ersetzeZeile(st.akteur.system, e.daten.label, e.alt, e.neu);
        if (r.status === 'ok') p.geaendert.add(st.pack);
        bericht.push({ id: e.id, wo: st.wo, status: r.status, grund: [r.grund, ...r.nachgezogen].filter(Boolean).join('; ') });
      }
    }
    if (!stellen.length) bericht.push({ id: e.id, wo: '', status: 'fehlt', grund: 'Fundstelle nicht in den Packs' });
  }
  return bericht;
}

// ---------------------------------------------------------------------------------------------------------------
// Nachträge des Writers: Absatz alt und neu aus den Buchquellen, für Stellen, die der Satzvergleich nicht findet

/** Markdown der Buchquellen als Text: Aufzählung, Fett, Kursiv, Links und Tabellenstriche heraus */
export function mdText(s) {
  let t = s.trim().replace(/^(?:[-*>]\s+|#+\s+|\d+\.\s+)/, '');
  // Satzbefehle der Buchquellen: [entry - Name Untertitel] und [table Spaltenköpfe @ Breiten]
  t = t.replace(/^\[entry\s*-?\s*(.*)\]$/, '$1').replace(/^\[table\s+(.*?)(?:\s+@[\d\s]*)?\]$/, '$1');
  if (/\s\|\s/.test(t)) t = t.replace(/^\|/, '').replace(/\|$/, '').split('|').map((x) => x.trim()).filter(Boolean).join(' ');
  return t.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\*\*([^*]*)\*\*/g, '$1').replace(/(^|[\s(„"])\*([^*\s][^*]*)\*/g, '$1$2')
    .replace(/\\([\\`*_[\]()#+\-.!|])/g, '$1').replace(/\s+/g, ' ').trim();
}

/** Liest eine Nachtragsdatei: [{ spr, ort, alt, neu }] (alt und neu als Text) */
export function leseNachtraege(md) {
  const aus = [];
  let spr = null, akt = null;
  for (const zeile of md.split('\n')) {
    const sp = /^## (Deutsch|Englisch)\b/.exec(zeile);
    if (sp) { spr = sp[1] === 'Deutsch' ? 'de' : 'en'; akt = null; continue; }
    const k = /^### (.*)$/.exec(zeile);
    if (k && spr) { akt = { spr, ort: k[1].trim(), alt: '', neu: null }; aus.push(akt); continue; }
    if (!akt) continue;
    let m;
    if ((m = /^\*\*alt:\*\*\s?(.*)$/.exec(zeile))) akt.alt = mdText(m[1]);
    else if ((m = /^\*\*neu:\*\*\s?(.*)$/.exec(zeile))) akt.neu = mdText(m[1]);
  }
  return aus.filter((e) => e.neu !== null);
}

/**
 * Überträgt die Änderung alt → neu (Absatz aus dem Band) auf einen Absatz in Foundry, der vom alten Absatz in Kleinigkeiten
 * abweichen darf (Satzzeichen, Anführungszeichen, schon übernommene Vorschläge). Verglichen wird wortweise über die
 * normalisierten Wörter; die neuen Wörter kommen aus dem Band. Rückgabe: { neu } oder { konflikt }.
 */
export function uebertrage(alt, neu, absatz) {
  const aw = woerter(alt), nw = woerter(neu), fw = woerter(absatz);
  const ak = aw.map(norm), nk = nw.map(norm), fk = fw.map(norm);
  // alt → Foundry und neu → Foundry: welches Wort steht wo im Journal
  const karte = (k) => {
    const z = new Array(k.length).fill(-1);
    for (const [i, j, n] of new Abgleich(k, fk).bloecke()) for (let x = 0; x < n; x++) z[i + x] = j + x;
    return z;
  };
  const zuF = karte(ak), nzuF = karte(nk);
  const zusammen = (f) => f.length && f.every((x) => x >= 0) && f.at(-1) - f[0] === f.length - 1;
  let ops = [];
  for (const [art, i1, i2, j1, j2] of new Abgleich(ak, nk).schritte()) {
    if (art === 'gleich') continue;
    let a1 = i1, a2 = i2, b1 = j1, b2 = j2;
    // Nachbarwörter mit geändertem Satzzeichen (etwa ein neues Satzende) gehören dazu
    if (a1 > 0 && b1 > 0 && aw[a1 - 1] !== nw[b1 - 1]) { a1--; b1--; }
    if (a2 < aw.length && b2 < nw.length && aw[a2] !== nw[b2]) { a2++; b2++; }
    const vorige = ops.at(-1);
    if (vorige && a1 <= vorige.a2) { vorige.a2 = Math.max(vorige.a2, a2); vorige.b2 = Math.max(vorige.b2, b2); continue; }
    ops.push({ a1, a2, b1, b2 });
  }
  // Schon im Journal (etwa über einen freigegebenen Vorschlag): neue Wörter stehen dort, alte nicht mehr
  ops = ops.filter((o) => {
    const neuDa = o.b1 === o.b2 || zusammen(nzuF.slice(o.b1, o.b2));
    const altWeg = o.a1 === o.a2 || zuF.slice(o.a1, o.a2).every((x) => x < 0);
    const nurSatzzeichen = ak.slice(o.a1, o.a2).join('') === nk.slice(o.b1, o.b2).join('');
    // (auch wenn die neuen Wörter im Journal nicht an derselben Stelle zugeordnet sind, aber dort stehen)
    const neuIrgendwo = o.b1 < o.b2 && norm(absatz).includes(nk.slice(o.b1, o.b2).join(''));
    return !((neuDa || neuIrgendwo) && altWeg) && !(nurSatzzeichen && neuDa);
  });
  if (!ops.length) return { neu: absatz };
  const edits = [];
  for (const o of ops) {
    const rein = nw.slice(o.b1, o.b2);
    if (o.a1 < o.a2) {
      const f = zuF.slice(o.a1, o.a2);
      if (!zusammen(f)) return { konflikt: `„${aw.slice(o.a1, o.a2).join(' ')}“ steht so nicht im Journal` };
      edits.push([f[0], f.at(-1) + 1, rein]);
    } else if (o.a1 > 0 && zuF[o.a1 - 1] >= 0) edits.push([zuF[o.a1 - 1] + 1, zuF[o.a1 - 1] + 1, rein]);
    else if (o.a1 < aw.length && zuF[o.a1] >= 0) edits.push([zuF[o.a1], zuF[o.a1], rein]);
    else return { konflikt: 'Einfügestelle nicht im Journal' };
  }
  edits.sort((x, y) => y[0] - x[0]);
  for (let k = 1; k < edits.length; k++) if (edits[k][1] > edits[k - 1][0]) return { konflikt: 'Änderungen überlappen' };
  const out = [...fw];
  for (const [von, bis, rein] of edits) out.splice(von, bis - von, ...rein);
  return { neu: out.join(' ') };
}

/**
 * Fügt hinter dem Block (li, p), dessen Text genau ankerText ist, einen gleichartigen Block mit neuText ein. Beginnt der Anker mit
 * einem fetten Etikett („Hinweis:“) und der neue Text auch, wird es genauso ausgezeichnet. Rückgabe: neues HTML oder null.
 */
export function fuegeAbsatzEin(html, ankerText, neuText) {
  const { text: t, zeichen } = textKarte(html);
  const zeilen = t.split('\n');
  let pos = 0, treffer = [];
  for (const z of zeilen) { if (z.trim() === ankerText.trim()) treffer.push(pos + z.indexOf(z.trim())); pos += z.length + 1; }
  if (treffer.length !== 1) return null;
  const start = zeichen[treffer[0]].von;
  const offen = [...html.slice(0, start).matchAll(/<(li|p)\b[^>]*>/g)].at(-1);
  if (!offen) return null;
  const tag = offen[1], ende = html.indexOf(`</${tag}>`, start);
  if (ende < 0) return null;
  const nach = ende + tag.length + 3;
  const innen = html.slice(offen.index + offen[0].length, ende);
  const etikett = /^<(b|strong)>([^<]*?):\s*<\/\1>/.exec(innen);
  const m = /^([^:]{1,40}):\s+(.*)$/s.exec(neuText);
  const inhalt = etikett && m ? `<${etikett[1]}>${esc(m[1])}:</${etikett[1]}> ${esc(m[2])}` : esc(neuText);
  return html.slice(0, nach) + `<${tag}>${inhalt}</${tag}>` + html.slice(nach);
}

/** Teilt Absätze mit mehreren Listenpunkten („… - Hinweis: …“) in einzelne Punkte und ordnet alte und neue Punkte einander zu. */
export function teileListe(e) {
  const teile = (x) => (x ? x.split(/\s-\s(?=[„"(\p{Lu}])/u) : []);
  const a = teile(e.alt), n = teile(e.neu);
  if (a.length <= 1 && n.length <= 1) return [e];
  const aus = [];
  let i = 0;
  for (let j = 0; j < n.length; j++) {
    // nächster alter Punkt, der zu diesem neuen passt (gleich oder ähnlich), sonst ist der neue Punkt eingefügt
    let k = -1;
    for (let x = i; x < a.length; x++) if (new Abgleich(norm(a[x]), norm(n[j])).quote() >= 0.6) { k = x; break; }
    if (k < 0) { aus.push({ ...e, alt: null, neu: n[j], nach: j > 0 ? n[j - 1] : null, nachAlt: j > 0 && i > 0 ? a[i - 1] : null }); continue; }
    for (let x = i; x < k; x++) aus.push({ ...e, alt: a[x], neu: null });
    if (a[k] !== n[j]) aus.push({ ...e, alt: a[k], neu: n[j] });
    i = k + 1;
  }
  for (let x = i; x < a.length; x++) aus.push({ ...e, alt: a[x], neu: null });
  return aus;
}

/** Textstellen einer Sprache, an denen Nachträge landen können: Journalseiten (mit allen Kopien) und Texte der Gegner */
function nachtragsZiele(packs, spr) {
  const p = packs[spr], ziele = [];
  const journale = new Map([...p.abenteuer].filter(([k]) => k.startsWith('!journal!')).map(([, v]) => [v._id, v]));
  const ordner = new Map([...p.abenteuer].filter(([k]) => k.startsWith('!folders!')).map(([, v]) => [v._id, v]));
  const wurzel = ordnerWurzel(ordner);
  const kopien = new Map();
  const merke = (schluessel, obj) => { if (!kopien.has(schluessel)) kopien.set(schluessel, []); kopien.get(schluessel).push(obj); };
  for (const [k, s] of p.abenteuer) {
    if (!k.startsWith('!journal.pages!') || !s.text?.content) continue;
    const j = journale.get(k.slice(15).split('.')[0]);
    if (!j) continue;
    // gleichnamige Journale gibt es in mehreren Bänden (Das Haus am Stausee in Schnellstart und Die Tür): Band gehört zum Schlüssel
    const key = `s\u0000${wurzel(j.folder)}\u0000${j.name}\u0000${s.name}`;
    merke(key, { ziel: s.text, feld: 'content', pack: 'abenteuer' });
    ziele.push({ key, wo: `${j.name} › ${s.name}`, ordner: wurzel(j.folder), html: () => s.text.content });
  }
  for (const ad of p.pakete.values()) for (const j of ad.journal ?? []) for (const s of j.pages ?? []) if (s.text?.content) merke(`s\u0000${ad.name}\u0000${j.name}\u0000${s.name}`, { ziel: s.text, feld: 'content', pack: 'pakete' });
  const gegner = [...[...p.gegner].filter(([k]) => k.startsWith('!actors!')).map(([, a]) => [a, 'gegner']),
    ...[...p.pakete.values()].flatMap((ad) => (ad.actors ?? []).map((a) => [a, 'pakete']))].filter(([a]) => a.type === 'gegner');
  const gesehen = new Set();
  for (const [a, pack] of gegner) for (const feld of ['beschreibung', 'besonderheit']) {
    if (!a.system?.[feld]) continue;
    const key = `g\u0000${a.name}\u0000${feld}`;
    merke(key, { ziel: a.system, feld, pack, akteur: a });
    if (!gesehen.has(key)) { gesehen.add(key); ziele.push({ key, wo: `Gegner ${a.name} (${feld})`, ordner: null, html: () => a.system[feld] }); }
  }
  return { ziele, kopien };
}

/**
 * Arbeitet Nachträge ein: je Stelle der passende Absatz in Foundry (bevorzugt in den Ordnern des Bandes), dann die Änderung
 * wortweise in jede Kopie (Abenteuer, Abenteuerpakete; bei Gegnern jede Fassung gleichen Namens, Zahlen werden nachgezogen).
 * Rückgabe: [{ stelle, status: 'ok'|'schon'|'nur Form'|'nicht gefunden'|'von Hand', wo, grund }]
 */
export function wendeNachtraegeAn(stellen, packs, bandOrdner = {}) {
  const bericht = [];
  const cache = {};
  for (const e of stellen.flatMap(teileListe)) {
    if (e.neu === null) { bericht.push({ stelle: e, status: 'von Hand', grund: 'Listenpunkt gestrichen' }); continue; }
    if (!e.alt) {
      // neuer Absatz: hinter dem Vorgänger (in neuer oder alter Fassung) einfügen, wenn der eindeutig auf einer Seite des Bandes steht
      const c = (cache[e.spr] ??= nachtragsZiele(packs, e.spr));
      const nN = norm(e.neu);
      const hier = [];
      for (const z of c.ziele) {
        if (!(bandOrdner[e.spr] ?? []).includes(z.ordner)) continue;
        const zeilenText = textKarte(z.html()).text.split('\n').map((l) => l.trim());
        if (zeilenText.some((l) => norm(l).includes(nN))) { hier.push({ z, schon: true }); continue; }
        for (const anker of [e.nach, e.nachAlt].filter(Boolean)) {
          const l = zeilenText.find((x) => norm(x) === norm(anker));
          if (l) { hier.push({ z, anker: l }); break; }
        }
      }
      if (hier.some((h) => h.schon)) { bericht.push({ stelle: e, status: 'schon' }); continue; }
      if (hier.length !== 1) { bericht.push({ stelle: e, status: 'nicht gefunden', grund: e.nach ? 'Vorgänger nicht eindeutig' : 'neuer Absatz ohne Vorgänger' }); continue; }
      const { z, anker } = hier[0];
      let ok = 0;
      for (const k of c.kopien.get(z.key)) {
        const h = fuegeAbsatzEin(k.ziel[k.feld], anker, e.neu);
        if (h) { k.ziel[k.feld] = h; packs[e.spr].geaendert.add(k.pack); ok++; }
      }
      c.absaetze?.delete(z.key);
      bericht.push({ stelle: e, status: ok ? 'ok' : 'von Hand', wo: z.wo, grund: ok ? 'eingefügt' : 'Einfügen nicht möglich', neu: e.neu });
      continue;
    }
    const A = e.alt, N = e.neu, nA = norm(A), nN = norm(N);
    if (nA === nN) { bericht.push({ stelle: e, status: 'nur Form' }); continue; }
    const c = (cache[e.spr] ??= nachtragsZiele(packs, e.spr));
    const { ziele, kopien } = c;
    // Absätze je Ziel, zwischengespeichert; nach einer Änderung wird nur dieses Ziel neu gelesen
    c.absaetze ??= new Map();
    const lies = (z) => c.absaetze.set(z.key, textKarte(z.html()).text.split('\n').filter((l) => l.trim()).map((l) => ({ z, l: l.trim(), n: norm(l) })));
    for (const z of ziele) if (!c.absaetze.has(z.key)) lies(z);
    const absaetze = [...c.absaetze.values()].flat();
    if (nN.length >= 12 && absaetze.some((x) => x.n.includes(nN))) { bericht.push({ stelle: e, status: 'schon' }); continue; }
    // Vorauswahl über gemeinsame Achtergruppen, dann genauer Vergleich
    const gramme = new Set();
    for (let i = 0; i + 8 <= nA.length; i += 4) gramme.add(nA.slice(i, i + 8));
    const vor = absaetze.map((x) => ({ ...x, t: [...gramme].filter((g) => x.n.includes(g)).length })).filter((x) => x.t > 0).sort((x, y) => y.t - x.t);
    vor.splice(Math.max(12, vor.findIndex((x) => x.t < vor[0].t * 0.8) + 1 || vor.length), Infinity);
    vor.splice(60, Infinity);
    const imBand = (x) => (bandOrdner[e.spr] ?? []).includes(x.z.ordner);
    for (const x of vor) x.q = new Abgleich(nA, x.n).quote() + (imBand(x) ? 0.02 : 0);
    vor.sort((x, y) => y.q - x.q);
    // Außerhalb des Bandes nur lange, fast gleiche Absätze; kurze Absätze (etwa „Initiative 4“) nur im Band und nur auf einer
    // Seite, auf der die Person oder Überschrift der Stelle vorkommt
    const name = norm(e.ort.replace(/^Zeile \d+,\s*/, ''));
    const seiteNorm = (z) => c.absaetze.get(z.key).map((x) => x.n).join('');
    const passend = (x) => (imBand(x) || (nA.length >= 60 && x.q >= 0.9)) && (nA.length >= 40 || (imBand(x) && name.length >= 4 && seiteNorm(x.z).includes(name)));
    const best = vor.find(passend);
    if (!best || best.q < 0.6) { bericht.push({ stelle: e, status: 'nicht gefunden', grund: best ? `bester Absatz ${best.q.toFixed(2)}: ${best.z.wo}` : '' }); continue; }
    if (new Abgleich(nN, best.n).quote() > best.q + 0.02) { bericht.push({ stelle: e, status: 'schon', wo: best.z.wo, grund: 'Journal ist näher an neu' }); continue; }
    const u = uebertrage(A, N, best.l);
    if (u.konflikt) { bericht.push({ stelle: e, status: 'von Hand', wo: best.z.wo, grund: u.konflikt, absatz: best.l }); continue; }
    if (u.neu === best.l) { bericht.push({ stelle: e, status: 'schon', wo: best.z.wo }); continue; }
    // Sicherung: keine Wortfolge doppelt, die weder im Journal noch in neu doppelt steht (Fehlzuordnung bei Wiederholungen)
    const fuenfer = (t) => { const w = woerter(t).map(norm), m = new Map(); for (let i = 0; i + 5 <= w.length; i++) { const k = w.slice(i, i + 5).join(' '); m.set(k, (m.get(k) ?? 0) + 1); } return m; };
    const fE = fuenfer(u.neu), fF = fuenfer(best.l), fN = fuenfer(N);
    if ([...fE].some(([k, n]) => n > 1 && n > Math.max(fF.get(k) ?? 0, fN.get(k) ?? 0))) { bericht.push({ stelle: e, status: 'von Hand', wo: best.z.wo, grund: 'Übertragung unsicher (Wortfolge doppelt)', absatz: best.l }); continue; }
    // Sicherung: das Ergebnis muss mindestens so nah an neu sein, wie der Absatz im Journal an alt war
    const qErgebnis = new Abgleich(norm(u.neu), nN).quote(), qVorher = new Abgleich(best.n, nA).quote();
    if (qErgebnis < qVorher - 0.02) { bericht.push({ stelle: e, status: 'von Hand', wo: best.z.wo, grund: `Übertragung unsicher (${qErgebnis.toFixed(2)} statt ${qVorher.toFixed(2)})`, absatz: best.l }); continue; }
    const ergebnisse = [];
    for (const k of kopien.get(best.z.key)) {
      const r = ersetzeSatz(k.ziel[k.feld], best.l, u.neu);
      if (r.status === 'ok') {
        const vorher = k.feld === 'besonderheit' ? zeilen(k.ziel.besonderheit) : null;
        k.ziel[k.feld] = r.html;
        packs[e.spr].geaendert.add(k.pack);
        if (vorher) for (const z of zeilen(k.ziel.besonderheit)) if (!vorher.some((v) => v.label === z.label && v.wert === z.wert)) zieheZahlenNach(k.ziel, z.label, z.wert);
      }
      ergebnisse.push(r);
    }
    lies(best.z);
    // gleichnamige Seiten anderer Journale ohne diesen Absatz zählen nicht
    const st = ergebnisse.some((r) => r.status === 'ok') && ergebnisse.every((r) => ['ok', 'fehlt'].includes(r.status)) ? 'ok' : ergebnisse.some((r) => r.status === 'von Hand') ? 'von Hand' : ergebnisse.map((r) => r.status).join('/');
    bericht.push({ stelle: e, status: st, wo: best.z.wo, grund: ergebnisse.find((r) => r.grund)?.grund, absatz: best.l, neu: u.neu });
  }
  return bericht;
}

// Nachtragsdateien des Writers je Band (writer_nachtraege_<Band>.md) und die Ordner, in denen die Stellen zuerst gesucht werden
export const NACHTRAG_BAENDE = {
  Graue_Akten: 'graue-akten', Nordlicht_1977: 'nordlicht-1977', Die_Tuer: 'die-tuer', Horte_der_Welt: 'horte-der-welt',
  Schnellstart: 'schnellstart', Fremdkoerper: 'fremdkoerper', Spielleiterbuch_Stausee: 'schnellstart',
};

// ---------------------------------------------------------------------------------------------------------------
// Englische Spielbegriffe (vereinheitlicht im Oktober 2026): je Stelle in den englischen Packs ein Eintrag, wenn ein aktueller
// englischer Band an derselben Stelle (gleiche Wörter davor und danach) die neue Form hat. Datei begriffe_en.md, Format wie die
// Freigabelisten; „alt“ und „neu“ sind ein Ausschnitt ohne HTML aus dem Feld, ersetzt wird genau dieser Ausschnitt.

export const BEGRIFFE_EN = [['Eerie (1)', 'Uncanny (1)'], ['Horrific (3)', 'Horrifying (3)'], ['Accurate', 'Precise'], ['Stunning', 'Stun'],
  ['Crystal Warden', 'Crystal Guardian'], ['Watcher', 'Spectator'], ['Security System', 'Guard System'], ['Scatter', 'Spread'],
  ['Hand-to-hand', 'Brawling'], ['Silent', 'Quiet'],
  // Pläne der Organisationen (Die anderen Dienste, Spielleiterbuch): im Fließtext jetzt klein, Überschriften bleiben, wie im Band
  ['Taking the Children', 'Fetch the children'], ['Keep the Silence', 'Preserve the silence'], ['The Staircase', 'The stairs'],
  ['The Page from 1871', 'The page from 1871'], ['The New Host', 'The new host'], ['The Chimera', 'The chimera'],
  ['A Seeker of Their Own', 'A Seeker of their own'], ['The Second Site', 'The second site'], ['No More Nexus Crystals', 'No more Nexus crystals'],
  ['The Great Stone', 'The great stone'], ['THE BAIT', 'THE LURE'], ['The Bait', 'The Lure']];
const BEGRIFF_PDFS = ['en/books/ODIN_EN_01_Core_Rulebook.pdf', 'en/books/ODIN_EN_08_Game_Masters_Book.pdf', 'en/books/ODIN_EN_10_The_Door_Campaign.pdf',
  'en/books/ODIN_EN_11_The_Door_Handouts.pdf', 'en/books/ODIN_EN_13_Quickstart.pdf', 'en/books/ODIN_EN_14_Grey_Files.pdf', 'en/books/ODIN_EN_14_Grey_Files_Handouts.pdf',
  'en/books/ODIN_EN_15_The_Other_Services.pdf', 'en/books/ODIN_EN_16_Holds_of_the_World.pdf', 'en/books/ODIN_EN_18_Nordlicht_1977.pdf',
  'en/books/ODIN_EN_18_Nordlicht_1977_Handouts.pdf', 'en/books/ODIN_EN_19_Shadow_Officers.pdf', 'en/books/ODIN_EN_22_The_Registry.pdf', 'en/books/ODIN_EN_24_Foreign_Bodies.pdf'];
const nbegriff = (t) => ` ${t.toLowerCase().replace(/&[a-z]+;/g, ' ').replace(/[’‘]/g, "'").replace(/[^a-z0-9()]+/g, ' ').trim()} `;

/** Ersetzt in allen Textfeldern eines Dokuments den Ausschnitt a durch b; Rückgabe: Anzahl */
export function ersetzeInFeldern(o, a, b, ganzesFeld = false) {
  let n = 0;
  for (const [k, v] of Object.entries(o ?? {})) {
    if (typeof v === 'string' && (ganzesFeld ? v === a : v.includes(a))) { n += ganzesFeld ? 1 : v.split(a).length - 1; o[k] = ganzesFeld ? b : v.split(a).join(b); }
    else if (v && typeof v === 'object') n += ersetzeInFeldern(v, a, b, ganzesFeld);
  }
  return n;
}

/** Vorschläge für die Begriffe: buch = normierter Text aller englischen Bände; packs = { Packname: Map } */
export function begriffVorschlaege(packs, buch, paare = BEGRIFFE_EN) {
  const vorschlaege = [], hinweise = [], gesehen = new Set();
  const texte = (o, aus = []) => { if (typeof o === 'string') aus.push(o); else if (o && typeof o === 'object') for (const v of Object.values(o)) texte(v, aus); return aus; };
  for (const [pack, d] of Object.entries(packs)) for (const [key, doc] of d) for (const roh of texte(doc)) for (const [alt, neu] of paare) {
    const re = new RegExp(`(?<![A-Za-z])${alt.replace(/[()]/g, '\\$&')}(?![a-z])`, 'g');
    for (const m of roh.matchAll(re)) {
      // Ausschnitt ohne HTML um die Stelle, auf ganze Wörter gekürzt
      const l = roh.lastIndexOf('>', m.index) + 1, r0 = roh.indexOf('<', m.index + alt.length), r = r0 < 0 ? roh.length : r0;
      let befund = null, ausschnitt = null;
      for (const w of [40, 25, 14]) {
        const vor = roh.slice(Math.max(l, m.index - w), m.index).replace(/^\S*\s/, ''), nach = roh.slice(m.index + alt.length, Math.min(r, m.index + alt.length + w)).replace(/\s\S*$/, '');
        const a = vor + alt + nach, n = vor + neu + nach;
        if (buch.includes(nbegriff(n))) { befund = buch.includes(nbegriff(a)) ? 'prüfen' : 'sicher'; ausschnitt = [a, n]; break; }
        if (buch.includes(nbegriff(a))) { befund = 'alt'; break; }
      }
      const name = doc.name ?? key;
      if (befund === 'alt') continue;
      // nur das Wort selbst: als Vorschlag nur, wenn das ganze Feld genau das Wort ist (etwa die Eigenschaft eines Pools) oder eine
      // ganze Zelle bzw. ein ganzer Absatz zwischen zwei Tags; dann zählt der Text drumherum ohne HTML (etwa „Horror“ davor)
      const ganzesFeld = befund && ausschnitt[0] === alt && roh === alt;
      let segment = false;
      if (ausschnitt?.[0] === alt && roh !== alt) {
        befund = null;
        if (roh.slice(l, r).trim() === alt) {
          const plain = (t) => t.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
          const vor = plain(roh.slice(0, m.index)).slice(-40).replace(/^\S*\s/, ''), nach = plain(roh.slice(m.index + alt.length)).slice(0, 40).replace(/\s\S*$/, '');
          for (const [a2, b2] of [[vor.slice(-25), nach.slice(0, 25)], [vor.slice(-14), nach.slice(0, 14)]]) {
            const v2 = a2.replace(/^\S*\s/, ''), n2 = b2.replace(/\s\S*$/, '');
            if (!(v2 + n2).trim()) break;
            if (buch.includes(nbegriff(v2 + neu + n2))) { befund = buch.includes(nbegriff(v2 + alt + n2)) ? 'prüfen' : 'sicher'; segment = true; break; }
            if (buch.includes(nbegriff(v2 + alt + n2))) { befund = 'alt'; break; }
          }
          if (befund === 'alt') continue;
        }
      }
      if (!befund) { hinweise.push(`${pack} › „${name}“: „${alt}“ in „${roh.slice(Math.max(l, m.index - 30), Math.min(r, m.index + alt.length + 30)).trim()}“, Stelle im Band nicht gefunden`); continue; }
      const k = `${pack}\u0000${key}\u0000${segment ? `>${roh.slice(l, r)}<` : ausschnitt[0]}`;
      if (gesehen.has(k)) continue;
      gesehen.add(k);
      vorschlaege.push({ art: 'begriff', pack, key, name, alt: segment ? `>${roh.slice(l, r)}<` : ausschnitt[0], neu: segment ? `>${roh.slice(l, r).replace(alt, neu)}<` : ausschnitt[1], begriff: [alt, neu], stufe: befund, ganzesFeld });
    }
  }
  return { vorschlaege, hinweise };
}

function begriffe() {
  const pdfs = BEGRIFF_PDFS.map((r) => ladePdf(r));
  const buch = pdfs.map((p) => nbegriff(p.seiten.join('\n').replace(/-\n/g, ''))).join(' | ');
  const packs = Object.fromEntries(fs.readdirSync(PACKORDNER).filter((p) => p.endsWith('-en')).map((p) => [p, lesePack(path.join(PACKORDNER, p))]));
  const { vorschlaege: v, hinweise } = begriffVorschlaege(packs, buch);
  const datei = path.join(ZIEL, 'begriffe_en.md');
  const alt = new Map((fs.existsSync(datei) ? leseFreigabe(fs.readFileSync(datei, 'utf8')) : []).filter((e) => e.freigabe !== 'offen').map((e) => [e.id, e]));
  const z = ['# Korrekturvorschläge: Englische Spielbegriffe', '',
    'Erzeugt mit `node werkzeuge/korrektur.mjs begriffe` aus den englischen Bänden auf odin-rpg.pages.dev. Ein Eintrag je Stelle in den englischen',
    'Packs, an der ein aktueller Band an derselben Stelle (gleiche Wörter davor und danach) die neue Form hat. „alt“ und „neu“ sind der',
    'Ausschnitt aus dem Feld (ohne HTML), ersetzt wird genau dieser Ausschnitt. Freigabe wie in den anderen Listen: „offen“ durch „ja“ oder',
    '„nein“ ersetzen; übernommen wird mit `node werkzeuge/korrektur.mjs anwenden begriffe`. Stellen, die auch eine Satzliste ändert, stehen',
    'eventuell doppelt; wer zuerst kommt, ändert, der zweite Eintrag meldet „schon“. „sicher“: die Bände haben an dieser Stelle nur noch die',
    'neue Form; „prüfen“: ein Band hat sie neu, ein anderer noch alt.', '',
    `Begriffe: ${BEGRIFFE_EN.map(([a, n]) => `${a} → ${n}`).join(', ')}.`, '',
    `Bände: ${pdfs.map((p) => `${p.name} (Prüfsumme ${p.pruef})`).join(', ')}.`, '', '## Englisch', '',
    `Vorschläge: ${v.length}. Hinweise ohne Vorschlag: ${hinweise.length}.`, ''];
  const benutzt = new Set();
  for (const [a, n] of BEGRIFFE_EN) {
    const liste = v.filter((x) => x.begriff[0] === a);
    if (!liste.length) continue;
    z.push(`### ${a} → ${n}`, '');
    for (const x of liste) {
      let id = `BG-en-${kurzId(x.pack, x.key, x.alt)}`;
      while (benutzt.has(id)) id += 'x';
      benutzt.add(id);
      const e = alt.get(id);
      z.push(`#### ${id} · ${x.pack} › „${x.name}“ · ${x.stufe}`, `Freigabe: ${e?.freigabe ?? 'offen'}`, '', `- alt: ${x.alt}`, `- neu: ${e?.neu && e.alt === x.alt ? e.neu : x.neu}`,
        `<!-- daten: ${JSON.stringify({ art: 'begriff', pack: x.pack, key: x.key, ...(x.ganzesFeld ? { ganzesFeld: true } : {}) })} -->`, '');
    }
  }
  if (hinweise.length) { z.push('### Hinweise ohne Vorschlag', '', 'Alte Form, deren Stelle in keinem Band sicher gefunden wurde. Bitte von Hand ansehen.', ''); for (const h of hinweise) z.push(`- ${h}`); z.push(''); }
  fs.writeFileSync(datei, z.join('\n').replace(/\n+$/, '\n'));
  console.log(`begriffe en: Vorschläge ${v.length}, Hinweise ${hinweise.length}`);
}

// ---------------------------------------------------------------------------------------------------------------
// Aufruf

function vorschlaege(band, nachlauf = false) {
  const cfg = BAENDE[band];
  const teile = [];
  for (const spr of ['de', 'en']) {
    const c = cfg[spr];
    const pdfs = c.pdf.map((r) => ladePdf(r));
    const pdf = new BandText(pdfs);
    const abgleich = new BandText([ladePdf(ABGLEICH[spr])]);
    const t = { spr, pdfs, saetze: { vorschlaege: [], statistik: null } };
    if (cfg.nurGegenstaende) {
      t.saetze = satzVorschlaege(gegenstaendeDesBandes(spr, pdf), pdf, abgleich);
      for (const v of t.saetze.vorschlaege) v.art = 'gegenstand';
      t.saetze.vorschlaege.sort((a, b) => a.pdf.pos - b.pdf.pos);
    } else if (!cfg.nurGegner) {
      t.saetze = satzVorschlaege(journalSeiten(spr, c), pdf, abgleich);
      t.saetze.vorschlaege.sort((a, b) => a.pdf.pos - b.pdf.pos);
    }
    t.gegner = gegnerVorschlaege(gegnerDesBandes(spr, c), pdf, abgleich);
    teile.push(t);
    console.log(`${band} ${spr}: Sätze ${t.saetze.vorschlaege.length}, Gegnerwerte ${t.gegner.vorschlaege.length}, Hinweise ${(t.saetze.hinweise?.length ?? 0) + t.gegner.hinweise.length}`);
  }
  fs.mkdirSync(ZIEL, { recursive: true });
  if (nachlauf) {
    // Nachlauf nach neuen Fassungen der Bände: eigene Datei, die Hauptliste bleibt unberührt; dort schon entschiedene Einträge
    // (ja oder nein) kommen nicht noch einmal
    const haupt = path.join(ZIEL, `${band}.md`);
    const entschieden = new Set((fs.existsSync(haupt) ? leseFreigabe(fs.readFileSync(haupt, 'utf8')) : []).filter((e) => e.freigabe !== 'offen').map((e) => e.id));
    for (const t of teile) for (const liste of [t.saetze.vorschlaege, t.gegner.vorschlaege]) {
      const bleibt = liste.filter((v) => !entschieden.has(eintragsId(cfg.kuerzel, t.spr, v)));
      liste.splice(0, liste.length, ...bleibt);
    }
  }
  const datei = path.join(ZIEL, `${band}${nachlauf ? '_nachlauf' : ''}.md`);
  const alt = fs.existsSync(datei) ? leseFreigabe(fs.readFileSync(datei, 'utf8')) : [];
  const { md, verloren } = schreibeFreigabe(band, cfg, teile, alt, nachlauf);
  fs.writeFileSync(datei, md);
  if (verloren.length) console.warn(`Achtung: Entscheidungen ohne passenden Vorschlag (nicht mehr in der Liste): ${verloren.join(', ')}`);
}

function ladePacks() {
  const aus = {};
  for (const spr of ['de', 'en']) {
    aus[spr] = { geaendert: new Set() };
    for (const [art, name] of Object.entries(PACKS[spr])) aus[spr][art] = lesePack(path.join(PACKORDNER, name));
  }
  return aus;
}

async function nachtraege(dateien, probelauf) {
  const packs = ladePacks();
  const z = {};
  for (const datei of dateien) {
    const band = NACHTRAG_BAENDE[/writer_nachtraege_(.+)\.md$/.exec(path.basename(datei))?.[1]];
    const ordner = band ? { de: BAENDE[band].de.ordner, en: BAENDE[band].en.ordner } : {};
    const stellen = leseNachtraege(fs.readFileSync(datei, 'utf8'));
    console.log(`${path.basename(datei)}: ${stellen.length} Stellen`);
    for (const b of wendeNachtraegeAn(stellen, packs, ordner)) {
      z[b.status] = (z[b.status] ?? 0) + 1;
      console.log(`  ${b.status} [${b.stelle.spr}] ${b.stelle.ort}${b.wo ? ` (${b.wo})` : ''}${b.grund ? `: ${b.grund}` : ''}`);
    }
  }
  console.log(JSON.stringify(z));
  if (probelauf) { console.log('Probelauf: nichts geschrieben.'); return; }
  await schreibeGeaenderte(packs);
}

async function schreibeGeaenderte(packs) {
  const { schreibePack } = await import('./packschreiber.mjs');
  for (const spr of ['de', 'en']) {
    for (const art of packs[spr].geaendert) {
      const name = art.startsWith('pack:') ? art.slice(5) : PACKS[spr][art];
      await schreibePack(path.join(PACKORDNER, name), packs[spr][art]);
      console.log(`geschrieben: packs/${name}`);
    }
  }
}

async function anwenden(baende, probelauf) {
  const packs = ladePacks();
  for (const band of baende) {
    for (const datei of (band === 'begriffe' ? ['begriffe_en.md'] : [`${band}.md`, `${band}_nachlauf.md`]).map((f) => path.join(ZIEL, f)).filter((f) => fs.existsSync(f))) {
      const ja = leseFreigabe(fs.readFileSync(datei, 'utf8')).filter((e) => e.freigabe === 'ja');
      console.log(`${path.basename(datei)}: ${ja.length} freigegebene Einträge`);
      for (const b of wendeAn(ja, packs)) console.log(`  ${b.id} ${b.status}${b.wo ? ` (${b.wo})` : ''}${b.grund ? `: ${b.grund}` : ''}`);
    }
  }
  if (probelauf) { console.log('Probelauf: nichts geschrieben.'); return; }
  await schreibeGeaenderte(packs);
}

/** Prüft die Freigabedateien: lesbar, ids eindeutig, jede Zeile vollständig. Rückgabe: Liste der Fehler */
export function pruefeFreigaben(ordner = ZIEL) {
  const fehler = [];
  if (!fs.existsSync(ordner)) return fehler;
  const ids = new Set();
  for (const f of fs.readdirSync(ordner).filter((f) => f.endsWith('.md') && f !== 'LIESMICH.md' && !f.startsWith('aenderungen_'))) {
    for (const e of leseFreigabe(fs.readFileSync(path.join(ordner, f), 'utf8'))) {
      if (ids.has(e.id)) fehler.push(`${f}: id ${e.id} doppelt`);
      ids.add(e.id);
      if (!['offen', 'ja', 'nein'].includes(e.freigabe)) fehler.push(`${f}: ${e.id} Freigabe „${e.freigabe}“ (erlaubt: offen, ja, nein)`);
      if (!e.alt || !e.neu || !e.daten || !e.spr) fehler.push(`${f}: ${e.id} unvollständig`);
    }
  }
  return fehler;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const [befehl, wahl = 'alle', ...rest] = process.argv.slice(2);
  if (befehl === 'nachtraege') {
    await nachtraege([wahl, ...rest].filter((x) => !x.startsWith('--')), rest.includes('--probelauf'));
    process.exit(0);
  }
  if (befehl === 'begriffe') { begriffe(); process.exit(0); }
  const baende = wahl === 'alle' ? [...Object.keys(BAENDE), ...(befehl === 'anwenden' ? ['begriffe'] : [])] : [wahl];
  if (baende.some((b) => !BAENDE[b] && !(befehl === 'anwenden' && b === 'begriffe')) || !['vorschlaege', 'anwenden', 'pruefen'].includes(befehl)) {
    console.error(`Aufruf: node werkzeuge/korrektur.mjs vorschlaege|anwenden|pruefen <${Object.keys(BAENDE).join('|')}|alle> [--probelauf]\n`
      + '       node werkzeuge/korrektur.mjs vorschlaege <band> --nachlauf   (eigene Datei <band>_nachlauf.md, Hauptliste bleibt)\n'
      + '       node werkzeuge/korrektur.mjs begriffe   (englische Spielbegriffe, begriffe_en.md; anwenden mit „anwenden begriffe“)\n'
      + '       node werkzeuge/korrektur.mjs nachtraege <writer_nachtraege_<Band>.md> … [--probelauf]');
    process.exit(1);
  }
  if (befehl === 'vorschlaege') for (const b of baende) vorschlaege(b, rest.includes('--nachlauf'));
  else if (befehl === 'anwenden') await anwenden(baende, rest.includes('--probelauf'));
  else {
    const f = pruefeFreigaben();
    console.log(f.length ? f.join('\n') : 'Freigabedateien in Ordnung.');
    process.exit(f.length ? 1 : 0);
  }
}
