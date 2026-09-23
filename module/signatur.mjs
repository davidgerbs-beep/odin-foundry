// Signatur der Klassen auf Blatt 3 (nach den Klassenbögen des Charaktergenerators)
import { DATEN } from './daten.mjs';

const RI = (r) => Math.max(0, DATEN.raenge.indexOf(r));
const T = (name, wert, extra = {}) => ({ typ: 'text', name, wert: wert ?? '', ...extra });
const C = (name, wert) => ({ typ: 'check', name, wert: !!wert });
const K = (pfad, wert, n = 5) => ({ typ: 'kaestchen', pfad, liste: Array.from({ length: n }, (_, i) => ({ n: i + 1, cls: i < (Number(wert) || 0) ? 'an' : '' })) });
const S = (name, wert, optionen) => ({ typ: 'select', name, wert: wert ?? '', optionen });
const F = (wert) => ({ typ: 'fest', wert });
const zeilen = (n, fn) => Array.from({ length: n }, (_, i) => ({ zellen: fn(i) }));
const obj = (o) => o ?? {};

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
          { titel: 'Der Helm', tabelle: { kopf: ['Modell', 'Seriennummer', 'Helmbindung', 'Aufzeichnung'], zeilen: [{ zellen: [T(`${p}.helm.modell`, h.modell ?? 'Mk. III'), T(`${p}.helm.nummer`, h.nummer), C(`${p}.helm.bindung`, h.bindung), T(`${p}.helm.aufzeichnung`, h.aufzeichnung ?? 'verschlüsselt')] }] } },
          { titel: 'Umbauten', text: T(`${p}.umbauten`, sig.umbauten) },
          { titel: 'Bruchstücke', klein: 'Erinnerungen, die nicht zum eigenen Leben passen', text: T(`${p}.bruchstuecke`, sig.bruchstuecke) },
        ],
        kurz: [['Helm', `${h.modell ?? 'Mk. III'}${h.nummer ? ', Nr. ' + h.nummer : ''}${h.bindung ? ' · Helmbindung' : ''}`], ['Umbauten', sig.umbauten], ['Bruchstücke', sig.bruchstuecke]],
      };
    }
    case 'Thaumaturg': {
      const k = obj(sig.kristall);
      const sorten = ['Kristallsplitter', 'Klarer Kristall', 'Resonanzkristall', 'Anatolischer Splitter', 'Andenkristall', 'Klosterstein', 'Nordlichtstein', 'Rissfund'];
      return {
        links: [
          { titel: 'Der Kristall', tabelle: { kopf: ['Nummer im Kristallbuch', 'Kristallmeister'], zeilen: [{ zellen: [T(`${p}.kristall.nummer`, k.nummer), T(`${p}.kristall.meister`, k.meister)] }] } },
          { felder: [
            ['Name des Kristalls', T(`${p}.kristall.name`, k.name)], ['Fundort', T(`${p}.kristall.fundort`, k.fundort)],
            ['Beschreibung', T(`${p}.kristall.art`, k.art)],
            ['Sorte', S(`${p}.kristall.sorte`, k.sorte, Object.fromEntries([['', '–'], ...sorten.map((x) => [x, x])]))],
            ['Zustand', S(`${p}.kristall.zustand`, k.zustand, { '': '–', klar: 'klar', trueb: 'trüb', erschoepft: 'erschöpft' })],
            ['Risse', K(`${p}.kristall.risse`, k.risse, 3)],
            ['Nexus- und Nordlichtsteine über Nacht', K(`${p}.steine`, sig.steine, 6)],
          ] },
        ],
        kurz: [['Kristall', [k.nummer, k.name].filter(Boolean).join(' · ')], ['Fundort', k.fundort], ['Beschreibung', k.art], ['Zustand', [k.zustand, k.risse ? `${k.risse} Risse` : ''].filter(Boolean).join(', ')]],
      };
    }
    case 'Soldier': {
      const pl = ['Messer', 'Armschiene', 'Brustplatte', 'Schulterstücke', 'Handschuh', 'Laufmantel', 'Beinschienen', 'Visier'];
      const si = obj(sig.silber);
      const grenze = [2, 3, 5, 7, 8][ri];
      const stuecke = pl.filter((_, i) => si[i]?.besitz).length;
      return {
        links: [
          { titel: 'Das Silber', klein: `${stuecke} von höchstens ${grenze} Stücken (${s.rang})`,
            tabelle: { kopf: ['', 'Platz', 'Variante', 'Nr.', 'Vorbesitzer', 'Verliehen für'], zeilen: zeilen(8, (i) => [C(`${p}.silber.${i}.besitz`, si[i]?.besitz), F(pl[i]), T(`${p}.silber.${i}.variante`, si[i]?.variante), T(`${p}.silber.${i}.nr`, si[i]?.nr), T(`${p}.silber.${i}.vorbesitzer`, si[i]?.vorbesitzer), T(`${p}.silber.${i}.fuer`, si[i]?.fuer)]) },
            hinweis: 'Obergrenze: Kadett 2 · Agent 3 · Senior-Agent 5 · Veteran 7 · Schattenoffizier 8. Ein Stück pro Rang, eins pro Mission für eine Tat, nie für Abschüsse. Schwellen: 3 erkennbar für Wesen · 5 immun gegen Grauen bis Verstörend, Nachhall beginnt · 8 Vollharnisch.' },
          { titel: 'Die Gefallenen, die ich kannte', text: T(`${p}.gefallene`, sig.gefallene) },
        ],
        kurz: [['Messer', si[0]?.nr ? `Nr. ${si[0].nr}` : ''], ['Vorbesitzer', si[0]?.vorbesitzer], ['Verliehen für', si[0]?.fuer], ['Stücke', `${stuecke} / ${grenze}`]],
      };
    }
    case 'Agent': {
      const le = obj(sig.legenden);
      const grenze = ri + 1, tiefe = [2, 3, 4, 5, 5][ri];
      return {
        links: [
          { titel: 'Die Legenden', klein: `höchstens ${grenze} Legenden, Tiefe bis ${tiefe}`,
            tabelle: { kopf: ['Name, Beruf und Ort', 'Tiefe', 'Kontakt', 'Stand'], zeilen: zeilen(6, (i) => [T(`${p}.legenden.${i}.name`, le[i]?.name), K(`${p}.legenden.${i}.tiefe`, le[i]?.tiefe, 5), T(`${p}.legenden.${i}.kontakt`, le[i]?.kontakt), S(`${p}.legenden.${i}.stand`, le[i]?.stand ?? 'aktiv', { aktiv: 'aktiv', verbrannt: 'verbrannt' })]) },
            hinweis: 'Höchstzahl: Kadett 1 · Agent 2 · Senior-Agent 3 · Veteran 4 · Schattenoffizier 5. Tiefe höchstens: Kadett 2 · Agent 3 · Senior-Agent 4 · ab Veteran 5. Tiefe 2: +1 Würfel Täuschung und Verkleidung · 3: ein Kontakt · 4: +2 Würfel, Hintergrundprüfungen bestanden · 5: ein Gefallen pro Mission.' },
          { titel: 'Der eigene Name', klein: 'für den Fall, dass er vergessen wird', text: T(`${p}.eigenerName`, sig.eigenerName ?? s.klarname) },
          { titel: 'Toter Briefkasten', text: T(`${p}.briefkasten`, sig.briefkasten) },
        ],
        kurz: [['Legende 1', le[0]?.name], ['Tiefe', String(le[0]?.tiefe ?? '')], ['Legende 2', le[1]?.name], ['Klarname', sig.eigenerName ?? s.klarname]],
      };
    }
    case 'Scientist': {
      const pr = obj(sig.prototypen), po = obj(sig.proben);
      return {
        links: [
          { titel: 'Die Prototypen', klein: `höchstens ${ri + 1}, Reife bis ${[2, 3, 4, 5, 5][ri]}`,
            tabelle: { kopf: ['Nr. und Art', 'Was er tut', 'Reife', 'Probe'], zeilen: zeilen(5, (i) => [T(`${p}.prototypen.${i}.name`, pr[i]?.name), T(`${p}.prototypen.${i}.was`, pr[i]?.was), K(`${p}.prototypen.${i}.reife`, pr[i]?.reife, 5), T(`${p}.prototypen.${i}.probe`, pr[i]?.probe)]) },
            hinweis: 'Höchstzahl nach Rang 1 bis 5. Reife 3: +1 Würfel, +1 Schaden oder +1 Rüstung · 4: +2 Würfel · 5: besondere Eigenschaft. Für Reife 4 und 5 je ein übernatürliches Material aus einem Einsatz.' },
          { titel: 'Fehlfunktion (W6)', tabelle: { kopf: ['1', '2', '3', '4', '5', '6'], zeilen: [{ zellen: ['umgekehrt', 'laut, hell, verrät', 'fällt für die Szene aus', 'fällt für die Mission aus', '2 Schaden am Scientist', 'tut etwas anderes'].map(F) }] } },
          { titel: 'Proben im Besitz', tabelle: { kopf: ['Probe', 'Herkunft', 'Gelagert'], zeilen: zeilen(4, (i) => [T(`${p}.proben.${i}.probe`, po[i]?.probe), T(`${p}.proben.${i}.herkunft`, po[i]?.herkunft), T(`${p}.proben.${i}.gelagert`, po[i]?.gelagert)]) } },
          { titel: 'Deine Frage', klein: 'warum du forschst', text: T(`${p}.frage`, sig.frage) },
        ],
        kurz: [['Prototyp 1', pr[0]?.name], ['Zweck', pr[0]?.was], ['Reife', String(pr[0]?.reife ?? '')], ['Proben', Object.values(po).filter((x) => x?.probe).length || '']],
      };
    }
    case 'Investigator': {
      const ak = obj(sig.akten), be = obj(sig.beweise);
      return {
        links: [
          { titel: 'Die offenen Akten', tabelle: { kopf: ['Frage', 'eröffnet', 'Fäden', 'Stand'], zeilen: zeilen(5, (i) => [T(`${p}.akten.${i}.frage`, ak[i]?.frage), T(`${p}.akten.${i}.eroeffnet`, ak[i]?.eroeffnet), K(`${p}.akten.${i}.faeden`, ak[i]?.faeden, 5), S(`${p}.akten.${i}.stand`, ak[i]?.stand ?? 'offen', { offen: 'offen', geschlossen: 'geschlossen' })]) },
            hinweis: 'Faden ziehen, einmal pro Szene: Spur, ein Erfolg mehr · Druck, eine wahre Antwort · Vorsprung, die Zelle handelt zuerst · Querverbindung, Faden in eine andere Akte. Den Fall schließen mit fünf Fäden in einer Konfrontation: +2 Würfel für die Zelle, Täuschung durchschaut, eine Gewissheit, danach ein Beweisstück und Verdacht −1.' },
          { titel: 'Beweisstücke', tabelle: { kopf: ['Beweisstück', 'Aus dem Fall', 'Wirkung'], zeilen: zeilen(4, (i) => [T(`${p}.beweise.${i}.name`, be[i]?.name), T(`${p}.beweise.${i}.fall`, be[i]?.fall), T(`${p}.beweise.${i}.wirkung`, be[i]?.wirkung)]) } },
          { titel: 'Was ich nicht vergessen kann', text: T(`${p}.nichtVergessen`, sig.nichtVergessen) },
        ],
        kurz: [['Offene Akte 1', ak[0]?.frage], ['Fäden', String(ak[0]?.faeden ?? '')], ['Offene Akte 2', ak[1]?.frage], ['Beweisstücke', Object.values(be).filter((x) => x?.name).map((x) => x.name).join(', ')]],
      };
    }
    default: return { links: [], kurz: [] };
  }
}
