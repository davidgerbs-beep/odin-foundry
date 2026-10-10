// Test der Handout-Bilder der Abenteuer ohne Foundry: node --test tests/handouts.test.mjs
// Die Handouts von „Die Tür“ und „Die Grauen Akten“ sind die Bilder der Website (odin-rpg.pages.dev/pakete/bilder/…),
// unverändert übernommen. Neue Fassungen vom 11.10.2026 (aus den neuen Handout-Heften): Tür 9 DE/EN (Legende rot:
// „Zahlenstation, Pausen zwischen den Gruppen“), Graue Akten 4.1 und 4.3 DE/EN, 5.3 und 6.3 nur EN („Back:“).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { lesePack } from '../werkzeuge/leveldb.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const abenteuer = path.join(wurzel, 'assets/abenteuer');

/** Breite und Höhe einer WebP-Datei aus dem Kopf (VP8, VP8L, VP8X), sonst null. */
function webpGroesse(b) {
  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null;
  const art = b.toString('ascii', 12, 16);
  if (art === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  if (art === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  if (art === 'VP8L') { const v = b.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
  return null;
}

const NEU_11_10 = [
  ['tuer/handouts_de/09.webp', '4bad1c687f3178e1b7811a0e09fc41e45cc26f5d2cf2da2072acb7ac188ffdb3'],
  ['tuer/handouts_en/09.webp', '11f1db08b7d69a7e519a4f665f8f854d55414a552d3751ad7699af426316ccf5'],
  ['grauakten/handouts_de/10.webp', '2f625ef7c4cd3c58558a0fe98578f21cbde3ed6b11f0e266704a504e61186ab1'],
  ['grauakten/handouts_en/10.webp', '270299b38434d4dfbde1a5818a3f04559dcc0b7852371e15a0937ee174b836ad'],
  ['grauakten/handouts_de/12.webp', '2546e468f853378400b803bf15779c3776bdcb5344362ad39d12d46ddc8db18f'],
  ['grauakten/handouts_en/12.webp', '5d73be691331b8f9fad551146a360022110221158ef0d68eea605e9ccbf1baa1'],
  ['grauakten/handouts_en/15.webp', '73f43ad9522b0ab733d9a391582685caa40ab2debe35132e0524d820ed416c25'],
  ['grauakten/handouts_en/18.webp', 'e3ae8f026bf18c155ec5e502341ee6e9521995fc4dc8e5ff62e590fe2e528a10'],
];

test('Handouts von Die Tür und Graue Akten: WebP 910 × 1287, DE und EN gleich viele', () => {
  for (const a of ['tuer', 'grauakten']) {
    const [de, en] = ['de', 'en'].map((s) => fs.readdirSync(path.join(abenteuer, a, `handouts_${s}`)).sort());
    assert.deepEqual(de, en, a);
    for (const s of ['de', 'en']) for (const d of de) {
      assert.deepEqual(webpGroesse(fs.readFileSync(path.join(abenteuer, a, `handouts_${s}`, d))), [910, 1287], `${a}/handouts_${s}/${d}`);
    }
  }
});

test('Neue Fassungen vom 11.10.2026 sind drin (Prüfsummen der Website-Bilder)', () => {
  for (const [datei, summe] of NEU_11_10) {
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(abenteuer, datei))).digest('hex'), summe, datei);
  }
});

test('Jedes Handout-Bild, auf das die Kompendien Abenteuer und Abenteuerpakete verweisen, liegt im System', () => {
  let n = 0;
  for (const p of ['odin-abenteuer', 'odin-abenteuer-en', 'odin-abenteuerpakete', 'odin-abenteuerpakete-en']) {
    const text = JSON.stringify([...lesePack(path.join(wurzel, 'packs', p)).values()]);
    for (const m of text.matchAll(/systems\/odin-rpg\/(assets\/abenteuer\/[\w-]+\/handouts[\w-]*\/[\w.-]+\.webp)/g)) {
      n++;
      assert.ok(fs.existsSync(path.join(wurzel, m[1])), `${p}: ${m[1]}`);
    }
  }
  assert.ok(n > 0, 'keine Verweise gefunden');
  // die acht neuen hängen in den Kompendien
  for (const [datei] of NEU_11_10) {
    const sprache = datei.includes('_en/') ? '-en' : '';
    const text = JSON.stringify([...lesePack(path.join(wurzel, 'packs', `odin-abenteuer${sprache}`)).values()]);
    assert.ok(text.includes(`assets/abenteuer/${datei}`), datei);
  }
});
