// Portrait und runder Token für eine Person aus einem Rohbild, im Stil der vorhandenen Leute-Bilder:
// - Portrait: 600 × 800 px, WebP, Sepia (Graustufen, Schwarz auf #130b02, Weiß auf #fbeaca, wie die Tiefen und Lichter der
//   vorhandenen Portraits, z. B. npc-di-ferris.webp), Ausschnitt mittig auf 3 : 4
// - Token: 256 × 256 px, WebP mit Transparenz: Ausschnitt Kopf und Schultern (oberes Quadrat des Portraits) im Kreis mit Radius
//   107 px, dunkle Linie, Ring 17 px breit (Gegner rot #812625, Verbündete Messing #c8b07a), dunkler Außenrand, wie assets/token/
// Braucht ImageMagick (convert). Aufruf: node werkzeuge/leute-bild.mjs <rohbild> <name> [gegner|verbuendet]
//   schreibt assets/gegner/<name>.webp und assets/token/<name>.webp
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [roh, name, art = 'gegner'] = process.argv.slice(2);
if (!roh || !name) { console.error('Aufruf: node werkzeuge/leute-bild.mjs <rohbild> <name> [gegner|verbuendet]'); process.exit(2); }
const assets = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'assets');
const portrait = path.join(assets, 'gegner', `${name}.webp`), token = path.join(assets, 'token', `${name}.webp`);
const ring = art === 'verbuendet' ? '#c8b07a' : '#812625';
execFileSync('convert', [roh, '-resize', '600x800^', '-gravity', 'center', '-extent', '600x800', '-colorspace', 'Gray',
  '-colorspace', 'sRGB', '+level-colors', '#130b02,#fbeaca', '-quality', '85', portrait]);
// Token: oberes Quadrat (Kopf und Schultern), auf 214 px (Durchmesser des Innenkreises) und in den Ring gesetzt
execFileSync('convert', ['-size', '256x256', 'xc:none',
  '-fill', '#1a0400', '-draw', 'circle 128,128 128,0',
  '-fill', ring, '-draw', 'circle 128,128 128,2',
  '-fill', '#290000', '-draw', 'circle 128,128 128,19',
  '(', portrait, '-gravity', 'north', '-crop', '540x540+0+20', '+repage', '-resize', '214x214',
  '(', '-size', '214x214', 'xc:black', '-fill', 'white', '-draw', 'circle 107,107 107,0', ')', '-alpha', 'off', '-compose', 'CopyOpacity', '-composite', ')',
  '-gravity', 'center', '-compose', 'Over', '-composite', '-quality', '85', token]);
console.log(`${portrait}\n${token}`);
