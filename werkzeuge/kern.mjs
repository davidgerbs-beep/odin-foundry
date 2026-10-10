// Kern ohne KI-Bilder: baut aus diesem Repo das System „odin-rpg-core“ für die Paketliste von foundryvtt.com (und damit den
// Forge-Bazaar). Foundry listet keine Pakete mit KI-generierten Bildern als fertigem Inhalt (KI-Richtlinie, Stand 18.03.2026).
// Das bebilderte System „odin-rpg“ bleibt unverändert und läuft weiter über seinen Manifest-Link.
//
// Gleich wie odin-rpg: Code, Regeln, Bögen, Würfel (auch die 3D-Würfel für Dice So Nice), Einstellungen, Sprachen, Schriften,
// alle Kompendien mit ihren Texten. Die ID liest der Code aus seinem Pfad (module/system.mjs).
// Weg: alle KI-Bilder (KI_ORDNER unten, Herkunft je Ordner in kern/BILDINVENTUR.md). Ersatz in den Kompendien:
//  - Porträts und Token von Agenten und Gegnern: icons/svg/mystery-man.svg (Foundry-Kern)
//  - Artefakte: icons/svg/item-bag.svg
//  - Bilder der Missionen, Szenenbilder, Cover, Banner: kein Bild (Szenen ohne Hintergrund, Bildseiten der Journale werden
//    Textseiten mit einem Hinweis, <img> im Text fällt weg, Kompendien ohne Banner)
// Bleiben (eigene Grafik): Würfel, Karteikarten (assets/karten), Lagepläne, Handouts. Mit --ohne-fotohandouts fallen die
// Handout-Seiten mit Fotos (FOTO_HANDOUTS) ebenfalls weg.
// Aus odin-rpg wird odin-rpg-core: Pfade systems/odin-rpg/…, Kompendien-IDs (Compendium.odin-rpg.…, odin-rpg.odin-tabellen),
// Flags und systemId in allen Dokumenten.
//
// Aufruf: node werkzeuge/kern.mjs [ziel] [--zip] [--ohne-fotohandouts]   (Vorgabe build/odin-rpg-core, braucht classic-level:
//         npm install --no-save classic-level@1.4.1)
//         node werkzeuge/kern.mjs --manifest   schreibt nur kern/system.json (Manifest für foundryvtt.com, ohne Abhängigkeiten)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { lesePack } from './leveldb.mjs';

export const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const ALT = 'odin-rpg', ID = 'odin-rpg-core';
const REPO = 'davidgerbs-beep/odin-foundry';

/** Ordner mit KI-Bildern (Bildinventur): fallen im Kern ganz weg. */
export const KI_ORDNER = [
  /^assets\/abenteuer\/[\w-]+\/bilder\//, /^assets\/szenen\/[\w-]+\/bilder\//, /^assets\/artefakte\//, /^assets\/banner\//,
  /^assets\/cover\//, /^assets\/gegner\//, /^assets\/portraets\//, /^assets\/registratur\//, /^assets\/token\//,
];
/** Handout-Seiten mit Fotos oder gezeichneten Bildern; bleiben laut Entscheidung im Kern, außer mit --ohne-fotohandouts. */
export const FOTO_HANDOUTS = [
  ...[1, 3, 7, 10, 15, 18].flatMap((n) => ['de', 'en'].map((s) => `assets/abenteuer/grauakten/handouts_${s}/${String(n).padStart(2, '0')}.webp`)),
  ...[0, 1, 10, 28].flatMap((n) => ['de', 'en'].map((s) => `assets/abenteuer/tuer/handouts_${s}/${String(n).padStart(2, '0')}.webp`)),
  'assets/abenteuer/schnellstart/handouts_de/01.webp', 'assets/abenteuer/schnellstart/handouts_en/01.webp',
  ...[9, 19, 20, 24, 34, 37].flatMap((n) => ['handouts', 'handouts_en'].map((o) => `assets/abenteuer/nordlicht/${o}/seite-${String(n).padStart(2, '0')}.webp`)),
];
/** Bilder, die im Kern liegen dürfen (Test und Prüfung des gebauten Pakets). */
export const ERLAUBT = [
  /^assets\/wuerfel\//, /^assets\/karten\/(de|en)\//, /^assets\/abenteuer\/[\w-]+\/(handouts|karten)[\w-]*\//, /^assets\/szenen\/[\w-]+\/karten[\w-]*\//,
];
export const BILD = /\.(png|jpe?g|webp|gif|svg|avif|bmp|tiff?|ico)$/i;
export const PLATZHALTER = { person: 'icons/svg/mystery-man.svg', gegenstand: 'icons/svg/item-bag.svg' };
const HINWEIS = {
  de: '<p><em>Diese Seite zeigt im System „O.D.I.N.“ mit Bildern eine Abbildung. Der Kern enthält keine Abbildungen.</em></p>',
  en: '<p><em>In the illustrated “O.D.I.N.” system this page shows an image. The core system contains no images.</em></p>',
};

/** Relativer Pfad einer Datei des Systems aus einem Verweis (systems/odin-rpg/… oder schon relativ), sonst null. */
const relativ = (p) => (/^systems\/odin-rpg(-core)?\//.test(p) ? p.replace(/^systems\/odin-rpg(-core)?\//, '') : /^assets\//.test(p) ? p : null);
/** Ob ein Pfad im Kern fehlt (KI-Bild, mit Option auch Handouts mit Foto). */
export function istWeg(p, { ohneFotohandouts = false } = {}) {
  const r = relativ(p);
  if (!r) return false;
  return KI_ORDNER.some((m) => m.test(r)) || (ohneFotohandouts && FOTO_HANDOUTS.includes(r));
}
/** Ersatz für ein Bild, das wegfällt: Symbol des Foundry-Kerns für Figuren und Gegenstände, sonst null. */
export function ersatz(p) {
  const r = relativ(p);
  if (/^assets\/(token|portraets|gegner|registratur)\//.test(r)) return PLATZHALTER.person;
  if (/^assets\/artefakte\//.test(r)) return PLATZHALTER.gegenstand;
  return null;
}
/** odin-rpg -> odin-rpg-core in Pfaden und Kompendien-IDs, nicht in der Adresse der Website (odin-rpg.pages.dev). */
export const umbenennen = (s) => (s === ALT ? ID : s.replace(/(?<![\w-])odin-rpg(?=[/.])(?!\.pages\.dev)/g, ID));

/** Wandelt ein Dokument der Kompendien für den Kern um (gibt eine neue Fassung zurück). */
export function wandleDokument(doc, { sprache = 'de', ...opt } = {}) {
  const weg = (p) => istWeg(p, opt);
  const lauf = (o) => {
    if (typeof o === 'string') {
      let s = o;
      if (weg(s)) return ersatz(s);
      if (s.includes('<img')) {
        s = s.replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/g, (tag, src) => (weg(src) ? '' : tag)).replace(/<p>\s*<\/p>/g, '');
      }
      return umbenennen(s);
    }
    if (Array.isArray(o)) return o.map(lauf);
    if (!o || typeof o !== 'object') return o;
    const neu = {};
    // Registratur: Code aus dem Bildpfad (blaetter.mjs liest ihn sonst aus actor.img) als Flag sichern, bevor das Bild wegfällt
    const reg = typeof o.img === 'string' && o.prototypeToken && /assets\/registratur\/(REG-[A-Z]-\d{4})/.exec(o.img)?.[1];
    for (const [k, v] of Object.entries(o)) neu[k === ALT ? ID : k] = lauf(v);
    if (reg) neu.flags = { ...neu.flags, [ID]: { registratur: reg, ...neu.flags?.[ID] } };
    // Bildseite eines Journals ohne Bild: Textseite mit Hinweis (Titel und Verweise auf die Seite bleiben)
    if (o.type === 'image' && typeof o.src === 'string' && weg(o.src)) {
      neu.type = 'text';
      neu.src = null;
      neu.text = { ...(neu.text ?? {}), content: HINWEIS[sprache], format: 1 };
    }
    return neu;
  };
  return lauf(doc);
}

/** system.json des Kerns aus der des Systems mit Bildern. */
export function kernSystem(sys) {
  const s = wandleDokument(structuredClone(sys));
  s.id = ID;
  s.title = 'O.D.I.N. Core (no art)';
  s.description = 'Core rules for O.D.I.N., the pen-and-paper RPG of occult agents (Second Edition), without illustrations: '
    + 'character and enemy sheets, rolls with white and coloured dice (white succeed on 5+, coloured on 4+), combat, horror, psi '
    + 'and spells, class price, import from the character generator, compendia with rules, equipment, enemies and adventures as text. '
    + 'German and English. The illustrated edition (portraits, tokens, scene art) is installed separately via its manifest link on '
    + 'odin-rpg.pages.dev; worlds are not interchangeable between the two. '
    + '/ Grundregeln für O.D.I.N. ohne Illustrationen: Bögen, Proben, Kampf, Grauen, Kompendien mit Texten. Die bebilderte Fassung '
    + 'gibt es separat über ihren Manifest-Link auf odin-rpg.pages.dev.';
  s.manifest = `https://raw.githubusercontent.com/${REPO}/main/kern/system.json`;
  s.download = `https://github.com/${REPO}/releases/download/core-v${s.version}/${ID}.zip`;
  for (const p of s.packs ?? []) delete p.banner;
  delete s.media;
  return s;
}

/** Dateien des Kerns aus dem Repo (wie das Release-ZIP von odin-rpg, ohne KI-Bilder und ohne die Packs, die neu geschrieben werden). */
export function dateien(opt = {}) {
  const aus = fs.readFileSync(path.join(WURZEL, '.github/release-ausschluss.txt'), 'utf8').split('\n').map((z) => z.trim()).filter((z) => z && !z.startsWith('#'));
  return execFileSync('git', ['ls-files'], { cwd: WURZEL, encoding: 'utf8' }).split('\n').filter(Boolean)
    .filter((d) => !/^(tests|werkzeuge|kartenraum|halloween|media|kern|\.github)\/|^\.|^packs\//.test(d) && !aus.includes(d))
    .filter((d) => !(BILD.test(d) && istWeg(d, opt)) && d !== 'system.json' && d !== 'README.md');
}

/** Alle Dokumente der Packs, umgewandelt: Map packname -> Map schlüssel -> dokument. */
export function packs(opt = {}) {
  const aus = new Map();
  for (const p of fs.readdirSync(path.join(WURZEL, 'packs'))) {
    const sprache = p.endsWith('-en') ? 'en' : 'de';
    aus.set(p, new Map([...lesePack(path.join(WURZEL, 'packs', p))].map(([k, d]) => [k, wandleDokument(d, { sprache, ...opt })])));
  }
  return aus;
}

const README = `# O.D.I.N. Core (no art)

Core rules for the O.D.I.N. RPG in Foundry VTT, without illustrations. Built from the same repository as the illustrated system
\`odin-rpg\` (https://github.com/${REPO}) with \`werkzeuge/kern.mjs\`. Sheets, rolls, dice (including the 3D dice for Dice So
Nice), settings and all compendium texts are the same; portraits, tokens and scene art are left out (Foundry core icons instead).
The illustrated edition is installed via its manifest link on https://odin-rpg.pages.dev. Worlds are not interchangeable.

Grundregeln für O.D.I.N. in Foundry VTT ohne Illustrationen, gebaut aus demselben Repo wie das bebilderte System.
`;

/** Baut den Kern nach ziel. */
export async function baue(ziel, opt = {}) {
  const { schreibePack } = await import('./packschreiber.mjs');
  fs.rmSync(ziel, { recursive: true, force: true });
  for (const d of dateien(opt)) {
    fs.mkdirSync(path.dirname(path.join(ziel, d)), { recursive: true });
    fs.copyFileSync(path.join(WURZEL, d), path.join(ziel, d));
  }
  const sys = kernSystem(JSON.parse(fs.readFileSync(path.join(WURZEL, 'system.json'), 'utf8')));
  fs.writeFileSync(path.join(ziel, 'system.json'), JSON.stringify(sys, null, 2) + '\n');
  fs.writeFileSync(path.join(ziel, 'README.md'), README);
  fs.mkdirSync(path.join(ziel, 'packs'), { recursive: true });
  for (const [p, daten] of packs(opt)) await schreibePack(path.join(ziel, 'packs', p), daten);
  return sys;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const args = process.argv.slice(2);
  const sys = kernSystem(JSON.parse(fs.readFileSync(path.join(WURZEL, 'system.json'), 'utf8')));
  if (args.includes('--manifest')) {
    fs.mkdirSync(path.join(WURZEL, 'kern'), { recursive: true });
    fs.writeFileSync(path.join(WURZEL, 'kern/system.json'), JSON.stringify(sys, null, 2) + '\n');
    console.log(`kern/system.json ${sys.version}`);
  } else {
    const ziel = path.resolve(args.find((a) => !a.startsWith('--')) ?? path.join(WURZEL, 'build', ID));
    const opt = { ohneFotohandouts: args.includes('--ohne-fotohandouts') };
    await baue(ziel, opt);
    const n = dateien(opt).length;
    console.log(`${ID} ${sys.version} nach ${ziel}: ${n} Dateien, ${fs.readdirSync(path.join(ziel, 'packs')).length} Packs`);
    if (args.includes('--zip')) {
      const zip = path.join(path.dirname(ziel), `${ID}.zip`);
      fs.rmSync(zip, { force: true });
      execFileSync('zip', ['-X', '-q', '-r', zip, '.'], { cwd: ziel });
      console.log(zip);
    }
  }
}
