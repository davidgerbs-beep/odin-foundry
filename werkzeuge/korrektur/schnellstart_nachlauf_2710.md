# Korrekturvorschläge: Schnellstart (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege schnellstart --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `schnellstart.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden schnellstart` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden schnellstart --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_13_Schnellstart (Seiten 38, Prüfsumme e509c268fe67).

Journalseiten 24, Sätze 549, davon gleich 548, im Band nicht gefunden 1 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: keine.
Gegner 2 mit 19 Zeilen, gleich 10; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Martha Kellner, die Wartende“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit, Schwäche, Spuren, Verhalten, Begegnung, Was bleibt, Hinweis.

## Englisch

Bände: ODIN_EN_13_Quickstart (Seiten 38, Prüfsumme 5e16a2852bc0).

Journalseiten 24, Sätze 535, davon gleich 530, im Band nicht gefunden 1 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 2 (sicher 2). Als Fehltreffer aussortiert: Nachbartext 2.
Gegner 2 mit 19 Zeilen, gleich 10; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### SS-en-911682 · „01 The House by the Reservoir“ › „The World“ · Band S. 4 · sicher
Freigabe: ja

- alt: Some remain open for years and change their surroundings: clocks show the wrong time, plants grow in wrong colours, people dream the same dreams.
- neu: Some remain open for years and change their surroundings: clocks show the wrong time, plants grow in the wrong colours, people dream the same dreams.
- Änderung: «(nichts)» → «the»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","The World"]]} -->

#### SS-en-6c8abf · „01 The House by the Reservoir“ › „Character Sheet and Handouts“ · Band S. 33 · sicher
Freigabe: ja

- alt: After this section lies a blank character sheet for copying; after it two handouts for printing: the newspaper article from 1960 and the letter from the Red Cross from 1961.
- neu: After this section lies a blank character sheet for copying; after it lie two handouts for printing: the newspaper article from 1960 and the letter from the Red Cross from 1961.
- Änderung: «(nichts)» → «lie»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Character Sheet and Handouts"]]} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Martha Kellner, the Waiting One“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special, Weakness, Traces, Behaviour, Encounter, What remains, Note.
