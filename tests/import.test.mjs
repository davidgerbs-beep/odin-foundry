// Test des Generator-Imports ohne Foundry: node --test tests/import.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';

// Minimale Platzhalter für die Foundry-Globals, die importDaten benutzt
globalThis.game = { i18n: { lang: 'de', format: (k) => k } };
globalThis.foundry = { utils: { escapeHTML: (s) => String(s) } };

const { kennungGueltig, importDaten, istEnglischerExport } = await import('../module/import.mjs');

test('Kennung: charakter und character werden angenommen', () => {
  assert.equal(kennungGueltig('charakter'), true);
  assert.equal(kennungGueltig('character'), true);
});

test('Kennung: andere Werte werden abgelehnt', () => {
  for (const k of ['Charakter', 'CHARACTER', 'agent', 'karte', 'charakters']) assert.equal(kennungGueltig(k), false, k);
});

test('Kennung: fehlende Kennung wird wie bisher angenommen', () => {
  assert.equal(kennungGueltig(undefined), true);
  assert.equal(kennungGueltig(null), true);
  assert.equal(kennungGueltig(''), true);
});

const deutsch = {
  odin: 'charakter', version: 1,
  state: { cls: 'Thaumaturg', sub: 'Alchemist', code: 'Kessel', attr: { ST: 1, IN: 3 }, skills: { Heimlichkeit: 2 }, powers: [] },
};
const englisch = {
  odin: 'character', version: 1,
  state: { cls: 'Thaumaturge', sub: 'Alchemist', code: 'Kettle', attr: { STR: 1, INT: 3 }, skills: { Stealth: 2 }, powers: [] },
};

test('Import: deutscher Export', () => {
  const { upd, englisch: en } = importDaten(deutsch);
  assert.equal(en, false);
  assert.equal(upd['system.klasse'], 'Thaumaturg');
  assert.equal(upd['system.attribute.IN.punkte'], 3);
  assert.equal(upd['system.fertigkeiten.heimlichkeit.punkte'], 2);
});

test('Import: englischer Export wird auf interne Schlüssel abgebildet', () => {
  assert.equal(istEnglischerExport(englisch), true);
  const { upd, englisch: en } = importDaten(englisch);
  assert.equal(en, true);
  assert.equal(upd['system.klasse'], 'Thaumaturg');
  assert.equal(upd['system.subklasse'], 'Alchemist');
  assert.equal(upd['system.attribute.ST.punkte'], 1);
  assert.equal(upd['system.attribute.IN.punkte'], 3);
  assert.equal(upd['system.fertigkeiten.heimlichkeit.punkte'], 2);
});

test('Import: fremde Kennung wirft, fehlende Kennung nicht', () => {
  assert.throws(() => importDaten({ ...deutsch, odin: 'karte' }), /Import\.KeineFigur/);
  const { odin, ...ohne } = deutsch;
  assert.doesNotThrow(() => importDaten(ohne));
});
