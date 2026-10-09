// Test des Moduls „O.D.I.N. Halloween-Würfel“ (halloween/) ohne Foundry: node --test tests/halloween.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { FARBSAETZE, AUGEN, halloweenAn, aussehen } from '../halloween/halloween.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ordner = path.join(wurzel, 'halloween');
// identify und convert (ImageMagick) für die Bildprüfung; fehlen sie, wird nur diese Prüfung übersprungen
const ohneImageMagick = (() => { try { execFileSync('identify', ['-version']); return false; } catch { return true; } })();
const modul = JSON.parse(fs.readFileSync(path.join(ordner, 'module.json'), 'utf8'));

test('module.json: Id, Version, Manifest und Download mit Tag halloween-v<version>', () => {
  assert.equal(modul.id, 'odin-halloween');
  assert.match(modul.version, /^\d+\.\d+\.\d+$/);
  assert.equal(modul.manifest, 'https://raw.githubusercontent.com/davidgerbs-beep/odin-foundry/main/halloween/module.json');
  assert.equal(modul.download, `https://github.com/davidgerbs-beep/odin-foundry/releases/download/halloween-v${modul.version}/odin-halloween.zip`);
  assert.deepEqual(modul.relationships.requires.map((r) => r.id), ['dice-so-nice']);
  for (const d of [...modul.esmodules, ...modul.languages.map((l) => l.path), modul.license]) assert.ok(fs.existsSync(path.join(ordner, d)), d);
});

test('Sprachdateien DE und EN haben dieselben Schlüssel, alle benutzten sind da', () => {
  const flach = (o, v = '') => Object.entries(o).flatMap(([k, w]) => (typeof w === 'object' ? flach(w, `${v}${k}.`) : [`${v}${k}`]));
  const [de, en] = ['de', 'en'].map((s) => flach(JSON.parse(fs.readFileSync(path.join(ordner, `lang/${s}.json`), 'utf8'))).sort());
  assert.deepEqual(de, en);
  const code = fs.readFileSync(path.join(ordner, 'halloween.mjs'), 'utf8');
  const benutzt = [...code.matchAll(/'ODIN_HALLOWEEN\.([\w.]+)'/g)].map((m) => `ODIN_HALLOWEEN.${m[1]}`)
    .concat([...code.matchAll(/t\('(\w+)'\)/g)].map((m) => `ODIN_HALLOWEEN.${m[1]}`), ['ODIN_HALLOWEEN.Knochen', 'ODIN_HALLOWEEN.Kuerbis']);
  for (const k of benutzt) assert.ok(de.includes(k), k);
});

test('Farben wie Spieltisch und Owlbear: Knochen, Kürbis, Augen fast schwarz', () => {
  assert.equal(FARBSAETZE.knochen.background, '#e8dcc0');
  assert.equal(FARBSAETZE.kuerbis.background, '#e8701a');
  assert.equal(AUGEN, '#1a120c');
});

test('Würfelseiten: sechs Augen und sechs Reliefs, 512 × 512, auf der Sechs etwas anderes als Augen', { skip: ohneImageMagick }, () => {
  for (const art of ['augen', 'relief']) {
    for (let n = 1; n <= 6; n++) {
      const d = path.join(ordner, 'assets', `${art}_${n}.png`);
      assert.ok(fs.existsSync(d), d);
      assert.equal(execFileSync('identify', ['-format', '%wx%h', d], { encoding: 'utf8' }), '512x512', d);
    }
  }
  // Die Sechs ist das Gesicht, keine Augen: Sie weicht in mehr als einem Zehntel der Fläche von der Fünf ab
  const a = (n) => path.join(ordner, 'assets', `augen_${n}.png`);
  const anders = Number(spawnSync('compare', ['-metric', 'AE', a(5), a(6), 'null:'], { encoding: 'utf8' }).stderr);
  assert.ok(anders > 0.1 * 512 * 512, `nur ${anders} Pixel anders`);
});

test('Halloween bei O.D.I.N.-Proben: Oktober, immer, nie', () => {
  assert.equal(halloweenAn('oktober', new Date(2026, 9, 31)), true);
  assert.equal(halloweenAn('oktober', new Date(2026, 10, 1)), false);
  assert.equal(halloweenAn('immer', new Date(2026, 3, 1)), true);
  assert.equal(halloweenAn('nie', new Date(2026, 9, 31)), false);
});

test('Aussehen: weiß und ohne Farbe Knochen, bunt Kürbis, andere Würfel bleiben', () => {
  assert.deepEqual(aussehen({ faces: 6, flavor: 'weiss' }), { colorset: 'odin-halloween-knochen', system: 'odin-halloween' });
  assert.deepEqual(aussehen({ faces: 6 }), { colorset: 'odin-halloween-knochen', system: 'odin-halloween' });
  assert.deepEqual(aussehen({ faces: 6, flavor: 'bunt' }), { colorset: 'odin-halloween-kuerbis', system: 'odin-halloween' });
  assert.equal(aussehen({ faces: 6, flavor: 'schaden' }), null);
  assert.equal(aussehen({ faces: 20 }), null);
});

test('Das System-ZIP lässt halloween/ aus, und nur Tags halloween-v… bauen das Modul', () => {
  const system = fs.readFileSync(path.join(wurzel, '.github/workflows/release-assets.yml'), 'utf8');
  assert.match(system, /\^\(tests\|werkzeuge\|kartenraum\|halloween\|media/);
  assert.match(system, /startsWith\(github\.event\.release\.tag_name, 'v'\)/);
  const eigen = fs.readFileSync(path.join(wurzel, '.github/workflows/halloween-release.yml'), 'utf8');
  assert.match(eigen, /startsWith\(github\.event\.release\.tag_name, 'halloween-v'\)/);
});
