# Korrekturvorschläge: Horte der Welt (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege horte-der-welt --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
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

Journalseiten 134, Sätze 1988, davon gleich 1967, im Band nicht gefunden 21 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: keine.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

## Englisch

Bände: ODIN_EN_16_Holds_of_the_World (Seiten 70, Prüfsumme ee6a732c99d2).

Journalseiten 134, Sätze 1947, davon gleich 1924, im Band nicht gefunden 18 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 4 (sicher 4). Als Fehltreffer aussortiert: Spaltenumbruch 1.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### HW-en-dd33b6 · „02 Hold-2, Cardiff“ › „Daily Life and Customs“ · Band S. 18 · sicher
Freigabe: ja

- alt: A character whose home hold is Hold-2 knows Idris Pryce personally and receives once per mission a bonus die on a test of Craft, Technology or Alchemy when they work in the workshop or adapt an item.
- neu: A character whose home hold is Hold-2 knows Idris Pryce personally and receives a bonus die once per mission on a test of Craft, Technology or Alchemy when they work in the workshop or adapt an item.
- Änderung: «(nichts)» → «a bonus die»; «a bonus die» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["02 Hold-2, Cardiff","Daily Life and Customs"]]} -->

#### HW-en-87b854 · „03 Hold-4, Oxford“ › „Rumours“ · Band S. 24 · sicher
Freigabe: ja

- alt: It has three carbon copies, and one of them goes to himself.”
- neu: It has three carbon copies, and one of them goes to Finch himself.”
- Änderung: «(nichts)» → «Finch»
<!-- daten: {"art":"satz","fundstellen":[["03 Hold-4, Oxford","Rumours"]]} -->

#### HW-en-87730a · „06 Hold-7, Lyon“ › „History“ · Band S. 37 · sicher
Freigabe: ja

- alt: Most of their members live under legend in the city.
- neu: Most of their members live under a legend in the city.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["06 Hold-7, Lyon","History"]]} -->

#### HW-en-9a7f58 · „06 Hold-7, Lyon“ › „Floor Plan“ · Band S. 37 · sicher
Freigabe: ja

- alt: Stairs and lift lead down to the basement; the lift stops in front of the changing room.
- neu: Stairs and a lift lead down to the basement; the lift stops in front of the changing room.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["06 Hold-7, Lyon","Floor Plan"]]} -->
