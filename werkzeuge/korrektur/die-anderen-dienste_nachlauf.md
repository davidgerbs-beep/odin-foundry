# Korrekturvorschläge: Die anderen Dienste (Nachlauf)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege die-anderen-dienste --nachlauf` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `die-anderen-dienste.md` mit ihren Entscheidungen bleibt, wie sie ist; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden die-anderen-dienste` nimmt beide Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden die-anderen-dienste --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_15_Die_anderen_Dienste (Seiten 97, Prüfsumme 2c667a85c963).

Journalseiten 144, Sätze 3422, davon gleich 3414, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: Nachbartext 2.
Gegner 37 mit 238 Zeilen, gleich 238; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

## Englisch

Bände: ODIN_EN_15_The_Other_Services (Seiten 91, Prüfsumme f5a4b291045b).

Journalseiten 144, Sätze 3316, davon gleich 3016, im Band nicht gefunden 249 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 0). Als Fehltreffer aussortiert: Spaltenumbruch 34, Nachbartext 20, Schreibweise 8, Rand 1.
Gegner 37 mit 219 Zeilen, gleich 194; Vorschläge 0.
Hinweise ohne Vorschlag: 28.

### Journalsätze

#### AD-en-6b7844 · „04 Small Cults“ › „The Community of the Dreamer“ · Band S. 25 · prüfen
Freigabe: nein
Hinweis (Coder): Der Vorschlag griff über einen Seitenumbruch im Band („the White File: A …“). „neu“ ist deshalb gleich „alt“; Vorschlag: nein.

- alt: The group believes the Dreamer is a prophet who shows them the way to a better world.
- neu: The group believes the Dreamer is a prophet who shows them the way to a better world.
- Änderung: (keine)
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Community of the Dreamer"]]} -->

#### AD-en-48f764 · „05 STILLWATER“ › „Bases and Means“ · Band S. 34 · prüfen
Freigabe: nein

- alt: They house the Psionics Department of STILLWATER: a laboratory, a room with copper wire cages in which Psions without helmets are examined, and an archive with drawings by the Remote Viewer.
- neu: It houses the Psionics Department of STILLWATER: a laboratory, a room with copper wire cages in which Psions without helmets are examined, and an archive with drawings by the Remote Viewer.
- Änderung: «They house» → «It houses»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Bases and Means"]]} -->

#### AD-en-211005 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · prüfen
Freigabe: ja
Hinweis (Coder): Tabellenzelle; der Vorschlag schnitt den Anfang ab. „neu“ nach dem Band (S. 40): „A lure appears:“.

- alt: 3 to 4 A piece of bait turns up: a dead drop with a message allegedly from a defector from the Department.
- neu: 3 to 4 A lure appears: a dead drop with a message allegedly from a defector from the Department.
- Änderung: «piece of bait turns up:» → «lure appears:»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]]} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- „16 Grey Meridian“ › „Grey Meridian in the Plans of Others“, Band S. 83: Liste mit Werten weicht ab („If a team works for an organisation whose plan is currently running, then in the…“), bitte mit der Tabelle im Band vergleichen.
- Gegner „Kantor“, Zeile „Behaviour“: „Talks, explains, waits. Uses his powers only when he has no choice, and then with full force. Does not flee; the Open Ones carry him“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Elaine Mercer“, Zeile „Behaviour“: „Negotiates, threatens, withdraws when the price gets too high. She does not fight herself, except when Caleb is in danger“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Sam Ferris“, Zeile „Behaviour“: „Cautious, watchful. Does not shoot at people who have done nothing to him“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Returner“: Name im Band nicht gefunden, Werte nicht geprüft.
- Gegner „The Member Who Knows the Ways“: Name im Band nicht gefunden, Werte nicht geprüft.
- Gegner „Dr. Camille Favre“, Zeile „Behaviour“: „Defends the laboratory, does not negotiate, calls security and hybrid dogs“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Milan Dvořák“, Zeile „Behaviour“: „Excited and convinced. He holds the group together because he is the only one who understands the answers“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Luca“, Zeile „Behaviour“: „Reserved and fearful. He follows Sister Elena because she is the only one who tells him he is not mad“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Antiquarian“, Zeile „Behaviour“: „Seems nervous, leafs through books, talks about old stones and circles. He sings the song secretly when he is alone.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Relative“, Zeile „Behaviour“: „She follows every trail that leads to a staircase, and she is prepared to lie, steal and put herself in danger for it.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Hieronymus Falkenrath“, Zeile „Behaviour“: „Holds audiences, confers initiations, sends followers to Brussels. Fights only when he feels safe.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Archivist“, Zeile „Behaviour“: „Observes, takes notes, stays silent. She speaks only when the Master allows it.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dr. Larissa Orlowa“, Zeile „Behaviour“: „She does not negotiate, she sets conditions. She withdraws when the plan is endangered, and for that she sacrifices even her own people.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Singer with a Name“, Zeile „Behaviour“: „He watches, waits, accompanies. He does not fight. If he is cornered, he sings, and whoever listens understands why he goes.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Josef Hartl“, Zeile „Behaviour“: „Calm and firm. He holds the group together because no one else “understands” the crystal“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Brother Ludovico“, Zeile „Behaviour“: „Watches, keeps silent, acts only when the archive is threatened“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Hugo Marchetti, codename “Notar”“, Zeile „Behaviour“: „Observes, negotiates, withdraws. Only fights when there is no other way“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dr. Arne Holm“, Zeile „Behaviour“: „Observes, keeps silent, helps only when he is sure it is against the Voice“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Raymond Cole“, Zeile „Behaviour“: „Observes, reports, waits. He only attacks if the cell gets too close to Caleb Mercer“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Don Matteo Riva“, Zeile „Behaviour“: „Pushes, talks, looks for allies. Flees when he believes that O.D.I.N. is coming for him“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Georg Wendlinger“, Zeile „Behaviour“: „Watches, makes phone calls, deletes. Withdraws as soon as he suspects O.D.I.N. is nearby.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Renate Albers, called Elster“, Zeile „Behaviour“: „Does not flee and does not fight. Waits, observes, asks questions and offers to go into the Nursery with the cell“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Stahl (Grzegorz Wolski, Number Twelve)“, Zeile „Special Ability“: „Adaptive Armour, Berserker Protocol, Last Cell (see class book Soldier). Senses other nanites within 20 m.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Stahl (Grzegorz Wolski, Number Twelve)“, Zeile „Behaviour“: „Goes into danger first, does not negotiate, protects. If the cell protects Ania, he is an ally. If not, an adversary.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dr. Cornelius Weber“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Special, Weakness.
- Gegner „Mr Leuenberger“, Zeile „Behaviour“: „Negotiates, delays, makes offers. If the cell forces its way into the Foundation, he stands in its way, politely and without fear“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Monsignore Emilio Vasari“: Name im Band nicht gefunden, Werte nicht geprüft.
