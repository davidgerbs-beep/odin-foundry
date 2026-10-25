# Korrekturvorschläge: Die anderen Dienste (Nachlauf 2510)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege die-anderen-dienste --nachlauf=2510` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `die-anderen-dienste.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden die-anderen-dienste` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden die-anderen-dienste --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_15_Die_anderen_Dienste (Seiten 97, Prüfsumme 6d8f3b9dfe7c).

Journalseiten 144, Sätze 3422, davon gleich 3413, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 1 (sicher 1). Als Fehltreffer aussortiert: Nachbartext 2.
Gegner 37 mit 238 Zeilen, gleich 238; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### AD-de-376546 · „14 Die Stiftung in Basel“ › „Der Plan: „Keine Nexus-Kristalle mehr““ · Band S. 80 · sicher
Freigabe: ja

- alt: Der Seeker meldet, dass sie mehr Kinder hört, die niemand holt.
- neu: Der Seeker meldet, dass er mehr Kinder hört, die niemand holt.
- Änderung: «sie» → «er»
<!-- daten: {"art":"satz","fundstellen":[["14 Die Stiftung in Basel","Der Plan: „Keine Nexus-Kristalle mehr“"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### AD-de-w01 · „04 Kleine Kulte“ › „Die Erwartenden von Pilsen“ · Band S. 29 · Writer (l), prüfen
Freigabe: ja

- alt: Ein Anwohner hat Blut auf den Gleisen gefunden.
- neu: Ein Anwohner hat zwischen den Waggons einen großen, grauen Mann gesehen, der nicht blinzelte.
- Änderung: «Blut auf» → «zwischen»; «Gleisen gefunden.» → «Waggons einen großen, grauen Mann gesehen, der nicht blinzelte.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kleine Kulte","Die Erwartenden von Pilsen"]],"hand":true} -->

## Englisch

Bände: ODIN_EN_15_The_Other_Services (Seiten 91, Prüfsumme 35bd05bc1960).

Journalseiten 144, Sätze 3317, davon gleich 3034, im Band nicht gefunden 228 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 12 (sicher 2). Als Fehltreffer aussortiert: Spaltenumbruch 29, Nachbartext 18, Rand 1, Schreibweise 3.
Gegner 37 mit 219 Zeilen, gleich 194; Vorschläge 0.
Hinweise ohne Vorschlag: 28.

### Journalsätze

#### AD-en-798a18 · „03 The Singers“ › „Key Figures“ · Band S. 21 · sicher
Freigabe: ja

- alt: Weakness He is neither a fighter nor a believer.
- neu: Weakness He is not a fighter and not a believer.
- Änderung: «neither» → «not»; «nor» → «and not»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]]} -->

#### AD-en-f8997a · „05 STILLWATER“ › „Hooks and Outlook“ · Band S. 32 · prüfen, umformuliert
Freigabe: nein

- alt: STILLWATER uses its own Seeker to search for children in North America.
- neu: STILLWATER uses it to put pressure on O.D.I.N. in North America.
- Änderung: «its own Seeker» → «it»; «search for children» → «put pressure on O.D.I.N.»
- Hinweis: Fehltreffer: Der Satz des Bandes gehört zu 1989 („uses it to put pressure …“), nicht zum nächsten Plan. Empfehlung: nein.
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Hooks and Outlook"]]} -->

#### AD-en-a5c3ed · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“; „05 STILLWATER“ › „Hooks and Outlook“ · Band S. 35 · prüfen
Freigabe: nein

- alt: In O.D.I.N.’s canteen the rumour goes round that STILLWATER is active in Alaska.
- neu: canteen, the rumour spreads that STILLWATER is active in Alaska.
- Änderung: «In O.D.I.N.’s canteen» → «canteen,»; «goes round» → «spreads»
- Hinweis: Fehltreffer, Satzanfang fehlt; der Absatzabgleich hat die Stelle schon richtig (Eintrag in die-anderen-dienste_absaetze_en_2510.md). Empfehlung: nein.
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"],["05 STILLWATER","Hooks and Outlook"]]} -->

#### AD-en-dbf01b · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · sicher
Freigabe: nein

- alt: ☠☠☠☠☠ Department 13 has alloy ore of its own in sufficient quantity.
- neu: ☠☠☠☠☠ Department 13 has its own alloy ore in sufficient quantity.
- Änderung: «(nichts)» → «its own»; «of its own» → «(gestrichen)»
- Hinweis: Deckt sich mit dem Absatzabgleich (die-anderen-dienste_absaetze_en_2510.md); einer von beiden genügt.
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]]} -->

#### AD-en-d0089e · „02 Morrow Biologics“ › „Bases and Means“ · Band S. 43 · prüfen
Freigabe: nein

- alt: The board, the administration and Dr.
- neu: Its head is the Administrator, an old man without a name in the house without a number, who walks barefoot because he wants to feel the earth.
- Änderung: «The board,» → «Its head is»; «administration and Dr.» → «Administrator, an old man without a name in the house without a number, who walks barefoot because he wants to feel the earth.»
- Hinweis: Fehltreffer (Text einer anderen Spalte). Empfehlung: nein.
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Bases and Means"]]} -->

#### AD-en-df9bcd · „07 The Seventh Bureau“ › „In Play“ · Band S. 44 · prüfen
Freigabe: nein

- alt: There is a house without a number in Stockholm too.
- neu: There is also a house without a number in Stockholm too.
- Änderung: «(nichts)» → «also»
- Hinweis: Fehltreffer („also … too“). Empfehlung: nein.
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","In Play"]]} -->

#### AD-en-7bf4d9 · „08 The Partners“ › „How the Protocol Works“ · Band S. 45 · prüfen
Freigabe: nein

- alt: Because every favour has a price.
- neu: For every favour has a price.
- Änderung: «Because» → «For»
- Hinweis: Deckt sich mit dem Absatzabgleich (die-anderen-dienste_absaetze_en_2510.md); einer von beiden genügt.
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","How the Protocol Works"]]} -->

#### AD-en-b67120 · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · prüfen
Freigabe: nein

- alt: He speaks in clipped phrases, suspiciously, and repeats himself.
- neu: He speaks haltingly, suspiciously, repeats himself.
- Änderung: «in clipped phrases,» → «haltingly,»; «and» → «(gestrichen)»
- Hinweis: Deckt sich mit dem Absatzabgleich (die-anderen-dienste_absaetze_en_2510.md); einer von beiden genügt.
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]]} -->

#### AD-en-fb3e27 · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · prüfen
Freigabe: nein

- alt: He was Ilse Marek’s successor and the man who caused the Cascade.
- neu: He was the successor of Ilse Marek and the man who caused the Cascade.
- Änderung: «(nichts)» → «the successor of»; «Marek’s successor» → «Marek»
- Hinweis: Deckt sich mit dem Absatzabgleich (die-anderen-dienste_absaetze_en_2510.md); einer von beiden genügt.
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]]} -->

#### AD-en-7568b8 · „13 The Open Ones“ › „History and Goals“ · Band S. 70 · prüfen
Freigabe: nein

- alt: Who really stood behind the numbers, he does not know.
- neu: Who really stood behind the numbers that showed Kantor the hall in 1971.
- Änderung: «numbers, he does not know.» → «numbers that showed Kantor the hall in 1971.»
- Hinweis: Fehltreffer: „neu“ ist ein Satzrest; im Band steht die Stelle anders („What they do not know: … who really stood behind the numbers that showed Kantor the hall in 1971.“). Empfehlung: nein; steht bei den Hinweisen des Absatzabgleichs.
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","History and Goals"]]} -->

#### AD-en-2a616f · „13 The Open Ones“ › „Relationship to O.D.I.N.“ · Band S. 70 · prüfen
Freigabe: ja

- alt: He only learns why on that night.
- neu: The Psion learns why only on that night.
- Änderung: «He only» → «The Psion»; «(nichts)» → «only»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Relationship to O.D.I.N."]]} -->

#### AD-en-d2bf93 · „14 The Foundation in Basel“ › „Key Figures“ · Band S. 74 · prüfen
Freigabe: nein

- alt: He wears the legend Martin Kessler and the tie with reindeer, because it is part of it.
- neu: He carries the legend Martin Kessler and the reindeer tie because it is part of it.
- Änderung: «wears» → «carries»; «(nichts)» → «reindeer»; «with reindeer,» → «(gestrichen)»
- Hinweis: Deckt sich mit dem Absatzabgleich (die-anderen-dienste_absaetze_en_2510.md); einer von beiden genügt.
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Key Figures"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### AD-en-w01 · „03 The Singers“ › „Hooks and Outlook“ · Band S. 24 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: Black File “All the Staircases”. During the night the Seeker heard the song, in four places at once, and a fifth spot that is still silent.
- neu: Black File “All Stairs”. The Seeker heard the song during the night, in four places at once, and a fifth place that is still silent.
- Änderung: «the Staircases”. During the night the» → «Stairs”. The»; «song,» → «song during the night,»; «spot» → «place»
- Hinweis: Plannamen und Stairs statt Staircase (Schritt 3); der Absatzabgleich lässt diesen Satz stehen, weil der Band ihn umgestellt hat.
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Hooks and Outlook"]],"hand":true} -->

#### AD-en-w02 · „03 The Singers“ › „Hooks and Outlook“ · Band S. 24 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: The next plan: “The Sixth Staircase”
- neu: The next plan: “The sixth staircase”
- Änderung: «Sixth Staircase”» → «sixth staircase”»
- Hinweis: Planname wie im Band, im Fließtext klein (wie die übrigen Pläne seit den Begriffen vom 12.10.).
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Hooks and Outlook"]],"hand":true} -->

#### AD-en-w03 · odin-abenteuer-en › „The Plan: “The New Host”“ (3 Stellen) · Band S. 11 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: Krakow
- neu: Kraków
- Änderung: «Krakow» → «Kraków»
- Hinweis: Rest nach dem Absatzabgleich (Satz dort umgestellt); ersetzt jede Stelle auf der Seite.
<!-- daten: {"art":"begriff","pack":"odin-abenteuer-en","key":"!journal.pages!SmlEcAatwXceVUI0.HqajHtfXaaM04AUd","hand":true} -->

#### AD-en-w04 · odin-abenteuer-en › „Hooks and Outlook“ (3 Stellen) · Band S. 12 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: Krakow
- neu: Kraków
- Änderung: «Krakow» → «Kraków»
- Hinweis: Rest nach dem Absatzabgleich (Satz dort umgestellt); ersetzt jede Stelle auf der Seite.
<!-- daten: {"art":"begriff","pack":"odin-abenteuer-en","key":"!journal.pages!SmlEcAatwXceVUI0.UGTBrsPezqMSrRRb","hand":true} -->

#### AD-en-w05 · odin-abenteuerpakete-en › „The Other Services“ (7 Stellen) · Band S. 10 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: Krakow
- neu: Kraków
- Änderung: «Krakow» → «Kraków»
- Hinweis: Abenteuerpaket The Other Services: ersetzt jede verbliebene Stelle im Paket (Journale, Szenen- und Notiznamen). Der Band schreibt durchgehend Kraków.
<!-- daten: {"art":"begriff","pack":"odin-abenteuerpakete-en","key":"!adventures!58kgeC6QBlfCBf1H","hand":true} -->

#### AD-en-w06 · odin-gegner-en › „The Returner“ (2 Stellen) · Band S. 29 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: The Returner
- neu: The Returned
- Änderung: «Returner» → «Returned»
- Hinweis: Name des Gegners und seines Tokens (nur Felder, die genau so heißen). Die Einträge des Absatzabgleichs für diesen Gegner laufen vorher (eigene Datei, die zuerst kommt).
- Hinweis: Realm: Die Gegner werden über den Namen abgeglichen; „The Returned“ käme als neuer Record dazu, der alte „The Returner“ wäre von Hand zu löschen (siehe PR in odin-werkstatt).
<!-- daten: {"art":"begriff","pack":"odin-gegner-en","key":"!actors!7gSz8DJsbv8qTOsN","ganzesFeld":true,"hand":true} -->

#### AD-en-w07 · odin-abenteuerpakete-en › „The Other Services“ (2 Stellen) · Band S. 29 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: The Returner
- neu: The Returned
- Änderung: «Returner» → «Returned»
- Hinweis: Abenteuerpaket The Other Services: Name des Gegners und seines Tokens (nur Felder, die genau so heißen).
<!-- daten: {"art":"begriff","pack":"odin-abenteuerpakete-en","key":"!adventures!58kgeC6QBlfCBf1H","ganzesFeld":true,"hand":true} -->

#### AD-en-w08 · odin-abenteuer-en › „Adversaries“ (1 Stelle) · Band S. 29 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: {The Returner}
- neu: {The Returned}
- Änderung: «Returner}» → «Returned}»
- Hinweis: Angezeigter Name des Verweises auf der Seite „Adversaries“ (04 Small Cults).
<!-- daten: {"art":"begriff","pack":"odin-abenteuer-en","key":"!journal.pages!188oP4VMeDF0yM2O.Iav6hEIpDPDMEX5Y","hand":true} -->

#### AD-en-w09 · odin-abenteuerpakete-en › „The Other Services“ (1 Stelle) · Band S. 29 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: {The Returner}
- neu: {The Returned}
- Änderung: «Returner}» → «Returned}»
- Hinweis: Abenteuerpaket: angezeigter Name des Verweises.
<!-- daten: {"art":"begriff","pack":"odin-abenteuerpakete-en","key":"!adventures!58kgeC6QBlfCBf1H","hand":true} -->

#### AD-en-w10 · odin-abenteuer-en › „The Circle of the Returners“ (2 Stellen) · Band S. 18 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: The Circle of the Returners
- neu: The Circle of the Returned
- Änderung: «Returners» → «Returned»
- Hinweis: Name und Überschrift der Seite (04 Small Cults), wie im Band. Läuft nach den Einträgen des Absatzabgleichs für diese Seite.
- Hinweis: Realm: Seitennamen ändern sich; einspielen.mjs gleicht Seiten jetzt auch über die Seitennummer ab (PR in odin-werkstatt), sonst stünde die Seite doppelt da.
<!-- daten: {"art":"begriff","pack":"odin-abenteuer-en","key":"!journal.pages!188oP4VMeDF0yM2O.kywCgd2oCL3fBoeh","hand":true} -->

#### AD-en-w11 · odin-abenteuerpakete-en › „The Other Services“ (2 Stellen) · Band S. 18 · Writer (Schritt 3), prüfen
Freigabe: ja

- alt: The Circle of the Returners
- neu: The Circle of the Returned
- Änderung: «Returners» → «Returned»
- Hinweis: Abenteuerpaket: Name und Überschrift derselben Seite.
<!-- daten: {"art":"begriff","pack":"odin-abenteuerpakete-en","key":"!adventures!58kgeC6QBlfCBf1H","hand":true} -->

#### AD-en-w12 · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · Writer 25.10. (Hinweis 1), prüfen
Freigabe: ja

- alt: If the cell takes a skull from the plan, the Foundation answers with a countermove.
- neu: If the cell takes a skull from the plan, the organisation responds with a countermove.
- Änderung: «Foundation answers» → «organisation responds»
- Hinweis: Ersatz für AD-en-Ae3884a (nein): der Band hat für die drei Pläne drei verschiedene Sätze. Freigegeben vom Writer am 25.10., über ODIN Coder.
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]],"hand":true} -->

#### AD-en-w13 · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 36 · Writer 25.10. (Hinweis 1), prüfen
Freigabe: ja

- alt: If the cell takes a skull from the plan, the Foundation answers with a countermove.
- neu: If the cell takes one skull from the plan, STILLWATER responds with a countermove.
- Änderung: «a» → «one»; «the Foundation answers» → «STILLWATER responds»
- Hinweis: Ersatz für AD-en-Ae3884a (nein). Freigegeben vom Writer am 25.10., über ODIN Coder.
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"hand":true} -->

#### AD-en-w14 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 56 · Writer 25.10. (Hinweis 1), prüfen
Freigabe: ja

- alt: If the cell takes a skull from the plan, the Foundation answers with a countermove.
- neu: If the cell takes a skull from the plan, the lodge responds with a countermove.
- Änderung: «Foundation answers» → «lodge responds»
- Hinweis: Ersatz für AD-en-Ae3884a (nein). Freigegeben vom Writer am 25.10., über ODIN Coder. In Basel (14) bleibt „the Foundation answers“, dort stimmt es.
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"hand":true} -->

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
