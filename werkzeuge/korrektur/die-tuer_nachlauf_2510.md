# Korrekturvorschläge: Die Tür (Nachlauf 2510)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege die-tuer --nachlauf=2510` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `die-tuer.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden die-tuer` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden die-tuer --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_10_Kampagne_Die_Tuer (Seiten 46, Prüfsumme 50c0ecf5dff5), ODIN_11_Die_Tuer_Handouts (Seiten 30, Prüfsumme 3b8d16eaec52).

Journalseiten 174, Sätze 1247, davon gleich 1238, im Band nicht gefunden 4 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: Nachbartext 3, Spaltenumbruch 2.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

## Englisch

Bände: ODIN_EN_10_The_Door_Campaign (Seiten 46, Prüfsumme e8e0c22fb2b5), ODIN_EN_11_The_Door_Handouts (Seiten 30, Prüfsumme 45caf093ec38).

Journalseiten 174, Sätze 1180, davon gleich 1163, im Band nicht gefunden 8 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 3). Als Fehltreffer aussortiert: Spaltenumbruch 3, Nachbartext 3.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### DT-en-2deb3c · „11 Raunacht“ › „Aftermath“ · Band S. 21 · sicher
Freigabe: offen

- alt: Next to each name is the same note: “Opening brought forward to night of 14.2., on Prometheus’ orders.” The Council wants to have eleven children opened at once that night, in the Silent Ones, to the beat of the Opener.
- neu: Next to each name is the same note: “Opening brought forward to night of 14.2., on Prometheus’ orders.” The Council wants to have eleven children opened at once that night, in the Silences, to the beat of the Opener.
- Änderung: «Silent Ones,» → «Silences,»
<!-- daten: {"art":"satz","fundstellen":[["11 Raunacht","Aftermath"]]} -->

#### DT-en-cfba04 · „16 The Monastery“ › „Overview“ · Band S. 28 · sicher
Freigabe: offen

- alt: On the second day, a squad of Echo-Operative arrives, a good fifty years after the 1976 operation, at the same place.
- neu: On the second day, a squad of Echo-Operatives arrives, a good fifty years after the 1976 operation, at the same place.
- Änderung: «Echo-Operative» → «Echo-Operatives»
<!-- daten: {"art":"satz","fundstellen":[["16 The Monastery","Overview"]]} -->

#### DT-en-21c300 · „18 Tunnel Zero“ › „Confrontation“ · Band S. 31 · sicher
Freigabe: offen

- alt: To do this, eleven children are to be opened in the same night, in the Silent, in time with the Opener. “We are the only ones who are ready.
- neu: To do this, eleven children are to be opened in the same night, in the Silences, in time with the Opener. “We are the only ones who are ready.
- Änderung: «Silent,» → «Silences,»
<!-- daten: {"art":"satz","fundstellen":[["18 Tunnel Zero","Confrontation"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### DT-en-w01 · „10 The Evening“ › „Nodes“ · Band S. 20 · Writer (k), prüfen
Freigabe: offen

- alt: The Collector with the Large Stone.
- neu: The Collector with the great stone.
- Änderung: «Large Stone.» → «great stone.»
- Hinweis: Der Planname „The Large Stone“ im Hinweis desselben Knotens bleibt nach Angabe des Writers; der Band vom 25.10. schreibt auch dort „The great stone“ (S. 20).
<!-- daten: {"art":"satz","fundstellen":[["10 The Evening","Nodes"]],"hand":true} -->
