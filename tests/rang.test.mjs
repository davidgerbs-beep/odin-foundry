// Tests für Ränge der Laufbahn und den Platzhalter des Importdialogs, ohne Foundry: node --test tests/import.test.mjs tests/rang.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Sprachdateien wie in Foundry: localize liefert den Text zum Schlüssel, format ersetzt {platzhalter}
const SPRACHEN = Object.fromEntries(['de', 'en'].map((l) => [l, JSON.parse(readFileSync(new URL(`../lang/${l}.json`, import.meta.url), 'utf8'))]));
const nachschlagen = (k) => k.split('.').reduce((o, t) => o?.[t], SPRACHEN[globalThis.game.i18n.lang]) ?? k;
globalThis.game = { i18n: { lang: 'de', localize: (k) => nachschlagen(k), format: (k) => nachschlagen(k) } };
globalThis.foundry = { utils: { escapeHTML: (s) => String(s) } };
const sprache = (l) => { globalThis.game.i18n.lang = l; };

const { rangNachName, rangAnzeige, laufbahnRaengeNormalisieren } = await import('../module/sprache.mjs');
const { importDaten, importPlatzhalter } = await import('../module/import.mjs');
const { DATEN } = await import('../module/daten.mjs');

test('Rang: deutsche und englische Namen ergeben den internen Schlüssel', () => {
  sprache('de');
  DATEN.raenge.forEach((r, i) => {
    assert.equal(rangNachName(r), r);
    assert.equal(rangNachName(DATEN.en.raenge[i]), r);
  });
  assert.equal(rangNachName('Cadet'), 'Kadett');
  assert.equal(rangNachName('senior agent'), 'Senior-Agent');
  assert.equal(rangNachName(' Shadow-Officer '), 'Schattenoffizier');
  assert.equal(rangNachName('Oberst'), '');
  assert.equal(rangNachName(undefined), '');
});

test('Rang: Anzeige folgt der Sprache der Oberfläche, unbekannte Texte bleiben', () => {
  sprache('de');
  assert.equal(rangAnzeige('Kadett'), 'Kadett');
  assert.equal(rangAnzeige('Cadet'), 'Kadett');
  assert.equal(rangAnzeige('Oberst'), 'Oberst');
  sprache('en');
  assert.equal(rangAnzeige('Kadett'), 'Cadet');
  assert.equal(rangAnzeige('Senior-Agent'), 'Senior Agent');
  assert.equal(rangAnzeige('Oberst'), 'Oberst');
  sprache('de');
});

test('Rang: Normalisierung von Laufbahn-Updates, auch Teil-Updates und Löschungen', () => {
  const lb = laufbahnRaengeNormalisieren({ 0: { rang: 'Cadet', mission: 'x' }, 1: { rang: 'Veteran' }, 2: { mission: 'nur Text' }, 3: { rang: 'Oberst' }, '-=4': null });
  assert.deepEqual(lb, { 0: { rang: 'Kadett', mission: 'x' }, 1: { rang: 'Veteran' }, 2: { mission: 'nur Text' }, 3: { rang: 'Oberst' }, '-=4': null });
  assert.equal(laufbahnRaengeNormalisieren(undefined), undefined);
});

const laufbahn = [{ d: '1.2.2026', m: 'Erster Fall', e: 0, f: [], r: 'Cadet' }, { d: '3.2.2026', m: 'Zweiter Fall', e: 30, f: [], r: 'Senior Agent' }, { d: '4.2.2026', m: 'Dritter', e: 0, f: [], r: 'Oberst' }];
const englisch = { odin: 'character', version: 1, state: { cls: 'Agent', sub: 'Spy', attr: {}, skills: {}, powers: [], auf: { ep: 30, log: laufbahn } } };
const deutsch = { odin: 'charakter', version: 1, state: { cls: 'Agent', sub: 'Spy', attr: {}, skills: {}, powers: [], auf: { ep: 30, log: laufbahn.map((l, i) => ({ ...l, r: ['Kadett', 'Senior-Agent', 'Oberst'][i] })) } } };

for (const ui of ['de', 'en']) {
  test(`Import: englischer Export in ${ui === 'de' ? 'deutscher' : 'englischer'} Oberfläche speichert Rang-Schlüssel`, () => {
    sprache(ui);
    const lb = importDaten(englisch).upd['system.laufbahn'];
    assert.deepEqual(Object.values(lb).map((z) => z.rang), ['Kadett', 'Senior-Agent', 'Oberst']);
    sprache('de');
  });
  test(`Import: deutscher Export in ${ui === 'de' ? 'deutscher' : 'englischer'} Oberfläche speichert Rang-Schlüssel`, () => {
    sprache(ui);
    const lb = importDaten(deutsch).upd['system.laufbahn'];
    assert.deepEqual(Object.values(lb).map((z) => z.rang), ['Kadett', 'Senior-Agent', 'Oberst']);
    sprache('de');
  });
}

test('Import: deutscher Export in englischer Oberfläche zeigt englische Ränge', () => {
  sprache('en');
  const lb = importDaten(deutsch).upd['system.laufbahn'];
  assert.deepEqual(Object.values(lb).map((z) => rangAnzeige(z.rang)), ['Cadet', 'Senior Agent', 'Oberst']);
  sprache('de');
});

test('Platzhalter: in der Sprache der Oberfläche, nennt beide Kennungen', () => {
  for (const l of ['de', 'en']) {
    sprache(l);
    const p = importPlatzhalter();
    assert.notEqual(p, 'ODIN.Import.Platzhalter', `Schlüssel fehlt in ${l}.json`);
    assert.match(p, /"odin":"charakter"/);
    assert.match(p, /"odin":"character"/);
  }
  sprache('de');
  assert.match(importPlatzhalter(), /deutschen oder englischen/);
  sprache('en');
  assert.match(importPlatzhalter(), /German or English/);
  sprache('de');
});
