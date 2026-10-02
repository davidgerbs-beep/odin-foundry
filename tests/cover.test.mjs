// Test der Buchcover ohne Foundry: node --test tests/cover.test.mjs
// Alte Cover kommen nirgends mehr vor, deutsche Packs zeigen das deutsche Cover,
// englische das englische, und jedes verwendete Cover- und Bannerbild ist vorhanden.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from '../werkzeuge/leveldb.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SYSTEM = 'systems/odin-rpg/';
const daten = JSON.parse(fs.readFileSync(path.join(wurzel, 'daten/cover.json'), 'utf8'));
const system = JSON.parse(fs.readFileSync(path.join(wurzel, 'system.json'), 'utf8'));
const SPRACHEN = ['de', 'en'];

// Bildgröße aus dem WebP-Kopf (VP8, VP8L oder VP8X)
function webpGroesse(datei) {
  const b = fs.readFileSync(datei);
  assert.equal(b.toString('ascii', 0, 4), 'RIFF', datei);
  assert.equal(b.toString('ascii', 8, 12), 'WEBP', datei);
  const art = b.toString('ascii', 12, 16);
  if (art === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  if (art === 'VP8L') {
    const bits = b.readUInt32LE(21);
    return [1 + (bits & 0x3fff), 1 + ((bits >> 14) & 0x3fff)];
  }
  if (art === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  throw new Error(`${datei}: unbekanntes WebP`);
}

// Pack-Inhalt als ein Text je Pack, einmal gelesen
const packs = system.packs.map((p) => ({
  name: p.name,
  sprache: p.flags?.['odin-rpg']?.sprache,
  banner: p.banner,
  text: [...lesePack(path.join(wurzel, p.path)).values()].map((d) => JSON.stringify(d)).join('\n'),
}));

// Alle Textdateien des Systems außer Packs, Tests und Git
function textDateien(ordner, liste = []) {
  for (const e of fs.readdirSync(ordner, { withFileTypes: true })) {
    if (['.git', 'packs', 'node_modules', 'tests'].includes(e.name)) continue;
    const voll = path.join(ordner, e.name);
    if (e.isDirectory()) textDateien(voll, liste);
    else if (/\.(mjs|js|json|html|hbs|css|md)$/.test(e.name) && e.name !== 'cover.json') liste.push(voll);
  }
  return liste;
}

test('Jeder Pack hat eine Sprache', () => {
  for (const p of packs) assert.ok(SPRACHEN.includes(p.sprache), p.name);
});

for (const c of daten.cover) {
  test(`${c.band}: neue Cover liegen vor, 520 x 736`, () => {
    for (const s of SPRACHEN) assert.deepEqual(webpGroesse(path.join(wurzel, c[s])), [520, 736], c[s]);
  });

  test(`${c.band}: alte Cover kommen nirgends mehr vor`, () => {
    for (const alt of c.ersetzt) {
      assert.equal(fs.existsSync(path.join(wurzel, alt)), false, `${alt} liegt noch im System`);
      const name = path.basename(alt);
      for (const p of packs) assert.equal(p.text.includes(alt), false, `${p.name} verweist auf ${alt}`);
      for (const datei of textDateien(wurzel)) {
        const inhalt = fs.readFileSync(datei, 'utf8');
        assert.equal(inhalt.includes(alt) || inhalt.includes(`bilder/${name}`), false, `${datei} verweist auf ${alt}`);
      }
    }
  });

  test(`${c.band}: jede Sprache zeigt nur ihr eigenes Cover`, () => {
    let gefunden = 0;
    for (const p of packs) {
      const fremd = SPRACHEN.filter((s) => s !== p.sprache);
      for (const s of fremd) assert.equal(p.text.includes(SYSTEM + c[s]), false, `${p.name} (${p.sprache}) zeigt das Cover ${c[s]}`);
      if (p.text.includes(SYSTEM + c[p.sprache])) gefunden++;
    }
    assert.ok(gefunden >= 2, `Cover nur in ${gefunden} Packs verwendet`);
  });
}

test('Banner: jede Sprache hat ihr Banner, alle Banner sind vorhanden', () => {
  for (const p of packs) {
    if (!p.banner) continue;
    const datei = p.banner.replace(SYSTEM, '');
    assert.ok(fs.existsSync(path.join(wurzel, datei)), `${p.name}: ${datei} fehlt`);
    for (const s of SPRACHEN) {
      if (s !== p.sprache && datei === daten.banner[s]) assert.fail(`${p.name} (${p.sprache}) nutzt das Banner ${datei}`);
    }
  }
  for (const s of SPRACHEN) assert.deepEqual(webpGroesse(path.join(wurzel, daten.banner[s])), [580, 140]);
});
