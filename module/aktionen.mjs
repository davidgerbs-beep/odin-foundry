// Proben und Aktionen der Agenten und Gegner
import { DATEN } from './daten.mjs';
import { abk, rangName, knotenLokal, fertDatenName } from './sprache.mjs';
import { pool, auswerten, wurf, karte, hinweis, balken, posten, probenDialog, preisHinweis, attrName, fertName, GRAUEN, KATEGORIEN, WAFFEN_ARTEN } from './wuerfel.mjs';

const L = (k, d) => game.i18n.format(`ODIN.${k}`, d ?? {});
const esc = (s) => foundry.utils.escapeHTML(String(s ?? ''));
const TABELLE = (key) => [1, 2, 3, 4, 5, 6].map((i) => L(`${key}.${i}`));
const av = (actor, a) => actor.system.attribute?.[a]?.wert ?? 0;
const fv = (actor, k) => (k ? actor.system.fertigkeiten?.[k]?.wert ?? 0 : 0);
/** Gekaufte Knoten mit Name und Wirkung in der Sprache der Oberfläche. */
const knotenDerKlasse = (actor) => (actor.system.knotenListe ?? []).map((n) => knotenLokal(actor.system.klasse, n));

function poolText(actor, attr, fert, w, b, r) {
  let t = `${abk(attr)} ${av(actor, attr)}${fert ? ` + ${fertName(fert)} ${fv(actor, fert)}` : ''} → ${w} ${L('Karte.Weiss')} + ${b} ${L('Karte.Bunt')}`;
  if (r.bonus) t += ` (+${Math.min(3, r.bonus)} ${L('Karte.Bonus')})`;
  if (r.malus) t += ` (−${r.malus} ${L('Karte.Malus')})`;
  return t;
}

/* Der Wurf wird in wurf() erzeugt; wir brauchen das Roll-Objekt für die Chatnachricht. */
async function werfen(w, b, schw) {
  const res = await wurf(w, b);
  const e = auswerten(res, schw);
  return { e, roll: res.roll };
}

export async function fertigkeitsProbe(actor, fert, nurAttribut = false, attr) {
  attr ??= DATEN.fertigkeiten.find((d) => d.key === fert)?.attr ?? 'GE';
  const titel = nurAttribut ? L('Titel.Attributsprobe', { a: attrName(attr) }) : fert ? L('Titel.Probe', { f: fertName(fert) }) : L('Titel.FreieProbe');
  const knotenHinweise = knotenDerKlasse(actor).filter((n) => /Würfel|Erfolg|Stufe leichter|\bdice\b|\bdie (?:on|to|for)\b|success|step easier/.test(n.wirkung) && !!fert && n.wirkung.includes(fertDatenName(fert) || '§'));
  const r = await probenDialog(actor, { titel, attr, fert, mitFert: !nurAttribut, knotenHinweise });
  if (!r) return;
  const f = nurAttribut ? '' : r.fert;
  const [w, b] = pool(av(actor, r.attr), fv(actor, f), r.bonus, r.malus);
  const { e, roll } = await werfen(w, b, r.schw);
  let zusatz = '';
  if (f && fv(actor, f) === 0 && DATEN.ungeuebtVerboten.includes(f)) zusatz += hinweis(L('Hinweis.Ungeuebt', { f: fertName(f) }));
  if (e.patzer) zusatz += preisHinweis(actor, f);
  const t = f ? `${fertName(f)} (${abk(r.attr)})` : `${attrName(r.attr)} (${abk(r.attr)})`;
  return posten(actor, karte({ titel: t, poolText: poolText(actor, r.attr, f, w, b, r), e, zusatz }), roll);
}

/** Grauen-Probe: WK + Geistige Widerstandskraft, Belastung, Trauma (Kapitel VII). */
export async function grauenProbe(actor, stufe = 2) {
  const knotenHinweise = knotenDerKlasse(actor).filter((n) => /Grauen|horror/i.test(n.wirkung));
  const r = await probenDialog(actor, { knotenHinweise, titel: L('Titel.Grauen'), attr: 'WK', fert: 'geistige_widerstandskraft', schw: stufe, mitAttr: false, mitFert: false, schwListe: GRAUEN, schwLabel: L('Dialog.Stufe') });
  if (!r) return;
  const [w, b] = pool(av(actor, 'WK'), fv(actor, 'geistige_widerstandskraft'), r.bonus, r.malus);
  const { e, roll } = await werfen(w, b, r.schw);
  let zusatz = '';
  if (!e.erfolg) {
    const sys = actor.system;
    const plus = Math.max(1, e.schw - e.erfolge) + (e.patzer ? 2 : 0);
    let neu = sys.belastung.value + plus;
    zusatz += hinweis(L('Grauen.Belastung', { n: plus, alt: sys.belastung.value, neu: Math.min(neu, sys.belastung.max), max: sys.belastung.max }));
    if (e.patzer) zusatz += hinweis(L('Grauen.Patzer'));
    if (neu >= sys.belastung.max) {
      const t = await new Roll('1d6').evaluate();
      const tr = TABELLE('Trauma')[t.total - 1];
      neu = Math.floor(sys.belastung.max / 2);
      const [name, ...rest] = tr.split(': ');
      await actor.createEmbeddedDocuments('Item', [{ name, type: 'trauma', system: { beschreibung: `<p>${esc(rest.join(': '))}</p>`, aktiv: true } }]);
      zusatz += balken('patzer', L('Grauen.Trauma', { w: t.total, name })) + hinweis(L('Grauen.TraumaText', { text: esc(rest.join(': ')), neu }));
    }
    await actor.update({ 'system.belastung.value': neu });
    zusatz += preisHinweis(actor, 'grauen');
  }
  const stufeName = L(`Grauen.${GRAUEN.find((g) => g[0] === e.schw)?.[1] ?? 'Verstoerend'}`);
  return posten(actor, karte({ titel: `${L('Titel.Grauen')}: ${stufeName}`, poolText: poolText(actor, 'WK', 'geistige_widerstandskraft', w, b, r), e, zusatz }), roll);
}

/** Angriff mit einer Waffe gegen das markierte Ziel (Kapitel VI). */
export async function angriff(actor, waffe) {
  const [aDef, fDef] = WAFFEN_ARTEN[waffe.system.art] ?? WAFFEN_ARTEN.fern;
  const ziel = game.user.targets.first()?.actor;
  const zVert = ziel ? (ziel.system.verteidigung ?? 2) : 2;
  const zRuest = ziel ? (ziel.system.ruestung ?? 0) : 0;
  const r = await probenDialog(actor, {
    titel: `${L('Titel.Angriff', { w: waffe.name })}${ziel ? ' → ' + ziel.name : ''}`, attr: aDef, fert: fDef, schwListe: null,
    felder: [{ name: 'vert', label: L('Dialog.Verteidigung'), wert: zVert, min: 1, max: 10 }, { name: 'ruest', label: L('Dialog.Ruestung'), wert: zRuest, max: 20 }],
  });
  if (!r) return;
  const [w, b] = pool(av(actor, r.attr), fv(actor, r.fert), r.bonus, r.malus);
  const { e, roll } = await werfen(w, b, Math.max(1, r.vert));
  return trefferAuswerten(actor, { e, roll, name: waffe.name, schadenBasis: waffe.system.schaden, durchschlag: waffe.system.durchschlag, ruest: r.ruest, ziel, poolText: poolText(actor, r.attr, r.fert, w, b, r) + (waffe.system.eigenschaften ? ' · ' + waffe.system.eigenschaften : '') });
}

async function trefferAuswerten(actor, { e, roll, name, schadenBasis, durchschlag, ruest, ziel, poolText: pt }) {
  let zusatz = '', knoepfe = '';
  const flags = {};
  if (e.erfolg) {
    const r = Math.max(0, ruest - durchschlag);
    const schaden = Math.max(0, schadenBasis + e.ueberschuss - r);
    zusatz += hinweis(L('Kampf.Rechnung', { w: schadenBasis, u: e.ueberschuss, r })) + balken('schaden', L('Kampf.Schaden', { n: schaden }));
    if (e.grandios) zusatz += hinweis(L('Kampf.Grandios', { n: schadenBasis + e.ueberschuss, w: schadenBasis }));
    if (ziel && schaden > 0) {
      flags.schaden = { uuid: ziel.uuid, n: schaden, ohneRuestung: schadenBasis + e.ueberschuss };
      if (ziel.isOwner) {
        const lp = ziel.system.lp.value;
        await ziel.update({ 'system.lp.value': lp - schaden });
        zusatz += hinweis(L('Kampf.Abgezogen', { name: esc(ziel.name), alt: lp, neu: lp - schaden }));
      } else knoepfe += `<button type="button" class="odin-knopf" data-odin-aktion="schaden">${L('Kampf.Anwenden', { n: schaden, name: esc(ziel.name) })}</button>`;
    }
  }
  if (e.patzer) zusatz += hinweis(L('Kampf.Patzer'));
  return posten(actor, karte({ titel: L('Titel.Angriff', { w: name }), poolText: pt, e, zusatz, knoepfe }), roll, { flags });
}

/** Psi-Kraft oder Zauber wirken (Kapitel VIII und IX). */
export async function wirken(actor, item) {
  const kat = KATEGORIEN[item.system.kategorie] ?? KATEGORIEN.klein;
  const psi = kat.res === 'psi';
  const sys = actor.system;
  if ((sys.rangIndex ?? 0) < kat.rang) {
    const ok = await foundry.applications.api.DialogV2.confirm({ window: { title: item.name }, content: `<p>${L('Hinweis.Rang', { rang: rangName(DATEN.raenge[kat.rang]) })}</p>` });
    if (!ok) return;
  }
  const r = await probenDialog(actor, { titel: `${L(psi ? 'Titel.Kraft' : 'Titel.Zauber')}: ${item.name}`, attr: item.system.attr, fert: item.system.fertigkeit, schw: kat.schw });
  if (!r) return;
  const hat = sys[kat.res].value;
  const fehlt = Math.max(0, kat.kosten - hat);
  const upd = { [`system.${kat.res}.value`]: Math.max(0, hat - kat.kosten) };
  let bel = sys.belastung.value + fehlt, lp = sys.lp.value;
  const [w, b] = pool(av(actor, r.attr), fv(actor, r.fert), r.bonus, r.malus);
  const { e, roll } = await werfen(w, b, r.schw);
  let zusatz = hinweis(L('Kraft.Kosten', { n: kat.kosten, res: L(psi ? 'Werte.PSI' : 'Werte.ME'), alt: hat, neu: Math.max(0, hat - kat.kosten) }) + (fehlt ? ' ' + L('Kraft.Ueberzogen', { n: fehlt }) : ''));
  if (e.patzer) {
    const t = await new Roll('1d6').evaluate();
    const tab = TABELLE(psi ? 'Rueckkopplung' : 'Kristallriss');
    zusatz += balken('patzer', `${L(psi ? 'Kraft.Rueckkopplung' : 'Kraft.Kristallriss')} (${L('Karte.W6')}: ${t.total})`) + hinweis(tab[t.total - 1]);
    if (t.total <= 2) bel += 2;
    if ((psi && (t.total === 3 || t.total === 4)) || (!psi && t.total === 3)) lp -= 2;
    zusatz += preisHinweis(actor, psi ? 'psi-patzer' : 'zauber-patzer');
  } else if (fehlt && !psi) zusatz += preisHinweis(actor, 'ueberziehen');
  if (item.system.ueberschuss) zusatz += hinweis(`${L('Kraft.Ueberschuss')}: ${esc(item.system.ueberschuss)}`);
  upd['system.belastung.value'] = bel;
  upd['system.lp.value'] = lp;
  await actor.update(upd);
  const t = `${item.name} (${L('Kategorie.' + item.system.kategorie)})`;
  return posten(actor, karte({ titel: t, poolText: poolText(actor, r.attr, r.fert, w, b, r), e, zusatz }), roll);
}

/** Pool eines Gegners (weiß + bunt), mit Schaden, wenn angegeben. */
export async function gegnerPool(actor, index) {
  const p = actor.system.pools[index];
  if (!p) return;
  const ziel = game.user.targets.first()?.actor;
  const angriffsPool = p.schaden > 0;
  const felder = angriffsPool
    ? [{ name: 'vert', label: L('Dialog.Verteidigung'), wert: ziel?.system.verteidigung ?? 2, min: 1, max: 10 }, { name: 'ruest', label: L('Dialog.Ruestung'), wert: ziel?.system.ruestung ?? 0 }]
    : [];
  const r = await probenDialog(actor, { titel: `${actor.name}: ${p.name}`, mitAttr: false, mitFert: false, schwListe: angriffsPool ? null : undefined, felder });
  if (!r) return;
  const [w, b] = pool(p.weiss, p.bunt, r.bonus, r.malus);
  const pt = `${p.weiss} + ${p.bunt} → ${w} ${L('Karte.Weiss')} + ${b} ${L('Karte.Bunt')}${p.notiz ? ' · ' + p.notiz : ''}`;
  if (angriffsPool) {
    const { e, roll } = await werfen(w, b, Math.max(1, r.vert));
    return trefferAuswerten(actor, { e, roll, name: p.name, schadenBasis: p.schaden, durchschlag: p.durchschlag, ruest: r.ruest, ziel, poolText: pt });
  }
  const { e, roll } = await werfen(w, b, r.schw);
  return posten(actor, karte({ titel: `${actor.name}: ${p.name}`, poolText: pt, e }), roll);
}

/** Würfel auf den Preis: W6 gegen den Wert, verdeckt an die Spielleitung. */
export async function preisWurf(actor) {
  const sys = actor.system;
  if (!sys.preisName) return ui.notifications.warn(L('Hinweis.KeineKlasse'));
  const t = await new Roll('1d6').evaluate();
  const trifft = t.total <= sys.preisWert;
  const content = `<div class="odin-karte"><h3>${esc(actor.name)}: ${esc(sys.preisName)} ${sys.preisWert}</h3>
    <div class="odin-wuerfelreihe"><span class="odin-w weiss ok">${t.total}</span></div>
    ${balken(trifft ? 'patzer' : 'offen', trifft ? L(`Preis.Text.${sys.klasse}`) : L('Preis.Nichts'))}${hinweis(L(`Preis.Regel.${sys.klasse}`))}</div>`;
  return posten(actor, content, t, { verdeckt: true });
}

export async function auffuellen(actor) {
  const s = actor.system;
  await actor.update({ 'system.lp.value': s.lp.max, 'system.psi.value': s.psi.max, 'system.me.value': s.me.max });
  ui.notifications.info(L('Hinweis.Aufgefuellt', { name: actor.name }));
}

/** Knopf „Schaden anwenden" in der Chatkarte (für die Spielleitung). */
export function chatKnoepfe(message, html) {
  const k = html.querySelector('[data-odin-aktion="schaden"]');
  if (!k) return;
  if (!game.user.isGM) { k.remove(); return; }
  k.addEventListener('click', async () => {
    const d = message.getFlag('odin-rpg', 'schaden');
    const ziel = d && await fromUuid(d.uuid);
    if (!ziel) return;
    const lp = ziel.system.lp.value;
    await ziel.update({ 'system.lp.value': lp - d.n });
    ui.notifications.info(L('Kampf.Abgezogen', { name: ziel.name, alt: lp, neu: lp - d.n }));
    k.disabled = true;
  });
}

/** Freier Würfelpool: weiße und bunte Würfel frei wählen (auch ohne Figur). */
export async function freierPool(actor = null) {
  const r = await probenDialog(actor ?? { system: {} }, {
    titel: L('Titel.Pool'), mitAttr: false, mitFert: false,
    felder: [{ name: 'weiss', label: L('Dialog.Weiss'), wert: 3, max: 20 }, { name: 'bunt', label: L('Dialog.Bunt'), wert: 2, max: 20 }],
  });
  if (!r) return;
  const [w, b] = pool(r.weiss, r.bunt, r.bonus, r.malus);
  const { e, roll } = await werfen(w, b, r.schw);
  return posten(actor, karte({ titel: L('Titel.Pool'), poolText: `${w} ${L('Karte.Weiss')} + ${b} ${L('Karte.Bunt')}`, e }), roll);
}
