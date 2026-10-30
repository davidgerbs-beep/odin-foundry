# Korrekturvorschläge: Einstiegsmission Nexus-Splitter (Grundregelwerk) (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege einstiegsmission --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `einstiegsmission.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden einstiegsmission` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden einstiegsmission --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_01_Grundregelwerk (Seiten 92, Prüfsumme a910c8af5289).

Journalseiten 10, Sätze 106, davon gleich 100, im Band nicht gefunden 6 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: keine.
Gegner 4 mit 4 Zeilen, gleich 4; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

## Englisch

Bände: ODIN_EN_01_Core_Rulebook (Seiten 89, Prüfsumme 7d5fad3bcf2b).

Journalseiten 10, Sätze 98, davon gleich 89, im Band nicht gefunden 5 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 4 (sicher 2). Als Fehltreffer aussortiert: keine.
Gegner 4 mit 4 Zeilen, gleich 4; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### EM-en-ac6258 · „Nexus Shard“ › „Source Story: A Perfectly Normal Day at O.D.I.N.“ · Band S. 10 · sicher
Freigabe: ja

- alt: Lee, who as a scientist for supernatural phenomena knew more than is healthy; Richter, our sniper, who does not speak much but hits everything; and Jensen, our psionicist, who can read minds.
- neu: Lee, who as a scientist specializing in supernatural phenomena knew more than is healthy; Richter, our sniper, who does not speak much but hits everything; and Jensen, our psionicist, who can read minds.
- Änderung: «for» → «specializing in»
<!-- daten: {"art":"satz","fundstellen":[["Nexus Shard","Source Story: A Perfectly Normal Day at O.D.I.N."]]} -->

#### EM-en-14fff9 · „Nexus Shard“ › „Rules at Hand“ · Band S. 53 · prüfen, umformuliert
Freigabe: ja

- alt: If it fails , they suffer as much strain as successes were missing, at least 1.
- neu: If it fails , they suffer strain equal to the number of missing successes, at least 1.
- Änderung: «as much» → «(gestrichen)»; «as successes were missing,» → «equal to the number of missing successes,»
<!-- daten: {"art":"satz","fundstellen":[["Nexus Shard","Rules at Hand"]]} -->

#### EM-en-3b9298 · „Nexus Shard“ › „Overview“ · Band S. 76 · prüfen
Freigabe: ja

- alt: This short mission is suitable for the first game evening.
- neu: This short mission is suitable for the first game night.
- Änderung: «evening.» → «night.»
<!-- daten: {"art":"satz","fundstellen":[["Nexus Shard","Overview"]]} -->

#### EM-en-e9c213 · „Nexus Shard“ › „Scene 3: The Transformation“ · Band S. 76 · sicher
Freigabe: ja

- alt: As long as it is not isolated, anyone who touches it with bare hands suffers 1 strain per round.
- neu: As long as it is not insulated, anyone who touches it with bare hands suffers 1 strain per round.
- Änderung: «isolated,» → «insulated,»
<!-- daten: {"art":"satz","fundstellen":[["Nexus Shard","Scene 3: The Transformation"]]} -->
