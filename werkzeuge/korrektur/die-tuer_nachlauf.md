# Korrekturvorschläge: Die Tür (Nachlauf)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege die-tuer --nachlauf` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `die-tuer.md` mit ihren Entscheidungen bleibt, wie sie ist; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden die-tuer` nimmt beide Dateien.
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

Journalseiten 174, Sätze 1247, davon gleich 1238, im Band nicht gefunden 4 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: Nachbartext 3, Spaltenumbruch 2.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

## Englisch

Bände: ODIN_EN_10_The_Door_Campaign (Seiten 46, Prüfsumme b06a413140cf), ODIN_EN_11_The_Door_Handouts (Seiten 30, Prüfsumme 45caf093ec38).

Journalseiten 174, Sätze 1180, davon gleich 1166, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 2). Als Fehltreffer aussortiert: Spaltenumbruch 2, Nachbartext 3.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### DT-en-871fa2 · „08 Tunnel 7“ › „Nodes“ · Band S. 17 · sicher
Freigabe: ja

- alt: Clue: In Tunnel 7 there are Crystal Wardens (Threat Atlas), which the workers call “the Mutes”.
- neu: Clue: In Tunnel 7 there are Crystal Guardians (Threat Atlas), which the workers call “the Mutes”.
- Änderung: «Wardens» → «Guardians»
<!-- daten: {"art":"satz","fundstellen":[["08 Tunnel 7","Nodes"]]} -->

#### DT-en-799e67 · „08 Tunnel 7“ › „Confrontation“ · Band S. 18 · prüfen
Freigabe: ja

- alt: Anyone who touches the wall for too long is attacked by the Crystal Wardens.
- neu: Anyone who touches the wall for too long is attacked by the Crystal Guardians.
- Änderung: «Wardens.» → «Guardians.»
<!-- daten: {"art":"satz","fundstellen":[["08 Tunnel 7","Confrontation"]]} -->

#### DT-en-21fd28 · „18 Tunnel Zero“ › „Confrontation“ · Band S. 31 · sicher
Freigabe: ja

- alt: It can fight, against guards, against Soldiers, against security systems and a rift that opens when the Opener is disturbed.
- neu: It can fight, against guards, against Soldiers, against Guard Systems and a rift that opens when the Opener is disturbed.
- Änderung: «security systems» → «Guard Systems»
<!-- daten: {"art":"satz","fundstellen":[["18 Tunnel Zero","Confrontation"]]} -->
