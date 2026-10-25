# Korrekturvorschläge: Graue Akten (Nachlauf 2510)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege graue-akten --nachlauf=2510` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `graue-akten.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden graue-akten` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden graue-akten --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_14_Graue_Akten (Seiten 81, Prüfsumme 12447c33b863), ODIN_14_Graue_Akten_Handouts (Seiten 26, Prüfsumme 848582a040e3).

Journalseiten 158, Sätze 2470, davon gleich 2459, im Band nicht gefunden 7 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 1 (sicher 0). Als Fehltreffer aussortiert: Spaltenumbruch 2, Nachbartext 1.
Gegner 20 mit 147 Zeilen, gleich 139; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### GA-de-6fb383 · „07 Die Vitrine“ › „Personen“ · Band S. 65 · prüfen
Freigabe: ja

- alt: Er verschweigt, dass das Archiv einen Karton mit Akten aus dem Schacht „Silberner Hirsch“ hat, der seit 1939 gesperrt ist.
- neu: Er verschweigt, dass das Archiv einen Karton mit Akten aus dem Schacht „Silberner Hirsch“ hat, gesperrt seit 1939.
- Änderung: «der» → «gesperrt»; «1939 gesperrt ist.» → «1939.»
<!-- daten: {"art":"satz","fundstellen":[["07 Die Vitrine","Personen"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### GA-de-w01 · „07 Die Vitrine“ › „Eskalation“ · Band S. 68 · Writer (g), prüfen
Freigabe: ja

- alt: Wenn ein Psion das Summen
- neu: Wenn jemand das Summen
- Änderung: «ein Psion» → «jemand»
<!-- daten: {"art":"satz","fundstellen":[["07 Die Vitrine","Eskalation"]],"hand":true} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Evan Pryce als Spuk“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit, Schwäche, Spuren, Verhalten, Begegnung, Was bleibt.

## Englisch

Bände: ODIN_EN_14_Grey_Files (Seiten 79, Prüfsumme 87110b8c4df3), ODIN_EN_14_Grey_Files_Handouts (Seiten 26, Prüfsumme 7cc945282732).

Journalseiten 158, Sätze 2377, davon gleich 2356, im Band nicht gefunden 9 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 5 (sicher 2). Als Fehltreffer aussortiert: Nachbartext 5, Spaltenumbruch 3.
Gegner 20 mit 147 Zeilen, gleich 139; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### GA-en-d181fe · „03 Number 341“ › „Node 1: The Pawnshop in Grangetown“ · Band S. 28 · prüfen
Freigabe: ja

- alt: Outstanding classes: Investigator, Scientist, Thaumaturge, Soldier, Psion.
- neu: Shining classes: Investigator, Scientist, Thaumaturge, Soldier, Psion.
- Änderung: «Outstanding» → «Shining»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 1: The Pawnshop in Grangetown"]]} -->

#### GA-en-3ea5c7 · „03 Number 341“ › „Node 5: The Foster Family in Splott“ · Band S. 29 · prüfen
Freigabe: ja

- alt: Excellent classes: Psion, Investigator, Negotiator.
- neu: Shining classes: Psion, Investigator, Negotiator.
- Änderung: «Excellent» → «Shining»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 5: The Foster Family in Splott"]]} -->

#### GA-en-89525b · „07 The Display Case“ › „People“ · Band S. 64 · sicher
Freigabe: ja

- alt: He conceals that the archive has a box of files from the “Silberner Hirsch” shaft, which has been locked since 1939.
- neu: He conceals that the archive has a box of files from the “Silberner Hirsch” shaft, sealed since 1939.
- Änderung: «which has been locked» → «sealed»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","People"]]} -->

#### GA-en-e6f988 · „08 The Second Light“ › „Aftermath“ · Band S. 77 · sicher
Freigabe: ja

- alt: At most +1 XP personal bonus, for example for the solution without combat. +1 XP for each thread the cell takes up, for example the amateur geologist with the remaining stones.
- neu: At most +1 XP personal bonus, for example for the solution without combat. +1 XP for each thread the cell takes up, for example the hobby geologist with the remaining stones.
- Änderung: «amateur» → «hobby»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","Aftermath"]]} -->

#### GA-en-e03090 · „01 Foster Child“ › „Handouts and Map“ · Handouts S. 2 · prüfen
Freigabe: nein

- alt: Handout 1.1: Newspaper Article, Süderelbe-Kurier
- neu: H A N D O U T 1 . 1 N E W S PA P E R A R T I C L E THURSDAY, 5 NOVEMBER 2026 · PAGE 7 SÜDERELBE-KURIER
- Änderung: «Handout 1.1: Newspaper Article, Süderelbe-Kurier» → «H A N D O U T 1 . 1 N E W S PA P E R A R T I C L E THURSDAY, 5 NOVEMBER 2026 · PAGE 7 SÜDERELBE-KURIER»
- Hinweis: Fehltreffer: Kopf des Handouts im Band gesperrt gesetzt (H A N D O U T …). Empfehlung: nein.
<!-- daten: {"art":"satz","fundstellen":[["01 Foster Child","Handouts and Map"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### GA-en-w01 · „07 The Display Case“ › „Escalation“ · Band S. 67 · Writer (g), prüfen
Freigabe: ja

- alt: When a Psion hears
- neu: When someone hears
- Änderung: «a Psion» → «someone»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","Escalation"]],"hand":true} -->

#### GA-en-w02 · „06 The Tutor“ › „Aftermath“ · Band S. 59 · Writer (g), prüfen
Freigabe: ja

- alt: The lodge Zum Schweigenden Kreis
- neu: The Lodge of the Silent Circle
- Änderung: «lodge Zum Schweigenden Kreis» → «Lodge of the Silent Circle»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","Aftermath"]],"hand":true} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Evan Pryce as a Haunting“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special feature, Weakness, Traces, Behaviour, Encounter, What remains.
