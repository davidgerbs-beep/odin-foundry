// Legt die drei Leute aus Band 24 „Fremdkörper“ mit eigenen Werten als Gegner in odin-gegner und odin-gegner-en an:
// Callum Ferris, Dana Whitlock und Maurits van der Hoeven (Anhang „Gegner“ des Bandes, Werte und Texte wörtlich, DE und EN).
// Ordner „Fremdkörper“ bzw. „Foreign Bodies“ auf oberster Ebene, wie die Ordner der anderen Kampagnen.
// Stufe wie bei den Vorbildern: Ferris und Whitlock „Elite“ (Werte wie Sam Ferris und der Elite-Söldner), van der Hoeven
// „Anführer“ (der Band: „Werte nach dem Sammler aus dem Bedrohungsatlas“). Bilder: assets/gegner/npc-fk-*.webp und
// assets/token/npc-fk-*.webp (werkzeuge/leute-bild.mjs). ids fest aus dem Namen, ein zweiter Lauf ändert nichts.
// Braucht classic-level (npm install --no-save classic-level). Foundry vorher beenden.
// Aufruf: node werkzeuge/fremdkoerper-gegner.mjs
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from './leveldb.mjs';
import { schreibePack } from './packschreiber.mjs';

const WURZEL = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const id = (s) => { const h = createHash('sha256').update(s).digest(); const z = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; return [...h.subarray(0, 16)].map((b) => z[b % z.length]).join(''); };
const STATS = { coreVersion: '14.368', systemId: 'odin-rpg', systemVersion: '0.10.6', createdTime: 1791500000000, modifiedTime: 1791500000000, lastModifiedBy: null };
const pool = (name, weiss, bunt, schaden = 0, notiz = '') => ({ name, weiss, bunt, schaden, durchschlag: 0, notiz });
const absatz = (zeilen) => zeilen.map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join('');

const LEUTE = [
  {
    datei: 'npc-fk-ferris', stufe: 'Elite', ini: 4, vert: 3, rue: 3, lp: 12,
    de: {
      name: 'Callum Ferris', unter: 'Einsatzleiter von Grey Meridian · Menschen',
      text: 'Mitte vierzig, ehemaliger Fallschirmjäger, graue Schläfen, eine Lederjacke, die ihm zu groß geworden ist. Er spricht leise und meint, was er sagt. Er arbeitet für jeden, der zahlt, und er hat angefangen, das unanständig zu finden. Er ist der Gegner, mit dem man reden kann.',
      pools: [pool('Karabiner', 4, 4, 4, 'Präzise'), pool('Pistole', 4, 3, 3), pool('Taktik', 4, 3), pool('Verhandeln', 3, 3), pool('Menschenkenntnis', 3, 3)],
      zeilen: [['Angriff', 'Karabiner 4 + 4, Schaden 4, Präzise, oder Pistole 4 + 3, Schaden 3'], ['Verteidigung / Rüstung / LP', '3 / 3 (Kampfanzug) / 12'],
        ['Fertigkeiten', 'Taktik 4 + 3, Verhandeln 3 + 3, Menschenkenntnis 3 + 3'],
        ['Besonderheit', 'Solange er steht, ziehen sich seine Söldner nicht zurück. Hat die Zelle einen seiner Leute gerettet, schießt er nicht als Erster'],
        ['Verhalten', 'Erfüllt den Auftrag, ohne mehr zu töten als nötig. Wechselt die Seite nur, wenn er weiß, was in der Kiste ist']],
    },
    en: {
      name: 'Callum Ferris', unter: 'Team leader, Grey Meridian · Humans',
      text: 'Mid-forties, former paratrooper, grey temples, a leather jacket that has become too big for him. He speaks quietly and means what he says. He works for anyone who pays, and he has begun to find that indecent. He is the opponent one can talk to.',
      pools: [pool('Carbine', 4, 4, 4, 'Precise'), pool('Pistol', 4, 3, 3), pool('Tactics', 4, 3), pool('Negotiation', 3, 3), pool('Insight', 3, 3)],
      zeilen: [['Attack', 'Carbine 4 + 4, damage 4, Precise, or pistol 4 + 3, damage 3'], ['Defence / Armour / HP', '3 / 3 (combat suit) / 12'],
        ['Skills', 'Tactics 4 + 3, Negotiation 3 + 3, Insight 3 + 3'],
        ['Special', 'As long as he stands, his mercenaries do not retreat. If the cell has saved one of his people, he does not shoot first'],
        ['Behaviour', 'Fulfils the contract without killing more than necessary. Changes sides only when he knows what is in the crate']],
    },
  },
  {
    datei: 'npc-fk-whitlock', stufe: 'Elite', ini: 4, vert: 3, rue: 2, lp: 11,
    de: {
      name: 'Dana Whitlock', unter: 'Special Agent, STILLWATER · Menschen',
      text: 'Anfang vierzig, kurzes Haar, Laufschuhe zum Hosenanzug, Deutsch mit Akzent. Sie kommt aus der Außenstelle in Boston und berichtet an Raymond Cole. Sie ist schnell, höflich und hart, und sie glaubt, dass Amerika ein Recht auf das hat, was vom Himmel fällt. Schlüsselkopf des Plans „Das Wrack“.',
      pools: [pool('Pistole', 4, 3, 3), pool('Verhandeln', 4, 3), pool('Täuschung', 3, 3), pool('Heimlichkeit', 3, 2)],
      zeilen: [['Angriff', 'Pistole 4 + 3, Schaden 3'], ['Verteidigung / Rüstung / LP', '3 / 2 (Schutzweste) / 11'],
        ['Fertigkeiten', 'Verhandeln 4 + 3, Täuschung 3 + 3, Heimlichkeit 3 + 2'],
        ['Besonderheit', 'Hat Zugriff auf Satellitenbilder der US-Regierung: Einmal pro Mission weiß sie, wo die Zelle in der letzten Nacht war'],
        ['Schwäche', 'Neugier. Sie will wissen, was der Pilot ist, mehr als sie es haben will'],
        ['Verhalten', 'Verhandelt zuerst, droht dann, schießt zuletzt. Hält Abmachungen, solange die andere Seite sie hält']],
    },
    en: {
      name: 'Dana Whitlock', unter: 'Special Agent, STILLWATER · Humans',
      text: 'Early forties, short hair, running shoes with a trouser suit, German with an accent. She comes from the field office in Boston and reports to Raymond Cole. She is quick, polite and tough, and she believes that America has a right to what falls from the sky. Key figure of the plan “The Wreck”.',
      pools: [pool('Pistol', 4, 3, 3), pool('Negotiation', 4, 3), pool('Deception', 3, 3), pool('Stealth', 3, 2)],
      zeilen: [['Attack', 'Pistol 4 + 3, damage 3'], ['Defence / Armour / HP', '3 / 2 (protective vest) / 11'],
        ['Skills', 'Negotiation 4 + 3, Deception 3 + 3, Stealth 3 + 2'],
        ['Special', 'Has access to satellite images of the US government: Once per mission she knows where the cell was last night'],
        ['Weakness', 'Curiosity. She wants to know what the Pilot is, more than she wants to have it'],
        ['Behaviour', 'Negotiates first, threatens then, shoots last. Keeps agreements as long as the other side keeps them']],
    },
  },
  {
    datei: 'npc-fk-hoeven', stufe: 'Anführer', ini: 3, vert: 2, rue: 1, lp: 10,
    de: {
      name: 'Maurits van der Hoeven', unter: 'Der Sammler · Menschen',
      text: '66 Jahre alt, Erbe eines Wasserbauunternehmens, groß, hager, Leinenanzug, Lesebrille an einer Kette. Er sammelt seit 1984 Meteoriten, „alles, was vom Himmel fällt“. Er lebt im Huis te Velde, einem Wasserschloss bei Winterswijk. Er ist höflich, gebildet, kunstsinnig und ohne jede Grenze, und er weiß genau, wer die Zelle ist. Schlüsselkopf des Plans „Die Sammlung“. Werte nach dem Sammler aus dem Bedrohungsatlas.',
      pools: [pool('Pistole', 3, 3, 3), pool('Überzeugen, Täuschung', 5, 4)],
      zeilen: [['Angriff', 'Der Splitter der Tunguska-Scherbe (siehe unten), sonst Pistole 3 + 3, Schaden 3'], ['Verteidigung / Rüstung / LP', '2 / 1 / 10'],
        ['Überzeugen, Täuschung', '5 + 4'],
        ['Besonderheit', 'Hat immer 2W6 Söldner, 1 Elite-Söldner und Wachsysteme. Bietet jedem Agenten ein Angebot aus der Tabelle „Die Köder der anderen“ (Spielleiterbuch)'],
        ['Schwäche', 'Seine Sammlung. Wer ein Stück zerstört, das er liebt, bringt ihn aus der Fassung: −2 Würfel für eine Szene'],
        ['Verhalten', 'Besitzt, sammelt, verteidigt. Kämpft nicht selbst. Wird er in die Enge getrieben, benutzt er ein Stück aus seiner Sammlung, ohne zu wissen, was es tut']],
      nachsatz: '<p><strong>Der Splitter.</strong> Ein Stück der Tunguska-Scherbe aus dem Kapitel „Artefakte“ des Spielleiterbuchs, so groß wie ein Daumen, gekauft von Abteilung 13. Es gelten die Werte der Scherbe: Sie betreibt jedes elektrische Gerät, an das sie angeschlossen wird, ohne Grenze, und erwärmt sich bei jeder Nutzung. Nach dem dritten Einsatz in einer Mission verursacht sie 2 Schaden bei ihrem Träger, Rüstung zählt nicht. Gefahr ☠☠☠○○. Abteilung 13 will ihre Stücke zurück.</p>',
    },
    en: {
      name: 'Maurits van der Hoeven', unter: 'The Collector · Humans',
      text: '66 years old, heir to a hydraulic engineering company, tall, gaunt, linen suit, reading glasses on a chain. He has collected meteorites since 1984, “everything that falls from the sky”. He lives in Huis te Velde, a moated castle near Winterswijk. He is polite, educated, art-loving and without any limits, and he knows exactly who the cell is. Key figure of the plan “The Collection”. Stats according to the Collector from the Threat Atlas.',
      pools: [pool('Pistol', 3, 3, 3), pool('Persuasion, Deception', 5, 4)],
      zeilen: [['Attack', 'The splinter of the Tunguska Shard (see below), otherwise pistol 3 + 3, damage 3'], ['Defence / Armour / HP', '2 / 1 / 10'],
        ['Persuasion, Deception', '5 + 4'],
        ['Special', 'Always has 2D6 mercenaries, 1 Elite Mercenary and security systems. Offers each agent an offer from the table “Lures of the Others” (Game Master’s Book)'],
        ['Weakness', 'His collection. Whoever destroys a piece he loves unsettles him: −2 dice for one scene'],
        ['Behaviour', 'Possesses, collects, defends. Does not fight himself. If cornered, he uses a piece from his collection without knowing what it does']],
      nachsatz: '<p><strong>The Splinter.</strong> A piece of the Tunguska Shard from the chapter “Artefacts” of the Game Master’s Book, the size of a thumb, bought from Department 13. The stats of the shard apply: It operates any electrical device it is connected to without limit, and heats up with each use. After the third use in a mission it causes 2 damage to its bearer, armour does not count. Danger ☠☠☠○○. Department 13 wants its pieces back.</p>',
    },
  },
];

for (const [pack, spr, ordnerName] of [['odin-gegner', 'de', 'Fremdkörper'], ['odin-gegner-en', 'en', 'Foreign Bodies']]) {
  const ordner = path.join(WURZEL, 'packs', pack);
  const daten = lesePack(ordner);
  const fid = id(`ordner|${pack}|fremdkoerper`);
  const sort = Math.max(...[...daten.entries()].filter(([k]) => k.startsWith('!folders!')).map(([, v]) => v.sort)) + 1;
  if (!daten.has(`!folders!${fid}`)) daten.set(`!folders!${fid}`, { _id: fid, name: ordnerName, type: 'Actor', sorting: 'a', sort, color: null, folder: null, flags: {}, _stats: STATS, description: '' });
  LEUTE.forEach((l, i) => {
    const t = l[spr], aid = id(`actor|${pack}|${l.datei}`);
    daten.set(`!actors!${aid}`, {
      _id: aid, name: t.name, type: 'gegner', img: `systems/odin-rpg/assets/gegner/${l.datei}.webp`,
      system: { stufe: l.stufe, ursprung: 'Die Menschen', grauen: 0, aktionen: 1, initiative: l.ini, verteidigung: l.vert, ruestung: l.rue, lp: { value: l.lp, max: l.lp },
        pools: t.pools, beschreibung: `<p><i>${t.unter}</i></p><p>${t.text}</p>`, besonderheit: absatz(t.zeilen) + (t.nachsatz || '') },
      items: [], effects: [], folder: fid, sort: i,
      prototypeToken: { name: t.name, actorLink: false, disposition: -1, displayName: 20, displayBars: 20, bar1: { attribute: 'lp' }, bar2: { attribute: null },
        texture: { src: `systems/odin-rpg/assets/token/${l.datei}.webp` }, ring: { enabled: false, colors: { ring: '#8a1c1c', background: '#1b1814' }, effects: 1, subject: { scale: 1, texture: null } } },
      flags: {}, ownership: { default: 0 }, _stats: STATS,
    });
  });
  await schreibePack(ordner, daten);
  console.log(`${pack}: Ordner ${ordnerName}, ${LEUTE.map((l) => l[spr].name).join(', ')}`);
}
