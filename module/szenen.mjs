// Token-Größe auf Lageplänen: Szenen mit flags["odin-rpg"].massstab.tokenFelder geben neu
// gezogenen Token diese Größe. Szenen ohne den Wert bleiben unberührt.

/** Token-Breite in Feldern, die eine Szene vorgibt, sonst null. */
export function tokenFelderDerSzene(szene) {
  const felder = Number(szene?.flags?.['odin-rpg']?.massstab?.tokenFelder);
  return felder > 0 ? felder : null;
}

/**
 * Für preCreateToken: Token in der Standardgröße ihres Akteurs bekommen die Größe der Szene.
 * Token mit bewusst anderer Größe (etwa eingefügte Kopien) bleiben, wie sie sind.
 */
export function tokenGroesseAnpassen(token) {
  const felder = tokenFelderDerSzene(token.parent);
  if (!felder) return;
  const vorlage = token.actor?.prototypeToken;
  if (vorlage && (token.width !== vorlage.width || token.height !== vorlage.height)) return;
  if (token.width === felder && token.height === felder) return;
  token.updateSource({ width: felder, height: felder });
}
