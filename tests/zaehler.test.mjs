// Test des anonymen Nutzungszählers ohne Foundry und ohne Netz: node --test tests/zaehler.test.mjs
// game, Hooks und fetch sind Attrappen. Geprüft: nur die aktive Spielleitung, einmal am Tag je Welt, abschaltbar, ohne Adresse
// nichts, nur Plattform und Sprache in der Anfrage, kein Referrer, keine Cookies, Fehler bleiben still.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const hooks = {};
globalThis.Hooks = { once: (n, f) => { (hooks[n] ||= []).push(f); }, on: () => {} };
const einstellungen = new Map(), registriert = {};
function welt({ gm = true, aktiv = true, lang = 'de', an = true, letzter = '' } = {}) {
  einstellungen.clear();
  einstellungen.set('odin-rpg.zaehler', an);
  einstellungen.set('odin-rpg.zaehlerTag', letzter);
  const ich = { id: 'u1', isGM: gm };
  globalThis.game = {
    user: ich, users: { activeGM: aktiv ? ich : { id: 'u2' } }, i18n: { lang },
    settings: {
      register: (s, k, o) => { registriert[`${s}.${k}`] = o; },
      get: (s, k) => einstellungen.get(`${s}.${k}`),
      set: async (s, k, v) => { einstellungen.set(`${s}.${k}`, v); },
    },
  };
}
const { beimStart, einrichten, ZAEHLER_URL, spracheKurz, tagHeute } = await import('../module/zaehler.mjs');
const URL_ = 'https://odin-zaehler.example.workers.dev';
const sender = () => { const a = []; const f = async (u, o) => { a.push([u, o]); return { status: 0 }; }; f.anfragen = a; return f; };
const MORGEN = new Date('2026-10-09T08:00:00Z');

test('Einstellungen: sichtbarer Schalter (Welt, an), versteckter Tag', () => {
  welt();
  einrichten();
  hooks.init.forEach((f) => f());
  assert.deepEqual(registriert['odin-rpg.zaehler'], { name: 'ODIN.Einstellung.Zaehler', hint: 'ODIN.Einstellung.ZaehlerHinweis', scope: 'world', config: true, type: Boolean, default: true });
  assert.equal(registriert['odin-rpg.zaehlerTag'].config, false);
  assert.equal(registriert['odin-rpg.zaehlerTag'].scope, 'world');
  assert.equal(hooks.ready.length, 1);
  for (const l of ['de', 'en']) {
    const e = JSON.parse(readFileSync(new URL(`../lang/${l}.json`, import.meta.url), 'utf8')).ODIN.Einstellung;
    assert.ok(e.Zaehler && e.ZaehlerHinweis, l);
  }
});

test('Aktive Spielleitung: ein Ping mit Plattform und Sprache, sonst nichts', async () => {
  welt({ lang: 'en' });
  const s = sender();
  assert.equal(await beimStart({ url: URL_, senden: s, jetzt: MORGEN }), true);
  assert.equal(s.anfragen.length, 1);
  const [u, o] = s.anfragen[0];
  assert.equal(u, URL_ + '/ping?p=foundry&s=en');
  assert.deepEqual(o, { method: 'POST', mode: 'no-cors', credentials: 'omit', referrerPolicy: 'no-referrer', keepalive: true, cache: 'no-store' });
  assert.equal(einstellungen.get('odin-rpg.zaehlerTag'), '2026-10-09');
});

test('Einmal am Tag je Welt: Neuladen am selben Tag zählt nicht, am nächsten Tag wieder', async () => {
  welt({ letzter: '2026-10-09' });
  const s = sender();
  assert.equal(await beimStart({ url: URL_, senden: s, jetzt: MORGEN }), false);
  assert.equal(await beimStart({ url: URL_, senden: s, jetzt: new Date('2026-10-09T23:59:00Z') }), false);
  assert.equal(s.anfragen.length, 0);
  assert.equal(await beimStart({ url: URL_, senden: s, jetzt: new Date('2026-10-10T00:01:00Z') }), true);
  assert.equal(await beimStart({ url: URL_, senden: s, jetzt: new Date('2026-10-10T12:00:00Z') }), false);
  assert.equal(s.anfragen.length, 1);
});

test('Spieler, zweite Spielleitung, abgeschaltet oder ohne Adresse: kein Ping', async () => {
  for (const [w, url] of [[{ gm: false }, URL_], [{ aktiv: false }, URL_], [{ an: false }, URL_], [{}, '']]) {
    welt(w);
    const s = sender();
    assert.equal(await beimStart({ url, senden: s, jetzt: MORGEN }), false, JSON.stringify(w));
    assert.equal(s.anfragen.length, 0);
    assert.equal(einstellungen.get('odin-rpg.zaehlerTag'), '', 'Tag bleibt unverändert');
  }
});

test('Netzfehler bleiben still', async () => {
  welt();
  assert.equal(await beimStart({ url: URL_, senden: async () => { throw new TypeError('Failed to fetch'); }, jetzt: MORGEN }), false);
});

test('Sprache und Tag', () => {
  assert.deepEqual(['de', 'de-AT', 'en', 'EN-us', 'fr', '', undefined].map(spracheKurz), ['de', 'de', 'en', 'en', 'andere', 'andere', 'andere']);
  assert.equal(tagHeute(new Date('2026-10-09T23:30:00-02:00')), '2026-10-10');
  assert.equal(typeof ZAEHLER_URL, 'string');
});
