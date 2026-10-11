# Korrekturvorschläge: Die Tür

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege die-tuer` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden die-tuer --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_10_Kampagne_Die_Tuer (Seiten 46, Prüfsumme 50c0ecf5dff5), ODIN_11_Die_Tuer_Handouts (Seiten 30, Prüfsumme 41d83cbca3fd).

Journalseiten 174, Sätze 1245, davon gleich 1234, im Band nicht gefunden 5 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 1 (sicher 0). Als Fehltreffer aussortiert: Nachbartext 3, Spaltenumbruch 2.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### DT-de-022120 · „06 Das Klopfen“ › „Die drei Kurven“ · Band S. 14 · prüfen
Freigabe: offen

- alt: Auf dem zweiten die Zahlen der Station, die die Registratur der Zelle geschickt hat, mit dem Abstand der Sendungen, der ebenfalls kürzer wird.
- neu: Auf dem zweiten die Zahlen der Station, die die Registratur der Zelle geschickt hat, mit den Pausen zwischen den Zahlengruppen, die ebenfalls kürzer werden.
- Änderung: «dem Abstand der Sendungen, der» → «den Pausen zwischen den Zahlengruppen, die»; «wird.» → «werden.»
<!-- daten: {"art":"satz","fundstellen":[["06 Das Klopfen","Die drei Kurven"]]} -->

## Englisch

Bände: ODIN_EN_10_The_Door_Campaign (Seiten 46, Prüfsumme 546865d92bac), ODIN_EN_11_The_Door_Handouts (Seiten 30, Prüfsumme 45caf093ec38).

Journalseiten 174, Sätze 1178, davon gleich 1164, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 1). Als Fehltreffer aussortiert: Spaltenumbruch 2, Nachbartext 3.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### DT-en-0e1ec8 · „The Door: Introduction“ › „Structure of the Campaign“ · Band S. 6 · prüfen, umformuliert
Freigabe: offen

- alt: After each mission there are XP according to the table in “Running Campaigns”: 3 for a White File, 5 for a Grey, 6 for a Red, 8 for a Black, 3 for a mission without a file, and +1 for each thread the cell picks up.
- neu: After each mission there are XP as in the core rulebook and in “Running Campaigns”: the base value of the file colour (White 2, Grey 4, Red 5, Black 7, no file 2), +1 for reaching the objective, at most +1 personal bonus, and +1 for each thread the cell picks up.
- Änderung: «according to» → «as in»; «table» → «core rulebook and»; «3» → «the base value of the file colour (White 2, Grey 4, Red 5, Black 7, no file 2), +1»; «a White File, 5 for a Grey, 6 for a Red, 8 for a Black, 3 for a mission without a file,» → «reaching the objective, at most +1 personal bonus,»
<!-- daten: {"art":"satz","fundstellen":[["The Door: Introduction","Structure of the Campaign"]]} -->

#### DT-en-76a9ae · „06 The Knocking“ › „The Three Curves“ · Band S. 14 · prüfen
Freigabe: offen

- alt: On the second, the numbers from the station that the cell’s Registry sent, with the interval between transmissions, which is also getting shorter.
- neu: On the second, the numbers from the station that the cell’s Registry sent, with the pauses between the number groups, which are also getting shorter.
- Änderung: «interval» → «pauses»; «transmissions,» → «the number groups,»; «is» → «are»
<!-- daten: {"art":"satz","fundstellen":[["06 The Knocking","The Three Curves"]]} -->

#### DT-en-1a142a · „07 Basel“ › „Elster’s Offer“ · Band S. 17 · sicher
Freigabe: offen

- alt: If the cell protects Elster, she tells them about the Nursery, about the register she gave Kantor in 1989, and that on 14 February not only will the Doors be open, but every child who ever went through an opening could come back. “The Council wants the night for itself.
- neu: If the cell protects Elster, she tells them about the Nursery, about the register she gave Kantor in 1989, and that on 14 February the Doors will be open, and every child who ever went through an opening could come back. “The Council wants the night for itself.
- Änderung: «not only will» → «(gestrichen)»; «(nichts)» → «will»; «but» → «and»
<!-- daten: {"art":"satz","fundstellen":[["07 Basel","Elster’s Offer"]]} -->
