// 3D-Würfel für Dice So Nice (ab 6.4, modelFile): übernimmt die W6 der Realm-Würfelpakete Fassung 2 aus der Werkstatt
// (odin-werkstatt, realm/wuerfel/<paket>/: gerundetes Netz, ORM-Textur, Klarlack, Kürbis leuchtet innen) unverändert in
// Netz und Texturen. Gleiche Dateinamen wie in der Werkstatt, damit Änderungen dort im Diff hier sichtbar bleiben.
// - System: weiß, bunt, die sechs Klassen und weiß mit dem Zeichen jeder Klasse nach assets/wuerfel/v2/<paket>/
// - Modul Halloween: Knochen und Kürbis nach halloween/assets/v2/<knochen|kuerbis>/
// Einzige Änderung am glTF: Das Leuchten des Kürbis wird halbiert (KHR_materials_emissive_strength 2,4 -> 1,2). Der Bloom
// von Dice So Nice wirkt nur auf Emissive und ist kräftiger als der von Realm (Messung im Prototyp: 0,9 statt 1,8).
// Aufruf: node werkzeuge/wuerfel-v2.mjs <odin-werkstatt>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [werkstatt] = process.argv.slice(2);
if (!werkstatt) { console.error('Aufruf: node werkzeuge/wuerfel-v2.mjs <odin-werkstatt>'); process.exit(2); }
const REALM = path.join(werkstatt, 'realm/wuerfel');
export const LEUCHTEN_DSN = 0.5;
const KLASSEN = ['soldier', 'investigator', 'scientist', 'thaumaturg', 'agent', 'psion'];
const ZIELE = {
  ...Object.fromEntries(['odin-weiss', 'odin-bunt', ...KLASSEN.flatMap((k) => [`odin-${k}`, `odin-weiss-${k}`])].map((p) => [p, path.join(WURZEL, 'assets/wuerfel/v2', p)])),
  'halloween-knochen': path.join(WURZEL, 'halloween/assets/v2/knochen'),
  'halloween-kuerbis': path.join(WURZEL, 'halloween/assets/v2/kuerbis'),
};

for (const [paket, ziel] of Object.entries(ZIELE)) {
  const q = path.join(REALM, paket);
  const g = JSON.parse(fs.readFileSync(path.join(q, 'dice_6.gltf'), 'utf8'));
  fs.rmSync(ziel, { recursive: true, force: true });
  fs.mkdirSync(path.join(ziel, 'textures'), { recursive: true });
  fs.copyFileSync(path.join(q, g.buffers[0].uri), path.join(ziel, g.buffers[0].uri));
  for (const b of g.images) fs.copyFileSync(path.join(q, b.uri), path.join(ziel, b.uri));
  const es = g.materials[0].extensions?.KHR_materials_emissive_strength;
  if (es) es.emissiveStrength = Math.round(es.emissiveStrength * LEUCHTEN_DSN * 100) / 100;
  g.asset.generator = `${g.asset.generator ?? ''} / O.D.I.N. für Dice So Nice (odin-foundry werkzeuge/wuerfel-v2.mjs)`.replace(/^ \/ /, '');
  fs.writeFileSync(path.join(ziel, 'dice_6.gltf'), JSON.stringify(g, null, 1) + '\n');
  const groesse = fs.readdirSync(ziel, { recursive: true }).reduce((s, f) => s + (fs.statSync(path.join(ziel, f)).isFile() ? fs.statSync(path.join(ziel, f)).size : 0), 0);
  console.log(`${paket} -> ${path.relative(WURZEL, ziel)} (${(groesse / 1024).toFixed(0)} KB)${es ? `, Leuchten ${es.emissiveStrength}` : ''}`);
}
