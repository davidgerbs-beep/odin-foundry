# Korrekturvorschläge: Die Tür (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege die-tuer --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
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

Bände: ODIN_EN_10_The_Door_Campaign (Seiten 46, Prüfsumme 3ed9cabe388b), ODIN_EN_11_The_Door_Handouts (Seiten 30, Prüfsumme 45caf093ec38).

Journalseiten 174, Sätze 1180, davon gleich 1164, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 6 (sicher 4). Als Fehltreffer aussortiert: Schreibweise 1, Spaltenumbruch 2, Nachbartext 2.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### DT-en-16d5c3 · „02 Copper“ › „Nodes“ · Band S. 9 · sicher
Freigabe: ja

- alt: A mother with a child with a rash, an old man who describes the humming “like Morse code”, the caretaker, who is new.
- neu: A mother with a child with a rash, an old man who describes the humming as “like Morse code”, the caretaker, who is new.
- Änderung: «(nichts)» → «as»
<!-- daten: {"art":"satz","fundstellen":[["02 Copper","Nodes"]]} -->

#### DT-en-7c8f45 · „04 Foster Case“ › „Aftermath“ · Band S. 11 · prüfen
Freigabe: nein

- alt: An Open One who, if the cell let him go, gives them a note with an address in Basel: “If you want to know who you are.” Pointers: The Numbers +1 if Lio ends up with the Observer.
- neu: An Open One who, if the cell let him go, gives them a note with an address in Basel: “If you want to know who you are.” Pointers: The Numbers +1 if Lio Clue: They have a folder with the Observer.
- Änderung: «ends up» → «Clue: They have a folder»
- Hinweis: Writer nein: Nachbartext aus dem Satz („Clue: They have a folder“), der Band sagt weiter „if Lio ends up with the Observer“.
<!-- daten: {"art":"satz","fundstellen":[["04 Foster Case","Aftermath"]]} -->

#### DT-en-2b4b2d · „05 Last Train“ › „Aftermath“ · Band S. 13 · sicher
Freigabe: ja

- alt: Decision Book: Did the cell give the file to the Registry (Guard) or keep it and investigate themselves (Take Over)?
- neu: Decision Book: Did the cell give the file to the Registry (Guard) or keep it and investigate it themselves (Take Over)?
- Änderung: «(nichts)» → «it»
<!-- daten: {"art":"satz","fundstellen":[["05 Last Train","Aftermath"]]} -->

#### DT-en-cce7da · „11 Raunacht“ › „Kantor’s Offer“ · Band S. 21 · prüfen
Freigabe: ja

- alt: He wants to make the choir whole before the Council tears him apart.”
- neu: He wants to make the choir whole before the Council tears it apart.”
- Änderung: «him» → «it»
<!-- daten: {"art":"satz","fundstellen":[["11 Raunacht","Kantor’s Offer"]]} -->

#### DT-en-da8d96 · „12 Listener“ › „Overview“ · Band S. 22 · sicher
Freigabe: ja

- alt: On the night of 2 January, at three o’clock, two hundred people in Gothenburg hear the same radio programme: static, and in it a woman reading numbers, then a melody.
- neu: On the night of 1 to 2 January, at three o’clock, two hundred people in Gothenburg hear the same radio programme: static, and in it a woman reading numbers, then a melody.
- Änderung: «(nichts)» → «1 to»
<!-- daten: {"art":"satz","fundstellen":[["12 Listener","Overview"]]} -->

#### DT-en-e78877 · „12 Listener“ › „Nodes“ · Band S. 22 · sicher
Freigabe: ja

- alt: He has Resonance 4 and on the table a note: “She wants someone to listen.”
- neu: He has Resonance 4 and a note on the table: “She wants someone to listen.”
- Änderung: «(nichts)» → «a note»; «table a note:» → «table:»
<!-- daten: {"art":"satz","fundstellen":[["12 Listener","Nodes"]]} -->
