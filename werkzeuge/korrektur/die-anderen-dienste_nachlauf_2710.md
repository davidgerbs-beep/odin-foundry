# Korrekturvorschläge: Die anderen Dienste (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege die-anderen-dienste --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `die-anderen-dienste.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden die-anderen-dienste` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden die-anderen-dienste --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_15_Die_anderen_Dienste (Seiten 97, Prüfsumme 6d8f3b9dfe7c).

Journalseiten 144, Sätze 3422, davon gleich 3415, im Band nicht gefunden 5 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 0 (sicher 0). Als Fehltreffer aussortiert: Nachbartext 2.
Gegner 37 mit 238 Zeilen, gleich 238; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

## Englisch

Bände: ODIN_EN_15_The_Other_Services (Seiten 91, Prüfsumme 0df81ab59251).

Journalseiten 144, Sätze 3326, davon gleich 3213, im Band nicht gefunden 48 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 58 (sicher 47). Als Fehltreffer aussortiert: Spaltenumbruch 6, Nachbartext 3.
Gegner 37 mit 226 Zeilen, gleich 201; Vorschläge 2.
Hinweise ohne Vorschlag: 24.

### Journalsätze

#### AD-en-3c3db0 · „01 The Twelve of Asklepios“ › „Overview“ · Band S. 7 · sicher
Freigabe: ja

- alt: The nanites from the Asklepios programme have been singing in the Opener’s rhythm since 2019, and the people who carry them do not know that they have long ceased to be the intention of the doctors who once created them.
- neu: The nanites from the Asklepios programme have been singing in the Opener’s rhythm since 2019, and the people who carry them do not know that they have long ceased to be what the doctors who once created them.
- Änderung: «the intention of» → «what»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Overview"]]} -->

#### AD-en-8249c1 · „01 The Twelve of Asklepios“ › „History and Goals“ · Band S. 8 · sicher
Freigabe: ja

- alt: From her they want to pass themselves on, without injection, without programme, without O.D.I.N.
- neu: From her they want to pass themselves on, without injection, without a programme, without O.D.I.N.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","History and Goals"]]} -->

#### AD-en-150ac0 · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: ja

- alt: Sometimes, very rarely, a Polish word that does not fit the sentence.
- neu: Sometimes, very rarely, he says a Polish word that does not fit the sentence.
- Änderung: «(nichts)» → «he says»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]]} -->

#### AD-en-eb1ed8 · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: ja

- alt: The man who set the ports in 2004 and cut himself on an ampoule. 49 years old, slim, glasses, a diagnostic device on his forearm that he never takes off.
- neu: The man who implanted the ports in 2004 and cut himself on an ampoule. 49 years old, slim, glasses, a diagnostic device on his forearm that he never takes off.
- Änderung: «set» → «implanted»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]]} -->

#### AD-en-44aabd · „01 The Twelve of Asklepios“ › „Bases and Means“ · Band S. 10 · sicher
Freigabe: ja

- alt: Or one breaks in, as the Vanished One is currently planning.
- neu: Or one breaks in, which the Vanished One is currently planning.
- Änderung: «as» → «which»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Bases and Means"]]} -->

#### AD-en-f2b30c · „01 The Twelve of Asklepios“ › „Bases and Means“ · Band S. 10 · sicher
Freigabe: ja

- alt: The Lazarus signal, which has been transmitting since 2015 and which the nanites use as a direction without understanding it.
- neu: The Lazarus signal, which has been transmitting since 2015 and which the nanites use as a bearing without understanding it.
- Änderung: «direction» → «bearing»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Bases and Means"]]} -->

#### AD-en-611f2c · „01 The Twelve of Asklepios“ › „Bases and Means“ · Band S. 10 · sicher
Freigabe: ja

- alt: Arvid Lund has a contact at Morrow Biologics, which he used once and has avoided since.
- neu: Arvid Lund has a contact at Morrow Biologics, whom he used once and has avoided since.
- Änderung: «which» → «whom»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Bases and Means"]]} -->

#### AD-en-884b3c · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · sicher
Freigabe: ja

- alt: Since then the nanites in him are more than him.
- neu: Since then the nanites in him have been more than him.
- Änderung: «are» → «have been»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]]} -->

#### AD-en-03a83f · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · sicher
Freigabe: ja

- alt: The Vanished One wanted them to find it so that they go to Kraków and not to him.
- neu: The Vanished One wanted them to find it so that they would go to Kraków and not to him.
- Änderung: «(nichts)» → «would»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]]} -->

#### AD-en-910f21 · „01 The Twelve of Asklepios“ › „Hooks and Outlook“ · Band S. 11 · sicher
Freigabe: ja

- alt: A neighbour in Kraków reports that in the Kazimierz Old Town a man has been standing in the courtyard for nights, looking up at a window.
- neu: A neighbour in Kraków reports that in the Kazimierz Old Town a man has been standing in the courtyard for several nights, looking up at a window.
- Änderung: «(nichts)» → «several»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Hooks and Outlook"]]} -->

#### AD-en-31c7cb · „01 The Twelve of Asklepios“ › „Hooks and Outlook“ · Band S. 12 · sicher
Freigabe: ja

- alt: The nanites in Ania seek a way to spread over greater distance, through songs, through dreams, through that which sings at night.
- neu: The nanites in Ania seek a way to spread over a greater distance, through songs, through dreams, through that which sings at night.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Hooks and Outlook"]]} -->

#### AD-en-2453a7 · „02 Morrow Biologics“ › „Key Figures“ · Band S. 14 · sicher
Freigabe: ja

- alt: His secret: In 2025 he received a blood sample from Arvid Lund, recognised nanites in it, and asked back: “Where did you get that?” No answer ever came.
- neu: His secret: In 2025 he received a blood sample from Arvid Lund, recognised nanites in it, and asked in return: “Where did you get that?” No answer ever came.
- Änderung: «back:» → «in return:»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Key Figures"]]} -->

#### AD-en-051f58 · „02 Morrow Biologics“ › „Hooks and Outlook“ · Band S. 16 · sicher
Freigabe: ja

- alt: If the cell secures the Leitners together with their measurement data and scanner, “The chimera” loses a skull, because O.D.I.N. gets evidence against Morrow into its hands and the corporation is forced to slow down its research.
- neu: If the cell secures the Leitners together with their measurement data and scanner, “The chimera” loses a skull, because O.D.I.N. gets its hands on evidence against Morrow and the corporation is forced to slow down its research.
- Änderung: «(nichts)» → «its hands on»; «into its hands» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Hooks and Outlook"]]} -->

#### AD-en-ad347c · „03 The Singers“ › „History and Goals“ · Band S. 19 · prüfen
Freigabe: ja

- alt: They sing, and whoever hears the song goes themselves.
- neu: They sing, and whoever hears the song goes of their own accord.
- Änderung: «themselves.» → «of their own accord.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]]} -->

#### AD-en-e67545 · „03 The Singers“ › „History and Goals“ · Band S. 20 · prüfen, umformuliert
Freigabe: ja

- alt: They have only already been on the other side and can no longer pretend that it does not exist.
- neu: They have simply already been on the other side and can no longer pretend that it does not exist.
- Änderung: «only» → «seen something they cannot forget. The Singers are the proof that it goes on. They are not evil. They have simply»
- Hinweis: „neu“ vom Writer nachgebessert: nur der geänderte Satz; die drei Sätze davor stehen nicht in Foundry und gehören nicht zu diesem Eintrag.
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]]} -->

#### AD-en-347840 · „03 The Singers“ › „Bases and Means“ · Band S. 21 · sicher
Freigabe: ja

- alt: Since the 2026 operation, a second Nexus shard lies within it, which the Singers placed in the circle after the first was secured.
- neu: Since the 2026 operation, a second Nexus shard has lain within it, which the Singers placed in the circle after the first was secured.
- Änderung: «lies» → «has lain»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Bases and Means"]]} -->

#### AD-en-b74e72 · „03 The Singers“ › „Bases and Means“ · Band S. 21 · sicher
Freigabe: ja

- alt: The door stood open; since the 2026 operation, a padlock from O.D.I.N. hangs on it, which must be broken open.
- neu: The door stood open; since the 2026 operation, a padlock from O.D.I.N. has been hanging on it, which must be broken open.
- Änderung: «hangs» → «has been hanging»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Bases and Means"]]} -->

#### AD-en-f9f21a · „03 The Singers“ › „Bases and Means“ · Band S. 22 · sicher
Freigabe: ja

- alt: Tarek Mansour has savings that are used up.
- neu: Tarek Mansour’s savings are used up.
- Änderung: «Mansour has» → «Mansour’s»; «that» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Bases and Means"]]} -->

#### AD-en-df8752 · „04 Small Cults“ › „The Community of the Dreamer“ · Band S. 26 · sicher
Freigabe: ja

- alt: Her voice is warm and tired, and she speaks of the dead man as of a guest one must not send away.
- neu: Her voice is warm and tired, and she speaks of the dead man as a guest one must not send away.
- Änderung: «of» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Community of the Dreamer"]]} -->

#### AD-en-b09327 · „The Other Services: Introduction“ › „Chapter III: Foreign Services“ · Band S. 31 · sicher
Freigabe: ja

- alt: Real services remain backdrop: those who act are always the invented offices hiding within them.
- neu: Real services remain a backdrop: those who act are always the invented offices hiding within them.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter III: Foreign Services"]]} -->

#### AD-en-909126 · „05 STILLWATER“ › „Overview“ · Band S. 31 · prüfen
Freigabe: ja

- alt: For the game master, STILLWATER is the rival that watches from afar until it can act itself.
- neu: For the game master, STILLWATER is the rival that watches from afar until it can act on its own.
- Änderung: «itself.» → «on its own.»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Overview"]]} -->

#### AD-en-36c61a · „05 STILLWATER“ › „Bases and Means“ · Band S. 34 · sicher
Freigabe: ja

- alt: For large actions Elaine Mercer has to beg at the Department of Defense.
- neu: For large actions Elaine Mercer has to beg from the Department of Defense.
- Änderung: «at» → «from»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Bases and Means"]]} -->

#### AD-en-7cafee · „06 Department 13“ › „Overview“ · Band S. 36 · sicher
Freigabe: ja

- alt: A programme in Russian service that uses up Psions, exploits restricted zones and has been searching for over forty years for the one find site that would take O.D.I.N.’s monopoly on Alloy S.
- neu: A programme in Russian service that uses up Psions, exploits restricted zones and has been searching for over forty years for the one find site that would break O.D.I.N.’s monopoly on Alloy S.
- Änderung: «take» → «break»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Overview"]]} -->

#### AD-en-fb8807 · „06 Department 13“ › „Relationship to O.D.I.N.“ · Band S. 39 · sicher
Freigabe: ja

- alt: The Echo-Operatives, who have had an open score with the Department since 1976.
- neu: The Echo-Operatives, who have had a score to settle with the Department since 1976.
- Änderung: «an open» → «a»; «(nichts)» → «to settle»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Relationship to O.D.I.N."]]} -->

#### AD-en-94c93a · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 43 · sicher
Freigabe: ja

- alt: The same sign stands on a current satellite photograph, in chalk, on a rock near Kangding.
- neu: The same sign appears in a current satellite photograph, in chalk, on a rock near Kangding.
- Änderung: «stands on» → «appears in»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]]} -->

#### AD-en-623e35 · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 44 · sicher
Freigabe: ja

- alt: ☠○○○○ A buyer of the Bureau acquires at the Evening an old map with rift coordinates that O.D.I.N. lost years ago.
- neu: ☠○○○○ A buyer from the Bureau acquires at the Evening an old map with rift coordinates that O.D.I.N. lost years ago.
- Änderung: «of» → «from»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]]} -->

#### AD-en-c6683b · „08 The Partners“ › „Overview“ · Band S. 44 · sicher
Freigabe: ja

- alt: In return, O.D.I.N. keeps the Veil tight on their side, and no one names their name.
- neu: In return, O.D.I.N. keeps the Veil tight on their side, and no one mentions their name.
- Änderung: «names» → «mentions»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","Overview"]]} -->

#### AD-en-93155d · „08 The Partners“ › „The Liaison Persons“ · Band S. 46 · sicher
Freigabe: ja

- alt: He meets in small restaurants, always near the harbour, always in the late afternoon.
- neu: He meets people in small restaurants, always near the harbour, always in the late afternoon.
- Änderung: «(nichts)» → «people»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","The Liaison Persons"]]} -->

#### AD-en-f572f9 · „10 Lodge of the Silent Circle“ › „Key Figures“ · Band S. 54 · sicher
Freigabe: ja

- alt: He speaks quickly, enthusiastically, with many questions, and interrupts himself.
- neu: He speaks quickly and enthusiastically, asks many questions, and interrupts himself.
- Änderung: «quickly,» → «quickly and»; «with» → «asks»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Key Figures"]]} -->

#### AD-en-8469d8 · „10 Lodge of the Silent Circle“ › „Hooks and Outlook“ · Band S. 56 · sicher
Freigabe: ja

- alt: The cell learns of this when a break-in into the Registry’s basement fails and a line of music remains at the scene.
- neu: The cell learns of this when a break-in in the Registry’s basement fails and a line of music remains at the scene.
- Änderung: «into» → «in»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Hooks and Outlook"]]} -->

#### AD-en-e85cd4 · „10 Lodge of the Silent Circle“ › „Hooks and Outlook“ · Band S. 56 · sicher
Freigabe: ja

- alt: The Audit found a transfer in the Council’s accounts that arrives every year on 21 December, since 1871, from a bank that no longer exists.
- neu: The Audit found a transfer in the Council’s accounts that has arrived every year on 21 December, since 1871, from a bank that no longer exists.
- Änderung: «arrives» → «has arrived»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Hooks and Outlook"]]} -->

#### AD-en-5e051a · „11 The Enlightened“ › „History and Goals“ · Band S. 57 · sicher
Freigabe: ja

- alt: Purpose: to absorb rumours about O.D.I.N. and turn them into ridicule.
- neu: Purpose: to absorb rumours about O.D.I.N. and hold them up to ridicule.
- Änderung: «turn» → «hold»; «into» → «up to»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","History and Goals"]]} -->

#### AD-en-7ed8be · „11 The Enlightened“ › „History and Goals“ · Band S. 57 · sicher
Freigabe: ja

- alt: They believe they are in the right because they take seriously the signs that others only mock as conspiracy.
- neu: They believe they are in the right because they take seriously the signs that others only dismiss as a conspiracy.
- Änderung: «mock» → «dismiss»; «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","History and Goals"]]} -->

#### AD-en-0fb7a1 · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · sicher
Freigabe: ja

- alt: He conceals that he invited the three guests and that he repaints the circle every night.
- neu: He conceals that he invited the three guests and that he redraws the circle every night.
- Änderung: «repaints» → «redraws»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]]} -->

#### AD-en-927583 · „11 The Enlightened“ › „The Plan: “The Second Light”“ · Band S. 60 · sicher
Freigabe: ja

- alt: He believes the “Second Light” is an enlightenment.
- neu: He believes the “Second Light” is a form of enlightenment.
- Änderung: «an» → «a form of»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","The Plan: “The Second Light”"]]} -->

#### AD-en-ef779e · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · sicher
Freigabe: ja

- alt: 1948 the Congregation hears for the first time of a registry in Stockholm that collects what it itself collects, and then acts.
- neu: 1948 the Congregation hears for the first time of a registry in Stockholm that collects what the Congregation itself collects, and then acts.
- Änderung: «it» → «the Congregation»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]]} -->

#### AD-en-e97877 · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · prüfen
Freigabe: ja

- alt: 1961 a layman from Franconia brings the mirror from Bamberg to the archive, bought in an antiquarian bookshop, because it showed more than a face.
- neu: 1961 a layman from Franconia brings the mirror, bought in an antiquarian bookshop, from Bamberg to the archive, because it showed more than a face.
- Änderung: «mirror» → «mirror, bought in an antiquarian bookshop,»; «bought in an antiquarian bookshop,» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]]} -->

#### AD-en-7c09f3 · „12 The Congregation of the Silent Word“ › „Bases and Means“ · Band S. 63 · prüfen
Freigabe: ja

- alt: One gets in with a favour for the Congregation or because Brother Ludovico believes one has earned it.
- neu: One gets in by doing the Congregation a favour or because Brother Ludovico believes one has earned it.
- Änderung: «with» → «by doing the Congregation»; «for the Congregation» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Bases and Means"]]} -->

#### AD-en-64665d · „12 The Congregation of the Silent Word“ › „Relationship to O.D.I.N.“ · Band S. 64 · prüfen
Freigabe: ja

- alt: Since this year, also that a young priest wants to talk.
- neu: As of this year, it also knows that a young priest wants to talk.
- Änderung: «Since» → «As of»; «(nichts)» → «it»; «(nichts)» → «knows»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Relationship to O.D.I.N."]]} -->

#### AD-en-6f8545 · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 64 · sicher
Freigabe: ja

- alt: ☠☠☠○○ The journalist asks questions at the police and in care homes.
- neu: ☠☠☠○○ The journalist asks questions of the police and in care homes.
- Änderung: «at» → «of»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]]} -->

#### AD-en-7652bd · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 65 · sicher
Freigabe: ja

- alt: Anyone who silences Don Matteo by force makes an enemy of the Congregation, and at the next file the exorcist no longer stands beside the cell but in front of it.
- neu: Anyone who silences Don Matteo by force makes an enemy of the Congregation, and in the next file the exorcist no longer stands beside the cell but in front of it.
- Änderung: «at» → «in»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]]} -->

#### AD-en-49b8e1 · „13 The Open Ones“ › „History and Goals“ · Band S. 68 · prüfen
Freigabe: ja

- alt: In the Choir no one has forgotten the operation, and among the Open Ones even less so.
- neu: In the Choir no one has forgotten the operation, and among the Open Ones least of all.
- Änderung: «even less so.» → «least of all.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","History and Goals"]]} -->

#### AD-en-36b2a3 · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · sicher
Freigabe: ja

- alt: Eighty-seven years old, thin, in a wheelchair, white hair down to his shoulders, eyes that do not look at anyone for long because they hear something else.
- neu: Eighty-seven years old, thin, in a wheelchair, white hair down to his shoulders, eyes that do not look at anyone for long because he hears something else.
- Änderung: «they hear» → «he hears»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]]} -->

#### AD-en-b97dcc · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · prüfen
Freigabe: ja

- alt: She runs the monastery when Kantor sleeps, and that is often by now.
- neu: She runs the monastery when Kantor sleeps, and by now that is often the case.
- Änderung: «(nichts)» → «by now»; «by now.» → «the case.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]]} -->

#### AD-en-ef58c8 · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · sicher
Freigabe: ja

- alt: His secret: He once put on a helmet he had taken from a child, out of curiosity, and since then he hears a hum at night that he believes is his own.
- neu: His secret: He once put on a helmet he had taken from a child, out of curiosity, and since then he has been hearing a hum at night that he believes is his own.
- Änderung: «hears» → «has been hearing»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]]} -->

#### AD-en-2135d9 · „13 The Open Ones“ › „Hooks and Outlook“ · Band S. 72 · sicher
Freigabe: ja

- alt: The game master decides it when the cell stands before it: Perhaps nothing answers, and Kantor dies in the morning, an old man who waited too long.
- neu: The game master decides it when the cell is faced with it: Perhaps nothing answers, and Kantor dies in the morning, an old man who waited too long.
- Änderung: «stands before» → «is faced with»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Hooks and Outlook"]]} -->

#### AD-en-d5a3c9 · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · sicher
Freigabe: ja

- alt: In 1952 the Nursery in Zurich writes a death and a new life for a six-year-old girl from Leipzig.
- neu: History 1952 the Nursery in Zurich fakes a death and creates a new life for a six-year-old girl from Leipzig.
- Änderung: «In» → «History»; «writes» → «fakes»; «(nichts)» → «creates»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]]} -->

#### AD-en-bede40 · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · sicher
Freigabe: ja

- alt: From 2021 to 2025 a quiet accountant named Martin Kessler sits in the Foundation.
- neu: From 2021 to 2025 a quiet accountant named Martin Kessler works at the Foundation.
- Änderung: «sits in» → «works at»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]]} -->

#### AD-en-25aa98 · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 75 · sicher
Freigabe: ja

- alt: The children whose gift then awakens on its own do not either.
- neu: The children whose gift then awakens on its own are not fetched either.
- Änderung: «do» → «are»; «(nichts)» → «fetched»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]]} -->

#### AD-en-2fa838 · „14 The Foundation in Basel“ › „Hooks and Outlook“ · Band S. 76 · sicher
Freigabe: ja

- alt: The cell is to fetch it before the Thirteenth hears it.
- neu: The cell is to fetch the child before the Thirteenth hears it.
- Änderung: «it» → «the child»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Hooks and Outlook"]]} -->

#### AD-en-d97e75 · „15 The Evening“ › „Overview“ · Band S. 76 · sicher
Freigabe: ja

- alt: Four times a year, in a different city, in a hotel with a ballroom, crystals are auctioned, artefacts, samples from rifts and sometimes people who have seen something.
- neu: Four times a year, in a different city, in a hotel with a ballroom, crystals, artefacts, samples from rifts and sometimes people who have seen something.
- Änderung: «crystals are auctioned,» → «crystals,»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Overview"]]} -->

#### AD-en-0b8b99 · „15 The Evening“ › „History and Goals“ · Band S. 77 · prüfen
Freigabe: ja

- alt: That they sometimes auction people who have seen something, they call “witness protection against a bid”.
- neu: They call the fact that they sometimes auction people who have seen something “witness protection in exchange for a bid”.
- Änderung: «something, they call» → «something»; «against» → «in exchange for»
- Hinweis: „neu“ vom Writer nachgebessert: ganzer Satz wie im Band, sonst fehlte „They call the fact“.
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","History and Goals"]]} -->

#### AD-en-ecd691 · „15 The Evening“ › „Key Figures“ · Band S. 78 · sicher
Freigabe: ja

- alt: Who he is is decided by the game master: Elias Vinter, a Danish shipowner who has not attended public appointments since the death of his son in 2019, or Viktor Haller, a Viennese art dealer who transferred his entire estate to a foundation in 2023.
- neu: Who he is is decided by the game master: Elias Vinter, a Danish shipowner who has not attended public engagements since the death of his son in 2019, or Viktor Haller, a Viennese art dealer who transferred his entire estate to a foundation in 2023.
- Änderung: «appointments» → «engagements»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Key Figures"]]} -->

#### AD-en-6a6498 · „15 The Evening“ › „The Plan: “The Great Stone”“ · Band S. 80 · prüfen
Freigabe: ja

- alt: The game master decides it when the cell stands before it, and not earlier.
- neu: The game master decides it when the cell is faced with it, and not earlier.
- Änderung: «stands before» → «is faced with»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","The Plan: “The Great Stone”"]]} -->

#### AD-en-b5fc93 · „15 The Evening“ › „Hooks and Outlook“ · Band S. 80 · sicher
Freigabe: ja

- alt: The curator establishes a private auction only for the bidders who wanted the great stone, and promises to deliver to them next time what O.D.I.N. does not have.
- neu: The curator sets up a private auction only for the bidders who wanted the great stone, and promises to deliver to them next time what O.D.I.N. does not have.
- Änderung: «establishes» → «sets up»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Hooks and Outlook"]]} -->

#### AD-en-2a6c81 · „15 The Evening“ › „Hooks and Outlook“ · Band S. 81 · prüfen
Freigabe: ja

- alt: In File 2 “Find Site”, the plan loses a skull if the cell secures the stone and hands it over to the Collegium, because it does not enter the trade.
- neu: In File 2 “Find Site”, the plan loses a skull if the cell secures the stone and hands it over to the Collegium, because it does not come onto the market.
- Änderung: «enter» → «come onto»; «trade.» → «market.»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Hooks and Outlook"]]} -->

#### AD-en-407d82 · „The Other Services: Introduction“ › „Expansion 1: Strength“ · Band S. 86 · sicher
Freigabe: ja

- alt: A corporation with laboratories in three countries has different resources than an old man in a monastery.
- neu: A corporation with laboratories in three countries has different resources from those of an old man in a monastery.
- Änderung: «than» → «from those of»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 1: Strength"]]} -->

#### AD-en-5143c8 · „The Other Services: Introduction“ › „A Year in the World“ · Band S. 90 · sicher
Freigabe: ja

- alt: A plan that stands at ☠○○○○ for two years is not negligence, but a world with many open fronts.
- neu: A plan that stands at ☠○○○○ for two years is not a sign of negligence, but of a world with many open fronts.
- Änderung: «(nichts)» → «a sign of»; «(nichts)» → «of»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","A Year in the World"]]} -->

### Gegnerwerte

#### AD-en-79208e · Gegner „The Returned“, Zeile „Special“ · Band S. 29 · prüfen
Freigabe: ja

- alt: Knows O.D.I.N.’s procedures, but not the names of the agents. Knows that there is a Seeker, but not who it is
- neu: Knows O.D.I.N.’s procedures, but not the names of the agents. Knows there is a Seeker, but not who it is
- Änderung: «that» → «(gestrichen)»
<!-- daten: {"art":"gegner","name":"The Returned","label":"Special"} -->

#### AD-en-872afc · Gegner „The Returned“, Zeile „Weakness“ · Band S. 29 · prüfen
Freigabe: ja

- alt: His memory. Whoever proves to him that he is not chosen breaks his will
- neu: His memory. Anyone who proves to him that he is not chosen breaks his will
- Änderung: «Whoever» → «Anyone who»
<!-- daten: {"art":"gegner","name":"The Returned","label":"Weakness"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Elaine Mercer“, Zeile „Behaviour“: „Negotiates, threatens, withdraws when the price gets too high. She does not fight herself, except when Caleb is in danger“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Sam Ferris“, Zeile „Behaviour“: „Cautious, watchful. Does not shoot at people who have done nothing to him“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Member Who Knows the Ways“: Name im Band nicht gefunden, Werte nicht geprüft.
- Gegner „Dr. Camille Favre“, Zeile „Behaviour“: „Defends the laboratory, does not negotiate, calls security and hybrid dogs“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Milan Dvořák“, Zeile „Behaviour“: „Excited and convinced. He holds the group together because he is the only one who understands the answers“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Luca“, Zeile „Behaviour“: „Reserved and fearful. He follows Sister Elena because she is the only one who tells him he is not mad“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Antiquarian“, Zeile „Behaviour“: „Seems nervous, leafs through books, talks about old stones and circles. He sings the song secretly when he is alone.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Relative“, Zeile „Behaviour“: „She follows every trail that leads to a staircase, and she is prepared to lie, steal and put herself in danger for it.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Hieronymus Falkenrath“, Zeile „Behaviour“: „Holds audiences, confers initiations, sends followers to Brussels. Fights only when he feels safe.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Archivist“, Zeile „Behaviour“: „Observes, takes notes, stays silent. She speaks only when the Master allows it.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dr. Larissa Orlowa“, Zeile „Behaviour“: „She does not negotiate, she sets conditions. She withdraws when the plan is endangered, and for that she sacrifices even her own people.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Singer with a Name“, Zeile „Behaviour“: „He watches, waits, accompanies. He does not fight. If he is cornered, he sings, and whoever listens understands why he goes.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Josef Hartl“, Zeile „Behaviour“: „Calm and firm. He holds the group together because no one else “understands” the crystal“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Brother Ludovico“, Zeile „Behaviour“: „Watches, keeps silent, acts only when the archive is threatened“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Hugo Marchetti, codename “Notar”“, Zeile „Behaviour“: „Observes, negotiates, withdraws. Only fights when there is no other way“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dr. Arne Holm“, Zeile „Behaviour“: „Observes, keeps silent, helps only when he is sure it is against the Voice“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Raymond Cole“, Zeile „Behaviour“: „Observes, reports, waits. He only attacks if the cell gets too close to Caleb Mercer“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Renate Albers, called Elster“, Zeile „Behaviour“: „Does not flee and does not fight. Waits, observes, asks questions and offers to go into the Nursery with the cell“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Stahl (Grzegorz Wolski, Number Twelve)“, Zeile „Special Ability“: „Adaptive Armour, Berserker Protocol, Last Cell (see class book Soldier). Senses other nanites within 20 m.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Stahl (Grzegorz Wolski, Number Twelve)“, Zeile „Behaviour“: „Goes into danger first, does not negotiate, protects. If the cell protects Ania, he is an ally. If not, an adversary.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dr. Cornelius Weber“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Special, Weakness.
- Gegner „Mr Leuenberger“, Zeile „Behaviour“: „Negotiates, delays, makes offers. If the cell forces its way into the Foundation, he stands in its way, politely and without fear“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Bidder with the Great Stone“, Zeile „Behaviour“: „Waits, pays, waits again. Never attacks himself“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Monsignore Emilio Vasari“: Name im Band nicht gefunden, Werte nicht geprüft.
