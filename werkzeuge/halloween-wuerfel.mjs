// Würfelseiten für das Modul „O.D.I.N. Halloween-Würfel“ (halloween/): sechs Seiten und sechs Reliefs, 512 × 512 px wie die
// O.D.I.N.-Würfel des Systems (assets/wuerfel/).
// - Augen 1 bis 5: die Augen des Systems (dunkel_<n>.png), eingefärbt fast schwarz (#1a120c, wie Spieltisch und Owlbear).
// - Seite 6: das Kürbisgesicht aus dem Spieltisch (werkstatt spieltisch/halloween_wuerfel.mjs, Vorlage von Dave: böse schräge
//   Augen, Nase, Mund mit Reißzähnen oben und unten), viewBox 0 0 20 20, mittig, so groß wie die Windrose der Sechs (etwa 80 %).
// - Reliefs: 1 bis 5 aus dem System (relief_<n>.png), 6 das Gesicht als Vertiefung (schwarz auf weiß, leicht weichgezeichnet).
// Ergebnis in halloween/assets/ (versioniert). Braucht ImageMagick. Aufruf: node werkzeuge/halloween-wuerfel.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SYSTEM = path.join(WURZEL, 'assets/wuerfel'), ZIEL = path.join(WURZEL, 'halloween/assets');
export const AUGEN = '#1a120c';
export const PFAD = 'M2.6 5.2 8.4 7.9 7.2 9.9 3.4 9.2Z M17.4 5.2 11.6 7.9 12.8 9.9 16.6 9.2Z M10 9.4 11.2 11.4 8.8 11.4Z M2 11.2 4.3 12.5 5.4 15 6.5 12.9 8.6 13.3 10 14.6 11.4 13.3 13.5 12.9 14.6 15 15.7 12.5 18 11.2 16.4 15.3 14 17.2 12.6 15.6 11.4 17.8 10 18 8.6 17.8 7.4 15.6 6 17.2 3.6 15.3Z';
const N = 512, ANTEIL = 0.8;

mkdirSync(ZIEL, { recursive: true });
const datei = (n) => path.join(ZIEL, n);
for (let n = 1; n <= 5; n++) {
  execFileSync('convert', [path.join(SYSTEM, `dunkel_${n}.png`), '-fill', AUGEN, '-colorize', '100', '-strip', datei(`augen_${n}.png`)]);
  execFileSync('convert', [path.join(SYSTEM, `relief_${n}.png`), '-strip', datei(`relief_${n}.png`)]);
}
// Gesicht mittig auf 512 × 512, mit -draw gezeichnet (ImageMagick ohne SVG-Delegate)
const s = (N * ANTEIL) / 20, versatz = (N - 20 * s) / 2;
const gesicht = (grund, farbe) => ['-size', `${N}x${N}`, `xc:${grund}`, '-fill', farbe, '-stroke', 'none',
  '-draw', `translate ${versatz},${versatz} scale ${s},${s} path '${PFAD}'`];
execFileSync('convert', [...gesicht('none', AUGEN), '-strip', datei('augen_6.png')]);
execFileSync('convert', [...gesicht('#fff', '#000'), '-colorspace', 'Gray', '-blur', '0x2', '-strip', datei('relief_6.png')]);
console.log(`halloween/assets: augen_1 bis augen_6, relief_1 bis relief_6 (${N} × ${N})`);
