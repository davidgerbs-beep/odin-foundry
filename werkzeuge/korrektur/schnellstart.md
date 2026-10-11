# Korrekturvorschläge: Schnellstart

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege schnellstart` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden schnellstart --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_13_Schnellstart (Seiten 38, Prüfsumme 78e22fcbe364).

Journalseiten 24, Sätze 548, davon gleich 539, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 1). Als Fehltreffer aussortiert: keine.
Gegner 2 mit 19 Zeilen, gleich 10; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### SS-de-c746af · „01 Das Haus am Stausee“ › „Bevor ihr anfangt“ · Band S. 4 · sicher
Freigabe: offen

- alt: Ihr spielt Agentinnen und Agenten einer Organisation, die seit 1977 die Risse schließt.
- neu: Ihr spielt Agentinnen und Agenten einer Organisation, die seit Jahrzehnten die Risse schließt.
- Änderung: «1977» → «Jahrzehnten»
<!-- daten: {"art":"satz","fundstellen":[["01 Das Haus am Stausee","Bevor ihr anfangt"]]} -->

#### SS-de-df542d · „01 Das Haus am Stausee“ › „Wie es weitergeht“ · Band S. 33 · prüfen
Freigabe: offen

- alt: Das Grundregelwerk umfasst 88 Seiten und ist kostenlos.
- neu: Das Grundregelwerk ist kostenlos.
- Änderung: «umfasst 88 Seiten und» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["01 Das Haus am Stausee","Wie es weitergeht"]]} -->

#### SS-de-0ffc5c · „01 Das Haus am Stausee“ › „Wie es weitergeht“ · Band S. 33 · prüfen
Freigabe: offen

- alt: Wer tiefer einsteigen will, findet sechs Klassenbücher, ein Arsenal mit 201 Gegenständen, ein Spielleiterbuch und die Kampagne „Die Tür“.
- neu: Wer tiefer einsteigen will, findet sechs Klassenbücher, das Ausrüstungsbuch Arsenal, ein Spielleiterbuch und die Kampagne „Die Tür“.
- Änderung: «ein Arsenal mit 201 Gegenständen,» → «das Ausrüstungsbuch Arsenal,»
<!-- daten: {"art":"satz","fundstellen":[["01 Das Haus am Stausee","Wie es weitergeht"]]} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Martha Kellner, die Wartende“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit, Schwäche, Spuren, Verhalten, Begegnung, Was bleibt, Hinweis.

## Englisch

Bände: ODIN_EN_13_Quickstart (Seiten 38, Prüfsumme ab67ae68ee6e).

Journalseiten 24, Sätze 535, davon gleich 524, im Band nicht gefunden 7 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 1). Als Fehltreffer aussortiert: Nachbartext 1.
Gegner 2 mit 19 Zeilen, gleich 10; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### SS-en-a7b653 · „01 The House by the Reservoir“ › „Before You Begin“ · Band S. 4 · prüfen
Freigabe: offen

- alt: You play agents of an organisation that has been closing the rifts since 1977.
- neu: You play agents of an organisation that has been closing the rifts for decades.
- Änderung: «since 1977.» → «for decades.»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Before You Begin"]]} -->

#### SS-en-d65b3e · „01 The House by the Reservoir“ › „What Happens Next“ · Band S. 5 · prüfen
Freigabe: offen

- alt: The locations are already known.
- neu: The locations are.
- Änderung: «are already known.» → «are.»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","What Happens Next"]]} -->

#### SS-en-f60d50 · „01 The House by the Reservoir“ › „What Happens Next“ · Band S. 33 · sicher
Freigabe: offen

- alt: Those who want to go deeper will find six class books, an arsenal with 201 items, a game master book and the campaign “The Door”.
- neu: Those who want to go deeper will find six class books, the equipment book Arsenal, a game master book and the campaign “The Door”.
- Änderung: «an arsenal with 201 items,» → «the equipment book Arsenal,»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","What Happens Next"]]} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Martha Kellner, the Waiting One“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special, Weakness, Traces, Behaviour, Encounter, What remains, Note.
