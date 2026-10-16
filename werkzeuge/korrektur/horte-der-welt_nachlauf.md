# Korrekturvorschläge: Horte der Welt (Nachlauf)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege horte-der-welt --nachlauf` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `horte-der-welt.md` mit ihren Entscheidungen bleibt, wie sie ist; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden horte-der-welt` nimmt beide Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden horte-der-welt --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_16_Horte_der_Welt (Seiten 71, Prüfsumme f2ccfadd89f8).

Journalseiten 134, Sätze 1988, davon gleich 1966, im Band nicht gefunden 21 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 1 (sicher 0). Als Fehltreffer aussortiert: keine.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### HW-de-a81f7d · „05 Hort-5, Wien“ › „Was es hier gibt“ · Band S. 35 · prüfen
Freigabe: ja

- alt: Seltenes innerhalb eines Tages, wenn der Führungsoffizier unterschreibt: Sturmgewehre, Scharfschützengewehre, Brandmunition in kleinen Mengen.
- neu: Seltenes innerhalb eines Tages, wenn der Führungsoffizier unterschreibt: Brandmunition in kleinen Mengen.
- Änderung: «Sturmgewehre, Scharfschützengewehre,» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["05 Hort-5, Wien","Was es hier gibt"]]} -->

## Englisch

Bände: ODIN_EN_16_Holds_of_the_World (Seiten 70, Prüfsumme 3c904cb7aa4b).

Journalseiten 134, Sätze 1947, davon gleich 1927, im Band nicht gefunden 18 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 2 (sicher 2). Als Fehltreffer aussortiert: keine.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### HW-en-910c95 · „Holds of the World: Introduction“ › „Home Hold“ · Band S. 6 · sicher
Freigabe: ja

- alt: Once per mission a bonus die on Firearms or Close Combat after a consultation in the armoury.
- neu: Once per mission a bonus die on Firearms or Melee after a consultation in the armoury.
- Änderung: «Close Combat» → «Melee»
<!-- daten: {"art":"satz","fundstellen":[["Holds of the World: Introduction","Home Hold"]]} -->

#### HW-en-77874a · „05 Hold-5, Vienna“ › „What Is Here“ · Band S. 35 · sicher
Freigabe: ja

- alt: Rare items within a day, if the handler signs: assault rifles, sniper rifles, incendiary ammunition in small quantities.
- neu: Rare items within a day, if the handler signs: incendiary ammunition in small quantities.
- Änderung: «assault rifles, sniper rifles,» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["05 Hold-5, Vienna","What Is Here"]]} -->
