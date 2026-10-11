// Test des Kerns ohne KI-Bilder (werkzeuge/kern.mjs, System odin-rpg-core): node --test tests/kern.test.mjs
// Sucht nach Bilddateien und Bildpfaden; alles außer der erlaubten Liste (ERLAUBT: Würfel, Karteikarten, Lagepläne, Handouts,
// dazu Symbole des Foundry-Kerns unter icons/) macht den Test rot.
// Ohne Abhängigkeiten prüft er die Dateiliste und die umgewandelten Kompendien im Speicher. Mit ODIN_KERN=<ordner> prüft er
// zusätzlich das gebaute Paket (node werkzeuge/kern.mjs, braucht classic-level): Dateien, Packs, Code, Vorlagen, Stile.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from '../werkzeuge/leveldb.mjs';
import { idAusPfad, SYS, PFAD, KERN } from '../module/system.mjs';
import { ODIN_SYSTEME } from '../halloween/halloween.mjs';
import { dateien, packs, kernSystem, wandleDokument, istWeg, ERLAUBT, BILD, KI_ORDNER, FOTO_HANDOUTS, ID } from '../werkzeuge/kern.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const erlaubtesBild = (r) => ERLAUBT.some((m) => m.test(r));
// Bildpfade in Texten: Dateiname mit Bild-Endung, auch in HTML, Code und JSON
const PFADE = /[\w./@%-]+\.(?:png|jpe?g|webp|gif|svg|avif|bmp|tiff?|ico)\b/gi;

/** Prüft einen Text: jeder Bildpfad ist ein Symbol des Foundry-Kerns oder ein erlaubtes Bild des Kerns, das existiert. */
function bildpfade(text, vorhanden, wo) {
  const fehler = [];
  for (const p of text.match(PFADE) ?? []) {
    if (/^icons\//.test(p)) continue;
    const m = /^systems\/([\w-]+)\/(.+)$/.exec(p);
    if (!m) { fehler.push(`${wo}: ${p} (kein Pfad des Systems und kein icons/)`); continue; }
    if (m[1] !== ID) fehler.push(`${wo}: ${p} (falsche ID)`);
    else if (!erlaubtesBild(m[2])) fehler.push(`${wo}: ${p} (nicht erlaubt)`);
    else if (!vorhanden(m[2])) fehler.push(`${wo}: ${p} (fehlt)`);
  }
  return fehler;
}
const flach = (o) => JSON.stringify(o);

test('Erlaubte Liste und KI-Ordner überschneiden sich nicht, Handouts mit Foto sind echte Dateien', () => {
  for (const d of fs.readdirSync(path.join(wurzel, 'assets'), { recursive: true }).map((x) => `assets/${x.split(path.sep).join('/')}`).filter((x) => BILD.test(x))) {
    assert.ok(!(erlaubtesBild(d) && KI_ORDNER.some((m) => m.test(d))), d);
  }
  for (const d of FOTO_HANDOUTS) assert.ok(fs.existsSync(path.join(wurzel, d)), d);
});

test('Dateien des Kerns: nur erlaubte Bilder, kein KI-Ordner, keine Packs, Code, Sprachen und Schriften dabei', () => {
  const liste = dateien();
  const bilder = liste.filter((d) => BILD.test(d));
  const falsch = bilder.filter((d) => !erlaubtesBild(d));
  assert.deepEqual(falsch, []);
  for (const d of ['odin.mjs', 'module/system.mjs', 'styles/odin.css', 'lang/de.json', 'lang/en.json', 'fonts/Barlow-400.woff2', 'LICENSE']) assert.ok(liste.includes(d), d);
  assert.ok(bilder.some((d) => d.startsWith('assets/wuerfel/v2/')), '3D-Würfel fehlen');
  assert.ok(!liste.some((d) => d.startsWith('packs/')));
});

test('Kompendien des Kerns: nur erlaubte Bildpfade, keine Verweise auf odin-rpg', () => {
  const vorhanden = new Set(dateien());
  const fehler = [];
  for (const [p, daten] of packs()) {
    for (const [k, d] of daten) {
      const t = flach(d);
      fehler.push(...bildpfade(t, (r) => vorhanden.has(r), `${p} ${k}`));
      if (/systems\/odin-rpg\/|Compendium\.odin-rpg\.|"odin-rpg"/.test(t)) fehler.push(`${p} ${k}: Verweis auf odin-rpg`);
    }
  }
  assert.deepEqual(fehler.slice(0, 20), []);
});

test('Umwandlung: Porträt und Token werden Symbol, Bildseite wird Textseite, <img> fällt weg, Flags und IDs umbenannt', () => {
  const gegner = wandleDokument({ name: 'X', img: 'systems/odin-rpg/assets/registratur/REG-A-0001.webp', prototypeToken: { texture: { src: 'systems/odin-rpg/assets/token/x.webp' } }, flags: { 'odin-rpg': { quelle: 'Atlas' } } });
  assert.equal(gegner.img, 'icons/svg/mystery-man.svg');
  assert.equal(gegner.prototypeToken.texture.src, 'icons/svg/mystery-man.svg');
  assert.deepEqual(gegner.flags, { [ID]: { registratur: 'REG-A-0001', quelle: 'Atlas' } });
  const seite = wandleDokument({ type: 'image', name: 'Bild', src: 'systems/odin-rpg/assets/abenteuer/tuer/bilder/tuer-01.webp' }, { sprache: 'en' });
  assert.equal(seite.type, 'text');
  assert.equal(seite.src, null);
  assert.match(seite.text.content, /core system contains no images/);
  const handout = wandleDokument({ type: 'image', src: 'systems/odin-rpg/assets/abenteuer/tuer/handouts_de/09.webp' });
  assert.equal(handout.src, `systems/${ID}/assets/abenteuer/tuer/handouts_de/09.webp`);
  const text = wandleDokument({ content: '<p>a</p><p><img src="systems/odin-rpg/assets/abenteuer/nordlicht/bilder/de_b22_1.webp"></p><p><img src="systems/odin-rpg/assets/abenteuer/grauakten/karten_de/08.webp"></p> @UUID[Compendium.odin-rpg.odin-gegner.Actor.abc] odin-rpg.pages.dev' });
  assert.equal(text.content, `<p>a</p><p><img src="systems/${ID}/assets/abenteuer/grauakten/karten_de/08.webp"></p> @UUID[Compendium.${ID}.odin-gegner.Actor.abc] odin-rpg.pages.dev`);
  assert.equal(wandleDokument({ _stats: { systemId: 'odin-rpg' } })._stats.systemId, ID);
  assert.equal(wandleDokument({ img: 'systems/odin-rpg/assets/artefakte/a.webp' }).img, 'icons/svg/item-bag.svg');
  assert.equal(wandleDokument({ thumb: 'systems/odin-rpg/assets/szenen/tuer/bilder/a.webp' }).thumb, null);
  assert.ok(istWeg('assets/abenteuer/tuer/handouts_de/01.webp', { ohneFotohandouts: true }));
  assert.ok(!istWeg('assets/abenteuer/tuer/handouts_de/01.webp'));
});

test('Manifest kern/system.json ist aktuell: eigene ID, Manifest unabhängig von releases/latest, Download core-v<version>', () => {
  const sys = JSON.parse(fs.readFileSync(path.join(wurzel, 'system.json'), 'utf8'));
  const kern = JSON.parse(fs.readFileSync(path.join(wurzel, 'kern/system.json'), 'utf8'));
  assert.deepEqual(kern, kernSystem(sys), 'kern/system.json neu schreiben: node werkzeuge/kern.mjs --manifest');
  assert.equal(kern.id, ID);
  assert.equal(kern.version, sys.version);
  assert.equal(kern.manifest, 'https://raw.githubusercontent.com/davidgerbs-beep/odin-foundry/main/kern/system.json');
  assert.equal(kern.download, `https://github.com/davidgerbs-beep/odin-foundry/releases/download/core-v${sys.version}/${ID}.zip`);
  assert.ok(!/releases\/latest/.test(flach(kern)));
  assert.deepEqual(kern.packs.map((p) => p.name), sys.packs.map((p) => p.name));
  assert.ok(kern.packs.every((p) => (p.system === undefined || p.system === ID) && !p.banner));
  assert.deepEqual(kern.packs.map((p) => p.system), sys.packs.map((p) => p.system && ID));
  assert.deepEqual(bildpfade(flach(kern), () => true, 'kern/system.json'), []);
  // das bebilderte System bleibt, wie es ist
  assert.equal(sys.id, 'odin-rpg');
  assert.match(sys.manifest, /releases\/latest\/download\/system\.json$/);
});

test('Gebautes Paket (ODIN_KERN): Dateien, Packs, Code, Vorlagen und Stile ohne KI-Bilder', { skip: !process.env.ODIN_KERN }, () => {
  const dir = path.resolve(process.env.ODIN_KERN);
  const alle = fs.readdirSync(dir, { recursive: true }).map((x) => x.split(path.sep).join('/')).filter((x) => fs.statSync(path.join(dir, x)).isFile());
  const vorhanden = new Set(alle);
  // Bilddateien, auch ohne passende Endung (Kennung im Dateikopf)
  const kopf = (d) => { const b = Buffer.alloc(12); const f = fs.openSync(path.join(dir, d), 'r'); fs.readSync(f, b, 0, 12, 0); fs.closeSync(f); return b; };
  const istBild = (d) => BILD.test(d) || (() => { const b = kopf(d); return b.toString('ascii', 8, 12) === 'WEBP' || b.toString('hex', 0, 4) === '89504e47' || b.toString('hex', 0, 3) === 'ffd8ff' || b.toString('ascii', 0, 3) === 'GIF'; })();
  const bilder = alle.filter((d) => !d.startsWith('packs/') && istBild(d));
  assert.deepEqual(bilder.filter((d) => !erlaubtesBild(d)), []);
  const sys = JSON.parse(fs.readFileSync(path.join(dir, 'system.json'), 'utf8'));
  assert.equal(sys.id, ID);
  const fehler = [...bildpfade(flach(sys), (r) => vorhanden.has(r), 'system.json')];
  for (const p of sys.packs) {
    for (const [k, d] of lesePack(path.join(dir, p.path))) {
      const t = flach(d);
      fehler.push(...bildpfade(t, (r) => vorhanden.has(r), `${p.name} ${k}`));
      if (/systems\/odin-rpg\/|Compendium\.odin-rpg\.|"odin-rpg"/.test(t)) fehler.push(`${p.name} ${k}: Verweis auf odin-rpg`);
    }
  }
  // Code, Vorlagen, Stile, Sprachen: Bildpfade nur unter erlaubten Ordnern. Die Registratur-Fotos nennt registratur.mjs nur,
  // wenn KERN falsch ist (System mit Bildern)
  for (const d of alle.filter((x) => /\.(mjs|js|hbs|html|css|json)$/.test(x) && !x.startsWith('packs/') && !x.startsWith('daten/') && !x.startsWith('assets/'))) {
    const t = fs.readFileSync(path.join(dir, d), 'utf8');
    for (const m of t.matchAll(/assets\/([\w-]+)\//g)) {
      if (['wuerfel', 'karten', 'abenteuer', 'szenen'].includes(m[1])) continue;
      if (d === 'module/registratur.mjs' && m[1] === 'registratur' && /KERN \? '' :/.test(t)) continue;
      fehler.push(`${d}: assets/${m[1]}/`);
    }
  }
  assert.deepEqual(fehler.slice(0, 20), []);
});

test('ID aus dem Pfad: derselbe Code läuft als odin-rpg und als odin-rpg-core, das Halloween-Modul kennt beide', () => {
  assert.equal(idAusPfad('http://localhost:30000/systems/odin-rpg-core/module/system.mjs'), ID);
  assert.equal(idAusPfad('https://forge-vtt.com/x/systems/odin-rpg/module/system.mjs'), 'odin-rpg');
  assert.equal(idAusPfad('https://assets.forge-vtt.com/bazaar/systems/odin-rpg-core/0.10.12/module/system.mjs'), ID);
  assert.equal(idAusPfad('file:///home/x/odin-foundry/module/system.mjs'), 'odin-rpg');
  assert.deepEqual([SYS, PFAD, KERN], ['odin-rpg', 'systems/odin-rpg/', false]);
  assert.deepEqual(ODIN_SYSTEME, ['odin-rpg', ID]);
  // keine feste ID mehr im Code des Systems (außer der Vorgabe in module/system.mjs und der Adresse der Website)
  const code = ['odin.mjs', ...fs.readdirSync(path.join(wurzel, 'module')).map((d) => `module/${d}`)].filter((d) => d !== 'module/system.mjs');
  for (const d of code) {
    const t = fs.readFileSync(path.join(wurzel, d), 'utf8').replace(/odin-rpg\.pages\.dev/g, '');
    assert.ok(!/odin-rpg/.test(t), `${d} nennt odin-rpg fest`);
  }
});
