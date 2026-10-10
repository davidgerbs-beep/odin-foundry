// Test der O.D.I.N.-Würfel für Dice So Nice (module/dsn.mjs, assets/wuerfel/v2/) ohne Foundry: node --test tests/dsn.test.mjs
// Mit ODIN_WERKSTATT=<odin-werkstatt> zusätzlich: die Modelle entsprechen den Realm-Würfeln dort (werkzeuge/wuerfel-v2.mjs).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MODELLE, KLASSEN, V2, aussehen, mindestens, modellAn } from '../module/dsn.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const v2 = path.join(wurzel, 'assets/wuerfel/v2');
const lies = (d) => JSON.parse(fs.readFileSync(d, 'utf8'));

test('Modelle: weiß, bunt, sechs Klassen und weiß mit jedem Klassenzeichen', () => {
  assert.equal(Object.keys(MODELLE).length, 14);
  for (const k of KLASSEN) assert.ok(MODELLE[`odin-v2-${k}`] && MODELLE[`odin-v2-weiss-${k}`], k);
  assert.equal(V2, 'systems/odin-rpg/assets/wuerfel/v2/');
  assert.deepEqual(fs.readdirSync(v2).sort(), Object.values(MODELLE).sort(), 'keine fehlenden und keine überzähligen Ordner');
});

test('glTF je Modell: Puffer und Texturen vorhanden, nur optionale Erweiterungen, Material wie Fassung 2', () => {
  for (const ordner of Object.values(MODELLE)) {
    const d = path.join(v2, ordner), g = lies(path.join(d, 'dice_6.gltf'));
    for (const u of [...g.buffers.map((b) => b.uri), ...g.images.map((b) => b.uri)]) assert.ok(fs.existsSync(path.join(d, u)), `${ordner}/${u}`);
    assert.equal(fs.readdirSync(path.join(d, 'textures')).length, g.images.length, `${ordner}: keine überzähligen Texturen`);
    assert.equal(g.extensionsRequired, undefined, ordner);
    const m = g.materials[0];
    assert.equal(m.pbrMetallicRoughness.metallicFactor, 0);
    assert.equal(m.occlusionTexture.index, m.pbrMetallicRoughness.metallicRoughnessTexture.index, `${ordner}: ORM`);
    assert.ok(m.extensions?.KHR_materials_clearcoat, `${ordner}: Klarlack`);
    assert.equal(m.extensions?.KHR_materials_emissive_strength, undefined, `${ordner}: leuchtet nicht`);
    assert.deepEqual(g.images.map((b) => b.mimeType), ['image/webp', 'image/webp', 'image/webp', 'image/webp']);
    // gerundeter W6: Ausdehnung wie das Physik-Polyeder (51,96), mehr Dreiecke als die 12 des flachen Würfels
    const p = g.accessors[g.meshes[0].primitives[0].attributes.POSITION];
    assert.ok(Math.abs(p.max[0] - 51.96) < 0.01 && Math.abs(p.min[1] + 51.96) < 0.01, `${ordner}: ${p.max}`);
    assert.ok(g.accessors[g.meshes[0].primitives[0].indices].count / 3 > 12, ordner);
  }
});

test('Mit ODIN_WERKSTATT: Netz und Texturen bytegleich mit den Realm-Würfeln, glTF bis auf generator gleich', { skip: !process.env.ODIN_WERKSTATT }, () => {
  for (const ordner of Object.values(MODELLE)) {
    const q = path.join(process.env.ODIN_WERKSTATT, 'realm/wuerfel', ordner), d = path.join(v2, ordner);
    const [a, b] = [lies(path.join(q, 'dice_6.gltf')), lies(path.join(d, 'dice_6.gltf'))];
    delete a.asset.generator; delete b.asset.generator;
    assert.deepEqual(b, a, ordner);
    for (const u of [...a.buffers.map((x) => x.uri), ...a.images.map((x) => x.uri)]) assert.ok(fs.readFileSync(path.join(q, u)).equals(fs.readFileSync(path.join(d, u))), `${ordner}/${u}`);
  }
});

test('Versionen: 3D erst ab Dice So Nice 6.4 und nur mit Einstellung 3D', () => {
  assert.equal(mindestens('6.4.0', '6.4.0'), true);
  assert.equal(mindestens('6.4.4', '6.4.0'), true);
  assert.equal(mindestens('6.10', '6.4.0'), true);
  assert.equal(mindestens('7.0.0', '6.4.0'), true);
  assert.equal(mindestens('6.3.9', '6.4.0'), false);
  assert.equal(mindestens('5.2.1', '6.4.0'), false);
  assert.equal(mindestens(undefined, '6.4.0'), false);
  assert.equal(modellAn('3d', '6.4.4'), true);
  assert.equal(modellAn('klassisch', '6.4.4'), false);
  assert.equal(modellAn('3d', '6.3.0'), false);
});

test('Aussehen klassisch: wie bisher (Farbsatz und Etiketten je Klasse)', () => {
  assert.deepEqual(aussehen({ faces: 6, flavor: 'weiss' }), { colorset: 'odin-weiss', system: 'odin-hell' });
  assert.deepEqual(aussehen({ faces: 6, flavor: 'bunt' }), { colorset: 'odin-bunt', system: 'odin-dunkel' });
  assert.deepEqual(aussehen({ faces: 6, flavor: 'weiss' }, { kl: 'psion' }), { colorset: 'odin-weiss', system: 'odin-hell-psion' });
  assert.deepEqual(aussehen({ faces: 6, flavor: 'bunt' }, { kl: 'psion' }), { colorset: 'odin-psion', system: 'odin-dunkel-psion' });
  assert.deepEqual(aussehen({ faces: 6 }, { kl: 'agent' }), { colorset: 'odin-weiss', system: 'odin-hell-agent' }, 'ohne Farbe weiß');
});

test('Aussehen 3D: Modell je Klasse, weiß mit Klassenzeichen, Farbsatz als Rückfall', () => {
  const o = { modell: true };
  assert.deepEqual(aussehen({ faces: 6, flavor: 'weiss' }, o), { colorset: 'odin-weiss', system: 'odin-v2-weiss' });
  assert.deepEqual(aussehen({ faces: 6, flavor: 'bunt' }, o), { colorset: 'odin-bunt', system: 'odin-v2-bunt' });
  for (const kl of KLASSEN) {
    assert.deepEqual(aussehen({ faces: 6, flavor: 'weiss' }, { ...o, kl }), { colorset: 'odin-weiss', system: `odin-v2-weiss-${kl}` });
    assert.deepEqual(aussehen({ faces: 6, flavor: 'bunt' }, { ...o, kl }), { colorset: `odin-${kl}`, system: `odin-v2-${kl}` });
  }
  for (const a of [aussehen({ faces: 6 }, { ...o, kl: 'soldier' }), aussehen({ faces: 6, flavor: 'bunt' }, { ...o, kl: 'scientist' })]) assert.ok(MODELLE[a.system], a.system);
});

test('Freie Spielerfarbe: bunte Würfel klassisch in Spielerfarbe, weiße bleiben 3D', () => {
  const eigen = { colorset: 'custom', background: '#3366cc', system: 'odin-dunkel-psion' };
  assert.equal(aussehen({ faces: 6, flavor: 'bunt' }, { kl: 'psion', modell: true, eigen }), eigen);
  assert.equal(aussehen({ faces: 6, flavor: 'bunt' }, { kl: 'psion', modell: false, eigen }), eigen);
  assert.equal(aussehen({ faces: 6, flavor: 'weiss' }, { kl: 'psion', modell: true, eigen }).system, 'odin-v2-weiss-psion');
});

test('Andere Würfel bleiben unverändert', () => {
  assert.equal(aussehen({ faces: 20 }, { modell: true }), null);
  assert.equal(aussehen({ faces: 6, flavor: 'schaden' }, { modell: true }), null);
  assert.equal(aussehen(null), null);
});

test('Einstellung „Würfel von Dice So Nice“ in odin.mjs mit Texten in DE und EN', () => {
  const code = fs.readFileSync(path.join(wurzel, 'odin.mjs'), 'utf8');
  assert.match(code, /register\('odin-rpg', 'wuerfelDarstellung'/);
  assert.match(code, /modelFile: `\$\{dsn\.V2\}\$\{ordner\}\/dice_6\.gltf`/);
  for (const s of ['de', 'en']) {
    const e = lies(path.join(wurzel, `lang/${s}.json`)).ODIN.Einstellung;
    for (const k of ['WuerfelDarstellung', 'WuerfelDarstellungHinweis', 'WuerfelDarstellung3d', 'WuerfelDarstellungKlassisch']) assert.ok(e[k], `${s}: ${k}`);
  }
});
