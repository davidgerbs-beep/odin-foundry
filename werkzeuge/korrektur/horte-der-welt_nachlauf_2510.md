# Korrekturvorschläge: Horte der Welt (Nachlauf 2510)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege horte-der-welt --nachlauf=2510` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `horte-der-welt.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden horte-der-welt` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden horte-der-welt --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_16_Horte_der_Welt (Seiten 71, Prüfsumme 4796c81cc7c1).

Journalseiten 134, Sätze 1988, davon gleich 1965, im Band nicht gefunden 22 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 1 (sicher 1). Als Fehltreffer aussortiert: keine.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### HW-de-0bc792 · „02 Hort-2, Cardiff“ › „Hort-2, Cardiff“ · Band S. 14 · sicher
Freigabe: ja

- alt: Wer nach Cardiff kommt, kommt wegen eines Stücks Metall oder eines jungen Psionen und bleibt meist länger, als er wollte.
- neu: Wer nach Cardiff kommt, kommt wegen eines Stücks Metall oder eines jungen Psions und bleibt meist länger, als er wollte.
- Änderung: «Psionen» → «Psions»
<!-- daten: {"art":"satz","fundstellen":[["02 Hort-2, Cardiff","Hort-2, Cardiff"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### HW-de-w01 · „06 Hort-7, Lyon“ › „Was es hier gibt“ · Band S. 40 · Writer (h), prüfen
Freigabe: ja

- alt: Ein Dienstwagen mit Tarnkennzeichen, ein Motorrad, ein Transporter.
- neu: Ein Dienstwagen mit Tarnkennzeichen und ein Motorrad.
- Änderung: «Tarnkennzeichen,» → «Tarnkennzeichen und»; «Motorrad, ein Transporter.» → «Motorrad.»
- Hinweis: Englisch: HW-en-5ad4ce.
<!-- daten: {"art":"satz","fundstellen":[["06 Hort-7, Lyon","Was es hier gibt"]],"hand":true} -->

## Englisch

Bände: ODIN_EN_16_Holds_of_the_World (Seiten 70, Prüfsumme 44678a6a8d2b).

Journalseiten 134, Sätze 1947, davon gleich 1927, im Band nicht gefunden 18 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 2 (sicher 1). Als Fehltreffer aussortiert: keine.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### HW-en-5ad4ce · „06 Hold-7, Lyon“ › „What Is Here“ · Band S. 40 · prüfen
Freigabe: ja

- alt: A service car with cover plates, a motorcycle, a van.
- neu: A service car with cover plates and a motorcycle.
- Änderung: «plates,» → «plates and»; «motorcycle, a van.» → «motorcycle.»
<!-- daten: {"art":"satz","fundstellen":[["06 Hold-7, Lyon","What Is Here"]]} -->

#### HW-en-b20305 · „06 Hold-7, Lyon“ › „Daily Life and Customs“ · Band S. 40 · sicher
Freigabe: ja

- alt: Once per mission they receive a bonus dice in Lyon on a test for Stealth or Perception.
- neu: Once per mission they receive a bonus die in Lyon on a test for Stealth or Perception.
- Änderung: «dice» → «die»
<!-- daten: {"art":"satz","fundstellen":[["06 Hold-7, Lyon","Daily Life and Customs"]]} -->
