// Signatur der Klassen auf Blatt 3 (nach den Klassenbögen des Charaktergenerators)
// Alle Texte kommen aus den Sprachdateien (ODIN.Sig.*); gespeichert werden weiter die deutschen Werte.
import { DATEN } from './daten.mjs';
import { rangName } from './sprache.mjs';

const L = (k, d) => game.i18n.format(`ODIN.Sig.${k}`, d ?? {});
const RI = (r) => Math.max(0, DATEN.raenge.indexOf(r));
const T = (name, wert, extra = {}) => ({ typ: 'text', name, wert: wert ?? '', ...extra });
const C = (name, wert) => ({ typ: 'check', name, wert: !!wert });
const K = (pfad, wert, n = 5) => ({ typ: 'kaestchen', pfad, liste: Array.from({ length: n }, (_, i) => ({ n: i + 1, cls: i < (Number(wert) || 0) ? 'an' : '' })) });
const S = (name, wert, optionen) => ({ typ: 'select', name, wert: wert ?? '', optionen });
const F = (wert) => ({ typ: 'fest', wert });
const zeilen = (n, fn) => Array.from({ length: n }, (_, i) => ({ zellen: fn(i) }));
const obj = (o) => o ?? {};
/** Auswahl mit gespeichertem (deutschem) Wert und übersetzter Beschriftung. */
const auswahl = (werte, praefix, leer = true) => Object.fromEntries([...(leer ? [['', '–']] : []), ...Object.entries(werte).map(([wert, k]) => [wert, L(`${praefix}.${k}`)])]);
/** Beschriftung eines gespeicherten Werts, falls bekannt. */
const anzeige = (werte, praefix, wert) => (werte[wert] ? L(`${praefix}.${werte[wert]}`) : (wert ?? ''));

/** Kristallsorten: gespeicherter Wert -> Schlüssel in ODIN.Sig.Thaumaturg.Sorten */
export const SORTEN = {
  Kristallsplitter: 'splitter', 'Klarer Kristall': 'klar', Resonanzkristall: 'resonanz', 'Anatolischer Splitter': 'anatolisch',
  Andenkristall: 'anden', Klosterstein: 'kloster', Nordlichtstein: 'nordlicht', Rissfund: 'riss',
};
export const ZUSTAENDE = { klar: 'klar', trueb: 'trueb', erschoepft: 'erschoepft' };
export const PLAETZE = ['messer', 'armschiene', 'brustplatte', 'schulter', 'handschuh', 'laufmantel', 'beinschienen', 'visier'];
export const LEGENDEN_STAND = { aktiv: 'aktiv', verbrannt: 'verbrannt' };
export const AKTEN_STAND = { offen: 'offen', geschlossen: 'geschlossen' };

/** Liefert {links: [Blöcke], kurz: [[Label, Wert]]}. Block: {titel, klein, tabelle: {kopf, zeilen}, felder, hinweis, text}. */
export function signaturKontext(actor) {
  const s = actor.system;
  const sig = obj(s.sig);
  const p = 'system.sig';
  const ri = RI(s.rang);
  switch (s.klasse) {
    case 'Psion': {
      const h = obj(sig.helm);
      return {
        links: [
          { titel: L('Psion.Helm'), tabelle: { kopf: [L('Psion.Modell'), L('Psion.Seriennummer'), L('Psion.Helmbindung'), L('Psion.Aufzeichnung')], zeilen: [{ zellen: [T(`${p}.helm.modell`, h.modell ?? 'Mk. III'), T(`${p}.helm.nummer`, h.nummer), C(`${p}.helm.bindung`, h.bindung), T(`${p}.helm.aufzeichnung`, h.aufzeichnung ?? L('Psion.AufzeichnungStandard'))] }] } },
          { titel: L('Psion.Umbauten'), text: T(`${p}.umbauten`, sig.umbauten) },
          { titel: L('Psion.Bruchstuecke'), klein: L('Psion.BruchstueckeKlein'), text: T(`${p}.bruchstuecke`, sig.bruchstuecke) },
        ],
        kurz: [
          [L('Psion.HelmKurz'), `${h.modell ?? 'Mk. III'}${h.nummer ? ', ' + L('Nr', { n: h.nummer }) : ''}${h.bindung ? ' · ' + L('Psion.Helmbindung') : ''}`],
          [L('Psion.Umbauten'), sig.umbauten], [L('Psion.Bruchstuecke'), sig.bruchstuecke],
        ],
      };
    }
    case 'Thaumaturg': {
      const k = obj(sig.kristall);
      return {
        links: [
          { titel: L('Thaumaturg.Kristall'), tabelle: { kopf: [L('Thaumaturg.Nummer'), L('Thaumaturg.Meister')], zeilen: [{ zellen: [T(`${p}.kristall.nummer`, k.nummer), T(`${p}.kristall.meister`, k.meister)] }] } },
          { felder: [
            [L('Thaumaturg.Name'), T(`${p}.kristall.name`, k.name)], [L('Thaumaturg.Fundort'), T(`${p}.kristall.fundort`, k.fundort)],
            [L('Thaumaturg.Beschreibung'), T(`${p}.kristall.art`, k.art)],
            [L('Thaumaturg.Sorte'), S(`${p}.kristall.sorte`, k.sorte, auswahl(SORTEN, 'Thaumaturg.Sorten'))],
            [L('Thaumaturg.Zustand'), S(`${p}.kristall.zustand`, k.zustand, auswahl(ZUSTAENDE, 'Thaumaturg.Zustaende'))],
            [L('Thaumaturg.Risse'), K(`${p}.kristall.risse`, k.risse, 3)],
            [L('Thaumaturg.Steine'), K(`${p}.steine`, sig.steine, 6)],
          ] },
        ],
        kurz: [
          [L('Thaumaturg.KristallKurz'), [k.nummer, k.name].filter(Boolean).join(' · ')], [L('Thaumaturg.Fundort'), k.fundort], [L('Thaumaturg.Beschreibung'), k.art],
          [L('Thaumaturg.Zustand'), [anzeige(ZUSTAENDE, 'Thaumaturg.Zustaende', k.zustand), k.risse ? L('Thaumaturg.RisseN', { n: k.risse }) : ''].filter(Boolean).join(', ')],
        ],
      };
    }
    case 'Soldier': {
      const pl = PLAETZE.map((x) => L(`Soldier.Plaetze.${x}`));
      const si = obj(sig.silber);
      const grenze = [2, 3, 5, 7, 8][ri];
      const stuecke = pl.filter((_, i) => si[i]?.besitz).length;
      return {
        links: [
          { titel: L('Soldier.Silber'), klein: L('Soldier.SilberKlein', { n: stuecke, max: grenze, rang: rangName(s.rang) }),
            tabelle: { kopf: ['', L('Soldier.Platz'), L('Soldier.Variante'), L('Soldier.Nr'), L('Soldier.Vorbesitzer'), L('Soldier.Fuer')], zeilen: zeilen(8, (i) => [C(`${p}.silber.${i}.besitz`, si[i]?.besitz), F(pl[i]), T(`${p}.silber.${i}.variante`, si[i]?.variante), T(`${p}.silber.${i}.nr`, si[i]?.nr), T(`${p}.silber.${i}.vorbesitzer`, si[i]?.vorbesitzer), T(`${p}.silber.${i}.fuer`, si[i]?.fuer)]) },
            hinweis: L('Soldier.Hinweis') },
          { titel: L('Soldier.Gefallene'), text: T(`${p}.gefallene`, sig.gefallene) },
        ],
        kurz: [[pl[0], si[0]?.nr ? L('Nr', { n: si[0].nr }) : ''], [L('Soldier.Vorbesitzer'), si[0]?.vorbesitzer], [L('Soldier.Fuer'), si[0]?.fuer], [L('Soldier.Stuecke'), `${stuecke} / ${grenze}`]],
      };
    }
    case 'Agent': {
      const le = obj(sig.legenden);
      const grenze = ri + 1, tiefe = [2, 3, 4, 5, 5][ri];
      return {
        links: [
          { titel: L('Agent.Legenden'), klein: L('Agent.LegendenKlein', { n: grenze, t: tiefe }),
            tabelle: { kopf: [L('Agent.NameBerufOrt'), L('Agent.Tiefe'), L('Agent.Kontakt'), L('Agent.Stand')], zeilen: zeilen(6, (i) => [T(`${p}.legenden.${i}.name`, le[i]?.name), K(`${p}.legenden.${i}.tiefe`, le[i]?.tiefe, 5), T(`${p}.legenden.${i}.kontakt`, le[i]?.kontakt), S(`${p}.legenden.${i}.stand`, le[i]?.stand ?? 'aktiv', auswahl(LEGENDEN_STAND, 'Agent.Staende', false))]) },
            hinweis: L('Agent.Hinweis') },
          { titel: L('Agent.EigenerName'), klein: L('Agent.EigenerNameKlein'), text: T(`${p}.eigenerName`, sig.eigenerName ?? s.klarname) },
          { titel: L('Agent.Briefkasten'), text: T(`${p}.briefkasten`, sig.briefkasten) },
        ],
        kurz: [[L('Agent.LegendeN', { n: 1 }), le[0]?.name], [L('Agent.Tiefe'), String(le[0]?.tiefe ?? '')], [L('Agent.LegendeN', { n: 2 }), le[1]?.name], [L('Agent.Klarname'), sig.eigenerName ?? s.klarname]],
      };
    }
    case 'Scientist': {
      const pr = obj(sig.prototypen), po = obj(sig.proben);
      return {
        links: [
          { titel: L('Scientist.Prototypen'), klein: L('Scientist.PrototypenKlein', { n: ri + 1, r: [2, 3, 4, 5, 5][ri] }),
            tabelle: { kopf: [L('Scientist.NrArt'), L('Scientist.Was'), L('Scientist.Reife'), L('Scientist.Probe')], zeilen: zeilen(5, (i) => [T(`${p}.prototypen.${i}.name`, pr[i]?.name), T(`${p}.prototypen.${i}.was`, pr[i]?.was), K(`${p}.prototypen.${i}.reife`, pr[i]?.reife, 5), T(`${p}.prototypen.${i}.probe`, pr[i]?.probe)]) },
            hinweis: L('Scientist.Hinweis') },
          { titel: L('Scientist.Fehlfunktion'), tabelle: { kopf: ['1', '2', '3', '4', '5', '6'], zeilen: [{ zellen: [1, 2, 3, 4, 5, 6].map((i) => F(L(`Scientist.Fehl.${i}`))) }] } },
          { titel: L('Scientist.Proben'), tabelle: { kopf: [L('Scientist.Probe'), L('Scientist.Herkunft'), L('Scientist.Gelagert')], zeilen: zeilen(4, (i) => [T(`${p}.proben.${i}.probe`, po[i]?.probe), T(`${p}.proben.${i}.herkunft`, po[i]?.herkunft), T(`${p}.proben.${i}.gelagert`, po[i]?.gelagert)]) } },
          { titel: L('Scientist.Frage'), klein: L('Scientist.FrageKlein'), text: T(`${p}.frage`, sig.frage) },
        ],
        kurz: [[L('Scientist.PrototypN', { n: 1 }), pr[0]?.name], [L('Scientist.Zweck'), pr[0]?.was], [L('Scientist.Reife'), String(pr[0]?.reife ?? '')], [L('Scientist.ProbenKurz'), Object.values(po).filter((x) => x?.probe).length || '']],
      };
    }
    case 'Investigator': {
      const ak = obj(sig.akten), be = obj(sig.beweise);
      return {
        links: [
          { titel: L('Investigator.Akten'), tabelle: { kopf: [L('Investigator.Frage'), L('Investigator.Eroeffnet'), L('Investigator.Faeden'), L('Investigator.Stand')], zeilen: zeilen(5, (i) => [T(`${p}.akten.${i}.frage`, ak[i]?.frage), T(`${p}.akten.${i}.eroeffnet`, ak[i]?.eroeffnet), K(`${p}.akten.${i}.faeden`, ak[i]?.faeden, 5), S(`${p}.akten.${i}.stand`, ak[i]?.stand ?? 'offen', auswahl(AKTEN_STAND, 'Investigator.Staende', false))]) },
            hinweis: L('Investigator.Hinweis') },
          { titel: L('Investigator.Beweise'), tabelle: { kopf: [L('Investigator.Beweisstueck'), L('Investigator.Fall'), L('Investigator.Wirkung')], zeilen: zeilen(4, (i) => [T(`${p}.beweise.${i}.name`, be[i]?.name), T(`${p}.beweise.${i}.fall`, be[i]?.fall), T(`${p}.beweise.${i}.wirkung`, be[i]?.wirkung)]) } },
          { titel: L('Investigator.NichtVergessen'), text: T(`${p}.nichtVergessen`, sig.nichtVergessen) },
        ],
        kurz: [[L('Investigator.AkteN', { n: 1 }), ak[0]?.frage], [L('Investigator.Faeden'), String(ak[0]?.faeden ?? '')], [L('Investigator.AkteN', { n: 2 }), ak[1]?.frage], [L('Investigator.Beweise'), Object.values(be).filter((x) => x?.name).map((x) => x.name).join(', ')]],
      };
    }
    default: return { links: [], kurz: [] };
  }
}
