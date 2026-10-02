// Maßstab der Kartenszenen: reine Rechenfunktionen ohne Foundry und ohne Abhängigkeiten.
// Genutzt von werkzeuge/szenen-massstab.mjs (schreibt die Packs) und tests/szenen.test.mjs.

/** Kleinste Rastergröße, die Foundry annimmt (CONST.GRID_MIN_SIZE). */
export const RASTER_MIN = 20;

/**
 * Rand vor dem Bild in Pixeln, wie Foundry ihn berechnet (BaseGrid#calculateDimensions):
 * Das Bild beginnt auf der Leinwand bei diesem Versatz, alle Koordinaten zählen ab der Leinwand.
 * Die Schreibweise `* (1 / size)` ist absichtlich dieselbe wie in Foundry.
 */
export function rand(padding, laenge, size) {
  return Math.ceil((padding * laenge) * (1 / size)) * size;
}

/** Bildrechteck der Szene in Leinwandkoordinaten. */
export function bildRechteck(szene) {
  const x = rand(szene.padding, szene.width, szene.grid.size) - (szene.shiftX ?? 0);
  const y = rand(szene.padding, szene.height, szene.grid.size) - (szene.shiftY ?? 0);
  return { x, y, w: szene.width, h: szene.height };
}

/** Schlüssel der Messdaten aus dem Hintergrundbild, z. B. „grauakten/03“. */
export function kartenSchluessel(src) {
  const m = /assets\/abenteuer\/([^/]+)\/karten_[a-z]+\/([^/.]+)\.webp$/.exec(src ?? '');
  return m ? `${m[1]}/${m[2]}` : null;
}

/** Zielwerte für eine Karte aus den Messdaten. */
export function zielWerte(eintrag, personMeter = 1) {
  const size = Math.round(eintrag.pxProMeter * eintrag.rasterMeter);
  // Eigene Token-Größe für Lagepläne, auf denen eine Person in echter Größe nur ein Punkt wäre
  const tokenFelder = eintrag.tokenFelder ?? personMeter / eintrag.rasterMeter;
  if (size < RASTER_MIN) throw new Error(`Rastergröße ${size} kleiner als ${RASTER_MIN}`);
  if (Math.round(tokenFelder * 2) !== tokenFelder * 2) throw new Error(`Token-Breite ${tokenFelder} ist kein Vielfaches von 0,5`);
  return { size, distance: eintrag.rasterMeter, tokenFelder };
}

const runde = (wert, stellen = 2) => Math.round(wert * 10 ** stellen) / 10 ** stellen;

/**
 * Stellt eine Szene auf neues Raster um. Das Bild bleibt unverändert, alles Platzierte
 * bleibt an derselben Stelle des Bildes:
 * - Positionen wandern um die Änderung des Rands vor dem Bild mit,
 * - Token behalten ihren Mittelpunkt und bekommen die Breite einer Person (oder tokenFelder),
 * - Lichtradien (in Metern) werden so umgerechnet, dass sie im Bild gleich groß bleiben,
 * - Token außerhalb des Bildes kommen auf den Ablageplatz.
 * `teile` enthält die eingebetteten Dokumente als Arrays (tokens, lights, notes, walls ...).
 * Ändert Szene und Teile direkt und gibt die alten Werte zurück. Mehrfach anwendbar.
 */
export function stelleUm(szene, teile, eintrag, personMeter = 1) {
  const ziel = zielWerte(eintrag, personMeter);
  const alt = { size: szene.grid.size, distance: szene.grid.distance, units: szene.grid.units };
  const randAlt = bildRechteck(szene);
  szene.grid.size = ziel.size;
  szene.grid.distance = ziel.distance;
  szene.grid.units = 'm';
  const randNeu = bildRechteck(szene);
  const dx = randNeu.x - randAlt.x;
  const dy = randNeu.y - randAlt.y;
  // Pixel pro Rastereinheit vorher und nachher, für Radien in Metern
  const faktor = (alt.size / alt.distance) / (ziel.size / ziel.distance);

  for (const art of ['notes', 'lights', 'sounds', 'tiles', 'drawings', 'templates']) {
    for (const d of teile[art] ?? []) { d.x += dx; d.y += dy; }
  }
  for (const w of teile.walls ?? []) {
    w.c = [w.c[0] + dx, w.c[1] + dy, w.c[2] + dx, w.c[3] + dy];
  }
  if ((teile.regions ?? []).length) throw new Error('Regionen werden noch nicht umgerechnet');
  for (const l of teile.lights ?? []) {
    l.config.dim = runde(l.config.dim * faktor);
    l.config.bright = runde(l.config.bright * faktor);
  }
  for (const s of teile.sounds ?? []) s.radius = runde(s.radius * faktor);
  for (const t of teile.templates ?? []) t.distance = runde(t.distance * faktor);

  const tokenAlt = [];
  for (const t of teile.tokens ?? []) {
    tokenAlt.push({ name: t.name, width: t.width, height: t.height });
    const mx = t.x + (t.width * alt.size) / 2 + dx;
    const my = t.y + (t.height * alt.size) / 2 + dy;
    t.width = t.height = ziel.tokenFelder;
    const px = ziel.tokenFelder * ziel.size;
    t.x = Math.round(mx - px / 2);
    t.y = Math.round(my - px / 2);
  }

  // Token außerhalb des Bildes nebeneinander auf den Ablageplatz legen
  const bild = randNeu;
  const px = ziel.tokenFelder * ziel.size;
  const draussen = (teile.tokens ?? []).filter((t) =>
    t.x < bild.x || t.y < bild.y || t.x + px > bild.x + bild.w || t.y + px > bild.y + bild.h);
  if (draussen.length && !eintrag.ablage) throw new Error(`Token außerhalb des Bildes, aber keine Ablage: ${draussen.map((t) => t.name).join(', ')}`);
  draussen.forEach((t, i) => {
    t.x = Math.round(bild.x + eintrag.ablage[0] - px / 2 - i * px * 1.5);
    t.y = Math.round(bild.y + eintrag.ablage[1] - px / 2);
  });

  szene.flags ??= {};
  szene.flags['odin-rpg'] = {
    ...(szene.flags['odin-rpg'] ?? {}),
    massstab: {
      pxProMeter: eintrag.pxProMeter,
      messung: eintrag.messung,
      ...(eintrag.tokenFelder ? { tokenFelder: eintrag.tokenFelder } : {}),
    },
  };
  return { alt, ziel, dx, dy, faktor, tokenAlt, abgelegt: draussen.map((t) => t.name) };
}
