// Test des Korrekturwerkzeugs (werkzeuge/korrektur.mjs): node --test tests/korrektur.test.mjs
// Ohne PDFs und ohne Netz: Vergleich, Filter für Fehltreffer, Freigabedatei, Anwenden auf HTML und Gegnerwerte.
// Dazu die Freigabedateien im Repo: lesbar, ids eindeutig, und jedes „alt“ steht noch so in den Packs.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from '../werkzeuge/leveldb.mjs';
import {
  Abgleich, normMitIndex, bereinigeSeite, textKarte, text, saetze, vergleicheSatz, unterschiede, BandText, satzVorschlaege,
  gegnerVorschlaege, wertImBlock, ersetzeSatz, ersetzeZeile, zieheZahlenNach, leseFreigabe, schreibeFreigabe, pruefeFreigaben,
  zeilen, BAENDE, ZIEL,
} from '../werkzeuge/korrektur.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('Abgleich rechnet wie difflib', () => {
  assert.equal(new Abgleich('abcd', 'bcde').quote(), 0.75);
  assert.deepEqual(new Abgleich('abxcd', 'abcd').schritte().filter((o) => o[0] !== 'gleich'), [['loeschen', 2, 3, 2, 2]]);
  assert.deepEqual(new Abgleich(['a', 'b', 'c'], ['a', 'x', 'c']).bloecke(), [[0, 0, 1], [2, 2, 1], [3, 3, 0]]);
});

test('Normalisieren und Seiten bereinigen', () => {
  const [n, idx] = normMitIndex('Ä-b, C1!');
  assert.equal(n, 'äbc1');
  assert.deepEqual(idx, [0, 2, 5, 6]);
  const seite = '12\nDer Text geht wei-\nter.\n31 O.D.I.N. Graue Akten\nO.D.I.N. genau. Ein Ort.\nWert\n2\nEnde\n7\n';
  const b = bereinigeSeite(seite);
  assert.ok(b.includes('Der Text geht weiter.'));
  assert.ok(!b.includes('Graue Akten'), 'Fußzeile mit Seitenzahl fällt weg');
  assert.ok(b.includes('O.D.I.N. genau.'), 'Satzzeile mit O.D.I.N. bleibt');
  assert.ok(/Wert\n2\n/.test(b), 'Zahl mitten auf der Seite bleibt (Tabellenwert)');
  assert.ok(!/^12/.test(b) && !/7\s*$/.test(b), 'Seitenzahl oben und unten fällt weg');
});

test('Text einer Journalseite mit Karte ins HTML', () => {
  const html = '<p>Ein <strong>fetter</strong> Satz &amp; mehr @UUID[JournalEntry.x]{Verweis} hier.</p><p>Zweiter&nbsp;Absatz.</p>';
  const { text: t, zeichen } = textKarte(html);
  assert.equal(t, 'Ein fetter Satz & mehr Verweis hier.\nZweiter Absatz.\n');
  const v = t.indexOf('Verweis');
  assert.equal(zeichen[v].art, 'verweis');
  assert.equal(html.slice(zeichen[t.indexOf('&')].von, zeichen[t.indexOf('&')].bis), '&amp;');
  assert.deepEqual(saetze('Kurz. Das ist ein Satz mit genug Buchstaben darin. Und noch einer mit vielen Buchstaben.'),
    ['Das ist ein Satz mit genug Buchstaben darin.', 'Und noch einer mit vielen Buchstaben.']);
});

test('Satzvergleich: echte Änderung bleibt, Fehltreffer fallen weg', () => {
  const echt = vergleicheSatz('Kessler würfelt auf Täuschung gegen Schwer (3).', 'Kessler würfelt auf Wahrnehmung gegen Schwer (3).');
  assert.equal(echt.neu, 'Kessler würfelt auf Wahrnehmung gegen Schwer (3).');
  assert.deepEqual(echt.aenderungen, [['Täuschung', 'Wahrnehmung']]);
  // nur Schreibweise (Silbentrennung, Satzzeichen)
  const schreib = vergleicheSatz('Der Hort-1 liegt in London.', 'Der Hort1 liegt in London');
  assert.deepEqual(schreib.aenderungen, []);
  // Nachbarspalte: eingeschobener Text steht schon auf derselben Journalseite
  const seite = 'nachdemabendessengehtdiezelleinsarchiv';
  const nachbar = vergleicheSatz('Die Zelle findet das Visier im Laden.', 'Die Zelle findet nach dem Abendessen geht die Zelle ins Archiv das Visier im Laden.', { seite });
  assert.deepEqual(nachbar.aenderungen, []);
  assert.equal(nachbar.verworfen.Nachbartext, 1);
  // einzelne Zahl ohne Bezug (Seitenzahl oder Zelle)
  assert.deepEqual(vergleicheSatz('Die Uhrzeit erscheint in den Akten 2 und 3.', 'Die Uhrzeit erscheint in den Akten 2 3 und 3.').aenderungen, []);
  // Aufzählungszeichen aus einem Kasten daneben: ganzer Vorschlag fällt weg
  assert.deepEqual(vergleicheSatz('Seit Februar hat das Kristallbuch neue Einträge, mehr als je zuvor.', 'Seit Februar hat das Kristallbuch neue Einträge, ▪ Der Hüter.').aenderungen, []);
  assert.deepEqual(unterschiede('a b c', 'a x c'), [['b', 'x']]);
});

test('Satzvorschläge aus einem zweispaltigen Band', () => {
  const pdf = new BandText([{ name: 'Band', kurz: 'Band', seiten: [
    'Einleitung\nKessler würfelt auf Wahrnehmung gegen\nSchwer (3), wenn er lügt. Danach geht es\n31 O.D.I.N. Graue Akten\n',
    'weiter. Der Bauplan von 1991 zeigt zwölf Räume im Untergeschoss.\n',
  ] }]);
  const seiten = [{ journal: 'Kessler', seite: 'Knoten 1', html: '<p>Kessler würfelt auf Täuschung gegen Schwer (3), wenn er lügt.</p><p>Der Bauplan von 1991 zeigt zwölf Räume im Untergeschoss.</p>' }];
  const { vorschlaege, statistik } = satzVorschlaege(seiten, pdf, null);
  assert.equal(statistik.gleich, 1);
  assert.equal(vorschlaege.length, 1);
  assert.equal(vorschlaege[0].neu, 'Kessler würfelt auf Wahrnehmung gegen Schwer (3), wenn er lügt.');
  assert.equal(vorschlaege[0].stufe, 'sicher');
  assert.deepEqual(vorschlaege[0].pdf.seite, 1);
});

test('Gegnerwerte: Zeile aus dem Werteblock des Bandes', () => {
  const block = 'Owen Gwynne\nWert Angabe\nInitiative 2\nAngriff Hammer 2 + 1, Schaden 2, oder Jagdflinte\n2 + 2, Schaden 4\nVerteidigung /\nRüstung / LP\n1 / 0 / 7\nGrauen Keines. Würfelt selbst gegen Unheimlich\n(1), wenn der Spuk erscheint\nBesonderheit Kennt den Laden.\n';
  const labels = ['Initiative', 'Angriff', 'Verteidigung / Rüstung / LP', 'Grauen', 'Besonderheit'];
  assert.equal(wertImBlock(block, 'Grauen', labels), 'Keines. Würfelt selbst gegen Unheimlich (1), wenn der Spuk erscheint');
  assert.equal(wertImBlock(block, 'Verteidigung / Rüstung / LP', labels), '1 / 0 / 7');
  const pdf = new BandText([{ name: 'Band', kurz: 'Band', seiten: [block] }]);
  const a = { name: 'Owen Gwynne', type: 'gegner', system: { initiative: 3, lp: { value: 7, max: 7 },
    besonderheit: '<p><strong>Angriff:</strong> Hammer 2 + 1, Schaden 2, oder Jagdflinte 2 + 2, Schaden 4</p><p><strong>Grauen:</strong> Unheimlich (1), sobald der Spuk erscheint</p>' } };
  const { vorschlaege } = gegnerVorschlaege([a], pdf, null);
  assert.deepEqual(vorschlaege.map((v) => [v.label, v.alt, v.neu]), [
    ['Grauen', 'Unheimlich (1), sobald der Spuk erscheint', 'Keines. Würfelt selbst gegen Unheimlich (1), wenn der Spuk erscheint'],
    ['Initiative', '3', '2'],
  ]);
  // Verweis auf den Bedrohungsatlas: nur ein Hinweis, kein Vorschlag
  const atlas = new BandText([{ name: 'Band', kurz: 'Band', seiten: ['Evan Pryce als Spuk\nEr erscheint mit den Werten aus dem Bedrohungsatlas.\n' + block] }]);
  const b = { name: 'Evan Pryce als Spuk', type: 'gegner', system: { initiative: 4, lp: { value: 5, max: 5 }, besonderheit: '<p><strong>Grauen:</strong> Verstörend (2)</p>' } };
  const r = gegnerVorschlaege([b], atlas, null);
  assert.equal(r.vorschlaege.length, 0);
  assert.match(r.hinweise[0], /Bedrohungsatlas/);
});

test('Anwenden: Satz im HTML wortweise ersetzen', () => {
  const html = '<p>Kessler würfelt auf Täuschung gegen <em>Schwer</em> (3).</p><p>Noch ein Satz &amp; mehr.</p>';
  const r = ersetzeSatz(html, 'Kessler würfelt auf Täuschung gegen Schwer (3).', 'Kessler würfelt auf Wahrnehmung gegen Schwer (3).');
  assert.equal(r.status, 'ok');
  assert.equal(r.html, '<p>Kessler würfelt auf Wahrnehmung gegen <em>Schwer</em> (3).</p><p>Noch ein Satz &amp; mehr.</p>');
  // über Formatierung hinweg: nicht automatisch
  assert.equal(ersetzeSatz(html, 'Kessler würfelt auf Täuschung gegen Schwer (3).', 'Kessler würfelt auf Täuschung gegen Machbar (2).').status, 'von Hand');
  // Streichen samt Leerzeichen, Einfügen, Sonderzeichen
  assert.equal(ersetzeSatz('<p>Das Grundregelwerk umfasst 88 Seiten und ist kostenlos.</p>', 'Das Grundregelwerk umfasst 88 Seiten und ist kostenlos.', 'Das Grundregelwerk ist kostenlos.').html,
    '<p>Das Grundregelwerk ist kostenlos.</p>');
  assert.equal(ersetzeSatz('<p>Er sagt Ja und Nein.</p>', 'Er sagt Ja und Nein.', 'Er sagt Ja & Nein <leise>.').html, '<p>Er sagt Ja &amp; Nein &lt;leise&gt;.</p>');
  // mehrfach auf einer Seite (gleiche Tabellenzeile in mehreren Tabellen)
  const zwei = ersetzeSatz('<p>Grauen Unheimlich (1)</p><p>Grauen Unheimlich (1)</p>', 'Grauen Unheimlich (1)', 'Grauen Keines');
  assert.equal(zwei.html, '<p>Grauen Keines</p><p>Grauen Keines</p>');
  assert.equal(zwei.stellen, 2);
  assert.equal(ersetzeSatz(zwei.html, 'Grauen Unheimlich (1)', 'Grauen Keines').status, 'schon');
  assert.equal(ersetzeSatz('<p>Anderer Text.</p>', 'Grauen Unheimlich (1)', 'Grauen Keines').status, 'fehlt');
});

test('Anwenden: Gegnerzeile ändern und Zahlen nachziehen', () => {
  const system = {
    initiative: 3, verteidigung: 2, ruestung: 0, grauen: 1, lp: { value: 5, max: 5 },
    pools: [{ name: 'Kompaktpistole', weiss: 3, bunt: 2, schaden: 2 }, { name: 'Betäubungsstab', weiss: 2, bunt: 2, schaden: 1 }],
    besonderheit: '<p><strong>Angriff:</strong> Kompaktpistole 3 + 2, Schaden 2, oder Betäubungsstab 2 + 2, Schaden 1</p><p><strong>Verteidigung / Rüstung / LP:</strong> 2 / 0 / 5</p><p><strong>Grauen:</strong> Unheimlich (1)</p>',
  };
  let r = ersetzeZeile(system, 'Verteidigung / Rüstung / LP', '2 / 0 / 5', '1 / 0 / 7');
  assert.equal(r.status, 'ok');
  assert.deepEqual([system.verteidigung, system.ruestung, system.lp.max, system.lp.value], [1, 0, 7, 7]);
  assert.match(system.besonderheit, /<strong>Verteidigung \/ Rüstung \/ LP:<\/strong> 1 \/ 0 \/ 7<\/p>/);
  r = ersetzeZeile(system, 'Angriff', 'Kompaktpistole 3 + 2, Schaden 2, oder Betäubungsstab 2 + 2, Schaden 1', 'Kompaktpistole 3 + 2, Schaden 2, oder Totschläger 2 + 2, Schaden 2');
  assert.equal(r.status, 'ok');
  assert.deepEqual(system.pools.map((p) => [p.name, p.weiss, p.bunt, p.schaden]), [['Kompaktpistole', 3, 2, 2], ['Totschläger', 2, 2, 2]]);
  r = ersetzeZeile(system, 'Grauen', 'Unheimlich (1)', 'Keines. Würfelt selbst gegen Unheimlich (1)');
  assert.equal(system.grauen, 1, 'Grauen des Gegners bleibt, die Zahl in Klammern ist der Wurf der Leute');
  r = ersetzeZeile(system, 'Initiative', '3', '2');
  assert.equal(r.status, 'ok');
  assert.equal(system.initiative, 2);
  assert.equal(ersetzeZeile(system, 'Grauen', 'Etwas anderes', 'x').status, 'fehlt');
  const s2 = { grauen: 1 };
  zieheZahlenNach(s2, 'Grauen', 'Verstörend (2), wenn sie sich umdrehen');
  assert.equal(s2.grauen, 2);
  assert.deepEqual(zeilen('<p><strong>Stufe laut Buch:</strong> Profi</p><p><strong>Psi:</strong> 4 + 4</p>').map((z) => z.label), ['Psi']);
});

test('Freigabedatei: schreiben, lesen, Entscheidungen bleiben', () => {
  const cfg = BAENDE['graue-akten'];
  const teil = (neu) => ({
    spr: 'de', pdfs: [{ name: 'ODIN_14_Graue_Akten', seiten: [1], pruef: 'abc' }],
    saetze: { statistik: { seiten: 1, saetze: 1, gleich: 0, nichtGefunden: 0, verworfen: {} }, hinweise: [],
      vorschlaege: [{ art: 'satz', alt: 'Kessler würfelt auf Täuschung.', neu, stufe: 'sicher', fundstellen: [['Kessler', 'Knoten 1']], pdf: { kurz: 'Band', seite: 38 } }] },
    gegner: { statistik: { gegner: 1, zeilen: 1, gleich: 0 }, hinweise: ['Gegner „X“: Kein Werteblock im Band gefunden.'],
      vorschlaege: [{ art: 'gegner', name: 'Mr. Hartley', label: 'Angriff', alt: 'Stab 2 + 2', neu: 'Totschläger 2 + 2', stufe: 'prüfen', pdf: { kurz: 'Band', seite: 32 } }] },
  });
  const { md } = schreibeFreigabe('graue-akten', cfg, [teil('Kessler würfelt auf Wahrnehmung.')]);
  assert.ok(!/[–—]/.test(md), 'keine Gedankenstriche');
  const e = leseFreigabe(md);
  assert.equal(e.length, 2);
  assert.deepEqual(e.map((x) => [x.spr, x.art, x.freigabe]), [['de', 'satz', 'offen'], ['de', 'gegner', 'offen']]);
  assert.deepEqual(e[0].daten.fundstellen, [['Kessler', 'Knoten 1']]);
  // Dave setzt ja und bessert „neu“ nach; ein neuer Lauf behält beides
  const geaendert = md.replace('\nFreigabe: offen', '\nFreigabe: ja').replace('- neu: Kessler würfelt auf Wahrnehmung.', '- neu: Kessler würfelt auf Menschenkenntnis.');
  const neu = leseFreigabe(schreibeFreigabe('graue-akten', cfg, [teil('Kessler würfelt auf Wahrnehmung.')], leseFreigabe(geaendert)).md);
  assert.equal(neu[0].freigabe, 'ja');
  assert.equal(neu[0].neu, 'Kessler würfelt auf Menschenkenntnis.');
  assert.equal(neu[1].freigabe, 'offen');
});

test('Freigabedateien im Repo: lesbar, eindeutig, „alt“ steht noch in den Packs', () => {
  assert.deepEqual(pruefeFreigaben(), []);
  const dateien = fs.existsSync(ZIEL) ? fs.readdirSync(ZIEL).filter((f) => f.endsWith('.md')) : [];
  assert.deepEqual(dateien.sort(), Object.keys(BAENDE).map((b) => `${b}.md`).sort(), 'je Band eine Freigabedatei');
  const packs = {};
  const pack = (n) => (packs[n] ??= lesePack(path.join(wurzel, 'packs', n)));
  const fehlt = [];
  for (const f of dateien) {
    for (const e of leseFreigabe(fs.readFileSync(path.join(ZIEL, f), 'utf8'))) {
      if (e.freigabe === 'ja') continue; // nach dem Anwenden steht dort „neu“
      const en = e.spr === 'en' ? '-en' : '';
      if (e.art === 'satz') {
        const d = pack(`odin-abenteuer${en}`);
        const journale = new Map([...d].filter(([k]) => k.startsWith('!journal!')).map(([, v]) => [v._id, v.name]));
        const ok = e.daten.fundstellen.some(([j, s]) => [...d].some(([k, v]) => k.startsWith('!journal.pages!') && journale.get(k.slice(15).split('.')[0]) === j && v.name === s
          && text(v.text?.content ?? '').replace(/\s+/g, ' ').includes(e.alt)));
        if (!ok) fehlt.push(`${f}: ${e.id}`);
      } else {
        const akteure = [...pack(`odin-gegner${en}`).values(), ...[...pack(`odin-abenteuerpakete${en}`).values()].flatMap((a) => a.actors ?? [])];
        const ok = akteure.some((a) => a.name === e.daten.name && (e.daten.label === 'Initiative' ? String(a.system?.initiative) === e.alt : zeilen(a.system?.besonderheit).some((z) => z.label === e.daten.label && z.wert === e.alt)));
        if (!ok) fehlt.push(`${f}: ${e.id}`);
      }
    }
  }
  assert.deepEqual(fehlt, []);
});
