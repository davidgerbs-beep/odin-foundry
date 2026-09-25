// Zentrale der Spielleitung: Stimmungsfilter über der Szene und Fernschreiben an alle am Tisch.
// Die Stimmung steht als Flag an der Szene, jeder Client legt den Filter bei sich an (CSS-Filter auf dem Canvas, kein Shader).
// Fernschreiben laufen als Chatnachricht mit Flag, jeder Client zeigt sie beim Eintreffen als Fernschreiber-Streifen.

import * as registratur from './registratur.mjs';

const SYS = 'odin-rpg';
const L = (k, d) => (d ? game.i18n.format(`ODIN.Zentrale.${k}`, d) : game.i18n.localize(`ODIN.Zentrale.${k}`));

/* ---------------- Stimmung ---------------- */
export const STIMMUNGEN = ['akte', 'wildkamera', 'riss', 'nebel', 'kristall', 'nacht'];

function vignette(s, farbe = '0,0,0', innen = 45) {
  return `radial-gradient(ellipse at center, rgba(${farbe},0) ${innen}%, rgba(${farbe},${(0.75 * s).toFixed(2)}) 100%)`;
}

/** Filter und Überlagerung je Stimmung, s = Stärke 0.1 bis 1. */
function stimmungStil(p, s) {
  switch (p) {
    case 'akte': return {
      filter: `sepia(${(0.85 * s).toFixed(2)}) contrast(${1 + 0.08 * s}) brightness(${1 - 0.06 * s})`,
      bild: vignette(s, '40,26,12'), klasse: 'odin-st-korn',
    };
    case 'wildkamera': return {
      filter: `grayscale(${s}) contrast(${1 + 0.35 * s}) brightness(${1 + 0.08 * s})`,
      bild: `repeating-linear-gradient(0deg, rgba(0,0,0,${(0.12 * s).toFixed(2)}) 0 1px, transparent 1px 3px), linear-gradient(rgba(120,170,110,${(0.22 * s).toFixed(2)}), rgba(120,170,110,${(0.22 * s).toFixed(2)})), ${vignette(s)}`,
      klasse: 'odin-st-korn',
    };
    case 'riss': return {
      filter: `contrast(${1 + 0.15 * s}) saturate(${1 - 0.3 * s}) hue-rotate(${-12 * s}deg)`,
      bild: `linear-gradient(90deg, rgba(255,0,60,${(0.08 * s).toFixed(2)}), transparent 30%, transparent 70%, rgba(0,220,255,${(0.08 * s).toFixed(2)})), ${vignette(s, '10,0,20')}`,
      klasse: 'odin-st-flackern',
    };
    case 'nebel': return {
      filter: `contrast(${1 - 0.15 * s}) brightness(${1 + 0.04 * s}) saturate(${1 - 0.3 * s})`,
      bild: `radial-gradient(ellipse at 20% 30%, rgba(210,214,218,${(0.55 * s).toFixed(2)}), transparent 45%), radial-gradient(ellipse at 75% 65%, rgba(210,214,218,${(0.5 * s).toFixed(2)}), transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(200,204,208,${(0.6 * s).toFixed(2)}), transparent 60%), ${vignette(s, '200,204,208', 35)}`,
      klasse: 'odin-st-nebel',
    };
    case 'kristall': return {
      filter: `saturate(${1 + 0.15 * s}) hue-rotate(${10 * s}deg) brightness(${1 + 0.05 * s})`,
      bild: vignette(s, '40,120,170', 40),
      klasse: 'odin-st-funkeln',
    };
    case 'nacht': return {
      filter: `brightness(${1 - 0.45 * s}) saturate(${1 - 0.4 * s})`,
      bild: `radial-gradient(circle at center, rgba(0,0,0,0) 18%, rgba(4,6,14,${(0.92 * s).toFixed(2)}) 62%)`,
      klasse: '',
    };
    default: return null;
  }
}

export function stimmungAnwenden(scene = canvas?.scene) {
  const board = document.getElementById('board');
  if (!board) return;
  let schicht = document.getElementById('odin-stimmung');
  const st = scene?.getFlag(SYS, 'stimmung');
  const stil = st?.p ? stimmungStil(st.p, Math.max(0.1, Math.min(1, Number(st.s) || 0.8))) : null;
  if (!stil) {
    board.style.filter = '';
    schicht?.remove();
    return;
  }
  board.style.filter = stil.filter;
  if (!schicht) {
    schicht = document.createElement('div');
    schicht.id = 'odin-stimmung';
    board.insertAdjacentElement('afterend', schicht);
  }
  const z = getComputedStyle(board).zIndex;
  schicht.style.zIndex = z === 'auto' ? '0' : z;
  schicht.style.backgroundImage = stil.bild;
  schicht.className = stil.klasse;
}

export async function stimmungSetzen(p, s) {
  const scene = canvas?.scene;
  if (!scene) { ui.notifications.warn(L('KeineSzene')); return; }
  if (!p) await scene.unsetFlag(SYS, 'stimmung');
  else await scene.setFlag(SYS, 'stimmung', { p, s });
}

/* ---------------- Fernschreiben ---------------- */
export async function fernschreibenSenden(text, von) {
  const t = String(text ?? '').trim();
  if (!t) return;
  const v = String(von ?? '').trim();
  const z = Date.now();
  const kopf = `${L('FernKopf')} · ${v || L('FernVonStandard')}`;
  await ChatMessage.create({
    content: `<div class="odin-fern-chat"><div class="odin-fern-kopf">${foundry.utils.escapeHTML(kopf)}</div><div class="odin-fern-text">${foundry.utils.escapeHTML(t.toUpperCase())}</div><button type="button" data-odin-aktion="fern">${L('FernNochmal')}</button></div>`,
    speaker: { alias: v || L('FernVonStandard') },
    flags: { [SYS]: { fern: { t, v, z } } },
  });
}

function stempel(z) {
  const d = new Date(z);
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} ${p(d.getHours())}${p(d.getMinutes())}`;
}

export function fernschreibenZeigen({ t, v, z }) {
  document.getElementById('odin-fern')?.remove();
  const ganz = `${L('FernKopf')} ${stempel(z || Date.now())}\n${L('FernVon')}: ${(v || L('FernVonStandard')).toUpperCase()}\n${L('FernAn')}: ${L('FernAnAlle')}\n+++\n${String(t).toUpperCase()}\n+++ ${L('FernEnde')} +++`;
  const box = document.createElement('div');
  box.id = 'odin-fern';
  box.innerHTML = `<button type="button" class="odin-fern-zu" aria-label="${L('Schliessen')}">✕</button><pre class="odin-fern-streifen"></pre>`;
  document.body.appendChild(box);
  const el = box.querySelector('pre');
  // Zeitplan je Zeichen: Ein Tab im Hintergrund holt beim Zurückkommen auf, statt Zeichen für Zeichen nachzuholen
  const zeiten = [];
  let t0 = 350;
  for (const ch of ganz) { t0 += ch === '\n' ? 220 : ch === ' ' ? 45 : 22 + Math.random() * 38; zeiten.push(t0); }
  const start = performance.now();
  let i = 0;
  const uhr = setInterval(() => {
    const jetzt = performance.now() - start;
    let n = i;
    while (n < ganz.length && zeiten[n] <= jetzt) n++;
    if (n !== i) { i = n; el.textContent = ganz.slice(0, i); el.scrollTop = el.scrollHeight; }
    if (i >= ganz.length) { el.classList.add('fertig'); clearInterval(uhr); }
  }, 25);
  el.addEventListener('click', () => { clearInterval(uhr); el.textContent = ganz; el.classList.add('fertig'); });
  box.querySelector('.odin-fern-zu').addEventListener('click', () => { clearInterval(uhr); box.remove(); });
}

/* ---------------- Fenster der Zentrale ---------------- */
export class ZentraleApp extends foundry.applications.api.ApplicationV2 {
  static DEFAULT_OPTIONS = {
    id: 'odin-zentrale',
    classes: ['odin-zentrale'],
    window: { title: 'ODIN.Zentrale.Titel', icon: 'fa-solid fa-tower-broadcast', resizable: true },
    position: { width: 540, height: Math.min(760, (globalThis.innerHeight || 900) - 80) },
  };

  async _renderHTML() {
    const st = canvas?.scene?.getFlag(SYS, 'stimmung') ?? {};
    const s = Number(st.s) || 0.8;
    const knopf = (p) => `<button type="button" class="st${(st.p || '') === p ? ' aktiv' : ''}" data-p="${p}">${L(`St.${p || 'aus'}`)}</button>`;
    let von = '';
    try { von = localStorage.getItem('odin.fern.von') || ''; } catch (e) { /* ohne Speicher */ }
    return `
      <section class="z-block"><h3>${L('Stimmung')}</h3><p class="hinweis">${L('StimmungHinweis')}</p>
        <div class="z-knoepfe">${knopf('')}${STIMMUNGEN.map(knopf).join('')}</div>
        <label class="z-regler">${L('Staerke')} <input type="range" min="0.2" max="1" step="0.05" value="${s}"></label></section>
      <section class="z-block"><h3>${L('Fernschreiben')}</h3><p class="hinweis">${L('FernHinweis')}</p>
        <input type="text" class="fern-von" placeholder="${L('FernVonPlatzhalter')}" value="${foundry.utils.escapeHTML(von)}">
        <textarea class="fern-text" rows="4" placeholder="${L('FernTextPlatzhalter')}"></textarea>
        <button type="button" class="fern-senden">${L('Senden')}</button></section>${await this.#registraturBlock()}`;
  }

  #regWahl = null;
  #regSuche = '';
  async #registraturBlock() {
    const liste = await registratur.daten();
    if (!liste?.length) return '';
    const R = (k) => game.i18n.localize(`ODIN.Registratur.${k}`);
    const q = this.#regSuche.toLowerCase();
    const treffer = liste.filter((e) => !q || `${e.name} ${e.code} ${e.familie ?? ''} ${e.ursprung ?? ''}`.toLowerCase().includes(q));
    const wahl = liste.find((e) => e.code === this.#regWahl);
    return `<section class="z-block z-reg"><h3>${R('Block')}</h3><p class="hinweis">${R('BlockHinweis')}</p>
      <input type="search" class="reg-suche" placeholder="${R('Suche')}" value="${foundry.utils.escapeHTML(this.#regSuche)}">
      <div class="reg-liste">${treffer.map((e) => `<button type="button" class="reg-e${e.code === this.#regWahl ? ' aktiv' : ''}" data-c="${e.code}">${foundry.utils.escapeHTML(e.name)}</button>`).join('')}</div>
      ${wahl ? `${registratur.karteHTML(wahl)}<div class="z-knoepfe"><button type="button" class="reg-anfordern">${R('Anfordern')}</button><button type="button" class="reg-selbst">${R('Selbst')}</button></div>` : ''}</section>`;
  }

  _replaceHTML(result, content) {
    content.innerHTML = result;
    content.querySelectorAll('button.st').forEach((b) => b.addEventListener('click', async () => {
      const s = Number(content.querySelector('.z-regler input').value) || 0.8;
      await stimmungSetzen(b.dataset.p, s);
      this.render();
    }));
    content.querySelector('.z-regler input').addEventListener('change', async (ev) => {
      const st = canvas?.scene?.getFlag(SYS, 'stimmung');
      if (st?.p) await stimmungSetzen(st.p, Number(ev.target.value));
    });
    const suche = content.querySelector('.reg-suche');
    if (suche) {
      suche.addEventListener('change', () => { this.#regSuche = suche.value; this.render(); });
      content.querySelectorAll('.reg-e').forEach((k) => k.addEventListener('click', () => { this.#regWahl = k.dataset.c; this.render(); }));
      content.querySelector('.reg-anfordern')?.addEventListener('click', () => registratur.anfordern(this.#regWahl));
      content.querySelector('.reg-selbst')?.addEventListener('click', () => registratur.wissensprobe(this.#regWahl));
    }
    content.querySelector('.fern-senden').addEventListener('click', async () => {
      const t = content.querySelector('.fern-text').value;
      const v = content.querySelector('.fern-von').value;
      try { localStorage.setItem('odin.fern.von', v); } catch (e) { /* ohne Speicher */ }
      if (!t.trim()) return;
      await fernschreibenSenden(t, v);
      content.querySelector('.fern-text').value = '';
    });
  }
}

let fenster = null;
export function zentraleOeffnen() {
  if (!game.user.isGM) return;
  fenster ??= new ZentraleApp();
  fenster.render({ force: true });
}

/* ---------------- Hooks ---------------- */
export function einrichten() {
  registratur.einrichten();
  Hooks.on('getSceneControlButtons', (controls) => {
    const token = controls.tokens ?? controls.token;
    if (!token?.tools) return;
    token.tools.odinZentrale = {
      name: 'odinZentrale', title: 'ODIN.Zentrale.Titel', icon: 'fa-solid fa-tower-broadcast',
      order: Object.keys(token.tools).length + 1, button: true, visible: game.user.isGM,
      onChange: () => zentraleOeffnen(),
    };
  });
  Hooks.on('canvasReady', () => stimmungAnwenden(canvas.scene));
  Hooks.on('canvasTearDown', () => stimmungAnwenden(null));
  Hooks.on('updateScene', (scene, changes) => {
    if (scene.id === canvas?.scene?.id && changes?.flags) stimmungAnwenden(scene);
  });
  Hooks.on('createChatMessage', (msg) => {
    const d = msg.getFlag(SYS, 'fern');
    if (d?.t) fernschreibenZeigen(d);
  });
  Hooks.on('renderChatMessageHTML', (msg, html) => {
    const k = html.querySelector('[data-odin-aktion="fern"]');
    if (!k) return;
    k.addEventListener('click', () => { const d = msg.getFlag(SYS, 'fern'); if (d?.t) fernschreibenZeigen(d); });
  });
}
