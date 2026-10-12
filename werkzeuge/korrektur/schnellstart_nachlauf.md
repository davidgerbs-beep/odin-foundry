# Korrekturvorschläge: Schnellstart (Nachlauf)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege schnellstart --nachlauf` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `schnellstart.md` mit ihren Entscheidungen bleibt, wie sie ist; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden schnellstart` nimmt beide Dateien.
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

Journalseiten 24, Sätze 549, davon gleich 548, im Band nicht gefunden 1 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: keine.
Gegner 2 mit 19 Zeilen, gleich 10; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Martha Kellner, die Wartende“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit, Schwäche, Spuren, Verhalten, Begegnung, Was bleibt, Hinweis.

## Englisch

Bände: ODIN_EN_13_Quickstart (Seiten 38, Prüfsumme 77389f6a0ee4).

Journalseiten 24, Sätze 535, davon gleich 529, im Band nicht gefunden 1 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 3). Als Fehltreffer aussortiert: Nachbartext 2.
Gegner 2 mit 19 Zeilen, gleich 10; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### SS-en-1288e3 · „01 The House by the Reservoir“ › „Strain and Horror“ · Band S. 11 · sicher
Freigabe: offen

- alt: Horrific 3 A person transforms into a monster before your eyes.
- neu: Horrifying 3 A person transforms into a monster before your eyes.
- Änderung: «Horrific» → «Horrifying»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Strain and Horror"]]} -->

#### SS-en-3a54b1 · „01 The House by the Reservoir“ › „Four Agents“ · Band S. 15 · sicher
Freigabe: offen

- alt: She sees what others overlook and has mastered a Protection Ritual for the whole group.
- neu: She sees what others overlook and has mastered a Protective Ritual for the whole group.
- Änderung: «Protection» → «Protective»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Four Agents"]]} -->

#### SS-en-4efd6d · „01 The House by the Reservoir“ › „Four Agents“ · Band S. 15 · sicher
Freigabe: offen

- alt: Raven Investigator, Paranormal Detective Read tracks and signs, Protection Ritual 10 10
- neu: Raven Investigator, Paranormal Detective Read tracks and signs, Protective Ritual 10 10
- Änderung: «Protection» → «Protective»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Four Agents"]]} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Martha Kellner, the Waiting One“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special, Weakness, Traces, Behaviour, Encounter, What remains, Note.
