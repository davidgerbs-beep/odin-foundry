/* ID des Systems: „odin-rpg“ (mit Bildern, über den Manifest-Link) oder „odin-rpg-core“ (Kern ohne KI-Bilder für die Paketliste
   von foundryvtt.com, werkzeuge/kern.mjs). Einstellungen, Flags und Pfade gehen über SYS, damit derselbe Code unter beiden IDs
   läuft. Vorrang hat game.system.id; ist es beim Laden noch nicht da, gilt die Adresse dieser Datei (…/systems/<id>/…, auch
   mit Versionsordner wie auf The Forge). Ohne Foundry (Tests) „odin-rpg“. */
export const IDS = ['odin-rpg', 'odin-rpg-core'];
/** ID aus einer Adresse unter …/systems/odin-rpg/… oder …/systems/odin-rpg-core/…, sonst „odin-rpg“. */
export const idAusPfad = (url) => /\/systems\/(odin-rpg(?:-core)?)\//.exec(new URL(url).pathname)?.[1] ?? 'odin-rpg';
export const SYS = IDS.includes(globalThis.game?.system?.id) ? globalThis.game.system.id : idAusPfad(import.meta.url);
/** Pfad zu Dateien des Systems, etwa `${PFAD}templates/item.hbs`. */
export const PFAD = `systems/${SYS}/`;
/** Der Kern enthält keine KI-Bilder (Porträts, Token, Szenen-, Artefakt- und Registraturbilder). */
export const KERN = SYS !== 'odin-rpg';
