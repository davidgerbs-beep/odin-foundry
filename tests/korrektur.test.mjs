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
  zeilen, BAENDE, ZIEL, wendeAn, begriffVorschlaege, ersetzeInFeldern, mdText, leseNachtraege, uebertrage, teileListe, fuegeAbsatzEin, wendeNachtraegeAn,
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

test('Anwenden: Satzanfang verloren oder Satz verdoppelt geht an die Hand', () => {
  const html = '<p>They look at doors differently. O.D.I.N. has sealed the five staircases, but the song can no longer be captured. It stays.</p>';
  let r = ersetzeSatz(html, 'O.D.I.N. has sealed the five staircases, but the song can no longer be captured.', 'sealed the five staircases, but the song can no longer be contained.');
  assert.equal(r.status, 'von Hand');
  const h2 = '<p>He believes a stone can bring him back. He speaks slowly, with patience.</p>';
  r = ersetzeSatz(h2, 'He believes a stone can bring him back.', 'He believes a sufficiently large stone can bring him back. He speaks slowly, with patience.');
  assert.equal(r.status, 'von Hand');
  assert.match(r.grund, /verdoppelt/);
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
  assert.equal(system.grauen, 0, 'Keines: der Gegner selbst hat kein Grauen, die Zahl in Klammern ist der Wurf der Leute');
  r = ersetzeZeile(system, 'Initiative', '3', '2');
  assert.equal(r.status, 'ok');
  assert.equal(system.initiative, 2);
  assert.equal(ersetzeZeile(system, 'Grauen', 'Etwas anderes', 'x').status, 'fehlt');
  const s2 = { grauen: 1 };
  zieheZahlenNach(s2, 'Grauen', 'Verstörend (2), wenn sie sich umdrehen');
  assert.equal(s2.grauen, 2);
  assert.deepEqual(zeilen('<p><strong>Stufe laut Buch:</strong> Profi</p><p><strong>Psi:</strong> 4 + 4</p>').map((z) => z.label), ['Psi']);
});

test('Anwenden: Satz in der Beschreibung einer Kraft (Gegenstand)', () => {
  const kraft = { name: 'Schwerer Griff', system: { beschreibung: '<p>Er wirft sie einmal: Angriff gegen die Verteidigung, Schaden 5.</p>' } };
  const packs = { de: { geaendert: new Set(), kraefte: new Map([['!items!abc', kraft]]) } };
  const e = { id: 'SO-de-x', spr: 'de', art: 'gegenstand', alt: 'Er wirft sie einmal: Angriff gegen die Verteidigung, Schaden 5.',
    neu: 'Er wirft sie einmal: Angriff mit den Erfolgen der Kraftprobe gegen die Verteidigung, Schaden 5.', daten: { art: 'gegenstand', fundstellen: [['kraefte', 'Schwerer Griff']] } };
  const [b] = wendeAn([e], packs);
  assert.equal(b.status, 'ok');
  assert.match(kraft.system.beschreibung, /mit den Erfolgen der Kraftprobe/);
  assert.ok(packs.de.geaendert.has('kraefte'));
  assert.equal(wendeAn([e], packs)[0].status, 'schon');
});

test('Englische Begriffe: Vorschlag nur, wo der Band die neue Form hat; Zellen und ganze Felder', () => {
  const buch = ' horror test against uncanny (1) for everyone who enters | horror uncanny (1) special pack of | the lodge of the silent circle | damage 3 quiet | ';
  const doc = { name: 'Escalation', system: { pools: [{ notiz: 'Silent' }] },
    text: { content: '<p>Horror test against Eerie (1) for everyone who enters.</p><table><tr><td>Horror</td><td>Eerie (1)</td></tr><tr><td>Special</td><td>Pack of three</td></tr></table><p>The Lodge of the Silent Circle.</p>' } };
  const { vorschlaege: v, hinweise } = begriffVorschlaege({ 'odin-abenteuer-en': new Map([['!x!1', doc]]) }, buch, [['Eerie (1)', 'Uncanny (1)'], ['Silent', 'Quiet']]);
  assert.deepEqual(v.map((x) => [x.alt, x.neu, !!x.ganzesFeld]).sort(), [
    ['>Eerie (1)<', '>Uncanny (1)<', false],
    ['Silent', 'Quiet', true],
    ['test against Eerie (1) for everyone who', 'test against Uncanny (1) for everyone who', false],
  ]);
  assert.equal(hinweise.length, 0, '„Silent Circle“ steht so im Band und bleibt');
  for (const x of v) ersetzeInFeldern(doc, x.alt, x.neu, x.ganzesFeld);
  assert.match(doc.text.content, /against Uncanny \(1\) for everyone.*<td>Uncanny \(1\)<\/td>.*Silent Circle/);
  assert.equal(doc.system.pools[0].notiz, 'Quiet');
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

test('Nachträge: Markdown der Buchquellen lesen', () => {
  assert.equal(mdText('- **Hinweis:** Ein Satz mit *Betonung* und [Verweis](x).'), 'Hinweis: Ein Satz mit Betonung und Verweis.');
  assert.equal(mdText('3 | Nummer 341 | Cardiff | Grau'), '3 Nummer 341 Cardiff Grau');
  assert.equal(mdText('[entry - Owen Gwynne Pfandleiher · Menschen]'), 'Owen Gwynne Pfandleiher · Menschen');
  const md = '# x\n\n## Deutsch\n\n### Zeile 3, Knoten\n\n**alt:** Alter Satz.\n\n**neu:** Neuer Satz.\n\n- ergänzen: Neuer Satz.\n\n## Englisch\n\n### Zeile 4, Node\n\n**neu:** - **Clue:** New.\n';
  assert.deepEqual(leseNachtraege(md), [{ spr: 'de', ort: 'Zeile 3, Knoten', alt: 'Alter Satz.', neu: 'Neuer Satz.' }, { spr: 'en', ort: 'Zeile 4, Node', alt: '', neu: 'Clue: New.' }]);
});

test('Nachträge: Änderung auf einen abweichenden Absatz übertragen', () => {
  // Journal hat schon einen Teil (solange), die Änderung des Bandes kommt dazu, Satzzeichen des Journals bleiben
  const r = uebertrage('Er fand einen Kristall, der das Summen dämpfte, wenn er ihn festhielt. Er nahm ihn mit.',
    'Er fand einen Kristall, der das Summen dämpfte, solange er ihn festhielt. Ließ er ihn los, kam es zurück. Linus nahm ihn mit.',
    'Er fand einen Kristall, der das Summen dämpfte, solange er ihn festhielt. Er nahm ihn mit.');
  assert.equal(r.neu, 'Er fand einen Kristall, der das Summen dämpfte, solange er ihn festhielt. Ließ er ihn los, kam es zurück. Linus nahm ihn mit.');
  assert.equal(uebertrage('3 Nummer 341 Cardiff Grau', '3 Nummer 341 Cardiff Grau, kann rot werden', '3 Nummer 341 Cardiff Grau').neu, '3 Nummer 341 Cardiff Grau, kann rot werden');
  assert.ok(uebertrage('Er kam am Montag zurück.', 'Er kam am Dienstag zurück.', 'Er kam am Freitag zurück.').konflikt, 'zu ändernde Stelle fehlt im Journal');
  // Listen: Punkte einzeln, neue Punkte mit Vorgänger
  const t = teileListe({ spr: 'de', ort: 'x', alt: 'Hinweis: Eins (führt zu A) - Hinweis: Zwei bleibt', neu: 'Hinweis: Eins (führt zu B) - Hinweis: Zwei bleibt - Hinweis: Drei ist neu' });
  assert.deepEqual(t.map((x) => [x.alt, x.neu, x.nach ?? null]), [['Hinweis: Eins (führt zu A)', 'Hinweis: Eins (führt zu B)', null], [null, 'Hinweis: Drei ist neu', 'Hinweis: Zwei bleibt']]);
  // Einfügen hinter dem Vorgänger, mit gleichem Etikett
  assert.equal(fuegeAbsatzEin('<ul><li><b>Hinweis:</b> Zwei bleibt</li></ul>', 'Hinweis: Zwei bleibt', 'Hinweis: Drei & neu'),
    '<ul><li><b>Hinweis:</b> Zwei bleibt</li><li><b>Hinweis:</b> Drei &amp; neu</li></ul>');
  assert.equal(fuegeAbsatzEin('<p>A</p><p>A</p>', 'A', 'B'), null, 'Anker muss eindeutig sein');
});

test('Nachträge: in den Packs (im Speicher), nur im Band, gleichnamige Journale getrennt', () => {
  const seite = (id, name, html) => ({ _id: id, name, type: 'text', sort: 0, text: { content: html } });
  const abenteuer = new Map([
    ['!folders!f1', { _id: 'f1', name: 'Band A' }], ['!folders!f2', { _id: 'f2', name: 'Band B' }],
    ['!journal!j1', { _id: 'j1', name: 'Haus', folder: 'f1', pages: ['p1'] }], ['!journal!j2', { _id: 'j2', name: 'Haus', folder: 'f2', pages: ['p2'] }],
    ['!journal.pages!j1.p1', seite('p1', 'Nachspiel', '<p><b>EP:</b> 5 pro Charakter, +1 für die Lösung mit der Wahrheit.</p>')],
    ['!journal.pages!j2.p2', seite('p2', 'Nachspiel', '<p><b>EP:</b> 5 pro Charakter, +1 für die Lösung mit der Wahrheit.</p>')],
  ]);
  const pakete = new Map([['!adventures!a1', { name: 'Band A', actors: [], journal: [{ name: 'Haus', pages: [seite('p1', 'Nachspiel', '<p><b>EP:</b> 5 pro Charakter, +1 für die Lösung mit der Wahrheit.</p>')] }] }]]);
  const packs = { de: { abenteuer, pakete, gegner: new Map(), geaendert: new Set() } };
  const b = wendeNachtraegeAn([{ spr: 'de', ort: 'Zeile 1, Nachspiel', alt: 'EP: 5 pro Charakter, +1 für die Lösung mit der Wahrheit.', neu: 'EP: Grundwert 4 EP, +1 für die Lösung mit der Wahrheit.' }], packs, { de: ['Band A'] });
  assert.equal(b[0].status, 'ok');
  assert.equal(abenteuer.get('!journal.pages!j1.p1').text.content, '<p><b>EP:</b> Grundwert 4 EP, +1 für die Lösung mit der Wahrheit.</p>');
  assert.equal(pakete.get('!adventures!a1').journal[0].pages[0].text.content, '<p><b>EP:</b> Grundwert 4 EP, +1 für die Lösung mit der Wahrheit.</p>');
  assert.match(abenteuer.get('!journal.pages!j2.p2').text.content, /5 pro Charakter/, 'gleichnamiges Journal im anderen Band bleibt');
});

test('Freigabedateien im Repo: lesbar, eindeutig, „alt“ steht noch in den Packs', () => {
  assert.deepEqual(pruefeFreigaben(), []);
  const dateien = fs.existsSync(ZIEL) ? fs.readdirSync(ZIEL).filter((f) => f.endsWith('.md') && !f.startsWith('aenderungen_')) : [];
  assert.deepEqual(dateien.filter((f) => !f.endsWith('_nachlauf.md') && !f.startsWith('begriffe_')).sort(), Object.keys(BAENDE).map((b) => `${b}.md`).sort(), 'je Band eine Freigabedatei');
  for (const f of dateien.filter((f) => f.endsWith('_nachlauf.md'))) assert.ok(BAENDE[f.replace(/_nachlauf\.md$/, '')], `${f}: Nachlauf zu einem bekannten Band`);
  const packs = {};
  const pack = (n) => (packs[n] ??= lesePack(path.join(wurzel, 'packs', n)));
  const fehlt = [];
  for (const f of dateien) {
    for (const e of leseFreigabe(fs.readFileSync(path.join(ZIEL, f), 'utf8'))) {
      if (e.freigabe !== 'offen') continue; // entschieden: „ja“ ist übernommen, „nein“-Stellen können von Hand gerichtet sein
      const en = e.spr === 'en' ? '-en' : '';
      if (e.art === 'satz') {
        const d = pack(`odin-abenteuer${en}`);
        const journale = new Map([...d].filter(([k]) => k.startsWith('!journal!')).map(([, v]) => [v._id, v.name]));
        const ok = e.daten.fundstellen.some(([j, s]) => [...d].some(([k, v]) => k.startsWith('!journal.pages!') && journale.get(k.slice(15).split('.')[0]) === j && v.name === s
          && text(v.text?.content ?? '').replace(/\s+/g, ' ').includes(e.alt)));
        if (!ok) fehlt.push(`${f}: ${e.id}`);
      } else if (e.art === 'begriff') {
        const felder = (o, aus = []) => { if (typeof o === 'string') aus.push(o); else if (o && typeof o === 'object') for (const v of Object.values(o)) felder(v, aus); return aus; };
        const doc = pack(e.daten.pack).get(e.daten.key);
        if (!doc || !felder(doc).some((x) => (e.daten.ganzesFeld ? x === e.alt : x.includes(e.alt)))) fehlt.push(`${f}: ${e.id}`);
      } else if (e.art === 'gegenstand') {
        const ok = e.daten.fundstellen.some(([art, name]) => [...pack(`odin-${art}${en}`).values()].some((v) => v.name === name
          && text(v.system?.beschreibung ?? '').replace(/\s+/g, ' ').includes(e.alt)));
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
