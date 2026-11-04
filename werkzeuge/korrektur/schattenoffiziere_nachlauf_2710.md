# Korrekturvorschläge: Schattenoffiziere (Kräfte, Zauber, Ausrüstung) (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege schattenoffiziere --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `schattenoffiziere.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden schattenoffiziere` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Beschreibung von Kräften, Zaubern und Ausrüstung in Foundry, deren Name im Band steht, mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden schattenoffiziere --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_19_Schattenoffiziere (Seiten 83, Prüfsumme c2c882414b7e).

Gegenstände mit Namen im Band 81, Sätze 207, davon gleich 63, im Band nicht gefunden 141 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: Spaltenumbruch 1, Nachbartext 1.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

## Englisch

Bände: ODIN_EN_19_Shadow_Officers (Seiten 80, Prüfsumme e80f8dc4dd8f).

Gegenstände mit Namen im Band 72, Sätze 170, davon gleich 54, im Band nicht gefunden 110 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 2 (sicher 0). Als Fehltreffer aussortiert: Zahl aus dem Satz 1.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Kräfte, Zauber, Ausrüstung

#### SO-en-b20902 · odin-kraefte-en › „Retrieval Impulse“ · Band S. 18 · prüfen, umformuliert
Freigabe: nein

- alt: Brings back an ally who died at most one minute ago.
- neu: Brings back a dead person (at most 1 minute) with.
- Änderung: «an ally who died at» → «a dead person (at»; «one minute ago.» → «1 minute) with.»
- Hinweis: Writer nein: Tabellenzeile im Band zerschnitten, Foundry-Satz bleibt.
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Retrieval Impulse"]]} -->

#### SO-en-7fd3e2 · odin-zauber-en › „Banishment“ · Band S. 22 · prüfen, umformuliert
Freigabe: nein

- alt: A being from a rift or a summoned being is sent back to where it came from.
- neu: A being back to where it came from.
- Änderung: «from a rift or a summoned being is sent» → «(gestrichen)»
- Hinweis: Writer nein: Tabellenzeile im Band zerschnitten, Foundry-Satz bleibt.
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Banishment"]]} -->
