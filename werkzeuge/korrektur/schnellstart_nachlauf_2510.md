# Korrekturvorschläge: Schnellstart (Nachlauf 2510)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege schnellstart --nachlauf=2510` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
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

Bände: ODIN_EN_13_Quickstart (Seiten 38, Prüfsumme 0d443c92ac9b).

Journalseiten 24, Sätze 535, davon gleich 529, im Band nicht gefunden 2 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 2 (sicher 1). Als Fehltreffer aussortiert: Nachbartext 2.
Gegner 2 mit 19 Zeilen, gleich 10; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### SS-en-6db5e0 · „01 The House by the Reservoir“ › „Combat“ · Band S. 10 · prüfen
Freigabe: ja

- alt: Attacker is wounded (half HP or less) −1
- neu: Attacker is battered (half HP or less) −1
- Änderung: «wounded» → «battered»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Combat"]]} -->

#### SS-en-97c58f · „01 The House by the Reservoir“ › „Node 5: The House“ · Band S. 30 · sicher
Freigabe: ja

- alt: Clue: Cold Spot, an EMF detector or a Telepath confirm: there is something here, and it is a dead person, not a being from a rift.
- neu: Clue: Cold Spot, an EMF detector or a Telepath confirms: there is something here, and it is a dead person, not a being from a rift.
- Änderung: «confirm:» → «confirms:»
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Node 5: The House"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### SS-en-w01 · „01 The House by the Reservoir“ › „Combat“ · Band S. 11 · Writer (j), prüfen
Freigabe: ja

- alt: Wounded: If HP drop
- neu: Battered: If HP drop
- Änderung: «Wounded:» → «Battered:»
- Hinweis: „Attacker is wounded“ ändert SS-en-6db5e0.
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Combat"]],"hand":true} -->

#### SS-en-w02 · „01 The House by the Reservoir“ › „Psi Powers and Magic“ · Band S. 13 · Writer (j), prüfen
Freigabe: ja

- alt: Crystal Crack
- neu: Crystal Rift
- Änderung: «Crack» → «Rift»
- Hinweis: Steht auf der Seite zweimal (Text und Tabellenkopf), beide Stellen werden geändert.
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Psi Powers and Magic"]],"hand":true} -->

#### SS-en-w03 · „01 The House by the Reservoir“ › „Psi Powers and Magic“ · Band S. 12 · aus dem Band, nicht vom Writer, prüfen
Freigabe: ja

- alt: Mind Reading, Force Push
- neu: Thought Reading, Force Push
- Änderung: «Mind» → «Thought»
- Hinweis: Nicht vom Writer, aber derselbe Begriff wie bei Möwe (d): Die Tabelle der Psi-Kosten hat im Schnellstart und im Grundregelwerk „Thought Reading, Force Push“.
<!-- daten: {"art":"satz","fundstellen":[["01 The House by the Reservoir","Psi Powers and Magic"]],"hand":true} -->

#### SS-en-w04 · odin-regeln-en › „Categories and Costs“ (1 Stelle) · Band S. 12 · aus dem Band, nicht vom Writer, prüfen
Freigabe: ja

- alt: Mind Reading, Force Push
- neu: Thought Reading, Force Push
- Änderung: «Mind» → «Thought»
- Hinweis: Nicht vom Writer: dieselbe Tabelle im Kompendium „Regeln“ (Grundregelwerk EN, Psi-Kräfte, „Categories and Costs“); das Grundregelwerk vom 25.10. hat dort „Thought Reading, Force Push“.
<!-- daten: {"art":"begriff","pack":"odin-regeln-en","key":"!journal.pages!HRMfTYPXlLjrVWo3.onX3rYZEmARQm6w9","hand":true} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Martha Kellner, the Waiting One“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special, Weakness, Traces, Behaviour, Encounter, What remains, Note.
