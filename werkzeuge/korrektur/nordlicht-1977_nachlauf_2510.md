# Korrekturvorschläge: Nordlicht 1977 (Nachlauf 2510)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege nordlicht-1977 --nachlauf=2510` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `nordlicht-1977.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden nordlicht-1977` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden nordlicht-1977 --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_18_Nordlicht_1977 (Seiten 189, Prüfsumme f61d42e0940c), ODIN_18_Nordlicht_1977_Handouts (Seiten 54, Prüfsumme b10c8d1dadc4).

Journalseiten 243, Sätze 7199, davon gleich 7173, im Band nicht gefunden 15 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 3 (sicher 2). Als Fehltreffer aussortiert: Spaltenumbruch 3, Nachbartext 5.
Gegner 31 mit 209 Zeilen, gleich 209; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### NL-de-3ede53 · „Abschnitt II: Das Silber (1955 bis 1961)“ › „Zwischenjahre“ · Band S. 108 · sicher
Freigabe: offen

- alt: Die Zwischenjahre bis 1968 reichen in den Abschnitt III hinein.
- neu: Die Zwischenjahre 1962 bis 1968 reichen in den Abschnitt III hinein.
- Änderung: «(nichts)» → «1962»
<!-- daten: {"art":"satz","fundstellen":[["Abschnitt II: Das Silber (1955 bis 1961)","Zwischenjahre"]]} -->

#### NL-de-655030 · „Einsatz 11: Sieben“ › „Die Knoten“ · Band S. 130 · sicher
Freigabe: offen

- alt: 1974, Lagos: Yemi Adebayo stirbt, Ruth Adeyemi übernimmt mit einunddreißig Jahren Hort-6.
- neu: 1974, Lagos: Yemi Adebayo stirbt bei einem Einsatz vor Cotonou, Ruth Adeyemi übernimmt mit einunddreißig Jahren Hort-6.
- Änderung: «stirbt,» → «stirbt bei einem Einsatz vor Cotonou,»
<!-- daten: {"art":"satz","fundstellen":[["Einsatz 11: Sieben","Die Knoten"]]} -->

#### NL-de-42d7b3 · „Anhang A: Sechs fertige Agenten“ › „Dilys Vaughan, „Schiefer““ · Band S. 177 · prüfen
Freigabe: offen

- alt: Der andere Thaumaturg zieht den Bannkreis, bleibt darin, antwortet dem Ding und geht durch den Fels wie durch Nebel.
- neu: Der andere Thaumaturg zieht einen Kreis, der kein Bannkreis ist, bleibt darin, antwortet dem Ding und geht durch den Fels wie durch Nebel.
- Änderung: «den Bannkreis,» → «einen Kreis, der kein Bannkreis ist,»
- Hinweis: „neu“ von Hand nachgebessert: Das Werkzeug hatte „zieht den Kreis, antwortet …“ aus dem Absatz „Fäden“ derselben Figur gelesen. Band S. 177 und Writer (b): „zieht einen Kreis, der kein Bannkreis ist, bleibt darin, …“.
<!-- daten: {"art":"satz","fundstellen":[["Anhang A: Sechs fertige Agenten","Dilys Vaughan, „Schiefer“"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### NL-de-w01 · „Einsatz 11: Sieben“ › „Gegner“ · Band S. 133 · Writer (a), prüfen
Freigabe: offen

- alt: oder Nahkampf 4 + 3, Schaden 3
- neu: oder Pistole 4 + 3, Schaden 3
- Änderung: «Nahkampf» → «Pistole»
- Hinweis: Weicht vom Band ab: Im Band vom 25.10. (S. 133) haben die Jäger der Abteilung 13 in Einsatz 11 „AKM mit Schalldämpfer 4 + 4, Schaden 4, Leise, oder Nahkampf 4 + 3, Schaden 3“ und 3 / 3 / 12; „Pistole 4 + 3“ steht dort nur bei Orlowas Vater. In Realm schon von Hand so geändert. Bitte mit dem Writer klären; die Gegenvorschläge aus dem Band sind w02 und w03.
- Hinweis: Betrifft nur die Tabelle auf der Seite „Gegner“ in Einsatz 11 (auch im Abenteuerpaket). Der Gegner „Jäger der Abteilung 13“ im Kompendium bleibt wie im Band (Nahkampf).
<!-- daten: {"art":"satz","fundstellen":[["Einsatz 11: Sieben","Gegner"]],"hand":true} -->

#### NL-de-w02 · „Einsatz 11: Sieben“ › „Gegner“ · Band S. 133 · aus dem Band, nicht vom Writer, prüfen
Freigabe: offen

- alt: Sturmgewehr 4 + 4, Schaden 4, oder Nahkampf 4 + 3, Schaden 3
- neu: AKM mit Schalldämpfer 4 + 4, Schaden 4, Leise, oder Nahkampf 4 + 3, Schaden 3
- Änderung: «Sturmgewehr» → «AKM mit Schalldämpfer»; «(nichts)» → «Leise,»
- Hinweis: Nicht vom Writer: Der Werteblock der Jäger in Einsatz 11 lautet im Band so (wie der Gegner im Kompendium). Gegenvorschlag zu w01, nur eines von beiden auf „ja“ setzen (nach w01 findet w02 seine Stelle nicht mehr).
<!-- daten: {"art":"satz","fundstellen":[["Einsatz 11: Sieben","Gegner"]],"hand":true} -->

#### NL-de-w03 · „Einsatz 11: Sieben“ › „Gegner“ · Band S. 133 · aus dem Band, nicht vom Writer, prüfen
Freigabe: offen

- alt: 3 / 2 / 12
- neu: 3 / 3 / 12
- Änderung: «2» → «3»
- Hinweis: Nicht vom Writer: Rüstung der Jäger in Einsatz 11 im Band 3, in Foundry 2 (Zeile Verteidigung / Rüstung / LP). Der Wert steht auf der Seite nur einmal.
<!-- daten: {"art":"satz","fundstellen":[["Einsatz 11: Sieben","Gegner"]],"hand":true} -->

#### NL-de-w04 · odin-agenten › „Schiefer (1947)“ (1 Stelle) · Band S. 177 · Writer (b), prüfen
Freigabe: offen

- alt: zieht den Bannkreis
- neu: zieht einen Kreis, der kein Bannkreis ist
- Änderung: «den» → «einen Kreis, der kein»; «(nichts)» → «ist»
- Hinweis: Lebenslauf des fertigen Agenten, derselbe Satz wie in Anhang A (NL-de-42d7b3).
<!-- daten: {"art":"begriff","pack":"odin-agenten","key":"!actors!U00pyOa4SkewUcax","hand":true} -->

#### NL-de-w05 · odin-agenten › „Schiefer (1977)“ (1 Stelle) · Band S. 177 · Writer (b), prüfen
Freigabe: offen

- alt: zieht den Bannkreis
- neu: zieht einen Kreis, der kein Bannkreis ist
- Änderung: «den» → «einen Kreis, der kein»; «(nichts)» → «ist»
- Hinweis: Lebenslauf des fertigen Agenten, derselbe Satz wie in Anhang A (NL-de-42d7b3).
<!-- daten: {"art":"begriff","pack":"odin-agenten","key":"!actors!ZIatbC4f10yeDpln","hand":true} -->

#### NL-de-w06 · odin-abenteuerpakete › „Nordlicht 1977“ (3 Stellen) · Band S. 177 · Writer (b), prüfen
Freigabe: offen

- alt: zieht den Bannkreis
- neu: zieht einen Kreis, der kein Bannkreis ist
- Änderung: «den» → «einen Kreis, der kein»; «(nichts)» → «ist»
- Hinweis: Abenteuerpaket Nordlicht 1977: ersetzt jede Stelle im Paket (Journal in Anhang A und die beiden Agenten Schiefer 1947 und 1977).
<!-- daten: {"art":"begriff","pack":"odin-abenteuerpakete","key":"!adventures!OehWSfxdZTt5JePH","hand":true} -->

#### NL-de-w07 · „Abschnitt II: Das Silber (1955 bis 1961)“ › „Zwischenjahre“ · Band S. 108 · Writer (c), prüfen
Freigabe: offen

- alt: Ihre vollen 20 EP werden dort vergeben.
- neu: Ihre EP stecken in den 20 EP, die Abschnitt III einmal für alle Zwischenjahre bis 1975 vergibt.
- Änderung: «vollen» → «EP stecken in den»; «EP werden dort vergeben.» → «EP, die Abschnitt III einmal für alle Zwischenjahre bis 1975 vergibt.»
- Hinweis: Zweiter Satz der Stelle (c); den ersten ändert NL-de-3ede53. Beide zusammen ergeben genau den Wortlaut des Writers.
<!-- daten: {"art":"satz","fundstellen":[["Abschnitt II: Das Silber (1955 bis 1961)","Zwischenjahre"]],"hand":true} -->

#### NL-de-w08 · „Kapitel 4: Die Figuren der Zeit“ › „Weitere Figuren“ · Band S. 31 · Writer (e), prüfen
Freigabe: offen

- alt: Hort-6 Lagos, stirbt 1974
- neu: Hort-6 Lagos, stirbt 1974 vor Cotonou
- Änderung: «(nichts)» → «vor Cotonou»
- Hinweis: Figurentabelle; die Zeittafel ändert NL-de-655030.
<!-- daten: {"art":"satz","fundstellen":[["Kapitel 4: Die Figuren der Zeit","Weitere Figuren"]],"hand":true} -->

## Englisch

Bände: ODIN_EN_18_Nordlicht_1977 (Seiten 187, Prüfsumme 4560c37be80a), ODIN_EN_18_Nordlicht_1977_Handouts (Seiten 54, Prüfsumme 7b19badb7e34).

Journalseiten 243, Sätze 7008, davon gleich 6983, im Band nicht gefunden 8 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 8 (sicher 8). Als Fehltreffer aussortiert: Nachbartext 5, Spaltenumbruch 4, Schreibweise 3.
Gegner 31 mit 219 Zeilen, gleich 219; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Journalsätze

#### NL-en-235a81 · „Chapter 3: Era Rules“ › „Technology by Decade“ · Band S. 17 · sicher
Freigabe: offen

- alt: Energy and plasma weapons, laptop, satellite telephone, foldable drone, EMP, nanites, implants, neural amplifiers of today’s kind, mental scanners.
- neu: Energy and plasma weapons, laptop, satellite phone, foldable drone, EMP, nanites, implants, neural amplifiers of today’s kind, mental scanners.
- Änderung: «telephone,» → «phone,»
<!-- daten: {"art":"satz","fundstellen":[["Chapter 3: Era Rules","Technology by Decade"]]} -->

#### NL-en-d8f3aa · „Chapter 3: Era Rules“ › „Core Rulebook and Arsenal“ · Band S. 17 · sicher
Freigabe: offen

- alt: Energy and plasma weapons, laptop, satellite phone, folding drone, EMP, nanites, implants, neural amplifiers of the current kind and mental scanners never appear in this volume.
- neu: Energy and plasma weapons, laptop, satellite phone, foldable drone, EMP, nanites, implants, neural amplifiers of the current kind and mental scanners never appear in this volume.
- Änderung: «folding» → «foldable»
<!-- daten: {"art":"satz","fundstellen":[["Chapter 3: Era Rules","Core Rulebook and Arsenal"]]} -->

#### NL-en-2a7b07 · „Chapter 4: The Figures of the Era“ › „Further Figures“ · Band S. 31 · sicher
Freigabe: offen

- alt: Yemi Adebayo Hold-6 Lagos, dies in 1974 11
- neu: Yemi Adebayo Hold-6 Lagos, dies off Cotonou in 1974 11
- Änderung: «(nichts)» → «off Cotonou»
<!-- daten: {"art":"satz","fundstellen":[["Chapter 4: The Figures of the Era","Further Figures"]]} -->

#### NL-en-0c943b · „Mission 2: Silence“ › „The Confrontation“ · Band S. 45 · sicher
Freigabe: offen

- alt: Inside lies the leather hood with 14 grey plates.
- neu: Inside lies the leather cap with 14 grey plates.
- Änderung: «hood» → «cap»
<!-- daten: {"art":"satz","fundstellen":[["Mission 2: Silence","The Confrontation"]]} -->

#### NL-en-e064a9 · „Mission 3: Death and Life“ › „The Confrontation“ · Band S. 57 · sicher
Freigabe: offen

- alt: Clues to it lie in Node 3 and Node 4: the school exercise book in the cobbler’s hallway (Node 3) and the baptism card in the grandmother’s prayer book (Node 4).
- neu: Clues to it lie in Node 3 and Node 4: the school exercise book in the cobbler’s hallway (Node 3) and the christening card in the grandmother’s prayer book (Node 4).
- Änderung: «baptism» → «christening»
<!-- daten: {"art":"satz","fundstellen":[["Mission 3: Death and Life","The Confrontation"]]} -->

#### NL-en-17344a · „Section II: The Silver (1955 to 1961)“ › „Interlude Years“ · Band S. 106 · sicher
Freigabe: offen

- alt: The interlude years up to 1968 extend into Section III.
- neu: The interlude years 1962 to 1968 extend into Section III.
- Änderung: «up» → «1962»
<!-- daten: {"art":"satz","fundstellen":[["Section II: The Silver (1955 to 1961)","Interlude Years"]]} -->

#### NL-en-c31596 · „Mission 11: Seven“ › „The Nodes“ · Band S. 127 · sicher
Freigabe: offen

- alt: 1974, Lagos: Yemi Adebayo dies, and Ruth Adeyemi takes over Hold-6 at the age of thirty-one.
- neu: 1974, Lagos: Yemi Adebayo dies on a mission off Cotonou, and Ruth Adeyemi takes over Hold-6 at the age of thirty-one.
- Änderung: «dies,» → «dies on a mission off Cotonou,»
<!-- daten: {"art":"satz","fundstellen":[["Mission 11: Seven","The Nodes"]]} -->

#### NL-en-e06b91 · „Appendix A: Six Ready-Made Agents“ › „Dilys Vaughan, “Schiefer”“ · Band S. 174 · sicher
Freigabe: offen

- alt: The other Thaumaturge draws the warding circle, remains inside it, answers the thing and walks through the rock as through mist.
- neu: The other Thaumaturge draws a circle that is not a warding circle, remains inside it, answers the thing and walks through the rock as through mist.
- Änderung: «the» → «a circle that is not a»
<!-- daten: {"art":"satz","fundstellen":[["Appendix A: Six Ready-Made Agents","Dilys Vaughan, “Schiefer”"]]} -->

### Von Hand ergänzt

Stellen, die der Satzvergleich nicht findet (Angaben des Writers, mit dem Band abgeglichen). Ein neuer Lauf lässt sie stehen.

#### NL-en-w01 · „Mission 11: Seven“ › „Opponents“ · Band S. 130 · Writer (a), prüfen
Freigabe: offen

- alt: or melee 4 + 3
- neu: or pistol 4 + 3
- Änderung: «melee» → «pistol»
- Hinweis: Weicht vom Band ab: Im Band vom 25.10. (S. 130) haben die Hunters of Department 13 in Mission 11 „AKM with suppressor 4 + 4, damage 4, Quiet, or melee 4 + 3, damage 3“ und 3 / 3 / 12; „pistol 4 + 3“ steht dort nur bei Orlowa’s father. In Realm schon von Hand so geändert. Bitte mit dem Writer klären; die Gegenvorschläge aus dem Band sind w02 und w03.
- Hinweis: Betrifft nur die Tabelle auf der Seite „Opponents“ in Mission 11 (auch im Abenteuerpaket). Der Gegner „Hunters of Department 13“ im Kompendium bleibt wie im Band (melee).
<!-- daten: {"art":"satz","fundstellen":[["Mission 11: Seven","Opponents"]],"hand":true} -->

#### NL-en-w02 · „Mission 11: Seven“ › „Opponents“ · Band S. 130 · aus dem Band, nicht vom Writer, prüfen
Freigabe: offen

- alt: Assault rifle 4 + 4, damage 4, or melee 4 + 3, damage 3
- neu: AKM with suppressor 4 + 4, damage 4, Quiet, or melee 4 + 3, damage 3
- Änderung: «Assault rifle» → «AKM with suppressor»; «(nichts)» → «Quiet,»
- Hinweis: Nicht vom Writer: Der Werteblock der Hunters in Mission 11 lautet im Band so (wie der Gegner im Kompendium). Gegenvorschlag zu w01, nur eines von beiden auf „ja“ setzen (nach w01 findet w02 seine Stelle nicht mehr).
<!-- daten: {"art":"satz","fundstellen":[["Mission 11: Seven","Opponents"]],"hand":true} -->

#### NL-en-w03 · „Mission 11: Seven“ › „Opponents“ · Band S. 130 · aus dem Band, nicht vom Writer, prüfen
Freigabe: offen

- alt: 3 / 2 / 12
- neu: 3 / 3 / 12
- Änderung: «2» → «3»
- Hinweis: Nicht vom Writer: Armour der Hunters in Mission 11 im Band 3, in Foundry 2. Der Wert steht auf der Seite nur einmal.
<!-- daten: {"art":"satz","fundstellen":[["Mission 11: Seven","Opponents"]],"hand":true} -->

#### NL-en-w04 · odin-agenten-en › „Schiefer (1947)“ (1 Stelle) · Band S. 174 · Writer (b), prüfen
Freigabe: offen

- alt: draws the warding circle
- neu: draws a circle that is not a warding circle
- Änderung: «the» → «a circle that is not a»
- Hinweis: Lebenslauf des fertigen Agenten, derselbe Satz wie in Appendix A (NL-en-e06b91).
<!-- daten: {"art":"begriff","pack":"odin-agenten-en","key":"!actors!7p0uenO7ndMwcr1h","hand":true} -->

#### NL-en-w05 · odin-agenten-en › „Schiefer (1977)“ (1 Stelle) · Band S. 174 · Writer (b), prüfen
Freigabe: offen

- alt: draws the warding circle
- neu: draws a circle that is not a warding circle
- Änderung: «the» → «a circle that is not a»
- Hinweis: Lebenslauf des fertigen Agenten, derselbe Satz wie in Appendix A (NL-en-e06b91).
<!-- daten: {"art":"begriff","pack":"odin-agenten-en","key":"!actors!U0kxaB4LivRf68NA","hand":true} -->

#### NL-en-w06 · odin-abenteuerpakete-en › „Nordlicht 1977“ (3 Stellen) · Band S. 174 · Writer (b), prüfen
Freigabe: offen

- alt: draws the warding circle
- neu: draws a circle that is not a warding circle
- Änderung: «the» → «a circle that is not a»
- Hinweis: Abenteuerpaket Nordlicht 1977: ersetzt jede Stelle im Paket (Journal in Appendix A und die beiden Agenten Schiefer 1947 und 1977).
<!-- daten: {"art":"begriff","pack":"odin-abenteuerpakete-en","key":"!adventures!i7gkbij9TajX16HC","hand":true} -->

#### NL-en-w07 · „Section II: The Silver (1955 to 1961)“ › „Interlude Years“ · Band S. 106 · Writer (c), prüfen
Freigabe: offen

- alt: Their full 20 XP are awarded there.
- neu: Their XP are part of the 20 XP that Section III awards once for all interlude years up to 1975.
- Änderung: «full» → «XP are part of the»; «are awarded there.» → «that Section III awards once for all interlude years up to 1975.»
- Hinweis: Zweiter Satz der Stelle (c); den ersten ändert NL-en-17344a. Beide zusammen ergeben genau den Wortlaut des Writers.
<!-- daten: {"art":"satz","fundstellen":[["Section II: The Silver (1955 to 1961)","Interlude Years"]],"hand":true} -->

#### NL-en-w08 · „Appendix A: Six Ready-Made Agents“ › „Ilga Ozola, “Möwe”“ · Band S. 173 · Writer (d), prüfen
Freigabe: offen

- alt: Mind Reading, Emotional Manipulation, Mental Barrier
- neu: Thought Reading, Emotional Manipulation, Mental Barrier
- Änderung: «Mind» → «Thought»
- Hinweis: Steht in der Tabelle zweimal (1947 und 1977), beide Stellen werden geändert.
<!-- daten: {"art":"satz","fundstellen":[["Appendix A: Six Ready-Made Agents","Ilga Ozola, “Möwe”"]],"hand":true} -->

#### NL-en-w09 · odin-agenten-en › „Möwe (1947)“ (1 Stelle) · Band S. 173 · Writer (d), prüfen
Freigabe: offen

- alt: Mind Reading, Emotional Manipulation, Mental Barrier
- neu: Thought Reading, Emotional Manipulation, Mental Barrier
- Änderung: «Mind» → «Thought»
- Hinweis: Fertiger Agent Möwe (1947), Zeile „Special abilities per book“.
<!-- daten: {"art":"begriff","pack":"odin-agenten-en","key":"!actors!AxNbZbtTqkwJXzfz","hand":true} -->

#### NL-en-w10 · odin-agenten-en › „Möwe (1977)“ (1 Stelle) · Band S. 173 · Writer (d), prüfen
Freigabe: offen

- alt: Mind Reading, Emotional Manipulation, Mental Barrier
- neu: Thought Reading, Emotional Manipulation, Mental Barrier
- Änderung: «Mind» → «Thought»
- Hinweis: Fertiger Agent Möwe (1977), Zeile „Special abilities per book“.
<!-- daten: {"art":"begriff","pack":"odin-agenten-en","key":"!actors!jFtgE77IyZ5avfDx","hand":true} -->

#### NL-en-w11 · odin-abenteuerpakete-en › „Nordlicht 1977“ (4 Stellen) · Band S. 173 · Writer (d), prüfen
Freigabe: offen

- alt: Mind Reading, Emotional Manipulation, Mental Barrier
- neu: Thought Reading, Emotional Manipulation, Mental Barrier
- Änderung: «Mind» → «Thought»
- Hinweis: Abenteuerpaket Nordlicht 1977: ersetzt jede Stelle im Paket (Journal in Appendix A und die beiden Agenten Möwe).
<!-- daten: {"art":"begriff","pack":"odin-abenteuerpakete-en","key":"!adventures!i7gkbij9TajX16HC","hand":true} -->
