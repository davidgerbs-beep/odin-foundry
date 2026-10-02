// Test der Kartenszenen ohne Foundry: node --test tests/szenen.test.mjs
// Prüft in den Szenen-Kompendien und Abenteuerpaketen jede Karte aus daten/szenen_massstab.json:
// Token einer Person 0,8 bis 1,2 m im echten Kartenmaßstab, alles Platzierte innerhalb des Bildes.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from '../werkzeuge/leveldb.mjs';
import { RASTER_MIN, bildRechteck, kartenSchluessel, stelleUm } from '../werkzeuge/massstab.mjs';
import { tokenGroesseAnpassen } from '../module/szenen.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const massstab = JSON.parse(fs.readFileSync(path.join(wurzel, 'daten/szenen_massstab.json'), 'utf8'));
const TEILE = ['tokens', 'lights', 'notes', 'walls', 'drawings', 'tiles', 'sounds', 'regions', 'templates'];

// Bildgröße aus dem WebP-Kopf (VP8, VP8L oder VP8X)
function webpGroesse(datei) {
  const b = fs.readFileSync(datei);
  const art = b.toString('ascii', 12, 16);
  if (art === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  if (art === 'VP8L') {
    const bits = b.readUInt32LE(21);
    return [1 + (bits & 0x3fff), 1 + ((bits >> 14) & 0x3fff)];
  }
  if (art === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  throw new Error(`${datei}: kein WebP`);
}

function hintergrund(szene, levels) {
  const level = levels.find((l) => l._id === szene.initialLevel) ?? levels[0];
  return level?.background?.src ?? szene.background?.src;
}

// Alle Kartenszenen mit ihren Teilen, aus Kompendien und Abenteuerpaketen
function sammle() {
  const liste = [];
  for (const pack of ['odin-szenen', 'odin-szenen-en']) {
    const daten = lesePack(path.join(wurzel, 'packs', pack));
    for (const [k, szene] of daten) {
      if (!k.startsWith('!scenes!')) continue;
      const levels = (szene.levels ?? []).map((id) => daten.get(`!scenes.levels!${szene._id}.${id}`)).filter(Boolean);
      const src = hintergrund(szene, levels);
      if (!massstab.karten[kartenSchluessel(src)]) continue;
      const teile = {};
      for (const art of TEILE) teile[art] = (szene[art] ?? []).map((id) => daten.get(`!scenes.${art}!${szene._id}.${id}`));
      liste.push({ pack, szene, teile, src });
    }
  }
  for (const pack of ['odin-abenteuerpakete', 'odin-abenteuerpakete-en']) {
    for (const [k, abenteuer] of lesePack(path.join(wurzel, 'packs', pack))) {
      if (!k.startsWith('!adventures!')) continue;
      for (const szene of abenteuer.scenes ?? []) {
        const src = hintergrund(szene, szene.levels ?? []);
        if (massstab.karten[kartenSchluessel(src)]) liste.push({ pack, szene, teile: szene, src });
      }
    }
  }
  return liste;
}

const szenen = sammle();

test('Alle acht Karten der Grauen Akten sind in jedem Pack gefunden', () => {
  for (const pack of ['odin-szenen', 'odin-szenen-en', 'odin-abenteuerpakete', 'odin-abenteuerpakete-en']) {
    const nummern = szenen.filter((s) => s.pack === pack).map((s) => kartenSchluessel(s.src)).sort();
    assert.deepEqual(nummern, Object.keys(massstab.karten).sort(), pack);
  }
});

for (const { pack, szene, teile, src } of szenen) {
  const eintrag = massstab.karten[kartenSchluessel(src)];
  const name = `${pack}: ${szene.name}`;

  test(`${name}: Raster passt zum gemessenen Maßstab`, () => {
    const { size, distance, units } = szene.grid;
    assert.equal(units, 'm');
    assert.ok(Number.isInteger(size) && size >= RASTER_MIN, `grid.size ${size}`);
    const pxProMeter = size / distance;
    assert.ok(Math.abs(pxProMeter - eintrag.pxProMeter) / eintrag.pxProMeter < 0.05,
      `Raster ${pxProMeter} px/m, Karte ${eintrag.pxProMeter} px/m`);
    assert.equal(szene.flags?.['odin-rpg']?.massstab?.pxProMeter, eintrag.pxProMeter);
  });

  test(`${name}: Szene ist so groß wie das Bild`, () => {
    const [w, h] = webpGroesse(path.join(wurzel, src.replace('systems/odin-rpg/', '')));
    assert.deepEqual([szene.width, szene.height], [w, h]);
  });

  test(`${name}: Token einer Person 0,8 bis 1,2 m, auf Lageplänen tokenFelder`, () => {
    assert.equal(szene.flags?.['odin-rpg']?.massstab?.tokenFelder, eintrag.tokenFelder);
    for (const t of teile.tokens) {
      assert.equal(t.width, t.height, t.name);
      assert.equal(t.width * 2, Math.round(t.width * 2), `${t.name}: Breite ${t.width} nicht in Schritten von 0,5`);
      if (eintrag.tokenFelder) {
        assert.equal(t.width, eintrag.tokenFelder, t.name);
        continue;
      }
      const meter = (t.width * szene.grid.size) / eintrag.pxProMeter;
      assert.ok(meter >= 0.8 && meter <= 1.2, `${t.name}: ${meter.toFixed(2)} m`);
    }
  });

  test(`${name}: Wände, Türen, Token, Notizen und Lichter liegen im Bild`, () => {
    const b = bildRechteck(szene);
    const drin = (x, y, was) => assert.ok(x >= b.x && y >= b.y && x <= b.x + b.w && y <= b.y + b.h,
      `${was} bei ${x}/${y} außerhalb von ${b.x}/${b.y} bis ${b.x + b.w}/${b.y + b.h}`);
    for (const w of teile.walls) {
      const was = w.door ? `Tür ${w._id}` : `Wand ${w._id}`;
      drin(w.c[0], w.c[1], was);
      drin(w.c[2], w.c[3], was);
    }
    for (const t of teile.tokens) {
      const px = t.width * szene.grid.size;
      drin(t.x, t.y, `Token ${t.name}`);
      drin(t.x + px, t.y + px, `Token ${t.name}`);
    }
    for (const n of teile.notes) drin(n.x, n.y, `Notiz ${n.text}`);
    for (const l of teile.lights) drin(l.x, l.y, `Licht ${l._id}`);
  });
}

test('Umrechnung: Rand vor dem Bild wie in Foundry', () => {
  assert.equal(bildRechteck({ padding: 0.1, width: 1239, height: 1753, grid: { size: 50 } }).x, 150);
  assert.equal(bildRechteck({ padding: 0.1, width: 1239, height: 1753, grid: { size: 50 } }).y, 200);
  assert.equal(bildRechteck({ padding: 0.1, width: 1400, height: 990, grid: { size: 24 } }).x, 144);
  assert.equal(bildRechteck({ padding: 0.1, width: 1400, height: 990, grid: { size: 24 } }).y, 120);
});

test('Umrechnung: Bildpunkte bleiben, Token behält Mittelpunkt, zweiter Lauf ändert nichts', () => {
  const szene = { padding: 0.1, width: 1400, height: 990, grid: { size: 50, distance: 1, units: 'm' } };
  const teile = {
    tokens: [{ name: 'A', x: 600, y: 400, width: 0.8, height: 0.8 }],
    notes: [{ x: 700, y: 500 }],
    lights: [{ x: 650, y: 450, config: { dim: 2.4, bright: 0.6 } }],
    walls: [{ c: [300, 200, 400, 200], door: 1 }],
  };
  const eintrag = { pxProMeter: 24.2, rasterMeter: 1 };
  const vorher = bildRechteck(szene);
  stelleUm(szene, teile, eintrag);
  const nachher = bildRechteck(szene);
  const dx = nachher.x - vorher.x, dy = nachher.y - vorher.y;
  assert.deepEqual(teile.notes[0], { x: 700 + dx, y: 500 + dy });
  assert.deepEqual(teile.walls[0].c, [300 + dx, 200 + dy, 400 + dx, 200 + dy]);
  const t = teile.tokens[0];
  assert.equal(t.width, 1);
  assert.equal(t.x + 12, 620 + dx);
  assert.equal(t.y + 12, 420 + dy);
  // Lichtradius in Pixeln gleich: vorher 2,4 m bei 50 px/m, nachher bei 24 px/m
  assert.ok(Math.abs(teile.lights[0].config.dim * 24 - 2.4 * 50) < 0.5);
  const stand = JSON.stringify([szene, teile]);
  stelleUm(szene, teile, eintrag);
  assert.equal(JSON.stringify([szene, teile]), stand);
});

test('Lagepläne: Karten 1 und 5 haben 1,5 Felder, alle anderen keine eigene Token-Größe', () => {
  for (const [k, e] of Object.entries(massstab.karten)) {
    assert.equal(e.tokenFelder, ['grauakten/01', 'grauakten/05'].includes(k) ? 1.5 : undefined, k);
  }
});

test('Umrechnung: tokenFelder setzt die Breite, Mittelpunkt bleibt, Maßstab bleibt', () => {
  const szene = { padding: 0.1, width: 1400, height: 990, grid: { size: 22, distance: 2, units: 'm' } };
  const teile = { tokens: [{ name: 'A', x: 700, y: 400, width: 0.5, height: 0.5 }] };
  stelleUm(szene, teile, { pxProMeter: 11.2, rasterMeter: 2, tokenFelder: 1.5 });
  assert.deepEqual(szene.grid, { size: 22, distance: 2, units: 'm' });
  assert.equal(teile.tokens[0].width, 1.5);
  assert.equal(teile.tokens[0].x + 16.5, 705.5);
  assert.equal(szene.flags['odin-rpg'].massstab.tokenFelder, 1.5);
});

// Hook für neu gezogene Token mit Platzhaltern statt Foundry-Dokumenten
function neuerToken(szeneFlags, groesse, vorlage) {
  return {
    parent: { flags: szeneFlags },
    width: groesse, height: groesse,
    actor: vorlage ? { prototypeToken: { width: vorlage, height: vorlage } } : null,
    updateSource(d) { Object.assign(this, d); },
  };
}

test('Hook: neu gezogener Akteur bekommt auf Lageplänen 1,5 Felder', () => {
  const t = neuerToken({ 'odin-rpg': { massstab: { tokenFelder: 1.5 } } }, 1, 1);
  tokenGroesseAnpassen(t);
  assert.equal(t.width, 1.5);
  assert.equal(t.height, 1.5);
});

test('Hook: andere Szenen und bewusst geänderte Größen bleiben', () => {
  const ohne = neuerToken({ 'odin-rpg': { massstab: { pxProMeter: 24.2 } } }, 1, 1);
  tokenGroesseAnpassen(ohne);
  assert.equal(ohne.width, 1);
  const leer = neuerToken({}, 1, 1);
  tokenGroesseAnpassen(leer);
  assert.equal(leer.width, 1);
  const kopie = neuerToken({ 'odin-rpg': { massstab: { tokenFelder: 1.5 } } }, 3, 1);
  tokenGroesseAnpassen(kopie);
  assert.equal(kopie.width, 3);
});
