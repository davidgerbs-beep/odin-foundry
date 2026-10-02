// Stellt die Kartenszenen in den Packs auf den gemessenen Maßstab um (daten/szenen_massstab.json).
// Betroffen sind die Szenen-Kompendien und die Abenteuerpakete, die eigene Kopien der Szenen tragen.
//
// Aufruf aus dem Wurzelordner des Systems:
//   node werkzeuge/szenen-massstab.mjs            nur anzeigen, nichts schreiben
//   node werkzeuge/szenen-massstab.mjs --schreiben Packs neu schreiben
// Zum Schreiben wird classic-level gebraucht (wie beim Foundry-CLI), etwa per
//   npm install --no-save classic-level
// Das Skript ist mehrfach anwendbar: Stimmt das Raster schon, ändert sich nichts.
// Foundry vorher beenden, damit die Packs nicht gesperrt sind.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from './leveldb.mjs';
import { stelleUm, kartenSchluessel } from './massstab.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const massstab = JSON.parse(fs.readFileSync(path.join(wurzel, 'daten/szenen_massstab.json'), 'utf8'));
const schreiben = process.argv.includes('--schreiben');

const SZENEN = ['odin-szenen', 'odin-szenen-en'];
const PAKETE = ['odin-abenteuerpakete', 'odin-abenteuerpakete-en'];
const TEILE = ['tokens', 'lights', 'notes', 'walls', 'drawings', 'tiles', 'sounds', 'regions', 'templates'];

const zeilen = [];
function bericht(pack, szene, erg) {
  const t = erg.tokenAlt[0];
  zeilen.push([pack, szene.name, `${erg.alt.size}/${erg.alt.distance}/${erg.alt.units}`,
    `${erg.ziel.size}/${erg.ziel.distance}/m`, t ? `${t.width} -> ${erg.ziel.tokenFelder}` : '-',
    `${erg.dx}/${erg.dy}`, erg.faktor.toFixed(3), erg.abgelegt.join(', ')].join(' | '));
}

function hintergrund(szene, levels) {
  const level = levels.find((l) => l._id === szene.initialLevel) ?? levels[0];
  return level?.background?.src ?? szene.background?.src;
}

// Szenen-Kompendium: Teile liegen als eigene Schlüssel „!scenes.<art>!<szene>.<id>“
function szenenPack(daten, pack) {
  let anzahl = 0;
  for (const [k, szene] of daten) {
    if (!k.startsWith('!scenes!')) continue;
    const levels = (szene.levels ?? []).map((id) => daten.get(`!scenes.levels!${szene._id}.${id}`)).filter(Boolean);
    const eintrag = massstab.karten[kartenSchluessel(hintergrund(szene, levels))];
    if (!eintrag) continue;
    const teile = {};
    for (const art of TEILE) {
      teile[art] = (szene[art] ?? []).map((id) => {
        const d = daten.get(`!scenes.${art}!${szene._id}.${id}`);
        if (!d) throw new Error(`${pack}: ${szene.name}: ${art} ${id} fehlt`);
        return d;
      });
    }
    bericht(pack, szene, stelleUm(szene, teile, eintrag, massstab.personMeter));
    anzahl++;
  }
  return anzahl;
}

// Abenteuerpakete: Szenen samt Teilen liegen eingebettet im Abenteuer
function paketPack(daten, pack) {
  let anzahl = 0;
  for (const [k, abenteuer] of daten) {
    if (!k.startsWith('!adventures!')) continue;
    for (const szene of abenteuer.scenes ?? []) {
      const eintrag = massstab.karten[kartenSchluessel(hintergrund(szene, szene.levels ?? []))];
      if (!eintrag) continue;
      bericht(pack, szene, stelleUm(szene, szene, eintrag, massstab.personMeter));
      anzahl++;
    }
  }
  return anzahl;
}

async function schreibePack(ordner, daten) {
  const { ClassicLevel } = await import('classic-level');
  const neu = `${ordner}.neu`;
  fs.rmSync(neu, { recursive: true, force: true });
  const db = new ClassicLevel(neu, { keyEncoding: 'utf8', valueEncoding: 'json' });
  const schluessel = [...daten.keys()].sort();
  await db.batch(schluessel.map((key) => ({ type: 'put', key, value: daten.get(key) })));
  await db.compactRange('\u0000', '￿');
  await db.close();
  for (const name of ['LOCK', 'LOG', 'LOG.old']) fs.rmSync(path.join(neu, name), { force: true });
  fs.rmSync(ordner, { recursive: true, force: true });
  fs.renameSync(neu, ordner);
}

for (const [packs, umstellen] of [[SZENEN, szenenPack], [PAKETE, paketPack]]) {
  for (const pack of packs) {
    const ordner = path.join(wurzel, 'packs', pack);
    const daten = lesePack(ordner);
    const anzahl = umstellen(daten, pack);
    if (schreiben && anzahl) await schreibePack(ordner, daten);
  }
}

console.log('Pack | Szene | alt size/distance/units | neu | Token-Breite | Versatz dx/dy | Lichtfaktor | abgelegt');
for (const z of zeilen) console.log(z);
console.log(schreiben ? 'Packs geschrieben.' : 'Nur angezeigt. Mit --schreiben werden die Packs geändert.');
