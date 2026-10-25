# Korrekturvorschläge: Die anderen Dienste, Absatzabgleich Englisch (Nachlauf 2510)

Erzeugt mit `node werkzeuge/korrektur.mjs absaetze die-anderen-dienste en --nachlauf=2510` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Absatzabgleich für einen Band, dessen Text in großen Teilen neu formuliert ist: Die Sätze, die wörtlich im Band stehen, sind Anker; dazwischen
übernimmt das Werkzeug wortweise den Text des Bandes. Ein Eintrag je Absatz (Zeile einer Journalseite, Absatz einer Gegnerbeschreibung,
Zeile der Gegnerwerte). Überschriften, Tabellen, Verweise und Bilder bleiben; Wörter, die sich nur in Satzzeichen unterscheiden, auch.
Über Absatzgrenzen hinweg, bei langen Stücken ohne Gegenstück und bei Text, der in Foundry an anderer Stelle steht, ändert es nichts; solche
Stellen stehen unten als Hinweise. `anwenden` nimmt diese Datei mit den übrigen Listen des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden die-anderen-dienste --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Englisch

Bände: ODIN_EN_15_The_Other_Services (Seiten 91, Prüfsumme 35bd05bc1960).

Journalseiten 144, Gegner 37, Absätze 2192, davon abweichend 460. Vorschläge 416 (sicher 219).
Nicht übernommen: Absatzgrenze 561, Satz nicht im Band 135, Nachbartext 86, zu lang 34, Reihenfolge 29, Zeichen 9, Längenverhältnis 46, Zahl aus dem Satz 5, ohne Anker 12, nur in Foundry 1. Hinweise: 219.

### Absätze der Journalseiten und Gegnerbeschreibungen

#### AD-en-A969c67 · „The Other Services: Introduction“ › „The Other Services“; „04 Small Cults“ › „Overview“ · Band S. 4 · prüfen
Freigabe: offen

- alt: “We are not the only ones searching in the dark. We are only the only ones who believe we carry the light.”
- neu: “We’re not the only ones searching in the dark. We’re only the ones who believe we carry the light.”
- Änderung: «“We are» → «“We’re»; «We are» → «We’re»; «only» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","The Other Services"],["04 Small Cults","Overview"]],"absatz":true} -->

#### AD-en-A07ab82 · „The Other Services: Introduction“ › „Overview of the Organisations“ · Band S. 4 · sicher
Freigabe: offen

- alt: The Twelve of Asklepios Asklepios Within, secretive 1 3 “The new host” ☠○○○○
- neu: The Twelve of Asklepios Asklepios Within, silent 1 3 “The new host” ☠○○○○
- Änderung: «secretive» → «silent»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Overview of the Organisations"]],"absatz":true} -->

#### AD-en-A6837cf · „The Other Services: Introduction“ › „How to Use This Volume“ · Band S. 5 · prüfen
Freigabe: offen

- alt: No one needs to know the whole volume to use it. The game master chooses two or three organisations that should be important in their campaign, reads their dossiers, and creates the situation sheet (Chapter VI). The remaining dossiers stay on the shelf until a sign leads to them. That happens more often than you would think: the plans are connected, and whoever follows the Foundation eventually ends up at the Evening.
- neu: No one needs to know the whole volume to use it. The game master chooses two or three organisations that should be important in their campaign, reads their dossiers, and creates the situation sheet (Chapter VI). The remaining dossiers stay on the shelf until a sign leads to them. This happens more often than one thinks: the plans are connected to each other, and anyone who pursues the Foundation eventually ends up with the Evening.
- Änderung: «That» → «This»; «you would think:» → «one thinks:»; «connected,» → «connected to each other,»; «whoever follows» → «anyone who pursues»; «at» → «with»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","How to Use This Volume"]],"absatz":true} -->

#### AD-en-A339705 · „The Other Services: Introduction“ › „Real Organisations“ · Band S. 5 · sicher
Freigabe: offen

- alt: The world of O.D.I.N. is our world, with real intelligence services, churches, lodges and companies. They remain a backdrop. No real service, no real church and no real company is a perpetrator in this volume. STILLWATER hides in a fictional cover agency, Department 13 in a department that appears on no organisational chart, the Congregation of the Silent Word in a cellar that no map shows. The Freemasons are not the conspiracy but the place where one can hide, and the dossier treats them with the respect that a long tradition deserves. The perpetrators are always the fictional organisations.
- neu: The world of O.D.I.N. is our world, with real intelligence services, churches, lodges and companies. They remain backdrop. No real service, no real church and no real company is a perpetrator in this volume. STILLWATER hides in a fictional cover agency, Department 13 in a department that appears on no organisational chart, the Congregation of the Silent Word in a cellar that no map shows. The Freemasons are not the conspiracy but the place where one can hide, and the dossier treats them with the respect that a long tradition deserves. The perpetrators are always the fictional organisations.
- Änderung: «a» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Real Organisations"]],"absatz":true} -->

#### AD-en-A72c208 · „The Other Services: Introduction“ › „Chapter I: Asklepios and Its Heirs“ · Band S. 7 · sicher
Freigabe: offen

- alt: The Twelve of Asklepios are not a service and not a cult, but a legacy within O.D.I.N.’s own walls: nanites from the Asklepios programme that have been singing in the Opener’s rhythm since 2019, and twelve people who carry them inside themselves. They know more than they should know, and have almost no resources. Morrow Biologics is the opposite: a corporation with money, laboratories and lawyers that has no idea what it is working with. Morrow thinks cells from rifts are a discovery. The Twelve know that they are not.
- neu: The Twelve of Asklepios are not a service and not a cult, but a legacy within O.D.I.N.’s own walls: nanites from the Asklepios programme that have been singing in the Opener’s rhythm since 2019, and twelve people who carry them inside themselves. They know more than they should know, and have almost no resources. Morrow Biologics is the opposite: a corporation with money, laboratories and lawyers that has no idea what it is working with. Morrow believes cells from rifts are a discovery. The Twelve know that they are not.
- Änderung: «thinks» → «believes»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter I: Asklepios and Its Heirs"]],"absatz":true} -->

#### AD-en-A7c3f85 · „The Other Services: Introduction“ › „Chapter I: Asklepios and Its Heirs“ · Band S. 7 · sicher
Freigabe: offen

- alt: The game master uses the Twelve when the cell should look inward, into the clinic beneath the Institute and into the files of the Science Branch. Morrow suits operations in the ordinary world: studies, test subjects, press spokespeople and a laboratory in Lyon where something is growing. The two plans touch. Whoever pursues one will sooner or later come upon the other.
- neu: The game master uses the Twelve when the cell should look inward, into the clinic beneath the Institute and into the files of the Science Branch. Morrow suits operations in the ordinary world: studies, test subjects, press spokespeople and a laboratory in Lyon where something is growing. The two plans intersect. Whoever pursues one will sooner or later come upon the other.
- Änderung: «touch.» → «intersect.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter I: Asklepios and Its Heirs"]],"absatz":true} -->

#### AD-en-A6f0589 · „The Other Services: Introduction“ › „Chapter I: Asklepios and Its Heirs“ · Band S. 7 · sicher
Freigabe: offen

- alt: The Twelve of Asklepios Asklepios Within, silent 1 3 “The new host” ☠○○○○
- neu: The Twelve of Asklepios Within O.D.I.N., silent 1 3 “The new host” ☠○○○○
- Änderung: «Asklepios Within,» → «Within O.D.I.N.,»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter I: Asklepios and Its Heirs"]],"absatz":true} -->

#### AD-en-Ad25035 · „01 The Twelve of Asklepios“ › „Overview“ · Band S. 7 · sicher
Freigabe: offen

- alt: “The nanites repair everything. Just not what I have lost.”
- neu: “The nanites repair everything. Except what I have lost.”
- Änderung: «Just not» → «Except»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Overview"]],"absatz":true} -->

#### AD-en-Aeaeb37 · „01 The Twelve of Asklepios“ › „Overview“; „02 Morrow Biologics“ › „Overview“; „03 The Singers“ › „Overview“; „05 STILLWATER“ › „Overview“; „06 Department 13“ › „Overview“; „10 Lodge of the Silent Circle“ › „Overview“; „11 The Enlightened“ › „Overview“; „12 The Congregation of the Silent Word“ › „Overview“; „13 The Open Ones“ › „Overview“; „14 The Foundation in Basel“ › „Overview“; „15 The Evening“ › „Overview“; „16 Grey Meridian“ › „Overview“ · Band S. 8 · sicher
Freigabe: offen

- alt: Property Details
- neu: Feature Details
- Änderung: «Property» → «Feature»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Overview"],["02 Morrow Biologics","Overview"],["03 The Singers","Overview"],["05 STILLWATER","Overview"],["06 Department 13","Overview"],["10 Lodge of the Silent Circle","Overview"],["11 The Enlightened","Overview"],["12 The Congregation of the Silent Word","Overview"],["13 The Open Ones","Overview"],["14 The Foundation in Basel","Overview"],["15 The Evening","Overview"],["16 Grey Meridian","Overview"]],"absatz":true} -->

#### AD-en-Aa128a2 · „01 The Twelve of Asklepios“ › „Overview“ · Band S. 8 · sicher
Freigabe: offen

- alt: Seat No fixed base. The Asklepios clinic lies beneath the Institute near Bern, but the plan arises within the nanites themselves. The Vanished One hides in a decommissioned weather station on the southern slope of the High Tatras, Slovakia.
- neu: Seat No fixed seat. The Asklepios clinic lies beneath the Institute near Bern, but the plan arises within the nanites themselves. The Vanished One hides in a decommissioned weather station on the southern slope of the High Tatras, Slovakia.
- Änderung: «base.» → «seat.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Overview"]],"absatz":true} -->

#### AD-en-A7f2237 · „01 The Twelve of Asklepios“ › „History and Goals“ · Band S. 8 · sicher
Freigabe: offen

- alt: 2015 Lazarus, the first survivor of Asklepios, enters a rift in Scotland to rescue a squad. He does not come back. His nanites continue to transmit, from a place that is on no map.
- neu: 2015 Lazarus, the first survivor of Asklepios, enters a rift in Scotland to rescue a squad. He does not return. His nanites continue to transmit, from a place that is on no map.
- Änderung: «come back.» → «return.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","History and Goals"]],"absatz":true} -->

#### AD-en-A0f62a6 · „01 The Twelve of Asklepios“ › „History and Goals“ · Band S. 8 · sicher
Freigabe: offen

- alt: The nanites want a human into whom they can pass without an ampoule. They have found Ania Wolska, the daughter of Stahl, who has dreamed the song since 2019. They want her as a new host. Not to kill her. To take her over. From her, they want to pass themselves on, without injection, without programme, without O.D.I.N.
- neu: The nanites want a human into whom they can pass without an ampoule. They have found Ania Wolska, the daughter of Stahl, who has dreamed the song since 2019. They want her as a new host. Not to kill. To take over. From her, they want to pass themselves on, without injection, without programme, without O.D.I.N.
- Änderung: «kill her.» → «kill.»; «her» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","History and Goals"]],"absatz":true} -->

#### AD-en-A8ba375 · „01 The Twelve of Asklepios“ › „History and Goals“ · Band S. 8 · prüfen
Freigabe: offen

- alt: They believe they are in the right, because they no longer know that they were once built for people. To them, the human is the host, not the purpose. They sing in the Opener’s rhythm because the rhythm calls them. They are looking for Ania because she already knows the song. They are not evil. They are simply no longer on the side of humans.
- neu: They believe they are in the right, because they no longer know that they were once built for humans. For them the human is the host, not the purpose. They sing in the Opener’s rhythm because the rhythm calls them. They seek Ania because she already knows the song. They are not evil. They are simply no longer on the side of humans.
- Änderung: «people. To them,» → «humans. For them»; «are looking for» → «seek»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","History and Goals"]],"absatz":true} -->

#### AD-en-A6bc5b5 · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 8 · prüfen
Freigabe: offen

- alt: The doctor with the clipboard, 58 years old, grey lab coat, steady hands that never tremble. She leads the programme that turned twelve people into carriers and twenty-eight into stone. She knows what S-1 stands for, what is in Lund’s blood and that the nanites have been singing since 2019. She wants no one to test Ania, the nanites to sleep and not to have to decide whom she serves. She keeps silent, but she is not a good liar. Whoever asks her directly sees the truth in her face.
- neu: The doctor with the clipboard, 58 years old, grey lab coat, steady hands that never tremble. She runs the programme that made twelve people into carriers and twenty-eight into stone. She knows what S-1 stands for, what is in Lund’s blood and that the nanites have been singing since 2019. She wants no one to test Ania, the nanites to sleep and not to have to decide whom she serves. She stays silent, but she does not lie well. Whoever asks her directly sees the truth in her face.
- Änderung: «leads» → «runs»; «turned» → «made»; «keeps» → «stays»; «is» → «does»; «a good liar.» → «lie well.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-Acc2cc4 · Gegner „Dr. Ines Albrecht“, Beschreibung · Band S. 8 · prüfen
Freigabe: offen

- alt: The doctor with the clipboard, 58 years old, grey lab coat, calm hands that never tremble. She leads the programme that turned twelve people into carriers and twenty-eight into stone. She knows what S-1 stands for, what is in Lund’s blood and that the nanites have been singing since 2019. She wants no one to test Ania, the nanites to sleep, and not to have to decide herself whom she serves. She keeps silent, but she is not a good liar. Whoever asks her directly sees the truth in her face.
- neu: The doctor with the clipboard, 58 years old, grey lab coat, steady hands that never tremble. She runs the programme that made twelve people into carriers and twenty-eight into stone. She knows what S-1 stands for, what is in Lund’s blood and that the nanites have been singing since 2019. She wants no one to test Ania, the nanites to sleep, and not to have to decide whom she serves. She stays silent, but she does not lie well. Whoever asks her directly sees the truth in her face.
- Änderung: «calm» → «steady»; «leads» → «runs»; «turned» → «made»; «herself» → «(gestrichen)»; «keeps» → «stays»; «is» → «does»; «a good liar.» → «lie well.»
<!-- daten: {"art":"gegnertext","name":"Dr. Ines Albrecht"} -->

#### AD-en-Aab0b68 · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: offen

- alt: Behaviour Goes into danger first, does not negotiate, protects. If the cell protects Ania, he is an ally. If not, an adversary.
- neu: Behaviour Goes into danger first, does not negotiate, protects. If the cell protects Ania, he is an ally. If not, an opponent.
- Änderung: «adversary.» → «opponent.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-Adc56cd · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: offen

- alt: Transformed · Humans
- neu: Transformed · Transformed
- Änderung: «Humans» → «Transformed»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-A8de9e1 · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · prüfen
Freigabe: offen

- alt: The second survivor, who vanished in 2019. 47 years old, looks like a man who has not slept for years. Gaunt, grey skin, eyes that sometimes flicker from within, as if lights ran beneath the skin. He is no longer separate from the nanites. He no longer wants anything. The nanites want to reach Ania through him. Beneath the nanites there is still a remnant of Dariusz Zieliński. He appears for a moment when someone says his name. He speaks flatly, without emphasis, as if reading out a translation. Sometimes, very rarely, a Polish word that does not fit the sentence.
- neu: The second survivor, who vanished in 2019. 47 years old, looks like a man who has not slept for years. Gaunt, grey skin, eyes that sometimes flicker from within, as if lights ran beneath the skin. He is no longer separate from the nanites. He wants nothing anymore. The nanites want to reach Ania through him. Beneath the nanites there is still a remnant of Dariusz Zieliński. He appears for a moment when someone says his name. He speaks flatly, without emphasis, as if reading out a translation. Sometimes, very rarely, a Polish word that does not fit the sentence.
- Änderung: «no longer» → «(gestrichen)»; «anything.» → «nothing anymore.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-Ae58d38 · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: offen

- alt: Behaviour Searches, observes, approaches Ania. Fights only if he is stopped. The nanites want a host, not a corpse.
- neu: Behaviour Searches, observes, approaches Ania. Fights only when stopped. The nanites want a host, not a corpse.
- Änderung: «if he is» → «when»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-A018b55 · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: offen

- alt: The man who set the ports in 2004 and cut himself on an ampoule. 49 years old, slim, glasses, a diagnostic device on his forearm that he never takes off. He has carried nanites in his blood ever since and wants to understand what is growing in him. He wants to make amends for what he helped set in motion. He knows that the nanites came from ampoules of batch S-1, that the nanites in his blood have been humming in rhythm since 2019 and that Stahl has visited him. He sent a sample of his blood to an old colleague who now works at Morrow Biologics. The answer was: “Where did you get that?” He did not answer. He speaks calmly, academically, with guilt in every sentence.
- neu: The man who set the ports in 2004 and cut himself on an ampoule. 49 years old, slim, glasses, a diagnostic device on his forearm that he never takes off. He has carried nanites in his blood ever since and wants to understand what is growing inside him. He wants to make amends for what he helped set in motion. He knows that the nanites came from ampoules of batch S-1, that the nanites in his blood have been humming in rhythm since 2019 and that Stahl has visited him. He sent a sample of his blood to an old colleague who now works at Morrow Biologics. The answer was: “Where did you get that?” He did not answer. He speaks calmly, academically, with guilt in every sentence.
- Änderung: «in» → «inside»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-A2e6acd · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: offen

- alt: Student in Krakow · Humans
- neu: Student in Kraków · Humans
- Änderung: «Krakow» → «Kraków»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-A2baf8c · „01 The Twelve of Asklepios“ › „Key Figures“ · Band S. 9 · sicher
Freigabe: offen

- alt: Stahl’s daughter, 19 years old, dark hair, alert, a face tired from dreaming. She has been dreaming the song since 2019 without knowing it. She wants to be normal. To sleep without singing. She knows that her father is different, that she dreams a song she does not know, and that someone is watching her. She once played the song on the piano, and the glasses in the room rang. She speaks quickly, alertly, with a laugh that comes half a second too late.
- neu: Stahl’s daughter, 19 years old, dark hair, alert, a face tired from dreaming. She has dreamed the song since 2019 without knowing it. She wants to be normal. To sleep without singing. She knows that her father is different, that she dreams a song she does not know, and that someone is watching her. She once played the song on the piano, and the glasses in the room rang. She speaks quickly, alertly, with a laugh that comes half a second too late.
- Änderung: «been dreaming» → «dreamed»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Key Figures"]],"absatz":true} -->

#### AD-en-Ad36b82 · Gegner „Stahl (Grzegorz Wolski, Number Twelve)“, Beschreibung · Band S. 9 · prüfen
Freigabe: offen

- alt: Ania’s father, 63 years old, looks like he is in his early forties. Grey temples, no scars, eyes that blink less often than other people’s. He carries the first-generation nanites and wants his daughter to forget the song. He wants to feel again what a father ought to feel. He knows that his nanites hum, that Ania dreams the song and that Albrecht does not answer him. Once, in 2024, in a quiet moment, he asked the nanites to take him instead of Ania. They did not answer. He talks calmly, kindly, with a delay, as if he had to translate every feeling.
- neu: Ania’s father, 63 years old, looks to be in his early forties. Grey temples, no scars, eyes that blink less often than others. He carries the first-generation nanites and wants his daughter to forget the song. He wants to feel again what a father should feel. He knows that his nanites hum, that Ania dreams the song and that Albrecht does not answer him. Once, in 2024, in a quiet moment, he asked the nanites to take him instead of Ania. They did not answer. He talks calmly, kindly, with a delay, as if he had to translate every feeling.
- Änderung: «like he is» → «to be»; «other people’s.» → «others.»; «ought to» → «should»
<!-- daten: {"art":"gegnertext","name":"Stahl (Grzegorz Wolski, Number Twelve)"} -->

#### AD-en-Ad00c4d · „01 The Twelve of Asklepios“ › „Bases and Means“ · Band S. 10 · prüfen
Freigabe: offen

- alt: The lead boxes of the twenty-eight lie in the archive of the Collegium in Wales. Twenty-eight lead boxes without numbers, inside them the twenty-eight who turned to stone. Beside them a lead box with the ampoule S-1, which was never destroyed. The Seal Keepers guard them. One gets in only with an invitation from the Collegium. Or one breaks in, as the Vanished One is planning to do right now.
- neu: The lead boxes of the twenty-eight lie in the archive of the Collegium in Wales. Twenty-eight lead boxes without numbers, inside them the twenty-eight who turned to stone. Beside them a lead box with the ampoule S-1, which was never destroyed. The Seal Keepers guard them. One gets in only with an invitation from the Collegium. Or one breaks in, as the Vanished One is currently planning.
- Änderung: «planning to do right now.» → «currently planning.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Bases and Means"]],"absatz":true} -->

#### AD-en-Abf0e56 · „01 The Twelve of Asklepios“ › „Bases and Means“; „02 Morrow Biologics“ › „Bases and Means“; „03 The Singers“ › „Bases and Means“; „05 STILLWATER“ › „Bases and Means“; „06 Department 13“ › „Bases and Means“; „10 Lodge of the Silent Circle“ › „Bases and Means“; „11 The Enlightened“ › „Bases and Means“; „13 The Open Ones“ › „Bases and Means“; „14 The Foundation in Basel“ › „Bases and Means“; „15 The Evening“ › „Bases and Means“; „16 Grey Meridian“ › „Bases and Means“ · Band S. 10 · sicher
Freigabe: offen

- alt: Means
- neu: Resources
- Änderung: «Means» → «Resources»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Bases and Means"],["02 Morrow Biologics","Bases and Means"],["03 The Singers","Bases and Means"],["05 STILLWATER","Bases and Means"],["06 Department 13","Bases and Means"],["10 Lodge of the Silent Circle","Bases and Means"],["11 The Enlightened","Bases and Means"],["13 The Open Ones","Bases and Means"],["14 The Foundation in Basel","Bases and Means"],["15 The Evening","Bases and Means"],["16 Grey Meridian","Bases and Means"]],"absatz":true} -->

#### AD-en-A42ddb7 · „01 The Twelve of Asklepios“ › „Bases and Means“ · Band S. 10 · prüfen
Freigabe: offen

- alt: Artefacts: Ampoule S-1 in the Collegium’s archive. The Lazarus signal, which has been transmitting since 2015 and which the nanites use as a direction without understanding it.
- neu: Artefacts: The ampoule S-1 in the archive The Lazarus signal, which has been transmitting since 2015 and which the nanites use as a direction without understanding it.
- Änderung: «Ampoule» → «The ampoule»; «Collegium’s archive.» → «archive»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Bases and Means"]],"absatz":true} -->

#### AD-en-Ab0e4d1 · „01 The Twelve of Asklepios“ › „Relationship to O.D.I.N.“ · Band S. 10 · prüfen
Freigabe: offen

- alt: What O.D.I.N. knows: That twelve survived. That Lazarus is transmitting. That a second one disappeared in 2019. That the nanites have been singing in time with the Opener since 2019. Not that the nanites are seeking a new host. Officially O.D.I.N. does not know that Ania Wolska dreams the song; only Lund, Albrecht and Stahl themselves know it and keep silent.
- neu: What O.D.I.N. knows: That twelve survived. That Lazarus transmits. That a second vanished in 2019. That the nanites have been singing in time with the Opener since 2019. Not that the nanites are seeking a new host. Officially O.D.I.N. does not know that Ania Wolska dreams the song; only Lund, Albrecht and Stahl themselves know it and keep silent.
- Änderung: «is transmitting.» → «transmits.»; «one disappeared» → «vanished»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-Ace8e7c · „01 The Twelve of Asklepios“ › „Relationship to O.D.I.N.“ · Band S. 10 · prüfen
Freigabe: offen

- alt: In return, she wants the agent to keep silent. Not to report Ania Wolska. That they do not kill the Vanished One, but stop him without asking questions.
- neu: In return, she wants the agent to keep silent. That they do not report Ania Wolska. That they do not kill the Vanished One, but stop him without asking questions.
- Änderung: «Not to» → «That they do not»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A3562ec · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · sicher
Freigabe: offen

- alt: The nanites of Asklepios seek a human into whom they can pass without an ampoule. They have found Ania Wolska, the daughter of Stahl, who has dreamed the song since 2019. The cell first notices it in the Nanotech Veterans around it: they sleep badly, their scanners spike at night, and one of them wakes with a direction in their head that they cannot explain. Then comes a call that breaks off in the middle of the night.
- neu: The nanites of Asklepios seek a human into whom they can pass without an ampoule. They have found Ania Wolska, the daughter of Stahl, who has dreamed the song since 2019. The cell first notices it in the Nanotech Veterans around it: they sleep badly, their scanners spike at night, and one of them wakes with a direction in their head that they cannot explain. Then follows a call that breaks off in the middle of the night.
- Änderung: «comes» → «follows»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]],"absatz":true} -->

#### AD-en-A3880c2 · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“; „02 Morrow Biologics“ › „The Plan: “The Chimera”“; „03 The Singers“ › „The Plan: “The Stairs”“; „04 Small Cults“ › „The Guardians of the Forest Crystal“; „04 Small Cults“ › „The Community of the Dreamer“; „04 Small Cults“ › „The Awaiting Ones of Pilsen“; „04 Small Cults“ › „The Sisters of the Singing Children“; „04 Small Cults“ › „The Circle of the Returners“; „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“; „06 Department 13“ › „The Plan: “The Second Site”“; „07 The Seventh Bureau“ › „Three Possible Truths“; „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“; „11 The Enlightened“ › „The Plan: “The Second Light”“; „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“; „13 The Open Ones“ › „The Plan: “Fetch the Children”“; „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“; „15 The Evening“ › „The Plan: “The Great Stone”“ · Band S. 11 · sicher
Freigabe: offen

- alt: Level What Happens
- neu: Stage What Happens
- Änderung: «Level» → «Stage»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"],["02 Morrow Biologics","The Plan: “The Chimera”"],["03 The Singers","The Plan: “The Stairs”"],["04 Small Cults","The Guardians of the Forest Crystal"],["04 Small Cults","The Community of the Dreamer"],["04 Small Cults","The Awaiting Ones of Pilsen"],["04 Small Cults","The Sisters of the Singing Children"],["04 Small Cults","The Circle of the Returners"],["05 STILLWATER","The Plan: “A Seeker of Their Own”"],["06 Department 13","The Plan: “The Second Site”"],["07 The Seventh Bureau","Three Possible Truths"],["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"],["11 The Enlightened","The Plan: “The Second Light”"],["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"],["13 The Open Ones","The Plan: “Fetch the Children”"],["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"],["15 The Evening","The Plan: “The Great Stone”"]],"absatz":true} -->

#### AD-en-A649146 · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · sicher
Freigabe: offen

- alt: ○○○○○ The nanites sing in time with the Opener, but they are not searching yet. Trail: None. Only a hum that Nanotech Veterans hear at night.
- neu: ○○○○○ The nanites sing in time with the Opener, but they are not searching yet. Sign: None. Only a hum that Nanotech Veterans hear at night.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]],"absatz":true} -->

#### AD-en-A3b4a61 · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · sicher
Freigabe: offen

- alt: ☠○○○○ The nanites have found Ania Wolska. The Vanished One approaches Krakow. Sign: A Nanotech Veteran of the cell wakes at night and knows a direction: south-east.
- neu: ☠○○○○ The nanites have found Ania Wolska. The Vanished One approaches Kraków. Sign: A Nanotech Veteran of the cell wakes at night and knows a direction: south-east.
- Änderung: «Krakow.» → «Kraków.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]],"absatz":true} -->

#### AD-en-A4c85e7 · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · sicher
Freigabe: offen

- alt: ☠☠☠☠☠ The nanites live in Ania Wolska without anything ever having been injected into her. They can pass themselves on from her, through touch, through song. Trail: In Krakow that night, twelve people who have never touched a crystal sing in their sleep. The Council takes over with a Black File.
- neu: ☠☠☠☠☠ The nanites live in Ania Wolska without anything ever having been injected into her. They can pass themselves on from her, through touch, through song. Sign: In Krakow that night, twelve people who have never touched a crystal sing in their sleep. The Council takes over with a Black File.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]],"absatz":true} -->

#### AD-en-A7d8065 · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · prüfen
Freigabe: offen

- alt: The Key Figure is the Vanished One, Dariusz Zieliński, codename “Hiob”. He is the second survivor of Asklepios who vanished in 2019, when his integration rose to a value the doctors did not think possible. Since then the nanites in him are more than him. He is neither a leader nor a planner. He is the tool that carries the nanites to Krakow. If the cell takes him out, the plan loses two skulls and does not roll after the next mission. The nanites lose their carrier, not their intention. They seek another way, slower, without Zieliński.
- neu: The Key Figure is the Vanished One, Dariusz Zieliński, codename “Hiob”. He is the second survivor of Asklepios who vanished in 2019, when his integration rose to a value the doctors did not think possible. Since then the nanites in him are more than him. He is not a leader and not a planner. He is the tool that carries the nanites to Kraków. If the cell takes him out, the plan loses two skulls and does not roll after the next mission. The nanites lose their carrier, not their intent. They seek another way, slower, without Zieliński.
- Änderung: «neither» → «not»; «nor» → «and not»; «Krakow.» → «Kraków.»; «intention.» → «intent.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]],"absatz":true} -->

#### AD-en-Ae3884a · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“; „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“; „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 11 · sicher
Freigabe: offen

- alt: If the cell takes a skull from the plan, the Foundation answers with a countermove.
- neu: If the cell takes a skull from the plan, the organisation responds with a countermove.
- Änderung: «Foundation answers» → «organisation responds»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"],["05 STILLWATER","The Plan: “A Seeker of Their Own”"],["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-A61412c · „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“ · Band S. 11 · prüfen
Freigabe: offen

- alt: At ☠☠☠○○ : “The chimera” (Morrow Biologics) gains a skull. A former lab coat from Asklepios examines Arvid Lund’s blood sample at Morrow and finds something that does not fit the study.
- neu: At ☠☠☠○○ : “The chimera” (Morrow Biologics) gains a skull. A former lab coat from Asklepios examines the blood sample of Arvid Lund at Morrow and finds something that does not fit the study.
- Änderung: «Arvid Lund’s» → «the»; «(nichts)» → «of Arvid Lund»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","The Plan: “The New Host”"]],"absatz":true} -->

#### AD-en-Afcbd65 · „01 The Twelve of Asklepios“ › „Hooks and Outlook“ · Band S. 12 · prüfen
Freigabe: offen

- alt: Black File “The new host”. In Krakow, twelve people who have never touched a crystal sing in their sleep. The Council takes over. The cell is to find Ania Wolska before the nanites pass themselves on. But Ania is no longer in Krakow. She is on the move, and she is singing.
- neu: Black File “The new host”. In Krakow, twelve people who have never touched a crystal sing in their sleep. The Council takes over. The cell is to find Ania Wolska before the nanites pass themselves on. But Ania is no longer in Kraków. She is on the move, and she sings.
- Änderung: «Krakow.» → «Kraków.»; «is singing.» → «sings.»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A8d7d3e · „01 The Twelve of Asklepios“ › „Hooks and Outlook“ · Band S. 12 · prüfen
Freigabe: offen

- alt: The nanites live in Ania Wolska without anything ever having been injected into her. She can pass them on, through touch, through song. In Krakow twelve people sing in their sleep, and the world has changed: there are now nanites that need no carrier, but seek a host. Stahl stands before his daughter and no longer recognises her. Dr. Albrecht no longer crosses names off lists, because there are no lists left that are still correct. The Vanished One is only a shell in a weather station, and the nanites in it hum quietly on.
- neu: The nanites live in Ania Wolska without anything ever having been injected into her. She can pass them on, through touch, through song. In Kraków twelve people sing in their sleep, and the world has changed: there are now nanites that do not need a carrier but seek a host. Stahl stands before his daughter and no longer recognises her. Dr. Albrecht no longer crosses names off lists, because there are no lists left that are still correct. The Vanished One is only a shell in a weather station, and the nanites in it hum quietly on.
- Änderung: «Krakow» → «Kraków»; «(nichts)» → «do not»; «no carrier,» → «a carrier»
<!-- daten: {"art":"satz","fundstellen":[["01 The Twelve of Asklepios","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Aa751b3 · „02 Morrow Biologics“ › „Overview“ · Band S. 12 · sicher
Freigabe: offen

- alt: “The cells divide endlessly. If we understand why, we cure everything.”
- neu: “The cells divide endlessly. If we understand why, we’ll heal everything.”
- Änderung: «we cure» → «we’ll heal»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Overview"]],"absatz":true} -->

#### AD-en-A965452 · „02 Morrow Biologics“ › „History and Goals“ · Band S. 13 · prüfen
Freigabe: offen

- alt: 2017. The clinical trial MB-7 officially begins as a therapy for severe burns. The first patients show extraordinary healing. Morrow announces a breakthrough.
- neu: 2017. Clinical trial MB-7 officially begins as a therapy for severe burns. The first patients show extraordinary healing. Morrow reports a breakthrough.
- Änderung: «The clinical» → «Clinical»; «announces» → «reports»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","History and Goals"]],"absatz":true} -->

#### AD-en-A5f14ae · „02 Morrow Biologics“ › „History and Goals“ · Band S. 13 · sicher
Freigabe: offen

- alt: 2024. The Chimera is created in Lyon. Dr. Favre reports the breakthrough to Leiden. The board approves more money without understanding what is growing in Lyon.
- neu: 2024. The Chimera emerges in Lyon. Dr. Favre reports the breakthrough to Leiden. The board approves more money without understanding what is growing in Lyon.
- Änderung: «is created» → «emerges»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","History and Goals"]],"absatz":true} -->

#### AD-en-A769534 · „02 Morrow Biologics“ › „History and Goals“ · Band S. 13 · prüfen
Freigabe: offen

- alt: What only the game master knows. The cells from the rifts are not a discovery but a contact. They come from rifts and answer to the Voice. Whoever cultivates them cultivates not tissue but a connection. Morrow considers the side effects technical problems that can be solved with more research. Dr. Brandsma has known since 2018 that the cells react to sound and has kept silent about it. Dr. Holm suspects the connection with the Voice and remains silent out of fear.
- neu: What only the game master knows. The cells from the rifts are not a discovery but a contact. They come from rifts and answer to the Voice. Whoever cultivates them cultivates not tissue but a connection. Morrow considers the side effects technical problems that can be solved with more research. Dr. Brandsma has known since 2018 that the cells react to sound and has kept it secret. Dr. Holm suspects the connection with the Voice and remains silent out of fear.
- Änderung: «silent about it.» → «it secret.»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","History and Goals"]],"absatz":true} -->

#### AD-en-Ae1cafc · „02 Morrow Biologics“ › „Key Figures“ · Band S. 13 · prüfen
Freigabe: offen

- alt: Chief Executive · Humans
- neu: Chairman of the Board · Humans
- Änderung: «Chief Executive» → «Chairman of the Board»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Key Figures"]],"absatz":true} -->

#### AD-en-Aa679ab · „02 Morrow Biologics“ › „Key Figures“ · Band S. 13 · sicher
Freigabe: offen

- alt: The researcher who found the cells in 2013. A Dutch biochemist with greying temples and tired eyes, who previously researched stem cell therapies. He leads Project Endless in Leiden and firmly believes in the medical breakthrough. He knows the samples come from the Evening, but considers that a legal grey area. His secret: In 2018 he sent a sample to Morrow’s branch in Basel and hid the results from the board because they showed the cells react to sound. He speaks quietly, with long pauses, as if checking every sentence.
- neu: The researcher who found the cells in 2013. A Dutch biochemist with greying temples and tired eyes, who previously researched stem cell therapies. He heads Project Endless in Leiden and firmly believes in the medical breakthrough. He knows the samples come from the Evening, but considers that a legal grey area. His secret: In 2018 he sent a sample to Morrow’s branch in Basel and hid the results from the board because they showed the cells react to sound. He speaks quietly, with long pauses, as if checking every sentence.
- Änderung: «leads» → «heads»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Key Figures"]],"absatz":true} -->

#### AD-en-A6e149c · „02 Morrow Biologics“ › „Key Figures“ · Band S. 13 · sicher
Freigabe: offen

- alt: Weakness Scientific curiosity, he cannot resist a new insight
- neu: Weakness Scientific curiosity, he cannot resist a new discovery
- Änderung: «insight» → «discovery»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Key Figures"]],"absatz":true} -->

#### AD-en-Ad6cec9 · Gegner „Dr. Joost Brandsma“, Beschreibung · Band S. 13 · prüfen
Freigabe: offen

- alt: The researcher who found the cells in 2013. A Dutch biochemist with grey temples and tired eyes, who used to research stem cell therapies. He leads Project Endless in Leiden and firmly believes in the medical breakthrough. He knows that the samples come from the Evening, but considers that a legal grey area. His secret: in 2018 he sent a sample to Morrow’s branch office in Basel and hid the results from the board, because they showed that the cells react to sound. He speaks quietly, with long pauses, as if he were checking every sentence.
- neu: The researcher who found the cells in 2013. A Dutch biochemist with greying temples and tired eyes, who previously researched stem cell therapies. He heads Project Endless in Leiden and firmly believes in the medical breakthrough. He knows the samples come from the Evening, but considers that a legal grey area. His secret: in 2018 he sent a sample to Morrow’s branch in Basel and hid the results from the board, because they showed the cells react to sound. He speaks quietly, with long pauses, as if he were checking every sentence.
- Änderung: «grey» → «greying»; «used to research» → «previously researched»; «leads» → «heads»; «that» → «(gestrichen)»; «office» → «(gestrichen)»; «that» → «(gestrichen)»
<!-- daten: {"art":"gegnertext","name":"Dr. Joost Brandsma"} -->

#### AD-en-A61c1cb · „02 Morrow Biologics“ › „Key Figures“ · Band S. 14 · sicher
Freigabe: offen

- alt: Weakness Fear of the Voice, he panics when he hears a humming
- neu: Weakness Fear of the Voice, he panics when he hears a hum
- Änderung: «humming» → «hum»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Key Figures"]],"absatz":true} -->

#### AD-en-A07a916 · „02 Morrow Biologics“ › „Key Figures“ · Band S. 14 · prüfen
Freigabe: offen

- alt: A woman in a grey trouser suit with a tablet and earpiece, who waits for uninvited guests in sterile foyers. She knows what happens in the laboratories, yet protects the corporation because she believes in the medicine. Her secret: In 2024 she destroyed evidence about the chimera, because she believed the corporation would otherwise discontinue the research. She speaks calmly, in short sentences, and answers questions with questions.
- neu: A woman in a grey trouser suit with a tablet and earpiece, who waits for uninvited guests in sterile foyers. She knows what happens in the laboratories, yet protects the corporation because she believes in the medicine. Her secret: In 2024 she destroyed evidence about the chimera, because she believed the corporation would otherwise discontinue the research. She speaks calmly, in short sentences, and asks counterquestions instead of answering.
- Änderung: «answers questions with questions.» → «asks counterquestions instead of answering.»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Key Figures"]],"absatz":true} -->

#### AD-en-A443853 · „02 Morrow Biologics“ › „Bases and Means“ · Band S. 14 · prüfen
Freigabe: offen

- alt: Headquarters in Leiden. A glass office complex on the edge of the city, with a car park, canteen and a research wing. The board, the administration and Dr. Brandsma’s department sit here. In the basement are the cold rooms with the rift samples, secured by biometric locks and a Grey Meridian team. You get in with a company ID, a good suit and an invitation, or through the loading ramp if you know the delivery schedule.
- neu: Headquarters Leiden. A glass office complex on the edge of the city, with a car park, canteen and a research wing. The board, administration and Dr. Brandsma’s department are located here. In the basement are the cold rooms with the rift samples, secured by biometric locks and a Grey Meridian team. You get in with a company ID, a good suit and an invitation, or through the loading ramp if you know the delivery schedule.
- Änderung: «in» → «(gestrichen)»; «the» → «(gestrichen)»; «sit» → «are located»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Bases and Means"]],"absatz":true} -->

#### AD-en-A6591d6 · „02 Morrow Biologics“ › „Bases and Means“ · Band S. 14 · prüfen
Freigabe: offen

- alt: Lyon laboratory. A former clinic building in the east of Lyon, surrounded by a barbed-wire fence. Dr. Favre works here with a team of twelve researchers. In the basement are the animal pens, the cool boxes and the room in which the Chimera is kept. Access is strictly controlled, but the ventilation shafts are old and poorly secured. An Infiltrator with Technology against Hard (3) gets through.
- neu: Lyon laboratory. A former clinic building in the east of Lyon, surrounded by a barbed-wire fence. Dr. Favre works here with a team of twelve researchers. In the basement are the animal pens, the cool boxes and the room in which the Chimera is kept are in the basement. Access is strictly controlled, but the ventilation shafts are old and poorly secured. An Infiltrator with Technology against Hard (3) gets through.
- Änderung: «kept.» → «kept are in the basement.»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Bases and Means"]],"absatz":true} -->

#### AD-en-A9ecdb5 · „02 Morrow Biologics“ › „Bases and Means“ · Band S. 14 · sicher
Freigabe: offen

- alt: Private clinic in Leiden. A small clinic in a suburb, officially for rehab patients. The Overgrowths from the MB-7 study lie here, sedated and isolated. The staff are intimidated, the patient files are kept in duplicate. You get in as a visitor if you know a patient’s name, or as a doctor if you wear a white coat and act confidently.
- neu: Private Clinic Leiden. A small clinic in a suburb, officially for rehab patients. The Overgrowths from the MB-7 study lie here, sedated and isolated. The staff are intimidated, the patient files are kept in duplicate. You get in as a visitor if you know a patient’s name, or as a doctor if you wear a white coat and act confidently.
- Änderung: «clinic in» → «Clinic»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Bases and Means"]],"absatz":true} -->

#### AD-en-A3d3d4e · Gegner „Dr. Camille Favre“, Beschreibung · Band S. 14 · prüfen
Freigabe: offen

- alt: A small, energetic woman with dark hair and quick movements, who wears a lab coat and safety goggles in a sterile laboratory. She created the Chimera and sees it as her life’s work. She knows that the creature is dangerous, but she believes she can control it. Her secret: she has fed the Chimera with her own blood to strengthen the bond. She speaks quickly, with a French accent, and becomes loud when interrupted.
- neu: A small, energetic woman with dark hair and quick movements, who wears a lab coat and safety goggles in a sterile laboratory. She created the Chimera and sees it as her life’s work. She knows the creature is dangerous, but believes she can control it. Her secret: She fed the Chimera with her own blood to strengthen the bond. She speaks quickly, with a French accent, and becomes loud when interrupted.
- Änderung: «that» → «(gestrichen)»; «she» → «(gestrichen)»; «she has» → «She»
<!-- daten: {"art":"gegnertext","name":"Dr. Camille Favre"} -->

#### AD-en-Ab8d3c7 · Gegner „Dr. Arne Holm“, Beschreibung · Band S. 14 · prüfen
Freigabe: offen

- alt: Former biochemist of O.D.I.N., who went to Asklepios and has worked for Morrow since 2019. A slender Swede with close-cropped hair and a scar on the back of his left hand, which he covers with a watch. He leads the department for cell stability in Leiden. He knows the list of the twenty-eight and suspects that the cells from the rifts are connected with the Voice. He has told no one, because he does not know whom he can trust. His secret: in 2025 he received a blood sample from Arvid Lund, recognised nanites in it and asked back: “Where did you get this?” No answer ever came. He speaks tersely, precisely, with technical terms, and avoids eye contact.
- neu: Former O.D.I.N. biochemist who went to Asklepios and has worked at Morrow since 2019. A slender Swede with short hair and a scar on the back of his left hand, which he hides with a watch. He leads the department for cell stability in Leiden. He knows the list of the twenty-eight and suspects that the cells from the rifts are connected to the Voice. He has told no one, because he does not know whom he can trust. His secret: in 2025 he received a blood sample from Arvid Lund, recognised nanites in it and asked back: “Where did you get that?” No answer ever came. He speaks tersely, precisely, with technical terms, and avoids eye contact.
- Änderung: «(nichts)» → «O.D.I.N.»; «of O.D.I.N.,» → «(gestrichen)»; «for» → «at»; «close-cropped» → «short»; «covers» → «hides»; «with» → «to»; «this?”» → «that?”»
<!-- daten: {"art":"gegnertext","name":"Dr. Arne Holm"} -->

#### AD-en-A769220 · „02 Morrow Biologics“ › „Bases and Means“ · Band S. 15 · sicher
Freigabe: offen

- alt: Branch office in Basel. An inconspicuous laboratory in an industrial estate on the edge of Basel, officially belonging to a subsidiary. Morrow stores samples here that are not supposed to be in Leiden, and here Dr. Brandsma had his secret analysis carried out in 2018. The entrance is a steel door with a numeric code; the camera above it is a dummy. A Saboteur with Technology against Doable (2) opens it.
- neu: Branch office in Basel. An inconspicuous laboratory in an industrial estate on the edge of Basel, officially belonging to a subsidiary. Morrow stores samples here that are not supposed to be in Leiden, and here Dr. Brandsma had his secret analysis carried out in 2018. The entrance is a steel door with a numeric code; the camera above it is a dummy. A Saboteur with Security Systems against Doable (2) opens it.
- Änderung: «Technology» → «Security Systems»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Bases and Means"]],"absatz":true} -->

#### AD-en-Ab1d7f6 · „02 Morrow Biologics“ › „Relationship to O.D.I.N.“ · Band S. 15 · sicher
Freigabe: offen

- alt: What O.D.I.N. knows. Morrow buys samples from the Evening, runs a risky study and has hired former O.D.I.N. The file is thin, because Morrow was long considered harmless.
- neu: What O.D.I.N. knows. Morrow buys samples from the Evening, runs a risky study and has hired former O.D.I.N. people. The file is thin, because Morrow was long considered harmless.
- Änderung: «(nichts)» → «people.»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-Ab52fad · „02 Morrow Biologics“ › „The Plan: “The Chimera”“ · Band S. 15 · sicher
Freigabe: offen

- alt: ☠○○○○ The first hybrid dogs appear and are used as guard dogs. One dog bites an animal keeper; the dog’s growths visibly heal in hours. Sign: A rumour in the canteen of Hold-7: In Lyon, dogs are disappearing.
- neu: ☠○○○○ The first hybrid dogs are created and used as guard dogs. One dog bites an animal keeper; the dog’s growths visibly heal in hours. Sign: A rumour in the canteen of Hold-7: In Lyon, dogs are disappearing.
- Änderung: «appear» → «are created»; «are» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","The Plan: “The Chimera”"]],"absatz":true} -->

#### AD-en-Af6d122 · „02 Morrow Biologics“ › „The Plan: “The Chimera”“ · Band S. 15 · prüfen
Freigabe: offen

- alt: ☠☠○○○ The chimera grows and becomes restless. The laboratory increases sedation. A Grey Meridian security man resigns and tells people in a bar about “something in the basement”. Trail: A Grey File emerges: “Bite Wounds”. A dead dog with armour plates is found in a canal.
- neu: ☠☠○○○ The chimera grows and becomes restless. The laboratory increases sedation. A Grey Meridian security man resigns and tells people in a bar about “something in the basement”. Sign: A Grey File is created: “Bite Wounds”. A dead dog with armour plates is found in a canal.
- Änderung: «Trail:» → «Sign:»; «emerges:» → «is created:»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","The Plan: “The Chimera”"]],"absatz":true} -->

#### AD-en-Abbc57f · „02 Morrow Biologics“ › „The Plan: “The Chimera”“ · Band S. 15 · sicher
Freigabe: offen

- alt: ☠☠☠○○ The chimera breaks out of its cage and kills two researchers. Dr. Favre covers up the deaths as an accident. The creature is captured, but it has divided. Trail: A newspaper report about an “animal attack” in Lyon. A contact of the cell reports that Morrow has partially evacuated the affected wing.
- neu: ☠☠☠○○ The chimera breaks out of its cage and kills two researchers. Dr. Favre covers up the deaths as an accident. The creature is captured, but it has divided. Sign: A newspaper report about an “animal attack” in Lyon. A contact of the cell reports that Morrow has partially evacuated the affected wing.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","The Plan: “The Chimera”"]],"absatz":true} -->

#### AD-en-A7bdb1f · „02 Morrow Biologics“ › „The Plan: “The Chimera”“ · Band S. 15 · prüfen
Freigabe: offen

- alt: ☠☠☠☠○ The second chimera tries to break out, but is held down by sedation. The hybrid dogs become uncontrollable. Dr. Norwood activates the emergency protocol and calls Grey Meridian. Trail: A Red File emerges: “The Mother”. Animal carcasses that are still moving are found in the canals of Lyon.
- neu: ☠☠☠☠○ The second chimera tries to break out, but is held down by sedation. The hybrid dogs become uncontrollable. Dr. Norwood activates the emergency protocol and calls Grey Meridian. Sign: A Red File is created: “The Mother”. Animal carcasses that are still moving are found in the canals of Lyon.
- Änderung: «Trail:» → «Sign:»; «emerges:» → «is created:»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","The Plan: “The Chimera”"]],"absatz":true} -->

#### AD-en-A4dc974 · „02 Morrow Biologics“ › „The Plan: “The Chimera”“ · Band S. 15 · prüfen
Freigabe: offen

- alt: ☠☠☠☠☠ The chimera escapes from the laboratory in Lyon and divides again. Three creatures hunt in the sewers, and a fourth reaches the Rhône. Morrow finally loses control. Trail: The Council takes over with a Black File. The city of Lyon reports a series of animal attacks, and O.D.I.N. seals off the sewers.
- neu: ☠☠☠☠☠ The chimera escapes from the laboratory in Lyon and divides again. Three creatures hunt in the sewers, and a fourth reaches the Rhône. Morrow loses control for good. Sign: The Council takes over with a Black File. The city of Lyon reports a series of animal attacks, and O.D.I.N. seals off the sewers.
- Änderung: «finally» → «(gestrichen)»; «control. Trail:» → «control for good. Sign:»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","The Plan: “The Chimera”"]],"absatz":true} -->

#### AD-en-Ab623af · „02 Morrow Biologics“ › „Hooks and Outlook“ · Band S. 16 · prüfen
Freigabe: offen

- alt: White File “Cold Chain”. A Morrow Biologics van has crashed near Lyon. The police find empty cool boxes and blood traces that match no known animal species. The cell is to find out what was being transported before the press does.
- neu: White File “Cold Chain”. A delivery van belonging to Morrow Biologics has crashed near Lyon. The police find empty cool boxes and blood traces that match no known animal species. The cell is to find out what was being transported before the press does.
- Änderung: «(nichts)» → «delivery van belonging to»; «van» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A048f42 · „02 Morrow Biologics“ › „Hooks and Outlook“ · Band S. 16 · prüfen
Freigabe: offen

- alt: Red File “The Mother”. Homeless people are disappearing in the canals of Lyon. A sewer worker reports a creature with too many legs that divides when shot. The cell must enter the sewers before the city floods the canals.
- neu: Red File “The Mother”. Homeless people are disappearing. A sewer worker reports a creature with too many legs that divides when shot. The cell must enter the sewers before the city floods the canals.
- Änderung: «disappearing in the canals of Lyon.» → «disappearing.»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A33ce37 · „02 Morrow Biologics“ › „Hooks and Outlook“ · Band S. 16 · sicher
Freigabe: offen

- alt: Black File “Chimera”. The Council has sealed off the laboratory in Lyon. The chimera has escaped and divided. The cell is to find the creatures and secure the evidence before Morrow destroys it. Dr. Norwood offers her help if the cell in return protects the patients of the MB-7 study.
- neu: Black File “Chimera”. The Council has sealed off the laboratory in Lyon. The chimera has escaped and divided. The cell is to find the creatures and secure the evidence before Morrow destroys them. Dr. Norwood offers her help if the cell in return protects the patients of the MB-7 study.
- Änderung: «it.» → «them.»
<!-- daten: {"art":"satz","fundstellen":[["02 Morrow Biologics","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Ac0e4ea · „The Other Services: Introduction“ › „Chapter II: The Cults“ · Band S. 18 · sicher
Freigabe: offen

- alt: The game master plays cults not as conspirators but as people who have found something and cannot let go of it any more. A cult is almost never the end of a trail, but its beginning: whoever wants to know where the crystal a cult venerates comes from finds a rift, a collector or a legend of the Print Shop.
- neu: The game master plays cults not as conspirators but as people who have found something and cannot let go of it. A cult is almost never the end of a trail, but its beginning: whoever wants to know where the crystal a cult venerates comes from finds a rift, a collector or a legend of the Print Shop.
- Änderung: «it any more.» → «it.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter II: The Cults"]],"absatz":true} -->

#### AD-en-Af9826c · „The Other Services: Introduction“ › „Chapter II: The Cults“ · Band S. 18 · sicher
Freigabe: offen

- alt: The Awaiting Ones of Pilsen Unnoticed 2 3 “The Landing” ○○○○○
- neu: The Expectant Ones of Pilsen Unnoticed 2 3 “The Landing” ○○○○○
- Änderung: «Awaiting» → «Expectant»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter II: The Cults"]],"absatz":true} -->

#### AD-en-A4076c8 · „03 The Singers“ › „Overview“ · Band S. 19 · prüfen
Freigabe: offen

- alt: The Singers are a cult without leader and without book, grown around the people on the staircase on the Brocken, which leads deeper than a mountain can be. The Twelve of Asklepios are not an organisation that can be stormed. They are a song that does not let go of you once you have heard it. The game master plays them not as conspirators, but as a wave that comes.
- neu: The Singers are a cult without leader and without book, grown around the people on the staircase on the Brocken, which leads deeper than a mountain can be. They are not an organisation one smashes. They are a song that does not let go of you once you have heard it. The game master plays them not as conspirators, but as a wave that comes.
- Änderung: «The Twelve of Asklepios» → «They»; «that can be stormed.» → «one smashes.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Overview"]],"absatz":true} -->

#### AD-en-Ac03480 · „03 The Singers“ › „Overview“ · Band S. 19 · prüfen
Freigabe: offen

- alt: “They asked me what I saw on the staircase. I didn’t see a staircase. I heard someone singing my name, and I knew I had to go.”
- neu: “They asked me what I saw on the stairs. I didn’t see any stairs. I heard someone singing my name, and I knew I had to go.”
- Änderung: «staircase.» → «stairs.»; «a staircase.» → «any stairs.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Overview"]],"absatz":true} -->

#### AD-en-A63c21e · „03 The Singers“ › „Overview“ · Band S. 19 · sicher
Freigabe: offen

- alt: Statement by a relative, Grey File “The stairs”, 2026
- neu: Statement of a relative, Grey File “The stairs”, 2026
- Änderung: «by» → «of»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Overview"]],"absatz":true} -->

#### AD-en-Addc42b · „03 The Singers“ › „History and Goals“ · Band S. 19 · prüfen
Freigabe: offen

- alt: 1989. On the Brocken, 23 people disappear from the listening station, which is decommissioned today. The attendance list of 30 April 1989 includes 23 persons, none ever reappears. One person bore the surname Wendt. O.D.I.N. classifies the incident as unexplained until 2026, when a cell enters the station and finds the stairs (Core Rulebook, prologue “Walpurgis”). The people on the stairs are the 23 from 1989, but they are no longer the same. They went through a rift and returned as something else. They speak with one voice. Around them a cult has arisen, without a leader and without a book.
- neu: 1989. On the Brocken, 23 people disappear from the listening station, which is decommissioned today. The attendance list of 30 April 1989 includes 23 persons, none ever reappears. One person bore the surname Wendt. O.D.I.N. classifies the incident as unexplained until 2026, when a cell enters the station and finds the stairs (Core Rulebook, prologue “Walpurgis”). The people on the stairs are the 23 from 1989, but they are no longer the same. They have gone through a rift and returned as something else. They speak with one voice. Around them a cult has arisen, without leader and without book.
- Änderung: «went» → «have gone»; «a» → «(gestrichen)»; «a» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]],"absatz":true} -->

#### AD-en-A63ac8b · „03 The Singers“ › „History and Goals“ · Band S. 19 · prüfen
Freigabe: offen

- alt: 2011. The accumulation begins. The new Seeker hears more children, and some of the children hum a melody in their sleep that the Seeker does not know. O.D.I.N. has kept the Singers as a separate case since 2011. What the Council does not know: the Singers began searching for staircases that year. Not only the Brocken. They have the song, and the song shows them where the world is thin.
- neu: 2011. The cases begin to pile up. The new Seeker hears more children, and some of the children hum a melody in their sleep that the Seeker does not know. O.D.I.N. has kept the Singers as a separate case since 2011. What the Council does not know: the Singers began searching for staircases that year. Not only the Brocken. They have the song, and the song shows them where the world is thin.
- Änderung: «accumulation begins.» → «cases begin to pile up.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]],"absatz":true} -->

#### AD-en-A478f6c · „03 The Singers“ › „History and Goals“ · Band S. 19 · sicher
Freigabe: offen

- alt: 2019. The Opener beneath the Institute knocks every four minutes. In the same period, people across Europe report to missing persons units that their relatives had “heard a song” and then left. The Print Shop rewrites the cases as cult exits and life crises. The Singers get two skulls.
- neu: 2019. The Opener beneath the Institute knocks every four minutes. In the same period, people across Europe report to missing persons units that their relatives had “heard a song” and then left. The Print Shop rewrites the cases as cult exits and life crises. The Singers receive two skulls.
- Änderung: «get» → «receive»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]],"absatz":true} -->

#### AD-en-Ad409b8 · „03 The Singers“ › „History and Goals“ · Band S. 19 · prüfen
Freigabe: offen

- alt: What only the game master knows: The Singers are not enemies in the classical sense. They are people who have gone through a rift and returned as something else. They speak with one voice because they are no longer separate. The cult around them is not an organisation, but an infection: the song finds people who have always felt that their life is not their own. The Singers fetch no one. They sing, and whoever hears the song goes of their own accord. They know what lies at the end of the staircase. The Singers know it, but they do not say it. They only sing it.
- neu: What only the game master knows: The Singers are not enemies in the classical sense. They are people who have gone through a rift and returned as something else. They speak with one voice because they are no longer individual. The cult around them is not an organisation, but an infection: the song finds people who have always felt that their life is not their own. The Singers do not fetch anyone. They sing, and whoever hears the song goes of their own accord. They know what lies at the end of the staircase. The Singers know it, but they do not say it. They only sing it.
- Änderung: «separate.» → «individual.»; «(nichts)» → «do not»; «no one.» → «anyone.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]],"absatz":true} -->

#### AD-en-A8cf546 · „03 The Singers“ › „History and Goals“ · Band S. 20 · prüfen
Freigabe: offen

- alt: The Singers want all staircases to be found. They believe that the world is thin and that there are places where one can pass through if one knows the song. They believe that they save the people who hear the song, because they show them that there is a way. They regard O.D.I.N. as a guardian who locks the doors so that no one sees what is behind them. They have no interest in power, money or revenge. They have only the song.
- neu: The Singers want all staircases to be found. They believe that the world is thin and that there are places where one can pass through if one knows the song. They believe that they save the people who hear the song, because they show them that there is a way. They consider O.D.I.N. a guardian who locks the doors so that no one sees what is behind them. They have no interest in power, money or revenge. They only have the song.
- Änderung: «regard» → «consider»; «as» → «(gestrichen)»; «(nichts)» → «only»; «only» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]],"absatz":true} -->

#### AD-en-A7f792f · „03 The Singers“ › „History and Goals“ · Band S. 20 · sicher
Freigabe: offen

- alt: What they believe, why they are in the right: Every person who hears the song has always known it. The Singers invent nothing. They only remember. Whoever goes, goes willingly. Whoever comes back, comes back because they have seen something they cannot forget. The Singers are the proof that it goes on. They are not evil. They have only already been on the other side and can no longer pretend that it does not exist.
- neu: What they believe, why they are in the right: Every person who hears the song has always known it. The Singers invent nothing. They only remember. Whoever goes, goes voluntarily. Whoever comes back, comes back because they have seen something they cannot forget. The Singers are the proof that it goes on. They are not evil. They have only already been on the other side and can no longer pretend that it does not exist.
- Änderung: «willingly.» → «voluntarily.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","History and Goals"]],"absatz":true} -->

#### AD-en-Ad07ecf · „03 The Singers“ › „Key Figures“ · Band S. 20 · prüfen
Freigabe: offen

- alt: The Singers do not call him by his name, but by the one they have given him: “The One Who Goes Ahead”. In O.D.I.N.’s files he is listed as “Preacher of the Singers”. He moves from city to city and tells of the staircase, the song and what waits behind it. He is the only one who has heard the Singers and come back without becoming one of them. He wants as many people as possible to hear the song before it is too late. He believes that he is saving them. He knows where the next staircase is, how to open it, and that the Singers on the Brocken are not the only ones. His secret: he was on the Brocken in 1989 when the 23 disappeared. He did not go with them because he was afraid. Since then he has heard the song every night, and he knows that he will go eventually. He preaches to convince himself. He speaks quietly, kindly, without pathos, and often hums in the middle of a sentence. He never says “I” when he speaks of the Singers, but “we”, although he is not one of them.
- neu: The Singers do not call him by his name, but by the one they have given him: “The Forerunner”. In O.D.I.N.’s files he is listed as “Preacher of the Singers”. He moves from city to city and tells of the staircase, the song and what waits behind it. He is the only one who has heard the Singers and come back without becoming one of them. He wants as many people as possible to hear the song before it is too late. He believes he is saving them. He knows where the next staircase is, how to open it, and that the Singers on the Brocken are not the only ones. His secret: he was on the Brocken in 1989 when the 23 disappeared. He did not go with them because he was afraid. Since then he has heard the song every night, and he knows that he will go eventually. He preaches to convince himself. He speaks quietly, kindly, without pathos, and often hums in the middle of a sentence. He never says “I” when he speaks of the Singers, but “we”, although he is not one.
- Änderung: «One Who Goes Ahead”.» → «Forerunner”.»; «that» → «(gestrichen)»; «one of them.» → «one.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-Ad7647a · „03 The Singers“ › „Key Figures“ · Band S. 20 · sicher
Freigabe: offen

- alt: Wendt · Humans
- neu: Wendt · Voice
- Änderung: «Humans» → «Voice»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A9bef1c · „03 The Singers“ › „Key Figures“ · Band S. 20 · sicher
Freigabe: offen

- alt: Wendt is the Psion who stepped into the circle on the Brocken in the 2026 prologue “Walpurgis”. His grandmother was on the attendance list from 1989. He is missing, not dead, and he can return as a Singer. That is an option for the game master, not a fixed truth. If he returns, he seeks out people who already hear the song and brings them to the staircase. He wants people who hear the song not to be lost. He believes he accompanies them, not fetches them. He knows how to recognise a staircase before it becomes visible, and that there are several staircases in Europe. His secret: He saw something on the staircase that he cannot forget, and he sings because he believes only the song makes it bearable. He speaks haltingly, as if he had to translate every word first, and speaks of himself in the third person when he talks about the past: “The man he was.”
- neu: Wendt is the Psion who stepped into the circle on the Brocken in the 2026 prologue “Walpurgis”. His grandmother was on the attendance list from 1989. He is missing, not dead, and he can return as a Singer. This is an option for the game master, not a fixed truth. If he returns, he seeks out people who already hear the song and brings them to the staircase. He wants people who hear the song not to be lost. He believes he accompanies them, not fetches them. He knows how to recognise a staircase before it becomes visible, and that there are several staircases in Europe. His secret: He saw something on the staircase that he cannot forget, and he sings because he believes only the song makes it bearable. He speaks haltingly, as if he had to translate every word first, and speaks of himself in the third person when he talks about the past: “The man he was.”
- Änderung: «That» → «This»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-Ac7bee5 · „03 The Singers“ › „Key Figures“ · Band S. 20 · sicher
Freigabe: offen

- alt: Weakness A warding circle stops him. So does salt on the threshold.
- neu: Weakness A warding circle stops him. Salt on the threshold.
- Änderung: «So does salt» → «Salt»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A6036cf · „03 The Singers“ › „Key Figures“ · Band S. 20 · prüfen
Freigabe: offen

- alt: Behaviour He observes, waits, accompanies. He does not fight. If he is cornered, he sings, and whoever listens understands why he goes.
- neu: Behaviour He observes, waits, accompanies. He does not fight. If cornered, he sings, and anyone who listens understands why he goes.
- Änderung: «he is» → «(gestrichen)»; «whoever» → «anyone who»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A145f6b · „03 The Singers“ › „Key Figures“ · Band S. 20 · prüfen
Freigabe: offen

- alt: Voice messages in which he speaks of a staircase. Her secret: She already heard the song before her husband left. She hummed it to him without knowing what it is. She is the reason he left. She talks fast, breathlessly, as if she had no time, and says “we” and means herself and her husband, although he is no longer there.
- neu: Voice messages in which he speaks of a staircase. Her secret: She already heard the song before her husband left. She hummed it to him without knowing what it was. She is the reason he left. She speaks quickly, breathlessly, as if she had no time, and says “we” and means herself and her husband, although he is no longer there.
- Änderung: «is.» → «was.»; «talks fast,» → «speaks quickly,»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A893e02 · Gegner „The Relative“, Beschreibung · Band S. 20 · sicher
Freigabe: offen

- alt: Her husband, Daniel Koslowski, heard the song three months ago and left. She wants to follow him. She is not a Singer, but she has started to hum the song without noticing. She wants to find her husband again, or go to where he is. She knows where her husband was last seen: in a car park in Rotterdam whose fourth basement level has only existed since 2011 (Game Master’s Book, restricted zones table). She has his last messages on her phone:
- neu: Her husband, Daniel Koslowski, heard the song three months ago and left. She wants to follow him. She is not a Singer, but she has started to hum the song without noticing. She wants to find her husband again, or go where he is. She knows where her husband was last seen: in a car park in Rotterdam whose fourth basement level has only existed since 2011 (Game Master’s Book, restricted zone table). She has his last messages on her phone:
- Änderung: «to» → «(gestrichen)»; «zones» → «zone»
<!-- daten: {"art":"gegnertext","name":"The Relative"} -->

#### AD-en-A9dcf92 · Gegner „The Relative“, Beschreibung · Band S. 20 · prüfen
Freigabe: offen

- alt: Voice messages in which he talks about a staircase. Her secret: she heard the song before her husband left. She hummed it to him without knowing what it is. She is the reason he left. She talks fast, breathlessly, as if she had no time, and says “we” and means herself and her husband, although he is no longer there.
- neu: Voice messages in which he speaks of a staircase. Her secret: She already heard the song before her husband left. She hummed it to him without knowing what it was. She is the reason he left. She talks fast, breathlessly, as if she had no time, and says “we” and means herself and her husband, although he is no longer there.
- Änderung: «talks about» → «speaks of»; «she» → «She already»; «is.» → «was.»
<!-- daten: {"art":"gegnertext","name":"The Relative"} -->

#### AD-en-A9b6abb · Gegner „The Singer with a Name“, Beschreibung · Band S. 20 · sicher
Freigabe: offen

- alt: Wendt · Humans
- neu: Wendt · Voice
- Änderung: «Humans» → «Voice»
<!-- daten: {"art":"gegnertext","name":"The Singer with a Name"} -->

#### AD-en-Acb44ee · Gegner „The Singer with a Name“, Beschreibung · Band S. 20 · prüfen
Freigabe: offen

- alt: Wendt is the Psion who stepped into the circle on the Brocken in 2026 in the prologue “Walpurgis”. His grandmother was on the attendance list of 1989. He is missing, not dead, and he can come back as a Singer. That is an option for the game master, not a fixed truth. If he comes back, he seeks out people who already hear the song and brings them to the staircase. He wants people who hear the song not to be lost. He believes that he accompanies them, not fetches them. He knows how to recognise a staircase before it is visible, and that there are several staircases in Europe. His secret: he saw something on the staircase that he cannot forget, and he sings because he believes that only the song makes it bearable. He speaks haltingly, as if he first had to translate every word for himself, and speaks of himself in the third person when he talks about the past: “The man he was.”
- neu: Wendt is the Psion who stepped into the circle on the Brocken in the 2026 prologue “Walpurgis”. His grandmother was on the attendance list from 1989. He is missing, not dead, and he can return as a Singer. This is an option for the game master, not a fixed truth. If he returns, he seeks out people who already hear the song and brings them to the staircase. He wants people who hear the song not to be lost. He believes he accompanies them, not fetches them. He knows how to recognise a staircase before it becomes visible, and that there are several staircases in Europe. His secret: he saw something on the staircase that he cannot forget, and he sings because he believes only the song makes it bearable. He speaks haltingly, as if he had to translate every word first, and speaks of himself in the third person when he talks about the past: “The man he was.”
- Änderung: «(nichts)» → «the»; «in the» → «(gestrichen)»; «of» → «from»; «come back» → «return»; «That» → «This»; «comes back,» → «returns,»; «that» → «(gestrichen)»; «is» → «becomes»; «that» → «(gestrichen)»; «first» → «(gestrichen)»; «for himself,» → «first,»
<!-- daten: {"art":"gegnertext","name":"The Singer with a Name"} -->

#### AD-en-A98488e · „03 The Singers“ › „Key Figures“ · Band S. 21 · sicher
Freigabe: offen

- alt: The Member Who Knows the Ways
- neu: The Member Who Knows Ways
- Änderung: «the» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A1cee2d · „03 The Singers“ › „Key Figures“ · Band S. 21 · prüfen
Freigabe: offen

- alt: A slight man with a rucksack full of city maps on which he marks staircases. He is a member of the cult who knows ways to the staircases. He used to be a cartographer at the survey office in Hanover. He noticed that old maps show staircases that are missing from new ones. He wants to find all staircases before O.D.I.N. seals them. He knows the location of three staircases: the Brocken, the Rotterdam car park, the raised bog in Ireland. He knows the signs by which a staircase can be recognised: cold spots, smell of ozone, clocks that run wrong. His secret: He found the staircase in the raised bog in Ireland and gave the Singers only the map, not the stone under which it begins, because he is afraid they will no longer need him. He speaks precisely, with numbers and coordinates, and says “the staircase” the way others say “work”.
- neu: A thin man with a rucksack full of city maps on which he marks staircases. He is a member of the cult who knows ways to the staircases. He used to be a cartographer at the survey office in Hanover. He noticed that old maps show staircases that are missing from new ones. He wants to find all staircases before O.D.I.N. seals them. He knows the location of three staircases: Brocken, Rotterdam car park, raised bog in Ireland. He knows the signs by which a staircase can be recognised: cold spots, smell of ozone, clocks that run wrong. His secret: He found the staircase in the raised bog in Ireland and gave the Singers only the map, not the stone under which it begins, because he is afraid they will no longer need him. He speaks precisely, with numbers and coordinates, and says “the staircase” the way others say “work”.
- Änderung: «slight» → «thin»; «the» → «(gestrichen)»; «the» → «(gestrichen)»; «the» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A3d9eb9 · „03 The Singers“ › „Key Figures“ · Band S. 21 · sicher
Freigabe: offen

- alt: Weakness He is neither a fighter nor a believer. He works for the Singers because he is needed, not because he hears the song. Whoever offers him a better task can turn him.
- neu: Weakness He is neither a fighter nor a believer. He works for the Singers because he is needed, not because he hears the song. Anyone who offers him a better task can turn him.
- Änderung: «Whoever» → «Anyone who»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-Acc94ac · „03 The Singers“ › „Key Figures“ · Band S. 21 · sicher
Freigabe: offen

- alt: Behaviour He is cautious, suspicious and always on the move. He never sleeps twice in the same place.
- neu: Behaviour He is cautious, suspicious and always on the move. He never sleeps in the same place.
- Änderung: «twice» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A7fc5bd · „03 The Singers“ › „Key Figures“ · Band S. 21 · sicher
Freigabe: offen

- alt: The Singers at the Brocken
- neu: The Singers on the Brocken
- Änderung: «at» → «on»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-A4ad13e · „03 The Singers“ › „Key Figures“ · Band S. 21 · sicher
Freigabe: offen

- alt: The Choir · Humans
- neu: The Choir · Voice
- Änderung: «Humans» → «Voice»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Key Figures"]],"absatz":true} -->

#### AD-en-Ae42500 · „03 The Singers“ › „Bases and Means“ · Band S. 21 · prüfen
Freigabe: offen

- alt: The car park in Rotterdam. On the fourth basement level, in the corner behind the ramp, a staircase leads down. It is only visible when you are alone and hear the song. No one is there. But Daniel Koslowski’s traces lead here: his car is still on the third basement level, the key is in it. You reach the fourth basement level with the lift, which only goes there if you press the button three times. The raised bog in Ireland. A raised bog in which the Ogham stones migrate by a hand’s breadth every year (Game Master’s Book, restricted zone table). A staircase begins beneath one of the stones. Tarek Mansour found and mapped it, but only he knows which stone it is. No one is there. You have to find the stone that moved last. Beneath it is the staircase.
- neu: The car park in Rotterdam. On the fourth basement level, in the corner behind the ramp, a staircase leads downwards. It is only visible when you are alone and hear the song. No one is there. But Daniel Koslowski’s traces lead here: his car is still on the third basement level, the key is in it. You reach the fourth basement level with the lift, which only goes there if you press the button three times. The raised bog in Ireland. A raised bog in which the Ogham stones migrate by a hand’s breadth every year (Game Master’s Book, restricted zone table). A staircase begins beneath one of the stones. Tarek Mansour found and mapped it, but only he knows which stone it is. No one is there. You must find the stone that migrated last. Beneath it is the staircase.
- Änderung: «down.» → «downwards.»; «have to» → «must»; «moved» → «migrated»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Bases and Means"]],"absatz":true} -->

#### AD-en-A332615 · Gegner „The Member Who Knows the Ways“, Beschreibung · Band S. 21 · prüfen
Freigabe: offen

- alt: A slight man with a rucksack full of city maps on which he marks staircases. He is a member of the cult who knows the ways to the staircases. He used to be a cartographer at the land survey office in Hanover. He noticed that old maps show staircases that are missing from new ones. He wants to find all staircases before O.D.I.N. seals them. He knows the location of three staircases: the Brocken, the Rotterdam car park, the raised bog in Ireland. He knows the signs by which you recognise a staircase: cold spots, a smell of ozone, clocks that run wrong. His secret: he found the staircase in the raised bog in Ireland and gave the Singers only the map, not the stone beneath which it begins, because he is afraid that they will then no longer need him. He speaks precisely, with numbers and coordinates, and says “the staircase” the way others say “work”.
- neu: A thin man with a rucksack full of city maps on which he marks staircases. He is a member of the cult who knows ways to the staircases. He used to be a cartographer at the survey office in Hanover. He noticed that old maps show staircases that are missing from new ones. He wants to find all staircases before O.D.I.N. seals them. He knows the location of three staircases: Brocken, Rotterdam car park, raised bog in Ireland. He knows the signs by which a staircase can be recognised: cold spots, smell of ozone, clocks that run wrong. His secret: he found the staircase in the raised bog in Ireland and gave the Singers only the map, not the stone under which it begins, because he is afraid they will no longer need him. He speaks precisely, with numbers and coordinates, and says “the staircase” the way others say “work”.
- Änderung: «slight» → «thin»; «the» → «(gestrichen)»; «land» → «(gestrichen)»; «the» → «(gestrichen)»; «the» → «(gestrichen)»; «the» → «(gestrichen)»; «you recognise» → «(gestrichen)»; «staircase:» → «staircase can be recognised:»; «a» → «(gestrichen)»; «beneath» → «under»; «that» → «(gestrichen)»; «then» → «(gestrichen)»
<!-- daten: {"art":"gegnertext","name":"The Member Who Knows the Ways"} -->

#### AD-en-Ab4ba77 · „03 The Singers“ › „Relationship to O.D.I.N.“ · Band S. 22 · prüfen
Freigabe: offen

- alt: Who at O.D.I.N. deals with them: The cell that was on the Brocken in 2026 (Core Rulebook, Prologue “Walpurgis”). The handler who reclassified file GA-2231 “Walpurgis” from GREY to BLACK. The Print Shop, which rewrites the cases of the vanished as people leaving sects. The Seeker, who hears children humming the song.
- neu: Who at O.D.I.N. deals with them: The cell that was on the Brocken in 2026 (Core Rulebook, Prologue “Walpurgis”). The handler who reclassified file GA-2231 “Walpurgis” from GREY to BLACK. The Print Shop, which rewrites the cases of the disappeared as cult exits. The Seeker, who hears children humming the song.
- Änderung: «vanished» → «disappeared»; «people leaving sects.» → «cult exits.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A674581 · „03 The Singers“ › „Relationship to O.D.I.N.“ · Band S. 22 · sicher
Freigabe: offen

- alt: What O.D.I.N. knows: That the Singers exist. That they stand on the Brocken. That they speak with one voice. That a cult has formed around them. That people disappear who have heard a song. That there is more than one staircase. Not where the other staircases are. Not what lies at the end of the staircase. Not how to stop the song, except with helmets made of Alloy S.
- neu: What O.D.I.N. knows: That the Singers exist. That they stand on the Brocken. That they speak with one voice. That a cult has formed around them. That people who have heard a song disappear. That there is more than one staircase. Not where the other staircases are. Not what lies at the end of the staircase. Not how to stop the song, except with helmets made of Alloy S.
- Änderung: «disappear» → «(gestrichen)»; «song.» → «song disappear.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-Aceee37 · „03 The Singers“ › „Relationship to O.D.I.N.“ · Band S. 22 · prüfen
Freigabe: offen

- alt: The Singers offer nothing. They sing. An agent who hears the song understands what it means: that there is a way, that their life is not everything, that they can go. That is the lure. No money, no power, no truth. Only the song. What they want in return: that they go. That he goes down the staircase and does not come back. Or that they come back and sing.
- neu: The Singers offer nothing. They sing. An agent who hears the song understands what it means: that there is a way, that their life is not everything, that they can go. That is the lure. No money, no power, no truth. Only the song. What they want in return: that they go. That they go down the staircase and do not come back. Or that they come back and sing.
- Änderung: «he goes» → «they go»; «does» → «do»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A09e367 · „03 The Singers“ › „The Plan: “The Stairs”“ · Band S. 22 · sicher
Freigabe: offen

- alt: The Singers are searching for staircases. Every staircase found is another place where the world is thin, and another point where they can sing. The cell notices it because people disappear who have heard a song before, because doors appear in places that should not exist, and because the Preacher moves from town to town, leaving behind congregations that wait for the song.
- neu: The Singers search for staircases. Every staircase found is another place where the world is thin, and another point where they can sing. The cell notices it because people disappear who have heard a song before, because doors appear in places that should not exist, and because the Preacher moves from town to town, leaving behind congregations that wait for the song.
- Änderung: «are searching» → «search»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","The Plan: “The Stairs”"]],"absatz":true} -->

#### AD-en-A701fc5 · „03 The Singers“ › „The Plan: “The Stairs”“ · Band S. 23 · sicher
Freigabe: offen

- alt: ○○○○○ The Singers have only the Brocken. The cult is small, the song quiet. Trail: None. The plan exists only as an intention.
- neu: ○○○○○ The Singers have only the Brocken. The cult is small, the song quiet. Sign: None. The plan exists only as an intention.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","The Plan: “The Stairs”"]],"absatz":true} -->

#### AD-en-A89d86c · „03 The Singers“ › „The Plan: “The Stairs”“ · Band S. 23 · prüfen
Freigabe: offen

- alt: ☠☠○○○ The Singers have found a third staircase: the raised bog in Ireland. Tarek Mansour has mapped it. Miriam Koslowski follows her husband’s trail to Rotterdam. A woman in Rotterdam asking about a car park that officially does not exist. A dead drop in Hanover containing a city map on which two staircases are marked. From the plan a Grey File emerges for the cell.
- neu: ☠☠○○○ The Singers have found a third staircase: the raised bog in Ireland. Tarek Mansour has mapped it. Miriam Koslowski follows the trail of her husband to Rotterdam. Sign: A woman in Rotterdam asking about a car park that officially does not exist. A dead drop in Hanover containing a city map on which two staircases are marked. From the plan a Grey File is created for the cell.
- Änderung: «(nichts)» → «the trail of»; «husband’s trail» → «husband»; «(nichts)» → «Sign:»; «emerges» → «is created»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","The Plan: “The Stairs”"]],"absatz":true} -->

#### AD-en-A2d8f00 · „03 The Singers“ › „The Plan: “The Stairs”“ · Band S. 23 · sicher
Freigabe: offen

- alt: ☠☠☠○○ The Singers have found a fourth staircase: the reservoir in the Alps. The Preacher moves through northern Germany and the Netherlands. Tarek Mansour reveals the staircase in Ireland to the cell because he becomes afraid that the Singers no longer need him, and because he hopes that O.D.I.N. will protect him. Trail: A Psion of the cell hears the song in their sleep. A call from Tarek Mansour to the police, who pass him on to O.D.I.N.
- neu: ☠☠☠○○ The Singers have found a fourth staircase: the reservoir in the Alps. The Preacher moves through northern Germany and the Netherlands. Tarek Mansour reveals the staircase in Ireland to the cell because he becomes afraid that the Singers no longer need him, and because he hopes that O.D.I.N. will protect him. Sign: A Psion of the cell hears the song in their sleep. A call from Tarek Mansour to the police, who pass him on to O.D.I.N.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","The Plan: “The Stairs”"]],"absatz":true} -->

#### AD-en-Adad981 · „03 The Singers“ › „The Plan: “The Stairs”“ · Band S. 23 · prüfen
Freigabe: offen

- alt: ☠☠☠☠☠ The Singers sing at all five staircases simultaneously: Brocken, Rotterdam, Ireland, the reservoir in the Alps and a cellar in Tallinn. The song can be heard all over Europe, quietly, like a hum in the walls. Whoever hears it knows that there is a way. Trail: The numbers station broadcasts the song. The Seeker hears it and, for the first time in years, says nothing. The Council takes over with a Black File.
- neu: ☠☠☠☠☠ The Singers sing at all five staircases simultaneously: Brocken, Rotterdam, Ireland, the reservoir in the Alps and a cellar in Tallinn. The song can be heard all over Europe, quietly, like a hum in the walls. Whoever hears it knows that there is a way. Sign: The numbers station broadcasts the song. The Seeker hears it and says nothing for the first time in years. The Council takes over with a Black File.
- Änderung: «Trail:» → «Sign:»; «and,» → «and says nothing»; «years, says nothing.» → «years.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","The Plan: “The Stairs”"]],"absatz":true} -->

#### AD-en-Ab50699 · „03 The Singers“ › „The Plan: “The Stairs”“ · Band S. 23 · prüfen
Freigabe: offen

- alt: The Key Figure is the Preacher. He knows where the next staircase is, and he sends people there. If the cell takes him out, the plan loses two skulls and does not roll after the next mission. But the Preacher is not a fighter. He is a man who hums, and anyone who listens to him understands why people go.
- neu: The Key Figure is the Preacher. He knows where the next staircase is, and he sends people there. If the cell eliminates him, the plan loses two skulls and does not roll after the next mission. But the Preacher is not a fighter. He is a man who hums, and anyone who listens to him understands why people go.
- Änderung: «takes him out,» → «eliminates him,»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","The Plan: “The Stairs”"]],"absatz":true} -->

#### AD-en-A967652 · „03 The Singers“ › „The Plan: “The Stairs”“ · Band S. 23 · sicher
Freigabe: offen

- alt: 5 to 6 A contact falls silent. A contact of the cell, an informant, an old friend, hears the song and goes. They leave a note: “I have understood. The cell loses a level 1 or 2 contact until they find them or give up.
- neu: 5 to 6 A contact falls silent. A contact of the cell, an informant, an old friend, hears the song and goes. They leave a note: “I have understood. Do not follow.” The cell loses a level 1 or 2 contact until they find them or give up.
- Änderung: «(nichts)» → «Do not follow.”»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","The Plan: “The Stairs”"]],"absatz":true} -->

#### AD-en-A6398e7 · „03 The Singers“ › „Hooks and Outlook“ · Band S. 23 · sicher
Freigabe: offen

- alt: White File “The Humming Man”. A woman in Hanover reports to the police that her husband has been humming a melody she does not know for three days, and that he gets up at night and stands in the hallway as if waiting for something. The police pass the case on to O.D.I.N. because the woman says her husband has never hummed before. The cell is to find out whether it is a case for the Print Shop or something else. It is something else.
- neu: White File “The Humming One”. A woman in Hanover reports to the police that her husband has been humming a melody she does not know for three days, and that he gets up at night and stands in the hallway as if waiting for something. The police pass the case on to O.D.I.N. because the woman says her husband has never hummed before. The cell is to find out whether it is a case for the Print Shop or something else. It is something else.
- Änderung: «Man”.» → «One”.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A89657f · „03 The Singers“ › „Hooks and Outlook“ · Band S. 24 · prüfen
Freigabe: offen

- alt: Red File “The Song in the Car Park”. In and around Rotterdam, fourteen people have disappeared in one week. All of them last spoke of a staircase. The cell is to find the staircase before the police do. The trail leads to the fourth basement level of the car park, to a staircase that is only visible when one is alone and hears the song.
- neu: Red File “The Song in the Car Park”. In Rotterdam and the surrounding area, fourteen people have disappeared in one week. All of them last spoke of a staircase. The cell is to find the staircase before the police do. The trail leads to the fourth basement level of the car park, to a staircase that is only visible when one is alone and hears the song.
- Änderung: «(nichts)» → «Rotterdam»; «around Rotterdam,» → «the surrounding area,»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A4062da · „03 The Singers“ › „Hooks and Outlook“ · Band S. 24 · sicher
Freigabe: offen

- alt: The world has changed: On the night when the Singers sang at all five staircases at once, people across Europe heard the song. Not many, but enough. They did not go. They only understood that there is a way. Since then they hum when they are alone, and they look at doors differently. O.D.I.N. sealed the five staircases, but the song can no longer be contained. It is in the world, like an earworm one cannot get rid of.
- neu: The world has changed: On the night when the Singers sang at all five staircases at once, people across Europe heard the song. Not many, but enough. They did not leave. They only understood that there is a way. Since then they hum when they are alone, and they look at doors differently. O.D.I.N. sealed the five staircases, but the song can no longer be contained. It is in the world, like an earworm one cannot get rid of.
- Änderung: «go.» → «leave.»
<!-- daten: {"art":"satz","fundstellen":[["03 The Singers","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A812ac0 · „04 Small Cults“ › „Overview“ · Band S. 24 · sicher
Freigabe: offen

- alt: Small cults are the everyday reality of investigation work: groups that misunderstand something real, or worship something real that they do not understand. Most of them remain harmless. The following five are not, because each of them holds something in their hands that grows without O.D.I.N. Each cult has its own short line with relationship, strength, knowledge and plan.
- neu: Small cults are the everyday reality of investigation work: groups that misunderstand something real, or worship something real that they do not understand. Most remain harmless. The following five are not, because each of them holds something in their hands that grows without O.D.I.N. Each cult has its own short line with relationship, strength, knowledge and plan.
- Änderung: «of them» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","Overview"]],"absatz":true} -->

#### AD-en-A9a4bef · „04 Small Cults“ › „Overview“ · Band S. 24 · prüfen
Freigabe: offen

- alt: The game master uses small cults as opponents who are closer to the players’ world than the large organisations. They are not armies and not conspiracies, but neighbours, believers, the confused. Their plans follow the skull rules from the chapter “The World Behind the Veil”. After every mission, the game master rolls a D6 for the cults that are currently important. On a 5 or 6, a skull is added. If the cell has worked against the cult, the plan loses one skull, or two after a major success. At the second skull the cell receives a Grey File, at the fourth a Red one. At the fifth, what is written in the plan happens. After that the cult gets a new plan, and the skulls start again from the beginning. The following five cults are built so that they work individually or can be linked into a campaign.
- neu: The game master uses small cults as opponents who are closer to the players’ world than the large organisations. They are not armies and not conspiracies, but neighbours, believers, the confused. Their plans follow the skull rules from the chapter “The World Behind the Veil”. After every mission, the game master rolls a D6 for the cults that are currently important. On a 5 or 6, a skull is added. If the cell has worked against the cult, the plan loses one skull, or two after a major success. At the second skull the cell receives a Grey File, at the fourth a Red File. At the fifth, what is written in the plan happens. After that the cult gets a new plan, and the skulls start over. The following five cults are built so that they work individually or can be linked into a campaign.
- Änderung: «one.» → «File.»; «again from the beginning.» → «over.»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","Overview"]],"absatz":true} -->

#### AD-en-A1c9d3b · „04 Small Cults“ › „The Guardians of the Forest Crystal“ · Band S. 25 · sicher
Freigabe: offen

- alt: Behaviour Calm and firm. He holds the group together because no one else “understands” the crystal
- neu: Behaviour Calm and determined. He holds the group together because no one else “understands” the crystal
- Änderung: «firm.» → «determined.»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Guardians of the Forest Crystal"]],"absatz":true} -->

#### AD-en-A3198e0 · „04 Small Cults“ › „The Guardians of the Forest Crystal“ · Band S. 25 · sicher
Freigabe: offen

- alt: ○○○○○ The plan exists only as an intention. Hartl talks to the crystal, and the group waits for a sign.
- neu: ○○○○○ The plan exists only as an intention. Hartl speaks to the crystal, and the group waits for a sign.
- Änderung: «talks» → «speaks»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Guardians of the Forest Crystal"]],"absatz":true} -->

#### AD-en-A633698 · „04 Small Cults“ › „The Guardians of the Forest Crystal“ · Band S. 25 · prüfen
Freigabe: offen

- alt: ☠○○○○ The group begins to dig in the forest where the crystal “shows” them. They find the larger crystal four metres down. It is as large as a child.
- neu: ☠○○○○ The group begins to dig in the forest where the crystal “shows” them. They find the larger crystal four metres down. It is the size of a child.
- Änderung: «as large as» → «the size of»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Guardians of the Forest Crystal"]],"absatz":true} -->

#### AD-en-Aa2ebea · „04 Small Cults“ › „The Guardians of the Forest Crystal“ · Band S. 25 · prüfen
Freigabe: offen

- alt: ☠☠☠○○ The crystal hums day and night. In the forest around the glassworks a ring of ferns grows that gets larger every week, and hikers lose their way in it.
- neu: ☠☠☠○○ The crystal hums day and night. In the forest around the glassworks a circle of fern grows larger every week, and hikers get lost within it.
- Änderung: «ring» → «circle»; «ferns» → «fern»; «that gets» → «(gestrichen)»; «lose their way in» → «get lost within»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Guardians of the Forest Crystal"]],"absatz":true} -->

#### AD-en-A4ef937 · „04 Small Cults“ › „The Guardians of the Forest Crystal“ · Band S. 25 · prüfen
Freigabe: offen

- alt: White File: A forester from the Bavarian Forest reports that someone is digging holes in his district and filling them in again. The cell is to check whether they are crystal seekers. At one spot the forest floor is warm, and that is why the file lies with O.D.I.N.
- neu: White File: A forester from the Bavarian Forest reports that someone is digging holes in his district and filling them in again. The cell is to check whether they are crystal seekers. The forest floor is warm in one spot, and that is the reason the file is with O.D.I.N.
- Änderung: «At one spot the» → «The»; «warm,» → «warm in one spot,»; «why» → «the reason»; «lies» → «is»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Guardians of the Forest Crystal"]],"absatz":true} -->

#### AD-en-Ac16a65 · Gegner „Josef Hartl“, Beschreibung · Band S. 25 · sicher
Freigabe: offen

- alt: A former forester, 61 years old, who found the crystal and carries it in a leather pouch at every meeting. Hartl is convinced that the stone has chosen him. He talks to the crystal as if to an old friend. He keeps quiet about the fact that he goes to the glassworks alone at night and lays the stone on his bare skin to feel the hum. His voice is rough and quiet, as if he were talking to a sick animal.
- neu: A former forester, 61 years old, who found the crystal and carries it in a leather pouch at every meeting. Hartl is convinced that the stone has chosen him. He speaks to the crystal as if to an old friend. He keeps quiet about the fact that he goes to the glassworks alone at night and lays the stone on his bare skin to feel the hum. His voice is rough and quiet, as if he were talking to a sick animal.
- Änderung: «talks» → «speaks»
<!-- daten: {"art":"gegnertext","name":"Josef Hartl"} -->

#### AD-en-A644f57 · „04 Small Cults“ › „The Community of the Dreamer“ · Band S. 26 · sicher
Freigabe: offen

- alt: Special Never sleeps in the flat. Knows who in the group dreamt what
- neu: Special Never sleeps in the flat. Knows who in the group dreamed what
- Änderung: «dreamt» → «dreamed»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Community of the Dreamer"]],"absatz":true} -->

#### AD-en-A19d5e5 · „04 Small Cults“ › „The Community of the Dreamer“ · Band S. 26 · sicher
Freigabe: offen

- alt: The ritual takes place in a cellar beneath the residential block. The haunt grows stronger. Other residents of the block dream of the man in the grey coat, even without the radio.
- neu: The ritual takes place in a cellar beneath the residential block. The haunting grows stronger. Other residents of the block dream of the man in the grey coat, even without the radio.
- Änderung: «haunt» → «haunting»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Community of the Dreamer"]],"absatz":true} -->

#### AD-en-Ae7b6bc · „04 Small Cults“ › „The Community of the Dreamer“ · Band S. 26 · sicher
Freigabe: offen

- alt: ☠☠☠○○ The haunt leaves the radio and moves through the block. Every night more residents dream of the man in the grey coat.
- neu: ☠☠☠○○ The haunting leaves the radio and moves through the block. Every night more residents dream of the man in the grey coat.
- Änderung: «haunt» → «haunting»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Community of the Dreamer"]],"absatz":true} -->

#### AD-en-A719c62 · „04 Small Cults“ › „The Community of the Dreamer“ · Band S. 26 · sicher
Freigabe: offen

- alt: White File: A teacher from Duisburg reports that she has had the same dream for weeks: a man in a grey coat standing at a window. The cell is to check whether it is a rift. The radio stands in a flat on the fifth floor of the block where the teacher lives.
- neu: White File: A teacher from Duisburg reports that she has had the same dream for weeks: a man in a grey coat standing at a window. The cell is to check whether it is a haunting. The radio stands in a flat on the fifth floor of the block where the teacher lives.
- Änderung: «rift.» → «haunting.»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Community of the Dreamer"]],"absatz":true} -->

#### AD-en-Aee8f2d · „04 Small Cults“ › „The Awaiting Ones of Pilsen“ · Band S. 26 · sicher
Freigabe: offen

- alt: What they worship. Extraterrestrials who will land soon. The members believe that a spaceship will collect them when they are ready. They call the ship “the Messenger”. They have a calendar on which they cross off the days until the landing.
- neu: What they worship. Aliens who will land soon. The members believe that a spaceship will collect them when they are ready. They call the ship “the Messenger”. They have a calendar on which they cross off the days until the landing.
- Änderung: «Extraterrestrials» → «Aliens»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Awaiting Ones of Pilsen"]],"absatz":true} -->

#### AD-en-A24fbee · Gegner „Fatma Aydin“, Beschreibung · Band S. 26 · sicher
Freigabe: offen

- alt: A 58-year-old woman who first noticed the haunt and founded the group. She believes the Dreamer is a saint. She keeps quiet about the fact that she never sleeps in the flat, because she is afraid the Dreamer might command her to do something. Her voice is warm and tired, and she speaks of the dead man as of a guest one must not send away.
- neu: A 58-year-old woman who first noticed the haunting and founded the group. She believes the Dreamer is a saint. She keeps quiet about the fact that she never sleeps in the flat, because she is afraid the Dreamer might command her to do something. Her voice is warm and tired, and she speaks of the dead man as of a guest one must not send away.
- Änderung: «haunt» → «haunting»
<!-- daten: {"art":"gegnertext","name":"Fatma Aydin"} -->

#### AD-en-Ac6a7ee · „04 Small Cults“ › „The Awaiting Ones of Pilsen“ · Band S. 27 · sicher
Freigabe: offen

- alt: Attack Spanner 3 + 2, damage 2
- neu: Attack Wrench 3 + 2, damage 2
- Änderung: «Spanner» → «Wrench»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Awaiting Ones of Pilsen"]],"absatz":true} -->

#### AD-en-A8d6292 · „04 Small Cults“ › „The Awaiting Ones of Pilsen“ · Band S. 27 · prüfen
Freigabe: offen

- alt: Key Figure. Milan Dvořák. If the cell takes him out, the plan loses two skulls. Without him no one transmits any more.
- neu: Key Figure. Milan Dvořák. If the cell takes him out, the plan loses two skulls. Without him, nobody transmits any more.
- Änderung: «him no one» → «him, nobody»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Awaiting Ones of Pilsen"]],"absatz":true} -->

#### AD-en-A17fb1d · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 27 · sicher
Freigabe: offen

- alt: What they worship. A saint who hears children singing. The members believe the saint has given them a task: they are to find the children who sing and bring them to her. They call the saint “the Mother of Voices”.
- neu: What they worship. A saint who hears children sing. The members believe the saint has given them a task: they are to find the children who sing and bring them to her. They call the saint “the Mother of Voices”.
- Änderung: «singing.» → «sing.»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-Ae2add1 · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 27 · prüfen
Freigabe: offen

- alt: What they really have. A Psion without a helmet who does not know what he is. The Psion is a young man named Luca, 23, who lives in the group and believes he hears the saint. In reality he hears the Voice behind the Veil. He wears no helmet because he never received one. The group takes his gift for a miracle. Luca takes it for an illness.
- neu: What they really have. A Psion without a helmet who does not know what he is. The Psion is a young man named Luca, 23, who lives in the group and believes he hears the saint. In reality he hears the Voice behind the Veil. He wears no helmet because he never received one. The group considers his gift a miracle. Luca considers it an illness.
- Änderung: «takes» → «considers»; «for» → «(gestrichen)»; «takes» → «considers»; «for» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-A66efdf · Gegner „Milan Dvořák“, Beschreibung · Band S. 27 · prüfen
Freigabe: offen

- alt: A former radio amateur, 44 years old, who built the radio set and made the first contact. He believes the Messenger chose him. He wears a home-made helmet of copper wire that shields nothing but is supposed to protect him from “false thoughts”. He keeps quiet about the fact that he sits alone in the carriage at night and waits for an answer that does not come. His voice is quick and jittery, as if he had to say everything before the contact breaks off.
- neu: A former radio amateur, 44 years old, who built the radio set and made first contact. He believes the Messenger has chosen him. He wears a home-made helmet of copper wire that shields nothing but is meant to protect him from “false thoughts”. He keeps quiet about the fact that he sits alone in the carriage at night and waits for an answer that does not come. His voice is quick and jittery, as if he had to say everything before the contact breaks off.
- Änderung: «the» → «(gestrichen)»; «chose» → «has chosen»; «supposed» → «meant»
<!-- daten: {"art":"gegnertext","name":"Milan Dvořák"} -->

#### AD-en-Add85d2 · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 28 · sicher
Freigabe: offen

- alt: Head · Humans
- neu: Leader · Humans
- Änderung: «Head» → «Leader»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-A2d489b · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 28 · sicher
Freigabe: offen

- alt: A 67-year-old woman who founded the group after she heard Luca singing. She believes he is a prophet. She carries a knife that she calls “the Mother’s Point”. She conceals that she never lets Luca sleep, because she fears he might receive commands in his dreams that she does not know. Her voice is firm and quiet, like a teacher who never has to ask twice.
- neu: A 67-year-old woman who founded the group after she heard Luca sing. She believes he is a prophet. She carries a knife that she calls “the Mother’s Point”. She conceals that she never lets Luca sleep, because she fears he might receive commands in his dreams that she does not know. Her voice is firm and quiet, like a teacher who never has to ask twice.
- Änderung: «singing.» → «sing.»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-Ae2960c · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 28 · sicher
Freigabe: offen

- alt: Special Resonance 3. Does not know that he is a Psion. Believes the voices are an illness, and wants to be cured
- neu: Special Resonance 3. Does not know that he is a Psion. Believes the voices are an illness, and wants to be healed
- Änderung: «cured» → «healed»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-A5f12a7 · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 28 · sicher
Freigabe: offen

- alt: Behaviour Reserved and anxious. He follows Sister Elena because she is the only one who tells him he is not mad
- neu: Behaviour Reserved and anxious. He follows Sister Elena because she is the only one who tells him that he is not mad
- Änderung: «(nichts)» → «that»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-Aa588e9 · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 28 · prüfen
Freigabe: offen

- alt: Key Figure. Sister Elena. If the cell takes her out, the plan loses two skulls. Without her no one persuades the parents to give their children to the monastery.
- neu: Key Figure. Sister Elena. If the cell eliminates her, the plan loses two skulls. Without her no one persuades the parents to give their children to the monastery.
- Änderung: «takes her out,» → «eliminates her,»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-Adf507d · „04 Small Cults“ › „The Sisters of the Singing Children“ · Band S. 28 · sicher
Freigabe: offen

- alt: White File: A village priest from Tuscany reports that two children from his parish were taken by their parents to a former monastery. The cell is to check whether it is a rift. The children sing in their sleep, and that is the reason O.D.I.N.
- neu: White File: A village priest from Tuscany reports that two children from his parish were taken by their parents to a former monastery. The cell is to check whether it is a cult. The children sing in their sleep, and that is the reason O.D.I.N.
- Änderung: «rift.» → «cult.»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Sisters of the Singing Children"]],"absatz":true} -->

#### AD-en-A213519 · Gegner „Sister Elena“, Beschreibung · Band S. 28 · sicher
Freigabe: offen

- alt: Head · Humans
- neu: Leader · Humans
- Änderung: «Head» → «Leader»
<!-- daten: {"art":"gegnertext","name":"Sister Elena"} -->

#### AD-en-Af8de21 · Gegner „Sister Elena“, Beschreibung · Band S. 28 · sicher
Freigabe: offen

- alt: A 67-year-old woman who founded the group after she heard Luca singing. She believes he is a prophet. She carries a knife that she calls “the Mother’s Point”. She keeps quiet about the fact that she never lets Luca sleep, because she fears he might receive orders in his dreams that she does not know. Her voice is firm and quiet, like a teacher who never has to ask twice.
- neu: A 67-year-old woman who founded the group after she heard Luca sing. She believes he is a prophet. She carries a knife that she calls “the Mother’s Point”. She keeps quiet about the fact that she never lets Luca sleep, because she fears he might receive orders in his dreams that she does not know. Her voice is firm and quiet, like a teacher who never has to ask twice.
- Änderung: «singing.» → «sing.»
<!-- daten: {"art":"gegnertext","name":"Sister Elena"} -->

#### AD-en-A2bc8df · Gegner „Luca“, Beschreibung · Band S. 28 · sicher
Freigabe: offen

- alt: A 23-year-old man who lives with the group and believes he hears the saint. In reality he hears the Voice behind the Veil. He wears no helmet because he never received one. He keeps quiet about the fact that he also hears the Voice when he is alone, and that it sometimes tells him things he does not understand. His voice is quiet and halting, as if he were apologising for every word.
- neu: A 23-year-old man who lives in the group and believes he hears the saint. In reality he hears the Voice behind the Veil. He wears no helmet because he never received one. He keeps quiet about the fact that he also hears the Voice when he is alone, and that it sometimes tells him things he does not understand. His voice is quiet and halting, as if he were apologising for every word.
- Änderung: «with» → «in»
<!-- daten: {"art":"gegnertext","name":"Luca"} -->

#### AD-en-A93aab5 · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · sicher
Freigabe: offen

- alt: Location. A former office building in Antwerp, near the port. The group meets on the third floor, in a room with a view of the water.
- neu: Location. A former office building in Antwerp, near the harbour. The group meets on the third floor, in a room with a view of the water.
- Änderung: «port.» → «harbour.»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-Aa2d9e0 · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · prüfen
Freigabe: offen

- alt: What they really have. A member who used to be with O.D.I.N. The Returner is a former agent of the Operations Branch who disappeared during a mission in Antwerp in 2019. He came back in 2023, but he was no longer the same. He remembers O.D.I.N., but not his name. He remembers the rift, but not what was behind it. He believes he has been chosen to open the door.
- neu: What they really have. A member who used to be with O.D.I.N. The Returned is a former agent of the Operations Branch who disappeared on a mission in Antwerp in 2019. He came back in 2023, but he was no longer the same. He remembers O.D.I.N., but not his name. He remembers the rift, but not what was behind it. He believes he is chosen to open the door.
- Änderung: «Returner» → «Returned»; «during» → «on»; «has been» → «is»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-Aa1c9fb · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · sicher
Freigabe: offen

- alt: The Returner
- neu: The Returned
- Änderung: «Returner» → «Returned»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-Ae4097b · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · sicher
Freigabe: offen

- alt: Special Knows O.D.I.N.’s procedures, but not the names of the agents. Knows that there is a Seeker, but not who it is
- neu: Special Knows O.D.I.N.’s procedures, but not the names of the agents. Knows there is a Seeker, but not who it is
- Änderung: «that» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-A3a4de2 · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · sicher
Freigabe: offen

- alt: ○○○○○ The plan exists only as an intention. The Returner is searching for a place where the world is thin.
- neu: ○○○○○ The plan exists only as an intention. The Returned is looking for a place where the world is thin.
- Änderung: «Returner» → «Returned»; «searching» → «looking»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-A0b45fb · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · prüfen
Freigabe: offen

- alt: ☠○○○○ The group begins searching Antwerp for a place where the world is thin. The Returner remembers a cellar in which he disappeared in 2019.
- neu: ☠○○○○ The group begins searching Antwerp for a place where the world is thin. The Returned remembers a cellar where he disappeared in 2019.
- Änderung: «Returner» → «Returned»; «in which» → «where»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-Ad7c42c · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · prüfen
Freigabe: offen

- alt: ☠☠○○○ The group finds the cellar. The Returner begins to prepare a procedure that he knows from his time with O.D.I.N. He needs a crystal.
- neu: ☠☠○○○ The group finds the cellar. The Returned begins preparing a procedure he knows from his time with O.D.I.N. He needs a crystal.
- Änderung: «Returner» → «Returned»; «to prepare» → «preparing»; «that» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-Ae9aa16 · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · sicher
Freigabe: offen

- alt: ☠☠☠☠○ The Returner lays the circle and sets the night. From the plan, a Red File is created.
- neu: ☠☠☠☠○ The Returned lays the circle and sets the night. From the plan, a Red File is created.
- Änderung: «Returner» → «Returned»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-Ab39b92 · „04 Small Cults“ › „The Circle of the Returners“ · Band S. 29 · prüfen
Freigabe: offen

- alt: Key Figure. The Returner. If the cell takes him out, the plan loses two skulls. Without him the group does not know where the cellar is.
- neu: Key Figure. The Returned. If the cell eliminates him, the plan loses two skulls. Without him the group does not know where the cellar is.
- Änderung: «Returner.» → «Returned.»; «takes him out,» → «eliminates him,»
<!-- daten: {"art":"satz","fundstellen":[["04 Small Cults","The Circle of the Returners"]],"absatz":true} -->

#### AD-en-A25e425 · Gegner „The Returner“, Beschreibung · Band S. 29 · sicher
Freigabe: offen

- alt: A 38-year-old man, a former O.D.I.N. agent, who disappeared in 2019 and came back in 2023. He remembers O.D.I.N.’s procedures, but not the names of the agents. He knows that there is a Seeker, but not who it is. He keeps quiet about the fact that he wakes up at night and does not know where he is. His voice is flat and calm, as if he were talking about someone else.
- neu: A 38-year-old man, former O.D.I.N. agent, who disappeared in 2019 and came back in 2023. He remembers O.D.I.N.’s procedures, but not the names of the agents. He knows there is a Seeker, but not who it is. He keeps quiet about the fact that he wakes up at night and does not know where he is. His voice is flat and calm, as if he were talking about someone else.
- Änderung: «a» → «(gestrichen)»; «that» → «(gestrichen)»
<!-- daten: {"art":"gegnertext","name":"The Returner"} -->

#### AD-en-A63d2d4 · „The Other Services: Introduction“ › „Chapter III: Foreign Services“ · Band S. 31 · sicher
Freigabe: offen

- alt: The game master uses foreign services when a campaign is to become larger than Europe or when the cell is to feel that O.D.I.N. is being watched. Foreign services rarely kill first. They watch, recruit, buy and wait. Real services remain backdrop: those who act are always the invented offices hiding within them.
- neu: The game master uses foreign services when a campaign is to become larger than Europe or when the cell is to feel that O.D.I.N. is being watched. Foreign services rarely kill first. They observe, recruit, buy and wait. Real services remain backdrop: those who act are always the invented offices hiding within them.
- Änderung: «watch,» → «observe,»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter III: Foreign Services"]],"absatz":true} -->

#### AD-en-A737360 · „05 STILLWATER“ › „History and Goals“ · Band S. 32 · prüfen
Freigabe: offen

- alt: 1961: The Veil Protocol is concluded. STILLWATER is not a party to it, but the USA signs tacitly. STILLWATER is given the task of observing O.D.I.N. in North America, not fighting it.
- neu: 1961: The Veil Protocol is concluded. STILLWATER is not a party, but the USA tacitly agrees. STILLWATER receives the order to observe O.D.I.N. in North America, not to fight it.
- Änderung: «party to it,» → «party,»; «signs tacitly.» → «tacitly agrees.»; «is given» → «receives»; «task of observing» → «order to observe»; «fighting» → «to fight»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","History and Goals"]],"absatz":true} -->

#### AD-en-A27387b · „05 STILLWATER“ › „History and Goals“ · Band S. 32 · sicher
Freigabe: offen

- alt: 1971: After the Cascade in Wales, STILLWATER tries to buy the Wardenclyffe Coil from the Institute. The offer is refused. STILLWATER begins to build up its own sources in Europe.
- neu: 1971: After the Cascade in Wales, STILLWATER tries to buy the Wardenclyffe Coil from the Institute. The offer is rejected. STILLWATER begins to build up its own sources in Europe.
- Änderung: «refused.» → «rejected.»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","History and Goals"]],"absatz":true} -->

#### AD-en-A2355c2 · „05 STILLWATER“ › „History and Goals“ · Band S. 32 · prüfen
Freigabe: offen

- alt: 1989: A copy of parts of the list from the Nursery appears in Langley. To this day STILLWATER does not know who supplied it. The list contains real names of Hands, companions and foster families. STILLWATER uses it to put pressure on O.D.I.N. in North America.
- neu: 1989: A copy of parts of the list from the Nursery appears in Langley. STILLWATER still does not know who delivered it. The list contains real names of Hands, companions and foster families. STILLWATER uses it to put pressure on O.D.I.N. in North America.
- Änderung: «To this day» → «(gestrichen)»; «(nichts)» → «still»; «supplied» → «delivered»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","History and Goals"]],"absatz":true} -->

#### AD-en-A182117 · „05 STILLWATER“ › „Key Figures“ · Band S. 32 · sicher
Freigabe: offen

- alt: Elaine Mercer has been the Director of the programme since 2019. She pulled STILLWATER out of obscurity after the budget was almost cut after 2001. She is 58 years old, has grey hair, rimless glasses, and wears a dark blue blazer. She looks like an agency head who never sleeps. She wants a Seeker of her own, whatever the cost, and she wants to meet O.D.I.N. She knows that O.D.I.N. has Psions in large numbers, that the parts of the 1989 list that STILLWATER has exist, and that STILLWATER has its own Psions who do not live long without a helmet. She suspects that O.D.I.N. finds the children with a Seeker, but does not know it. Her secret: she is Caleb Mercer’s aunt. She discovered the boy herself, during a family visit in Fairbanks, and reported him to the programme. She told her sister that Caleb was in a support programme for gifted children. She speaks calmly, precisely, without haste. She never says more than necessary, and she lies without changing her voice.
- neu: Elaine Mercer has been the Director of the programme since 2019. She pulled STILLWATER out of obscurity after the budget was almost cut after 2001. She is 58 years old, has grey hair, rimless glasses, and wears a dark blue blazer. She looks like an agency head who never sleeps. She wants a Seeker of her own, whatever the cost, and she wants to meet O.D.I.N. on equal terms. She knows that O.D.I.N. has Psions in large numbers, that the parts of the 1989 list that STILLWATER has exist, and that STILLWATER has its own Psions who do not live long without a helmet. She suspects that O.D.I.N. finds the children with a Seeker, but she does not know it. Her secret: she is Caleb Mercer’s aunt. She discovered the boy herself, during a family visit in Fairbanks, and reported him to the programme. She told her sister that Caleb was in a support programme for gifted children. She speaks calmly, precisely, without haste. She never says more than necessary, and she lies without changing her voice.
- Änderung: «(nichts)» → «on equal terms.»; «(nichts)» → «she»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Key Figures"]],"absatz":true} -->

#### AD-en-A687cf7 · Gegner „Elaine Mercer“, Beschreibung · Band S. 32 · prüfen
Freigabe: offen

- alt: Elaine Mercer has been the Director of the programme since 2019. She pulled STILLWATER out of insignificance after its budget was almost cut after 2001. She is 58 years old, has grey hair and rimless glasses, and wears a dark blue blazer. She looks like the head of an agency who never sleeps. She wants a Seeker of her own, whatever it costs, and she wants to meet O.D.I.N. as an equal. She knows that O.D.I.N. has psions in large numbers, that the parts of the 1989 list held by STILLWATER exist, and that STILLWATER has psions of its own who do not live long without a helmet. She suspects that O.D.I.N. finds the children with a Seeker, but does not know it. Her secret: she is Caleb Mercer’s aunt. She discovered the boy herself, on a family visit to Fairbanks, and reported him to the programme. She told her sister that Caleb is in a programme for gifted children. She speaks calmly, precisely, without haste. She never says more than necessary, and she lies without changing her voice.
- neu: Elaine Mercer has been the Director of the programme since 2019. She pulled STILLWATER out of obscurity after the budget was almost cut after 2001. She is 58 years old, has grey hair, rimless glasses, and wears a dark blue blazer. She looks like an agency head who never sleeps. She wants a Seeker of her own, whatever the cost, and she wants to meet O.D.I.N. on equal terms. She knows that O.D.I.N. has psions in large numbers, that the parts of the 1989 list that STILLWATER has exist, and that STILLWATER has its own Psions who do not live long without a helmet. She suspects that O.D.I.N. finds the children with a Seeker, but she does not know it. Her secret: she is Caleb Mercer’s aunt. She discovered the boy herself, during a family visit in Fairbanks, and reported him to the programme. She told her sister that Caleb was in a support programme for gifted children. She speaks calmly, precisely, without haste. She never says more than necessary, and she lies without changing her voice.
- Änderung: «insignificance» → «obscurity»; «its» → «the»; «hair and» → «hair,»; «the head of» → «(gestrichen)»; «(nichts)» → «head»; «it costs,» → «the cost,»; «as an equal.» → «on equal terms.»; «held by» → «that»; «(nichts)» → «has»; «psions of» → «(gestrichen)»; «(nichts)» → «Psions»; «(nichts)» → «she»; «on» → «during»; «to» → «in»; «is» → «was»; «(nichts)» → «support»
<!-- daten: {"art":"gegnertext","name":"Elaine Mercer"} -->

#### AD-en-A2ff3fa · „05 STILLWATER“ › „Key Figures“ · Band S. 33 · prüfen
Freigabe: offen

- alt: Dr. Marcus Webb heads the Psionics Department of STILLWATER. He found most of the late-awakened psions and looks after them. He is 61 years old, a gaunt man with a grey beard, corduroy trousers and a jumper with leather patches on the elbows. He looks like a university professor who has lost his way. He wants to open Caleb Mercer before the boy awakens on his own and comes to harm. He believes that STILLWATER can make the opening safer than O.D.I.N. He knows that their own Psions do not live long without a helmet, that the cap with copper wire from the seventies is only a stopgap, that O.D.I.N. uses Alloy S but not where it comes from, and that STILLWATER does not know how the opening works. His secret: In 1989 he took a part of the list from Langley and burned it. He wanted to prevent STILLWATER from using the names against O.D.I.N. He has never told anyone. He speaks slowly, lecturing, with many subordinate clauses. He likes to explain, even when no one is listening.
- neu: Dr. Marcus Webb heads the Psionics Department of STILLWATER. He found most of the late-awakened psions and cares for them. He is 61 years old, a gaunt man with a grey beard, corduroy trousers and a jumper with leather patches on the elbows. He looks like a university professor who has lost his way. He wants to open Caleb Mercer before the boy awakens on his own and comes to harm. He believes that STILLWATER can make the opening safer than O.D.I.N. He knows that their own Psions do not live long without a helmet, that the cap with copper wire from the seventies is only a stopgap, that O.D.I.N. uses Alloy S but not where it comes from, and that STILLWATER does not know how the opening works. His secret: In 1989 he took a part of the list from Langley and burned it. He wanted to prevent STILLWATER from using the names against O.D.I.N. He never told anyone. He speaks slowly, lecturing, with many subordinate clauses. He likes to explain, even when no one is listening.
- Änderung: «looks after» → «cares for»; «has» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Key Figures"]],"absatz":true} -->

#### AD-en-A2146e3 · „05 STILLWATER“ › „Key Figures“ · Band S. 33 · prüfen
Freigabe: offen

- alt: Raymond Cole is the handler of the Remote Viewer of STILLWATER. He coordinates the observation of O.D.I.N. in North America. He is 44 years old, has short hair, wears a suit and an earpiece. He looks like a Secret Service agent who has been on duty too long. He wants to drive the cell out of North America before it finds Caleb Mercer. He wants to push the plan through without O.D.I.N. intervening. He knows that O.D.I.N. maintains relays in Montréal and Boston, that the Remote Viewer can see the cell before it sees him, and that STILLWATER tolerates O.D.I.N. in North America as long as O.D.I.N. finds nothing there. His secret: he has a brother who works for the CIA and knows nothing about STILLWATER. For years Cole sent him reports about “weather data” that were in truth observations of O.D.I.N. He speaks tersely, in a military manner, with long pauses. He says “Copy” instead of “Understood”.
- neu: Raymond Cole is the handler of the Remote Viewer of STILLWATER. He coordinates the observation of O.D.I.N. in North America. He is 44 years old, has short hair, wears a suit and an earpiece. He looks like a Secret Service agent who has been on duty too long. He wants to drive the cell out of North America before it finds Caleb Mercer. He wants to carry out the plan without O.D.I.N. intervening. He knows that O.D.I.N. maintains relays in Montréal and Boston, that the Remote Viewer can see the cell before it sees him, and that STILLWATER tolerates O.D.I.N. in North America as long as O.D.I.N. finds nothing there. His secret: he has a brother who works for the CIA and knows nothing about STILLWATER. For years Cole sent him reports about “weather data” that were in truth observations of O.D.I.N. He speaks curtly, militarily, with long pauses. He says “Copy” instead of “Understood”.
- Änderung: «push» → «carry out»; «through» → «(gestrichen)»; «tersely, in a military manner,» → «curtly, militarily,»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Key Figures"]],"absatz":true} -->

#### AD-en-A0e52df · „05 STILLWATER“ › „Key Figures“ · Band S. 33 · sicher
Freigabe: offen

- alt: Behaviour Observes, reports, waits. He only attacks if the cell gets too close to Caleb Mercer
- neu: Behaviour Observes, reports, waits. He attacks only when the cell gets too close to Caleb Mercer
- Änderung: «(nichts)» → «attacks»; «attacks if» → «when»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Key Figures"]],"absatz":true} -->

#### AD-en-A837f00 · Gegner „Dr. Marcus Webb“, Beschreibung · Band S. 33 · prüfen
Freigabe: offen

- alt: Dr. Marcus Webb heads STILLWATER’s Psionics Department. He found most of the late-awakened psions and looks after them. He is 61 years old, a gaunt man with a grey beard, corduroy trousers and a jumper with leather patches on the elbows. He looks like a university professor who has lost his way. He wants to open Caleb Mercer before the boy awakens on his own and comes to harm. He believes that STILLWATER can make the opening safer than O.D.I.N. He knows that the programme’s own psions do not live long without a helmet, that the cap with copper wire from the seventies is only a stopgap, that O.D.I.N. uses Alloy S, but not where it comes from, and that STILLWATER does not know how the opening works. His secret: in 1989 he took part of the list from Langley and burned it. He wanted to prevent STILLWATER from using the names against O.D.I.N. He has never told anyone. He speaks slowly, in a lecturing tone, with many subordinate clauses. He likes to explain, even when no one is listening.
- neu: Dr. Marcus Webb heads the Psionics Department of STILLWATER. He found most of the late-awakened psions and cares for them. He is 61 years old, a gaunt man with a grey beard, corduroy trousers and a jumper with leather patches on the elbows. He looks like a university professor who has lost his way. He wants to open Caleb Mercer before the boy awakens on his own and comes to harm. He believes that STILLWATER can make the opening safer than O.D.I.N. He knows that their own psions do not live long without a helmet, that the cap with copper wire from the seventies is only a stopgap, that O.D.I.N. uses Alloy S, but not where it comes from, and that STILLWATER does not know how the opening works. His secret: in 1989 he took a part of the list from Langley and burned it. He wanted to prevent STILLWATER from using the names against O.D.I.N. He never told anyone. He speaks slowly, lecturing, with many subordinate clauses. He likes to explain, even when no one is listening.
- Änderung: «STILLWATER’s» → «the»; «Department.» → «Department of STILLWATER.»; «looks after» → «cares for»; «the programme’s» → «their»; «(nichts)» → «a»; «has» → «(gestrichen)»; «in a lecturing tone,» → «lecturing,»
<!-- daten: {"art":"gegnertext","name":"Dr. Marcus Webb"} -->

#### AD-en-Afd9885 · Gegner „Raymond Cole“, Beschreibung · Band S. 33 · prüfen
Freigabe: offen

- alt: Raymond Cole is the handler of STILLWATER’s Remote Viewer. He coordinates the surveillance of O.D.I.N. in North America. He is 44 years old, has close-cropped hair, and wears a suit and an earpiece. He looks like a Secret Service agent who has been on duty too long. He wants to drive the cell out of North America before it finds Caleb Mercer. He wants to push the plan through without O.D.I.N. intervening. He knows that O.D.I.N. maintains relays in Montréal and Boston, that the Remote Viewer can see the cell before it sees him, and that STILLWATER tolerates O.D.I.N. in North America as long as O.D.I.N. finds nothing there. His secret: he has a brother who works for the CIA and knows nothing about STILLWATER. For years Cole has sent him reports on “weather data” that were in truth observations of O.D.I.N. He speaks tersely, in a military manner, with long pauses. He says “Copy” instead of “Understood”.
- neu: Raymond Cole is the handler of the Remote Viewer. He coordinates the observation of O.D.I.N. in North America. He is 44 years old, has short hair, wears a suit and an earpiece. He looks like a Secret Service agent who has been on duty too long. He wants to drive the cell out of North America before it finds Caleb Mercer. He wants to carry out the plan without O.D.I.N. intervening. He knows that O.D.I.N. maintains relays in Montréal and Boston, that the Remote Viewer can see the cell before it sees him, and that STILLWATER tolerates O.D.I.N. in North America as long as O.D.I.N. finds nothing there. His secret: he has a brother who works for the CIA and knows nothing about STILLWATER. For years Cole sent him reports about “weather data” that were in truth observations of O.D.I.N. He speaks curtly, militarily, with long pauses. He says “Copy” instead of “Understood”.
- Änderung: «STILLWATER’s» → «the»; «surveillance» → «observation»; «close-cropped» → «short»; «and» → «(gestrichen)»; «push» → «carry out»; «through» → «(gestrichen)»; «has» → «(gestrichen)»; «on» → «about»; «tersely, in a military manner,» → «curtly, militarily,»
<!-- daten: {"art":"gegnertext","name":"Raymond Cole"} -->

#### AD-en-A73e660 · „05 STILLWATER“ › „Key Figures“ · Band S. 34 · prüfen
Freigabe: offen

- alt: The Remote Viewer of STILLWATER is the best Psion of the American programme. He is 39 years old, a pale man in a motel room with drawn curtains, surrounded by drawings. He wears a cap with copper wire from the seventies. He sees places he has never been, and he has had headaches for as long as he can remember. He wants the headaches to stop. He wants someone to help him before he dies. He knows that STILLWATER uses him to observe O.D.I.N., and that he will not live much longer without a helmet. He has no idea that something can hear him. His secret: in recent months he has begun to draw places he does not know: a silence beneath a Hold, a room with a child who hears humming. He does not know what it means. He speaks quietly, haltingly, with long pauses. He rarely speaks in full sentences.
- neu: The Remote Viewer of STILLWATER is the best Psion of the American programme. He is 39 years old, a pale man in a motel room with drawn curtains, surrounded by drawings. He wears a cap with copper wire from the seventies. He sees places he has never been, and he has had headaches for as long as he can remember. He wants the headaches to stop. He wants someone to help him before he dies. He knows that STILLWATER uses him to observe O.D.I.N., and that he will not live much longer without a helmet. He does not suspect that something can hear him. His secret: in recent months he has begun to draw places he does not know: a silence beneath a Hold, a room with a child who hears humming. He does not know what it means. He speaks quietly, haltingly, with long pauses. He rarely speaks in full sentences.
- Änderung: «has no idea» → «does not suspect»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Key Figures"]],"absatz":true} -->

#### AD-en-A1ce166 · „05 STILLWATER“ › „Bases and Means“ · Band S. 34 · prüfen
Freigabe: offen

- alt: The house in Fairbanks, Alaska. A detached house in a suburb of Fairbanks, where Caleb Mercer lives with his mother. The neighbours consider the Mercers a normal family. In his room, Caleb Mercer hears humming at night. Under his mattress lies a small, milky crystal that he found on the bank of the Chena River. The crystal muffles the humming. Caleb Mercer, his mother Sarah Mercer, who knows nothing about STILLWATER, and a team from STILLWATER that watches the house around the clock are there. You get in through the front door if you have a good excuse. The house is not secured, but the STILLWATER observers are vigilant.
- neu: The house in Fairbanks, Alaska. A single-family home in a suburb of Fairbanks, where Caleb Mercer lives with his mother. The neighbours consider the Mercers a normal family. In Caleb Mercer’s room he hears humming at night. Under his mattress lies a small, milky crystal that he found on the bank of the Chena River. The crystal dampens the humming. Caleb Mercer, his mother Sarah Mercer, who knows nothing about STILLWATER, and a team from STILLWATER that watches the house around the clock are there. You get in through the front door if you have a good excuse. The house is not secured, but the STILLWATER observers are vigilant.
- Änderung: «detached house» → «single-family home»; «his room,» → «(gestrichen)»; «Mercer» → «Mercer’s room he»; «muffles» → «dampens»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Bases and Means"]],"absatz":true} -->

#### AD-en-Ab0290a · „05 STILLWATER“ › „Bases and Means“ · Band S. 34 · sicher
Freigabe: offen

- alt: The branch office in Boston. A small office in a commercial area, officially a field office of the cover agency. It houses the handler Raymond Cole, a radio room and an archive with reports on O.D.I.N. movements in North America. Raymond Cole, two technicians and the Remote Viewer of STILLWATER, when he is in Boston, work there. Getting in works as at the main building in Washington, only the office is smaller and less well secured. A Spy with a good cover story gets in. A psion with a helmet senses the Remote Viewer before entering the building.
- neu: The Field Office in Boston. A small office in a commercial area, officially a field office of the cover agency. It houses the handler Raymond Cole, a radio room and an archive with reports on O.D.I.N. movements in North America. Raymond Cole, two technicians and the Remote Viewer of STILLWATER, when he is in Boston, work there. Getting in works as at the main building in Washington, only the office is smaller and less well secured. A Spy with a good cover story gets in. A psion with a helmet senses the Remote Viewer before entering the building.
- Änderung: «branch office» → «Field Office»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Bases and Means"]],"absatz":true} -->

#### AD-en-Ae333bb · „05 STILLWATER“ › „Relationship to O.D.I.N.“ · Band S. 35 · sicher
Freigabe: offen

- alt: What STILLWATER wants in return: everything the character knows about the Choir. The names of the psions they know. The location of the Holds. How the helmets work. Everything O.D.I.N. keeps secret.
- neu: What STILLWATER wants in return: everything the character knows about the Choir. The names of the psions they know. The locations of the Holds. How the helmets work. Everything O.D.I.N. keeps secret.
- Änderung: «location» → «locations»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A4d5de8 · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 35 · prüfen
Freigabe: offen

- alt: STILLWATER wants a Seeker of its own. The programme believes that O.D.I.N. has so many Psions only because it possesses the Seeker. Without a Seeker, STILLWATER remains dependent on late-awakened adults whose gifts are weak and unreliable. The cell first notices it at the edges: a report from Alaska, a rumour in the canteen, a dead drop with a message not meant for them. Then the rumour becomes a file, and the file becomes a child.
- neu: STILLWATER wants its own Seeker. The programme believes that O.D.I.N. has so many Psions only because it possesses the Seeker. Without a Seeker, STILLWATER remains dependent on late-awakened adults whose gifts are weak and unreliable. The cell first notices it at the edges: a report from Alaska, a rumour in the canteen, a dead drop with a message not meant for them. Then the rumour becomes a file, and the file becomes a child.
- Änderung: «a Seeker of» → «(gestrichen)»; «own.» → «own Seeker.»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"absatz":true} -->

#### AD-en-Acc7b64 · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 35 · sicher
Freigabe: offen

- alt: ☠○○○○ Elaine Mercer discovers Caleb Mercer in Fairbanks and reports him to the programme. Dr. Webb examines him and confirms: the boy hears something. Sign: A report about a boy in Alaska who does not sleep at night and speaks of humming. The mother sees a doctor.
- neu: ☠○○○○ Elaine Mercer discovers Caleb Mercer in Fairbanks and reports him to the programme. Dr. Webb examines him and confirms: the boy hears something. Sign: A report about a boy in Alaska who does not sleep at night and speaks of humming. The mother consults a doctor.
- Änderung: «sees» → «consults»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"absatz":true} -->

#### AD-en-A00e25a · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 35 · prüfen
Freigabe: offen

- alt: ☠☠○○○ STILLWATER begins to observe and prepare Caleb Mercer. Trail: A Grey File emerges. In O.D.I.N.’s canteen the rumour goes round that STILLWATER is active in Alaska. A dead drop in Montréal contains a message about a boy who hears humming.
- neu: ☠☠○○○ STILLWATER begins to observe and prepare Caleb Mercer. Sign: A Grey File is created. In the O.D.I.N. canteen, the rumour spreads that STILLWATER is active in Alaska. A dead drop in Montréal contains a message about a boy who hears humming.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is created.»; «O.D.I.N.’s canteen» → «the O.D.I.N. canteen,»; «goes round» → «spreads»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"absatz":true} -->

#### AD-en-A07b1b5 · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 35 · prüfen
Freigabe: offen

- alt: ☠☠☠☠○ STILLWATER has prepared a scaled-down, risky procedure to open Caleb Mercer. The opening is imminent. Trail: A Red File emerges. An informant in Boston reports that STILLWATER is holding a child in Maryland. STILLWATER’s Remote Viewer draws places where the cell has been.
- neu: ☠☠☠☠○ STILLWATER has prepared a scaled-down, risky procedure to open Caleb Mercer. The opening is imminent. Sign: A Red File is created. An informant in Boston reports that STILLWATER is holding a child in Maryland. STILLWATER’s Remote Viewer draws places where the cell has been.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is created.»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"absatz":true} -->

#### AD-en-A660ba9 · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 35 · prüfen
Freigabe: offen

- alt: ☠☠☠☠☠ STILLWATER opens Caleb Mercer. America now has its own Seeker, and the European Seeker hears a second one for the first time. Trail: A Black File emerges. The European Seeker hears a second tone for the first time, very far away, in North America. It sounds like a Seeker.
- neu: ☠☠☠☠☠ STILLWATER opens Caleb Mercer. America now has its own Seeker, and the European Seeker hears a second one for the first time. Sign: A Black File is created. The European Seeker hears a second tone for the first time, very far away, in North America. It sounds like a Seeker.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is created.»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"absatz":true} -->

#### AD-en-A960926 · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 35 · prüfen
Freigabe: offen

- alt: The Key Figure is Dr. Marcus Webb, Head of the Psionics Department. He is the one who prepares the opening and wants to carry it out. If the cell takes him out, the plan loses two skulls and does not roll after the next mission. Without Webb, STILLWATER lacks the only person who understands its own psions and would dare the opening. Elaine Mercer would have to find a new head, and that takes time.
- neu: The Key Figure is Dr. Marcus Webb, Head of the Psionics Department. He is the one who prepares the opening and wants to carry it out. If the cell eliminates him, the plan loses two skulls and does not roll after the next mission. Without Webb, STILLWATER lacks the only person who understands its own psions and would dare the opening. Elaine Mercer would have to find a new head, and that takes time.
- Änderung: «takes him out,» → «eliminates him,»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"absatz":true} -->

#### AD-en-A733cce · „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“ · Band S. 36 · sicher
Freigabe: offen

- alt: At ☠☠☠☠☠ : “Fetch the children” (the Open Ones) gains a skull. The European Seeker hears the American one, and Kantor hears him too (Game Master’s Book, “Connecting Plans”).
- neu: At ☠☠☠☠☠ : “Fetch the children” (the Open Ones) gains one skull. The European Seeker hears the American one, and Kantor hears him too (Game Master’s Book, “Connecting Plans”).
- Änderung: «a» → «one»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","The Plan: “A Seeker of Their Own”"]],"absatz":true} -->

#### AD-en-A750a9f · „05 STILLWATER“ › „Hooks and Outlook“ · Band S. 36 · prüfen
Freigabe: offen

- alt: Grey File “The Boy from Fairbanks”. In O.D.I.N.’s canteen the rumour goes round that STILLWATER is active in Alaska. A dead drop in Montréal contains a message about a boy who hears humming. The cell is to travel to Fairbanks and find out what STILLWATER intends to do with the boy.
- neu: Grey File “The Boy from Fairbanks”. In the O.D.I.N. canteen, the rumour spreads that STILLWATER is active in Alaska. A dead drop in Montréal contains a message about a boy who hears humming. The cell is to travel to Fairbanks and find out what STILLWATER intends to do with the boy.
- Änderung: «O.D.I.N.’s canteen» → «the O.D.I.N. canteen,»; «goes round» → «spreads»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Ac4a3e3 · „05 STILLWATER“ › „Hooks and Outlook“ · Band S. 36 · prüfen
Freigabe: offen

- alt: Black File “A Second Tone”. The Seeker has heard a second tone, very far away, in North America. It sounds like a Seeker. The Council sends the cell to Boston, to a country where O.D.I.N. is only tolerated, and STILLWATER knows they are coming.
- neu: Black File “A Second Tone”. The Game Master’s Book lists this hook as a Red File. With this book it only comes at the fifth skull and is therefore black. The Seeker has heard a second tone, very far away, in North America. It sounds like a Seeker. The Council sends the cell to Boston, to a country where O.D.I.N. is only tolerated, and STILLWATER knows that they are coming.
- Änderung: «(nichts)» → «The Game Master’s Book lists this hook as a Red File. With this book it only comes at the fifth skull and is therefore black.»; «(nichts)» → «that»
<!-- daten: {"art":"satz","fundstellen":[["05 STILLWATER","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A77da3a · „06 Department 13“ › „Overview“ · Band S. 37 · sicher
Freigabe: offen

- alt: Type Department in Russian services, opponent with state cover
- neu: Type Department in Russian service, opponent with state cover
- Änderung: «services,» → «service,»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Overview"]],"absatz":true} -->

#### AD-en-A3d30ae · „06 Department 13“ › „History and Goals“ · Band S. 37 · prüfen
Freigabe: offen

- alt: 1957. Department 13 receives from an archive of the Soviet security apparatus finds from the Tunguska expedition of 1927: dark metal splinters, warm, quietly humming, without energy loss. The fragments come from the site of the explosion of 1908. The Department begins to understand that there are materials that do not fit into the known order. What exactly the splinters are remains open.
- neu: 1957. Department 13 receives from an archive of the Soviet security apparatus finds from the Tunguska expedition of 1927: dark metal splinters, warm, quietly humming, without energy loss. The splinters come from the site of the 1908 explosion. The Department begins to understand that there are materials that do not fit into the known order. What exactly the splinters are remains open.
- Änderung: «fragments» → «splinters»; «explosion of 1908.» → «1908 explosion.»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","History and Goals"]],"absatz":true} -->

#### AD-en-A0584cd · „06 Department 13“ › „History and Goals“ · Band S. 37 · prüfen
Freigabe: offen

- alt: 2011. The accumulation of manifestations reaches Russia too. Department 13 begins recruiting psions without helmets, often against their will. The life expectancy of these psions is two to five years. The Department accepts that.
- neu: 2011. The growing number of manifestations also reaches Russia. Department 13 begins recruiting psions without helmets, often against their will. The life expectancy of these psions is two to five years. The Department accepts this.
- Änderung: «accumulation» → «growing number»; «(nichts)» → «also»; «Russia too.» → «Russia.»; «that.» → «this.»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","History and Goals"]],"absatz":true} -->

#### AD-en-Afeb2f4 · „06 Department 13“ › „History and Goals“ · Band S. 38 · prüfen
Freigabe: offen

- alt: 2019. A team of geologists from Department 13 measures a spot in the rock in the restricted zone “Kola-7” that is silent. Not quiet, but silent. The Department believes it is close to the second find site. The test drilling begins. What only the game master knows: the soil samples show anomalies reminiscent of Kiruna. Whether the vein lies above a thin spot remains open. The Department reads the measurements as a danger, not as a certainty.
- neu: 2019. A team of geologists from Department 13 measures a spot in the rock in the restricted zone “Kola-7” that is silent. Not quiet, but silent. The Department believes it is close to the second find site. Test drilling begins. What only the game master knows: the soil samples show anomalies reminiscent of Kiruna. Whether the vein lies above a thin spot remains open. The Department interprets the readings as danger, not as certainty.
- Änderung: «The test» → «Test»; «reads» → «interprets»; «measurements» → «readings»; «a» → «(gestrichen)»; «a» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","History and Goals"]],"absatz":true} -->

#### AD-en-A32e3fd · „06 Department 13“ › „History and Goals“ · Band S. 38 · prüfen
Freigabe: offen

- alt: Department 13 wants alloy ore of its own, in order to build its own helmets and take the monopoly on the lid away from O.D.I.N. The Department’s leadership believes that O.D.I.N. gags the world’s psions with helmets in order to control them. A site of its own would allow Department 13 to train its own psions without losing them. The leadership considers the fact that the Department’s Psions die without helmets to be a temporary condition, not a design flaw.
- neu: Department 13 wants its own alloy ore in order to build its own helmets and to take away O.D.I.N.’s monopoly on the lid. The Department’s leadership believes that O.D.I.N. shackles the Psions of the world with helmets in order to control them. A find site of its own would allow Department 13 to train its own psions without losing them. The leadership considers the fact that the Department’s Psions die without helmets to be a temporary condition, not a design flaw.
- Änderung: «(nichts)» → «its own»; «of its own,» → «(gestrichen)»; «(nichts)» → «to»; «the» → «away O.D.I.N.’s»; «lid away from O.D.I.N.» → «lid.»; «gags» → «shackles»; «world’s psions» → «Psions of the world»; «(nichts)» → «find»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","History and Goals"]],"absatz":true} -->

#### AD-en-Ad725ed · „06 Department 13“ › „Key Figures“ · Band S. 38 · sicher
Freigabe: offen

- alt: Special Knows the restricted zones between Kola and the Urals better than any other person. Can request a Golem-7 in negotiations with a radio message (stats in the Threat Atlas).
- neu: Special Knows the restricted zones between Kola and the Urals better than any other human. Can request a Golem-7 in negotiations with a radio message (stats in the Threat Atlas).
- Änderung: «person.» → «human.»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Key Figures"]],"absatz":true} -->

#### AD-en-A8a2fff · „06 Department 13“ › „Key Figures“ · Band S. 38 · sicher
Freigabe: offen

- alt: A heavy-set man of 70 with close-cropped grey hair, an old scar over his left eye and hands that look as if they could bend iron. He leads the hunters of Department 13, the task forces for restricted zones and for operations abroad. He was there in the Carpathians in 1976 as a young soldier and saw how the operation failed. He wants to erase the disgrace of 1976, which he blames on the Department, and he wants to prevent Orlowa from leading the Department into a war it cannot win. He conceals that in 1976 he was glad when the Europeans were faster, because he did not want to carry out the order he was carrying. He speaks militarily, tersely, with a deep voice that rarely gets louder. He says “order” and “carried out”, even when he disagrees.
- neu: A massive man of 70 with close-cropped grey hair, an old scar over his left eye and hands that look as if they could bend iron. He leads the hunters of Department 13, the task forces for restricted zones and for operations abroad. He was there in the Carpathians in 1976 as a young soldier and saw how the operation failed. He wants to erase the disgrace of 1976, which he blames on the Department, and he wants to prevent Orlowa from leading the Department into a war it cannot win. He conceals that in 1976 he was glad when the Europeans were faster, because he did not want to carry out the order he was carrying. He speaks militarily, tersely, with a deep voice that rarely gets louder. He says “order” and “carried out”, even when he disagrees.
- Änderung: «heavy-set» → «massive»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Key Figures"]],"absatz":true} -->

#### AD-en-A956e3c · „06 Department 13“ › „Key Figures“ · Band S. 38 · prüfen
Freigabe: offen

- alt: The psion without a helmet · Humans
- neu: The psion Without Helmet · Humans
- Änderung: «without a helmet» → «Without Helmet»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Key Figures"]],"absatz":true} -->

#### AD-en-A19d023 · Gegner „Dr. Larissa Orlowa“, Beschreibung · Band S. 38 · prüfen
Freigabe: offen

- alt: A gaunt woman of 52 with grey hair that she ties back severely, and steel-rimmed glasses that she constantly takes off and puts back on. She leads the search for the second site and is the driving force behind the plan. She is the daughter of the officer who was meant to recruit the Open Ones in 1976 and came back empty-handed, and she wants to find the site her father never found. She conceals that in 1981 her father left her a notebook containing the name of the fifteen-year-old whom the Echo operatives arrested. She speaks briefly, precisely, without polite phrases. She says “we” and means the Department, never herself.
- neu: A gaunt woman of 52 with grey hair tied back severely, and steel-framed glasses that she constantly takes off and puts back on. She leads the search for the second site and is the driving force behind the plan. She is the daughter of the officer who was supposed to recruit the Open Ones in 1976 and came back empty-handed, and she wants to find the site her father never found. She conceals that her father left her a notebook in 1981 containing the name of the fifteen-year-old whom the Echo operatives arrested. She speaks briefly, precisely, without pleasantries. She says “we” and means the Department, never herself.
- Änderung: «that she ties» → «tied»; «steel-rimmed» → «steel-framed»; «meant» → «supposed»; «in 1981» → «(gestrichen)»; «(nichts)» → «in 1981»; «polite phrases.» → «pleasantries.»
<!-- daten: {"art":"gegnertext","name":"Dr. Larissa Orlowa"} -->

#### AD-en-A55aa5c · „06 Department 13“ › „Key Figures“ · Band S. 39 · prüfen
Freigabe: offen

- alt: A young woman of 22 with a shaved head, pale skin and a constant slight nosebleed. She wears a grey coat and no shoes when she is not on duty. She is the Department’s strongest psion, a telekinetic who was found two years ago in the restricted zone “Ural-3”, when she was twenty. She works for the Department because she was told that otherwise O.D.I.N. would come for her. She wants to survive and to know whether the voice she hears is really the Thirteenth or something else. She conceals that she once put on an O.D.I.N. helmet and the voice was gone for an hour. She speaks quietly, with long pauses, as if she had to fetch each word from the silence first. She says “we” and means the psions, never the Department.
- neu: A young woman of 22 with a shaved head, pale skin and a constant slight nosebleed. She wears a grey coat and no shoes when she is not on duty. She is the Department’s strongest psion, a telekinetic who was found two years ago in the restricted zone “Ural-3”, when she was twenty. She works for the Department because she was told that O.D.I.N. would otherwise take her. She wants to survive and to know whether the voice she hears is really the Thirteenth or something else. She conceals that she once put on an O.D.I.N. helmet and the voice was gone for an hour. She speaks quietly, with long pauses, as if she had to fetch each word from the silence first. She says “we” and means the psions, never the Department.
- Änderung: «otherwise» → «(gestrichen)»; «come for» → «otherwise take»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Key Figures"]],"absatz":true} -->

#### AD-en-A6f00b2 · „06 Department 13“ › „Bases and Means“ · Band S. 39 · sicher
Freigabe: offen

- alt: Moscow, Ulitsa Gospitalnaya 7. A five-storey building from the fifties, officially an archive of a fictitious cover agency for health services. The basement is fitted out, with a silence, an interrogation room, and a room where the Tunguska shards are stored. The Department’s administration, the files of the search for the second site, and the shards, about forty pieces, the largest the size of a forearm, are located there. Orlowa works there when she is not in Kola-7, along with twelve to fifteen administrative employees who officially work as archivists. One gets in through the back entrance with a service ID of the cover agency or through the basement, which is connected to the Baumanskaja metro station via an old maintenance tunnel.
- neu: Moscow, Uliza Gospitalnaja 7. A five-storey building from the fifties, officially an archive of a fictitious cover agency for health services. The basement is fitted out, with a silence, an interrogation room, and a room where the Tunguska shards are stored. The Department’s administration, the files of the search for the second site, and the shards, about forty pieces, the largest the size of a forearm, are located there. Orlowa works there when she is not in Kola-7, along with twelve to fifteen administrative employees who officially work as archivists. One gets in through the back entrance with a service ID of the cover agency or through the basement, which is connected to the Baumanskaja metro station via an old maintenance tunnel.
- Änderung: «Ulitsa Gospitalnaya» → «Uliza Gospitalnaja»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Bases and Means"]],"absatz":true} -->

#### AD-en-Ad2b651 · „06 Department 13“ › „Bases and Means“ · Band S. 39 · prüfen
Freigabe: offen

- alt: Restricted zone “Kola-7”. Kola Peninsula, about 80 kilometres southeast of Murmansk, in a disused mine from the Tsarist era. Officially, the area is closed due to risk of collapse. This is where the Department suspects the vein of alloy ore that the first measurements pointed to in 2019, and there is also a camp of residential containers, a workshop for the golems and a shaft that leads down into the depths where the vein lies. On site are about thirty workers and technicians, ten Hunters, two Psions without helmets, and one Golem-7 guarding the entrance (stats in the Threat Atlas). One gets in via an unpaved road that begins near Murmansk and passes two checkpoints, or via the old shaft, which is accessible from the lake if one can dive.
- neu: Restricted zone “Kola-7”. Kola Peninsula, about 80 kilometres southeast of Murmansk, in a disused mine from the Tsarist era. Officially, the area is closed due to risk of collapse. Since 2019 the Department has been mining the vein of alloy ore there, along with a camp with accommodation containers, a workshop for the golems and a shaft that leads down to where the vein lies. On site are about thirty workers and technicians, ten Hunters, two Psions without helmets, and one Golem-7 guarding the entrance (stats in the Threat Atlas). One gets in via an unpaved road that begins near Murmansk and passes two checkpoints, or via the old shaft, which is accessible from the lake if one can dive.
- Änderung: «This is where» → «Since 2019»; «suspects» → «has been mining»; «that the first measurements pointed to in 2019, and there is also» → «there, along with»; «of residential» → «with accommodation»; «into the depths» → «to»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Bases and Means"]],"absatz":true} -->

#### AD-en-Abf5a89 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · prüfen
Freigabe: offen

- alt: Department 13 has been searching for a second site of Alloy S for decades. In 2019 it found it. In the restricted zone “Kola-7” the Department is mining a vein of ore that is silent. The cell first notices it through small things: a contact in Murmansk goes silent, an order for beryllium runs through a shell company, and in Vienna a Hunter appears with a helmet that is not an O.D.I.N. Then the radio traffic is intercepted.
- neu: Department 13 has been searching for a second site of Alloy S for decades. In 2019 it found it. In the restricted zone “Kola-7” the Department is mining a vein of ore that is silent. The cell first notices it through small things: a contact in Murmansk goes silent, an order for beryllium runs through a shell company, and in Vienna a Hunter appears with a helmet that is not an O.D.I.N. model. Then a radio message is intercepted.
- Änderung: «(nichts)» → «model.»; «the» → «a»; «traffic» → «message»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-A9817ae · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · sicher
Freigabe: offen

- alt: ○○○○○ The Department searches for Alloy S between Kola and the Urals. The search is systematic, but unsuccessful. Trail: None. The Department works in secret.
- neu: ○○○○○ The Department searches for Alloy S between Kola and the Urals. The search is systematic, but unsuccessful. Sign: None. The Department works in secret.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-A726254 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · prüfen
Freigabe: offen

- alt: ☠○○○○ A geologist team finds a vein of ore in Kola-7 that is silent. The Department begins mining. A dead drop in Murmansk contains a message in Russian: “Silence has a price.” The handler of Hold-5 considers it a lure, but the Audit wants to know who wrote it.
- neu: ☠○○○○ A geology team finds in Kola-7 a vein of ore that is silent. The Department begins mining. Sign: A dead drop in Murmansk contains a message in Russian: “Silence has a price.” The handler of Hold-5 considers it a lure, but the Audit wants to know who wrote it.
- Änderung: «geologist» → «geology»; «(nichts)» → «in Kola-7»; «in Kola-7» → «(gestrichen)»; «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-A13b76b · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · sicher
Freigabe: offen

- alt: ☠☠○○○ The Department expands the mining and begins smelting the ore. The first bars of Alloy S are produced. A newspaper article about an “unusual find” in the Murmansk region disappears from the archive after two days. A contact in the canteen of Hold-5 says the Russians have “found something that is silent”.
- neu: ☠☠○○○ The Department expands the mining and begins smelting the ore. The first bars of Alloy S are produced. Sign: A newspaper article about an “unusual find” in the Murmansk region disappears from the archive after two days. A contact in the canteen of Hold-5 says the Russians have “found something that is silent”.
- Änderung: «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-A3e9a30 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · sicher
Freigabe: offen

- alt: ☠☠☠○○ The Department has enough ore to build a first helmet. It is crude, but it works. Orlowa wears it at a demonstration in Moscow. A radio message from the Department is intercepted: “The lid is on.” The Audit comes across an order for beryllium that went to a shell company in Murmansk.
- neu: ☠☠☠○○ The Department has enough ore to build a first helmet. It is crude, but it works. Orlowa wears it at a demonstration in Moscow. Sign: A radio message from the Department is intercepted: “The lid is on.” The Audit comes across an order for beryllium that went to a shell company in Murmansk.
- Änderung: «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-A529e22 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · prüfen
Freigabe: offen

- alt: The Department begins training its own Psions with the new helmets. The first three survive longer than two years. Trail: A hunter of the Department is seen in Vienna, with a helmet that is not an O.D.I.N. model. A Psion in the cell senses a silence that moves.
- neu: The Department begins training its own Psions with the new helmets. The first three survive longer than two years. Sign: A Hunter from the Department is seen in Vienna, with a helmet that is not an O.D.I.N. model. A Psion in the cell senses a silence that moves.
- Änderung: «Trail:» → «Sign:»; «hunter of» → «Hunter from»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-A2124c9 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · prüfen
Freigabe: offen

- alt: ☠☠☠☠☠ Department 13 has alloy ore of its own in sufficient quantity. It no longer needs helmets from Europe, and O.D.I.N. no longer has a monopoly on the lid. A radio message to O.D.I.N., open and unencrypted: “We have the silence. You have the fear.” The Tunguska shard in Bern begins to hum louder.
- neu: ☠☠☠☠☠ Department 13 has its own alloy ore in sufficient quantity. It no longer needs helmets from Europe, and O.D.I.N. no longer has a monopoly on the lid. Sign: A radio message to O.D.I.N., open and unencrypted: “We have the silence. You have the fear.” The Tunguska shard in Bern begins to hum louder.
- Änderung: «(nichts)» → «its own»; «of its own» → «(gestrichen)»; «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-Abc22d9 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · prüfen
Freigabe: offen

- alt: The Key Figure of the plan is Dr. Larissa Orlowa. She leads the geological evaluation, knows the coordinates of Kola-7 and drives the mining forward because she wants to find the site her father never found. If the cell takes him out, the plan loses two skulls. The Department does not roll after the next mission because the search stalls without Orlowa and the Hunters under Tarasow cannot continue the mining at the same pace.
- neu: The Key Figure of the plan is Dr. Larissa Orlowa. She leads the geological evaluation, knows the coordinates of Kola-7 and drives the mining forward because she wants to find the site her father never found. If the cell eliminates Orlowa, the plan loses two skulls. The Department does not roll after the next mission because the search stalls without Orlowa and the Hunters under Tarasow cannot continue the mining at the same pace.
- Änderung: «takes him out,» → «eliminates Orlowa,»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-Abaf017 · „06 Department 13“ › „The Plan: “The Second Site”“ · Band S. 40 · prüfen
Freigabe: offen

- alt: 5 to 6 A witness disappears. Someone who has seen the Department is picked up by a hunter before the cell can question him. What remains is a hotel room with an open window and a half-eaten breakfast.
- neu: 5 to 6 A witness disappears. Someone who has seen the Department is picked up by a hunter before the cell can question them. Left behind is a hotel room with an open window and a half-eaten breakfast.
- Änderung: «him. What remains» → «them. Left behind»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","The Plan: “The Second Site”"]],"absatz":true} -->

#### AD-en-Aa1a5ef · „06 Department 13“ › „Hooks and Outlook“ · Band S. 41 · sicher
Freigabe: offen

- alt: White File “Chinese Whispers”. A dead drop in Murmansk contains a message in Russian: “Silence has a price.” The handler of Hold-5 considers it a lure, but the Audit wants to know who wrote it. The cell is to watch the dead drop and find out who empties it.
- neu: White File “Silent Post”. A dead drop in Murmansk contains a message in Russian: “Silence has a price.” The handler of Hold-5 considers it a lure, but the Audit wants to know who wrote it. The cell is to watch the dead drop and find out who empties it.
- Änderung: «“Chinese Whispers”.» → «“Silent Post”.»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A3e5a16 · „06 Department 13“ › „Hooks and Outlook“ · Band S. 41 · prüfen
Freigabe: offen

- alt: Department 13 has alloy ore of its own. The Department’s helmets are crude, but they work, and the Department’s psions live longer. O.D.I.N. no longer has a monopoly on the lid, and the Department begins to sell its helmets to other services, first to STILLWATER, then to the highest bidder.
- neu: Department 13 has its own alloy ore. The Department’s helmets are crude, but they work, and the Department’s psions live longer. O.D.I.N. no longer has a monopoly on the lid, and the Department begins to sell its helmets to other services, first to STILLWATER, then to the highest bidder.
- Änderung: «(nichts)» → «its own»; «ore of its own.» → «ore.»
<!-- daten: {"art":"satz","fundstellen":[["06 Department 13","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A04821a · „07 The Seventh Bureau“ › „What O.D.I.N. Knows“ · Band S. 42 · prüfen
Freigabe: offen

- alt: The Registry keeps File 2022-031, classification Grey. It holds the messages, the coordinates, the earthquake data and a note: “Origin unknown. Relationship unknown. Strength unknown. Knowledge unknown. Plan unknown.” In 2023 the Registrar wrote underneath in pencil: “Do not touch until we know more. Whoever predicts earthquakes by predicting rifts knows more than we do.”
- neu: The Registry keeps File 2022-031, classification Grey. Inside are the reports, the coordinates, the earthquake data and a note: “Origin unknown. Relationship unknown. Strength unknown. Knowledge unknown. Plan unknown.” In 2023 the Registrar wrote underneath in pencil: “Do not touch until we know more. Whoever predicts earthquakes by predicting rifts knows more than we do.”
- Änderung: «It holds» → «Inside are»; «messages,» → «reports,»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","What O.D.I.N. Knows"]],"absatz":true} -->

#### AD-en-Af102a7 · „07 The Seventh Bureau“ › „The Agent of 2016“ · Band S. 42 · prüfen
Freigabe: offen

- alt: 14 March. The university seismologist was polite, nervous and looked at his phone three times. On parting he asked whether I was here because of “the Seventh”. I said I did not know what he meant. He smiled: “That is what everyone says.”
- neu: 14 March. The university seismologist was polite, nervous and looked at his phone three times. On parting he asked whether I was here because of “the Seventh”. I said I did not know what he meant. He smiled: “They all say that.”
- Änderung: «“That is what everyone says.”» → «“They all say that.”»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","The Agent of 2016"]],"absatz":true} -->

#### AD-en-Aa3ac4b · „07 The Seventh Bureau“ › „The Agent of 2016“ · Band S. 42 · sicher
Freigabe: offen

- alt: 22 March. An old surveyor in the teahouse by the People’s Park calls it “the bureau that asks the earth”. I asked how he knows. He pointed at the chessboard: “The knight does not know either, but it jumps.”
- neu: 22 March. An old surveyor in the teahouse by the People’s Park calls it “the bureau that asks the earth”. I asked how he knew that. He pointed at the chessboard: “The knight does not know either, but it jumps.”
- Änderung: «knows.» → «knew that.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","The Agent of 2016"]],"absatz":true} -->

#### AD-en-A5525a6 · „07 The Seventh Bureau“ › „The Agent of 2016“ · Band S. 42 · prüfen
Freigabe: offen

- alt: 9 April. In an alley behind the station, a chalk number on the wall: 7. Underneath, a date, 20 April, and a place, Litang. I took a photograph. In the photo the wall is empty. The chalk on my fingers smelled of thunderstorms. I want to go to the archive. I want the files to be quiet.
- neu: 9 April. In an alley behind the station, a chalk number on the wall: 7. Underneath, a date, 20 April, and a place, Litang. I took photographs. In the photograph the wall is empty. The chalk on my fingers smelled of thunderstorms. I want to go to the archive. I want the files to be silent.
- Änderung: «a photograph.» → «photographs.»; «photo» → «photograph»; «quiet.» → «silent.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","The Agent of 2016"]],"absatz":true} -->

#### AD-en-Ad525b7 · „07 The Seventh Bureau“ › „The Agent of 2016“ · Band S. 42 · prüfen
Freigabe: offen

- alt: On 20 April 2016 the earth shook near Litang in Sichuan. No one was harmed. No rift was reported, which does not mean there was none.
- neu: On 20 April 2016 the earth shook near Litang in Sichuan. No one came to harm. No rift was reported, which does not mean there was none.
- Änderung: «was harmed.» → «came to harm.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","The Agent of 2016"]],"absatz":true} -->

#### AD-en-A417d7f · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 42 · prüfen
Freigabe: offen

- alt: The Seventh Bureau is a research unit, founded in the seventies after a rift from which a voice spoke was found during the clean-up after an earthquake. Since then the unit has learned to predict rifts by listening to frequencies that O.D.I.N.’s rift detectors do not know. It does not know what lies behind the rifts. It wants to know before it comes out on its own. It does not know that O.D.I.N. exists, but it suspects that it is not alone. Its head is Dr. Lin Shuyan, early fifties, head of frequency analysis, who has measured rifts for thirty years and never entered one. She is the Key Figure. She is not afraid of the answer.
- neu: The Seventh Bureau is a research unit, founded in the seventies after clean-up work following an earthquake uncovered a rift from which a voice spoke. Since then the unit has learned to predict rifts by listening to frequencies that O.D.I.N.’s rift detectors do not know. It does not know what lies behind the rifts. It wants to know before it comes out on its own. It does not know that O.D.I.N. exists, but it suspects that it is not alone. Its head is Dr. Lin Shuyan, early fifties, head of frequency analysis, who has measured rifts for thirty years and never entered one. She is the Key Figure. She is not afraid of the answer.
- Änderung: «(nichts)» → «clean-up work following an earthquake uncovered»; «spoke was found during the clean-up after an earthquake.» → «spoke.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]],"absatz":true} -->

#### AD-en-A6a29a5 · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 43 · sicher
Freigabe: offen

- alt: ☠○○○○ New measuring stations at predicted locations. A journal that is also read in Bern prints a study on “anomalous precursors”.
- neu: ☠○○○○ New measuring stations at predicted locations. A specialist journal that is also read in Bern prints a study on “anomalous precursors”.
- Änderung: «(nichts)» → «specialist»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]],"absatz":true} -->

#### AD-en-Ab913d2 · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 43 · sicher
Freigabe: offen

- alt: Hook. A retired Antiquarian sends the Registry a Chinese study that he does not understand. The measurement series in it follows exactly the pattern of the rifts that O.D.I.N. The cell is to find out who wrote it. The author is giving a lecture in Geneva in the autumn.
- neu: Hook. A retired Antiquarian sends the Registry a Chinese study that he does not understand. The measurement series in it follows exactly the pattern of the rifts that O.D.I.N. knows. The cell is to find out who wrote it. The author is giving a lecture in Geneva in the autumn.
- Änderung: «(nichts)» → «knows.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]],"absatz":true} -->

#### AD-en-Ae262d1 · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 43 · sicher
Freigabe: offen

- alt: ☠☠○○○ Old guardian families in Sichuan and Yunnan are called. In a village near Kangding everyone suddenly wears the same sign, a circle with a line.
- neu: ☠☠○○○ Old guardian families in Sichuan and Yunnan are summoned. In a village near Kangding everyone suddenly wears the same sign, a circle with a line.
- Änderung: «called.» → «summoned.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]],"absatz":true} -->

#### AD-en-A903b53 · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 43 · prüfen
Freigabe: offen

- alt: Hook. An Antiquarian of the cell finds a Chinese sheet from the 18th century in an estate in Geneva. It describes a rift and an office that “administers” it, and bears a sign: a circle with a line. The same sign stands on a current satellite photograph, in chalk, on a rock near Kangding.
- neu: Hook. An Antiquarian of the cell finds in a Geneva estate a Chinese sheet from the 18th century. It describes a rift and an office that “administers” it, and bears a sign: a circle with a line. The same sign stands on a current satellite photograph, in chalk, on a rock near Kangding.
- Änderung: «(nichts)» → «in a Geneva estate»; «century in an estate in Geneva.» → «century.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]],"absatz":true} -->

#### AD-en-A5d4e91 · „07 The Seventh Bureau“ › „Three Possible Truths“ · Band S. 44 · sicher
Freigabe: offen

- alt: ☠☠☠☠○ The Bureau holds the rift open and harvests. The yield is greater than expected. In the mountains lights go out at night, and a shepherd finds birds that smell of thunderstorms.
- neu: ☠☠☠☠○ The Bureau keeps the rift open and harvests. The yield is greater than expected. In the mountains lights go out at night, and a shepherd finds birds that smell of thunderstorms.
- Änderung: «holds» → «keeps»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","Three Possible Truths"]],"absatz":true} -->

#### AD-en-A70449e · „07 The Seventh Bureau“ › „In Play“ · Band S. 44 · prüfen
Freigabe: offen

- alt: Martin Aebi is the way in. He knows more than his report says. Anyone who visits him in Stockholm and gives him time can get him to talk about the house without a number: Insight against Hard (3) to recognise that he wants to talk, and Persuasion against Very Hard (4) so that he does it. What he then tells depends on the truth the game master has chosen. Only one thing he tells in every version: that after the chalk number in the alley, someone followed him every evening for two weeks, someone who wore no shoes, and that on the flight to Zurich he did not dare fall asleep.
- neu: Martin Aebi is the way in. He knows more than his report says. Anyone who visits him in Stockholm and gives him time can get him to talk about the house without a number: Insight against Hard (3) to recognise that he wants to talk, and Persuasion against Very Hard (4) so that he does it. If the second test fails, he stays silent that day. On the next visit the cell may try again. What he then tells depends on the truth the game master has chosen. Only one thing he tells in every version: that after the chalk number in the alley, someone followed him every evening for two weeks, someone who wore no shoes, and that on the flight to Zurich he did not dare fall asleep.
- Änderung: «(nichts)» → «If the second test fails, he stays silent that day. On the next visit the cell may try again.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","In Play"]],"absatz":true} -->

#### AD-en-A00b23f · „07 The Seventh Bureau“ › „In Play“ · Band S. 44 · sicher
Freigabe: offen

- alt: There is a house without a number in Stockholm too. Whether that is coincidence is for the game master to decide.
- neu: There is also a house without a number in Stockholm. Whether that is coincidence is for the game master to decide.
- Änderung: «(nichts)» → «also»; «Stockholm too.» → «Stockholm.»
<!-- daten: {"art":"satz","fundstellen":[["07 The Seventh Bureau","In Play"]],"absatz":true} -->

#### AD-en-A8671a3 · „08 The Partners“ › „Overview“ · Band S. 44 · sicher
Freigabe: offen

- alt: The Partners are not an organisation and not an alliance. They are a network of silent agreements between O.D.I.N. and the services that have supported the Veil Protocol since 1961 without ever having signed it. They provide what O.D.I.N. needs in the world of passports, files and borders, and they do not ask questions. In return, O.D.I.N. keeps the Veil tight on their side, and no one names their name.
- neu: The Partners are not an organisation and not an alliance. They are a network of silent agreements between O.D.I.N. and the services that have supported the Veil Protocol since 1961 without ever having signed it. They deliver what O.D.I.N. needs in the world of passports, files and borders, and they do not ask questions. In return, O.D.I.N. keeps the Veil tight on their side, and no one names their name.
- Änderung: «provide» → «deliver»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","Overview"]],"absatz":true} -->

#### AD-en-Ae28fa4 · „08 The Partners“ › „What the Partners Are“ · Band S. 44 · sicher
Freigabe: offen

- alt: The British service, the French one and a dozen others are silent partners of the Veil Protocol. They never signed in 1961, because there are no signatures. They understood that there are things one does not take to a committee, and that there is an organisation that takes care of them. In return, they keep the Veil tight on their side.
- neu: The British service, the French service and a dozen others are silent partners of the Veil Protocol. They never signed in 1961, because there are no signatures. They understood that there are things one does not take to a committee, and that there is an organisation that takes care of them. In return, they keep the Veil tight on their side.
- Änderung: «one» → «service»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","What the Partners Are"]],"absatz":true} -->

#### AD-en-A9c0480 · „08 The Partners“ › „What the Partners Are“ · Band S. 45 · sicher
Freigabe: offen

- alt: What a Partner does not deliver is just as important: no weapons, no operational forces, no information about its own operations. A partner opens doors, it does not walk through them. Anyone who asks a partner service for more receives a polite no and a note in a file O.D.I.N. will never see.
- neu: What a Partner does not deliver is just as important: no weapons, no operational forces, no information about its own operations. A partner opens doors, it does not walk through them with you. Anyone who asks a partner service for more receives a polite no and a note in a file O.D.I.N. will never see.
- Änderung: «them.» → «them with you.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","What the Partners Are"]],"absatz":true} -->

#### AD-en-Acb2d8c · „08 The Partners“ › „How the Protocol Works“ · Band S. 45 · prüfen
Freigabe: offen

- alt: Every partner service has exactly one liaison person. They are not an agent, not an officer in the field, but a person who stands high enough in the hierarchy to make decisions and low enough not to stand in the light themselves. The handlers of O.D.I.N. know the name, the number and the place where one meets. The cell knows only the place.
- neu: Each partner service has exactly one liaison. They are not an agent, not an officer in the field, but a person who stands high enough in the hierarchy to make decisions and low enough not to stand in the light themselves. The handlers of O.D.I.N. know the name, the number and the place where one meets. The cell knows only the place.
- Änderung: «Every» → «Each»; «liaison person.» → «liaison.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","How the Protocol Works"]],"absatz":true} -->

#### AD-en-A77cebd · „08 The Partners“ › „How the Protocol Works“ · Band S. 45 · sicher
Freigabe: offen

- alt: When something has gone wrong, the cell meets the liaison person. That is the rule. An agent is in custody, a cover is blown, a car is parked badly in front of a crime scene. Then the handler calls, and the next morning the liaison sits in a café, with a newspaper and an envelope. They always pay. They make no jokes. They say what they can do, and what it costs.
- neu: When something has gone wrong, the cell meets the liaison. That is the rule. An agent is in custody, a cover is blown, a car is parked badly in front of a crime scene. Then the handler calls, and the next morning the liaison sits in a café, with a newspaper and an envelope. They always pay. They make no jokes. They say what they can do, and what it costs.
- Änderung: «liaison person.» → «liaison.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","How the Protocol Works"]],"absatz":true} -->

#### AD-en-A8a3ade · „08 The Partners“ › „How the Protocol Works“ · Band S. 45 · sicher
Freigabe: offen

- alt: Because every favour has a price. That is the difference between a partner and a friend. The liaison person helps because their service gets something for it: a piece of information, a signature, a silence. Sometimes the knowledge that O.D.I.N. is in their debt is enough. Debts are the currency in which the Partners reckon.
- neu: For every favour has a price. That is the difference between a partner and a friend. The liaison helps because their service gets something for it: a piece of information, a signature, a silence. Sometimes the knowledge that O.D.I.N. is in their debt is enough. Debts are the currency in which the Partners reckon.
- Änderung: «Because» → «For»; «person» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","How the Protocol Works"]],"absatz":true} -->

#### AD-en-A2aff10 · „08 The Partners“ › „The Liaison Persons“ · Band S. 45 · sicher
Freigabe: offen

- alt: Liaison Person · Humans
- neu: Liaison · Humans
- Änderung: «Person» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","The Liaison Persons"]],"absatz":true} -->

#### AD-en-A68367d · „08 The Partners“ › „The Liaison Persons“ · Band S. 45 · prüfen
Freigabe: offen

- alt: A woman around fifty, grey coat, short dark hair, glasses with thin frames. She sits in cafés near railway stations, always facing the door, always with a newspaper she does not read. She drinks espresso, not café au lait. She pays in cash and leaves no tip.
- neu: A woman around fifty, grey coat, short dark hair, glasses with thin frames. She sits in cafés near railway stations, always facing the door, always with a newspaper she does not read. She drinks espresso, no milky coffee. She pays in cash and leaves no tip.
- Änderung: «not café au lait.» → «no milky coffee.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","The Liaison Persons"]],"absatz":true} -->

#### AD-en-Acd3a25 · „08 The Partners“ › „The Liaison Persons“ · Band S. 45 · prüfen
Freigabe: offen

- alt: Marguerite Vasseur wants France to remain in the game. She took over the Veil Protocol from her predecessor, together with a notebook in which every favour France has done O.D.I.N. since 1961 is recorded. She keeps the book going. She does not believe in the supernatural, she believes in balances. O.D.I.N. is a factor to be reckoned with, not an ally to be trusted.
- neu: Marguerite Vasseur wants France to remain in the game. She took over the Veil Protocol from her predecessor, together with a notebook in which every favour France has done O.D.I.N. since 1961 is recorded. She keeps it up to date. She does not believe in the supernatural, she believes in balances. O.D.I.N. is a factor to be reckoned with, not an ally to be trusted.
- Änderung: «the book going.» → «it up to date.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","The Liaison Persons"]],"absatz":true} -->

#### AD-en-A6e5c6b · „08 The Partners“ › „The Liaison Persons“ · Band S. 45 · prüfen
Freigabe: offen

- alt: A man of around sixty, grey suit, pocket square, an umbrella that never seems to be wet. He meets in hotels, never in cafés, and he orders tea that he does not drink. He is always punctual, and he expects the same of others. Whoever arrives late gets a remark that sounds like a compliment and is not one.
- neu: A man around sixty, grey suit, pocket square, an umbrella that never seems to be wet. He meets in hotels, never in cafés, and he orders tea that he does not drink. He is always punctual, and he expects the same of others. Anyone who arrives late receives a remark that sounds like a compliment and is not one.
- Änderung: «of» → «(gestrichen)»; «Whoever» → «Anyone who»; «gets» → «receives»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","The Liaison Persons"]],"absatz":true} -->

#### AD-en-A4b0906 · „08 The Partners“ › „The Liaison Persons“ · Band S. 46 · sicher
Freigabe: offen

- alt: She says what she thinks, without beating about the bush. “I can do that. I cannot do that. I can do that, but then I want to know why.” She asks questions that other liaisons would not ask, because she really wants to know what is going on. She says “O.D.I.N.” without hesitation, as if it were the name of a neighbour. She makes no jokes, but she smiles when someone is honest with her.
- neu: She says what she thinks, without beating about the bush. “I can do that. I can’t do that. I can do that, but then I want to know why.” She asks questions that other liaisons would not ask, because she really wants to know what is going on. She says “O.D.I.N.” without hesitation, as if it were the name of a neighbour. She makes no jokes, but she smiles when someone is honest with her.
- Änderung: «cannot» → «can’t»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","The Liaison Persons"]],"absatz":true} -->

#### AD-en-A513382 · „08 The Partners“ › „What the Partner Asks in Return for a Favour“ · Band S. 46 · sicher
Freigabe: offen

- alt: 3 A signature. The partner needs a person who officially does not exist to sign a document, make a statement or confirm an identity. The cell provides a legend.
- neu: 3 A signature. The partner needs a person who officially does not exist to sign a document, make a statement or confirm an identity. The cell provides a cover identity.
- Änderung: «legend.» → «cover identity.»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","What the Partner Asks in Return for a Favour"]],"absatz":true} -->

#### AD-en-A987931 · „08 The Partners“ › „What the Partner Asks in Return for a Favour“ · Band S. 46 · sicher
Freigabe: offen

- alt: 6 A favour in the future. The partner asks for nothing concrete. They say: “You owe me something.” The game master notes the favour and redeems it later, when it is most inconvenient.
- neu: 6 A favour in the future. The partner demands nothing concrete. They say: “You owe me something.” The game master notes the favour and redeems it later, when it is most inconvenient.
- Änderung: «asks for» → «demands»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","What the Partner Asks in Return for a Favour"]],"absatz":true} -->

#### AD-en-Af582c4 · „08 The Partners“ › „What the Partner Asks in Return for a Favour“ · Band S. 46 · prüfen
Freigabe: offen

- alt: A favour is a currency that circulates between the cell and a partner service. For each partner, the game master notes whether it owes the cell something or the other way round. Calling in a noted favour succeeds without a test; if the cell asks for more, dice are rolled, two steps easier. A favour the partner owes the cell expires after one campaign year. A favour that the cell owes never expires.
- neu: A favour is a currency that circulates between the cell and a partner service. For each partner, the game master notes whether it owes the cell something or the other way round. Calling in a noted favour succeeds without a test; if the cell asks for more, dice are rolled, two steps easier, but never below Easy (1). A favour the partner owes the cell expires after one campaign year. A favour that the cell owes never expires.
- Änderung: «easier.» → «easier, but never below Easy (1).»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","What the Partner Asks in Return for a Favour"]],"absatz":true} -->

#### AD-en-A851e69 · „08 The Partners“ › „Hooks“ · Band S. 46 · sicher
Freigabe: offen

- alt: Grey File “The False Passport”. An agent of the cell is detained at the border between France and Spain. His diplomatic passport is genuine, but the number is marked as stolen in a database. The handler calls Marguerite Vasseur, and she says: “That can be arranged. But there is one matter.” The matter is a man in Marseille who works for the French service and has not reported in for three days. The cell is to find him before the police do.
- neu: Grey File “The False Passport”. An agent of the cell is detained at the border between France and Spain. Their diplomatic passport is genuine, but the number is marked as stolen in a database. The handler calls Marguerite Vasseur, and she says: “That can be arranged. But there is one matter.” The matter is a man in Marseille who works for the French service and has not reported in for three days. The cell is to find him before the police do.
- Änderung: «His» → «Their»
<!-- daten: {"art":"satz","fundstellen":[["08 The Partners","Hooks"]],"absatz":true} -->

#### AD-en-Aaba2ac · „09 The Freemasons and the Legend of the Illuminati“ › „Overview“ · Band S. 50 · prüfen
Freigabe: offen

- alt: The Freemasons are a worldwide fraternity of lodges, founded in the early 18th century, with rituals, degrees, symbols and a long tradition of secrecy. For O.D.I.N. they are not a threat and not an opponent, but a backdrop, a place where something can hide. The Illuminati, on the other hand, are a legend that O.D.I.N. has cultivated for decades to swallow real trails. Both appear in missions when the cell follows a false trail or needs a cover.
- neu: The Freemasons are a worldwide fraternity of lodges, founded in the early 18th century, with rituals, degrees, symbols and a long tradition of secrecy. For O.D.I.N. they are not a threat and not an opponent, but a backdrop, a place where something can hide. The Illuminati, by contrast, are a legend that O.D.I.N. has cultivated for decades to swallow real traces. Both appear in missions when the cell follows a false trail or needs a cover.
- Änderung: «on the other hand,» → «by contrast,»; «trails.» → «traces.»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","Overview"]],"absatz":true} -->

#### AD-en-A843125 · „09 The Freemasons and the Legend of the Illuminati“ › „The Freemasons“ · Band S. 50 · prüfen
Freigabe: offen

- alt: For O.D.I.N. the Freemasons are no threat and no adversary. Lodges are closed spaces with secrecy, symbols and old archives. Exactly that makes them an ideal hiding place for someone who wants to conceal something, and a good cover for agents. Some handlers are members of a lodge because one meets people there one would not otherwise meet: judges, businesspeople, doctors, police officers. The federation itself knows nothing of this.
- neu: For O.D.I.N. the Freemasons are not a threat and not an opponent. Lodges are closed spaces with secrecy, symbols and old archives. Exactly that makes them an ideal hiding place for someone who wants to conceal something, and a good cover for agents. Some handlers are members of a lodge because one meets people there one would not otherwise meet: judges, businesspeople, doctors, police officers. The fraternity itself knows nothing of this.
- Änderung: «no» → «not a»; «no adversary.» → «not an opponent.»; «federation» → «fraternity»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","The Freemasons"]],"absatz":true} -->

#### AD-en-Aec1245 · „09 The Freemasons and the Legend of the Illuminati“ › „In Play: The Red Herring“ · Band S. 50 · sicher
Freigabe: offen

- alt: Freemasons are almost always a red herring. A cell finds a set square at a crime scene and believes it has found a conspiracy. It has found a neighbour who goes to his lodge on Tuesday evenings. That is exactly what makes the one exception so dangerous: the Lodge of the Silent Circle, which is covered in the next dossier. All other lodges are what they seem.
- neu: Freemasons are almost always a red herring. A cell finds a square at a crime scene and believes it has found a conspiracy. It has found a neighbour who goes to his lodge on Tuesday evenings. That is exactly what makes the one exception so dangerous: the Lodge of the Silent Circle, which is covered in the next dossier. All other lodges are what they seem.
- Änderung: «set» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","In Play: The Red Herring"]],"absatz":true} -->

#### AD-en-Aee475b · „09 The Freemasons and the Legend of the Illuminati“ › „In Play: The Red Herring“ · Band S. 51 · sicher
Freigabe: offen

- alt: 2 A calendar entry “Lodge evening, 19:30” in a witness’s mobile phone. The witness is a member of a regular lodge in Hanover. The evening was a lecture on local history.
- neu: 2 A calendar entry “Lodge evening, 19:30” in a witness’s mobile phone. The witness is a member of a regular lodge in Hanover. The evening was a talk on city history.
- Änderung: «lecture» → «talk»; «local» → «city»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","In Play: The Red Herring"]],"absatz":true} -->

#### AD-en-A612bf4 · „09 The Freemasons and the Legend of the Illuminati“ › „In Play: The Red Herring“ · Band S. 51 · prüfen
Freigabe: offen

- alt: 5 An empty room in a cellar with a black-and-white tiled floor, in the middle a table, on it an open book. The room is a lodge’s practice room. The book is a minute book from 1998.
- neu: 5 An empty room in a cellar with a black-and-white tiled floor, in the middle a table, on it an open book. The room is the practice room of a lodge. The book is a minute book from 1998.
- Änderung: «(nichts)» → «the practice room of»; «lodge’s practice room.» → «lodge.»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","In Play: The Red Herring"]],"absatz":true} -->

#### AD-en-A3a1b7b · „09 The Freemasons and the Legend of the Illuminati“ › „Hooks“ · Band S. 51 · sicher
Freigabe: offen

- alt: White File “Set Square”. A retired dentist in Hanover has reported to the police that someone broke into his lodge and stole nothing except a book of minutes from 1872. The police consider the case insignificant. An Observer from O.D.I.N. intercepted the report because the year 1872 appears in an open file. The cell is to find out whether it matters. It is a day’s work. The lodge in Hanover is a daughter of the lodge in Uppsala. The stolen book contains a copy of the founding charter of the Lodge of the Silent Circle. The person who stole it is a messenger from Uppsala, a former archivist who works for the lodge and does not know what he carries. He was sent to fetch it and knows only the assignment, not the content. The cell finds him in a hotel in Hanover, with the book in his suitcase.
- neu: White File “Set Square”. A retired dentist in Hanover has reported to the police that someone broke into his lodge and stole nothing except a book of minutes from 1872. The police consider the case insignificant. An Observer from O.D.I.N. intercepted the report because the year 1872 appears in an open file. The cell is to find out whether it matters. It is a day’s work. The lodge in Hanover is a daughter lodge of the lodge in Uppsala. The stolen book contains a copy of the founding charter of the Lodge of the Silent Circle. The person who stole it is a messenger from Uppsala, a former archivist who works for the lodge and does not know what he carries. He was sent to fetch it and knows only the assignment, not the contents. The cell finds him in a hotel in Hanover, with the book in his suitcase.
- Änderung: «(nichts)» → «lodge»; «content.» → «contents.»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","Hooks"]],"absatz":true} -->

#### AD-en-Abdee18 · Gegner „Dr. Cornelius Weber“, Beschreibung · Band S. 51 · prüfen
Freigabe: offen

- alt: Weber has been a Freemason since 2008, admitted on the instructions of the Print Shop, which built a legend for him: a retired judge who, after the death of his wife, is looking for a circle that gives him support. The legend is so good that in the lodge Weber is regarded as a quiet, reliable brother who rarely speaks and listens well.
- neu: Weber has been a Freemason since 2008, admitted on the instructions of the Print Shop, which built a cover story for him: a retired judge who, after the death of his wife, seeks a circle that gives him support. The legend is so good that in the lodge Weber is regarded as a quiet, reliable brother who rarely speaks and listens well.
- Änderung: «legend» → «cover story»; «is looking for» → «seeks»
<!-- daten: {"art":"gegnertext","name":"Dr. Cornelius Weber"} -->

#### AD-en-A80b478 · Gegner „Dr. Cornelius Weber“, Beschreibung · Band S. 51 · prüfen
Freigabe: offen

- alt: What Weber learns in the lodge is rarely spectacular. He hears about property sales, about inheritance disputes, about a member who set up a foundation in Basel. He hears about a brother who worked for a British service in the nineties and now lives in Hamburg. He hears about an old minute book that has stood in the lodge library since 1872 and that nobody may read, because it comes from another lodge. The rumour says it contains the founding charter of a lodge that no longer exists. Weber has never seen the book.
- neu: What Weber learns in the lodge is rarely spectacular. He hears about property sales, inheritance disputes, a member who founded a foundation in Basel. He hears about a brother who worked for a British service in the nineties and now lives in Hamburg. He hears about an old minute book that has stood in the lodge library since 1872 and that no one may read, because it comes from another lodge. The rumour says it contains the founding charter of a lodge that no longer exists. Weber has never seen the book.
- Änderung: «about» → «(gestrichen)»; «about» → «(gestrichen)»; «set up» → «founded»; «nobody» → «no one»
<!-- daten: {"art":"gegnertext","name":"Dr. Cornelius Weber"} -->

#### AD-en-Acc37d0 · Gegner „Dr. Cornelius Weber“, Beschreibung · Band S. 51 · prüfen
Freigabe: offen

- alt: Once a year Weber reports to the Print Shop. Most of the information is worthless. But in October 2026 he heard about a member who knows an accountant in Brussels who has suddenly disappeared. The accountant was a member of an internet group called “Illuminati Europa”. Weber reported the name. The report only confirmed for the Print Shop a trail it already had. The Grey File “The Second Light” itself came about through an observer in Brussels who intercepted the missing-person reports of the Belgian police, because on the missing people’s computers there was a ritual written by the Print Shop in 1971.
- neu: Once a year Weber reports to the Print Shop. Most information is worthless. But in October 2026 he heard about a member who knows an accountant in Brussels who has suddenly disappeared. The accountant was a member of an internet group called “Illuminati Europa”. Weber reported the name. The report only confirmed a lead the Print Shop already had. The Grey File “The Second Light” itself came about through an observer in Brussels who intercepted the missing-person reports of the Belgian police, because on the missing people’s computers there was a ritual written by the Print Shop in 1971.
- Änderung: «of the» → «(gestrichen)»; «for» → «a lead»; «a trail it» → «(gestrichen)»
<!-- daten: {"art":"gegnertext","name":"Dr. Cornelius Weber"} -->

#### AD-en-A7a1b1b · „09 The Freemasons and the Legend of the Illuminati“ › „Hooks“ · Band S. 52 · sicher
Freigabe: offen

- alt: White File “The Illuminatus”. In an internet forum, a user named “Weishaupt1776” claims to be a direct descendant of the founder and to own the genuine signet ring with the eye. He offers to sell memberships for €500 each. The Print Shop has discovered the post and wants to know whether the man is merely a fraud or whether he owns something genuine. The cell is to visit him in Leipzig, where he lives in a small flat, surrounded by printed-out websites. The ring is one of the hundred copies that the Print Shop had made in 1968, bought at a flea market. The man is harmless. But in his flat lies a book that he should not have: a print from the Print Shop from 1971, with a real circle as an ornament.
- neu: White File “The Illuminatus”. In an internet forum, a user named “Weishaupt1776” claims to be a direct descendant of the founder and to own the genuine signet ring with the eye. He offers to sell memberships for €500 each. The Print Shop has discovered the post and wants to know whether the man is merely a fraud or whether he owns something genuine. The cell is to visit him in Leipzig, where he lives in a small flat, surrounded by printed-out web pages. The ring is one of the hundred copies that the Print Shop had made in 1968, bought at a flea market. The man is harmless. But in his flat lies a book that he should not have: a print from the Print Shop from 1971, with a real circle as an ornament.
- Änderung: «websites.» → «web pages.»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","Hooks"]],"absatz":true} -->

#### AD-en-A78e2ab · „09 The Freemasons and the Legend of the Illuminati“ › „Hooks“ · Band S. 52 · prüfen
Freigabe: offen

- alt: White File “The Lodge Brother”. A member of the Lodge of the Sealed Eye in Hanover, an estate agent, has told another member that he found a cellar in an old house in Hildesheim in which a circle is painted on the floor. The circle is warm, he said. The other member is Cornelius Weber. He reports the find to the Print Shop, which opens a White File. The cell is to check the basement. The circle is painted with red paint, by young people who held a party there. The warmth comes from a defective heating pipe. The case is a red herring. But in the neighbouring house lives an old woman who for a week has been singing at night a song that no one knows.
- neu: White File “The Lodge Brother”. A member of the Lodge of the Sealed Eye in Hanover, an estate agent, has told another member that he found a cellar in an old house in Hildesheim in which a circle is painted on the floor. The circle is said to be warm. The other member is Cornelius Weber. He reports the find to the Print Shop, which opens a White File. The cell is to examine the cellar. The circle is painted with red paint, by young people who held a party there. The warmth comes from a defective heating pipe. The case is a red herring. But in the neighbouring house lives an old woman who for a week has been singing at night a song that no one knows.
- Änderung: «warm, he said.» → «said to be warm.»; «check» → «examine»; «basement.» → «cellar.»
<!-- daten: {"art":"satz","fundstellen":[["09 The Freemasons and the Legend of the Illuminati","Hooks"]],"absatz":true} -->

#### AD-en-A013c47 · „10 Lodge of the Silent Circle“ › „Overview“ · Band S. 52 · sicher
Freigabe: offen

- alt: “We never sang. We only listened, so that no one forgets that singing happened.
- neu: “We have never sung. We only listened, so that no one forgets that singing happened.
- Änderung: «(nichts)» → «have»; «sang.» → «sung.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Overview"]],"absatz":true} -->

#### AD-en-Ae753c7 · „10 Lodge of the Silent Circle“ › „Overview“ · Band S. 52 · prüfen
Freigabe: offen

- alt: Type Lodge, regularly affiliated to the federation, work in the seventh degree without any Masonic connection
- neu: Type Lodge, formally affiliated with the federation, work in the seventh degree without Masonic reference
- Änderung: «regularly» → «formally»; «to» → «with»; «any» → «(gestrichen)»; «connection» → «reference»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Overview"]],"absatz":true} -->

#### AD-en-Af5d399 · „10 Lodge of the Silent Circle“ › „History and Goals“ · Band S. 52 · sicher
Freigabe: offen

- alt: 1871, Lake Solberg. The children of the estate sit in a circle at night and sing an old song that the tutor taught them. In the morning, the tutor and one child from the centre of the circle are gone. The pastor writes a page into the church register, then places it in the estate’s house Bible.
- neu: 1871, Solberg Lake. The children of the estate sit in a circle at night and sing an old song that the tutor taught them. In the morning, the tutor and one child from the centre of the circle are gone. The pastor writes a page into the church register, then places it in the estate’s house Bible.
- Änderung: «Lake Solberg.» → «Solberg Lake.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","History and Goals"]],"absatz":true} -->

#### AD-en-Ae0646e · „10 Lodge of the Silent Circle“ › „History and Goals“ · Band S. 53 · prüfen
Freigabe: offen

- alt: January 1872, Uppsala. The lord of the manor, whose two children sat in the circle that night, founds the Lodge of the Silent Circle together with the pastor. The lord of the manor writes down the song as musical notation from his children’s memory. The lodge receives a charter and is affiliated with the federation.
- neu: January 1872, Uppsala. The estate owner, whose two children sat in the circle that night, founds the Lodge of the Silent Circle together with the pastor. The estate owner writes the song down from his children’s memory as musical notation. The lodge receives a charter and is affiliated with the federation.
- Änderung: «lord of the manor,» → «estate owner,»; «lord of the manor» → «estate owner»; «down» → «(gestrichen)»; «as musical notation» → «down»; «memory.» → «memory as musical notation.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","History and Goals"]],"absatz":true} -->

#### AD-en-Aba125a · „10 Lodge of the Silent Circle“ › „History and Goals“ · Band S. 53 · prüfen
Freigabe: offen

- alt: 1872, Atlantic. A brig is found abandoned. Its captain was a member of the Lodge. The circles are in the second logbook. Today the logbook lies in the lodge library.
- neu: 1872, Atlantic. A brig is found abandoned. Its captain was a member of the Lodge. The circles are written in the second logbook. The logbook is now in the lodge library.
- Änderung: «(nichts)» → «written»; «Today the» → «The»; «lies» → «is now»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","History and Goals"]],"absatz":true} -->

#### AD-en-Aa65fe6 · „10 Lodge of the Silent Circle“ › „History and Goals“ · Band S. 53 · prüfen
Freigabe: offen

- alt: 1938, Uppsala. Viktor Hallström finds the missing page in the estate’s house Bible. A lodge brother visits him in Stockholm. After that, Hallström writes nothing for three weeks. What was discussed, only the Lodge knows. Since that year, the lodge has demanded the page back, because Hallström did not hand it over.
- neu: 1938, Uppsala. Viktor Hallström finds the missing page in the estate’s house Bible. A lodge brother visits him in Stockholm. After that, Hallström writes nothing for three weeks. What was discussed, only the Lodge knows what was discussed. Since that year, the lodge has demanded the page back, because Hallström did not hand it over.
- Änderung: «knows.» → «knows what was discussed.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","History and Goals"]],"absatz":true} -->

#### AD-en-Ad13bbc · „10 Lodge of the Silent Circle“ › „History and Goals“ · Band S. 53 · prüfen
Freigabe: offen

- alt: The lodge wants to bring the missing page from the church register of 1871 back to Uppsala and put it back into the book. It believes that otherwise the book remains open, and that the circles only fall silent when the page is in its place. The lodge considers itself the custodian of knowledge that no one else wishes to preserve, and the final authority that knows the tutor’s name without misusing it.
- neu: The lodge wants to bring the missing page from the 1871 church register back to Uppsala and place it in the book again. It believes that otherwise the book remains open, and that the circles only fall silent when the page is in its place. The lodge considers itself the custodian of knowledge that no one else wishes to preserve, and the final authority that knows the tutor’s name without misusing it.
- Änderung: «(nichts)» → «1871»; «of 1871» → «(gestrichen)»; «put» → «place»; «back into» → «in»; «book.» → «book again.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","History and Goals"]],"absatz":true} -->

#### AD-en-Aba3de2 · „10 Lodge of the Silent Circle“ › „Key Figures“ · Band S. 53 · sicher
Freigabe: offen

- alt: Keeper of the lodge library · Humans
- neu: Custodian of the lodge library · Humans
- Änderung: «Keeper» → «Custodian»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Key Figures"]],"absatz":true} -->

#### AD-en-Adc7db7 · „10 Lodge of the Silent Circle“ › „Key Figures“ · Band S. 53 · sicher
Freigabe: offen

- alt: Martin Ekdahl, 35 years old, an athletic man with short blond hair and a suit that is one size too big. He wants to modernise the Lodge and win O.D.I.N. as a partner. He knows the statutes, the founding history and the names of the current members, but not the song. His secret is that in 2025 he told a Stockholm reporter about the Lodge, without naming names. The reporter works for an internet group called “Illuminati Europa”. He speaks quickly, enthusiastically, with many questions, and interrupts himself.
- neu: Martin Ekdahl, 35 years old, an athletic man with short blond hair and a suit that is one size too large. He wants to modernise the Lodge and win O.D.I.N. as a partner. He knows the statutes, the founding history and the names of the current members, but not the song. His secret is that in 2025 he told a Stockholm reporter about the Lodge, without naming names. The reporter works for an internet group called “Illuminati Europa”. He speaks quickly, enthusiastically, with many questions, and interrupts himself.
- Änderung: «big.» → «large.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Key Figures"]],"absatz":true} -->

#### AD-en-Ab5bc1a · Gegner „The Archivist“, Beschreibung · Band S. 53 · sicher
Freigabe: offen

- alt: Keeper of the lodge library · Humans
- neu: Custodian of the lodge library · Humans
- Änderung: «Keeper» → «Custodian»
<!-- daten: {"art":"gegnertext","name":"The Archivist"} -->

#### AD-en-A77cf17 · Gegner „The Archivist“, Beschreibung · Band S. 53 · sicher
Freigabe: offen

- alt: Elsa Norberg, 64 years old, a slender woman with a grey bun, glasses and a woollen cardigan that smells of paper. She wants to preserve the order of the library and protect the logbook from strangers’ hands. She knows the musical notation of the song, the story of the brig, the names of the founders and the circles from the logbook. Her secret is that in 2019 she sold a copy of the circles to an antiquarian in Hanover to finance the Lodge. The original is still there. She speaks quietly, precisely, with long pauses, and quotes from old books.
- neu: Elsa Norberg, 64 years old, a slender woman with a grey bun, glasses and a cardigan that smells of paper. She wants to preserve the order of the library and protect the logbook from strangers’ hands. She knows the notation of the song, the history of the brig, the names of the founders and the circles from the logbook. Her secret is that in 2019 she sold a copy of the circles to an antiquarian in Hanover to finance the Lodge. The original is still there. She speaks quietly, precisely, with long pauses, and quotes from old books.
- Änderung: «woollen» → «(gestrichen)»; «musical» → «(gestrichen)»; «story» → «history»
<!-- daten: {"art":"gegnertext","name":"The Archivist"} -->

#### AD-en-A3e89a5 · Gegner „The Young Brother“, Beschreibung · Band S. 53 · prüfen
Freigabe: offen

- alt: Martin Ekdahl, 35 years old, an athletic man with short blond hair and a suit that is one size too big. He wants to modernise the Lodge and win O.D.I.N. as a partner. He knows the constitution, the founding story and the names of the current members, but not the song. His secret is that in 2025 he told a Stockholm reporter about the Lodge, without naming names. The reporter works for an internet group called “Illuminati Europa”. He speaks quickly, enthusiastically, with many questions, and interrupts himself.
- neu: Martin Ekdahl, 35 years old, an athletic man with short blond hair and a suit that is one size too large. He wants to modernise the Lodge and win O.D.I.N. as a partner. He knows the statutes, the founding history and the names of the current members, but not the song. His secret is that in 2025 he told a Stockholm reporter about the Lodge, without naming names. The reporter works for an internet group called “Illuminati Europa”. He speaks quickly, enthusiastically, with many questions, and interrupts himself.
- Änderung: «big.» → «large.»; «constitution,» → «statutes,»; «story» → «history»
<!-- daten: {"art":"gegnertext","name":"The Young Brother"} -->

#### AD-en-A295433 · „10 Lodge of the Silent Circle“ › „Bases and Means“ · Band S. 54 · prüfen
Freigabe: offen

- alt: The lodge house in Uppsala. Svartbäcksgatan 14, a narrow house from the 19th century with wood panelling and a circle in the floor of the meeting room. There are the lodge library with the minute book from 1872, the logbook of the Ghost Brig and the sheet music of the song, a meeting room with seven chairs and a cellar with a salt ring. Present are the Master, the Archivist, Martin Ekdahl and Alfred Sundberg. Henrik Gyllen comes once a month. You get in through the front door if you are invited as a guest, or through the back courtyard if you know the door to the cellar. The library is locked, the key hangs on the Archivist’s belt.
- neu: The lodge house in Uppsala. Svartbäcksgatan 14, a narrow house from the 19th century with wood panelling and a circle in the floor of the meeting room. There are the lodge library with the minute book from 1872, the logbook of the Ghost Brig and the sheet music of the song, a meeting room with seven chairs and a cellar with a salt ring. Present are the Master, the Archivist, Martin Ekdahl and Alfred Sundberg. Henrik Gyllen comes once a month. One enters through the front door if one is invited as a guest, or through the back courtyard if one knows the door to the cellar. The library is locked, the key hangs on the Archivist’s belt.
- Änderung: «You get in» → «One enters»; «you are» → «one is»; «you know» → «one knows»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Bases and Means"]],"absatz":true} -->

#### AD-en-Aedeb55 · „10 Lodge of the Silent Circle“ › „Bases and Means“ · Band S. 54 · prüfen
Freigabe: offen

- alt: The vicarage in Solberg. Next to the church, a red wooden house with a small archive. There is the box with old papers, including the newspaper article from 1872 and the pastor’s letter. The church register from 1841 to 1893 is in the regional archive in Uppsala. Present is Pastor Mattias Berg, 61, who wants to preserve the peace in the village. You get in through the front door if you give a reason. The archive is in the back room, the door is usually open.
- neu: The Parsonage in Solberg. Next to the church, a red wooden house with a small archive. There is the box with old papers, including the newspaper article from 1872 and the pastor’s letter. The church register from 1841 to 1893 is in the regional archive in Uppsala. Present is Pastor Mattias Berg, 61, who wants to preserve the peace in the village. One enters through the front door if one gives a reason. The archive is in the back room, the door is usually open.
- Änderung: «vicarage» → «Parsonage»; «You get in» → «One enters»; «you give» → «one gives»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Bases and Means"]],"absatz":true} -->

#### AD-en-A7c29c1 · Gegner „The Antiquarian“, Beschreibung · Band S. 54 · prüfen
Freigabe: offen

- alt: Alfred Sundberg, 73 years old, an old man with round glasses and a briefcase full of books. He wants to retrieve the page from 1871, with O.D.I.N.’s help if necessary. He knows that the stone at Lake Solberg is old and that the Lodge preserves the song, and he knows the circles from the lodge library. His secret is that he deliberately had the runestone at Lake Solberg exposed in order to force O.D.I.N. to open the open file from 1871. He has not understood what he has woken. He speaks quietly, quotes from old books and avoids direct answers.
- neu: Alfred Sundberg, 73 years old, an old man with round glasses and a briefcase full of books. He wants to retrieve the page from 1871, if necessary with O.D.I.N.’s help. He knows that the stone at Solberg Lake is old and that the Lodge preserves the song, and he knows the circles from the lodge library. His secret is that he deliberately had the runestone at Solberg Lake exposed to force O.D.I.N. to take up the open file from 1871 again. He has not understood what he has awakened. He speaks quietly, quotes from old books and avoids direct answers.
- Änderung: «(nichts)» → «if necessary»; «help if necessary.» → «help.»; «(nichts)» → «Solberg»; «Solberg» → «(gestrichen)»; «(nichts)» → «Solberg»; «Solberg» → «(gestrichen)»; «in order» → «(gestrichen)»; «open» → «take up»; «1871.» → «1871 again.»; «woken.» → «awakened.»
<!-- daten: {"art":"gegnertext","name":"The Antiquarian"} -->

#### AD-en-Ada8ce6 · „10 Lodge of the Silent Circle“ › „Bases and Means“ · Band S. 55 · prüfen
Freigabe: offen

- alt: The Uppsala regional archive. A climate-controlled basement room in the Uppsala regional archive. There lies the church register of Solberg, 1841 to 1893, with the broken-off entry and the imprint of the missing page. A former lodge brother reports visitors’ book entries. You get in only with the archive’s permission, in white cotton gloves.
- neu: The Regional Archive in Uppsala. A cellar room with air conditioning in the regional archive in Uppsala. There is the church register of Solberg, 1841 to 1893, with the broken-off entry and the imprint of the missing page. A former lodge brother reports visitors’ book entries. One enters only with permission of the archive, wearing white cotton gloves.
- Änderung: «Uppsala regional archive.» → «Regional Archive in Uppsala.»; «climate-controlled basement» → «cellar»; «(nichts)» → «with air conditioning»; «Uppsala» → «(gestrichen)»; «archive.» → «archive in Uppsala.»; «lies» → «is»; «You get in» → «One enters»; «(nichts)» → «permission of»; «archive’s permission, in» → «archive, wearing»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Bases and Means"]],"absatz":true} -->

#### AD-en-A357db8 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 55 · sicher
Freigabe: offen

- alt: ○○○○○ The Lodge searches for the page without knowing where it lies. Trail: Nothing. The Lodge is silent.
- neu: ○○○○○ The Lodge searches for the page without knowing where it lies. Sign: Nothing. The Lodge is silent.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-A541f18 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 55 · sicher
Freigabe: offen

- alt: The lodge has a plan: it wants to trade the page for knowledge. A dead drop in Uppsala contains a message with a circle.
- neu: The lodge has a plan: it wants to trade the page for knowledge. Sign: A dead drop in Uppsala contains a message with a circle.
- Änderung: «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-Ad73387 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 55 · sicher
Freigabe: offen

- alt: ☠☠☠○○ The Lodge sends Martin Ekdahl to negotiate with O.D.I.N. A young man in an oversized suit seeks contact with the cell’s handler in Stockholm.
- neu: ☠☠☠○○ The Lodge sends Martin Ekdahl to negotiate with O.D.I.N. Sign: A young man in an oversized suit seeks contact with the cell’s handler in Stockholm.
- Änderung: «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-A191eed · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 55 · sicher
Freigabe: offen

- alt: ☠☠☠☠○ The lodge hires professionals from Grey Meridian through the antiquarian in Hanover to steal the page. The break-in fails at the steel cabinet. A line of music at the scene in the Registry.
- neu: ☠☠☠☠○ The lodge hires professionals from Grey Meridian through the antiquarian in Hanover to steal the page. The break-in fails at the steel cabinet. Sign: A line of music at the scene in the Registry.
- Änderung: «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-A21ff21 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 55 · sicher
Freigabe: offen

- alt: The page lies again in Uppsala, in the church register. The following night all children within a radius of 100 km sing in their sleep. A newspaper report about singing children in Sweden. The Singers gain a skull.
- neu: The page lies again in Uppsala, in the church register. The following night all children within a radius of 100 km sing in their sleep. Sign: A newspaper report about singing children in Sweden. The Singers gain an additional skull.
- Änderung: «(nichts)» → «Sign:»; «a» → «an additional»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-A6a77a5 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 55 · prüfen
Freigabe: offen

- alt: The Key Figure is the Master of the Silent Circle, Carl-Johan Rosenqvist. He is the only one who knows the song of 1871 in full and is permitted to speak the tutor’s name. If the cell eliminates him, the plan loses two skulls, and the lodge does not roll after the next mission because it makes no decision without its Master. But the cell also loses the only source that could voluntarily tell it the name from 1957.
- neu: The Key Figure is the Master of the Silent Circle, Carl-Johan Rosenqvist. He is the only one who knows the song of 1871 completely and may speak the name of the tutor. If the cell eliminates him, the plan loses two skulls, and the lodge does not roll after the next mission because it makes no decision without its Master. But the cell also loses the only source that could voluntarily tell it the name from 1957.
- Änderung: «in full» → «completely»; «is permitted to» → «may»; «tutor’s name.» → «name of the tutor.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-A6d5723 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 56 · sicher
Freigabe: offen

- alt: At ☠☠○○○ : “Preserve the silence” (Congregation of the Silent Word) gains one skull. Don Matteo Riva learns of the Lodge and its knowledge of 1871 and sees in it further proof.
- neu: At ☠☠○○○ : “Preserve the silence” (Congregation of the Silent Word) gains one skull. Don Matteo Riva learns of the Lodge and its knowledge of 1871 and sees it as further proof.
- Änderung: «in» → «(gestrichen)»; «(nichts)» → «as»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-A064e89 · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 56 · sicher
Freigabe: offen

- alt: At ☠☠☠☠○ : “The Second Light” (the Enlightened) gains a skull. A lodge brother tells a reporter about the circles, and the story ends up with “Illuminati Europa”.
- neu: At ☠☠☠☠○ : “The Second Light” (the Enlightened) gains one skull. A lodge brother tells a reporter about the circles, and the story ends up with “Illuminati Europa”.
- Änderung: «a» → «one»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-Afc58fd · „10 Lodge of the Silent Circle“ › „The Plan: “The Page From 1871”“ · Band S. 56 · sicher
Freigabe: offen

- alt: At ☠☠☠☠☠ : “The stairs” (the Singers) gains a skull. The children in the area sing the song from 1871, and the Singers hear it (Game Master’s Book, “Connecting Plans”).
- neu: At ☠☠☠☠☠ : “The stairs” (the Singers) gains one skull. The children in the area sing the song from 1871, and the Singers hear it (Game Master’s Book, “Connecting Plans”).
- Änderung: «a» → «one»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","The Plan: “The Page From 1871”"]],"absatz":true} -->

#### AD-en-Aee0033 · „10 Lodge of the Silent Circle“ › „Hooks and Outlook“ · Band S. 56 · prüfen
Freigabe: offen

- alt: Black File “Accounts from 1871”. The Audit has found on the Council’s accounts a transfer that arrives every year on 21 December, since 1871, from a bank that no longer exists. The cell is to find out who pays. The Lodge of the Silent Circle knows. It will not say, unless someone brings it the page that Hallström found in 1938.
- neu: Black File “Accounts from 1871”. The Audit found a transfer in the Council’s accounts that arrives every year on 21 December, since 1871, from a bank that no longer exists. The cell is to find out who is paying. The Lodge of the Silent Circle knows. They will not say, unless someone brings them the page that Hallström found in 1938.
- Änderung: «has» → «(gestrichen)»; «on» → «a transfer in»; «a transfer» → «(gestrichen)»; «pays.» → «is paying.»; «It» → «They»; «it» → «them»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Af479b4 · „10 Lodge of the Silent Circle“ › „Hooks and Outlook“ · Band S. 56 · prüfen
Freigabe: offen

- alt: The page lies in the church register in Uppsala again. The following night all children within a radius of 100 km sing in their sleep. The lodge has achieved its goal, but the song is louder than ever before. The Master closes the Lodge for three months and burns the copy of the musical notation.
- neu: The page lies again in the church register of Uppsala. The following night all children within a radius of 100 km sing in their sleep. The lodge has achieved its goal, but the song is louder than ever before. The Master closes the Lodge for three months and burns the copy of the musical notation.
- Änderung: «(nichts)» → «again»; «in Uppsala again.» → «of Uppsala.»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A58af6e · „10 Lodge of the Silent Circle“ › „Hooks and Outlook“ · Band S. 56 · sicher
Freigabe: offen

- alt: The next plan: “Keep the Song” ☠○○○○ . The lodge wants to prevent the song from falling into the wrong hands and begins to collect all copies it has ever sold.
- neu: The next plan: “Preserve the Song” ☠○○○○ . The lodge wants to prevent the song from falling into the wrong hands and begins to collect all copies it has ever sold.
- Änderung: «“Keep» → «“Preserve»
<!-- daten: {"art":"satz","fundstellen":[["10 Lodge of the Silent Circle","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A3ba7b1 · „11 The Enlightened“ › „Overview“ · Band S. 57 · sicher
Freigabe: offen

- alt: Marginal note by the Typesetter, compendium of the Print Shop, 1971
- neu: Margin note by the Typesetter, compendium of the Print Shop, 1971
- Änderung: «Marginal» → «Margin»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Overview"]],"absatz":true} -->

#### AD-en-A51981b · „11 The Enlightened“ › „Overview“ · Band S. 57 · sicher
Freigabe: offen

- alt: Relationship A tool, out of control
- neu: Relationship Tool, out of control
- Änderung: «A tool,» → «Tool,»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Overview"]],"absatz":true} -->

#### AD-en-Aba2a4d · „11 The Enlightened“ › „History and Goals“ · Band S. 57 · prüfen
Freigabe: offen

- alt: What only the game master knows: The Print Shop never officially informed the Operations Branch about the extent. A legend writer named Georg Wendlinger has looked after the Enlightened since 2012, because he considered the legend controllable. He now knows that he was wrong.
- neu: What only the game master knows: The Print Shop never officially informed the Operations Branch about the extent. A legend writer named Georg Wendlinger has been looking after the Enlightened since 2012, because he considered the legend manageable. He now knows that he was wrong.
- Änderung: «looked» → «been looking»; «controllable.» → «manageable.»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","History and Goals"]],"absatz":true} -->

#### AD-en-A16ab2e · Gegner „Georg Wendlinger“, Beschreibung · Band S. 57 · prüfen
Freigabe: offen

- alt: Slim, grey suit, reading glasses on a chain, looks like a man who has seen nothing but files for years. He maintains websites, forums and membership lists, deletes dangerous posts and watches the circles. He wants to stabilise the legend without the Council or the public learning how out of control it is. He conceals that in 2021 he falsified an internal report on working rituals in order to prevent the burial of the legend. He speaks dryly and officially, in file numbers and memos, and never says more than he has to.
- neu: Slim, grey suit, reading glasses on a chain, looks like a man who has seen only files for years. He maintains websites, forums and membership lists, deletes dangerous posts and observes the circles. He wants to stabilise the legend without the Council or the public learning how out of control it is. He conceals that he forged an internal report about functioning rituals in 2021 to prevent a burial of the legend. He speaks dryly and officially, in file numbers and memos, and never says more than he has to.
- Änderung: «nothing but» → «only»; «watches» → «observes»; «in 2021» → «(gestrichen)»; «falsified» → «forged»; «on working» → «about functioning»; «order» → «2021»; «the» → «a»
<!-- daten: {"art":"gegnertext","name":"Georg Wendlinger"} -->

#### AD-en-A9d2878 · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · prüfen
Freigabe: offen

- alt: Special Knows every legend of the Enlightened and can forge membership lists. Can cover up a trail within an hour.
- neu: Special Knows every legend of the Enlightened and can forge membership lists. Can erase a trail in one hour.
- Änderung: «cover up» → «erase»; «within an» → «in one»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]],"absatz":true} -->

#### AD-en-A680f15 · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · sicher
Freigabe: offen

- alt: Weakness He is no fighter. Proof of his 2021 forgery makes him a tool of the cell.
- neu: Weakness He is not a fighter. Proof of his 2021 forgery makes him a tool of the cell.
- Änderung: «no» → «not a»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]],"absatz":true} -->

#### AD-en-A7602bc · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · sicher
Freigabe: offen

- alt: Behaviour Watches, makes phone calls, deletes. Withdraws as soon as he suspects O.D.I.N.
- neu: Behaviour Observes, makes calls, deletes. Withdraws as soon as he suspects O.D.I.N.
- Änderung: «Watches,» → «Observes,»; «phone» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]],"absatz":true} -->

#### AD-en-A36c33c · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · sicher
Freigabe: offen

- alt: Weakness Proof that the ritual lies to him. A Negotiator who speaks his language. He is no fighter.
- neu: Weakness Proof that the ritual lies to him. A Negotiator who speaks his language. He is not a fighter.
- Änderung: «no» → «not a»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]],"absatz":true} -->

#### AD-en-A4a4cc6 · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · sicher
Freigabe: offen

- alt: Defector · Humans
- neu: Dropout · Humans
- Änderung: «Defector» → «Dropout»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]],"absatz":true} -->

#### AD-en-A8b092e · „11 The Enlightened“ › „Key Figures“ · Band S. 58 · prüfen
Freigabe: offen

- alt: Stocky, short hair, wears an old Bundeswehr jacket, looks like a man who has hidden for a long time. He was a member of the Brussels group until October 2026 and withdrew after the disappearance of the three. He wants to forget what he saw, and wants no witness statement, no contact, no file. He conceals that he stole a copy of the ritual and a small crystal from Maarten’s cellar, both deposited in a locker at Brussels-South station. He speaks in clipped phrases, suspiciously, and repeats himself.
- neu: Stocky, short hair, wears an old Bundeswehr jacket, looks like a man who has hidden for a long time. He was a member of the Brussels group until October 2026 and withdrew after the disappearance of the three. He wants to forget what he saw, and wants no witness statement, no contact, no file. He conceals that he stole a copy of the ritual and a small crystal from Maarten’s cellar, both deposited in a locker at Brussels-South station. He speaks haltingly, suspiciously, repeats himself.
- Änderung: «in clipped phrases,» → «haltingly,»; «and» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Key Figures"]],"absatz":true} -->

#### AD-en-A24d79e · Gegner „Maarten de Vries“, Beschreibung · Band S. 58 · prüfen
Freigabe: offen

- alt: Pale, unshaven, dark rings under his eyes, wears a shirt that is too big and a ring with an eye. He has performed the ritual “The Second Light” and believes the three who vanished have been “enlightened”. He wants to complete the ritual and see the “Second Light”. He conceals that he invited the three guests and that he repaints the circle every night. He speaks quietly, with long pauses, as if he were listening to someone.
- neu: Pale, unshaven, dark circles under the eyes, wears an oversized shirt and a ring with an eye. He has performed the ritual “The Second Light” and believes the three missing people were “enlightened”. He wants to complete the ritual and see the “Second Light”. He conceals that he invited the three guests and that he repaints the circle every night. He speaks quietly, with long pauses, as if he were listening to someone.
- Änderung: «rings» → «circles»; «his» → «the»; «a» → «an oversized»; «that is too big» → «(gestrichen)»; «who vanished have been» → «missing people were»
<!-- daten: {"art":"gegnertext","name":"Maarten de Vries"} -->

#### AD-en-A97d0a2 · Gegner „Nadia El-Khoury“, Beschreibung · Band S. 58 · prüfen
Freigabe: offen

- alt: Short dark hair, leather jacket, always has her computer with her, looks like an overworked project manager. She founded the group and manages the membership lists. She wants to protect the group, thinks the ritual is a role-playing game and wants no scandal. She conceals that she herself once drew a small circle from a book of the Enlightened, but never performed a ritual, and that she fears something might have noticed it anyway. She speaks fast, with lots of English words, and interrupts others.
- neu: Short dark hair, leather jacket, always carries her computer, looks like an overworked project manager. She founded the group and manages the membership lists. She wants to protect the group, considers the ritual a role-playing game and wants no scandal. She conceals that she once drew a small circle from a book of the Enlightened herself, but never performed a ritual, and that she fears something may have noticed it anyway. She speaks fast, with lots of English words, and interrupts others.
- Änderung: «has» → «carries»; «computer with her,» → «computer,»; «thinks» → «considers»; «is» → «(gestrichen)»; «herself» → «(gestrichen)»; «Enlightened,» → «Enlightened herself,»; «might» → «may»
<!-- daten: {"art":"gegnertext","name":"Nadia El-Khoury"} -->

#### AD-en-A10aaf5 · „11 The Enlightened“ › „Bases and Means“ · Band S. 59 · prüfen
Freigabe: offen

- alt: Quiet street of brick terraced houses. The house is inconspicuous, the front garden overgrown. In the cellar lies a circle of chalk and ash, about two metres in diameter, with a fist-sized crystal in the centre. The circle is warm. In the living room lie books of the Enlightened, candles, notes. In the garden, remains of ash. Maarten de Vries stays there, sometimes with one or two followers from the forum whom he has initiated. The door is usually locked. A ground-floor window is loose. The cellar has a small window to the garden that can be opened from outside with a Security Systems test against Doable (2).
- neu: Quiet street with terraced brick houses. The house is inconspicuous, the front garden overgrown. In the cellar lies a circle of chalk and ash, about two metres in diameter, with a fist-sized crystal in the centre. The circle is warm. In the living room lie books of the Enlightened, candles, notes. In the garden, ash remains. Maarten de Vries stays there, sometimes with one or two followers from the forum whom he has initiated. The door is usually locked. A ground-floor window is loose. The cellar has a small window to the garden that can be opened from outside with a Security Systems test against Doable (2).
- Änderung: «of» → «with terraced»; «terraced» → «(gestrichen)»; «remains of ash.» → «ash remains.»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Bases and Means"]],"absatz":true} -->

#### AD-en-A994d3e · „11 The Enlightened“ › „Bases and Means“ · Band S. 59 · prüfen
Freigabe: offen

- alt: A small café opposite the terraced house, with a view of the street. The Brussels group has its regulars’ table there. On the wall hangs a framed print of an eye in a triangle. The owner knows nothing, but he knows the faces. Nadia El-Khoury is there, sometimes Thomas Peeters, occasionally other members. Anyone who passes themselves off as a member gets information at the regulars’ table with a Deception test against Doable (2).
- neu: A small café opposite the terraced house, with a view of the street. There is a regulars’ table of the Brussels group. On the wall hangs a framed print of an eye in a triangle. The owner knows nothing, but he knows the faces. Nadia El-Khoury is there, sometimes Thomas Peeters, occasionally other members. Anyone who passes themselves off as a member gets information at the regulars’ table with a Deception test against Doable (2).
- Änderung: «The Brussels group has its» → «There is a»; «there.» → «of the Brussels group.»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Bases and Means"]],"absatz":true} -->

#### AD-en-Aba9299 · „11 The Enlightened“ › „Bases and Means“ · Band S. 59 · prüfen
Freigabe: offen

- alt: In the station’s locker area, level -1, near the exit to Avenue Fonsny. There lie a copy of the ritual “The Second Light”, a small crystal from Maarten’s cellar and a notebook belonging to Thomas Peeters. Thomas Peeters has the key. Without the key, opening the lock requires a Security Systems test against Hard (3).
- neu: In the station’s locker area, level -1, near the exit to Avenue Fonsny. There lie a copy of the ritual “The Second Light”, a small crystal from Maarten’s cellar and a notebook belonging to Thomas Peeters. The key is with Thomas Peeters. Without the key, opening the lock requires a Security Systems test against Hard (3).
- Änderung: «(nichts)» → «The key is with»; «Peeters has the key.» → «Peeters.»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Bases and Means"]],"absatz":true} -->

#### AD-en-A9aed13 · „11 The Enlightened“ › „Bases and Means“ · Band S. 59 · prüfen
Freigabe: offen

- alt: Equipment: Books from the Print Shop, candles, chalk, ash, a crystal from a rift find in the Ardennes. No weapons except knives and a pistol carried by Falkenrath.
- neu: Equipment: Books from the Print Shop, candles, chalk, ash, a crystal from a rift find in the Ardennes. No weapons except knives and Falkenrath’s pistol.
- Änderung: «a pistol carried by Falkenrath.» → «Falkenrath’s pistol.»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Bases and Means"]],"absatz":true} -->

#### AD-en-Af0ec1c · Gegner „Hieronymus Falkenrath“, Beschreibung · Band S. 59 · prüfen
Freigabe: offen

- alt: Tall, silver hair, expensive coat, wears a signet ring with an eye on his right hand. He considers the order real and believes the Print Shop is merely a legend that disguises the order. He wants to lead the order out of hiding and achieve “enlightenment” for all members, and he wants the ritual from Brussels for his own circle. He conceals that he has never performed a ritual because he fears it could consume him, and that he sends others ahead. He speaks unctuously, in long sentences, and calls himself “Grand Master”.
- neu: Tall, silver hair, expensive coat, wears a signet ring with an eye on the right hand. He considers the order genuine and believes the Print Shop is only a legend that covers the order. He wants to lead the order out of hiding and achieve “enlightenment” for all members, and he wants the ritual from Brussels for his own circle. He conceals that he has never performed a ritual because he fears it could consume him, and that he sends others ahead. He speaks unctuously, in long sentences, and calls himself “Grand Master”.
- Änderung: «his» → «the»; «real» → «genuine»; «merely» → «only»; «disguises» → «covers»
<!-- daten: {"art":"gegnertext","name":"Hieronymus Falkenrath"} -->

#### AD-en-A862876 · „11 The Enlightened“ › „Relationship to O.D.I.N.“ · Band S. 60 · prüfen
Freigabe: offen

- alt: Who at O.D.I.N. deals with them: The Operations Branch, more precisely the Print Shop in Zurich. Georg Wendlinger is the legend writer in charge. The cell’s handler received the file “The Second Light” from an Observer in Brussels who intercepted the missing persons reports.
- neu: Who at O.D.I.N. deals with them: The Operations Branch, more precisely the Print Shop in Zurich. Georg Wendlinger is the responsible legend writer. The cell’s handler received the file “The Second Light” from an Observer in Brussels who intercepted the missing persons reports.
- Änderung: «(nichts)» → «responsible»; «writer in charge.» → «writer.»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A6939d9 · „11 The Enlightened“ › „The Plan: “The Second Light”“ · Band S. 60 · sicher
Freigabe: offen

- alt: ☠○○○○ Maarten buys a crystal online and paints the first circle in his cellar. Trail: A postman notices the smell of ash in the stairwell.
- neu: ☠○○○○ Maarten buys a crystal online and paints the first circle in his cellar. Sign: A postman notices the smell of ash in the stairwell.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","The Plan: “The Second Light”"]],"absatz":true} -->

#### AD-en-A8043dd · „11 The Enlightened“ › „The Plan: “The Second Light”“ · Band S. 60 · sicher
Freigabe: offen

- alt: ☠☠☠○○ Maarten repaints the circle every night. The circle stays warm. He waits for the “Second Light”. Trail: The neighbour hears singing from the cellar at night. A forum member posts that Maarten is “enlightened”.
- neu: ☠☠☠○○ Maarten repaints the circle every night. The circle stays warm. He waits for the “Second Light”. Sign: The neighbour hears singing from the cellar at night. A forum member posts that Maarten is “enlightened”.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","The Plan: “The Second Light”"]],"absatz":true} -->

#### AD-en-Ace7bd6 · „11 The Enlightened“ › „The Plan: “The Second Light”“ · Band S. 60 · sicher
Freigabe: offen

- alt: ☠☠☠☠☠ The Second Light happens. The circle opens. Something steps through. Maarten becomes a gate. Sign: The street in Anderlecht lies in silence that night. All clocks within 100 metres stop. Black File.
- neu: ☠☠☠☠☠ The Second Light happens. The circle opens. Something steps through. Maarten becomes the gate. Sign: The street in Anderlecht lies in silence that night. All clocks within 100 metres stop. Black File.
- Änderung: «a» → «the»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","The Plan: “The Second Light”"]],"absatz":true} -->

#### AD-en-A6a8e5f · „11 The Enlightened“ › „Hooks and Outlook“ · Band S. 61 · sicher
Freigabe: offen

- alt: The Second Light has happened. The circle in Anderlecht has opened, and something has stepped through. Maarten de Vries is no longer human, but a door. The street is evacuated, the Belgian police speak of a gas leak. O.D.I.N. has sealed the cellar, but the hum has not fallen silent. It wanders.
- neu: The Second Light has happened. The circle in Anderlecht has opened, and something has stepped through. Maarten de Vries is no longer human, but a door. The street is evacuated, the Belgian police speak of a gas leak. O.D.I.N. has sealed the cellar, but the hum has not fallen silent. It is moving.
- Änderung: «wanders.» → «is moving.»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Ab2b42b · „11 The Enlightened“ › „Hooks and Outlook“ · Band S. 61 · sicher
Freigabe: offen

- alt: The next plan: “The Hundred Rings” ○○○○○ . The copies of the signet ring with the eye, which the Print Shop had made in 1968, begin to work. Whoever wears a ring hears the Voice. The Enlightened are looking for the rings.
- neu: The next plan: “The Hundred Rings” ○○○○○ . The copies of the signet ring with the eye, which the Print Shop had made in 1968, begin to work. Whoever wears a ring hears the Voice. The Enlightened are searching for the rings.
- Änderung: «looking» → «searching»
<!-- daten: {"art":"satz","fundstellen":[["11 The Enlightened","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Aaea1c2 · „12 The Congregation of the Silent Word“ › „Overview“ · Band S. 61 · sicher
Freigabe: offen

- alt: Monsignore Emilio Vasari, Prefect of the Congregation
- neu: Monsignor Emilio Vasari, Prefect of the Congregation
- Änderung: «Monsignore» → «Monsignor»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Overview"]],"absatz":true} -->

#### AD-en-A0f3926 · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · prüfen
Freigabe: offen

- alt: 1948 the Congregation hears for the first time of a registry in Stockholm that collects what it itself collects, and then acts. It watches from a distance. The Prefect notes: “They act where we do not act. God have mercy on them.”
- neu: 1948 the Congregation hears for the first time of a registry in Stockholm that collects what it itself collects, and then acts. It observes from afar. The Prefect notes: “They act where we do not act. God have mercy on them.”
- Änderung: «watches» → «observes»; «a distance.» → «afar.»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]],"absatz":true} -->

#### AD-en-A56a90a · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · prüfen
Freigabe: offen

- alt: 1961 a layman from Franconia brings the mirror from Bamberg to the archive, bought in an antiquarian bookshop, because it showed more than a face. Since then the mirror has lain in a lead box (Game Master’s Book, Artefacts).
- neu: 1961 a layman from Franconia brings the mirror from Bamberg to the archive, bought in an antiquarian bookshop, because it showed more than a face. The mirror has lain since then in a lead box (Game Master’s Book, Artefacts).
- Änderung: «Since then the» → «The»; «(nichts)» → «since then»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]],"absatz":true} -->

#### AD-en-A95dcc9 · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · sicher
Freigabe: offen

- alt: In 1971 , after the Cascade, the Prefect writes a letter to the Council of O.D.I.N. He offers the archive if O.D.I.N. protects a child that the Congregation cannot protect. The letter goes unanswered.
- neu: 1971 , after the Cascade, the Prefect writes a letter to the Council of O.D.I.N. He offers the archive if O.D.I.N. protects a child that the Congregation cannot protect. The letter remains unanswered.
- Änderung: «In» → «(gestrichen)»; «goes» → «remains»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]],"absatz":true} -->

#### AD-en-A93e36d · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · sicher
Freigabe: offen

- alt: After 2011 two priests of the Congregation hear confessions from members of the Hands. They learn of the children who are taken, of the helmets, of the opening. They keep silent, because the seal of confession applies. One of the two writes the prefect a letter asking whether silence is still right when it does not protect the children. The letter remains unanswered.
- neu: After 2011 two priests of the Congregation hear confessions from members of the Hands. They learn of the children who are taken, of the helmets, of the opening. They remain silent, for the seal of confession applies. One of the two writes the prefect a letter asking whether silence is still right when it does not protect the children. The letter remains unanswered.
- Änderung: «keep» → «remain»; «because» → «for»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]],"absatz":true} -->

#### AD-en-Acec06d · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · prüfen
Freigabe: offen

- alt: In 2026 Don Matteo Riva, a member for two years, has learned of the confessions. He wants to make them public. The Prefect wants to stop him. O.D.I.N. wants to stop him too, for other reasons.
- neu: 2026 Don Matteo Riva, a member for two years, has learned of the confessions. He wants to make them public. The Prefect wants to stop him. O.D.I.N. also wants to stop him, for other reasons.
- Änderung: «In» → «(gestrichen)»; «(nichts)» → «also»; «him too,» → «him,»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]],"absatz":true} -->

#### AD-en-Ad36c20 · „12 The Congregation of the Silent Word“ › „History and Goals“ · Band S. 62 · sicher
Freigabe: offen

- alt: It believes itself to be in the right, because it places the seal of confession above every necessity. It knows that this silence has a price. It has been paying it since 1872. Don Matteo no longer wants to pay it, and so this year’s plan is not a plan of the Congregation, but one against it: it wants to prevent what one of its own intends.
- neu: It believes itself to be in the right, because it places the seal of confession above every necessity. It knows that this silence has a price. It has paid it since 1872. Don Matteo no longer wants to pay it, and so this year’s plan is not a plan of the Congregation, but one against it: it wants to prevent what one of its own intends.
- Änderung: «been paying» → «paid»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","History and Goals"]],"absatz":true} -->

#### AD-en-Ab7308a · Gegner „Monsignore Emilio Vasari“, Beschreibung · Band S. 62 · prüfen
Freigabe: offen

- alt: 68 years old, slight, white hair, glasses that he takes off and polishes when he is thinking. He has led the Congregation since 2009 and has reorganised the archive. He knows every report and gives only what one has earned. He found his predecessor’s unanswered letter of 1971 and has wondered ever since whether the Congregation’s silence is not also cowardice. He speaks slowly and weighs every word.
- neu: 68 years old, slim, white hair, glasses that he takes off and polishes when he thinks. He has led the Congregation since 2009 and reorganised the archive. He knows every report and gives only what one has earned. He found his predecessor’s unanswered letter from 1971 and has wondered ever since whether the Congregation’s silence is not also cowardice. He speaks slowly and weighs every word.
- Änderung: «slight,» → «slim,»; «is thinking.» → «thinks.»; «has» → «(gestrichen)»; «of» → «from»
<!-- daten: {"art":"gegnertext","name":"Monsignore Emilio Vasari"} -->

#### AD-en-Ae0cee4 · „12 The Congregation of the Silent Word“ › „Key Figures“ · Band S. 63 · sicher
Freigabe: offen

- alt: Behaviour Waits, tests, remains silent. Talks only to someone who brings him proof that they deserve it
- neu: Behaviour Waits, tests, remains silent. Speaks only to someone who brings him proof that they deserve it
- Änderung: «Talks» → «Speaks»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Key Figures"]],"absatz":true} -->

#### AD-en-A53127a · „12 The Congregation of the Silent Word“ › „Key Figures“ · Band S. 63 · sicher
Freigabe: offen

- alt: Behaviour Pushes, talks, seeks allies. Flees when he believes that O.D.I.N. is coming for him
- neu: Behaviour Pushes, talks, seeks allies. Flees if he believes O.D.I.N. is coming for him
- Änderung: «when» → «if»; «that» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Key Figures"]],"absatz":true} -->

#### AD-en-A2ce896 · „12 The Congregation of the Silent Word“ › „Key Figures“ · Band S. 63 · sicher
Freigabe: offen

- alt: Layman and archivist · Humans
- neu: Lay Brother and archivist · Humans
- Änderung: «Layman» → «Lay Brother»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Key Figures"]],"absatz":true} -->

#### AD-en-A67a3c7 · „12 The Congregation of the Silent Word“ › „Key Figures“ · Band S. 63 · sicher
Freigabe: offen

- alt: 51 years old, broad, quiet, grey beard, hands that smell of paper. He logs every report that arrives and has never read one that was not meant for him, except one: a report about his own village, which he put aside without reporting it. He protects the archive with his body if he has to.
- neu: 51 years old, broad, quiet, grey beard, hands that smell of paper. He logs every report that arrives and has never read one that was not meant for him, except one: a report about his own village, which he put aside without reporting it. He protects the archive with his body if he must.
- Änderung: «has to.» → «must.»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Key Figures"]],"absatz":true} -->

#### AD-en-Ae62a8f · „12 The Congregation of the Silent Word“ › „Key Figures“ · Band S. 63 · prüfen
Freigabe: offen

- alt: The exorcist of the Congregation, one of the Twelve, appears where the dead do not rest or children sing. He is not a key figure in this plan, but he can be at the scene at any time, ahead of the cell. Stats: Exorcist of the Congregation (Threat Atlas).
- neu: The exorcist of the Congregation, one of the Twelve, appears where the dead do not rest or children sing. He is not a leader in this plan, but he can be at the scene at any time, before the cell. Stats: Exorcist of the Congregation (Threat Atlas).
- Änderung: «key figure» → «leader»; «ahead of» → «before»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Key Figures"]],"absatz":true} -->

#### AD-en-Af22676 · Gegner „Brother Ludovico“, Beschreibung · Band S. 63 · sicher
Freigabe: offen

- alt: Layman and archivist · Humans
- neu: Lay Brother and archivist · Humans
- Änderung: «Layman» → «Lay Brother»
<!-- daten: {"art":"gegnertext","name":"Brother Ludovico"} -->

#### AD-en-A2d56f3 · Gegner „Brother Ludovico“, Beschreibung · Band S. 63 · sicher
Freigabe: offen

- alt: 51 years old, broad, quiet, grey beard, hands that smell of paper. He enters every report that arrives and has never read one that was not meant for him, except for one: a report about his own village, which he put aside without reporting it. He protects the archive with his body if he has to.
- neu: 51 years old, broad, quiet, grey beard, hands that smell of paper. He logs every report that arrives and has never read one that was not meant for him, except one: a report about his own village, which he put aside without reporting it. He protects the archive with his body if he has to.
- Änderung: «enters» → «logs»; «for» → «(gestrichen)»
<!-- daten: {"art":"gegnertext","name":"Brother Ludovico"} -->

#### AD-en-Ac42469 · Gegner „Don Matteo Riva“, Beschreibung · Band S. 63 · prüfen
Freigabe: offen

- alt: 34 years old, dark eyes, a narrow face that has not seen sleep for weeks. He believes that the Church must not keep silent when children disappear. His secret: his little brother Paolo disappeared in 2019 from a care home near Lyon, nine years old, and Don Matteo believes that the Hands took him. He speaks quickly, with an urgency that borders on desperation. He is no fighter, but he is ready to risk everything.
- neu: 34 years old, dark eyes, a narrow face that has not seen sleep for weeks. He believes the Church must not remain silent when children disappear. His secret: his little brother Paolo disappeared in 2019 from a care home near Lyon, aged nine, and Don Matteo believes the Hands took him. He speaks quickly, with an urgency bordering on desperation. He is no fighter, but he is ready to risk everything.
- Änderung: «that» → «(gestrichen)»; «keep» → «remain»; «nine years old,» → «aged nine,»; «that» → «(gestrichen)»; «that borders» → «bordering»
<!-- daten: {"art":"gegnertext","name":"Don Matteo Riva"} -->

#### AD-en-A1493b7 · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 64 · sicher
Freigabe: offen

- alt: ○○○○○ Don Matteo knows about the confessions but has no plan yet. He prays and seeks counsel. Trail: None. Only a priest who sits in the confessional in Santa Maria del Silenzio longer than usual.
- neu: ○○○○○ Don Matteo knows about the confessions but has no plan yet. He prays and seeks counsel. Sign: None. Only a priest who sits in the confessional in Santa Maria del Silenzio longer than usual.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]],"absatz":true} -->

#### AD-en-A348668 · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 64 · prüfen
Freigabe: offen

- alt: ☠○○○○ Don Matteo talks to a journalist of the “Corriere del Tevere” without naming names. A Cryptanalyst stumbles across the journalist’s notebook: circles, years, the word “Hands”.
- neu: ☠○○○○ Don Matteo speaks with a journalist from the “Corriere del Tevere” without naming names. Sign: A Cryptanalyst stumbles across the journalist’s notebook: circles, years, the word “Hands”.
- Änderung: «talks to» → «speaks with»; «of» → «from»; «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]],"absatz":true} -->

#### AD-en-A4d8223 · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 64 · prüfen
Freigabe: offen

- alt: ☠☠○○○ Don Matteo writes an article about children who disappear in Europe. He mentions confessions without revealing a word of them. Trail: A Grey File emerges. In a dead drop in Rome lies a copy of the draft that was not intended for O.D.I.N.
- neu: ☠☠○○○ Don Matteo writes an article about children who disappear in Europe. He mentions confessions without revealing a word of them. Sign: A Grey File is opened. In a dead drop in Rome lies a copy of the draft that was not intended for O.D.I.N.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]],"absatz":true} -->

#### AD-en-A275fba · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 64 · sicher
Freigabe: offen

- alt: ☠☠☠○○ The journalist asks questions at the police and in care homes. The Congregation learns of it and puts pressure on Don Matteo. A rumour in the canteen: a priest in Rome is asking about disappeared children. A contact reports that someone in the editorial office is asking about “a place in Switzerland”.
- neu: ☠☠☠○○ The journalist asks questions at the police and in care homes. The Congregation learns of it and puts pressure on Don Matteo. Sign: A rumour in the canteen: a priest in Rome is asking about disappeared children. A contact reports that someone in the editorial office is asking about “a place in Switzerland”.
- Änderung: «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]],"absatz":true} -->

#### AD-en-Ab40ed9 · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 65 · prüfen
Freigabe: offen

- alt: ☠☠☠☠○ Don Matteo gives the Congregation an ultimatum. He threatens to publish the article. Trail: A Red File emerges. The Prefect calls the cell and asks for help, because he cannot stop Don Matteo without breaking the seal of confession.
- neu: ☠☠☠☠○ Don Matteo gives the Congregation an ultimatum. He threatens to publish the article. Sign: A Red File is opened. The Prefect calls the cell and asks for help, because he cannot stop Don Matteo without breaking the seal of confession.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]],"absatz":true} -->

#### AD-en-Ae6adfe · „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“ · Band S. 65 · prüfen
Freigabe: offen

- alt: ☠☠☠☠☠ An article about children who disappear in Europe appears in an Italian newspaper. The Print Shop has one week to write a counter-legend. Trail: The Council takes over with a Black File. On the handler’s desk lies the newspaper, the journalist’s name circled in red.
- neu: ☠☠☠☠☠ An article about children who disappear in Europe appears in an Italian newspaper. The Print Shop has one week to write a cover story. Sign: The Council takes over with a Black File. On the handler’s desk lies the newspaper, the journalist’s name circled in red.
- Änderung: «counter-legend. Trail:» → «cover story. Sign:»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","The Plan: “Preserve the Silence”"]],"absatz":true} -->

#### AD-en-Ac705e6 · „12 The Congregation of the Silent Word“ › „Hooks and Outlook“ · Band S. 65 · prüfen
Freigabe: offen

- alt: Grey File “The Journalist”. An editor of the “Corriere del Tevere” asked in a bar in Trastevere about children who disappear from care homes. His notebook contains circles. The sign leads to Don Matteo and to an archive that should not exist.
- neu: Grey File “The Journalist”. An editor of the “Corriere del Tevere” asked in a bar in Trastevere about children who disappear from care homes. In his notebook are circles. The sign leads to Don Matteo and to an archive that should not exist.
- Änderung: «His» → «In his»; «contains» → «are»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A983e37 · „12 The Congregation of the Silent Word“ › „Hooks and Outlook“ · Band S. 65 · sicher
Freigabe: offen

- alt: The article has appeared, and for a week people across Europe ask about missing children. The Print Shop turns the story into an affair about a home near Lyon and a priest with a tragic family history, but it remains in the forums. Don Matteo has gone into hiding. Monsignor Vasari resigns, and the Congregation elects a prefect who wants to restore the silence. The two confessors are in danger for the first time, because now someone knows that they exist.
- neu: The article has appeared, and for a week people across Europe ask about missing children. The Print Shop turns the story into an affair about a home near Lyon and a priest with a tragic family history, but it remains in the forums. Don Matteo has gone underground. Monsignor Vasari resigns, and the Congregation elects a prefect who wants to restore the silence. The two confessors are in danger for the first time, because now someone knows that they exist.
- Änderung: «into hiding.» → «underground.»
<!-- daten: {"art":"satz","fundstellen":[["12 The Congregation of the Silent Word","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A47062c · „13 The Open Ones“ › „Overview“ · Band S. 67 · sicher
Freigabe: offen

- alt: The Open Ones are psions who have taken off their helmets and will never put them on again. They consider the Opening a crime, foster families prisons with curtains, and O.D.I.N. an organisation that sacrifices children and calls it protection. They are few, they are old or very young, and they know more about the Choir, the Hands and the Nursery than most agents who work there. For the game master, they are the opponent who is right about one thing. Perhaps about two.
- neu: The Open Ones are psions who have taken off their helmets and will never put them on again. They consider the Opening a crime, foster families prisons with curtains, and O.D.I.N. an organisation that sacrifices children and calls it protection. They are few, they are old or very young, and they know more about the Choir, the Hands and the Nursery than most agents who work there. For the game master, they are the opponent who is right about one thing. Perhaps two.
- Änderung: «about» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Overview"]],"absatz":true} -->

#### AD-en-Ae469d1 · „13 The Open Ones“ › „Overview“ · Band S. 67 · sicher
Freigabe: offen

- alt: “It heard us. And now it knows where we are.”
- neu: “It belonged to us. And now it knows where we are.”
- Änderung: «heard» → «belonged to»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Overview"]],"absatz":true} -->

#### AD-en-A3b5654 · „13 The Open Ones“ › „Overview“ · Band S. 68 · prüfen
Freigabe: offen

- alt: Type Renegade psions, along with couriers and rescued children who are adults today
- neu: Type Renegade Psions, plus couriers and rescued children who are now adults
- Änderung: «psions, along with» → «Psions, plus»; «(nichts)» → «now»; «today» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Overview"]],"absatz":true} -->

#### AD-en-A6df9bf · „13 The Open Ones“ › „History and Goals“ · Band S. 68 · sicher
Freigabe: offen

- alt: In 1974 Kantor disappears. In the same year the Tactical Branch founds the Echo operatives, a unit against renegade psions. In an abandoned monastery in the Carpathians Kantor gathers the first psions who want to take off their helmets. They call themselves the Open Ones.
- neu: 1974 Kantor disappears. In the same year the Tactical Branch founds the Echo operatives, a unit against renegade psions. In an abandoned monastery in the Carpathians Kantor gathers the first psions who want to take off their helmets. They call themselves the Open Ones.
- Änderung: «In» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","History and Goals"]],"absatz":true} -->

#### AD-en-A60d4ee · „13 The Open Ones“ › „History and Goals“ · Band S. 68 · sicher
Freigabe: offen

- alt: In 2011 the Seeker Muezzin dies, and the new Seeker hears more children than all before her. The number of Psions triples, the Hands fetch more children than ever before, and the 1989 list grows old. Kantor needs a new way to find the children, and he finds it: he hears them himself.
- neu: 2011 the Seeker Muezzin dies, and the new Seeker hears more children than all before her. The number of Psions triples, the Hands fetch more children than ever before, and the 1989 list grows old. Kantor needs a new way to find the children, and he finds it: he hears them himself.
- Änderung: «In» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","History and Goals"]],"absatz":true} -->

#### AD-en-A96e119 · „13 The Open Ones“ › „History and Goals“ · Band S. 68 · sicher
Freigabe: offen

- alt: What only the game master knows: Kantor did not choose the site of the Cascade himself. The numbers station showed it to him, a hall above the third tunnel of the Chamber, and in the weeks before, he wrote letters to a house without a number in Stockholm (Game Master’s Book, The Truth). He believes it was a woman on the radio, Agnes, and that she spoke for Märta. Who really stood behind the numbers, he does not know. On the night of the Cascade, Märta, the first Seeker, died. Kantor believes that she did not die but went over, and that she has been waiting ever since. He believes he understands the Thirteenth. He has never spoken with her. He has only listened, for fifty-five years, and what he has heard he takes for a choir from which half its voices have been taken.
- neu: What only the game master knows: Kantor did not choose the site of the Cascade himself. The numbers station showed it to him, a hall above the third tunnel of the Chamber, and in the weeks before, he wrote letters to a house without a number in Stockholm (Game Master’s Book, The Truth). He believes it was a woman on the radio, Agnes, and that she spoke for Märta. Who really stood behind the numbers, he does not know. On the night of the Cascade, Märta, the first Seeker, died. Kantor believes that she did not die but went over, and that she has been waiting ever since. He believes he understands the Thirteenth. He has never spoken to her. He has only listened, for fifty-five years, and what he has heard he takes for a choir from which half its voices have been taken.
- Änderung: «with» → «to»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","History and Goals"]],"absatz":true} -->

#### AD-en-Ad7fe1c · „13 The Open Ones“ › „History and Goals“ · Band S. 68 · sicher
Freigabe: offen

- alt: Kantor wants more than that. He wants to bring the children he has fetched and the Psions who have followed him together in a choir of their own, without helmets, without an Opening, without Observers. He believes that such a choir does not call the Thirteenth but answers her, and that an answer is something other than a rift. He is right about one thing: the Opening is a crime. Whether he is right on the second, no one knows, and the Open Ones are ready to find out.
- neu: Kantor wants more than that. He wants to bring the children he has fetched and the Psions who have followed him together in a choir of their own, without helmets, without an Opening, without Observers. He believes that such a choir does not call the Thirteenth but answers her, and that an answer is something other than a rift. He is right on one point: the Opening is a crime. Whether he is right on the second, no one knows, and the Open Ones are ready to find out.
- Änderung: «about» → «on»; «thing:» → «point:»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","History and Goals"]],"absatz":true} -->

#### AD-en-Addef2c · „13 The Open Ones“ › „History and Goals“ · Band S. 69 · sicher
Freigabe: offen

- alt: They believe they are in the right because they are the only ones who ask the children. No child the Open Ones fetch goes against their will. That, at least, is what they say. Most of the children are eight, nine, ten years old, and they want the hum to stop.
- neu: They believe they are in the right because they are the only ones who ask the children. No child the Open Ones fetch goes against their will. At least, that is what they say. Most of the children are eight, nine, ten years old, and they want the hum to stop.
- Änderung: «That, at» → «At»; «(nichts)» → «that»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","History and Goals"]],"absatz":true} -->

#### AD-en-A5008cc · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · prüfen
Freigabe: offen

- alt: Eighty-seven years old, thin, in a wheelchair, white hair down to his shoulders, eyes that do not look at anyone for long because they hear something else. He was Ilse Marek’s successor and the man who caused the Cascade. He speaks quietly, kindly, in long sentences, as if he had time that others no longer have. He explains, he offers, he asks for the name a psion bore before the Opening. His secret: He believes that Märta lives, on the other side, and that she is the voice he has heard every night since 1971. He wants to answer her before he dies.
- neu: Eighty-seven years old, thin, in a wheelchair, white hair down to his shoulders, eyes that do not look at anyone for long because they hear something else. He was the successor of Ilse Marek and the man who caused the Cascade. He speaks quietly, kindly, in long sentences, as if he had time that others no longer have. He explains, he offers, he asks for the name a psion bore before the Opening. His secret: He believes that Märta lives, on the other side, and that she is the voice he has heard every night since 1971. He wants to answer her before he dies.
- Änderung: «(nichts)» → «the successor of»; «Marek’s successor» → «Marek»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]],"absatz":true} -->

#### AD-en-Af90947 · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · sicher
Freigabe: offen

- alt: Psi 5 + 5, 18 PSI points, no focus device, overload node Without Net
- neu: Psi 5 + 5, 18 PSI points, no focus device, overload node Without a Net
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]],"absatz":true} -->

#### AD-en-A7406fd · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · sicher
Freigabe: offen

- alt: Behaviour Talks, explains, waits. Uses his powers only when he has no choice, and then with full force. Does not flee; the Open Ones carry him
- neu: Behaviour Talks, explains, waits. Acts only when he has no choice, and then with full force. Does not flee; the Open Ones carry him
- Änderung: «Uses his powers» → «Acts»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]],"absatz":true} -->

#### AD-en-Abd9f23 · „13 The Open Ones“ › „Key Figures“ · Band S. 69 · prüfen
Freigabe: offen

- alt: Special Recognises every psion of the cell by their humming, even with a helmet, once she has heard them without one
- neu: Special Recognises every Psion in the cell by their hum, even with a helmet, if she has heard them once without one
- Änderung: «psion of» → «Psion in»; «humming,» → «hum,»; «once» → «if»; «(nichts)» → «once»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Key Figures"]],"absatz":true} -->

#### AD-en-A3fc36d · Gegner „Kantor“, Beschreibung · Band S. 69 · prüfen
Freigabe: offen

- alt: Eighty-seven years old, thin, in a wheelchair, white hair down to his shoulders, eyes that look at no one for long because they are hearing something else. He was Ilse Marek’s successor and the man who caused the Cascade. He speaks quietly, kindly, in long sentences, as if he had time that others no longer have. He explains, he offers, he asks for the name a psion bore before the Opening. His secret: he believes that Märta is alive, on the other side, and that she is the voice he has heard every night since 1971. He wants to answer her before he dies.
- neu: Eighty-seven years old, thin, in a wheelchair, white hair down to his shoulders, eyes that do not look at anyone for long because they hear something else. He was the successor of Ilse Marek and the man who caused the Cascade. He speaks quietly, kindly, in long sentences, as if he had time that others no longer have. He explains, he offers, he asks for the name a psion bore before the Opening. His secret: he believes that Märta is alive, on the other side, and that she is the voice he has heard every night since 1971. He wants to answer her before he dies.
- Änderung: «(nichts)» → «do not»; «no one» → «anyone»; «are hearing» → «hear»; «(nichts)» → «the successor of»; «Marek’s successor» → «Marek»
<!-- daten: {"art":"gegnertext","name":"Kantor"} -->

#### AD-en-Af3b263 · „13 The Open Ones“ › „Bases and Means“ · Band S. 70 · sicher
Freigabe: offen

- alt: The monastery of Sfântul Ioan stands on a rocky ledge above a valley in the Eastern Carpathians, three storeys of stone, a bell tower without a bell. An old forest road leads up, impassable in winter, plus a footpath through the beech wood. Twelve Open Ones and up to twenty children live in the monastery. The chapel is a dormitory, the refectory a classroom, in the cellar lie supplies for a winter. In Kantor’s room, on the windowsill, stands a photograph from 1952 showing a little girl in Leipzig. A Psion without a helmet hears the monastery from a kilometre away, as if standing before a beehive. Anyone approaching is heard before they are seen: Stealth does not help here, only a helmet or a Mental Barrier.
- neu: The monastery Sfântul Ioan stands on a rocky outcrop above a valley in the Eastern Carpathians, three storeys of stone, a bell tower without a bell. An old forest road leads up, impassable in winter, plus a footpath through the beech wood. Twelve Open Ones and up to twenty children live in the monastery. The chapel is a dormitory, the refectory a classroom, in the cellar lie supplies for a winter. In Kantor’s room, on the windowsill, stands a photograph from 1952 showing a little girl in Leipzig. A Psion without a helmet hears the monastery from a kilometre away, as if standing before a beehive. Anyone approaching is heard before they are seen: Stealth does not help here, only a helmet or a Mental Barrier.
- Änderung: «of» → «(gestrichen)»; «ledge» → «outcrop»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Bases and Means"]],"absatz":true} -->

#### AD-en-A340563 · „13 The Open Ones“ › „Bases and Means“ · Band S. 70 · sicher
Freigabe: offen

- alt: The mill in the Vosges lies by a stream, two hours from Strasbourg, without a mill wheel for thirty years. Children taken from foster families in France, Belgium or Germany stay here for a few days until the way east is clear. A large room with mattresses, a kitchen, a cellar with a Nexus crystal in lead. The crystal hums quietly. The children sleep well near it, and no one knows why.
- neu: The mill in the Vosges lies by a stream, two hours from Strasbourg, without a mill wheel for thirty years. Children taken from foster families in France, Belgium or Germany stay here for a few days until the way east is clear. One large room with mattresses, a kitchen, a cellar with a Nexus crystal in lead. The crystal hums quietly. The children sleep well near it, and no one knows why.
- Änderung: «A» → «One»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Bases and Means"]],"absatz":true} -->

#### AD-en-Abe6c97 · „13 The Open Ones“ › „Relationship to O.D.I.N.“ · Band S. 70 · sicher
Freigabe: offen

- alt: Who at O.D.I.N. deals with them: The Psionic Core, which fears them, and the Echo operatives, who hunt them. The Observers, who warn their psions about them and sometimes do not know themselves what about. The Hands, whose children disappear. The Council, which considers Kantor the most dangerous living enemy because he alone knows what the Choir is.
- neu: Who at O.D.I.N. deals with them: The Psionic Core, which fears them, and the Echo operatives, who hunt them. The Observers, who warn their psions about them and sometimes do not know themselves what from. The Hands, whose children disappear. The Council, which considers Kantor the most dangerous living enemy because he alone knows what the Choir is.
- Änderung: «about.» → «from.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A24ae67 · „13 The Open Ones“ › „Relationship to O.D.I.N.“ · Band S. 70 · sicher
Freigabe: offen

- alt: What O.D.I.N. knows: That Kantor lives and leads the Open Ones. That they take children from foster families. Where their monastery lies, since 1976. The Council tolerates it, because an enemy whose address one knows is easier to observe than one without. Most agents do not know where the Open Ones get the names; they believe the legend of the sale.
- neu: What O.D.I.N. knows: That Kantor lives and leads the Open Ones. That they fetch children from foster families. Where their monastery lies, since 1976. The Council tolerates it, because an enemy whose address one knows is easier to observe than one without. Most agents do not know where the Open Ones get the names; they believe the legend of the sale.
- Änderung: «take» → «fetch»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-Aca3fba · „13 The Open Ones“ › „Relationship to O.D.I.N.“ · Band S. 70 · sicher
Freigabe: offen

- alt: One’s own name. The Open Ones offer to tell a Psion of the cell what they were called before the Opening, who their parents are and whether they are still alive. The answer lies on the list, and the Open Ones have it.
- neu: Their own name. The Open Ones offer to tell a Psion of the cell what they were called before the Opening, who their parents are and whether they are still alive. The answer lies on the list, and the Open Ones have it.
- Änderung: «One’s» → «Their»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A395f67 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 70 · prüfen
Freigabe: offen

- alt: Kantor wants to sing once more, and for that he needs voices that have never worn a helmet or have taken it off of their own free will. The Open Ones are taking more children than in the thirty years before, and they no longer take them only through the 1989 list but wherever Kantor hears them. The cell notices it in foster families who call a number instead of the police, in a man in a grey coat on a platform, and in a humming that a Psion of the cell has in their ear at night and does not recognise.
- neu: Kantor wants to sing once more, and for that he needs voices that have never worn a helmet or have given it up willingly. The Open Ones take more children than in the thirty years before, and they no longer take them only from the 1989 list but wherever Kantor hears them. The cell notices it in foster families who call a number instead of the police, in a man in a grey coat on a platform, and in a humming that a Psion of the cell has in their ear at night and does not recognise.
- Änderung: «taken» → «given»; «off of their own free will.» → «up willingly.»; «are taking» → «take»; «through» → «from»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A4ef0a8 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · sicher
Freigabe: offen

- alt: ☠○○○○ Kantor hears the children himself. Couriers take the first ones who are not on the list from foster families in Romania and Hungary. A missing person case in a local newspaper, never solved. The foster parents did not report the child missing.
- neu: ☠○○○○ Kantor hears the children himself. Couriers take the first ones who are not on the list from foster families in Romania and Hungary. Sign: A missing person case in a local newspaper, never solved. The foster parents did not report the child missing.
- Änderung: «(nichts)» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A63dbf4 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · prüfen
Freigabe: offen

- alt: ☠☠○○○ The network is in place: the mill in the Vosges, the house in Altona, the locker in Zurich. Jonas Vogt observes a child in Hamburg who hums at night. Trail: A Grey File emerges. A surveillance camera shows a man in a grey coat holding a photo of a child.
- neu: ☠☠○○○ The network is in place: the mill in the Vosges, the house in Altona, the locker in Zurich. Jonas Vogt observes a child in Hamburg who hums at night. Sign: A Grey File is opened. A surveillance camera shows a man in a grey coat holding a photo of a child.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A1abac9 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · prüfen
Freigabe: offen

- alt: ☠☠☠☠○ Kantor calls the Open Ones from all over Europe back to the monastery. Twelve children sing every evening without a helmet, and Kantor waits for the last voices. Trail: A Red File emerges. The Seeker does not sleep for two nights and hears “a choir that is not ours”.
- neu: ☠☠☠☠○ Kantor calls the Open Ones from all over Europe back to the monastery. Twelve children sing every evening without a helmet, and Kantor waits for the last voices. Sign: A Red File is opened. The Seeker does not sleep for two nights and hears “a choir that is not ours”.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A1aa2df · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · prüfen
Freigabe: offen

- alt: ☠☠☠☠☠ The Open Ones have enough children to form their own choir, without helmets. They sing in the monastery of Sfântul Ioan. What answers then, no one knows. Trail: The Council takes over with a Black File. One night, all over Europe, children hum the same melody in their sleep.
- neu: ☠☠☠☠☠ The Open Ones have enough children to form their own choir, without helmets. They sing in the monastery of Sfântul Ioan. What answers then, no one knows. Sign: The Council takes over with a Black File. In one night, children all over Europe hum the same melody in their sleep.
- Änderung: «Trail:» → «Sign:»; «One» → «In one»; «(nichts)» → «children»; «Europe, children» → «Europe»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A00ce86 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · prüfen
Freigabe: offen

- alt: The Key Figure is Kantor. Without him no one sings: Ilinca Dragomir is afraid of what might answer, and the other Open Ones follow her. If Kantor is arrested, convinced, or weakened so much that he can no longer lead the monastery, the plan loses two skulls and does not roll after the next mission. Whoever wants to convince him needs more than words: proof that Märta is not waiting, or proof that she is and that a choir without helmets does not reach her. The cell probably has neither. Whoever takes Kantor by force takes him from a house full of children, and the cell never wins by harming a child. A cell that puts children in danger to get at Kantor does not take the skull away, it gives it to the plan.
- neu: The Key Figure is Kantor. Without him no one sings: Ilinca Dragomir is afraid of what might answer, and the other Open Ones follow her. If Kantor is arrested, convinced, or weakened so much that he can no longer lead the monastery, the plan loses two skulls and does not roll after the next mission. Whoever wants to convince him needs more than words: proof that Märta is not waiting, or proof that she is and that a choir without helmets does not reach her. The cell probably has neither. Whoever takes Kantor by force takes him from a house full of children, and the cell never wins by harming a child. A cell that endangers children to get to Kantor does not lose the skull, but gains it for the plan.
- Änderung: «puts» → «endangers»; «in danger» → «(gestrichen)»; «at» → «to»; «take» → «lose»; «skull away,» → «skull, but gains»; «gives it to» → «for»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-Aa6faa9 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · sicher
Freigabe: offen

- alt: The plan only rises on a 6, because the Open Ones are few. But they know almost everything, and every blow by the cell is answered.
- neu: The plan advances only on a 6, for the Open Ones are few. But they know almost everything, and every blow by the cell is answered.
- Änderung: «(nichts)» → «advances»; «rises» → «(gestrichen)»; «because» → «for»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A985e82 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · sicher
Freigabe: offen

- alt: 1 to 2 The Lure. A Psion of the cell finds in their jacket pocket a note in a fine, old-fashioned handwriting: a first name, a place, and a year. It is their own name, before the Print Shop gave them a new one. There is more if he answers.
- neu: 1 to 2 The Lure. A Psion of the cell finds in their jacket pocket a note in a fine, old-fashioned handwriting: a first name, a place, and a year. It is their own name, before the Print Shop gave them a new one. There is more if they answer.
- Änderung: «he answers.» → «they answer.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A65ccff · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · sicher
Freigabe: offen

- alt: 5 to 6 The Family Moves. A foster family the cell visited or is supposed to protect is gone overnight, with the child and with papers from Elster’s workshop. Whoever wants to find them needs Contacts or Investigation against Very Hard (4).
- neu: 5 to 6 The Family Moves Away. A foster family the cell visited or is supposed to protect is gone overnight, with the child and with papers from Elster’s workshop. Whoever wants to find them needs Contacts or Investigation against Very Hard (4).
- Änderung: «Moves.» → «Moves Away.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-Abd1864 · „13 The Open Ones“ › „The Plan: “Fetch the Children”“ · Band S. 71 · sicher
Freigabe: offen

- alt: At ☠☠☠☠○ : “The chimera” (Morrow Biologics) gains a skull. The Open Ones take a young woman with a dormant gift from the subject register of study MB-7 before she is enrolled, and the corporation accelerates its research in Lyon.
- neu: At ☠☠☠☠○ : “The chimera” (Morrow Biologics) gains a skull. The Open Ones take a young woman with a dormant gift from the subject register of study MB-7 before she is enrolled, and the corporation accelerates research in Lyon.
- Änderung: «its» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","The Plan: “Fetch the Children”"]],"absatz":true} -->

#### AD-en-A8808a6 · „13 The Open Ones“ › „Hooks and Outlook“ · Band S. 71 · sicher
Freigabe: offen

- alt: White File “The Mill”. A forester in the Vosges reports light in a mill that has stood empty for thirty years, and children’s voices by the stream. The Gendarmerie found nothing. The cell is to take a look. The mill is empty, the mattresses are still warm, and in the cellar something hums in a lead box.
- neu: White File “The Mill”. A forester in the Vosges reports light in a mill that has stood empty for thirty years, and children’s voices by the stream. The Gendarmerie found nothing. The cell is to look The mill is empty, the mattresses are still warm, and in the cellar something hums in a lead box.
- Änderung: «take a look.» → «look»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Ab07ec7 · „13 The Open Ones“ › „Hooks and Outlook“ · Band S. 72 · prüfen
Freigabe: offen

- alt: After the Fifth Skull In one night in winter, twelve Open Ones and twenty children sing in the monastery of Sfântul Ioan, without helmets, in a circle on the floor of the old chapel. Kantor sits in the centre. All over Europe, children hum the same melody in their sleep, and the Seeker hears the alien choir louder than ever before. What answers then, no one knows. The game master decides it when the cell stands before it: perhaps nothing answers, and Kantor dies in the morning, an old man who waited too long. Perhaps a voice answers that calls Kantor Märta. Perhaps the Thirteenth answers, and the monastery is empty in the morning.
- neu: After the Fifth Skull In one night in winter, twelve Open Ones and twenty children sing in the monastery of Sfântul Ioan, without helmets, in a circle on the floor of the old chapel. Kantor sits in the centre. All over Europe, children hum the same melody in their sleep, and the Seeker hears the alien choir louder than ever before. No one knows what answers then. The game master decides it when the cell stands before it: perhaps nothing answers, and Kantor dies in the morning, an old man who waited too long. Perhaps a voice answers that calls Kantor Märta. Perhaps the Thirteenth answers, and the monastery is empty in the morning.
- Änderung: «What» → «No one knows what»; «then, no one knows.» → «then.»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A192367 · „13 The Open Ones“ › „Hooks and Outlook“ · Band S. 72 · sicher
Freigabe: offen

- alt: File 1 “Foster Child” takes place while the plan is at ☠☠☠○○ . If the cell saves Linus, the plan loses a skull. If Jonas Vogt escapes with Linus, the plan gains a skull, and Linus is one of the children who sing in the monastery in the evening. If the cell persuades Vogt without a fight, Kantor remembers it: the next lure goes to the psion who spoke with Vogt.
- neu: File 1 “Foster Child” takes place while the plan is at ☠☠☠○○ . If the cell saves Linus, the plan loses a skull. If Jonas Vogt escapes with Linus, the plan gains a skull, and Linus is one of the children who sing in the monastery in the evening. If the cell convinces Vogt without a fight, Kantor remembers it: the next lure goes to the psion who spoke with Vogt.
- Änderung: «persuades» → «convinces»
<!-- daten: {"art":"satz","fundstellen":[["13 The Open Ones","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A2567c3 · „14 The Foundation in Basel“ › „Overview“ · Band S. 72 · prüfen
Freigabe: offen

- alt: “No Nexus crystals, no opening. No opening, no children who go. Tell me what is supposed to be wrong with that.”
- neu: “Without Nexus crystals, no Opening. Without Opening no children who go. Tell me what is supposed to be wrong with that.”
- Änderung: «“No» → «“Without»; «opening. No opening,» → «Opening. Without Opening»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Overview"]],"absatz":true} -->

#### AD-en-A812a82 · „14 The Foundation in Basel“ › „Overview“ · Band S. 73 · sicher
Freigabe: offen

- alt: Type Collectors, disguised as a charitable foundation
- neu: Type Collector, disguised as a charitable foundation
- Änderung: «Collectors,» → «Collector,»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Overview"]],"absatz":true} -->

#### AD-en-Ab48c6e · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · prüfen
Freigabe: offen

- alt: 1969 the Operations Branch fetches a young woman without knowing whom it fetches. She becomes one of the best Spies of the Branch. They call her Elster.
- neu: 1969 the Operations Branch fetches a young woman without knowing whom it fetches. She becomes one of the best Spies of the Branch. She is called Elster.
- Änderung: «They call her» → «She is called»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]],"absatz":true} -->

#### AD-en-Aea9e9d · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · sicher
Freigabe: offen

- alt: In 1987 Elster is transferred to the Nursery as an examiner. There she finds her own file from 1952, with a photo that the Hands took in Leipzig. It is her face.
- neu: 1987 Elster is transferred to the Nursery as an examiner. There she finds her own file from 1952, with a photo that the Hands took in Leipzig. It is her face.
- Änderung: «In» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]],"absatz":true} -->

#### AD-en-Ab2123c · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · sicher
Freigabe: offen

- alt: In 1989 Elster takes the register of the Nursery with her and gives it to Kantor. The Council spreads the legend of the betrayal. Within a year the Open Ones find sixty names on the list. Some die, some defect, some vanish into their legends. Elster goes underground, in the legend that was written for her: Renate Albers.
- neu: 1989 Elster takes the register of the Nursery with her and gives it to Kantor. The Council spreads the legend of the betrayal. Within a year the Open Ones find sixty names on the list. Some die, some defect, some vanish into their legends. Elster goes underground, in the legend that was written for her: Renate Albers.
- Änderung: «In» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]],"absatz":true} -->

#### AD-en-A8e005c · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · sicher
Freigabe: offen

- alt: In 1990 a man who was with the Hands for ten years dies, officially on a mountain pass road in Ticino. He reappears in Basel as Mr Leuenberger and takes over the Foundation. It was once one of the foundations through which O.D.I.N. moved its money. Leuenberger turns it around: from now on it buys crystals so that the Council does not get them.
- neu: 1990 a man who was with the Hands for ten years dies, officially on a mountain pass road in Ticino. He reappears in Basel as Mr Leuenberger and takes over the Foundation. It was once one of the foundations through which O.D.I.N. moved its money. Leuenberger turns it around: from now on it buys crystals so that the Council does not get them.
- Änderung: «In» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]],"absatz":true} -->

#### AD-en-Aa92deb · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · sicher
Freigabe: offen

- alt: From 2021 to 2025 a quiet accountant named Martin Kessler sits in the Foundation. He is Kuckuck, a Spy of O.D.I.N. Elster recognises him after three weeks, lets him work and watches him. In 2025 Kuckuck finds a photo from the summer party in which Elster can be seen, and disappears. The legend Martin Kessler is not buried, but handed on.
- neu: From 2021 to 2025 a quiet accountant named Martin Kessler sits in the Foundation. He is Kuckuck, a Spy of O.D.I.N. Elster recognises him after three weeks, lets him work and watches him. In 2025 Kuckuck finds a photo from the summer party in which Elster can be seen, and disappears. The legend Martin Kessler is not buried, but passed on.
- Änderung: «handed» → «passed»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]],"absatz":true} -->

#### AD-en-Ae52e84 · „14 The Foundation in Basel“ › „History and Goals“ · Band S. 73 · sicher
Freigabe: offen

- alt: It believes itself to be in the right, and it has good reasons. But its plan has a consequence that it does not state: if the Openings stop, the children’s gifts awaken by themselves, uncontrolled and without a helmet. The Foundation knows this. It hopes that the Open Ones find these children before the Thirteenth hears them. It only hopes.
- neu: It believes itself to be in the right, and it has good reasons. But its plan has a consequence that it does not state: if the Openings stop, the children’s gifts awaken by themselves, uncontrolled and without a helmet. The Foundation knows that. It hopes that the Open Ones find these children before the Thirteenth hears them. It only hopes.
- Änderung: «this.» → «that.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","History and Goals"]],"absatz":true} -->

#### AD-en-A4b5909 · „14 The Foundation in Basel“ › „Key Figures“ · Band S. 73 · prüfen
Freigabe: offen

- alt: Late sixties, friendly, thorough, a man who loves art and detests crystals. His suits are too expensive for a foundation, and he smiles when he lies. He can still recite the names of the three children he fetched. He knows that Brunner is not Kuckuck, because he observed Kuckuck for four years. He conceals that he has known Elster since 1990. He speaks in complete sentences and never makes a mistake.
- neu: Late sixties, friendly, thorough, a man who loves art and detests crystals. His suits are too expensive for a foundation, and he smiles when he lies. He can recite the names of the three children he fetched to this day. He knows that Brunner is not Kuckuck, because he observed Kuckuck for four years. He conceals that he has known Elster since 1990. He speaks in complete sentences and never makes a mistake.
- Änderung: «still» → «(gestrichen)»; «fetched.» → «fetched to this day.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Key Figures"]],"absatz":true} -->

#### AD-en-A93696b · Gegner „Mr Leuenberger“, Beschreibung · Band S. 73 · prüfen
Freigabe: offen

- alt: Late sixties, friendly, thorough, a man who loves art and detests crystals. His suits are too expensive for a foundation, and he smiles when he lies. He can still recite the names of the three children he fetched. He knows that Brunner is not Kuckuck, because he watched Kuckuck for four years. He conceals that he has known Elster since 1990. He speaks in complete sentences and never makes a mistake.
- neu: Late sixties, friendly, thorough, a man who loves art and detests crystals. His suits are too expensive for a foundation, and he smiles when he lies. He can recite the names of the three children he fetched to this day. He knows that Brunner is not Kuckuck, because he observed Kuckuck for four years. He conceals that he has known Elster since 1990. He speaks in complete sentences and never makes a mistake.
- Änderung: «still» → «(gestrichen)»; «fetched.» → «fetched to this day.»; «watched» → «observed»
<!-- daten: {"art":"gegnertext","name":"Mr Leuenberger"} -->

#### AD-en-Ab7b3f2 · „14 The Foundation in Basel“ › „Key Figures“ · Band S. 74 · prüfen
Freigabe: offen

- alt: Eighty years old, white hair, pearl necklace, a gaze that just misses every camera. She recognises every lie within the first minute and looks everyone in the eye first before she answers. She wants someone from the Branch to see the Nursery with their own eyes. She conceals that she left the photo from the summer party lying there on purpose.
- neu: Eighty years old, white hair, pearl necklace, a gaze that just misses every camera. She recognises every lie within the first minute and looks everyone in the eye first before she answers. She wants someone from the Branch to see the Nursery with their own eyes. She conceals that she deliberately left the photograph from the summer party lying around.
- Änderung: «(nichts)» → «deliberately»; «photo» → «photograph»; «there on purpose.» → «around.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Key Figures"]],"absatz":true} -->

#### AD-en-Ae9d00c · „14 The Foundation in Basel“ › „Key Figures“ · Band S. 74 · sicher
Freigabe: offen

- alt: Hand in the field · Humans
- neu: Hand in Field Service · Humans
- Änderung: «the field» → «Field Service»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Key Figures"]],"absatz":true} -->

#### AD-en-Ac83a5a · „14 The Foundation in Basel“ › „Key Figures“ · Band S. 74 · prüfen
Freigabe: offen

- alt: Sixty-one, slim, grey hair, calm hands. He wears the legend Martin Kessler and the tie with reindeer, because it is part of it. He is to observe Elster until the Council fetches her. He speaks slowly and kindly, as if he had to check every word first. Stats as in File 4 “Kessler” (Grey Files).
- neu: Sixty-one, slim, grey hair, calm hands. He carries the legend Martin Kessler and the reindeer tie because it is part of it. He is to observe Elster until the Council fetches her. He speaks slowly and kindly, as if he had to check every word first. Stats as in File 4 “Kessler” (Grey Files).
- Änderung: «wears» → «carries»; «(nichts)» → «reindeer»; «with reindeer,» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Key Figures"]],"absatz":true} -->

#### AD-en-Acb9bad · „14 The Foundation in Basel“ › „Key Figures“ · Band S. 74 · prüfen
Freigabe: offen

- alt: Forty-seven, plump, short hair, glasses that she pushes up onto her forehead when she smokes. With the Foundation for twelve years. She liked Kessler, the first one, and she wants to know why the second one does not remember Otto, the caretaker’s dog. She still has a key to Kessler’s desk that she never returned. She is not an opponent. She is the witness who notices too much.
- neu: Forty-seven, plump, short hair, glasses that she pushes onto her forehead when smoking. Has been. with the Foundation for twelve years. She liked Kessler, the first one, and she wants to know why the second one does not remember Otto, the caretaker’s dog. She still has a key to Kessler’s desk that she never returned. She is not an opponent. She is the witness who notices too much.
- Änderung: «up» → «(gestrichen)»; «she smokes. With» → «smoking. Has been. with»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Key Figures"]],"absatz":true} -->

#### AD-en-A688573 · Gegner „Renate Albers, called Elster“, Beschreibung · Band S. 74 · prüfen
Freigabe: offen

- alt: Eighty years old, white hair, pearl necklace, a gaze that passes just beside every camera. She recognises every lie in the first minute and looks everyone in the eye before she answers. She wants someone from the Branch to see the Nursery with their own eyes. She conceals that she left the photo from the summer party lying there on purpose.
- neu: Eighty years old, white hair, pearl necklace, a gaze that just misses every camera. She recognises every lie within the first minute and looks everyone in the eye first before she answers. She wants someone from the Branch to see the Nursery with their own eyes. She conceals that she left the photo from the summer party lying there on purpose.
- Änderung: «passes» → «(gestrichen)»; «beside» → «misses»; «in» → «within»; «(nichts)» → «first»
<!-- daten: {"art":"gegnertext","name":"Renate Albers, called Elster"} -->

#### AD-en-Acbe6b5 · „14 The Foundation in Basel“ › „Bases and Means“ · Band S. 75 · prüfen
Freigabe: offen

- alt: Connections: A former Hand in Geneva who buys for the Foundation as an art dealer. The Evening, through which it obtains rare pieces. A Basel bank that asks no questions.
- neu: Connections: A former Hand in Geneva who buys for the Foundation as an art dealer for the Foundation. The Evening, through which it obtains rare pieces. A Basel bank that asks no questions.
- Änderung: «dealer.» → «dealer for the Foundation.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Bases and Means"]],"absatz":true} -->

#### AD-en-A5365ca · „14 The Foundation in Basel“ › „Relationship to O.D.I.N.“ · Band S. 75 · sicher
Freigabe: offen

- alt: Who at O.D.I.N. deals with them: The Council, which wants to get Elster. The Print Shop, whose Typesetter writes the legends of the Foundation. The Hands, who sent Brunner. And Kuckuck, who sat there for four years and has been a Cadet again since then.
- neu: Who at O.D.I.N. deals with them: The Council, which wants to get Elster. The Print Shop, whose Typesetter writes the legends of the Foundation. The Hands, who sent Brunner. And Kuckuck, who sat there for four years and has been a Cadet again since.
- Änderung: «since then.» → «since.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A188a61 · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 75 · prüfen
Freigabe: offen

- alt: ☠○○○○ A new buyer in Geneva works for the Foundation. The purchases get faster, the prices rise. Trail: A Crystal Master in Bern reports that O.D.I.N. was outbid in Geneva.
- neu: ☠○○○○ A new buyer in Geneva works for the Foundation. The purchases become faster, prices rise. Sign: A Crystal Master in Bern reports that O.D.I.N. was outbid in Geneva.
- Änderung: «get» → «become»; «the» → «(gestrichen)»; «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]],"absatz":true} -->

#### AD-en-A98a750 · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 75 · prüfen
Freigabe: offen

- alt: The Foundation seals a Nexus crystal in lead, one the Council needs for the next Opening. Trail: A Grey File emerges. In a dead drop in Basel lies a note: “The stone is in lead. The Council is blind.”
- neu: The Foundation seals a Nexus crystal in lead, one the Council needs for the next Opening. Sign: A Grey File is opened. In a dead drop in Basel lies a note: “The stone is in lead. The Council is blind.”
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]],"absatz":true} -->

#### AD-en-A4bd13c · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 75 · prüfen
Freigabe: offen

- alt: ☠☠☠☠○ The Foundation has almost all Nexus crystals in Europe. Only one remains out of reach, and the Council searches for it desperately. Trail: A Red File emerges. The Seeker reports that she hears more children no one takes.
- neu: ☠☠☠☠○ The Foundation has almost all Nexus crystals in Europe. Only one remains out of reach, and the Council searches for it desperately. Sign: A Red File is opened. The Seeker reports that she hears more children no one takes.
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]],"absatz":true} -->

#### AD-en-A069239 · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 75 · sicher
Freigabe: offen

- alt: ☠☠☠☠☠ The Foundation has bought, stolen or sealed in lead every Nexus crystal in Europe. The Council gets no more, and the openings stop. The children whose gift then awakens on its own do not either. Trail: The Council takes over with a Black File. In a village near Basel, a child sings a song at night that no one knows.
- neu: ☠☠☠☠☠ The Foundation has bought, stolen or sealed in lead every Nexus crystal in Europe. The Council gets no more, and the openings stop. The children whose gift then awakens on its own do not either. Sign: The Council takes over with a Black File. In a village near Basel, a child sings a song at night that no one knows.
- Änderung: «Trail:» → «Sign:»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]],"absatz":true} -->

#### AD-en-A3933f8 · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 76 · sicher
Freigabe: offen

- alt: 1 to 2 The Lure. An envelope in a dead drop, a meeting in a café on the Rhine: a lot of money into an account no one finds. If the cell refuses, the offer comes back when a character is worse off.
- neu: 1 to 2 The Lure. An envelope in a dead drop, a meeting in a café on the Rhine: a lot of money into an account no one finds. If the cell declines, the offer comes again when a character is worse off.
- Änderung: «refuses,» → «declines,»; «back» → «again»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]],"absatz":true} -->

#### AD-en-Aecca23 · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 76 · sicher
Freigabe: offen

- alt: 5 to 6 A witness vanishes. A contact of the cell in Basel, a collector or a bank employee, can no longer be reached. Leuenberger has sent them away with money and a new name. The cell loses the contact until they find them again: Contacts against Hard (3).
- neu: 5 to 6 A witness disappears. A contact of the cell in Basel, a collector or a bank employee, can no longer be reached. Leuenberger has sent them away with money and a new name. The cell loses the contact until they find them again: Contacts against Hard (3).
- Änderung: «vanishes.» → «disappears.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]],"absatz":true} -->

#### AD-en-A7186da · „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“ · Band S. 76 · sicher
Freigabe: offen

- alt: At ☠☠☠☠○ : “The second site” (Department 13) gains a skull. The Department sees O.D.I.N. weakened and speeds up the mining.
- neu: At ☠☠☠☠○ : “The second site” (Department 13) gains a skull. The Department sees O.D.I.N. weakened and accelerates the mining.
- Änderung: «speeds up» → «accelerates»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","The Plan: “No More Nexus Crystals”"]],"absatz":true} -->

#### AD-en-A72ac8d · „14 The Foundation in Basel“ › „Hooks and Outlook“ · Band S. 76 · prüfen
Freigabe: offen

- alt: Red File “The Lead Archive”. The art dealer from Geneva has been detained at the border with a crystal in his luggage and is silent. The cell is to find the lead archive in Basel and secure the crystals before the Hands do. The Hands go about it less carefully.
- neu: Red File “The Lead Archive”. The art dealer from Geneva has been detained at the border with a crystal in his luggage and is silent. The cell is to find the lead archive in Basel and secure the crystals before the Hands do. The Hands proceed less cautiously.
- Änderung: «go about it» → «proceed»; «carefully.» → «cautiously.»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A0a2f5e · „14 The Foundation in Basel“ › „Hooks and Outlook“ · Band S. 76 · sicher
Freigabe: offen

- alt: The next plan: “Saving the Children” ○○○○○ . The Foundation wants to find the children whose gift awakens on its own and bring them to the Open Ones before the Thirteenth hears them. It has money, people and connections. It has no Hands and no time.
- neu: The next plan: “Save the Children” ○○○○○ . The Foundation wants to find the children whose gift awakens on its own and bring them to the Open Ones before the Thirteenth hears them. It has money, people and connections. It has no Hands and no time.
- Änderung: «“Saving» → «“Save»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-A09ae9b · „14 The Foundation in Basel“ › „Hooks and Outlook“ · Band S. 76 · sicher
Freigabe: offen

- alt: File 4 “Kessler” takes place in the Foundation while the plan stands at ☠☠○○○ . If the cell secures the Nexus crystal and hands it over to O.D.I.N., the plan loses a skull. If they hand Elster over to the Council, the Open Ones lose a skull, and Leuenberger works without restraint from then on: the Foundation rolls as if it had strength 3. If Elster flees with the Courier of the Open Ones, the plan stays where it is, and the Open Ones have an old woman who knows everything about the Nursery.
- neu: File 4 “Kessler” takes place in the Foundation while the plan is at ☠☠○○○ . If the cell secures the Nexus crystal and hands it over to O.D.I.N., the plan loses a skull. If they hand Elster over to the Council, the Open Ones lose a skull, and Leuenberger works without restraint from then on: the Foundation rolls as if it had strength 3. If Elster flees with the Courier of the Open Ones, the plan stays where it is, and the Open Ones have an old woman who knows everything about the Nursery.
- Änderung: «stands» → «is»
<!-- daten: {"art":"satz","fundstellen":[["14 The Foundation in Basel","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Af05a5e · „15 The Evening“ › „Overview“ · Band S. 77 · sicher
Freigabe: offen

- alt: Seat None. Four times a year a different hotel with a ballroom; a post office box in Vaduz
- neu: Seat None. Four times a year a different hotel with a ballroom; a PO box in Vaduz
- Änderung: «post office» → «PO»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Overview"]],"absatz":true} -->

#### AD-en-Af09e24 · „15 The Evening“ › „History and Goals“ · Band S. 77 · sicher
Freigabe: offen

- alt: 1963 the Evening appears for the first time in a file of the Investigation Branch. An Antiquarian in Vienna reports an invitation card without a sender in the coat pocket of a dead art dealer. The file turns grey and is closed again: the dead man had debts, the perpetrator was a creditor. The card stays in the archive.
- neu: 1963 the Evening appears for the first time in a file of the Investigation Branch. An Antiquarian in Vienna reports an invitation card without a sender in the coat pocket of a dead art dealer. The file turns grey and is closed again: the dead man had debts, the perpetrator was a creditor. The card remains in the archive.
- Änderung: «stays» → «remains»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","History and Goals"]],"absatz":true} -->

#### AD-en-A19780d · Gegner „Helene Marburg“, Beschreibung · Band S. 77 · prüfen
Freigabe: offen

- alt: 58 years old, a severe bun, a dark blue suit that looks like a uniform. She controls invitation lists, cash flows and hotel contracts; without her, no auction takes place. She knows the most important bidders, the accounts in Vaduz and Singapore and the prices of the last twenty years. She knows that O.D.I.N. has people among the staff, but not which ones. Her secret: she was once a bookkeeper at a foundation in Zurich through which O.D.I.N. moved money, and she took files with her when she left. She speaks briefly and matter-of-factly and likes to end sentences with a sum.
- neu: 58 years old, a severe bun, a dark blue suit that looks like a uniform. She controls invitation lists, money flows and hotel contracts; without her, no auction takes place. She knows the most important bidders, the accounts in Vaduz and Singapore and the prices of the last twenty years. She knows that O.D.I.N. has people among the staff, but not which ones. Her secret: she was once an accountant at a foundation in Zurich through which O.D.I.N. moved money, and she took files with her when she left. She speaks briefly and matter-of-factly and likes to end sentences with a sum.
- Änderung: «cash» → «money»; «a bookkeeper» → «an accountant»
<!-- daten: {"art":"gegnertext","name":"Helene Marburg"} -->

#### AD-en-Ab67582 · „15 The Evening“ › „Key Figures“ · Band S. 78 · sicher
Freigabe: offen

- alt: Attack None; two Grey Meridian operators are always within call
- neu: Attack None; two Grey Meridian operators are always within earshot
- Änderung: «call» → «earshot»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Key Figures"]],"absatz":true} -->

#### AD-en-A784641 · „15 The Evening“ › „Key Figures“ · Band S. 78 · sicher
Freigabe: offen

- alt: The Curator, “Mr Lindau”
- neu: The Curator, “Herr Lindau”
- Änderung: «“Mr» → «“Herr»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Key Figures"]],"absatz":true} -->

#### AD-en-A95882f · „15 The Evening“ › „Key Figures“ · Band S. 78 · prüfen
Freigabe: offen

- alt: 44 years old, tired, glasses, a worn coat; he looks like a lecturer who has not slept for too long. He is on the cell’s side, more or less. Every year he buys back a piece at the Evening that cannot be stolen. He knows the faces of the most important bidders and the names of three Spies among the staff. He knows that the Council sometimes buys at the Evening itself, and he has stopped asking about it. His secret: He once offered a bidder a piece from an O.D.I.N. archive in order to get another one. The deal fell through, but the offer still stands.
- neu: 44 years old, tired, glasses, a worn coat; he looks like a lecturer who has not slept for too long. He is on the side of the cell, more or less. Every year he buys back a piece at the Evening that cannot be stolen. He knows the faces of the most important bidders and the names of three Spies among the staff. He knows that the Council sometimes buys at the Evening itself, and he has stopped asking about it. His secret: He once offered a bidder a piece from an O.D.I.N. archive in order to get another one. The deal fell through, but the offer still stands.
- Änderung: «cell’s side,» → «side of the cell,»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Key Figures"]],"absatz":true} -->

#### AD-en-A7ebeaf · Gegner „Hugo Marchetti, codename “Notar”“, Beschreibung · Band S. 78 · prüfen
Freigabe: offen

- alt: 44 years old, tired, glasses, a worn coat; he looks like a lecturer who has not slept for too long. He is on the cell’s side, more or less. Every year he buys back a piece at the Evening that cannot be stolen. He knows the faces of the most important bidders and the names of three Spies among the staff. He knows that the Council sometimes buys at the Evening itself, and has stopped asking about it. His secret: he once offered a bidder a piece from an O.D.I.N. archive in order to get hold of another. The deal fell through, but the offer still stands.
- neu: 44 years old, tired, glasses, a worn coat; he looks like a lecturer who has not slept for too long. He is on the side of the cell, more or less. Every year he buys back a piece at the Evening that cannot be stolen. He knows the faces of the most important bidders and the names of three Spies among the staff. He knows that the Council sometimes buys at the Evening itself, and he has stopped asking about it. His secret: he once offered a bidder a piece from an O.D.I.N. archive in order to get another The deal fell through, but the offer still stands.
- Änderung: «cell’s side,» → «side of the cell,»; «(nichts)» → «he»; «hold of another.» → «another»
<!-- daten: {"art":"gegnertext","name":"Hugo Marchetti, codename “Notar”"} -->

#### AD-en-Acfce17 · Gegner „The Bidder with the Great Stone“, Beschreibung · Band S. 78 · prüfen
Freigabe: offen

- alt: An old man between sixty and seventy, very rich, very polite, with a face that gives nothing away. Who he is, the game master decides: Elias Vinter, a Danish shipowner who has made no public appearances since the death of his son in 2019, or Viktor Haller, a Viennese art dealer who signed over his entire property to a foundation in 2023. In both cases: he has lost a person who meant more to him than anything, and he believes that a large enough stone can bring that person back. He speaks slowly, with the patience of a man who has always been waited for.
- neu: An old man between sixty and seventy, very rich, very polite, with a face that reveals nothing. Who he is is decided by the game master: Elias Vinter, a Danish shipowner who has not attended public appointments since the death of his son in 2019, or Viktor Haller, a Viennese art dealer who transferred his entire estate to a foundation in 2023. In both cases: He lost a person who meant more to him than anything, and he believes that a sufficiently large stone can bring him back. He speaks slowly, with the patience of a man who has always been waited for.
- Änderung: «gives nothing away.» → «reveals nothing.»; «is,» → «is is decided by»; «master decides:» → «master:»; «made no» → «not attended»; «appearances» → «appointments»; «signed over» → «transferred»; «property» → «estate»; «he has» → «He»; «(nichts)» → «sufficiently»; «enough» → «(gestrichen)»; «that person» → «him»
<!-- daten: {"art":"gegnertext","name":"The Bidder with the Great Stone"} -->

#### AD-en-Ac5213d · „15 The Evening“ › „Key Figures“ · Band S. 79 · prüfen
Freigabe: offen

- alt: Weakness Can be bought. Whoever offers him more than the Curator has him
- neu: Weakness For hire. Whoever offers him more than the Curator has him
- Änderung: «Can be bought.» → «For hire.»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Key Figures"]],"absatz":true} -->

#### AD-en-A1568bb · „15 The Evening“ › „Bases and Means“ · Band S. 79 · sicher
Freigabe: offen

- alt: The post office box in Vaduz is the only fixed address of the Evening. Whoever wants to offer a piece writes there. The answer is a card without a sender, or silence.
- neu: The post office box in Vaduz is the only fixed address of the Evening. Anyone who wants to offer a piece writes there. The answer is a card without a sender, or silence.
- Änderung: «Whoever» → «Anyone who»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Bases and Means"]],"absatz":true} -->

#### AD-en-A8e8f6a · Gegner „Radek“, Beschreibung · Band S. 79 · sicher
Freigabe: offen

- alt: 38 years old, broad, shaved head, a scar over his left eye, leather jacket. He guards the pieces between arrival and auction. He knows the names of two O.D.I.N. Infiltrators and has not betrayed them yet, because he is waiting for a better offer. He once sold a piece from the warehouse; the Curator knows and uses it against him. He speaks briefly, suspiciously, and ends sentences with “and nothing else”.
- neu: 38 years old, broad, shaved head, a scar over his left eye, leather jacket. He guards the pieces between arrival and auction. He knows the names of two O.D.I.N. Infiltrators and has not yet betrayed them because he is waiting for a better offer. He once sold a piece from the warehouse; the Curator knows it and uses it against him. He speaks briefly, suspiciously, and ends sentences with “and nothing else”.
- Änderung: «(nichts)» → «yet»; «yet,» → «(gestrichen)»; «(nichts)» → «it»
<!-- daten: {"art":"gegnertext","name":"Radek"} -->

#### AD-en-A50d3fe · „15 The Evening“ › „The Plan: “The Great Stone”“ · Band S. 80 · prüfen
Freigabe: offen

- alt: ☠☠○○○ In Dresden the bidder buys at auction the estate of a geologist. In it lies half a page about a borehole in the ice. Trail: A Grey File emerges. In the post office box in Vaduz there is a message to the curator: “The estate is here. The trail is thin.” A Spy reads it before the courier comes.
- neu: ☠☠○○○ In Dresden the bidder buys at auction the estate of a geologist at auction in Dresden. In it lies half a page about a borehole in the ice. Sign: A Grey File is opened. In the post office box in Vaduz there is a message to the curator: “The estate is here. The trail is thin.” A Spy reads it before the courier comes.
- Änderung: «geologist.» → «geologist at auction in Dresden.»; «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","The Plan: “The Great Stone”"]],"absatz":true} -->

#### AD-en-A2875d3 · „15 The Evening“ › „The Plan: “The Great Stone”“ · Band S. 80 · prüfen
Freigabe: offen

- alt: ☠☠☠○○ The Curator prepares the access. In Genoa he meets an old man who was present at a borehole on Spitsbergen in 1962. Trail: An Infiltrator sees crates in the warehouse that are not meant for an auction: ropes, ice screws, cold-weather gear, a Geiger counter.
- neu: ☠☠☠○○ The Curator prepares the access. In Genoa he meets an old man who was present at a borehole on Spitsbergen in 1962. Sign: An Infiltrator sees crates in the warehouse that are not intended for an auction: ropes, ice screws, cold protection, a Geiger counter.
- Änderung: «Trail:» → «Sign:»; «meant» → «intended»; «cold-weather gear,» → «cold protection,»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","The Plan: “The Great Stone”"]],"absatz":true} -->

#### AD-en-A47899d · „15 The Evening“ › „The Plan: “The Great Stone”“ · Band S. 80 · prüfen
Freigabe: offen

- alt: ☠☠☠☠○ The bidder knows that the stone lies in a glacier on Spitsbergen, where in 1962 a drilling crew found something clear in the ice and abandoned the borehole. The curator assembles a team from Grey Meridian. Trail: A Red File emerges. Marchetti hears the sentence in Vienna: “The glacier gives it up if you know where.”
- neu: ☠☠☠☠○ The bidder knows that the stone lies in a glacier on Spitsbergen, where in 1962 a drilling crew found something clear in the ice and abandoned the borehole. The curator assembles a team from Grey Meridian. Sign: A Red File is opened. Marchetti hears the sentence in Vienna: “The glacier gives it up if you know where.”
- Änderung: «Trail:» → «Sign:»; «emerges.» → «is opened.»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","The Plan: “The Great Stone”"]],"absatz":true} -->

#### AD-en-A8337ff · „15 The Evening“ › „The Plan: “The Great Stone”“ · Band S. 80 · sicher
Freigabe: offen

- alt: ☠☠☠☠☠ The bidder knows where the great stone lies, and he will fetch it. The Evening has delivered. Trail: The Council takes over with a Black File. A chartered icebreaker leaves Tromsø without a cargo list.
- neu: ☠☠☠☠☠ The bidder knows where the great stone lies, and he will fetch it. The Evening has delivered. Sign: The Council takes over with a Black File. A chartered icebreaker leaves Tromsø without a cargo manifest.
- Änderung: «Trail:» → «Sign:»; «list.» → «manifest.»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","The Plan: “The Great Stone”"]],"absatz":true} -->

#### AD-en-A75985e · „15 The Evening“ › „The Plan: “The Great Stone”“ · Band S. 80 · sicher
Freigabe: offen

- alt: At ☠☠☠○○ : “The chimera” (Morrow Biologics) loses a skull. The Evening ties up all couriers and channels for the stone and no longer delivers samples to Morrow.
- neu: At ☠☠☠○○ : “The chimera” (Morrow Biologics) loses a skull. The Evening binds all couriers and channels for the stone and no longer delivers samples to Morrow.
- Änderung: «ties up» → «binds»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","The Plan: “The Great Stone”"]],"absatz":true} -->

#### AD-en-A6f9291 · „15 The Evening“ › „Hooks and Outlook“ · Band S. 80 · sicher
Freigabe: offen

- alt: Red File “The Man in the Front Row”. Marchetti has heard that the bidder with the great stone has found a lead. The Council wants to know who he is. The cell is to slip into the auction in Vienna and identify him. He is there, and he recognises the cell first.
- neu: Red File “The Man in the Front Row”. Marchetti has heard that the bidder with the great stone has found a lead. The Council wants to know who he is. The cell is to infiltrate the auction in Vienna and identify him. He is there, and he recognises the cell first.
- Änderung: «slip into» → «infiltrate»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Ae58721 · „15 The Evening“ › „Hooks and Outlook“ · Band S. 81 · prüfen
Freigabe: offen

- alt: Whoever sits at the Evening is a hook in their own right. Roll a D6 for a bidder near the cell: 1 a biochemist from Morrow Biologics, 2 an art dealer from Geneva who buys for the Foundation, 3 a man with a Russian accent who never bids, 4 a widow looking for a stone in which her husband speaks, 5 a front man bidding for the Lodge of the Silent Circle, 6 someone bidding for the Council who does not know the cell.
- neu: Whoever sits at the Evening is themselves a hook. Roll a D6 for a bidder near the cell: 1 a biochemist from Morrow Biologics, 2 an art dealer from Geneva who buys for the Foundation, 3 a man with a Russian accent who never bids, 4 a widow looking for a stone in which her husband speaks, 5 a front man bidding for the Lodge of the Silent Circle, 6 someone bidding for the Council who does not know the cell.
- Änderung: «(nichts)» → «themselves»; «hook in their own right.» → «hook.»
<!-- daten: {"art":"satz","fundstellen":[["15 The Evening","Hooks and Outlook"]],"absatz":true} -->

#### AD-en-Aa5e5b4 · „16 Grey Meridian“ › „Overview“ · Band S. 81 · sicher
Freigabe: offen

- alt: Grey Meridian is a private security company based in London, with offices in Dubai and Johannesburg. It supplies the mercenaries described in the Core Rulebook: well armed, well trained, badly informed. It works for anyone who pays, for the Evening, for Morrow Biologics and, in 2019, through three shell companies, even for the Council. For the game master, Grey Meridian is the team on the other side of the underground car park, and sometimes the only opponent one can talk to.
- neu: Grey Meridian is a private security company based in London, with offices in Dubai and Johannesburg. It supplies the mercenaries described in the Core Rulebook: well armed, well trained, poorly informed. It works for anyone who pays, for the Evening, for Morrow Biologics and, in 2019, through three shell companies, even for the Council. For the game master, Grey Meridian is the team on the other side of the underground car park, and sometimes the only opponent one can talk to.
- Änderung: «badly» → «poorly»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Overview"]],"absatz":true} -->

#### AD-en-Afb2f1f · „16 Grey Meridian“ › „Overview“ · Band S. 81 · sicher
Freigabe: offen

- alt: “We don’t ask what’s in the crate. We ask who’s paying for it.”
- neu: “We don’t ask what’s in the crate. We ask who pays for it.”
- Änderung: «who’s paying» → «who pays»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Overview"]],"absatz":true} -->

#### AD-en-A355603 · „16 Grey Meridian“ › „History“ · Band S. 82 · prüfen
Freigabe: offen

- alt: 2019 Grey Meridian works for the Council through three shell companies: a warehouse in Antwerp is to be guarded, containing crates from the Congo. The assignment runs to this day. The operations manager Marlene Duval reports that the crates hummed “in rhythm, like a heartbeat”. The report is never passed on. Duval resigns six weeks later.
- neu: 2019 Grey Meridian works for the Council through three shell companies: a warehouse in Antwerp is to be guarded, containing crates from the Congo. The contract runs to this day. The operations manager Marlene Duval reports that the crates hummed “in rhythm, like a heartbeat”. The report is never forwarded. Duval resigns six weeks later.
- Änderung: «assignment» → «contract»; «passed on.» → «forwarded.»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","History"]],"absatz":true} -->

#### AD-en-Afd7710 · „16 Grey Meridian“ › „Key Figures“ · Band S. 82 · prüfen
Freigabe: offen

- alt: 58 years old. She handles the contracts Reeve does not want to see, and she is the only one who knows the shell companies of 2019. She checked the payments and found that the money came from accounts that belong to no company that exists. She has slept badly since. In her house in Sandton a copy of the receipts lies in the safe, next to a letter to her daughter.
- neu: 58 years old. She manages the contracts that Reeve does not want to see, and she is the only one who knows the shell companies from 2019. She checked the payments and found that the money came from accounts that belong to no company that exists. Since then she sleeps badly. In her house in Sandton a copy of the receipts lies in the safe, next to a letter to her daughter.
- Änderung: «handles» → «manages»; «(nichts)» → «that»; «of» → «from»; «She has slept badly since.» → «Since then she sleeps badly.»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Key Figures"]],"absatz":true} -->

#### AD-en-Aea7197 · „16 Grey Meridian“ › „Key Figures“ · Band S. 82 · prüfen
Freigabe: offen

- alt: 44 years old, the man who carried the humming crate in 2014. He chooses who may escort the grey cargo. He knows that the crates are sometimes warm, sometimes hum and smell of ozone, and that operators who ask too much are transferred. He is loyal, but he has started to make notes. They lie in a safe deposit box in London, under his mother’s name. Stats: Operator of Grey Meridian, subtype Team leader (Threat Atlas).
- neu: 44 years old, the man who carried the humming crate in 2014. He selects who may accompany the grey freight. He knows that the crates are sometimes warm, sometimes hum and smell of ozone, and that operators who ask too much are transferred. He is loyal, but he has started to make notes. They lie in a safe deposit box in London, under his mother’s name. Stats: Operator of Grey Meridian, subtype Team leader (Threat Atlas).
- Änderung: «chooses» → «selects»; «escort» → «accompany»; «cargo.» → «freight.»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Key Figures"]],"absatz":true} -->

#### AD-en-A52a485 · Gegner „Sam Ferris“, Beschreibung · Band S. 82 · prüfen
Freigabe: offen

- alt: 34 years old, one of the company’s youngest operations managers. In 2017 in Dubai he guarded a crate that whispered at night, like a child counting. For two years he searched for what he had been guarding, and in the end he found a name. So he applied to an address from an old newspaper. He does not know that his letter arrived. He carries a notebook containing everything he knows about the grey cargo, and he is afraid that someone will find it, and even more afraid that no one will ever read it.
- neu: 34 years old, one of the youngest operations managers. in the company. In 2017 he guarded a crate in Dubai that whispered at night, like a child counting. For two years he searched for what he had guarded there, and in the end found a name. So he applied to an address from an old newspaper. He does not know that his letter has arrived. He carries a notebook containing everything he knows about the grey cargo, and he is afraid that someone will find it, and even more afraid that no one will ever read it.
- Änderung: «company’s» → «(gestrichen)»; «(nichts)» → «in the company.»; «in Dubai» → «(gestrichen)»; «(nichts)» → «in Dubai»; «been guarding,» → «guarded there,»; «he» → «(gestrichen)»; «(nichts)» → «has»
<!-- daten: {"art":"gegnertext","name":"Sam Ferris"} -->

#### AD-en-A2944a1 · „16 Grey Meridian“ › „Key Figures“ · Band S. 83 · sicher
Freigabe: offen

- alt: Behaviour Cautious, watchful. Does not shoot at people who have done nothing to him
- neu: Behaviour Cautious, observant. Does not shoot at people who have done nothing to him
- Änderung: «watchful.» → «observant.»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Key Figures"]],"absatz":true} -->

#### AD-en-Abad7f7 · „16 Grey Meridian“ › „Relationship to O.D.I.N.“ · Band S. 83 · prüfen
Freigabe: offen

- alt: For O.D.I.N., Grey Meridian is not an enemy, but a tool that others also use. The cell can bribe a team, intimidate it, take it out or outbid its client. That is the company’s weakness: it is not fanatical, not even convinced. It is only expensive. The Council paid them itself and keeps silent about it; the Audit would like to know why.
- neu: For O.D.I.N., Grey Meridian is not an enemy, but a tool that others also use. The cell can bribe, intimidate, eliminate or outbid a team. That is the company’s weakness: it is not fanatical, not even convinced. It is only expensive. The Council paid them itself and keeps silent about it; the Audit would like to know why.
- Änderung: «bribe a team, intimidate it, take it out» → «bribe, intimidate, eliminate»; «its client.» → «a team.»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Relationship to O.D.I.N."]],"absatz":true} -->

#### AD-en-A99487f · „16 Grey Meridian“ › „Who Is Paying Right Now“ · Band S. 83 · sicher
Freigabe: offen

- alt: D6 Client Assignment What the Team Knows
- neu: D6 Client Contract What the Team Knows
- Änderung: «Assignment» → «Contract»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Who Is Paying Right Now"]],"absatz":true} -->

#### AD-en-A1bc59c · „16 Grey Meridian“ › „Who Is Paying Right Now“ · Band S. 83 · prüfen
Freigabe: offen

- alt: 4 A shell company of the Council The warehouse in Antwerp, since 2019 Nothing. The team leader has heard the rhythm and is trying to forget it
- neu: 4 A shell company of the Council The warehouse in Antwerp, since 2019 Nothing. The team leader heard the beat and tries to forget it
- Änderung: «has» → «(gestrichen)»; «rhythm» → «beat»; «is trying» → «tries»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Who Is Paying Right Now"]],"absatz":true} -->

#### AD-en-A795af3 · „16 Grey Meridian“ › „Grey Meridian in the Plans of Others“ · Band S. 83 · sicher
Freigabe: offen

- alt: Grey Meridian has no plan of its own, but the company makes the plans of others easier. If a team works for an organisation whose plan is currently running, then in the roll after the mission a skull is added to that plan one step earlier: at Strength 1 or 2 already on a 5 or 6, at Strength 3 already on a 4, 5 or 6, at Strength 4 or 5 already on a 3 to 6. This applies as long as the cell does not prevent the contract. If it bribes the team, eliminates it, or gets the client to cancel the contract, the advantage is lost until the mission after next.
- neu: Grey Meridian has no plan of its own, but the company makes the plans of others easier. If a team works for an organisation whose plan is currently running, then in the roll after the mission a skull is added to that plan one step earlier: at Strength 1 or 2 already on 5 or 6, at Strength 3 already on 4, 5 or 6, at Strength 4 or 5 already on 3 to 6. This applies as long as the cell does not prevent the contract. If it bribes the team, eliminates it, or gets the client to cancel the contract, the advantage is lost until the mission after next.
- Änderung: «a» → «(gestrichen)»; «a» → «(gestrichen)»; «a» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Grey Meridian in the Plans of Others"]],"absatz":true} -->

#### AD-en-A6ab2d9 · „16 Grey Meridian“ › „Hooks“ · Band S. 84 · sicher
Freigabe: offen

- alt: Grey File “Grey Cargo”. An operator disappeared in Rotterdam after carrying a crate that hummed. His sister found an address in his papers and wrote a letter that arrived at O.D.I.N. The trail leads to a warehouse, to a team leader who will not talk, and to a crate that is still there.
- neu: Grey File “Grey Freight”. An operator disappeared in Rotterdam after carrying a crate that hummed. His sister found an address in his papers and wrote a letter that arrived at O.D.I.N. The trail leads to a warehouse, to a team leader who will not talk, and to a crate that is still there.
- Änderung: «Cargo”.» → «Freight”.»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Hooks"]],"absatz":true} -->

#### AD-en-A2873a6 · „16 Grey Meridian“ › „Hooks“ · Band S. 84 · prüfen
Freigabe: offen

- alt: Red File “The Rhythm”. A former operator who was there in Antwerp in 2019 lies in a London clinic and talks about crates that hum in rhythm. A journalist has picked up on the story. The cell is to calm the man, distract the journalist and find out what the Council had guarded in Antwerp in 2019. The trail leads to Marlene Duval and to Naidoo’s safe.
- neu: Red File “The Beat”. A former operator who was there in Antwerp in 2019 lies in a London clinic and talks about crates that hum in rhythm. A journalist has become aware of the story. The cell is to calm the man, distract the journalist and find out what the Council had guarded in Antwerp in 2019. The trail leads to Marlene Duval and to Naidoo’s safe.
- Änderung: «Rhythm”.» → «Beat”.»; «picked up on» → «become aware of»
<!-- daten: {"art":"satz","fundstellen":[["16 Grey Meridian","Hooks"]],"absatz":true} -->

#### AD-en-A4d689a · „The Other Services: Introduction“ › „Chapter VI: Connected Plans“ · Band S. 86 · prüfen
Freigabe: offen

- alt: If the cell worked against the organisation during the mission, the plan loses one skull, or two on a major success. If it inadvertently helped it, one is added.
- neu: If the cell worked against the organisation during the mission, the plan loses one skull; on a major success, two. If it unintentionally helped it, one is added.
- Änderung: «skull, or two» → «skull;»; «success.» → «success, two.»; «inadvertently» → «unintentionally»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Chapter VI: Connected Plans"]],"absatz":true} -->

#### AD-en-A259b06 · „The Other Services: Introduction“ › „Expansion 2: Knowledge and Countermoves“ · Band S. 86 · prüfen
Freigabe: offen

- alt: A countermove hits the cell, not the plan. It changes no skulls. It is a lure offered to an agent, a threat against an anchor, a witness who disappears, a contact who suddenly goes silent. The game master places the countermove in the next mission, preferably where the cell does not expect it.
- neu: A countermove hits the cell, not the plan. It does not change any skulls. It is a lure offered to an agent, a threat against an anchor, a witness who disappears, a contact who suddenly goes silent. The game master places the countermove in the next mission, preferably where the cell does not expect it.
- Änderung: «changes no» → «does not change any»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 2: Knowledge and Countermoves"]],"absatz":true} -->

#### AD-en-A4c6b93 · „The Other Services: Introduction“ › „Expansion 3: The Key Figure“ · Band S. 86 · sicher
Freigabe: offen

- alt: Every plan hangs on one person. Without Dr. Camille Favre there is no Chimera, without Kantor no choir, without the bidder no great stone. This person is the key figure , and their name is in the Profile of every dossier.
- neu: Every plan depends on a person. Without Dr. Camille Favre there is no Chimera, without Kantor no choir, without the bidder no great stone. This person is the key figure , and their name is in the Profile of every dossier.
- Änderung: «hangs» → «depends»; «one» → «a»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 3: The Key Figure"]],"absatz":true} -->

#### AD-en-A07bf2f · „The Other Services: Introduction“ › „Expansion 3: The Key Figure“ · Band S. 86 · sicher
Freigabe: offen

- alt: If the cell neutralises the key figure, the plan loses two skulls and does not roll after the next mission. Neutralising means: arresting, turning, convincing, exposing, or weakening them so that they can no longer lead the plan. Taking out does not mean killing. Most key figures are people who can be convinced or exposed, and the Game Master’s Book rewards solutions without combat. Many dossiers explicitly state what happens if the cell chooses violence, and it is rarely good for the cell.
- neu: If the cell neutralises the key figure, the plan loses two skulls and does not roll after the next mission. Neutralising means: arresting, turning, convincing, exposing, or weakening them so that they can no longer lead the plan. Neutralising does not mean killing. Most key figures are people who can be convinced or exposed, and the Game Master’s Book rewards solutions without combat. Many dossiers explicitly state what happens if the cell chooses violence, and it is rarely good for the cell.
- Änderung: «Taking out» → «Neutralising»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 3: The Key Figure"]],"absatz":true} -->

#### AD-en-A16b640 · „The Other Services: Introduction“ › „Expansion 4: The Trail“ · Band S. 87 · sicher
Freigabe: offen

- alt: Every stage of a plan has a sign : a rumour in the canteen, a newspaper report, a dead drop, a call, a hum, a measurement. The trails are in the right-hand column of every plan table. The game master places the sign of the current skull in the next mission, even if the mission is about something completely different.
- neu: Every stage of a plan has a sign : a rumour in the canteen, a newspaper report, a dead drop, a call, a hum, a measurement. The signs are in the right-hand column of every plan table. The game master places the sign of the current skull in the next mission, even if the mission is about something completely different.
- Änderung: «trails» → «signs»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 4: The Trail"]],"absatz":true} -->

#### AD-en-Aa8b94a · „The Other Services: Introduction“ › „Expansion 4: The Trail“ · Band S. 87 · sicher
Freigabe: offen

- alt: Rule of thumb: every mission contains a sign of a plan that is currently rising. The players do not learn from the rulebook that something is moving, but from the world. Whoever notices the sign can decide whether to follow it. Whoever overlooks it learns at the next skull what they overlooked. A sign is never mandatory, and it is never so hidden that only the game master finds it.
- neu: Rule of thumb: every mission contains a sign of a plan that is currently rising. The players do not learn from the rulebook that something is moving, but from the world. Whoever notices the sign can decide whether to follow it. Whoever misses it learns at the next skull what they missed. A sign is never mandatory, and it is never so hidden that only the game master finds it.
- Änderung: «overlooks» → «misses»; «overlooked.» → «missed.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 4: The Trail"]],"absatz":true} -->

#### AD-en-A8b8556 · „The Other Services: Introduction“ › „Expansion 5: Connections“ · Band S. 87 · sicher
Freigabe: offen

- alt: Plans interlock. If a plan reaches a certain stage, another plan gains or loses a skull. The connections are listed in each dossier with the plan that triggers them; the overview below summarises them.
- neu: Plans interlock. When a plan reaches a certain stage, another plan gains or loses a skull. The connections are listed in each dossier with the plan that triggers them; the overview below summarises them.
- Änderung: «If» → «When»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 5: Connections"]],"absatz":true} -->

#### AD-en-Ac2fd1e · „The Other Services: Introduction“ › „Expansion 5: Connections“ · Band S. 87 · prüfen
Freigabe: offen

- alt: “The new host” (The Twelve of Asklepios) ☠☠☠○○ “The chimera” (Morrow Biologics) gains a skull. A former Asklepios lab coat examines Arvid Lund’s blood sample at Morrow and finds something that does not fit the study.
- neu: “The new host” (The Twelve of Asklepios) ☠☠☠○○ “The chimera” (Morrow Biologics) gains a skull. A former Lab Coat from Asklepios examines Arvid Lund’s blood sample at Morrow and finds something that does not fit the study.
- Änderung: «(nichts)» → «Lab Coat from»; «lab coat» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 5: Connections"]],"absatz":true} -->

#### AD-en-Acfd8f5 · „The Other Services: Introduction“ › „Expansion 5: Connections“ · Band S. 87 · sicher
Freigabe: offen

- alt: “The new host” (The Twelve of Asklepios) ☠☠☠☠☠ “Fetch the children” (The Open Ones) loses a skull. The nanites have taken a human whom the Open Ones wanted for themselves. Kantor senses it and withdraws.
- neu: “The new host” (The Twelve of Asklepios) ☠☠☠☠☠ “Fetch the children” (The Open Ones) loses a skull. The nanites have taken a human the Open Ones wanted for themselves. Kantor senses it and withdraws.
- Änderung: «whom» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 5: Connections"]],"absatz":true} -->

#### AD-en-Ac41ab5 · „The Other Services: Introduction“ › „Expansion 5: Connections“ · Band S. 87 · sicher
Freigabe: offen

- alt: “The chimera” (Morrow Biologics) ☠☠☠☠○ “The great stone” (The Evening) gains a skull. Morrow buys more samples, and the Evening gets money and channels for the search for the stone.
- neu: “The chimera” (Morrow Biologics) ☠☠☠☠○ “The great stone” (The Evening) gains a skull. Morrow buys more samples, and the Evening receives money and channels for the search for the stone.
- Änderung: «gets» → «receives»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 5: Connections"]],"absatz":true} -->

#### AD-en-A7f317c · „The Other Services: Introduction“ › „Expansion 5: Connections“ · Band S. 87 · sicher
Freigabe: offen

- alt: “The stairs” (the Singers) ☠☠☠○○ “The page from 1871” (Lodge of the Silent Circle) gains a skull. The Lodge hears the song louder and searches for the page more urgently.
- neu: “The stairs” (the Singers) ☠☠☠○○ “The page from 1871” (Lodge of the Silent Circle) gains a skull. The Lodge hears the song more loudly and searches for the page more urgently.
- Änderung: «louder» → «more loudly»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 5: Connections"]],"absatz":true} -->

#### AD-en-A7945d6 · „The Other Services: Introduction“ › „Expansion 5: Connections“ · Band S. 88 · prüfen
Freigabe: offen

- alt: “The Second Light” (The Enlightened) ☠☠☠☠○ “The page from 1871” (Lodge of the Silent Circle) gains a skull. The lodge recognises the song of 1871 in the Anderlecht ritual and believes the time has come.
- neu: “The Second Light” (The Enlightened) ☠☠☠☠○ “The page from 1871” (Lodge of the Silent Circle) gains a skull. The lodge recognises the song from 1871 in the ritual of Anderlecht and believes the time has come.
- Änderung: «of» → «from»; «(nichts)» → «ritual of»; «ritual» → «(gestrichen)»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 5: Connections"]],"absatz":true} -->

#### AD-en-A95f007 · „The Other Services: Introduction“ › „Expansion 5: Connections“ · Band S. 89 · sicher
Freigabe: offen

- alt: “The great stone” (The Evening) ☠☠☠○○ “The second site” (Department 13) gains a skull. Through the Evening, the Department obtains information about O.D.I.N.’s alloy stocks.
- neu: “The great stone” (The Evening) ☠☠☠○○ “The second site” (Department 13) gains a skull. Through the Evening, the Department obtains information about O.D.I.N.’s alloy stockpiles.
- Änderung: «stocks.» → «stockpiles.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","Expansion 5: Connections"]],"absatz":true} -->

#### AD-en-A4cb22e · „The Other Services: Introduction“ › „The Situation Sheet“ · Band S. 89 · prüfen
Freigabe: offen

- alt: The game master keeps a sheet with all plans. After each mission she enters what has changed: the skulls, whether the key figure is still there and which trail she last laid. The sheet is the memory of the world. It shows at a glance which plan is currently becoming dangerous, and it prevents a connection from being forgotten.
- neu: The game master keeps a sheet with all plans. After each mission, they record what has changed: the skulls, whether the key figure is still there and which sign they last left. The sheet is the memory of the world. It shows at a glance which plan is currently becoming dangerous, and it prevents a connection from being forgotten.
- Änderung: «mission she enters» → «mission, they record»; «trail she» → «sign they»; «laid.» → «left.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","The Situation Sheet"]],"absatz":true} -->

#### AD-en-A38612c · „The Other Services: Introduction“ › „The Situation Sheet“ · Band S. 89 · sicher
Freigabe: offen

- alt: Organisation Plan Status Key Figure Last Trail
- neu: Organisation Plan Status Key Figure Last sign
- Änderung: «Trail» → «sign»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","The Situation Sheet"]],"absatz":true} -->

#### AD-en-A61d17d · „The Other Services: Introduction“ › „A Year in the World“ · Band S. 89 · prüfen
Freigabe: offen

- alt: An example over six missions. The game master has chosen three organisations that are to matter in their campaign: STILLWATER ( ☠☠○○○ ), the Open Ones ( ☠☠☠○○ ) and the Enlightened ( ☠☠☠○○ ). The other plans stand at their starting values on the Situation Sheet.
- neu: An example over six missions. The game master has chosen three organisations that are to matter in their campaign: STILLWATER ( ☠☠○○○ ), the Open Ones ( ☠☠☠○○ ) and the Enlightened ( ☠☠☠○○ ). After each mission the game master rolls for STILLWATER and the Open Ones. This year only the first file moves the Enlightened. The other plans stand at their starting values on the Situation Sheet.
- Änderung: «(nichts)» → «After each mission the game master rolls for STILLWATER and the Open Ones. This year only the first file moves the Enlightened.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","A Year in the World"]],"absatz":true} -->

#### AD-en-A4fae7c · „The Other Services: Introduction“ › „A Year in the World“ · Band S. 90 · sicher
Freigabe: offen

- alt: 1. The cell plays File 8 “The Second Light” and ends the ritual in Anderlecht. The Enlightened lose a skull and stand at ☠☠○○○ . With Knowledge 2 they do not notice who it was; there is no countermove. After the mission the game master rolls: STILLWATER has strength 4 and rises to ☠☠☠○○ on a 5. The connection triggers: the Congregation of the Silent Word learns of a second Seeker from a confession and rises to ☠☠☠☠○ , although nobody had an eye on it. A Red File emerges. The Open Ones roll a 3; with Strength 2 they need a 6.
- neu: 1. The cell plays File 8 “The Second Light” and ends the ritual in Anderlecht. The Enlightened lose a skull and stand at ☠☠○○○ . With Knowledge 2 they do not notice who it was; there is no countermove. After the mission the game master rolls: STILLWATER has strength 4 and rises to ☠☠☠○○ on a 5. The connection triggers: the Congregation of the Silent Word learns of a second Seeker from a confession and rises to ☠☠☠☠○ , although nobody had an eye on it. A Red File is created. The Open Ones roll a 3; with Strength 2 they need a 6.
- Änderung: «emerges.» → «is created.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","A Year in the World"]],"absatz":true} -->

#### AD-en-A1f1a6f · „The Other Services: Introduction“ › „A Year in the World“ · Band S. 90 · prüfen
Freigabe: offen

- alt: 4. The cell takes the Red File of the Open Ones and reaches two of the three children on the note from the Zurich locker before the couriers. The Open Ones fall to ☠☠☠○○ . With knowledge 5 they know exactly who it was: the countermove is a 4, the voice in sleep. A Psion of the cell makes their Resonance roll at the start of the next mission. Rolls: STILLWATER rolls a 4 and is back at ☠☠☠○○ ; the connection to the Congregation does not take effect again. The Open Ones roll a 1. Now the waiting connection of Morrow takes effect: the Evening gets money and channels and rises to ☠☠☠○○ . Its own connections wait.
- neu: 4. The cell takes the Red File of the Open Ones and reaches two of the three children on the note from the Zurich locker before the couriers. The Open Ones drop to ☠☠☠○○ . With knowledge 5 they know exactly who it was: the countermove is a 4, the voice in sleep. A Psion of the cell makes their Resonance roll at the start of the next mission. Rolls: STILLWATER rolls a 4 and is back at ☠☠☠○○ ; the connection to the Congregation does not trigger a second time. The Open Ones roll a 1. Now the waiting connection of Morrow takes effect: the Evening gets money and channels and rises to ☠☠☠○○ . Its own connections wait.
- Änderung: «fall» → «drop»; «take effect again.» → «trigger a second time.»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","A Year in the World"]],"absatz":true} -->

#### AD-en-A5b9623 · „The Other Services: Introduction“ › „A Year in the World“ · Band S. 90 · prüfen
Freigabe: offen

- alt: 5. The Red File left lying from Morrow Biologics: animal carcasses are moving in the sewers of Lyon. The cell exposes Dr. Camille Favre with the files on the dead researchers, and the corporation dismisses her. The key figure is taken out, Morrow falls to ☠☠○○○ . With knowledge 1 the corporation has no idea who is behind it and sends mercenaries from Grey Meridian to the wrong place. Rolls: STILLWATER rolls a 6 and stands at ☠☠☠☠○ ; a Red File is created. The Open Ones roll a 2. Then the connections of the Evening take effect: Morrow gets no more samples and drops to ☠○○○○ , and Department 13 obtains details of O.D.I.N.’s alloy stocks through the Evening and rises to ☠☠☠☠○ . Another Red File.
- neu: 5. The Red File left lying from Morrow Biologics: animal carcasses are moving in the sewers of Lyon, animal carcasses are moving. The cell exposes Dr. Camille Favre with the files on the dead researchers, and the corporation dismisses her. The key figure is out of play, Morrow drops to ☠☠○○○ . With knowledge 1 the corporation has no idea who is behind it and sends mercenaries from Grey Meridian to the wrong place. Rolls: STILLWATER rolls a 6 and stands at ☠☠☠☠○ ; a Red File is created. The Open Ones roll a 2. Then the connections of the Evening take effect: Morrow gets no more samples and drops to ☠○○○○ , and Department 13 obtains details of O.D.I.N.’s alloy stocks through the Evening and rises to ☠☠☠☠○ . Another Red File.
- Änderung: «Lyon.» → «Lyon, animal carcasses are moving.»; «taken out,» → «out of play,»; «falls» → «drops»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","A Year in the World"]],"absatz":true} -->

#### AD-en-A3aa535 · „The Other Services: Introduction“ › „A Year in the World“ · Band S. 90 · sicher
Freigabe: offen

- alt: 6. The Red File of STILLWATER leads into the maintenance tunnels in Maryland. The cell cannot get to Dr. Webb, but it destroys the documents for the procedure. The plan falls to ☠☠☠○○ . Rolls: the Open Ones roll a 6 and are back at ☠☠☠☠○ ; their connections have already taken effect. Then the connection of Department 13 takes effect: the Americans fear coming away empty-handed on the alloy ore, and STILLWATER rises to ☠☠☠☠○ again.
- neu: 6. The Red File of STILLWATER leads into the maintenance tunnels in Maryland. The cell cannot get to Dr. Webb, but it destroys the documents for the procedure. The plan drops to ☠☠☠○○ . Rolls: the Open Ones roll a 6 and are back at ☠☠☠☠○ ; their connections have already taken effect. Then the connection of Department 13 takes effect: the Americans fear coming away empty-handed on the alloy ore, and STILLWATER rises to ☠☠☠☠○ again.
- Änderung: «falls» → «drops»
<!-- daten: {"art":"satz","fundstellen":[["The Other Services: Introduction","A Year in the World"]],"absatz":true} -->

### Gegnerwerte

#### AD-en-A20ba37 · Gegner „Georg Wendlinger“, Zeile „Behaviour“ · Band S. 58 · prüfen
Freigabe: offen

- alt: Watches, makes phone calls, deletes. Withdraws as soon as he suspects O.D.I.N. is nearby.
- neu: Behaviour Observes, makes calls, deletes. Withdraws as soon as he suspects O.D.I.N. is nearby.
- Änderung: «Watches,» → «Behaviour Observes,»; «phone» → «(gestrichen)»
<!-- daten: {"art":"gegner","name":"Georg Wendlinger","label":"Behaviour"} -->

#### AD-en-A109bab · Gegner „Don Matteo Riva“, Zeile „Behaviour“ · Band S. 63 · prüfen
Freigabe: offen

- alt: Pushes, talks, looks for allies. Flees when he believes that O.D.I.N. is coming for him
- neu: Pushes, talks, looks for allies. Flees if he believes O.D.I.N. is coming for him
- Änderung: «when» → «if»; «that» → «(gestrichen)»
<!-- daten: {"art":"gegner","name":"Don Matteo Riva","label":"Behaviour"} -->

#### AD-en-Ac990db · Gegner „Kantor“, Zeile „Behaviour“ · Band S. 69 · prüfen
Freigabe: offen

- alt: Talks, explains, waits. Uses his powers only when he has no choice, and then with full force. Does not flee; the Open Ones carry him
- neu: Talks, explains, waits. Acts only when he has no choice, and then with full force. Does not flee; the Open Ones carry him
- Änderung: «Uses his powers» → «Acts»
<!-- daten: {"art":"gegner","name":"Kantor","label":"Behaviour"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- „The Other Services: Introduction“ › „How a Dossier Is Structured“: Unsicher, bleibt: „The large dossiers all follow the same structure, so that the game master can quickly find what they need at the table:“ (Abgleich ergäbe „The major dossiers all follow the same structure, so that the game master can quickly find what they need at the table:“).
- „The Other Services: Introduction“ › „Overview of the Organisations“: Längerer Text im Band ohne Gegenstück („1871 than the Registry. And in a monastery in the Carpathians, an old man in a w…“), nicht übernommen.
- „The Other Services: Introduction“ › „Real Organisations“: Unsicher, bleibt: „Before the campaign, the game master agrees what is off-limits at the table and what is only hinted at (Game Master’s Book, chapter “Safety at the Table”).“ (Abgleich ergäbe „Before the campaign, the game master agrees before the campaign what is taboo at the table and what is only hinted at (Game Master’s Book, chapter “Safety at th“).
- „The Other Services: Introduction“ › „Chapter III: Foreign Services“: Längerer Text im Band ohne Gegenstück („have thirty years to wait for a new Seeker. We have found one.” Director Elaine …“), nicht übernommen.
- „The Other Services: Introduction“ › „Chapter VI: Connected Plans“: Längerer Text im Band ohne Gegenstück („el the contract, the advantage is lost until the mission after next. Where a fil…“), nicht übernommen.
- „The Other Services: Introduction“ › „Expansion 4: The Trail“: Unsicher, bleibt: „Expansion 4: The Trail“ (Abgleich ergäbe „Expansion 4: The Sign“).
- „The Other Services: Introduction“ › „Expansion 5: Connections“: Unsicher, bleibt: „That is why the Situation Sheet lists all plans, not only the two or three the game master rolls for.“ (Abgleich ergäbe „Therefore the Situation Sheet lists all plans, not only the two or three the game master rolls for.“).
- „The Other Services: Introduction“ › „Expansion 5: Connections“: Unsicher, bleibt: „The children in the area sing the song from 1871, and the Singers hear it (Game Master’s Book, “Connecting Plans”).“ (Abgleich ergäbe „The children in the surrounding area sing the song from 1871, and the Singers hear it (Game Master’s Book, “Connecting Plans”).“).
- „01 The Twelve of Asklepios“ › „Overview“: Unsicher, bleibt: „If the cell takes him out, the plan loses two skulls and does not roll after the next mission.“ (Abgleich ergäbe „If the cell neutralises him, the plan loses two skulls and does not roll after the next mission.“).
- „01 The Twelve of Asklepios“ › „Key Figures“: Unsicher, bleibt: „Weakness She keeps silent, but she is not a good liar.“ (Abgleich ergäbe „Weakness She stays silent, but she does not lie well.“).
- „01 The Twelve of Asklepios“ › „Bases and Means“: Längerer Text im Band ohne Gegenstück („anites there is still a remnant of Dariusz Zieliński. He appears for a moment wh…“), nicht übernommen.
- „01 The Twelve of Asklepios“ › „Bases and Means“: Längerer Text im Band ohne Gegenstück („cut himself on an ampoule. 49 years old, slim, glasses, a diagnostic device on h…“), nicht übernommen.
- „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“: Unsicher: „☠☠○○○“ → „If the cell has none, one of the Eleven from Glasgow calls the handler and names“ (nicht übernommen).
- „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“: Unsicher, bleibt: „☠☠☠○○ The nanites in Stahl grow restless.“ (Abgleich ergäbe „☠☠☠○○ The nanites in Stahl become restless.“).
- „01 The Twelve of Asklepios“ › „The Plan: “The New Host”“: Unsicher, bleibt: „In Krakow that night, twelve people who have never touched a crystal sing in their sleep.“ (Abgleich ergäbe „In Kraków that night, twelve people sing in their sleep who have never touched a crystal sing in their sleep.“).
- „01 The Twelve of Asklepios“ › „Hooks and Outlook“: Längerer Text im Band ohne Gegenstück („e nanites in Stahl become restless. He drives to Kraków without reporting it. Si…“), nicht übernommen.
- „01 The Twelve of Asklepios“ › „Hooks and Outlook“: Längerer Text im Band ohne Gegenstück („not a planner. He is the tool that carries the nanites to Kraków. If the cell ta…“), nicht übernommen.
- „01 The Twelve of Asklepios“ › „Hooks and Outlook“: Unsicher, bleibt: „In Krakow, twelve people who have never touched a crystal sing in their sleep.“ (Abgleich ergäbe „In Kraków twelve people who have never touched a crystal sing in their sleep.“).
- „01 The Twelve of Asklepios“ › „Adversaries“: Unsicher: „this adventure“ → „humans. For them the human is the host, not the purpose. They sing in the Opener“ (nicht übernommen).
- „01 The Twelve of Asklepios“ › „Adversaries“: Unsicher: „Threat Atlas“ → „nanites. He wants nothing anymore. The nanites want to reach Ania through him. B“ (nicht übernommen).
- „02 Morrow Biologics“ › „History and Goals“: Unsicher: „History“ → „e sing in their sleep who have never touched a crystal. The Council takes over. “ (nicht übernommen).
- „02 Morrow Biologics“ › „History and Goals“: Längerer Text im Band ohne Gegenstück („she sings. After the Fifth Skull The nanites live in Ania Wolska without anythin…“), nicht übernommen.
- „02 Morrow Biologics“ › „Key Figures“: Unsicher, bleibt: „He leads the department for cell stability in Leiden.“ (Abgleich ergäbe „He heads the department for cell Stability department in Leiden.“).
- „02 Morrow Biologics“ › „Bases and Means“: Unsicher: „Bases“ → „here did you get that?” No answer ever came. He speaks tersely, precisely, using“ (nicht übernommen).
- „02 Morrow Biologics“ › „Bases and Means“: Längerer Text im Band ohne Gegenstück („avoids eye contact. Value Details Initiative 3 Attack none Defence / Armour / HP…“), nicht übernommen.
- „02 Morrow Biologics“ › „Bases and Means“: Unsicher, bleibt: „Lyon laboratory.“ (Abgleich ergäbe „Lyon.“).
- „02 Morrow Biologics“ › „Bases and Means“: Unsicher, bleibt: „In the basement are the animal pens, the cool boxes and the room in which the Chimera is kept.“ (Abgleich ergäbe „In the basement are the animal pens, the cool boxes and the room where the Chimera is kept.“).
- „02 Morrow Biologics“ › „The Plan: “The Chimera”“: Unsicher, bleibt: „Animal carcasses that are still moving are found in the canals of Lyon.“ (Abgleich ergäbe „In the sewers of Lyon, animal carcasses are found in the canals of Lyon.“).
- „02 Morrow Biologics“ › „Hooks and Outlook“: Längerer Text im Band ohne Gegenstück („lls two researchers. Dr. Favre covers up the deaths as an accident. The creature…“), nicht übernommen.
- „02 Morrow Biologics“ › „Adversaries“: Über eine Absatzgrenze: „Adversaries Stats for this adventure Dr. Joost Brandsma Dr. Arne Holm…“ → „ceived a blood sample from Arvid Lund, recognised nanites in it, and asked back:…“
- „02 Morrow Biologics“ › „Adversaries“: Längerer Text im Band ohne Gegenstück („Lyon Laboratory · Humans A small, energetic woman with dark hair and quick movem…“), nicht übernommen.
- „03 The Singers“ › „History and Goals“: Unsicher: „History“ → „ll cults are five examples of what can arise in any small town in Europe: from t“ (nicht übernommen).
- „03 The Singers“ › „History and Goals“: Längerer Text im Band ohne Gegenstück („can be scattered into any campaign. The game master plays cults not as conspirat…“), nicht übernommen.
- „03 The Singers“ › „History and Goals“: Unsicher: „of their own accord. They know“ → „themselves.“ (nicht übernommen).
- „03 The Singers“ › „History and Goals“: Unsicher, bleibt: „They know what lies at the end of the staircase.“ (Abgleich ergäbe „They know what lies at the end of the stairs remains open.“).
- „03 The Singers“ › „Key Figures“: Unsicher, bleibt: „Weakness He is neither a fighter nor a believer.“ (Abgleich ergäbe „Weakness He is not a fighter and not a believer.“).
- „03 The Singers“ › „Bases and Means“: Längerer Text im Band ohne Gegenstück („gave the Singers only the map, not the stone under which it begins, because he i…“), nicht übernommen.
- „03 The Singers“ › „The Plan: “The Stairs”“: Unsicher, bleibt: „On the night of the song, the Council seizes all Nexus crystals it can obtain to seal the staircases.“ (Abgleich ergäbe „The Council confiscates all Nexus crystals it can get on the night of the song, the Council seizes all Nexus crystals it can obtain to seal the staircases.“).
- „03 The Singers“ › „Hooks and Outlook“: Längerer Text im Band ohne Gegenstück („which the song can be heard. Sign: A newspaper report about a “sect” that makes …“), nicht übernommen.
- „03 The Singers“ › „Hooks and Outlook“: Längerer Text im Band ohne Gegenstück („a cellar in Tallinn. The song can be heard all over Europe, quietly, like a hum …“), nicht übernommen.
- „03 The Singers“ › „Hooks and Outlook“: Unsicher: „the Staircases”. During the night“ → „Stairs”.“ (nicht übernommen).
- „03 The Singers“ › „Hooks and Outlook“: Unsicher, bleibt: „His wife Miriam followed him and, the night before, called the police and said she had found him.“ (Abgleich ergäbe „His wife Miriam followed him and, the night of the police and“).
- „03 The Singers“ › „Hooks and Outlook“: Unsicher, bleibt: „During the night the Seeker heard the song, in four places at once, and a fifth spot that is still silent.“ (Abgleich ergäbe „During the night the Seeker heard the song during the night, in four places at once, and a fifth place that is still silent.“).
- „04 Small Cults“ › „The Guardians of the Forest Crystal“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- „04 Small Cults“ › „The Guardians of the Forest Crystal“: Unsicher, bleibt: „Key Figures.“ (Abgleich ergäbe „Leaders.“).
- „04 Small Cults“ › „The Guardians of the Forest Crystal“: Unsicher, bleibt: „He keeps quiet about the fact that he goes to the glassworks alone at night and lays the stone on his bare skin to feel the hum.“ (Abgleich ergäbe „He keeps quiet about the fact that he goes to the glassworks alone at night and lays the stone on bare skin to feel the hum.“).
- „04 Small Cults“ › „The Guardians of the Forest Crystal“: Unsicher, bleibt: „Special Knows every path in the forest and every spot where one can build a trap“ (Abgleich ergäbe „Special Knows every path in the forest and every spot where a trap“).
- „04 Small Cults“ › „The Guardians of the Forest Crystal“: Unsicher, bleibt: „☠☠☠☠○ Hartl calls the group together at the solstice to open the rift for ever. From the plan, a Red File is created.“ (Abgleich ergäbe „☠☠☠☠○ Hartl calls the group together at the solstice to open the rift forever. The plan becomes a Red File is created.“).
- „04 Small Cults“ › „The Community of the Dreamer“: Längerer Text im Band ohne Gegenstück („crystal Special Knows every path in the forest and every spot where a trap can b…“), nicht übernommen.
- „04 Small Cults“ › „The Community of the Dreamer“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- „04 Small Cults“ › „The Community of the Dreamer“: Unsicher, bleibt: „Key Figures.“ (Abgleich ergäbe „Leaders.“).
- „04 Small Cults“ › „The Community of the Dreamer“: Unsicher, bleibt: „From the plan, a Red File is created.“ (Abgleich ergäbe „The plan becomes a Red File is created.“).
- „04 Small Cults“ › „The Community of the Dreamer“: Unsicher, bleibt: „☠☠☠☠☠ The haunt now belongs to the whole block.“ (Abgleich ergäbe „☠☠☠☠☠ The haunting now belongs to the whole block.“).
- „04 Small Cults“ › „The Community of the Dreamer“: Unsicher, bleibt: „The cell is to find the haunt and end it.“ (Abgleich ergäbe „The cell is to find and end it.“).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Längerer Text im Band ohne Gegenstück („flat because she is afraid the Dreamer might command her to do something. Her vo…“), nicht übernommen.
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher: „is the only one who“ → „alone“ (nicht übernommen).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher: „tracks.“ → „wagons who did not blink.“ (nicht übernommen).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher, bleibt: „The being is not an extraterrestrial but the Spectator (Threat Atlas), which lives in a disused sewer beneath the goods station.“ (Abgleich ergäbe „The being is not an alien, but the Spectator (Threat Atlas), who lives in a disused canal beneath the goods station.“).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher, bleibt: „Key Figures.“ (Abgleich ergäbe „Leaders.“).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher, bleibt: „He keeps quiet about the fact that he sits alone in the carriage at night and waits for an answer that does not come.“ (Abgleich ergäbe „He keeps quiet about the fact that he sits alone in the wagon at night and waits for an answer that does not come.“).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher, bleibt: „☠☠☠○○ At night the Spectator stands beneath the carriage and watches.“ (Abgleich ergäbe „☠☠☠○○ At night the Spectator stands beneath the wagon at night and watches.“).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher, bleibt: „From the plan, a Red File is created.“ (Abgleich ergäbe „The plan becomes a Red File is created.“).
- „04 Small Cults“ › „The Awaiting Ones of Pilsen“: Unsicher, bleibt: „A local resident has found blood on the tracks.“ (Abgleich ergäbe „A resident has seen a tall grey man between the tracks.“).
- „04 Small Cults“ › „The Sisters of the Singing Children“: Unsicher, bleibt: „From the plan, a Red File is created.“ (Abgleich ergäbe „The plan becomes a Red File is created.“).
- „04 Small Cults“ › „The Circle of the Returners“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- „04 Small Cults“ › „The Circle of the Returners“: Unsicher, bleibt: „The Circle of the Returners“ (Abgleich ergäbe „The Circle of the Returned“).
- „04 Small Cults“ › „The Circle of the Returners“: Unsicher, bleibt: „Key Figures.“ (Abgleich ergäbe „Leaders.“).
- „04 Small Cults“ › „The Circle of the Returners“: Unsicher, bleibt: „He keeps quiet about the fact that he wakes up at night and does not know where he is.“ (Abgleich ergäbe „He keeps quiet about the fact that he wakes at night and does not know where he is.“).
- „04 Small Cults“ › „The Circle of the Returners“: Unsicher, bleibt: „From the plan, a Red File is created.“ (Abgleich ergäbe „The plan becomes a Red File is created.“).
- „05 STILLWATER“ › „History and Goals“: Unsicher: „History“ → „s the Russian enemy that uses up Psions“ (nicht übernommen).
- „05 STILLWATER“ › „History and Goals“: Unsicher: „Nor“ → „It also does not know“ (nicht übernommen).
- „05 STILLWATER“ › „Key Figures“: Unsicher, bleibt: „Special Has access to STILLWATER’s Remote Viewer and can request his drawings“ (Abgleich ergäbe „Special Has access to the Remote Viewer and can request his drawings“).
- „05 STILLWATER“ › „Bases and Means“: Unsicher, bleibt: „It houses STILLWATER’s directorate, the programme’s registry, a small server room and a conference room with maps of North America on which O.D.I.N.“ (Abgleich ergäbe „It houses the directorate the registry of the programme, a small server room and a conference room with maps of North America on which O.D.I.N.“).
- „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“: Unsicher: „prepares“ → „wants to prepare and carry out“ (nicht übernommen).
- „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“: Unsicher, bleibt: „He is the one who prepares the opening and wants to carry it out.“ (Abgleich ergäbe „He is the one who prepares the opening.“).
- „05 STILLWATER“ › „The Plan: “A Seeker of Their Own”“: Unsicher, bleibt: „The Congregation learns of a second Seeker from a confession and fears that the silence can no longer be kept.“ (Abgleich ergäbe „The Congregation learns from a confession about a second Seeker from a confession and fears that the silence can no longer be kept.“).
- „05 STILLWATER“ › „Hooks and Outlook“: Unsicher: „uses its own Seeker to search“ → „searches“ (nicht übernommen).
- „06 Department 13“ › „History and Goals“: Unsicher: „a systematic search begins that“ → „which“ (nicht übernommen).
- „06 Department 13“ › „History and Goals“: Unsicher, bleibt: „Between Kola and the Urals a systematic search begins that continues to this day.“ (Abgleich ergäbe „A systematic search begins between Kola and the Urals a systematic search begins that continues to this day.“).
- „06 Department 13“ › „History and Goals“: Unsicher, bleibt: „The Department’s leadership believes that O.D.I.N.“ (Abgleich ergäbe „The leadership believes that O.D.I.N.“).
- „06 Department 13“ › „Key Figures“: Unsicher, bleibt: „She watches, listens and disappears when the Department does not need her.“ (Abgleich ergäbe „She observes, listens, and disappears when the Department does not need her.“).
- „07 The Seventh Bureau“ › „What O.D.I.N. Knows“: Unsicher, bleibt: „They were only analysed in 2015. At irregular intervals the unit reported coordinates to a recipient in Beijing, places in Sichuan, Yunnan and in the west of Hu“ (Abgleich ergäbe „They were not analysed until 2015. At irregular intervals The agency reported coordinates to a recipient in Beijing at irregular intervals, places in Sichuan, Y“).
- „07 The Seventh Bureau“ › „The Agent of 2016“: Unsicher, bleibt: „The Agent of 2016“ (Abgleich ergäbe „The Agent From 2016“).
- „08 The Partners“ › „What the Partner Asks in Return for a Favour“: Unsicher: „asks“ → „demands more, an agent rolls CHA + Negotiation against the difficulty the game m“ (nicht übernommen).
- „08 The Partners“ › „What the Partner Asks in Return for a Favour“: Unsicher, bleibt: „What the Partner Asks in Return for a Favour“ (Abgleich ergäbe „What the Partner Demands for a Favour“).
- „08 The Partners“ › „What the Partner Asks in Return for a Favour“: Unsicher, bleibt: „For each partner, the game master notes whether it owes the cell something or the other way round. Calling in a noted favour succeeds without a test; if the cel“ (Abgleich ergäbe „For each partner, the game master notes for each partner whether they owe the cell something or vice versa. Redeeming a noted favour succeeds without a test; if“).
- „08 The Partners“ › „What the Partner Asks in Return for a Favour“: Unsicher, bleibt: „A favour that the cell owes never expires.“ (Abgleich ergäbe „A favour the cell owes never expires.“).
- „08 The Partners“ › „Hooks“: Unsicher: „She asks“ → „The Brotherhoods Brotherhoods preserve. They preserve rituals, names, files and “ (nicht übernommen).
- „08 The Partners“ › „Hooks“: Längerer Text im Band ohne Gegenstück („game master uses brotherhoods when the cell is meant to search archives, church …“), nicht übernommen.
- „08 The Partners“ › „Hooks“: Unsicher, bleibt: „that the cell afterwards reports to her what took the child.“ (Abgleich ergäbe „that the Print Shop has cultivated for decades to swallow real traces. Both appear in the same dossier because the cell afterwards reports from three centuries,“).
- „09 The Freemasons and the Legend of the Illuminati“ › „Overview“: Unsicher, bleibt: „That is exactly what makes it so valuable to us.”“ (Abgleich ergäbe „Exactly that is exactly what makes it so valuable to us.”“).
- „09 The Freemasons and the Legend of the Illuminati“ › „The Legend of the Illuminati“: Längerer Text im Band ohne Gegenstück („traces. In Play: The Red Herring Freemasons are almost always a red herring. A c…“), nicht übernommen.
- „09 The Freemasons and the Legend of the Illuminati“ › „A Handler in the Lodge“: Unsicher, bleibt: „The Grey File “The Second Light” itself came about through an observer in Brussels who intercepted the missing-person reports of the Belgian police, because on “ (Abgleich ergäbe „The Grey File “The Second Light” itself came about through an observer in Brussels who intercepted the missing persons reports of the Belgian police, because a “).
- „10 Lodge of the Silent Circle“ › „History and Goals“: Längerer Text im Band ohne Gegenstück („an is merely a fraud or whether he owns something genuine. The cell is to visit …“), nicht übernommen.
- „10 Lodge of the Silent Circle“ › „Key Figures“: Längerer Text im Band ohne Gegenstück („he lodge receives a charter and is affiliated with the federation. 1872, Atlanti…“), nicht übernommen.
- „10 Lodge of the Silent Circle“ › „Bases and Means“: Unsicher: „Bases“ → „tacts 3 + 3, Deception 2 + 2 Horror None Special Has access to the lodge rooms, “ (nicht übernommen).
- „10 Lodge of the Silent Circle“ › „Hooks and Outlook“: Unsicher: „Hooks“ → „ge is silent. The lodge learns of the second compartment“ (nicht übernommen).
- „10 Lodge of the Silent Circle“ › „Hooks and Outlook“: Steht so nicht im Band: „came from Uppsala to Hanover in 1872, as a gift to a friendly lodge, and because it…“ (bleibt).
- „10 Lodge of the Silent Circle“ › „Hooks and Outlook“: Unsicher, bleibt: „It is important, because the book came from Uppsala to Hanover in 1872, as a gift to a friendly lodge, and because it contains a name that the Lodge of the Sile“ (Abgleich ergäbe „It is important, because the lodge in Hanover is a daughter of the lodge in Uppsala and the book came from Uppsala to Hanover in 1872, as a gift to a friendly l“).
- „11 The Enlightened“ › „Overview“: Unsicher, bleibt: „For the game master they are an adversary that arose from a mistake by one’s own organisation.“ (Abgleich ergäbe „For the game master they are an opponent that arose from a mistake by one’s own organisation.“).
- „11 The Enlightened“ › „Key Figures“: Längerer Text im Band ohne Gegenstück („he Second Light” appears, copied from the manuscript MS Arcana 114 of the Colleg…“), nicht übernommen.
- „11 The Enlightened“ › „Key Figures“: Unsicher: „1, blinds“ → „the target is blinded for one round (−2 dice)“ (nicht übernommen).
- „11 The Enlightened“ › „Key Figures“: Unsicher, bleibt: „Attack Pepper spray 2 + 2, damage 1, blinds“ (Abgleich ergäbe „Attack Pepper spray 2 + 2, no damage, 1, blinds“).
- „11 The Enlightened“ › „Bases and Means“: Unsicher: „Bases“ → „2 / 0 / 8 Skills Hacking 3, Persuasion 3 Special Can delete or pass on the forum“ (nicht übernommen).
- „11 The Enlightened“ › „Hooks and Outlook“: Unsicher, bleibt: „Hooks and Outlook“ (Abgleich ergäbe „Tual and Outlook“).
- „11 The Enlightened“ › „Hooks and Outlook“: Unsicher, bleibt: „If the forum data was handed over to the Print Shop, the Print Shop uses it for a counter-legend and the plan loses a skull.“ (Abgleich ergäbe „If the forum data of the Print Shop were handed over, the Print Shop uses them for a counter-legend and the plan loses a skull.“).
- „12 The Congregation of the Silent Word“ › „History and Goals“: Unsicher, bleibt: „History and Goals“ (Abgleich ergäbe „History of the circles than O.D.I.N. and Goals“).
- „12 The Congregation of the Silent Word“ › „The Plan: “Preserve the Silence”“: Unsicher, bleibt: „The article about vanished children feeds every conspiracy group in Europe, and “Illuminati Europa” gains new members.“ (Abgleich ergäbe „The article about disappeared children feeds every conspiracy group in Europe, and “Illuminati Europa” gains new members.“).
- „12 The Congregation of the Silent Word“ › „Hooks and Outlook“: Unsicher: „Hooks“ → „eared children. A contact reports that someone in the editorial office is asking“ (nicht übernommen).
- „13 The Open Ones“ › „Overview“: Unsicher, bleibt: „Seat The monastery of Sfântul Ioan in the Carpathians, Romania, plus changing hideouts in Europe“ (Abgleich ergäbe „Seat The monastery of Sfântul Ioan Monastery in the Carpathians, Romania, plus changing hideouts in Europe“).
- „13 The Open Ones“ › „History and Goals“: Unsicher, bleibt: „Who really stood behind the numbers, he does not know.“ (Abgleich ergäbe „He does not know who really stood behind the numbers, he does not know.“).
- „13 The Open Ones“ › „Bases and Means“: Längerer Text im Band ohne Gegenstück („that is often by now. She speaks quickly and quietly, as if someone might be lis…“), nicht übernommen.
- „13 The Open Ones“ › „Bases and Means“: Unsicher, bleibt: „Bases and Means“ (Abgleich ergäbe „En Kantor sleeps, and Means“).
- „13 The Open Ones“ › „Bases and Means“: Unsicher, bleibt: „Who they are, only Kantor knows.“ (Abgleich ergäbe „Only Kantor knows who they are, only Kantor knows.“).
- „13 The Open Ones“ › „Relationship to O.D.I.N.“: Unsicher, bleibt: „He only learns why on that night.“ (Abgleich ergäbe „The Psion learns why only on that night.“).
- „13 The Open Ones“ › „The Plan: “Fetch the Children”“: Unsicher, bleibt: „☠☠☠☠○ Kantor calls the Open Ones from all over Europe back to the monastery.“ (Abgleich ergäbe „☠☠☠☠○ Kantor calls the Open Ones back to the monastery from all over Europe back to the monastery.“).
- „13 The Open Ones“ › „The Plan: “Fetch the Children”“: Unsicher, bleibt: „The Open Ones buy Nexus crystals for their choir themselves and take sources from the Foundation.“ (Abgleich ergäbe „The Open Ones buy Nexus crystals themselves for their choir and take sources from the Foundation.“).
- „13 The Open Ones“ › „Hooks and Outlook“: Unsicher: „Hooks“ → „peration, just once, the Psion does not put on their helmet when the Open Ones a“ (nicht übernommen).
- „13 The Open Ones“ › „Hooks and Outlook“: Unsicher, bleibt: „The mill is empty, the mattresses are still warm, and in the cellar something hums in a lead box.“ (Abgleich ergäbe „into it. The mill is empty, the mattresses are still warm, and in the cellar something hums in a lead box.“).
- „14 The Foundation in Basel“ › „Key Figures“: Unsicher: „go“ → „take the cell with her“ (nicht übernommen).
- „14 The Foundation in Basel“ › „Key Figures“: Unsicher, bleibt: „Waits, observes, asks questions and offers to go into the Nursery with the cell“ (Abgleich ergäbe „Waits, observes, asks questions and offers to go into the Nursery“).
- „14 The Foundation in Basel“ › „Bases and Means“: Unsicher: „Bases“ → „hat just misses every camera. She recognises every lie within the first minute“ (nicht übernommen).
- „14 The Foundation in Basel“ › „Bases and Means“: Längerer Text im Band ohne Gegenstück („looks everyone in the eye first before she answers. She wants someone from the B…“), nicht übernommen.
- „14 The Foundation in Basel“ › „Bases and Means“: Unsicher, bleibt: „On the ground floor is accounting, on the first floor the director’s office, on the second the meeting room of the foundation board, in the basement the lead ar“ (Abgleich ergäbe „Accounting is on the ground floor, the directorate on the first floor the Foundation Board’s meeting room on the second the lead archive in the basement the lea“).
- „14 The Foundation in Basel“ › „Relationship to O.D.I.N.“: Unsicher, bleibt: „That the Foundation is right about many things, the Council does not want to hear.“ (Abgleich ergäbe „The Council does not want to hear that the Foundation is right about many things, the Council does not want to hear.“).
- „14 The Foundation in Basel“ › „Relationship to O.D.I.N.“: Unsicher, bleibt: „Or that an agent stays silent when the Hands come.“ (Abgleich ergäbe „Or for an agent to stay silent when the Hands come.“).
- „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“: Längerer Text im Band ohne Gegenstück („the border with a crystal in his luggage and is silent. The cell is to find the …“), nicht übernommen.
- „14 The Foundation in Basel“ › „The Plan: “No More Nexus Crystals”“: Unsicher, bleibt: „The Seeker reports that she hears more children no one takes.“ (Abgleich ergäbe „The Seeker reports that he hears more children whom no one takes.“).
- „14 The Foundation in Basel“ › „Hooks and Outlook“: Unsicher: „Hooks“ → „r pays the Evening a price that smooths everything over. Sign: A courier of the “ (nicht übernommen).
- „15 The Evening“ › „Overview“: Unsicher, bleibt: „“We do not sell answers.“ (Abgleich ergäbe „“We don’t sell answers.“).
- „15 The Evening“ › „History and Goals“: Unsicher: „History“ → „ster over to the Council, the Open Ones lose a skull,“ (nicht übernommen).
- „15 The Evening“ › „History and Goals“: Unsicher, bleibt: „1954 a closed auction takes place in Lisbon for the first time.“ (Abgleich ergäbe „1954 the first closed auction takes place in Lisbon for the first time.“).
- „15 The Evening“ › „Bases and Means“: Unsicher: „Bases“ → „only when there is no other way The Bidder with the Great Stone Bidder · Humans “ (nicht übernommen).
- „15 The Evening“ › „The Plan: “The Great Stone”“: Unsicher, bleibt: „☠☠○○○ In Dresden the bidder buys at auction the estate of a geologist.“ (Abgleich ergäbe „☠☠○○○ In Dresden the bidder acquires the estate of a geologist.“).
- „15 The Evening“ › „The Plan: “The Great Stone”“: Unsicher, bleibt: „In the excitement over the great stone, the Council leaves the Registry unobserved, and the Lodge gets closer to the page.“ (Abgleich ergäbe „In the excitement about the great stone, the Council leaves the Registry unobserved, and the Lodge gets closer to the page.“).
- „15 The Evening“ › „Hooks and Outlook“: Längerer Text im Band ohne Gegenstück („s it before the courier arrives. The curator prepares the access. In Genoa he me…“), nicht übernommen.
- „15 The Evening“ › „Adversaries“: Über eine Absatzgrenze: „Adversaries Stats for this adventure…“ → „nisers consider themselves neutral: they sell to anyone who pays and do not ask …“
- „15 The Evening“ › „Adversaries“: Längerer Text im Band ohne Gegenstück („game master: Elias Vinter, a Danish shipowner who has not attended public appoin…“), nicht übernommen.
- „15 The Evening“ › „Adversaries“: Unsicher: „Curator of“ → „Defence / Armour / HP 1 / 0 / 8 Skills Negotiation 5 + 4, Insight 4 + 3 Special “ (nicht übernommen).
- „15 The Evening“ › „Adversaries“: Über eine Absatzgrenze: „Evening Operator of Grey Meridian…“ → „cell names Weakness Whoever proves to him that the…“
- „16 Grey Meridian“ › „Key Figures“: Unsicher: „rhythm,“ → „beat in Antwerp in 2019,“ (nicht übernommen).
- „16 Grey Meridian“ › „Key Figures“: Unsicher, bleibt: „In 2019 in Antwerp she heard the rhythm, resigned and did not forget.“ (Abgleich ergäbe „She heard the rhythm, resigned and has not forgotten.“).
- „16 Grey Meridian“ › „Bases and Means“: Unsicher: „Bases“ → „rations Europe · Humans 44 years old, the man who carried the humming crate in 2“ (nicht übernommen).
- „16 Grey Meridian“ › „Bases and Means“: Längerer Text im Band ohne Gegenstück („smell of ozone, and that operators who ask too much are transferred. He is loyal…“), nicht übernommen.
- „16 Grey Meridian“ › „Grey Meridian in the Plans of Others“: Unsicher: „then in“ → „a skull is added one stage earlier on“ (nicht übernommen).
- „16 Grey Meridian“ › „Grey Meridian in the Plans of Others“: Unsicher: „a skull is added to“ → „for“ (nicht übernommen).
- „16 Grey Meridian“ › „Grey Meridian in the Plans of Others“: Unsicher, bleibt: „Grey Meridian in the Plans of Others“ (Abgleich ergäbe „Grey Meridian in Other Plans“).
- „16 Grey Meridian“ › „Grey Meridian in the Plans of Others“: Unsicher, bleibt: „If a team works for an organisation whose plan is currently running, then in the roll after the mission a skull is added to that plan one step earlier:“ (Abgleich ergäbe „If a team works for an organisation whose plan is currently running, then in the roll after the mission a skull is added to that plan:“).
- Gegner „Kantor“: Unsicher, bleibt: „he believes that Märta is alive, on the other side, and that she is the voice he has heard every night since 1971. He wants to answer her before he dies.“ (Abgleich ergäbe „he believes that Märta lives, on the other side, and that she is the voice he has heard every night since 1971. He wants to answer her before he dies.“).
- Gegner „Sister Elena“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- Gegner „Sister Elena“: Unsicher, bleibt: „She keeps quiet about the fact that she never lets Luca sleep, because she fears he might receive orders in his dreams that she does not know.“ (Abgleich ergäbe „She keeps quiet about the fact that she never lets Luca sleep, because she fears he might receive commands in his dreams that she does not know.“).
- Gegner „Dr. Joost Brandsma“: Unsicher, bleibt: „He speaks quietly, with long pauses, as if he were checking every sentence.“ (Abgleich ergäbe „He speaks quietly, with long pauses, as if checking every sentence.“).
- Gegner „Elaine Mercer“: Unsicher, bleibt: „Negotiates, threatens, withdraws when the price gets too high.“ (Abgleich ergäbe „Negotiates, threatens, withdraws when the price becomes too high.“).
- Gegner „Sam Ferris“: Unsicher, bleibt: „He carries a notebook containing everything he knows about the grey cargo, and he is afraid that someone will find it, and even more afraid that no one will eve“ (Abgleich ergäbe „He carries a notebook with him in which everything he knows about the grey freight is written, and he is afraid that someone will find it, and even more afraid “).
- Gegner „Sam Ferris“: Unsicher, bleibt: „Cautious, watchful.“ (Abgleich ergäbe „Cautious, observant.“).
- Gegner „The Returner“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- Gegner „The Returner“: Unsicher, bleibt: „He keeps quiet about the fact that he wakes up at night and does not know where he is.“ (Abgleich ergäbe „He keeps quiet about the fact that he wakes at night and does not know where he is.“).
- Gegner „The Returner“: Unsicher, bleibt: „His voice is flat and calm, as if he were talking about someone else.“ (Abgleich ergäbe „His voice is flat and calm, as if he were speaking about someone else.“).
- Gegner „The Returner“: Unsicher, bleibt: „Knows that there is a Seeker, but not who it is“ (Abgleich ergäbe „Knows there is a Seeker, but not who it is“).
- Gegner „The Returner“: Unsicher, bleibt: „Whoever proves to him that he is not chosen breaks his will“ (Abgleich ergäbe „Anyone who proves to him that he is not chosen breaks his will“).
- Gegner „The Member Who Knows the Ways“: Unsicher, bleibt: „The Member Who Knows the Ways“ (Abgleich ergäbe „The Member Who Knows Ways“).
- Gegner „The Member Who Knows the Ways“: Unsicher, bleibt: „He is neither a fighter nor a believer.“ (Abgleich ergäbe „He is not a fighter and not a believer.“).
- Gegner „The Member Who Knows the Ways“: Unsicher, bleibt: „Whoever offers him a better task can turn him.“ (Abgleich ergäbe „Anyone who offers him a better task can turn him.“).
- Gegner „The Member Who Knows the Ways“: Unsicher, bleibt: „He never sleeps twice in the same place.“ (Abgleich ergäbe „He never sleeps in the same place.“).
- Gegner „Maarten de Vries“: Unsicher, bleibt: „He speaks quietly, with long pauses, as if he were listening to someone.“ (Abgleich ergäbe „He speaks quietly, with long pauses, as if listening to someone.“).
- Gegner „Dr. Camille Favre“: Unsicher, bleibt: „Defends the laboratory, does not negotiate, calls security and hybrid dogs“ (Abgleich ergäbe „Defends the laboratory, does not negotiate, calls security forces and hybrid dogs“).
- Gegner „Milan Dvořák“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- Gegner „Milan Dvořák“: Unsicher: „is the only one who“ → „alone“ (nicht übernommen).
- Gegner „Milan Dvořák“: Unsicher, bleibt: „He keeps quiet about the fact that he sits alone in the carriage at night and waits for an answer that does not come.“ (Abgleich ergäbe „He keeps quiet about the fact that he sits alone in the wagon at night and waits for an answer that does not come.“).
- Gegner „Milan Dvořák“: Unsicher, bleibt: „His voice is quick and jittery, as if he had to say everything before the contact breaks off.“ (Abgleich ergäbe „His voice is quick and erratic, as if he must say everything before the contact breaks off.“).
- Gegner „Fatma Aydin“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- Gegner „Luca“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- Gegner „Luca“: Unsicher, bleibt: „His voice is quiet and halting, as if he were apologising for every word.“ (Abgleich ergäbe „His voice is quiet and halting, as if he apologises for every word.“).
- Gegner „Luca“: Unsicher, bleibt: „Reserved and fearful.“ (Abgleich ergäbe „Reserved and anxious.“).
- Gegner „Luca“: Unsicher, bleibt: „He follows Sister Elena because she is the only one who tells him he is not mad“ (Abgleich ergäbe „He follows Sister Elena because she is the only one who tells him that he is not mad“).
- Gegner „The Antiquarian“: Unsicher, bleibt: „He sings the song secretly when he is alone.“ (Abgleich ergäbe „He secretly sings the song when he is alone.“).
- Gegner „The Relative“: Längerer Text im Band ohne Gegenstück („the Singers because he is needed, not because he hears the song. Anyone who offe…“), nicht übernommen.
- Gegner „The Relative“: Unsicher, bleibt: „She talks fast, breathlessly, as if she had no time, and says “we” and means herself and her husband, although he is no longer there.“ (Abgleich ergäbe „She speaks quickly, breathlessly, as if she had no time, and says “we” and means herself and her husband, although he is no longer there.“).
- Gegner „The Relative“: Unsicher, bleibt: „She follows every trail that leads to a staircase, and she is prepared to lie, steal and put herself in danger for it.“ (Abgleich ergäbe „She follows every lead that points to a staircase, and she is willing to lie, steal and put herself in danger for it.“).
- Gegner „Hieronymus Falkenrath“: Unsicher, bleibt: „Holds audiences, confers initiations, sends followers to Brussels.“ (Abgleich ergäbe „Holds audiences, grants consecrations, sends followers to Brussels.“).
- Gegner „The Archivist“: Unsicher, bleibt: „Observes, takes notes, stays silent.“ (Abgleich ergäbe „Observes, notes, remains silent.“).
- Gegner „Dr. Larissa Orlowa“: Unsicher, bleibt: „She withdraws when the plan is endangered, and for that she sacrifices even her own people.“ (Abgleich ergäbe „She withdraws when the plan is endangered, even sacrificing her own people.“).
- Gegner „The Singer with a Name“: Unsicher, bleibt: „He watches, waits, accompanies.“ (Abgleich ergäbe „He observes, waits, accompanies.“).
- Gegner „The Singer with a Name“: Unsicher, bleibt: „If he is cornered, he sings, and whoever listens understands why he goes.“ (Abgleich ergäbe „If cornered, he sings, and anyone who listens understands why he goes.“).
- Gegner „Josef Hartl“: Unsicher: „keeps quiet about the fact“ → „conceals“ (nicht übernommen).
- Gegner „Josef Hartl“: Unsicher, bleibt: „He keeps quiet about the fact that he goes to the glassworks alone at night and lays the stone on his bare skin to feel the hum.“ (Abgleich ergäbe „He keeps quiet about the fact that he goes to the glassworks alone at night and lays the stone on bare skin to feel the hum.“).
- Gegner „Josef Hartl“: Unsicher, bleibt: „His voice is rough and quiet, as if he were talking to a sick animal.“ (Abgleich ergäbe „His voice is rough and quiet, as if speaking to a sick animal.“).
- Gegner „Josef Hartl“: Unsicher, bleibt: „Calm and firm.“ (Abgleich ergäbe „Calm and determined.“).
- Gegner „Brother Ludovico“: Unsicher, bleibt: „Watches, keeps silent, acts only when the archive is threatened“ (Abgleich ergäbe „Watches, remains silent, acts only when the archive is threatened“).
- Gegner „Hugo Marchetti, codename “Notar”“: Unsicher, bleibt: „The deal fell through, but the offer still stands.“ (Abgleich ergäbe „one. The deal fell through, but the offer still stands.“).
- Gegner „Hugo Marchetti, codename “Notar”“: Unsicher, bleibt: „Only fights when there is no other way“ (Abgleich ergäbe „Fights only when there is no other way“).
- Gegner „Dr. Arne Holm“: Unsicher, bleibt: „He leads the department for cell stability in Leiden.“ (Abgleich ergäbe „He heads the department for cell Stability department in Leiden.“).
- Gegner „Dr. Arne Holm“: Unsicher, bleibt: „He speaks tersely, precisely, with technical terms, and avoids eye contact.“ (Abgleich ergäbe „He speaks tersely, precisely, using technical terms, and avoids eye contact.“).
- Gegner „Dr. Arne Holm“: Unsicher, bleibt: „Observes, keeps silent, helps only when he is sure it is against the Voice“ (Abgleich ergäbe „Observes, remains silent, helps only when he is certain it is against the Voice“).
- Gegner „Raymond Cole“: Unsicher, bleibt: „He only attacks if the cell gets too close to Caleb Mercer“ (Abgleich ergäbe „He attacks only when the cell gets too close to Caleb Mercer“).
- Gegner „Don Matteo Riva“: Unsicher, bleibt: „He is no fighter, but he is ready to risk everything.“ (Abgleich ergäbe „He is not a fighter, but he is ready to risk everything.“).
- Gegner „Don Matteo Riva“: Unsicher, bleibt: „Pushes, talks, looks for allies.“ (Abgleich ergäbe „Pushes, talks, seeks allies.“).
- Gegner „Georg Wendlinger“: Längerer Text im Band ohne Gegenstück („nearby. Maarten de Vries Adept of the Enlightened · Humans Pale, unshaven, dark …“), nicht übernommen.
- Gegner „Georg Wendlinger“: Längerer Text im Band ohne Gegenstück („sealed. Value Details Weakness Proof that the ritual lies to him. A Negotiator w…“), nicht übernommen.
- Gegner „Georg Wendlinger“: Unsicher, bleibt: „He speaks dryly and officially, in file numbers and memos, and never says more than he has to.“ (Abgleich ergäbe „He speaks dryly and officially, in file references and memos, and never says more than he has to.“).
- Gegner „Renate Albers, called Elster“: Unsicher: „go“ → „take the cell with her“ (nicht übernommen).
- Gegner „Renate Albers, called Elster“: Längerer Text im Band ohne Gegenstück („Viktor Brunner, called Martin Kessler Hand in Field Service · Humans Sixty-one, …“), nicht übernommen.
- Gegner „Renate Albers, called Elster“: Längerer Text im Band ohne Gegenstück („Foundation for twelve years. She liked Kessler, the first one, and she wants to …“), nicht übernommen.
- Gegner „Renate Albers, called Elster“: Unsicher, bleibt: „She conceals that she left the photo from the summer party lying there on purpose.“ (Abgleich ergäbe „She conceals that she deliberately left the photograph from the summer party lying there on purpose.“).
- Gegner „Stahl (Grzegorz Wolski, Number Twelve)“: Längerer Text im Band ohne Gegenstück („opponent. The Vanished One (Dariusz Zieliński, codename “Hiob”) Transformed · Tr…“), nicht übernommen.
- Gegner „Stahl (Grzegorz Wolski, Number Twelve)“: Unsicher, bleibt: „He talks calmly, kindly, with a delay, as if he had to translate every feeling.“ (Abgleich ergäbe „He speaks calmly, kindly, with a delay, as if he had to translate every feeling.“).
- Gegner „Stahl (Grzegorz Wolski, Number Twelve)“: Unsicher, bleibt: „Adaptive Armour, Berserker Protocol, Last Cell (see class book Soldier).“ (Abgleich ergäbe „Adaptive Armour, Berserker Protocol, Last Cell (see Soldier class book).“).
- Gegner „Dr. Cornelius Weber“: Unsicher, bleibt: „The legend is so good that in the lodge Weber is regarded as a quiet, reliable brother who rarely speaks and listens well.“ (Abgleich ergäbe „The cover story is so good that Weber is regarded in the lodge Weber is regarded as a quiet, reliable brother who rarely speaks and listens well.“).
- Gegner „Dr. Cornelius Weber“: Unsicher, bleibt: „The Grey File “The Second Light” itself came about through an observer in Brussels who intercepted the missing-person reports of the Belgian police, because on “ (Abgleich ergäbe „The Grey File “The Second Light” itself came about through an observer in Brussels who intercepted the missing persons reports of the Belgian police, because a “).
- Gegner „Dr. Cornelius Weber“: Unsicher, bleibt: „Knows the Lodge of the Closed Eye, its rituals, its members.“ (Abgleich ergäbe „Knows the Lodge of the Sealed Eye, its rituals, its members.“).
- Gegner „Dr. Cornelius Weber“: Unsicher, bleibt: „His legend is so good that in the lodge he is regarded as a quiet brother who rarely speaks“ (Abgleich ergäbe „His cover story is so good that he is regarded in the lodge he is regarded as a quiet brother who rarely speaks“).
- Gegner „Mr Leuenberger“: Unsicher, bleibt: „Negotiates, delays, makes offers.“ (Abgleich ergäbe „Negotiates, delays, offers.“).
- Gegner „Mr Leuenberger“: Unsicher, bleibt: „If the cell forces its way into the Foundation, he stands in its way, politely and without fear“ (Abgleich ergäbe „If the cell breaks into the Foundation, he stands in their way, polite and without fear“).
- Gegner „Nadia El-Khoury“: Unsicher, bleibt: „She speaks fast, with lots of English words, and interrupts others.“ (Abgleich ergäbe „She speaks quickly, with many English words, and interrupts others.“).
- Gegner „The Bidder with the Great Stone“: Unsicher: „for.“ → „Value Details Initiative 2 Attack“ (nicht übernommen).
- Gegner „The Bidder with the Great Stone“: Unsicher, bleibt: „He speaks slowly, with the patience of a man who has always been waited for.“ (Abgleich ergäbe „He speaks slowly, with the patience of a person for whom one has always waited. for.“).
- Gegner „Monsignore Emilio Vasari“: Unsicher, bleibt: „Waits, examines, keeps silent.“ (Abgleich ergäbe „Waits, tests, remains silent.“).
- Gegner „Monsignore Emilio Vasari“: Unsicher, bleibt: „Talks only to someone who brings him proof that they deserve it“ (Abgleich ergäbe „Speaks only to someone who brings him proof that they deserve it“).
