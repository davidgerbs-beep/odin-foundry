# Korrekturvorschläge: Schattenoffiziere (Kräfte, Zauber, Ausrüstung)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege schattenoffiziere` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
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

Gegenstände mit Namen im Band 81, Sätze 208, davon gleich 60, im Band nicht gefunden 141 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 6 (sicher 2). Als Fehltreffer aussortiert: Spaltenumbruch 1.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Kräfte, Zauber, Ausrüstung

#### SO-de-8f4c61 · odin-kraefte › „Massenmanipulation“ · Band S. 18 · sicher
Freigabe: ja

- alt: Der Psion erleidet danach 2 Belastung.
- neu: Der Psion erleidet 1 Belastung.
- Änderung: «danach 2» → «1»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Massenmanipulation"]]} -->

#### SO-de-4e47f6 · odin-kraefte › „Schwerer Griff“ · Band S. 19 · sicher
Freigabe: ja

- alt: Er bewegt sie 5 m pro Runde oder wirft sie einmal: Angriff gegen die Verteidigung, Schaden 5 + Überschuss, Durchschlag 1.
- neu: Er bewegt sie 5 m pro Runde oder wirft sie einmal: Angriff mit den Erfolgen der Kraftprobe gegen die Verteidigung, Schaden 5 + Überschuss, Durchschlag 1.
- Änderung: «(nichts)» → «mit den Erfolgen der Kraftprobe»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Schwerer Griff"]]} -->

#### SO-de-ccd300 · odin-zauber › „Blitzschlag“ · Band S. 19 · prüfen, umformuliert
Freigabe: nein

- alt: Angriff gegen die Verteidigung.
- neu: Angriff mit den Erfolgen der Kraftprobe gegen die Verteidigung.
- Änderung: «(nichts)» → «mit den Erfolgen der Kraftprobe»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Blitzschlag"]]} -->

#### SO-de-896360 · odin-zauber › „Sturmruf“ · Band S. 19 · prüfen
Freigabe: nein

- alt: Angriff mit den Erfolgen der Zauberprobe, Schaden 3 + Überschuss.
- neu: Angriff mit den Erfolgen der Kraftprobe gegen die Verteidigung, Schaden 5 + Überschuss.
- Änderung: «Zauberprobe,» → «Kraftprobe gegen die Verteidigung,»; «3» → «5»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Sturmruf"]]} -->

#### SO-de-429094 · odin-zauber › „Siegelschrift“ · Band S. 24 · prüfen
Freigabe: ja

- alt: Wer das Siegel mit Gewalt oder Magie bricht, braucht eine Probe gegen Sehr schwer (4), und der Thaumaturg spürt den Bruch, wo immer er ist.
- neu: Wer das Siegel mit Gewalt oder Magie bricht, braucht eine Probe gegen Sehr schwer (4), mit Gewalt auf ST + Athletik, mit Magie auf das Attribut des Zaubers und Thaumaturgie, und der Thaumaturg spürt den Bruch, wo immer er ist.
- Änderung: «(nichts)» → «mit Gewalt auf ST + Athletik, mit Magie auf das Attribut des Zaubers und Thaumaturgie,»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Siegelschrift"]]} -->

#### SO-de-6a389c · odin-zauber › „Wachpakt“ · Band S. 27 · prüfen
Freigabe: ja

- alt: Der Pakt erzeugt eine Schuld (Regel „Schulden“, Klassenbuch Thaumaturg, Kapitel XI).
- neu: Der Pakt erzeugt eine Schuld.
- Änderung: «Der Pakt erzeugt» → «Beide Zauber erzeugen»; «(nichts)» → «Schuld, und diese»; «(Regel „Schulden“,» → «folgt der Regel „Schulden“ im»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Wachpakt"]]} -->

## Englisch

Bände: ODIN_EN_19_Shadow_Officers (Seiten 80, Prüfsumme f55408678ed6).

Gegenstände mit Namen im Band 72, Sätze 171, davon gleich 31, im Band nicht gefunden 113 (umgeschrieben, gestrichen oder nur in Foundry).
Vorschläge zu Sätzen: 26 (sicher 18). Als Fehltreffer aussortiert: keine.
Gegner 0 mit 0 Zeilen, gleich 0; Vorschläge 0.
Hinweise ohne Vorschlag: 0.

### Kräfte, Zauber, Ausrüstung

#### SO-en-fed01b · odin-zauber-en › „The Great Circle“; odin-zauber-en › „Seal Script“ · Band S. 2 · prüfen, umformuliert
Freigabe: nein

- alt: School spell of the Thaumaturgists.
- neu: School Spells . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21 What a School Guards . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22 The Thaumaturgists.
- Änderung: «spell of the» → «Spells . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21 What a School Guards . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22 The»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","The Great Circle"],["zauber","Seal Script"]]} -->

#### SO-en-8455c6 · odin-kraefte-en › „Deep Healing“ · Band S. 17 · sicher
Freigabe: ja

- alt: Margin 2: The target also removes 1 strain.
- neu: Margin 2: The target also reduces 1 strain.
- Änderung: «removes» → «reduces»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Deep Healing"]]} -->

#### SO-en-e31821 · odin-kraefte-en › „Life Bond“ · Band S. 17 · sicher
Freigabe: ja

- alt: If one of them suffers damage, he may distribute it among the other bound characters as he chooses, in whole points.
- neu: If one of them suffers damage, they may distribute it among the other bound characters as they choose, in whole points.
- Änderung: «he» → «they»; «he chooses,» → «they choose,»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Life Bond"]]} -->

#### SO-en-be592f · odin-kraefte-en › „Heavy Grip“ · Band S. 17 · prüfen
Freigabe: ja

- alt: He moves it 5 m per round or throws it once: attack against defence, damage 5 + margin, penetration 1.
- neu: They move it 5 m per round or throw it once: attack with the successes of the power test against defence, damage 5 + margin, Penetration 1.
- Änderung: «He moves» → «They move»; «throws» → «throw»; «(nichts)» → «with the successes of the power test»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Heavy Grip"]]} -->

#### SO-en-e48d12 · odin-kraefte-en › „Inner Interrogation“ · Band S. 17 · sicher
Freigabe: ja

- alt: The psion asks up to three questions, and the target answers truthfully in thought, as well as it knows the answer.
- neu: The Psion asks up to three questions, and the target answers truthfully in thought, as far as they know the answer.
- Änderung: «well» → «far»; «it knows» → «they know»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Inner Interrogation"]]} -->

#### SO-en-29393f · odin-kraefte-en › „Inner Interrogation“ · Band S. 17 · sicher
Freigabe: ja

- alt: Afterwards it remembers a conversation, not the questions.
- neu: Afterwards they remember a conversation, not the questions.
- Änderung: «it remembers» → «they remember»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Inner Interrogation"]]} -->

#### SO-en-f09732 · odin-zauber-en › „Storm Call“ · Band S. 17 · prüfen
Freigabe: nein

- alt: Attack with the successes of the spell test, damage 3 + margin.
- neu: Attack with the successes of the power test against defence, damage 5 + margin.
- Änderung: «spell test,» → «power test against defence,»; «3» → «5»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Storm Call"]]} -->

#### SO-en-78a29b · odin-kraefte-en › „Silent Fortress“ · Band S. 18 · prüfen
Freigabe: ja

- alt: Until the end of the scene he does not have to make horror tests, and no power or spell can take over or read his mind.
- neu: Until the end of the scene they do not have to make horror tests, and no power and no spell can take over or read their mind.
- Änderung: «he does» → «they do»; «or» → «and no»; «his» → «their»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Silent Fortress"]]} -->

#### SO-en-859276 · odin-kraefte-en › „Silent Fortress“ · Band S. 18 · sicher
Freigabe: ja

- alt: At the end of the scene everything catches up with him: he makes all missed horror tests in the same round.
- neu: At the end of the scene everything catches up with them: they make all the missed horror tests in the same round.
- Änderung: «him: he makes» → «them: they make»; «(nichts)» → «the»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Silent Fortress"]]} -->

#### SO-en-a57c96 · odin-kraefte-en › „Rock Wall“ · Band S. 18 · sicher
Freigabe: ja

- alt: A wall grows out of earth, stone or asphalt, up to 10 m long and 3 m high.
- neu: A wall grows out of earth, stone or tarmac, up to 10 m long and 3 m high.
- Änderung: «asphalt,» → «tarmac,»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Rock Wall"]]} -->

#### SO-en-0958b9 · odin-kraefte-en › „Rock Wall“ · Band S. 18 · sicher
Freigabe: ja

- alt: It stops bullets and absorbs 15 damage before it is breached.
- neu: It stops bullets and absorbs 15 damage before a breach opens.
- Änderung: «it is breached.» → «a breach opens.»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Rock Wall"]]} -->

#### SO-en-012ae0 · odin-kraefte-en › „Rock Wall“ · Band S. 18 · sicher
Freigabe: ja

- alt: Not on wooden floors or upper storeys.
- neu: Not on wooden floors or on upper storeys.
- Änderung: «(nichts)» → «on»
<!-- daten: {"art":"gegenstand","fundstellen":[["kraefte","Rock Wall"]]} -->

#### SO-en-27a0a4 · odin-zauber-en › „The Great Circle“ · Band S. 23 · prüfen
Freigabe: ja

- alt: While it holds, no rift opens inside it, beings from rifts suffer 3 damage each round inside the circle, and spells and powers from outside into the circle are one step harder.
- neu: As long as it holds, no rift opens inside it, beings from rifts suffer 3 damage each round they are in the circle, and spells and powers directed into the circle from outside are one level harder.
- Änderung: «While» → «As long as»; «inside» → «they are in»; «from outside» → «directed»; «(nichts)» → «from outside»; «step» → «level»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","The Great Circle"]]} -->

#### SO-en-4d19cc · odin-zauber-en › „Seal Script“ · Band S. 23 · sicher
Freigabe: ja

- alt: Only they and up to three people they name while casting can open it.
- neu: Only they and up to three people they name at the time can open it.
- Änderung: «while casting» → «at the time»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Seal Script"]]} -->

#### SO-en-d2ac63 · odin-zauber-en › „Seal Script“ · Band S. 23 · prüfen
Freigabe: ja

- alt: Anyone who breaks the seal by force or magic needs a test against Very Hard (4), and the Thaumaturge feels the break wherever they are.
- neu: Anyone who breaks the seal by force or magic needs a test against Very Hard (4), by force on STR + Athletics, by magic on the spell’s attribute and Thaumaturgy, and the Thaumaturge feels the breach wherever they are.
- Änderung: «(nichts)» → «by force on STR + Athletics, by magic on the spell’s attribute and Thaumaturgy,»; «break» → «breach»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Seal Script"]]} -->

#### SO-en-f89fa9 · odin-zauber-en › „Decomposition“ · Band S. 24 · sicher
Freigabe: ja

- alt: An object up to the size of a door crumbles into dust and rust, or a target’s armour drops by 2 for the rest of the scene.
- neu: An object up to the size of a door crumbles to dust and rust, or a target’s armour drops by 2 for the rest of the scene.
- Änderung: «into» → «to»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Decomposition"]]} -->

#### SO-en-370fb0 · odin-zauber-en › „Doppelganger“ · Band S. 24 · sicher
Freigabe: ja

- alt: Anyone attacking the original must first pass WIS + Perception against Hard (3), otherwise they hit the image, which then vanishes.
- neu: Anyone attacking the original must first pass WIS + Perception against Hard (3), or they hit the image, which then vanishes.
- Änderung: «otherwise» → «or»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Doppelganger"]]} -->

#### SO-en-26951f · odin-zauber-en › „Blank Spot“ · Band S. 24 · sicher
Freigabe: ja

- alt: Unwilling targets resist, and the Thaumaturge can exclude allies.
- neu: Unwilling targets resist, and the Thaumaturge can exempt allies.
- Änderung: «exclude» → «exempt»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Blank Spot"]]} -->

#### SO-en-40802d · odin-zauber-en › „Red Tincture“ · Band S. 24 · prüfen
Freigabe: ja

- alt: One hour of work produces an elixir that lasts 24 hours.
- neu: An hour’s work produces an elixir that keeps for 24 hours.
- Änderung: «One hour of» → «An hour’s»; «lasts» → «keeps for»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Red Tincture"]]} -->

#### SO-en-32d6c2 · odin-zauber-en › „Red Tincture“ · Band S. 24 · sicher
Freigabe: ja

- alt: Whoever drinks it regains all HP and removes 3 strain.
- neu: Whoever drinks it regains all their HP and reduces 3 strain.
- Änderung: «(nichts)» → «their»; «removes» → «reduces»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Red Tincture"]]} -->

#### SO-en-45f1cf · odin-zauber-en › „Red Tincture“ · Band S. 24 · sicher
Freigabe: ja

- alt: The Alchemist suffers 2 strain while brewing it.
- neu: The Alchemist suffers 2 strain when brewing it.
- Änderung: «while» → «when»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Red Tincture"]]} -->

#### SO-en-ce2d65 · odin-zauber-en › „Lockstep“ · Band S. 25 · sicher
Freigabe: ja

- alt: If Lockstep takes effect in a scene with Short Time Travel, Time Loop or Standstill (Chronomancer), the “Paradox” rule applies.
- neu: If Lockstep takes effect in a scene with Short Time Travel, Time Loop or Standstill (Chronomancer), the rule “Paradox” applies.
- Änderung: «(nichts)» → «rule»; «rule» → «(gestrichen)»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Lockstep"]]} -->

#### SO-en-5e7aca · odin-zauber-en › „The Lost Week“ · Band S. 25 · sicher
Freigabe: ja

- alt: A person lives through a week of recovery in one minute: they heal 5 + margin HP, and injuries that would otherwise take days are healed.
- neu: A person lives through a week of recovery in one minute: they heal 5 + margin HP, and injuries that would otherwise take days have healed.
- Änderung: «are» → «have»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","The Lost Week"]]} -->

#### SO-en-f2309f · odin-zauber-en › „The Lost Week“ · Band S. 25 · sicher
Freigabe: ja

- alt: The Thaumaturge rolls on “Unequal Ageing”.
- neu: The Thaumaturge rolls for “Unequal Ageing”.
- Änderung: «on» → «for»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","The Lost Week"]]} -->

#### SO-en-0cb30e · odin-zauber-en › „The Creditor“ · Band S. 26 · prüfen
Freigabe: ja

- alt: The Thaumaturge summons a being they already owe something.
- neu: The Thaumaturge calls a being to which they already owe something.
- Änderung: «summons» → «calls»; «(nichts)» → «to which»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","The Creditor"]]} -->

#### SO-en-fc8945 · odin-zauber-en › „Watch Pact“ · Band S. 26 · sicher
Freigabe: ja

- alt: It wakes them as soon as someone enters the place and fights if they demand it: attack 4 + 4, damage 4, defence 2, 12 HP.
- neu: It wakes them as soon as anyone enters the place, and fights if they demand it: attack 4 + 4, damage 4, defence 2, 12 HP.
- Änderung: «someone» → «anyone»
<!-- daten: {"art":"gegenstand","fundstellen":[["zauber","Watch Pact"]]} -->
