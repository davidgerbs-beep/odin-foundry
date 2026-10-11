# Korrekturvorschläge: Graue Akten

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege graue-akten` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden graue-akten --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_14_Graue_Akten (Seiten 81, Prüfsumme 1ea5ade28cc5), ODIN_14_Graue_Akten_Handouts (Seiten 26, Prüfsumme 848582a040e3).

Journalseiten 158, Sätze 2422, davon gleich 2285, im Band nicht gefunden 62 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 67 (sicher 36). Als Fehltreffer aussortiert: Zahl aus dem Satz 1, Rand 1, Spaltenumbruch 3, Nachbartext 1.
Gegner 20 mit 147 Zeilen, gleich 136; Vorschläge 3.
Hinweise ohne Vorschlag: 1.

### Journalsätze

#### GA-de-9d5107 · „Graue Akten: Einleitung“ › „Die acht Akten“ · Band S. 6 · sicher
Freigabe: ja

- alt: In einer Basler Stiftung sitzt seit vier Jahren ein stiller Buchhalter.
- neu: In einer Basler Stiftung saß vier Jahre lang ein stiller Buchhalter.
- Änderung: «sitzt seit» → «saß»; «Jahren» → «Jahre lang»
<!-- daten: {"art":"satz","fundstellen":[["Graue Akten: Einleitung","Die acht Akten"]]} -->

#### GA-de-78262d · „Graue Akten: Einleitung“ › „Die acht Akten“ · Band S. 6 · prüfen
Freigabe: ja

- alt: Vor sechs Monaten wurde er krank, jetzt ist er zurück, und eine Kollegin glaubt ihm seine Gedächtnislücken nicht.
- neu: Im März 2025 wurde er krank, im Januar kam er zurück, und eine Kollegin glaubt ihm seine Gedächtnislücken nicht.
- Änderung: «Vor sechs Monaten» → «Im März 2025»; «jetzt ist» → «im Januar kam»
<!-- daten: {"art":"satz","fundstellen":[["Graue Akten: Einleitung","Die acht Akten"]]} -->

#### GA-de-662edb · „01 Pflegefall“ › „Was wirklich geschah“ · Band S. 8 · sicher
Freigabe: ja

- alt: Vor drei Wochen fand er am Elbufer einen kleinen, milchigen Kristall, der das Summen dämpfte, wenn er ihn festhielt.
- neu: Vor drei Wochen fand er am Elbufer einen kleinen, milchigen Kristall, der das Summen dämpfte, solange er ihn festhielt.
- Änderung: «wenn» → «solange»
<!-- daten: {"art":"satz","fundstellen":[["01 Pflegefall","Was wirklich geschah"]]} -->

#### GA-de-c43074 · „01 Pflegefall“ › „Personen“ · Band S. 9 · prüfen
Freigabe: ja

- alt: Verschweigt, dass er die Polizei doch gerufen hat, weil er den Vossens nicht traut.
- neu: Verschweigt, dass er gestern Abend wegen des Aquariums doch die Polizei gerufen hat, weil er den Vossens nicht traut.
- Änderung: «(nichts)» → «gestern Abend wegen des Aquariums doch»; «doch» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["01 Pflegefall","Personen"]]} -->

#### GA-de-203491 · „01 Pflegefall“ › „Knoten 2: Linus’ Zimmer“ · Band S. 11 · sicher
Freigabe: ja

- alt: Hinweis: Der Rucksack fehlt, die S-Bahn-Karte ist weg (führt zu Linus’ Aufenthaltsort, Schlussfolgerung 3).
- neu: Hinweis: Der Rucksack fehlt, die Spardose ist leer (führt zu Linus’ Aufenthaltsort, Schlussfolgerung 3).
- Änderung: «S-Bahn-Karte» → «Spardose»; «weg» → «leer»
<!-- daten: {"art":"satz","fundstellen":[["01 Pflegefall","Knoten 2: Linus’ Zimmer"]]} -->

#### GA-de-ac2912 · „01 Pflegefall“ › „Knoten 4: S-Bahn-Station Neugraben“ · Band S. 11 · sicher
Freigabe: ja

- alt: Kleine Station, ein Kiosk, eine Überwachungskamera.
- neu: Kleine Station, ein Kiosk, vier Überwachungskameras.
- Änderung: «eine Überwachungskamera.» → «vier Überwachungskameras.»
<!-- daten: {"art":"satz","fundstellen":[["01 Pflegefall","Knoten 4: S-Bahn-Station Neugraben"]]} -->

#### GA-de-ac5e36 · „01 Pflegefall“ › „Nachspiel“ · Band S. 14 · sicher
Freigabe: ja

- alt: Der Schleier: Die Nachbarn haben das kochende Aquarium gesehen, aber die Polizei wurde nicht gerufen, außer von Herrn Kowalski, der einen Einbruch meldete.
- neu: Der Schleier: Die Nachbarn haben das kochende Aquarium gesehen, aber die Polizei wurde nicht gerufen, außer von Herrn Kowalski, der vor zwei Wochen einen Einbruch meldete und gestern Abend die Streife rief.
- Änderung: «(nichts)» → «vor zwei Wochen»
<!-- daten: {"art":"satz","fundstellen":[["01 Pflegefall","Nachspiel"]]} -->

#### GA-de-015ca4 · „02 Fundort“ › „Was wirklich geschah“ · Band S. 17 · prüfen, umformuliert
Freigabe: ja

- alt: Der Bauplan von 1991 zeigt zwölf Räume im Untergeschoss.
- neu: Der Umbauplan von 1991 übernimmt die Zählung des alten Luftschutzkellers und zeigt zwölf Räume im Untergeschoss.
- Änderung: «Bauplan» → «Umbauplan»; «(nichts)» → «übernimmt die Zählung des alten Luftschutzkellers und»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Was wirklich geschah"]]} -->

#### GA-de-d29267 · „02 Fundort“ › „Personen“ · Band S. 18 · prüfen, umformuliert
Freigabe: ja

- alt: Ihr Vater wartet die Heizungsanlage des Horts, und sie begleitet ihn manchmal in den Keller.
- neu: Ihr Vater hilft Marta Nováková bei der Wartung der Heizung, und sie begleitet ihn manchmal in den Keller.
- Änderung: «wartet die Heizungsanlage des Horts,» → «hilft Marta Nováková bei der Wartung der Heizung,»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Personen"]]} -->

#### GA-de-c1ef24 · „02 Fundort“ › „Knoten 1: Das Hortarchiv“ · Band S. 19 · sicher
Freigabe: ja

- alt: Hinweis: Der aktuelle Grundriss zeigt elf Räume, aber der Bauplan von 1991 zeigt zwölf.
- neu: Hinweis: Der aktuelle Grundriss zeigt elf Räume, aber der Umbauplan von 1991 zeigt zwölf.
- Änderung: «Bauplan» → «Umbauplan»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Knoten 1: Das Hortarchiv"]]} -->

#### GA-de-58d1d9 · „02 Fundort“ › „Knoten 1: Das Hortarchiv“ · Band S. 19 · prüfen, umformuliert
Freigabe: ja

- alt: Hinweis: Ein Begehungsprotokoll von 1992 erwähnt „Unregelmäßigkeiten im Untergeschoss, Raum 4/12 nicht betreten“ (Handout 2.2).
- neu: Hinweis: Ein Begehungsprotokoll von 1992 vermerkt: „Raum 4/12 nicht betreten. Tür verschlossen, Schlüssel nicht auffindbar.“
- Änderung: «erwähnt „Unregelmäßigkeiten im Untergeschoss, Raum» → «vermerkt: „Raum»; «betreten“ (Handout 2.2).» → «betreten. Tür verschlossen, Schlüssel nicht auffindbar.“»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Knoten 1: Das Hortarchiv"]]} -->

#### GA-de-aa121b · „02 Fundort“ › „Knoten 4: Der Kellerflur vor Raum 4/12“ · Band S. 20 · sicher
Freigabe: ja

- alt: Probe: Wahrnehmung oder Telepathie gegen Schwer (3), um die Stille zu spüren.
- neu: Probe: Wahrnehmung oder Telepathie gegen Schwer (3), um das Echo zu spüren.
- Änderung: «die Stille» → «das Echo»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Knoten 4: Der Kellerflur vor Raum 4/12"]]} -->

#### GA-de-acb0ab · „02 Fundort“ › „Die Konfrontation“ · Band S. 21 · sicher
Freigabe: ja

- alt: Ein Thaumaturg kann den Stein untersuchen, ein Scientist kann die Geometrie des Raums vermessen, ein Psion kann die Stille spüren.
- neu: Ein Thaumaturg kann den Stein untersuchen, ein Scientist kann die Geometrie des Raums vermessen, ein Psion kann das Echo spüren.
- Änderung: «die Stille» → «das Echo»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Die Konfrontation"]]} -->

#### GA-de-b030d4 · „02 Fundort“ › „Gegner“ · Band S. 22 · sicher
Freigabe: ja

- alt: Er ist ein Handlanger der Stimme und sickert durch die Tür am Ende des Flurs, aber er ist nicht der eigentliche Gegner.
- neu: Er ist ein Handlanger der Stimme und sickert durch die Tür des Archivraums, aber er ist nicht der eigentliche Gegner.
- Änderung: «am Ende» → «(gestrichen)»; «Flurs,» → «Archivraums,»
<!-- daten: {"art":"satz","fundstellen":[["02 Fundort","Gegner"]]} -->

#### GA-de-8d0a69 · „03 Nummer 341“ › „Personen“ · Band S. 27 · sicher
Freigabe: ja

- alt: Verschweigt, dass er seit seiner Dienstzeit nachts Stimmen hört, wenn er sein Silber berührt.
- neu: Verschweigt, dass er seit seiner Dienstzeit nachts Stimmen hört, wenn er Silber berührt.
- Änderung: «sein» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Personen"]]} -->

#### GA-de-2dc799 · „03 Nummer 341“ › „Knoten 1: Das Pfandhaus in Grangetown“ · Band S. 28 · sicher
Freigabe: ja

- alt: Hinweis für Investigator: Ein Abgleich der Nummer 341 mit alten Akten des Ermittlungszweigs zeigt, dass die Nummer in einer Liste von Aschesilberstücken aus Hort-2 auftaucht, die 1989 als verschlossen gemeldet wurden (führt zu Hort-2, zum Rüstmeister).
- neu: Hinweis für Investigator: Ein Abgleich der Nummer 341 mit alten Akten des Ermittlungszweigs zeigt, dass die Nummer in einer Liste von Aschesilberstücken aus Hort-2 auftaucht, die 1989 als verschollen gemeldet wurden (führt zu Hort-2, zum Rüstmeister).
- Änderung: «verschlossen» → «verschollen»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Knoten 1: Das Pfandhaus in Grangetown"]]} -->

#### GA-de-f070ba · „03 Nummer 341“ › „Knoten 2: Hort-2, die Werkstatt“ · Band S. 28 · prüfen
Freigabe: ja

- alt: Hinweis: Der Rüstmeister bestätigt, dass das Visier seit 1989 fehlt und von seinem Großvater Evan Pryce geschmiedet wurde (führt zu Was wirklich geschah).
- neu: Hinweis: Der Rüstmeister bestätigt, dass das Visier seit 1989 fehlt und von seinem Großvater Evan Pryce geschmiedet wurde (führt zu Was ist geschehen?).
- Änderung: «wirklich geschah).» → «ist geschehen?).»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Knoten 2: Hort-2, die Werkstatt"]]} -->

#### GA-de-8e370a · „03 Nummer 341“ › „Knoten 2: Hort-2, die Werkstatt“ · Band S. 28 · prüfen
Freigabe: ja

- alt: Proben: Nachhall gegen Schwer (3), um zu spüren, dass das Silber im Hort unruhig ist, seit das Visier wieder aufgetaucht ist.
- neu: Ein Nachhall-Wurf in der Werkstatt zeigt, dass das Silber im Hort unruhig ist, seit das Visier wieder aufgetaucht ist.
- Änderung: «Proben: Nachhall gegen Schwer (3), um zu spüren,» → «Ein Nachhall-Wurf in der Werkstatt zeigt,»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Knoten 2: Hort-2, die Werkstatt"]]} -->

#### GA-de-ad0d1f · „03 Nummer 341“ › „Knoten 3: Die Straße vor dem Pfandhaus“ · Band S. 29 · sicher
Freigabe: ja

- alt: Hinweis: Keane hat gesehen, wie ein Mann in einem dunklen Mantel den Laden betrat, mit Gwynne sprach und mit leeren Händen wieder ging (führt zu Miriam Hale, zum Kunsthändler aus Bath).
- neu: Hinweis: Keane hat gesehen, wie ein Mann in einem dunklen Mantel den Laden betrat, mit Gwynne sprach und mit leeren Händen wieder ging (führt zu Knoten 4, zum Kunsthändler aus Bath).
- Änderung: «Miriam Hale,» → «Knoten 4,»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Knoten 3: Die Straße vor dem Pfandhaus"]]} -->

#### GA-de-61519d · „03 Nummer 341“ › „Eskalation“ · Band S. 30 · sicher
Freigabe: ja

- alt: In der Nacht klingelt im Pfandhaus nicht nur das Telefon, sondern auch die alte Registrierkasse.
- neu: In der Nacht klingelt im Pfandhaus das Telefon, und mit ihm die alte Registrierkasse.
- Änderung: «nicht nur» → «(gestrichen)»; «sondern auch» → «und mit ihm»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Eskalation"]]} -->

#### GA-de-0e8425 · „03 Nummer 341“ › „Gegner“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Grauen Unheimlich (1), wenn der Spuk erscheint
- neu: Würfelt selbst gegen Unheimlich (1), wenn der Spuk erscheint
- Änderung: «Grauen» → «Würfelt selbst gegen»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Gegner"]]} -->

#### GA-de-5906e1 · „03 Nummer 341“ › „Gegner“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Angriff Kompaktpistole 3 + 2, Schaden 2, Verdeckt, oder Betäubungsstab 2 + 2, Schaden 1, betäubt
- neu: Angriff Kompaktpistole 3 + 2, Schaden 2, Verdeckt, oder Totschläger 2 + 2, Schaden 2, Betäubend, Verdeckt
- Änderung: «Betäubungsstab» → «Totschläger»; «1, betäubt» → «2, Betäubend»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Gegner"]]} -->

#### GA-de-b310e1 · „03 Nummer 341“ › „Gegner“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Angriff Klinge der Eskorte 4 + 3, Schaden 3, oder Dienstpistole 4 + 3, Schaden 3
- neu: Angriff Klinge der Eskorte 4 + 3, Schaden 2, 3 gegen Wesen aus Rissen, oder Dienstpistole 4 + 3, Schaden 3
- Änderung: «3,» → «3 gegen Wesen aus Rissen,»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Gegner"]]} -->

#### GA-de-e05f41 · „03 Nummer 341“ › „Gegner“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Grauen Unheimlich (1), wenn der Spuk erscheint.
- neu: Würfelt selbst gegen Unheimlich (1), wenn der Spuk erscheint.
- Änderung: «Grauen» → «Würfelt selbst gegen»
<!-- daten: {"art":"satz","fundstellen":[["03 Nummer 341","Gegner"]]} -->

#### GA-de-a0f223 · „04 Kessler“ › „Worum es geht“ · Band S. 36 · sicher
Freigabe: ja

- alt: In der Buchhaltung arbeitet seit vier Jahren Martin Kessler, ein stiller Mann mit einer Krawatte mit Rentieren.
- neu: In der Buchhaltung arbeitete vier Jahre lang Martin Kessler, ein stiller Mann mit einer Krawatte mit Rentieren.
- Änderung: «arbeitet seit» → «arbeitete»; «Jahren» → «Jahre lang»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Worum es geht"]]} -->

#### GA-de-544c8d · „04 Kessler“ › „Was wirklich geschah“ · Band S. 36 · prüfen
Freigabe: ja

- alt: Kuckuck fand das Foto und meldete es.
- neu: Kuckuck fand das Bild, nahm es mit und meldete es.
- Änderung: «Foto» → «Bild, nahm es mit»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Was wirklich geschah"]]} -->

#### GA-de-ad345e · „04 Kessler“ › „Was wirklich geschah“ · Band S. 37 · sicher
Freigabe: ja

- alt: Die Akte ist unvollständig, und Brunner glaubt, dass Elster den Kristall nicht in Blei eingeschlossen hat, sondern für sich behalten will.
- neu: Die Akte ist unvollständig, und Brunner glaubt, dass Elster den Kristall nicht ins Bleiarchiv der Stiftung gebracht hat, sondern für sich behalten will.
- Änderung: «in Blei eingeschlossen» → «ins Bleiarchiv der Stiftung gebracht»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Was wirklich geschah"]]} -->

#### GA-de-142e2d · „04 Kessler“ › „Personen“ · Band S. 37 · prüfen
Freigabe: ja

- alt: Sie verschweigt, dass sie das Foto vom Sommerfest absichtlich abgelegt hat.
- neu: Sie verschweigt, dass sie die Fotos vom Sommerfest absichtlich in den Keller stellen ließ.
- Änderung: «das Foto» → «die Fotos»; «abgelegt hat.» → «in den Keller stellen ließ.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Personen"]]} -->

#### GA-de-244e84 · „04 Kessler“ › „Briefing“ · Band S. 38 · prüfen
Freigabe: ja

- alt: Rückkehr gemeldet von Sabine Wirz.“
- neu: Rückkehr im Januar 2026, gemeldet von Sabine Wirz.“
- Änderung: «(nichts)» → «im Januar 2026,»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Briefing"]]} -->

#### GA-de-e6b2b2 · „04 Kessler“ › „Knoten 1: Die Stiftung“ · Band S. 38 · sicher
Freigabe: ja

- alt: Ein Investigator mit Ermittlung oder ein Agent mit Täuschung erkennt die Abweichung.
- neu: Ein Investigator mit Ermittlung oder ein Agent mit Menschenkenntnis erkennt die Abweichung.
- Änderung: «Täuschung» → «Menschenkenntnis»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 1: Die Stiftung"]]} -->

#### GA-de-ba95a7 · „04 Kessler“ › „Knoten 1: Die Stiftung“ · Band S. 38 · sicher
Freigabe: ja

- alt: Ermittlung gegen Machbar (2), um das Foto zu finden.
- neu: Ermittlung gegen Machbar (2), um den Ordner zu finden.
- Änderung: «das Foto» → «den Ordner»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 1: Die Stiftung"]]} -->

#### GA-de-6ebba0 · „04 Kessler“ › „Knoten 2: Das Foto“ · Band S. 38 · prüfen
Freigabe: ja

- alt: Das Foto vom Sommerfest 2024, aufgenommen im Innenhof der Stiftung.
- neu: Das Foto vom Sommerfest 2024, aufgenommen im Garten der Villa des Direktors.
- Änderung: «Innenhof» → «Garten»; «Stiftung.» → «Villa des Direktors.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 2: Das Foto"]]} -->

#### GA-de-48f469 · „04 Kessler“ › „Knoten 2: Das Foto“ · Band S. 38 · sicher
Freigabe: ja

- alt: Es zeigt Martin Kessler mit einer Krawatte mit Rentieren, ein Glas in der Hand, ein Lächeln, das nicht ganz zu ihm passt.
- neu: Es zeigt Martin Kessler mit der Krawatte mit Rentieren und einem Lächeln, das nicht ganz zu ihm passt.
- Änderung: «einer» → «der»; «Rentieren, ein Glas in der Hand, ein» → «Rentieren und einem»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 2: Das Foto"]]} -->

#### GA-de-4395ab · „04 Kessler“ › „Knoten 2: Das Foto“ · Band S. 38 · sicher
Freigabe: ja

- alt: Hinweis: Ein Investigator mit Ermittlung oder ein Agent mit Täuschung erkennt, dass der Mann auf dem Foto nicht derselbe ist wie der Mann, der heute in der Stiftung arbeitet.
- neu: Hinweis: Ein Investigator mit Ermittlung oder ein Agent mit Menschenkenntnis erkennt, dass der Mann auf dem Foto nicht derselbe ist wie der Mann, der heute in der Stiftung arbeitet.
- Änderung: «Täuschung» → «Menschenkenntnis»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 2: Das Foto"]]} -->

#### GA-de-d4e0d0 · „04 Kessler“ › „Knoten 2: Das Foto“ · Band S. 38 · sicher
Freigabe: ja

- alt: Ein Investigator mit Ermittlung oder ein Agent mit Täuschung erkennt, dass die Handschrift alt ist, sehr alt.
- neu: Ein Investigator mit Ermittlung oder ein Agent mit Wahrnehmung erkennt, dass die Handschrift alt ist, sehr alt.
- Änderung: «Täuschung» → «Wahrnehmung»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 2: Das Foto"]]} -->

#### GA-de-af1e28 · „04 Kessler“ › „Knoten 2: Das Foto“ · Band S. 38 · prüfen
Freigabe: ja

- alt: Ein Investigator mit Ermittlung erkennt, dass jemand es dort abgelegt hat, wo er es finden würde.
- neu: Ein Investigator mit Ermittlung erkennt, dass jemand ihn dort abgestellt hat, wo ein Buchhalter ihn finden würde.
- Änderung: «es» → «ihn»; «abgelegt» → «abgestellt»; «er es» → «ein Buchhalter ihn»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 2: Das Foto"]]} -->

#### GA-de-204ac5 · „04 Kessler“ › „Knoten 3: Elsters Haus“ · Band S. 39 · sicher
Freigabe: ja

- alt: Ein altes Haus im Basler Quartier Gundeldingen, nahe der Gellertkirche, mit einem Garten, in dem Rosen wachsen, und einer Tür, die nie abgeschlossen ist.
- neu: Ein altes Haus im Basler Quartier Gundeldingen, nahe der Heiliggeistkirche, mit einem Garten, in dem Rosen wachsen, und einer Tür, die nie abgeschlossen ist.
- Änderung: «Gellertkirche,» → «Heiliggeistkirche,»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 3: Elsters Haus"]]} -->

#### GA-de-ce5db7 · „04 Kessler“ › „Knoten 3: Elsters Haus“ · Band S. 39 · prüfen
Freigabe: ja

- alt: Hinweis: Elster sagt: „Sagen Sie Ihrem Führungsoffizier, dass ich die Legende Renate Albers seit 1952 trage.
- neu: Hinweis: Elster sagt: „Sagen Sie Ihrem Führungsoffizier, dass ich die Legende Renate Albers seit 1989 trage und dass sie 1952 für mich geschrieben wurde.
- Änderung: «(nichts)» → «1989 trage und dass sie»; «trage.» → «für mich geschrieben wurde.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 3: Elsters Haus"]]} -->

#### GA-de-84a0b1 · „04 Kessler“ › „Knoten 4: Die Druckerei in Zürich“ · Band S. 39 · sicher
Freigabe: ja

- alt: Ein Agent oder Investigator findet den Vermerk: „Übergabe an Retrieval, Januar 2026.“ (führt zu Knoten 5)
- neu: Ein Agent oder Investigator findet den Vermerk: „Übergabe an Retrieval, Januar 2026. Neuer Träger: V. B.“ (führt zu Knoten 5)
- Änderung: «2026.“» → «2026. Neuer Träger: V. B.“»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 4: Die Druckerei in Zürich"]]} -->

#### GA-de-fcec08 · „04 Kessler“ › „Knoten 5: Der tote Briefkasten“ · Band S. 39 · sicher
Freigabe: ja

- alt: Ein Agent mit Zugang zum toten Briefkasten des Zweigs findet die Handschrift eines Sekretärs von Prometheus.
- neu: Ein Agent mit Zugang zu den Unterlagen des Zweigs findet die Handschrift eines Sekretärs von Prometheus.
- Änderung: «zum toten Briefkasten» → «zu den Unterlagen»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 5: Der tote Briefkasten"]]} -->

#### GA-de-fc961f · „04 Kessler“ › „Knoten 5: Der tote Briefkasten“ · Band S. 39 · sicher
Freigabe: ja

- alt: Hinweis: In Mulhouse warten zwei Männer der Hände.
- neu: Hinweis: In Mulhouse warteten zwei Männer der Hände.
- Änderung: «warten» → «warteten»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 5: Der tote Briefkasten"]]} -->

#### GA-de-09aca6 · „04 Kessler“ › „Knoten 5: Der tote Briefkasten“ · Band S. 41 · prüfen
Freigabe: ja

- alt: Ein Agent mit Heimlichkeit findet ihn.
- neu: Das Schließfach findet ein Agent, der Brunner mit Heimlichkeit folgt.
- Änderung: «findet ihn.» → «gegen Schwer (3) ebenfalls.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Knoten 5: Der tote Briefkasten"]]} -->

#### GA-de-1e8d85 · „04 Kessler“ › „Die Konfrontation“ · Band S. 41 · prüfen
Freigabe: ja

- alt: Lösungsweg ohne Kampf: Die Zelle konfrontiert Brunner mit dem Foto vom Sommerfest und der fehlenden Krankenakte.
- neu: Lösungsweg ohne Kampf: Die Zelle konfrontiert Brunner mit dem Foto vom Sommerfest und den fehlenden Attesten.
- Änderung: «der» → «den»; «Krankenakte.» → «Attesten.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Die Konfrontation"]]} -->

#### GA-de-33f79d · „04 Kessler“ › „Handouts und Karte“ · Band S. 42 · prüfen, umformuliert
Freigabe: ja

- alt: Handout 4.1: Das Foto vom Sommerfest, in Knoten 2, in einer Schublade in der Buchhaltung der Stiftung.
- neu: Handout 4.1: Das Foto vom Sommerfest, in Knoten 1 und 2, im Ordner im Keller der Stiftung.
- Änderung: «(nichts)» → «1 und»; «in einer Schublade in der Buchhaltung» → «im Ordner im Keller»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Handouts und Karte"]]} -->

#### GA-de-27e05c · „04 Kessler“ › „Handouts und Karte“ · Band S. 42 · prüfen, umformuliert
Freigabe: ja

- alt: Handout 4.3: Der Vermerk in der Akte, in Knoten 4, in der Registratur der Druckerei, in der Akte von Kuckuck.
- neu: Handout 4.3: Der Kadett-Vermerk, ein Auszug der Registratur, in Knoten 4, im Archiv der Druckerei, in der Akte von Kuckuck.
- Änderung: «Vermerk in» → «Kadett-Vermerk, ein Auszug»; «Akte,» → «Registratur,»; «in der Registratur» → «im Archiv»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Handouts und Karte"]]} -->

#### GA-de-376664 · „05 Zweiter Kreis“ › „Was wirklich geschah“ · Band S. 46 · sicher
Freigabe: ja

- alt: In Wahrheit riskiert sie ihre Gesundheit.
- neu: In Wahrheit riskiert sie die Gesundheit der beiden: Jede weitere Woche macht sie träger und blasser.
- Änderung: «ihre» → «die»
<!-- daten: {"art":"satz","fundstellen":[["05 Zweiter Kreis","Was wirklich geschah"]]} -->

#### GA-de-a502a8 · „05 Zweiter Kreis“ › „Was wirklich geschah“ · Band S. 46 · prüfen
Freigabe: ja

- alt: Er verschweigt, dass er selbst seit einer Woche nachts das Summen hört, weil er aus dem Brunnen getrunken hat.
- neu: Er verschweigt, dass er selbst seit einer Woche nachts das Summen hört, weil er jeden Morgen vor Sonnenaufgang aus dem Brunnen trinkt.
- Änderung: «getrunken hat.» → «trinkt.»
<!-- daten: {"art":"satz","fundstellen":[["05 Zweiter Kreis","Was wirklich geschah"]]} -->

#### GA-de-f82593 · „05 Zweiter Kreis“ › „Knoten 1: Der Anger mit dem Marktbrunnen“ · Band S. 47 · sicher
Freigabe: ja

- alt: Hinweis: Ein Psion mit Telepathie oder ein Paranormal Detective hört in der Nähe des Brunnens ein Summen, das aus der Tiefe kommt.
- neu: Hinweis: Ein Psion mit Telepathie hört in der Nähe des Brunnens ein Summen, das aus der Tiefe kommt, ein Paranormal Detective mit EMF-Detektor ebenso.
- Änderung: «oder ein Paranormal Detective» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["05 Zweiter Kreis","Knoten 1: Der Anger mit dem Marktbrunnen"]]} -->

#### GA-de-54243e · „05 Zweiter Kreis“ › „Knoten 1: Der Anger mit dem Marktbrunnen“ · Band S. 47 · sicher
Freigabe: ja

- alt: Probe auf WK + Telepathie gegen Schwer (3): Es ist kein Gedanke, sondern ein Rhythmus, der sich alle vier Minuten wiederholt.
- neu: Probe auf WK + Telepathie oder IN + Okkultismus gegen Schwer (3): Es ist kein Gedanke, sondern ein Rhythmus, der sich alle vier Minuten wiederholt.
- Änderung: «(nichts)» → «oder IN + Okkultismus»
<!-- daten: {"art":"satz","fundstellen":[["05 Zweiter Kreis","Knoten 1: Der Anger mit dem Marktbrunnen"]]} -->

#### GA-de-9aa334 · „05 Zweiter Kreis“ › „Knoten 3: Das Labor im Haus der Leitners“ · Band S. 48 · sicher
Freigabe: ja

- alt: Hinweis: Ein handschriftliches Laborprotokoll, Messung Nr. 7, mit fallender Pulsfrequenz und der Empfehlung zur Bergung innerhalb von 48 Stunden wegen Entdeckungsrisiko.
- neu: Hinweis: Ein handschriftliches Laborprotokoll, Messung Nr. 7, mit fallendem Pulsabstand und der Empfehlung zur Bergung innerhalb von 48 Stunden wegen Entdeckungsrisiko.
- Änderung: «fallender Pulsfrequenz» → «fallendem Pulsabstand»
<!-- daten: {"art":"satz","fundstellen":[["05 Zweiter Kreis","Knoten 3: Das Labor im Haus der Leitners"]]} -->

#### GA-de-515a22 · „06 Der Hauslehrer“ › „Knoten 3: Das Kirchenbuch und das Pfarrhaus“ · Band S. 57 · prüfen
Freigabe: ja

- alt: Das alte Kirchenbuch von Solberg, Pfarrer Mattias Berg, ein kleines Archiv im Pfarrhaus.
- neu: Pfarrer Mattias Berg, ein kleines Archiv im Pfarrhaus und darin eine beglaubigte Abschrift des alten Kirchenbuchs von Solberg. Das Original liegt im Landesarchiv Uppsala.
- Änderung: «alte» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["06 Der Hauslehrer","Knoten 3: Das Kirchenbuch und das Pfarrhaus"]]} -->

#### GA-de-982aa5 · „06 Der Hauslehrer“ › „Knoten 4: Die Loge Zum Schweigenden Kreis“ · Band S. 57 · prüfen, umformuliert
Freigabe: ja

- alt: Hinweis: Der Antiquar weiß, dass der Waldgänger Abmachungen wörtlich hält (führt zu „Was wirkt“).
- neu: Hinweis: Der Antiquar weiß, dass der Waldgänger Abmachungen wörtlich hält und drei Regeln kennt: nicht pfeifen, nicht rufen, nichts mitnehmen (führt zu „Was wirkt“).
- Änderung: «(nichts)» → «und drei Regeln kennt: nicht pfeifen, nicht rufen, nichts mitnehmen»
<!-- daten: {"art":"satz","fundstellen":[["06 Der Hauslehrer","Knoten 4: Die Loge Zum Schweigenden Kreis"]]} -->

#### GA-de-eefa29 · „06 Der Hauslehrer“ › „Die Konfrontation“ · Band S. 59 · prüfen
Freigabe: ja

- alt: Wer seinem Blick standhält, ohne wegzusehen, hat bestanden.
- neu: Wer seinem Blick standhält, ohne wegzusehen (Grauen-Probe gegen Verstörend (2)), hat bestanden.
- Änderung: «wegzusehen,» → «wegzusehen (Grauen-Probe gegen Verstörend (2)),»
<!-- daten: {"art":"satz","fundstellen":[["06 Der Hauslehrer","Die Konfrontation"]]} -->

#### GA-de-d43812 · „06 Der Hauslehrer“ › „Gegner“ · Band S. 60 · sicher
Freigabe: ja

- alt: Ein Mensch, der seine Kleidung links herum trägt, kann von ihm nicht irreführt werden
- neu: Ein Mensch, der seine Kleidung links herum trägt, kann von ihm nicht irregeführt werden
- Änderung: «irreführt» → «irregeführt»
<!-- daten: {"art":"satz","fundstellen":[["06 Der Hauslehrer","Gegner"]]} -->

#### GA-de-26b53a · „07 Die Vitrine“ › „Worum es geht“ · Band S. 64 · prüfen
Freigabe: ja

- alt: Aber die Kinder singen jede Nacht, und seit einer Woche singt auch die Enkelin Jule, die in einer anderen Stadt wohnt, im Schlaf.
- neu: Aber die Kinder singen jede Nacht, und seit einer Woche singt auch die Enkelin der Direktorin im Schlaf, Jule, die in einer anderen Stadt wohnt und seit ein paar Tagen bei ihrer Großmutter zu Besuch ist.
- Änderung: «(nichts)» → «der Direktorin im Schlaf,»; «wohnt, im Schlaf.» → «wohnt und seit ein paar Tagen bei ihrer Großmutter zu Besuch ist.»
<!-- daten: {"art":"satz","fundstellen":[["07 Die Vitrine","Worum es geht"]]} -->

#### GA-de-bd2c43 · „07 Die Vitrine“ › „Briefing“ · Band S. 66 · prüfen
Freigabe: ja

- alt: Der Multispektralscanner ist sehr selten und braucht einen Senior-Agenten mit Begründung oder einen Punkt Vertrauen.
- neu: Der Multispektralscanner ist sehr selten: ab Senior-Agent, mit Begründung, drei Tage Wartezeit. Ein Punkt Vertrauen hebt die Rangschwelle um eine Stufe, ein weiterer streicht die Wartezeit.
- Änderung: «selten und braucht einen Senior-Agenten» → «selten: ab Senior-Agent,»; «Begründung oder einen» → «Begründung, drei Tage Wartezeit. Ein»
<!-- daten: {"art":"satz","fundstellen":[["07 Die Vitrine","Briefing"]]} -->

#### GA-de-037bfa · „07 Die Vitrine“ › „Eskalation“ · Band S. 68 · sicher
Freigabe: ja

- alt: In der Nacht singen nicht nur die drei Kinder aus Inge Lorenz’ Klasse, sondern auch die Direktorin selbst, im Schlaf, am offenen Fenster.
- neu: In der Nacht singen die drei Kinder aus Inge Lorenz’ Klasse, und mit ihnen singt die Direktorin selbst, im Schlaf, am offenen Fenster.
- Änderung: «nicht nur» → «(gestrichen)»; «sondern auch» → «und mit ihnen singt»
<!-- daten: {"art":"satz","fundstellen":[["07 Die Vitrine","Eskalation"]]} -->

#### GA-de-480f47 · „07 Die Vitrine“ › „Eskalation“ · Band S. 68 · sicher
Freigabe: ja

- alt: Sie zeigt sich: ein Mädchen in einem Nachthemd, barfuß, das im Museum umhergeht und die Türen öffnet.
- neu: Sie zeigt sich: ein Mädchen in einem Nachthemd, unter dem Saum nur Nebel, das im Museum umhergeht und die Türen öffnet.
- Änderung: «barfuß,» → «unter dem Saum nur Nebel,»
<!-- daten: {"art":"satz","fundstellen":[["07 Die Vitrine","Eskalation"]]} -->

#### GA-de-ac7e4f · „07 Die Vitrine“ › „Nachspiel“ · Band S. 70 · sicher
Freigabe: ja

- alt: Totenköpfe: Wenn die Zelle den Kristall an O.D.I.N. gibt, verliert die Stiftung in Basel einen Totenkopf, weil der Stein nicht auf den Markt kommt.
- neu: Totenköpfe: Wenn die Zelle den Kristall abgibt, an den Rat oder an das Kollegium, verliert die Stiftung in Basel einen Totenkopf, weil der Stein nicht auf den Markt kommt.
- Änderung: «(nichts)» → «abgibt,»; «O.D.I.N. gibt,» → «den Rat oder an das Kollegium,»
<!-- daten: {"art":"satz","fundstellen":[["07 Die Vitrine","Nachspiel"]]} -->

#### GA-de-c69ec5 · „08 Das Zweite Licht“ › „Was wirklich geschah“ · Band S. 73 · sicher
Freigabe: ja

- alt: Das Ritual „Das Zweite Licht“ stammt aus MS Arcana 114, einem internen Kompendium der Druckerei von 1971.
- neu: Das Ritual „Das Zweite Licht“ steht in einem internen Kompendium der Druckerei von 1971.
- Änderung: «stammt aus MS Arcana 114,» → «steht in»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Was wirklich geschah"]]} -->

#### GA-de-4735a9 · „08 Das Zweite Licht“ › „Was wirklich geschah“ · Band S. 73 · prüfen
Freigabe: ja

- alt: Es enthält den siebten Kreis als Ornament, abgeschrieben aus einem älteren Manuskript, das die Druckerei für dekorativ hielt.
- neu: Es enthält den siebten Kreis als Ornament, abgeschrieben aus MS Arcana 114, einer Handschrift des Kollegiums, die die Druckerei für dekorativ hielt.
- Änderung: «einem älteren Manuskript, das» → «MS Arcana 114, einer Handschrift des Kollegiums, die»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Was wirklich geschah"]]} -->

#### GA-de-48a993 · „08 Das Zweite Licht“ › „Was wirklich geschah“ · Band S. 73 · sicher
Freigabe: ja

- alt: Ein Mitglied der Internetgruppe, Maarten de Vries, 34, ein arbeitsloser Grafikdesigner aus Anderlecht, hat das Ritual nicht nur gelesen, sondern durchgeführt.
- neu: Ein Mitglied der Internetgruppe, Maarten de Vries, 34, ein arbeitsloser Grafikdesigner aus Anderlecht, hat das Ritual gelesen und danach durchgeführt.
- Änderung: «nicht nur gelesen, sondern» → «gelesen und danach»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Was wirklich geschah"]]} -->

#### GA-de-e9c4a0 · „08 Das Zweite Licht“ › „Was wirklich geschah“ · Band S. 73 · sicher
Freigabe: ja

- alt: Er hatte den siebten Kreis mit Kreide und Asche auf den Boden gemalt und in die Mitte einen kleinen Kristall gelegt, den er im Internet als „Bergkristall, aufgeladen“ gekauft hatte.
- neu: Er hatte den siebten Kreis mit Kreide und Asche auf den Boden gemalt und in die Mitte einen faustgroßen Kristall gelegt, den er im Internet als „Bergkristall, aufgeladen“ gekauft hatte.
- Änderung: «kleinen» → «faustgroßen»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Was wirklich geschah"]]} -->

#### GA-de-c069c9 · „08 Das Zweite Licht“ › „Knoten 1: Die Wohnungen der Vermissten“ · Band S. 75 · sicher
Freigabe: ja

- alt: Hinweis: Aylin Demirs letzter Forenbeitrag: „Das Licht ist kein Licht.
- neu: Hinweis: Aylin Demirs letzter Forenbeitrag: „Sagt ihm, das Licht ist kein Licht.
- Änderung: «„Das» → «„Sagt ihm, das»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Knoten 1: Die Wohnungen der Vermissten"]]} -->

#### GA-de-92b0e7 · „08 Das Zweite Licht“ › „Knoten 3: Das Reihenhaus in Anderlecht“ · Band S. 75 · prüfen
Freigabe: ja

- alt: Hinweis: Ein Soldier mit Taktik erkennt, dass der Keller ein einziger Zugang ist, aber ein Fenster zum Garten hat, das mit Pappe verklebt ist.
- neu: Hinweis: Ein Soldier mit Taktik erkennt, dass der Keller nur über die Treppe zu erreichen ist. Das Fenster zum Garten ist mit Pappe verklebt, lässt sich aber von außen öffnen.
- Änderung: «ein einziger Zugang ist, aber ein» → «nur über die Treppe zu erreichen ist. Das»; «hat, das» → «ist»; «verklebt ist.» → «verklebt, lässt sich aber von außen öffnen.»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Knoten 3: Das Reihenhaus in Anderlecht"]]} -->

#### GA-de-355dfa · „08 Das Zweite Licht“ › „Knoten 4: Das Archiv der Druckerei“ · Band S. 75 · prüfen
Freigabe: ja

- alt: Hinweis: Das Ritual „Das Zweite Licht“ stammt aus MS Arcana 114, einem internen Kompendium von 1971.
- neu: Hinweis: Das Ritual „Das Zweite Licht“ steht in einem internen Kompendium der Druckerei von 1971, der Kreis darin ist aus der Handschrift MS Arcana 114 des Kollegiums abgeschrieben.
- Änderung: «stammt aus MS Arcana 114,» → «steht in»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Knoten 4: Das Archiv der Druckerei"]]} -->

#### GA-de-256c71 · „08 Das Zweite Licht“ › „Knoten 5: Der Keller des Reihenhauses“ · Band S. 75 · prüfen
Freigabe: ja

- alt: Ein Soldier mit Taktik erkennt, dass der Keller nur einen Ausgang hat.
- neu: Ein Soldier mit Taktik erkennt, dass der Keller nur über die Treppe zu erreichen ist.
- Änderung: «einen Ausgang hat.» → «über die Treppe zu erreichen ist.»
<!-- daten: {"art":"satz","fundstellen":[["08 Das Zweite Licht","Knoten 5: Der Keller des Reihenhauses"]]} -->

### Gegnerwerte

#### GA-de-d57586 · Gegner „Mr. Hartley“, Zeile „Angriff“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Kompaktpistole 3 + 2, Schaden 2, Verdeckt, oder Betäubungsstab 2 + 2, Schaden 1, betäubt
- neu: Kompaktpistole 3 + 2, Schaden 2, Verdeckt, oder Totschläger 2 + 2, Schaden 2, Betäubend, Verdeckt
- Änderung: «Betäubungsstab» → «Totschläger»; «1, betäubt» → «2, Betäubend, Verdeckt»
<!-- daten: {"art":"gegner","name":"Mr. Hartley","label":"Angriff"} -->

#### GA-de-53a5ec · Gegner „Der Waldgänger am Solbergsee“, Zeile „Schwäche“ · Band S. 60 · prüfen
Freigabe: ja

- alt: Eisen, Feuer am Waldrand, Salz. Wer seine Regeln kennt, nicht pfeift, nicht ruft, nichts mitnimmt, ist für ihn tabu. Ein Mensch, der seine Kleidung links herum trägt, kann von ihm nicht irreführt werden
- neu: Eisen, Feuer am Waldrand, Salz. Wer seine Regeln kennt, nicht pfeift, nicht ruft, nichts mitnimmt, ist für ihn tabu. Ein Mensch, der seine Kleidung links herum trägt, kann von ihm nicht irregeführt werden
- Änderung: «irreführt» → «irregeführt»
<!-- daten: {"art":"gegner","name":"Der Waldgänger am Solbergsee","label":"Schwäche"} -->

#### GA-de-6189f3 · Gegner „Daniel Keane“, Zeile „Angriff“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Klinge der Eskorte 4 + 3, Schaden 3, oder Dienstpistole 4 + 3, Schaden 3
- neu: Klinge der Eskorte 4 + 3, Schaden 2, 3 gegen Wesen aus Rissen, oder Dienstpistole 4 + 3, Schaden 3
- Änderung: «3,» → «2, 3 gegen Wesen aus Rissen,»
<!-- daten: {"art":"gegner","name":"Daniel Keane","label":"Angriff"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Evan Pryce als Spuk“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit, Schwäche, Spuren, Verhalten, Begegnung, Was bleibt.

## Englisch

Bände: ODIN_EN_14_Grey_Files (Seiten 79, Prüfsumme 2c088d86f9ee), ODIN_EN_14_Grey_Files_Handouts (Seiten 26, Prüfsumme b4511790ec28).

Journalseiten 158, Sätze 2336, davon gleich 2198, im Band nicht gefunden 53 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 74 (sicher 34). Als Fehltreffer aussortiert: Zahl aus dem Satz 1, Rand 1, Nachbartext 4, Spaltenumbruch 4.
Gegner 20 mit 147 Zeilen, gleich 129; Vorschläge 7.
Hinweise ohne Vorschlag: 2.

### Journalsätze

#### GA-en-a47888 · „Grey Files: Introduction“ › „The Eight Files“ · Band S. 5 · sicher
Freigabe: ja

- alt: A quiet accountant has been working at a Basel foundation for four years.
- neu: A quiet accountant worked at a Basel foundation for four years.
- Änderung: «has been working» → «worked»
<!-- daten: {"art":"satz","fundstellen":[["Grey Files: Introduction","The Eight Files"]]} -->

#### GA-en-9ebf55 · „01 Foster Child“ › „What Really Happened“ · Band S. 8 · sicher
Freigabe: ja

- alt: Three weeks ago, he found a small, milky crystal on the banks of the Elbe that dampened the hum when he held it tight.
- neu: Three weeks ago, he found a small, milky crystal on the banks of the Elbe that dampened the hum as long as he held it tight.
- Änderung: «when» → «as long as»
<!-- daten: {"art":"satz","fundstellen":[["01 Foster Child","What Really Happened"]]} -->

#### GA-en-9bbef0 · „01 Foster Child“ › „People“ · Band S. 9 · prüfen
Freigabe: ja

- alt: Conceals that he did call the police after all, because he does not trust the Vosses.
- neu: Conceals that he did call the police last night after all, because of the aquarium and because he does not trust the Vosses.
- Änderung: «(nichts)» → «last night»; «(nichts)» → «because of the aquarium and»
<!-- daten: {"art":"satz","fundstellen":[["01 Foster Child","People"]]} -->

#### GA-en-40e6d1 · „01 Foster Child“ › „Node 2: Linus’ Room“ · Band S. 11 · prüfen
Freigabe: ja

- alt: Clue: The rucksack is missing, the S-Bahn card is gone (leads to Linus’ whereabouts, conclusion 3).
- neu: Clue: The rucksack is missing, the money box is empty (leads to Linus’ whereabouts, conclusion 3).
- Änderung: «S-Bahn card» → «money box»; «gone» → «empty»
<!-- daten: {"art":"satz","fundstellen":[["01 Foster Child","Node 2: Linus’ Room"]]} -->

#### GA-en-33c341 · „01 Foster Child“ › „Node 4: Neugraben S-Bahn Station“ · Band S. 11 · sicher
Freigabe: ja

- alt: A small station, a kiosk, a surveillance camera.
- neu: A small station, a kiosk, four surveillance cameras.
- Änderung: «a» → «four»; «camera.» → «cameras.»
<!-- daten: {"art":"satz","fundstellen":[["01 Foster Child","Node 4: Neugraben S-Bahn Station"]]} -->

#### GA-en-1933cf · „01 Foster Child“ › „Opponents“ · Band S. 14 · prüfen, umformuliert
Freigabe: ja

- alt: The Open Ones as an organisation, their goals and further opponents are in the Threat Atlas.
- neu: The Open Ones as an organisation and their goals are in the chapter “The World Behind the Veil” of the Game Master’s Book, further opponents in the Threat Atlas.
- Änderung: «organisation,» → «organisation and»; «and» → «are in the chapter “The World Behind the Veil” of the Game Master’s Book,»; «are» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["01 Foster Child","Opponents"]]} -->

#### GA-en-1e105b · „01 Foster Child“ › „Aftermath“ · Band S. 14 · sicher
Freigabe: ja

- alt: Experience: 5 XP per character.
- neu: Experience: 4 XP per character, 5 if the file has turned red. +1 XP if Linus is safe. At most +1 XP personal bonus, for example for a solution without combat. +1 XP for each thread the cell takes up, for example the abbreviation in the Crystal Ledger.
- Änderung: «5» → «4»
<!-- daten: {"art":"satz","fundstellen":[["01 Foster Child","Aftermath"]]} -->

#### GA-en-0ee1d7 · „02 Find Site“ › „People“ · Band S. 18 · prüfen
Freigabe: ja

- alt: Her father maintains the Hold’s heating system, and she sometimes accompanies him to the cellar.
- neu: Her father helps Marta Nováková maintain the heating, and she sometimes accompanies him to the cellar.
- Änderung: «maintains» → «helps Marta Nováková maintain»; «Hold’s heating system,» → «heating,»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","People"]]} -->

#### GA-en-80361e · „08 The Second Light“ › „People“ · Band S. 18 · prüfen
Freigabe: ja

- alt: He knows nothing of the ritual.
- neu: He knows nothing of the favour.
- Änderung: «ritual.» → «favour.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","People"]]} -->

#### GA-en-2855c4 · „02 Find Site“ › „Node 1: The Hold Archive“ · Band S. 19 · sicher
Freigabe: ja

- alt: Clue: The current ground plan shows eleven rooms, but the construction plan from 1991 shows twelve.
- neu: Clue: The current ground plan shows eleven rooms, but the conversion plan from 1991 shows twelve.
- Änderung: «construction» → «conversion»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","Node 1: The Hold Archive"]]} -->

#### GA-en-966882 · „02 Find Site“ › „Node 1: The Hold Archive“ · Band S. 19 · prüfen, umformuliert
Freigabe: ja

- alt: Clue: An inspection report from 1992 mentions “irregularities in the basement, Room 4/12 not entered” (Handout 2.2).
- neu: Clue: An inspection report from 1992 notes: “Room 4/12 not entered. Door locked, key not found.”
- Änderung: «mentions “irregularities in the basement, Room» → «notes: “Room»; «entered” (Handout 2.2).» → «entered. Door locked, key not found.”»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","Node 1: The Hold Archive"]]} -->

#### GA-en-686ae4 · „02 Find Site“ › „Node 4: The Basement Corridor Before Room 4/12“ · Band S. 20 · prüfen
Freigabe: ja

- alt: Test: Perception or Telepathy against Hard (3), to sense the silence.
- neu: Test: Perception or Telepathy against Hard (3), to sense the echo.
- Änderung: «silence.» → «echo.»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","Node 4: The Basement Corridor Before Room 4/12"]]} -->

#### GA-en-4eb53a · „02 Find Site“ › „The Confrontation“ · Band S. 21 · prüfen
Freigabe: ja

- alt: A Thaumaturge can examine the stone, a Scientist can measure the geometry of the room, a Psion can sense the silence.
- neu: A Thaumaturge can examine the stone, a Scientist can measure the geometry of the room, a Psion can sense the echo.
- Änderung: «silence.» → «echo.»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","The Confrontation"]]} -->

#### GA-en-fd5c62 · „02 Find Site“ › „The Confrontation“ · Band S. 21 · prüfen
Freigabe: ja

- alt: Shortly before 22:10, the voice breaks off, the door at the end of the corridor flickers open a crack, and behind it is nothing.
- neu: Shortly before 22:10, the voice breaks off, the door of the archive room flickers open a crack, and behind it there is no corridor any more, only darkness.
- Änderung: «at the end» → «(gestrichen)»; «corridor» → «archive room»; «(nichts)» → «there»; «nothing.» → «no corridor any more, only darkness.»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","The Confrontation"]]} -->

#### GA-en-ef3b2c · „02 Find Site“ › „The Confrontation“ · Band S. 21 · sicher
Freigabe: ja

- alt: With combat: If the cell cannot secure the stone, the door at the end of the corridor opens, and a Riftling steps out.
- neu: With combat: If the cell cannot secure the stone, the door of the archive room opens, and a Riftling steps out of the darkness behind it.
- Änderung: «at the end» → «(gestrichen)»; «corridor» → «archive room»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","The Confrontation"]]} -->

#### GA-en-413ccc · „02 Find Site“ › „Opponents“ · Band S. 21 · sicher
Freigabe: ja

- alt: It is a Henchman of the Voice and seeps through the door at the end of the corridor, but it is not the actual opponent.
- neu: It is a Henchman of the Voice and seeps through the door of the archive room, but it is not the actual opponent.
- Änderung: «at the end» → «(gestrichen)»; «corridor,» → «archive room,»
<!-- daten: {"art":"satz","fundstellen":[["02 Find Site","Opponents"]]} -->

#### GA-en-5f85ef · „03 Number 341“ › „People“ · Band S. 27 · sicher
Freigabe: ja

- alt: Conceals that, since his time in service, he hears voices at night when he touches his silver.
- neu: Conceals that, since his time in service, he hears voices at night when he touches silver.
- Änderung: «his» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","People"]]} -->

#### GA-en-f1e9b6 · „03 Number 341“ › „Node 1: The Pawnshop in Grangetown“ · Band S. 28 · sicher
Freigabe: ja

- alt: Clue for Investigator: A comparison of Number 341 with old files of the Investigation Branch shows that the number appears in a list of ashsilver pieces from Hold-2 that were reported sealed in 1989 (leads to Hold-2, to the quartermaster).
- neu: Clue for Investigator: A comparison of Number 341 with old files of the Investigation Branch shows that the number appears in a list of ashsilver pieces from Hold-2 that were reported missing in 1989 (leads to Hold-2, to the quartermaster).
- Änderung: «sealed» → «missing»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 1: The Pawnshop in Grangetown"]]} -->

#### GA-en-929465 · „03 Number 341“ › „Node 2: Hold-2, the Workshop“ · Band S. 28 · sicher
Freigabe: ja

- alt: Clue: The quartermaster confirms that the visor has been missing since 1989 and was forged by his grandfather Evan Pryce (leads to What Really Happened).
- neu: Clue: The quartermaster confirms that the visor has been missing since 1989 and was forged by his grandfather Evan Pryce (leads to What happened?).
- Änderung: «Really Happened).» → «happened.»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 2: Hold-2, the Workshop"]]} -->

#### GA-en-f38be3 · „03 Number 341“ › „Node 2: Hold-2, the Workshop“ · Band S. 28 · prüfen
Freigabe: ja

- alt: A previous owner warns of a man in a dark coat who wants to lock the piece away (leads to Miriam Hale, to the Collegium).
- neu: A previous owner warns of a man in a dark coat who wants to lock the piece away (leads to Node 4, to the art dealer from Bath).
- Änderung: «Miriam Hale,» → «Node 4,»; «Collegium).» → «art dealer from Bath).»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 2: Hold-2, the Workshop"]]} -->

#### GA-en-1d5445 · „03 Number 341“ › „Node 2: Hold-2, the Workshop“ · Band S. 28 · prüfen
Freigabe: ja

- alt: Tests: Echo against Hard (3) to sense that the silver in the Hold has been restless since the visor resurfaced.
- neu: An Echo roll in the workshop shows that the silver in the Hold has been restless since the visor resurfaced.
- Änderung: «Tests:» → «An»; «against Hard (3) to sense» → «roll in the workshop shows»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 2: Hold-2, the Workshop"]]} -->

#### GA-en-a68cb8 · „03 Number 341“ › „Node 3: The Street in Front of the Pawnshop“ · Band S. 29 · sicher
Freigabe: ja

- alt: Clue: Keane saw a man in a dark coat enter the shop, speak with Gwynne and leave empty-handed (leads to Miriam Hale, to the art dealer from Bath).
- neu: Clue: Keane saw a man in a dark coat enter the shop, speak with Gwynne and leave empty-handed (leads to Node 4, to the art dealer from Bath).
- Änderung: «Miriam Hale,» → «Node 4,»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Node 3: The Street in Front of the Pawnshop"]]} -->

#### GA-en-328316 · „03 Number 341“ › „Escalation“ · Band S. 30 · prüfen, umformuliert
Freigabe: ja

- alt: Gwynne becomes nervous and decides to sell the visor that very night, to whoever.
- neu: Gwynne becomes nervous and summons all interested parties to the shop that very night after closing time: whoever bids the most takes the piece.
- Änderung: «decides» → «summons all interested parties»; «sell» → «(gestrichen)»; «visor» → «shop»; «night, to» → «night after closing time:»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Escalation"]]} -->

#### GA-en-3173d9 · „03 Number 341“ › „Escalation“ · Band S. 30 · prüfen
Freigabe: ja

- alt: At night, not only does the telephone in the pawnshop ring, but also the old cash register.
- neu: At night the telephone in the pawnshop rings, and with it the old cash register.
- Änderung: «night, not only does» → «night»; «ring, but also» → «rings, and with it»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Escalation"]]} -->

#### GA-en-bf75cd · „03 Number 341“ › „Opponents“ · Band S. 31 · prüfen, umformuliert
Freigabe: ja

- alt: Horror Uncanny (1), when the haunting appears
- neu: Horror None. Rolls against Uncanny (1) themselves when the haunting appears
- Änderung: «(nichts)» → «None. Rolls against»; «(1),» → «(1) themselves»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Opponents"]]} -->

#### GA-en-ce99ac · „03 Number 341“ › „Opponents“ · Band S. 31 · sicher
Freigabe: ja

- alt: Attack Compact pistol 3 + 2, damage 2, concealed, or stun baton 2 + 2, damage 1, stunning
- neu: Attack Compact pistol 3 + 2, damage 2, concealed, or cosh 2 + 2, damage 2, Stunning, Concealed
- Änderung: «stun baton» → «cosh»; «1, stunning» → «2, Stunning»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Opponents"]]} -->

#### GA-en-cc3ad7 · „03 Number 341“ › „Opponents“ · Band S. 31 · prüfen, umformuliert
Freigabe: ja

- alt: Horror Uncanny (1), when the haunting appears.
- neu: Rolls against Uncanny (1) themselves when the haunting appears.
- Änderung: «Horror» → «Rolls against»; «(1),» → «(1) themselves»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Opponents"]]} -->

#### GA-en-9b99aa · „03 Number 341“ › „Opponents“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Attack Escort blade 4 + 3, damage 3, or service pistol 4 + 3, damage 3
- neu: Attack Escort blade 4 + 3, damage 2, 3 against creatures from rifts, or service pistol 4 + 3, damage 3
- Änderung: «3,» → «3 against creatures from rifts,»
<!-- daten: {"art":"satz","fundstellen":[["03 Number 341","Opponents"]]} -->

#### GA-en-d0fcf2 · „04 Kessler“ › „What It Is About“ · Band S. 36 · sicher
Freigabe: ja

- alt: Martin Kessler, a quiet man with a tie with reindeer, has worked in accounting for four years.
- neu: Martin Kessler, a quiet man with a tie with reindeer, worked in accounting for four years.
- Änderung: «has» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","What It Is About"]]} -->

#### GA-en-ea3b83 · „04 Kessler“ › „What Really Happened“ · Band S. 36 · prüfen
Freigabe: ja

- alt: Kuckuck found the photo and reported it.
- neu: Kuckuck found the picture, took it with him and reported it.
- Änderung: «photo» → «picture, took it with him»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","What Really Happened"]]} -->

#### GA-en-5ce24b · „04 Kessler“ › „What Really Happened“ · Band S. 37 · sicher
Freigabe: ja

- alt: The file is incomplete, and Brunner believes that Elster did not seal the crystal in lead, but wants to keep it for herself.
- neu: The file is incomplete, and Brunner believes that Elster did not take the crystal to the Foundation’s lead archive, but wants to keep it for herself.
- Änderung: «seal» → «take»; «in lead,» → «to the Foundation’s lead archive,»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","What Really Happened"]]} -->

#### GA-en-080bb9 · „04 Kessler“ › „People“ · Band S. 37 · prüfen
Freigabe: ja

- alt: She conceals that she deliberately placed the photo from the summer party.
- neu: She conceals that she deliberately had the summer party photos put in the cellar.
- Änderung: «placed the photo from» → «had»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","People"]]} -->

#### GA-en-8a34d5 · „04 Kessler“ › „Briefing“ · Band S. 38 · prüfen
Freigabe: ja

- alt: Return reported by Sabine Wirz.”
- neu: Return in January 2026, reported by Sabine Wirz.”
- Änderung: «(nichts)» → «in January 2026,»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Briefing"]]} -->

#### GA-en-4ff8a8 · „04 Kessler“ › „Node 1: The Foundation“ · Band S. 38 · sicher
Freigabe: ja

- alt: An Investigator with Investigation or an Agent with Deception notices the discrepancy.
- neu: An Investigator with Investigation or an Agent with Insight notices the discrepancy.
- Änderung: «Deception» → «Insight»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 1: The Foundation"]]} -->

#### GA-en-29fe9b · „04 Kessler“ › „Node 2: The Photo“ · Band S. 38 · sicher
Freigabe: ja

- alt: It shows Martin Kessler with a tie with reindeer, a glass in his hand, a smile that doesn’t quite suit him.
- neu: It shows Martin Kessler with the tie with reindeer and a smile that doesn’t quite suit him.
- Änderung: «a» → «the»; «reindeer, a glass in his hand,» → «reindeer and»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 2: The Photo"]]} -->

#### GA-en-5b8d9b · „04 Kessler“ › „Node 2: The Photo“ · Band S. 38 · sicher
Freigabe: ja

- alt: Clue: An Investigator with Investigation or an Agent with Deception recognises that the man in the photo is not the same as the man who works in the Foundation today.
- neu: Clue: An Investigator with Investigation or an Agent with Insight recognises that the man in the photo is not the same as the man who works in the Foundation today.
- Änderung: «Deception» → «Insight»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 2: The Photo"]]} -->

#### GA-en-878f19 · „04 Kessler“ › „Node 2: The Photo“ · Band S. 38 · sicher
Freigabe: ja

- alt: An Investigator with Investigation or an Agent with Deception recognises that the handwriting is old, very old.
- neu: An Investigator with Investigation or an Agent with Perception recognises that the handwriting is old, very old.
- Änderung: «Deception» → «Perception»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 2: The Photo"]]} -->

#### GA-en-89a66a · „04 Kessler“ › „Node 2: The Photo“ · Band S. 38 · sicher
Freigabe: ja

- alt: An Investigator with Investigation recognises that someone placed it where he would find it.
- neu: An Investigator with Investigation recognises that someone put it where an accountant would find it.
- Änderung: «placed» → «put»; «he» → «an accountant»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 2: The Photo"]]} -->

#### GA-en-57d8b5 · „04 Kessler“ › „Node 3: Elster’s House“ · Band S. 39 · sicher
Freigabe: ja

- alt: An old house in the Basel district of Gundeldingen, near Gellert Church, with a garden where roses grow, and a door that is never locked.
- neu: An old house in the Basel district of Gundeldingen, near the Church of the Holy Spirit, with a garden where roses grow, and a door that is never locked.
- Änderung: «Gellert Church,» → «the Church of the Holy Spirit,»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 3: Elster’s House"]]} -->

#### GA-en-b7aa59 · „04 Kessler“ › „Node 4: The Print Shop in Zurich“ · Band S. 39 · sicher
Freigabe: ja

- alt: An Agent or Investigator finds the note: “Transfer to Retrieval, January 2026.” (leads to Node 5)
- neu: An Agent or Investigator finds the note: “Transfer to Retrieval, January 2026. New bearer: V. B.” (leads to Node 5)
- Änderung: «2026.”» → «2026. New bearer: V. B.”»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 4: The Print Shop in Zurich"]]} -->

#### GA-en-04809f · „04 Kessler“ › „Node 5: The Dead Drop“ · Band S. 39 · sicher
Freigabe: ja

- alt: An Agent with access to the Branch’s dead drop finds the handwriting of a secretary of Prometheus.
- neu: An Agent with access to the Branch’s papers finds the handwriting of a secretary of Prometheus.
- Änderung: «dead drop» → «papers»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 5: The Dead Drop"]]} -->

#### GA-en-b2a657 · „04 Kessler“ › „Node 5: The Dead Drop“ · Band S. 39 · sicher
Freigabe: ja

- alt: Clue: In Mulhouse, two men of the Hands are waiting.
- neu: Clue: In Mulhouse, two men of the Hands were waiting.
- Änderung: «are» → «were»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Node 5: The Dead Drop"]]} -->

#### GA-en-9a2572 · „04 Kessler“ › „The Confrontation“ · Band S. 41 · prüfen
Freigabe: ja

- alt: Solution without combat: The cell confronts Brunner with the photo from the summer party and the missing medical file.
- neu: Solution without combat: The cell confronts Brunner with the photo from the summer party and the missing doctor’s notes.
- Änderung: «medical file.» → «doctor’s notes.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","The Confrontation"]]} -->

#### GA-en-5e2cad · „04 Kessler“ › „Aftermath“ · Band S. 42 · prüfen, umformuliert
Freigabe: ja

- alt: Experience: 5 per character, +1 for a solution without combat, +1 for a solution that brings Elster to the Nursery.
- neu: Experience: 4 XP per character, 5 if the file has turned red. +1 XP if the cell finds out who Kessler is. At most +1 XP personal bonus, for example for a solution without combat or one that brings Elster to the Nursery.
- Änderung: «5» → «4 XP»; «(nichts)» → «5 if the file has turned red.»; «(nichts)» → «XP if the cell finds out who Kessler is. At most +1 XP personal bonus, for example»; «combat, +1 for a solution» → «combat or one»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Aftermath"]]} -->

#### GA-en-b8bd9b · „04 Kessler“ › „Handouts and Map“ · Band S. 42 · prüfen
Freigabe: ja

- alt: Handout 4.1: The photo from the summer party, in Node 2, in a drawer in the Foundation’s accounting office.
- neu: Handout 4.1: The photo from the summer party, in Nodes 1 and 2, in the folder in the Foundation’s cellar.
- Änderung: «Node» → «Nodes 1 and»; «a drawer» → «the folder»; «accounting office.» → «cellar.»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Handouts and Map"]]} -->

#### GA-en-8c2eff · „04 Kessler“ › „Handouts and Map“ · Band S. 42 · prüfen
Freigabe: ja

- alt: Map 4: Die Stiftung Sammlung und Bewahrung, Basel, with all rooms, doors, windows, and paths for the Confrontation.
- neu: The Foundation in Basel, with all rooms, doors, windows, and paths for the Confrontation.
- Änderung: «Map 4: Die Stiftung Sammlung und Bewahrung,» → «The Foundation in»
<!-- daten: {"art":"satz","fundstellen":[["04 Kessler","Handouts and Map"]]} -->

#### GA-en-6bfead · „05 Second Circle“ › „What Really Happened“ · Band S. 46 · sicher
Freigabe: ja

- alt: In truth she is risking their health.
- neu: In truth she is risking the health of both: every further week makes them more sluggish and paler.
- Änderung: «their» → «the»
<!-- daten: {"art":"satz","fundstellen":[["05 Second Circle","What Really Happened"]]} -->

#### GA-en-44a55e · „05 Second Circle“ › „What Really Happened“ · Band S. 46 · sicher
Freigabe: ja

- alt: He conceals that he himself has heard the humming at night for a week, because he drank from the well.
- neu: He conceals that he himself has heard the humming at night for a week, because he drinks from the well every morning before sunrise.
- Änderung: «drank» → «drinks»
<!-- daten: {"art":"satz","fundstellen":[["05 Second Circle","What Really Happened"]]} -->

#### GA-en-844822 · „05 Second Circle“ › „Node 1: The Anger with the Market Well“ · Band S. 47 · sicher
Freigabe: ja

- alt: Clue: A Psion with Telepathy or a Paranormal Detective hears a humming near the well that comes from the depths.
- neu: Clue: A Psion with Telepathy hears a humming near the well that comes from the depths, and so does a Paranormal Detective with an EMF detector.
- Änderung: «or a Paranormal Detective» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["05 Second Circle","Node 1: The Anger with the Market Well"]]} -->

#### GA-en-9a141c · „05 Second Circle“ › „Node 1: The Anger with the Market Well“ · Band S. 47 · sicher
Freigabe: ja

- alt: Test on WIL + Telepathy against Hard (3): It is not a thought, but a rhythm that repeats every four minutes.
- neu: Test on WIL + Telepathy or INT + Occultism against Hard (3): It is not a thought, but a rhythm that repeats every four minutes.
- Änderung: «(nichts)» → «or INT + Occultism»
<!-- daten: {"art":"satz","fundstellen":[["05 Second Circle","Node 1: The Anger with the Market Well"]]} -->

#### GA-en-890d5c · „05 Second Circle“ › „Node 3: The Laboratory in the Leitners’ House“ · Band S. 48 · sicher
Freigabe: ja

- alt: Clue: A handwritten laboratory log, measurement no. 7, with falling pulse frequency and the recommendation for recovery within 48 hours due to risk of discovery.
- neu: Clue: A handwritten laboratory log, measurement no. 7, with a falling pulse interval and the recommendation for recovery within 48 hours due to risk of discovery.
- Änderung: «(nichts)» → «a»; «frequency» → «interval»
<!-- daten: {"art":"satz","fundstellen":[["05 Second Circle","Node 3: The Laboratory in the Leitners’ House"]]} -->

#### GA-en-b97d02 · „05 Second Circle“ › „Aftermath“ · Band S. 51 · prüfen, umformuliert
Freigabe: ja

- alt: Experience: 5 per character, +1 for the solution without combat, +1 for the recovery at the right moment.
- neu: Experience: 4 XP per character, 5 if the file has turned red. +1 XP if the crystal is recovered and isolated. At most +1 XP personal bonus, for example for the solution without combat or the recovery at the right moment.
- Änderung: «5» → «4 XP»; «(nichts)» → «5 if the file has turned red.»; «(nichts)» → «XP if the crystal is recovered and isolated. At most +1 XP personal bonus, for example»; «combat, +1 for» → «combat or»
<!-- daten: {"art":"satz","fundstellen":[["05 Second Circle","Aftermath"]]} -->

#### GA-en-27a0d2 · „06 The Tutor“ › „Node 1: The Building Site by the Lake“ · Band S. 55 · prüfen
Freigabe: ja

- alt: The excavation pit, the runestone under a tarpaulin, construction workers, Jens Harder.
- neu: The excavation pit at the forest edge, construction workers, Jens Harder.
- Änderung: «pit,» → «pit at»; «runestone under a tarpaulin,» → «forest edge,»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","Node 1: The Building Site by the Lake"]]} -->

#### GA-en-a210b2 · „06 The Tutor“ › „Node 1: The Building Site by the Lake“ · Band S. 55 · prüfen, umformuliert
Freigabe: ja

- alt: The stone lies half in the mud, the circles are clearly visible.
- neu: runestone under a tarpaulin, half in the mud, where the excavator set it down. The circles are clearly visible.
- Änderung: «The stone lies» → «runestone under a tarpaulin,»; «(nichts)» → «where»; «(nichts)» → «excavator set it down. The»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","Node 1: The Building Site by the Lake"]]} -->

#### GA-en-b9a2d3 · „06 The Tutor“ › „Node 5: The Manor House“ · Band S. 55 · sicher
Freigabe: ja

- alt: Test: Thaumaturge or Paranormal Detective, Ritualism against Hard (3), to read the circles.
- neu: Test: Thaumaturge or Paranormal Detective, Occultism against Hard (3), to interpret the circles.
- Änderung: «Ritualism» → «Occultism»; «read» → «interpret»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","Node 5: The Manor House"]]} -->

#### GA-en-021ab2 · „06 The Tutor“ › „Node 3: The Church Register and the Vicarage“ · Band S. 56 · prüfen
Freigabe: ja

- alt: The old church register of Solberg, Pastor Mattias Berg, a small archive in the vicarage.
- neu: Pastor Mattias Berg, a small archive in the vicarage and in it a certified copy of the old church register of Solberg. The original lies in the Uppsala Regional Archive.
- Änderung: «old church» → «Church»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","Node 3: The Church Register and the Vicarage"]]} -->

#### GA-en-58ea2a · „06 The Tutor“ › „Node 4: The Lodge of the Silent Circle“ · Band S. 56 · prüfen, umformuliert
Freigabe: ja

- alt: Clue: The Antiquarian knows that the Forest Walker keeps agreements literally (leads to “What works”).
- neu: Clue: The Antiquarian knows that the Forest Walker keeps agreements literally and has three rules: do not whistle, do not shout, take nothing with you (leads to “What works”).
- Änderung: «(nichts)» → «and has three rules: do not whistle, do not shout, take nothing with you»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","Node 4: The Lodge of the Silent Circle"]]} -->

#### GA-en-81d584 · „06 The Tutor“ › „The Confrontation“ · Band S. 58 · prüfen
Freigabe: ja

- alt: Whoever withstands his gaze without looking away has passed.
- neu: Whoever withstands his gaze without looking away (horror test against Disturbing (2)) has passed.
- Änderung: «(nichts)» → «(horror test against Disturbing (2))»
<!-- daten: {"art":"satz","fundstellen":[["06 The Tutor","The Confrontation"]]} -->

#### GA-en-2c9705 · „07 The Display Case“ › „What It Is About“ · Band S. 63 · prüfen
Freigabe: ja

- alt: But the children sing every night, and for a week the granddaughter Jule, who lives in another town, has also been singing in her sleep.
- neu: But the children sing every night, and for a week the director’s granddaughter has also been singing in her sleep: Jule, who lives in another town and has been visiting her grandmother for a few days.
- Änderung: «(nichts)» → «director’s»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","What It Is About"]]} -->

#### GA-en-fcfa1a · „07 The Display Case“ › „People“ · Band S. 64 · prüfen
Freigabe: ja

- alt: She conceals that she knows the song as an old Bad Grund song from her grandmother, who heard it in 1938 from a girl named Liese.
- neu: She conceals that she knows the song as an old Bad Grund song from her grandmother, who heard it on the night of 3 December 1938 through the wall from the Hartmanns’ house next door, from a girl named Liese.
- Änderung: «in» → «on the night of 3 December»; «(nichts)» → «through the wall from the Hartmanns’ house next door,»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","People"]]} -->

#### GA-en-fbd5f5 · „07 The Display Case“ › „Briefing“ · Band S. 65 · prüfen
Freigabe: ja

- alt: The multispectral scanner is very rare and requires a Senior Agent with justification or one point of Trust.
- neu: The multispectral scanner is very rare: from Senior Agent, with justification, three days’ waiting time. One point of Trust lowers the rank threshold by one level, another removes the waiting time.
- Änderung: «rare and requires a» → «rare: from»; «justification or one» → «justification, three days’ waiting time. One»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","Briefing"]]} -->

#### GA-en-ff8664 · „07 The Display Case“ › „Escalation“ · Band S. 67 · sicher
Freigabe: ja

- alt: During the night, not only the three children from Inge Lorenz’s class sing, but also the director herself, in her sleep, at the open window.
- neu: During the night the three children from Inge Lorenz’s class sing, and with them the director herself, in her sleep, at the open window.
- Änderung: «night, not only» → «night»; «but also» → «and with them»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","Escalation"]]} -->

#### GA-en-a4cdbf · „07 The Display Case“ › „Escalation“ · Band S. 67 · prüfen
Freigabe: ja

- alt: She shows herself: a girl in a nightgown, barefoot, who walks around the museum and opens the doors.
- neu: She shows herself: a girl in a nightgown, nothing but mist below the hem, who walks around the museum and opens the doors.
- Änderung: «barefoot,» → «nothing but mist below the hem,»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","Escalation"]]} -->

#### GA-en-f813d1 · „07 The Display Case“ › „Aftermath“ · Band S. 69 · prüfen
Freigabe: ja

- alt: Skulls: If the cell gives the crystal to O.D.I.N., the foundation in Basel loses a skull, because the stone does not reach the market.
- neu: Skulls: If the cell hands the crystal over, to the Council or to the Collegium, the foundation in Basel loses a skull, because the stone does not reach the market.
- Änderung: «gives» → «hands»; «(nichts)» → «over,»; «O.D.I.N.,» → «the Council or to the Collegium,»
<!-- daten: {"art":"satz","fundstellen":[["07 The Display Case","Aftermath"]]} -->

#### GA-en-c018ee · „08 The Second Light“ › „What Really Happened“ · Band S. 72 · sicher
Freigabe: ja

- alt: The ritual “The Second Light” comes from MS Arcana 114, an internal compendium of the Print Shop from 1971.
- neu: The ritual “The Second Light” is found in an internal compendium of the Print Shop from 1971.
- Änderung: «comes from MS Arcana 114,» → «is found in»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","What Really Happened"]]} -->

#### GA-en-025c7b · „08 The Second Light“ › „What Really Happened“ · Band S. 72 · sicher
Freigabe: ja

- alt: It contains the seventh circle as an ornament, copied from an older manuscript that the Print Shop considered decorative.
- neu: It contains the seventh circle as an ornament, copied from MS Arcana 114, a manuscript of the Collegium that the Print Shop considered decorative.
- Änderung: «an older» → «MS Arcana 114, a»; «(nichts)» → «of the Collegium»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","What Really Happened"]]} -->

#### GA-en-415a9f · „08 The Second Light“ › „What Really Happened“ · Band S. 72 · sicher
Freigabe: ja

- alt: A member of the internet group, Maarten de Vries, 34, an unemployed graphic designer from Anderlecht, did not just read the ritual but carried it out.
- neu: A member of the internet group, Maarten de Vries, 34, an unemployed graphic designer from Anderlecht, read the ritual and then carried it out.
- Änderung: «did not just» → «(gestrichen)»; «but» → «and then»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","What Really Happened"]]} -->

#### GA-en-d4cae6 · „08 The Second Light“ › „What Really Happened“ · Band S. 72 · sicher
Freigabe: ja

- alt: He had painted the seventh circle on the floor with chalk and ash and placed a small crystal in the middle, which he had bought on the internet as “charged rock crystal”.
- neu: He had painted the seventh circle on the floor with chalk and ash and placed a fist-sized crystal in the middle, which he had bought on the internet as “charged rock crystal”.
- Änderung: «small» → «fist-sized»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","What Really Happened"]]} -->

#### GA-en-914d40 · „08 The Second Light“ › „Briefing“ · Band S. 73 · prüfen, umformuliert
Freigabe: ja

- alt: The Belgian police have no trace of the ritual yet.
- neu: The Belgian police think the ritual is a joke.
- Änderung: «have no trace of» → «think»; «yet.» → «is a joke.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","Briefing"]]} -->

#### GA-en-b04439 · „08 The Second Light“ › „Node 1: The Flats of the Missing Persons“ · Band S. 74 · prüfen
Freigabe: ja

- alt: Clue: Aylin Demir’s last forum post: “The light is not a light.
- neu: Clue: Aylin Demir’s last forum post: “Tell him the light is not light.”
- Änderung: «“The» → «“Tell him the»; «a light.» → «light.”»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","Node 1: The Flats of the Missing Persons"]]} -->

#### GA-en-73fb4f · „08 The Second Light“ › „Node 1: The Flats of the Missing Persons“ · Band S. 74 · prüfen
Freigabe: ja

- alt: It is an eye.” An Investigator with Insight recognises that she was the only one who was afraid.
- neu: An Investigator with Insight recognises that she was the only one who was afraid.
- Änderung: «It is an eye.”» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","Node 1: The Flats of the Missing Persons"]]} -->

#### GA-en-d4329e · „08 The Second Light“ › „Node 3: The Terraced House in Anderlecht“ · Band S. 74 · prüfen
Freigabe: ja

- alt: Clue: A Soldier with Tactics recognises that the cellar has only one entrance but also a window to the garden that is covered with cardboard.
- neu: Clue: A Soldier with Tactics recognises that the cellar can only be reached by the stairs. The window to the garden is covered with cardboard, but can be opened from outside.
- Änderung: «has» → «can»; «one entrance but also a» → «be reached by the stairs. The»; «that» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","Node 3: The Terraced House in Anderlecht"]]} -->

#### GA-en-9b73cc · „08 The Second Light“ › „Node 5: The Cellar of the Terraced House“ · Band S. 74 · prüfen
Freigabe: ja

- alt: A Soldier with Tactics recognises that the cellar has only one exit.
- neu: A Soldier with Tactics recognises that the cellar can only be reached by the stairs.
- Änderung: «has» → «can»; «one exit.» → «be reached by the stairs.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","Node 5: The Cellar of the Terraced House"]]} -->

#### GA-en-2452b9 · „08 The Second Light“ › „Aftermath“ · Band S. 77 · prüfen
Freigabe: ja

- alt: Skulls: The Enlightened lose one skull because the ritual was ended.
- neu: Skulls: The Enlightened lose two skulls because their key figure Maarten de Vries has been eliminated, and drop from three to one.
- Änderung: «one skull» → «two skulls»; «the ritual was ended.» → «their key figure Maarten de Vries has been eliminated, and drop from three to one.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Second Light","Aftermath"]]} -->

### Gegnerwerte

#### GA-en-9dcda5 · Gegner „Alistair Vane“, Zeile „Horror“ · Band S. 31 · prüfen
Freigabe: ja

- alt: Uncanny (1), when the haunting appears
- neu: None. Rolls against Uncanny (1) themselves when the haunting appears
- Änderung: «(nichts)» → «None. Rolls against»; «(1),» → «(1) themselves»
<!-- daten: {"art":"gegner","name":"Alistair Vane","label":"Horror"} -->

#### GA-en-4c3212 · Gegner „Owen Gwynne“, Zeile „Horror“ · Band S. 31 · prüfen
Freigabe: ja

- alt: Uncanny (1), when the haunting appears
- neu: None. Rolls against Uncanny (1) themselves when the haunting appears
- Änderung: «(nichts)» → «None. Rolls against»; «(1),» → «(1) themselves»
<!-- daten: {"art":"gegner","name":"Owen Gwynne","label":"Horror"} -->

#### GA-en-7b9176 · Gegner „Mr Hartley“, Zeile „Attack“ · Band S. 31 · prüfen
Freigabe: ja

- alt: Compact pistol 3 + 2, damage 2, concealed, or stun baton 2 + 2, damage 1, stunning
- neu: Compact pistol 3 + 2, damage 2, concealed, or cosh 2 + 2, damage 2, Stunning, Concealed
- Änderung: «stun baton» → «cosh»; «1, stunning» → «2, Stunning, Concealed»
<!-- daten: {"art":"gegner","name":"Mr Hartley","label":"Attack"} -->

#### GA-en-9119ad · Gegner „Mr Hartley“, Zeile „Horror“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Uncanny (1), when the haunting appears
- neu: None. Rolls against Uncanny (1) themselves when the haunting appears
- Änderung: «(nichts)» → «None. Rolls against»; «(1),» → «(1) themselves»
<!-- daten: {"art":"gegner","name":"Mr Hartley","label":"Horror"} -->

#### GA-en-86317b · Gegner „Daniel Keane“, Zeile „Attack“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Escort blade 4 + 3, damage 3, or service pistol 4 + 3, damage 3
- neu: Escort blade 4 + 3, damage 2, 3 against creatures from rifts, or service pistol 4 + 3, damage 3
- Änderung: «3,» → «2, 3 against creatures from rifts,»
<!-- daten: {"art":"gegner","name":"Daniel Keane","label":"Attack"} -->

#### GA-en-2f8e18 · Gegner „Daniel Keane“, Zeile „Horror“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Uncanny (1), when the haunting appears. He has seen worse.
- neu: None. Rolls against Uncanny (1) themselves when the haunting appears. He has seen worse.
- Änderung: «(nichts)» → «None. Rolls against»; «(1),» → «(1) themselves»
<!-- daten: {"art":"gegner","name":"Daniel Keane","label":"Horror"} -->

#### GA-en-481ab9 · Gegner „Rhys Bowen“, Zeile „Horror“ · Band S. 32 · prüfen
Freigabe: ja

- alt: Uncanny (1), when the haunting appears
- neu: None. Rolls against Uncanny (1) themselves when the haunting appears
- Änderung: «(nichts)» → «None. Rolls against»; «(1),» → «(1) themselves»
<!-- daten: {"art":"gegner","name":"Rhys Bowen","label":"Horror"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Riftlings“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Horror, Special, Traces.
- Gegner „Evan Pryce as a Haunting“: Der Band verweist auf Werte aus dem Bedrohungsatlas; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special feature, Weakness, Traces, Behaviour, Encounter, What remains.
