# Korrekturvorschläge: Graue Akten (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege graue-akten --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
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

Journalseiten 158, Sätze 2470, davon gleich 2461, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: Spaltenumbruch 2, Nachbartext 1.
Gegner 20 mit 147 Zeilen, gleich 139; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Evan Pryce als Spuk“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit, Schwäche, Spuren, Verhalten, Begegnung, Was bleibt.

## Englisch

Bände: ODIN_EN_14_Grey_Files (Seiten 79, Prüfsumme 9c74fc23daf8), ODIN_EN_14_Grey_Files_Handouts (Seiten 26, Prüfsumme 5995059852a1).

Journalseiten 158, Sätze 2378, davon gleich 2352, im Band nicht gefunden 9 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 11 (sicher 9). Als Fehltreffer aussortiert: Nachbartext 4, Spaltenumbruch 2.
Gegner 20 mit 147 Zeilen, gleich 133; Vorschläge 4.
Hinweise ohne Vorschlag: 3.

### Journalsätze

#### GA-en-30e5b7 · „02 Find Site“ › „What Really Happened“ · Band S. 17 · sicher
Freigabe: ja

- alt: Whoever opens it sees a corridor that does not belong to the Hold: a corridor from the year 1977, with linoleum floor and a flickering lamp.
- neu: Whoever opens it sees a corridor that does not belong to the Hold: a corridor from the year 1977, with a linoleum floor and a flickering lamp.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","What Really Happened"]]} -->

#### GA-en-eaa8e3 · „02 Find Site“ › „Node 5: Room 4/12 and the Room Behind the Door“ · Band S. 20 · sicher
Freigabe: ja

- alt: Whoever opens it sees a corridor from 1977, with linoleum floor and a flickering lamp.
- neu: Whoever opens it sees a corridor from 1977, with a linoleum floor and a flickering lamp.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","Node 5: Room 4/12 and the Room Behind the Door"]]} -->

#### GA-en-6f41a0 · „03 Number 341“ › „Aftermath“ · Band S. 32 · sicher
Freigabe: ja

- alt: An Agent can firm up witness statements, a Journalist can rewrite the story, if the police were called after all.
- neu: An Agent can firm up witness statements, and a Journalist can rewrite the story, if the police were called after all.
- Änderung: «(nichts)» → «and»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Aftermath"]]} -->

#### GA-en-543b09 · „04 Kessler“ › „Node 5: The Dead Drop“ · Band S. 39 · prüfen
Freigabe: ja

- alt: B.” Whoever checks the initials against the old lists of the Hands finds a Viktor Brunner who died 2005.
- neu: B.” Whoever checks the initials against the old lists of the Hands finds a Viktor Brunner who died in 2005.
- Änderung: «(nichts)» → «in»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 5: The Dead Drop"]]} -->

#### GA-en-a08cfb · „05 Second Circle“ › „Briefing“ · Band S. 46 · prüfen
Freigabe: ja

- alt: In the neighbouring village a family has bought a house, whom nobody knows, and their children do not sing.
- neu: In the neighbouring village a family whom nobody knows has bought a house, and their children do not sing.
- Änderung: «(nichts)» → «whom nobody knows»; «whom nobody knows,» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["05 Second Circle","Briefing"]]} -->

#### GA-en-3a42d5 · „07 The Display Case“ › „People“ · Band S. 64 · sicher
Freigabe: ja

- alt: She knows that Liese died on the night of 3 December 1938 and that the father disappeared shortly afterwards.
- neu: She knows that Liese died on the night of 2 to 3 December 1938 and that the father disappeared shortly afterwards.
- Änderung: «(nichts)» → «2 to»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","People"]]} -->

#### GA-en-598f74 · „07 The Display Case“ › „People“ · Band S. 64 · sicher
Freigabe: ja

- alt: She conceals that she knows the song as an old Bad Grund song from her grandmother, who heard it on the night of 3 December 1938 through the wall from the Hartmanns’ house next door, from a girl named Liese.
- neu: She conceals that she knows the song as an old Bad Grund song from her grandmother, who heard it on the night of 2 to 3 December 1938 through the wall from the Hartmanns’ house next door, from a girl named Liese.
- Änderung: «(nichts)» → «2 to»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","People"]]} -->

#### GA-en-9744b6 · „07 The Display Case“ › „The Confrontation“ · Band S. 67 · sicher
Freigabe: ja

- alt: The cell has learned from the archive and the estate that Liese Hartmann died on the night of 3 December 1938, that her father sold the crystal and then disappeared, and that her grave is in the cemetery of Bad Grund, tended by Renate Hartmann.
- neu: The cell has learned from the archive and the estate that Liese Hartmann died on the night of 2 to 3 December 1938, that her father sold the crystal and then disappeared, and that her grave is in the cemetery of Bad Grund, tended by Renate Hartmann.
- Änderung: «(nichts)» → «2 to»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","The Confrontation"]]} -->

#### GA-en-9d3f02 · „07 The Display Case“ › „The Confrontation“ · Band S. 67 · sicher
Freigabe: ja

- alt: The cell has recorded the song, using the dictation machine with noise filter, or a Psion has stored it as an Echo.
- neu: The cell has recorded the song, using the dictation machine with a noise filter, or a Psion has stored it as an Echo.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","The Confrontation"]]} -->

#### GA-en-c8ea07 · „07 The Display Case“ › „Opponents“ · Band S. 68 · sicher
Freigabe: ja

- alt: Whoever places the crystal in beryllium container banishes her for a while.
- neu: Whoever places the crystal in the beryllium container banishes her for a while.
- Änderung: «(nichts)» → «the»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","Opponents"]]} -->

#### GA-en-5c296c · „07 The Display Case“ › „Aftermath“ · Band S. 69 · sicher
Freigabe: ja

- alt: An Agent can explain it as “a power cut, faulty alarm system or drunk teenagers”.
- neu: An Agent can explain it as “a power cut, a faulty alarm system or drunk teenagers”.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","Aftermath"]]} -->

### Gegnerwerte

#### GA-en-ddd970 · Gegner „Dr. Marianne Weber“, Zeile „Special“ · Band S. 68 · prüfen
Freigabe: ja

- alt: Stands in trance. An Agent or Psion can speak to her: Insight against Doable (2), to wake her. A blow with salt or cold water wakes her immediately.
- neu: Stands in a trance. An Agent or Psion can speak to her: Insight against Doable (2), to wake her. A blow with salt or a splash of cold water wakes her immediately.
- Änderung: «(nichts)» → «a»; «(nichts)» → «a splash of»
<!-- daten: {"art":"gegner","name":"Dr. Marianne Weber","label":"Special"} -->

#### GA-en-76a391 · Gegner „Liese Hartmann“, Zeile „Special“ · Band S. 68 · prüfen
Freigabe: ja

- alt: Disappears at 0 HP and returns the next night as long as her reason is not resolved. She is not bound to a place, but to the crystal. Whoever places the crystal in beryllium banishes her for a while.
- neu: Disappears at 0 HP and returns the next night as long as the reason for her haunting is unresolved. She is not bound to a place, but to the crystal. Whoever places the crystal in the beryllium container banishes her for a while.
- Änderung: «(nichts)» → «the reason for»; «reason» → «haunting»; «not resolved.» → «unresolved.»; «(nichts)» → «the»; «(nichts)» → «container»
<!-- daten: {"art":"gegner","name":"Liese Hartmann","label":"Special"} -->

#### GA-en-a6584a · Gegner „Liese Hartmann“, Zeile „Weakness“ · Band S. 68 · prüfen
Freigabe: ja

- alt: Salt, bright light, silver. She disappears permanently when the cell finds her open ending: the name of the father, the date of death, the grave, the truth.
- neu: Salt, bright light, silver. She disappears permanently when the cell finds her unfinished business: the name of the father, the date of death, the grave, the truth.
- Änderung: «open ending:» → «unfinished business:»
<!-- daten: {"art":"gegner","name":"Liese Hartmann","label":"Weakness"} -->

#### GA-en-a39155 · Gegner „Rhys Bowen“, Zeile „Special“ · Band S. 32 · prüfen
Freigabe: ja

- alt: His psionic potential has awakened, but is not open. He has heard the name “Evan Pryce” in dreams since his childhood. When he touches the visor, he hears the sentence: “Do not enclose.”
- neu: His psionic potential has awakened, but has not been opened. He has heard the name “Evan Pryce” in dreams since his childhood. When he touches the visor, he hears the sentence: “Do not enclose.”
- Änderung: «is» → «has»; «open.» → «been opened.»
<!-- daten: {"art":"gegner","name":"Rhys Bowen","label":"Special"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Riftling“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: What Remains.
- Gegner „Riftlings“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: What Remains.
- Gegner „Evan Pryce as a Haunting“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special feature, Weakness, Traces, Behaviour, Encounter, What remains.
