// Tauscht alte Buchcover in allen Packs gegen die neuen aus daten/cover.json.
// Die Sprache eines Packs steht in system.json (flags.odin-rpg.sprache).
//
// Aufruf aus dem Wurzelordner des Systems:
//   node werkzeuge/cover-tauschen.mjs             nur anzeigen, nichts schreiben
//   node werkzeuge/cover-tauschen.mjs --schreiben Packs neu schreiben
// Zum Schreiben wird classic-level gebraucht (siehe werkzeuge/packschreiber.mjs).
// Mehrfach anwendbar: Ohne alte Verweise bleibt jeder Pack unverändert.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from './leveldb.mjs';
import { schreibePack } from './packschreiber.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SYSTEM = 'systems/odin-rpg/';
const daten = JSON.parse(fs.readFileSync(path.join(wurzel, 'daten/cover.json'), 'utf8'));
const system = JSON.parse(fs.readFileSync(path.join(wurzel, 'system.json'), 'utf8'));
const schreiben = process.argv.includes('--schreiben');

/** Ersetzt in allen Zeichenketten eines Dokuments die alten Pfade, zählt die Treffer. */
function tausche(wert, paare, zaehler) {
  if (typeof wert === 'string') {
    let neu = wert;
    for (const [alt, ersatz] of paare) {
      const teile = neu.split(alt);
      zaehler.n += teile.length - 1;
      neu = teile.join(ersatz);
    }
    return neu;
  }
  if (Array.isArray(wert)) return wert.map((w) => tausche(w, paare, zaehler));
  if (wert && typeof wert === 'object') {
    for (const k of Object.keys(wert)) wert[k] = tausche(wert[k], paare, zaehler);
  }
  return wert;
}

for (const pack of system.packs) {
  const sprache = pack.flags?.['odin-rpg']?.sprache;
  if (!sprache) throw new Error(`${pack.name}: Sprache fehlt in system.json`);
  const paare = daten.cover.flatMap((c) => c.ersetzt.map((alt) => [SYSTEM + alt, SYSTEM + c[sprache]]));
  const ordner = path.join(wurzel, pack.path);
  const inhalt = lesePack(ordner);
  let summe = 0;
  for (const [k, dok] of inhalt) {
    const zaehler = { n: 0 };
    tausche(dok, paare, zaehler);
    if (zaehler.n) console.log(`${pack.name} (${sprache}) ${k} ${dok.name ?? ''}: ${zaehler.n}`);
    summe += zaehler.n;
  }
  if (schreiben && summe) await schreibePack(ordner, inhalt);
}
console.log(schreiben ? 'Fertig.' : 'Nur angezeigt. Mit --schreiben werden die Packs geändert.');
