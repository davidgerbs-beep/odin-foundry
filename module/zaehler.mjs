// Anonymer Nutzungszähler: einmal am Tag je Welt ein Ping an den O.D.I.N.-Zähler (Cloudflare Worker, Quelle in odin-werkstatt/zaehler).
// Gesendet werden nur die Plattform „foundry“ und die Sprache der Oberfläche, den Tag setzt der Zähler selbst. Keine Kennung der Welt,
// keine Namen, keine Cookies, kein Referrer. Nur die aktive Spielleitung sendet, damit eine Welt nicht je Spieler zählt; den Tag des
// letzten Pings merkt sich die Welt in einer versteckten Einstellung. Abschaltbar in den Einstellungen des Systems.
const SYS = 'odin-rpg';

/** Adresse des Zählers (ohne /ping). Leer: es wird nichts gesendet. */
export const ZAEHLER_URL = '';

/** Tag nach UTC wie im Zähler, damit „einmal am Tag“ auf beiden Seiten derselbe Tag ist. */
export const tagHeute = (d = new Date()) => d.toISOString().slice(0, 10);
/** Nur de oder en, alles andere zählt der Zähler als „andere“. */
export const spracheKurz = (l) => { const k = String(l ?? '').slice(0, 2).toLowerCase(); return k === 'de' || k === 'en' ? k : 'andere'; };

/** Soll jetzt gezählt werden? */
export const pingFaellig = ({ url, an, aktiveSl, letzter, heute }) => !!url && an !== false && !!aktiveSl && letzter !== heute;

/** Ping senden. Fehler (offline, Werbeblocker) bleiben still, das Spiel merkt davon nichts. */
export async function ping(url, lang, senden = globalThis.fetch) {
  try {
    await senden(`${url}/ping?p=foundry&s=${encodeURIComponent(spracheKurz(lang))}`, {
      method: 'POST', mode: 'no-cors', credentials: 'omit', referrerPolicy: 'no-referrer', keepalive: true, cache: 'no-store',
    });
    return true;
  } catch (e) { return false; }
}

/** Beim Start der Welt (Hook ready): höchstens einmal am Tag je Welt. */
export async function beimStart({ url = ZAEHLER_URL, senden = globalThis.fetch, jetzt = new Date() } = {}) {
  const heute = tagHeute(jetzt);
  const aktiveSl = game.user?.isGM && game.users?.activeGM?.id === game.user.id;
  if (!pingFaellig({ url, an: game.settings.get(SYS, 'zaehler'), aktiveSl, letzter: game.settings.get(SYS, 'zaehlerTag'), heute })) return false;
  await game.settings.set(SYS, 'zaehlerTag', heute); /* erst merken, dann senden: schnelles Neuladen zählt nicht doppelt */
  return ping(url, game.i18n?.lang, senden);
}

export function einrichten() {
  Hooks.once('init', () => {
    game.settings.register(SYS, 'zaehler', {
      name: 'ODIN.Einstellung.Zaehler', hint: 'ODIN.Einstellung.ZaehlerHinweis',
      scope: 'world', config: true, type: Boolean, default: true,
    });
    game.settings.register(SYS, 'zaehlerTag', { scope: 'world', config: false, type: String, default: '' });
  });
  Hooks.once('ready', () => { beimStart(); });
}
