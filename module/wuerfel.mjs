// Würfelsystem: zwei Farben, weiß ab 5, bunt ab 4 (Grundregelwerk, Kapitel IV)
import { DATEN } from './daten.mjs';

const esc = (s) => foundry.utils.escapeHTML(String(s ?? ''));
const L = (k, d) => game.i18n.format(`ODIN.${k}`, d ?? {});
export const attrName = (a) => game.i18n.localize(`ODIN.Attribut.${a}`);
export const fertName = (k) => (k ? game.i18n.localize(`ODIN.Fertigkeit.${k}`) : '');

export const SCHWIERIGKEITEN = [[1, 'Einfach'], [2, 'Machbar'], [3, 'Schwer'], [4, 'SehrSchwer'], [5, 'Unmoeglich']];
export const GRAUEN = [[1, 'Unheimlich'], [2, 'Verstoerend'], [3, 'Grauenhaft'], [4, 'Wahnsinnig'], [5, 'Kosmisch']];
export const KATEGORIEN = {
  klein: { res: 'psi', kosten: 1, schw: 1, rang: 0 }, psisub: { res: 'psi', kosten: 2, schw: 2, rang: 0 },
  mittel: { res: 'psi', kosten: 3, schw: 2, rang: 0 }, maechtig: { res: 'psi', kosten: 6, schw: 3, rang: 2 },
  trick: { res: 'me', kosten: 1, schw: 1, rang: 0 }, zsub: { res: 'me', kosten: 2, schw: 2, rang: 0 },
  minor: { res: 'me', kosten: 3, schw: 2, rang: 0 }, major: { res: 'me', kosten: 5, schw: 3, rang: 2 }, grand: { res: 'me', kosten: 8, schw: 4, rang: 3 },
};
export const WAFFEN_ARTEN = {
  fern: ['GE', 'schusswaffen'], energie: ['GE', 'energiewaffen'], nah: ['ST', 'nahkampf'],
  hand: ['ST', 'handgemenge'], schwer: ['ST', 'schwere_waffen'], wurf: ['GE', 'athletik'],
};

/* ---------------- Regeln (rein, testbar) ---------------- */
export function pool(weiss, bunt, bonus = 0, malus = 0) {
  weiss += Math.min(3, Math.max(0, bonus));
  let m = Math.max(0, malus);
  const abW = Math.min(weiss, m); weiss -= abW; m -= abW;
  bunt = Math.max(0, bunt - m);
  return [weiss, bunt];
}

export function auswerten({ w, b, verzweiflung }, schw) {
  const erfolge = w.filter((x) => x >= (verzweiflung ? 6 : 5)).length + b.filter((x) => x >= 4).length;
  const einsen = [...w, ...b].filter((x) => x === 1).length;
  const e = { w, b, verzweiflung, schw, erfolge, einsen, erfolg: null, ueberschuss: 0, grandios: false, patzer: false };
  if (schw > 0) {
    e.erfolg = erfolge >= schw;
    e.ueberschuss = e.erfolg ? erfolge - schw : 0;
    e.grandios = e.erfolg && e.ueberschuss >= 3;
    if (!e.erfolg && einsen > erfolge) e.patzer = true;
  } else if (erfolge === 0 && einsen > 0) e.patzer = true;
  if (verzweiflung && w[0] === 1) e.patzer = true;
  return e;
}

export async function wurf(weiss, bunt) {
  const verzweiflung = weiss + bunt <= 0;
  if (verzweiflung) { weiss = 1; bunt = 0; }
  const teile = [];
  if (weiss > 0) teile.push(`${weiss}d6cs>=${verzweiflung ? 6 : 5}[weiss]`);
  if (bunt > 0) teile.push(`${bunt}d6cs>=4[bunt]`);
  const roll = await new Roll(teile.join(' + ')).evaluate();
  const d = roll.dice;
  const w = weiss > 0 ? d[0].results.map((r) => r.result) : [];
  const b = bunt > 0 ? d[weiss > 0 ? 1 : 0].results.map((r) => r.result) : [];
  return { roll, w, b, verzweiflung };
}

/* ---------------- Chatkarte ---------------- */
function ergebnis(e) {
  if (e.patzer) return ['patzer', L('Ergebnis.Patzer')];
  if (!e.schw) return ['offen', L('Ergebnis.Offen', { n: e.erfolge })];
  if (e.grandios) return ['grandios', L('Ergebnis.Grandios')];
  if (e.erfolg) return ['erfolg', L('Ergebnis.Erfolg')];
  return ['fehlschlag', L('Ergebnis.Fehlschlag')];
}
const wuerfelHTML = (arr, weiss, verz) => arr.map((x) => {
  const ok = weiss ? x >= (verz ? 6 : 5) : x >= 4;
  return `<span class="odin-w ${weiss ? 'weiss' : 'bunt'}${ok ? ' ok' : ''}${x === 1 ? ' eins' : ''}">${x}</span>`;
}).join('');

export function karte({ titel, poolText, e, zusatz = '', knoepfe = '' }) {
  const [cls, txt] = ergebnis(e);
  return `<div class="odin-karte">
  <h3>${esc(titel)}</h3>
  <div class="odin-pool">${e.verzweiflung ? esc(poolText) + ' · ' + L('Karte.Verzweiflung') : esc(poolText)}</div>
  <div class="odin-wuerfelreihe">${wuerfelHTML(e.w, true, e.verzweiflung)}${e.b.length ? '<span class="trenner"></span>' + wuerfelHTML(e.b, false) : ''}</div>
  <div class="odin-zeile"><span>${L('Karte.Erfolge')} <b>${e.erfolge}</b>${e.schw ? ` / ${e.schw}` : ''}</span><span>${L('Karte.Einsen')} ${e.einsen}</span>${e.schw ? `<span>${L('Karte.Ueberschuss')} <b>${e.ueberschuss}</b></span>` : ''}</div>
  <div class="odin-erg ${cls}">${txt}</div>${zusatz}${knoepfe}</div>`;
}
export const hinweis = (t) => `<div class="odin-hinweis">${t}</div>`;
export const balken = (cls, t) => `<div class="odin-erg ${cls}">${t}</div>`;

export async function posten(actor, content, roll, { verdeckt = false, flags = {} } = {}) {
  const data = { speaker: ChatMessage.getSpeaker({ actor }), content, rolls: roll ? [roll] : [], flags: { 'odin-rpg': flags } };
  if (verdeckt) { data.whisper = ChatMessage.getWhisperRecipients('GM').map((u) => u.id); data.blind = true; }
  return ChatMessage.create(data);
}

/* ---------------- Dialog ---------------- */
export async function probenDialog(actor, { titel, attr, fert, schw = 2, mitAttr = true, mitFert = true, schwListe = SCHWIERIGKEITEN, schwLabel, felder = [] }) {
  const sys = actor.system;
  const opt = (liste, sel) => liste.map(([v, l]) => `<option value="${v}"${String(v) === String(sel) ? ' selected' : ''}>${esc(l)}</option>`).join('');
  const attrOpt = opt(DATEN.attribute.map((a) => [a, `${a} ${attrName(a)} (${sys.attribute?.[a]?.wert ?? 0})`]), attr);
  const fertOpt = opt([['', L('Dialog.KeineFertigkeit')], ...DATEN.fertigkeiten.map((d) => [d.key, `${fertName(d.key)} (${sys.fertigkeiten?.[d.key]?.wert ?? 0})`])], fert);
  const schwOpt = !schwListe ? '' : opt([...(schwListe === SCHWIERIGKEITEN ? [[0, L('Schwierigkeit.Offen')]] : []), ...schwListe.map(([v, k]) => [v, `${L((schwListe === GRAUEN ? 'Grauen.' : 'Schwierigkeit.') + k)} (${v})`])], schw);
  const zusatz = felder.map((x) => `<label>${esc(x.label)}</label><input type="number" name="${x.name}" value="${x.wert ?? 0}" min="${x.min ?? 0}" max="${x.max ?? 30}">`).join('');
  const content = `<div class="odin-dialog">
    ${mitAttr ? `<label>${L('Dialog.Attribut')}</label><select name="attr">${attrOpt}</select>` : ''}
    ${mitFert ? `<label>${L('Dialog.Fertigkeit')}</label><select name="fert">${fertOpt}</select>` : ''}
    ${schwListe ? `<label>${schwLabel ?? L('Dialog.Schwierigkeit')}</label><select name="schw">${schwOpt}</select>` : ''}
    ${zusatz}
    <label>${L('Dialog.Bonus')}</label><input type="number" name="bonus" value="0" min="0" max="3">
    <label>${L('Dialog.Malus')}</label><input type="number" name="malus" value="0" min="0" max="20">
  </div><p class="odin-dialog-hinweis">${L('Dialog.Hinweis')}</p>`;
  const r = await foundry.applications.api.DialogV2.prompt({
    window: { title: titel },
    content,
    ok: { label: L('Dialog.Wuerfeln'), icon: 'fa-solid fa-dice-d6', callback: (ev, btn) => new foundry.applications.ux.FormDataExtended(btn.form).object },
    rejectClose: false,
  });
  if (!r) return null;
  for (const k of Object.keys(r)) if (k !== 'attr' && k !== 'fert') r[k] = Number(r[k]) || 0;
  return r;
}

/* ---------------- Preis-Hinweis ---------------- */
const PREIS_ANLASS = {
  Psion: ['psi-patzer'], Thaumaturg: ['zauber-patzer', 'ueberziehen'], Soldier: ['grauen'],
  Agent: ['taeuschung', 'verkleidung'], Scientist: [], Investigator: ['ermittlung', 'grauen'],
};
export function preisHinweis(actor, anlass) {
  const k = actor.system.klasse;
  if (!PREIS_ANLASS[k]?.includes(anlass)) return '';
  return hinweis(L('Preis.Anlass', { preis: actor.system.preisName }));
}
