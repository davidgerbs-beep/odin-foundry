# Korrekturvorschläge: Graue Akten (Nachlauf)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege graue-akten --nachlauf` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `graue-akten.md` mit ihren Entscheidungen bleibt, wie sie ist; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden graue-akten` nimmt beide Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden graue-akten --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_14_Graue_Akten (Seiten 81, Prüfsumme 27f6f78f2cd2), ODIN_14_Graue_Akten_Handouts (Seiten 26, Prüfsumme 848582a040e3).

Journalseiten 158, Sätze 2470, davon gleich 2460, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 1 (sicher 1). Als Fehltreffer aussortiert: Spaltenumbruch 2, Nachbartext 1.
Gegner 20 mit 147 Zeilen, gleich 139; Vorschläge 0.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### GA-de-e57b5d · „02 Fundort“ › „Handouts und Karte“ · Band S. 23 · sicher
Freigabe: ja

- alt: Karte 2: Untergeschoss von Hort-9 mit Kellerflur, Raum 4/12, Flur aus dem Jahr 1977, Raum hinter der Tür, Treppenhaus, Technikraum und den Räumen 4/06 bis 4/11.
- neu: Karte 2: Untergeschoss von Hort-9 mit Kellerflur, Raum 4/12, Flur aus dem Jahr 1977, Raum hinter der Tür, Treppenhaus, einem Nebenraum und den Räumen 4/06 bis 4/11, darunter der Technikraum (4/10).
- Änderung: «Technikraum» → «einem Nebenraum»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Handouts und Karte"]]} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Evan Pryce als Spuk“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit, Schwäche, Spuren, Verhalten, Begegnung, Was bleibt.

## Englisch

Bände: ODIN_EN_14_Grey_Files (Seiten 79, Prüfsumme 426628108af2), ODIN_EN_14_Grey_Files_Handouts (Seiten 26, Prüfsumme b4511790ec28).

Journalseiten 158, Sätze 2377, davon gleich 2352, im Band nicht gefunden 9 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 7 (sicher 6). Als Fehltreffer aussortiert: Nachbartext 6, Spaltenumbruch 4.
Gegner 20 mit 147 Zeilen, gleich 134; Vorschläge 4.
Hinweise ohne Vorschlag: 2.

### Journalsätze

#### GA-en-04bc84 · „02 Find Site“ › „Handouts and Map“ · Band S. 23 · sicher
Freigabe: ja

- alt: Map 2: Basement of Hold-9 with cellar corridor, room 4/12, corridor from 1977, room behind the door, stairwell, technical room, and rooms 4/06 to 4/11.
- neu: Map 2: Basement of Hold-9 with cellar corridor, room 4/12, corridor from 1977, room behind the door, stairwell, a side room and rooms 4/06 to 4/11, among them the technical room (4/10).
- Änderung: «technical room,» → «a side room»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","Handouts and Map"]]} -->

#### GA-en-ce2d5a · „03 Number 341“ › „Node 5: The Foster Family in Splott“ · Band S. 29 · sicher
Freigabe: ja

- alt: Clue for Psion: A Psion who examines Rhys with Deep Inquiry (Doable, 3 PSI, touch) sees the moment the name came: a humming, a cottage, an old man holding the visor (leads to Evan Pryce, to the cottage in Snowdonia).
- neu: Clue for Psion: A Psion who examines Rhys with Deep Probe (Doable, 3 PSI, touch) sees the moment the name came: a humming, a cottage, an old man holding the visor (leads to Evan Pryce, to the cottage in Snowdonia).
- Änderung: «Inquiry» → «Probe»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 5: The Foster Family in Splott"]]} -->

#### GA-en-f0f5b0 · „03 Number 341“ › „Node 5: The Foster Family in Splott“ · Band S. 29 · prüfen
Freigabe: ja

- alt: Empathy against Doable (2) to realise that Rhys is telling the truth but holding something back.
- neu: Insight against Doable (2) to realise that Rhys is telling the truth but holding something back.
- Änderung: «Empathy» → «Insight»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 5: The Foster Family in Splott"]]} -->

#### GA-en-80195a · „03 Number 341“ › „Opponents“ · Band S. 31 · sicher
Freigabe: ja

- alt: Attack Hammer 2 + 1, damage 2, or shotgun 2 + 2, damage 4, scatter, under the counter
- neu: Attack Hammer 2 + 1, damage 2, or shotgun 2 + 2, damage 4, Spread, under the counter
- Änderung: «scatter,» → «Spread,»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Opponents"]]} -->

#### GA-en-06636c · „03 Number 341“ › „Opponents“ · Band S. 32 · sicher
Freigabe: ja

- alt: Attack Escort blade 4 + 3, damage 2, 3 against creatures from rifts, or service pistol 4 + 3, damage 3
- neu: Attack Escort blade 4 + 3, damage 2, 3 against beings from rifts, or service pistol 4 + 3, damage 3
- Änderung: «creatures» → «beings»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Opponents"]]} -->

#### GA-en-7851f0 · „06 The Tutor“ › „Aftermath“ · Band S. 59 · sicher
Freigabe: ja

- alt: Skulls: The lodge Zum Schweigenden Kreis loses one skull when the cell exposes Sundberg and the stone is secured.
- neu: Skulls: The Lodge of the Silent Circle loses one skull when the cell exposes Sundberg and the stone is secured.
- Änderung: «lodge Zum Schweigenden Kreis» → «Lodge of the Silent Circle»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","Aftermath"]]} -->

#### GA-en-0c213d · „08 The Second Light“ › „The Confrontation“ · Band S. 76 · sicher
Freigabe: ja

- alt: A Thaumaturge can seal the circle with salt and a banishing circle if they succeed on a Ritualism test against Hard (3).
- neu: A Thaumaturge can seal the circle with salt and a warding circle if they succeed on a Ritualism test against Hard (3).
- Änderung: «banishing» → «warding»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","The Confrontation"]]} -->

### Gegnerwerte

#### GA-en-99b334 · Gegner „Owen Gwynne“, Zeile „Attack“ · Band S. 31 · prüfen
Freigabe: ja

- alt: Hammer 2 + 1, damage 2, or shotgun 2 + 2, damage 4, scatter, under the counter
- neu: Hammer 2 + 1, damage 2, or shotgun 2 + 2, damage 4, Spread, under the counter
- Änderung: «scatter,» → «Spread,»
<!-- daten: {"art":"gegner","name":"Owen Gwynne","label":"Attack"} -->

#### GA-en-5e6b7b · Gegner „Mr Hartley“, Zeile „Attack“ · Band S. 31 · prüfen
Freigabe: ja

- alt: Compact pistol 3 + 2, damage 2, concealed, or cosh 2 + 2, damage 2, Stunning, Concealed
- neu: Compact pistol 3 + 2, damage 2, concealed, or cosh 2 + 2, damage 2, Stun, Concealed
- Änderung: «Stunning,» → «Stun,»
<!-- daten: {"art":"gegner","name":"Mr Hartley","label":"Attack"} -->

#### GA-en-ad42f5 · Gegner „Viktor Brunner, called Martin Kessler“, Zeile „Attack“ · Band S. 41 · prüfen
Freigabe: ja

- alt: Silenced pistol 4 + 4, damage 3, Silent
- neu: Silenced pistol 4 + 4, damage 3, Quiet
- Änderung: «Silent» → «Quiet»
<!-- daten: {"art":"gegner","name":"Viktor Brunner, called Martin Kessler","label":"Attack"} -->

#### GA-en-a3feea · Gegner „Daniel Keane“, Zeile „Attack“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Escort blade 4 + 3, damage 2, 3 against creatures from rifts, or service pistol 4 + 3, damage 3
- neu: Escort blade 4 + 3, damage 2, 3 against beings from rifts, or service pistol 4 + 3, damage 3
- Änderung: «creatures» → «beings»
<!-- daten: {"art":"gegner","name":"Daniel Keane","label":"Attack"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Hand“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Attack.
- Gegner „Evan Pryce as a Haunting“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special feature, Weakness, Traces, Behaviour, Encounter, What remains.
