// „Was die Akte sagt“: Wesen aus Band 22 „Die Registratur“ mit Wissensprobe am Tisch.
// Die Daten (daten/registratur_de.json, _en.json) und Fotos (assets/registratur/) liegen nur im Paket, wenn der Band erschienen ist.
// Fehlen sie, bleibt der Block in der Zentrale weg.
import { pool, wurf, auswerten, karte, posten, attrName, fertName } from './wuerfel.mjs';

const SYS = 'odin-rpg';
const L = (k, d) => (d ? game.i18n.format(`ODIN.Registratur.${k}`, d) : game.i18n.localize(`ODIN.Registratur.${k}`));
const esc = (s) => foundry.utils.escapeHTML(String(s ?? ''));
const FERT = {
  okkultismus: 'okkultismus', occultism: 'okkultismus', xenobiologie: 'xenobiologie', xenobiology: 'xenobiologie',
  biologie: 'biologie', biology: 'biologie', medizin: 'medizin', medicine: 'medizin', technik: 'technik', technology: 'technik',
  physik: 'physik', physics: 'physik', ermittlung: 'ermittlung', investigation: 'ermittlung',
};
const sprache = () => (game.i18n.lang?.startsWith('en') ? 'en' : 'de');
const foto = (e) => `systems/${SYS}/assets/registratur/${e.foto || e.code + '.webp'}`;

const cache = {};
export async function daten(spr = sprache()) {
  if (spr in cache) return cache[spr];
  try {
    const r = await fetch(`systems/${SYS}/daten/registratur_${spr}.json`);
    cache[spr] = r.ok ? await r.json() : null;
  } catch (e) { cache[spr] = null; }
  return cache[spr];
}
export async function eintrag(code, spr = sprache()) {
  return (await daten(spr))?.find((x) => x.code === code) ?? null;
}

/** Karteikarte als HTML (für die Vorschau der Spielleitung). */
export function karteHTML(e, { mitAkte = true } = {}) {
  const zeile = (k, v) => (v ? `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>` : '');
  return `<div class="odin-reg-karte">
    <img src="${foto(e)}" alt="">
    <h3>${esc(e.name)} <small>${esc(e.code)}</small></h3>
    ${e.zitat ? `<blockquote>${esc(e.zitat)}<cite>${esc(e.zitatQuelle)}</cite></blockquote>` : ''}
    <table>${zeile(L('Ursprung'), [e.ursprung, e.familie].filter(Boolean).join(', '))}${zeile(L('Form'), e.form)}${zeile(L('Rolle'), e.rolle)}${zeile(L('Grauen'), e.grauen)}${zeile(L('Aktenfarbe'), e.aktenfarbe)}${zeile(L('Regionen'), e.regionen)}</table>
    <p class="probe"><b>${L('Probe')}:</b> ${esc(e.probe?.text)}</p>
    ${mitAkte ? `<table class="akte">${(e.akte ?? []).map((z) => `<tr><th>${esc(z.stufe)}</th><td>${esc(z.text)}</td></tr>`).join('')}</table>` : ''}
  </div>`;
}

/** Spielleitung: fordert die Wissensprobe bei allen am Tisch an. */
export async function anfordern(code, spr = sprache()) {
  const e = await eintrag(code, spr);
  if (!e) return;
  await ChatMessage.create({
    content: `<div class="odin-reg-anfrage"><img src="${foto(e)}" alt=""><div><h3>${esc(e.name)}</h3><p>${esc(e.probe?.text)}</p>
      <button type="button" data-odin-aktion="akte">${L('Wuerfeln')}</button></div></div>`,
    speaker: { alias: 'O.D.I.N.' },
    flags: { [SYS]: { akte: { code, spr } } },
  });
}

/** Spieler: würfelt die Wissensprobe mit der eigenen Figur und bekommt die erreichten Zeilen. */
export async function wissensprobe(code, spr = sprache()) {
  const e = await eintrag(code, spr);
  if (!e) { ui.notifications.warn(L('Fehlt')); return; }
  const actor = canvas?.tokens?.controlled?.[0]?.actor ?? game.user.character;
  if (!actor || actor.type !== 'agent') { ui.notifications.warn(L('KeinAgent')); return; }
  const attr = String(e.probe?.attr || 'IN').toUpperCase().slice(0, 2);
  const fert = FERT[String(e.probe?.fertigkeit || '').toLowerCase()] ?? '';
  const boni = (e.probe?.boni ?? []).map((b, i) => `<label class="odin-check"><input type="checkbox" name="bonus${i}" data-mod="${Number(b.mod) || 0}"> ${esc(b.wer)} (${b.mod > 0 ? '+' : ''}${b.mod})</label>`).join('');
  const r = await foundry.applications.api.DialogV2.prompt({
    window: { title: L('Titel', { name: e.name }) },
    content: `<div class="odin-dialog odin-reg-dialog"><p>${esc(e.probe?.text)}</p>
      <label class="odin-check"><input type="checkbox" name="nachforschen"> ${L('Nachforschen')} (+2)</label>
      ${e.probe?.telefon ? `<label class="odin-check"><input type="checkbox" name="telefon"> ${L('Telefon')} (${e.probe.telefon})</label>` : ''}
      ${boni}
      <label>${game.i18n.localize('ODIN.Dialog.Bonus')}</label><input type="number" name="bonus" value="0" min="0" max="3">
      <label>${game.i18n.localize('ODIN.Dialog.Malus')}</label><input type="number" name="malus" value="0" min="0" max="20"></div>`,
    ok: {
      label: game.i18n.localize('ODIN.Dialog.Wuerfeln'), icon: 'fa-solid fa-dice-d6',
      callback: (ev, btn) => {
        const f = btn.form;
        let bonus = Number(f.bonus.value) || 0, malus = Number(f.malus.value) || 0;
        if (f.nachforschen.checked) bonus += 2;
        if (f.telefon?.checked) malus += Math.abs(Number(e.probe.telefon) || 1);
        f.querySelectorAll('input[data-mod]').forEach((c) => { if (c.checked) { const m = Number(c.dataset.mod); if (m > 0) bonus += m; else malus -= m; } });
        return { bonus, malus };
      },
    },
    rejectClose: false,
  });
  if (!r) return;
  const aw = actor.system.attribute?.[attr]?.wert ?? 0;
  const fw = fert ? actor.system.fertigkeiten?.[fert]?.wert ?? 0 : 0;
  const [w, b] = pool(aw, fw, r.bonus, r.malus);
  const res = await wurf(w, b);
  const ergebnis = auswerten(res, 0);
  const pt = `${attrName(attr)} ${aw}${fert ? ` + ${fertName(fert)} ${fw}` : ''} → ${w} ${game.i18n.localize('ODIN.Karte.Weiss')} + ${b} ${game.i18n.localize('ODIN.Karte.Bunt')}`;
  const zeilen = (e.akte ?? []).map((z) => {
    const ok = ergebnis.erfolge >= z.min;
    return `<tr class="${ok ? 'ok' : 'zu'}"><th>${esc(z.stufe)}</th><td>${ok ? esc(z.text) : `<i>${L('NichtErreicht')}</i>`}</td></tr>`;
  }).join('');
  const zusatz = `<div class="odin-reg-ergebnis"><b>${L('AkteSagt')}</b><table class="akte">${zeilen}</table></div>`;
  return posten(actor, karte({ titel: L('Titel', { name: e.name }), poolText: pt, e: ergebnis, zusatz }), res.roll);
}

export function einrichten() {
  Hooks.on('renderChatMessageHTML', (msg, html) => {
    const k = html.querySelector('[data-odin-aktion="akte"]');
    if (!k) return;
    k.addEventListener('click', () => { const d = msg.getFlag(SYS, 'akte'); if (d?.code) wissensprobe(d.code, d.spr); });
  });
}
