# Korrekturvorschläge: Bedrohungsatlas (Gegner im Spielleiterbuch)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege bedrohungsatlas` aus den Bänden auf odin-rpg.pages.dev (Prüfsummen unten je Sprache).
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden bedrohungsatlas --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_08_Spielleiterbuch (Seiten 137, Prüfsumme 31e26f946e37).

Gegner 80 mit 641 Zeilen, gleich 597; Vorschläge 9.
Hinweise ohne Vorschlag: 21.

### Gegnerwerte

#### BA-de-635f60 · Gegner „Kristalljäger“, Zeile „Angriff“ · Band S. 23 · prüfen
Freigabe: ja

- alt: Pistole 3 + 3, Schaden 3, oder Schrotflinte 3 + 3, Schaden 4, Nah
- neu: Pistole 3 + 3, Schaden 3, oder Schrotflinte 3 + 3, Schaden 4, Streuung
- Änderung: «Nah» → «Streuung»
<!-- daten: {"art":"gegner","name":"Kristalljäger","label":"Angriff"} -->

#### BA-de-d3b07f · Gegner „Kristallmutant“, Zeile „Grauen“ · Band S. 67 · prüfen
Freigabe: ja

- alt: Grauenhaft (3) beim ersten Anblick
- neu: Unheimlich (1)
- Änderung: «Grauenhaft (3) beim ersten Anblick» → «Unheimlich (1)»
<!-- daten: {"art":"gegner","name":"Kristallmutant","label":"Grauen"} -->

#### BA-de-21b866 · Gegner „Kristallmutant“, Zeile „Besonderheit“ · Band S. 67 · prüfen
Freigabe: ja

- alt: Regeneriert 2 LP pro Runde, außer er wurde in dieser Runde durch Feuer oder Energiewaffen verletzt
- neu: Regeneriert 1 LP pro Runde. Fällt nicht bei 0 LP, sondern erst, wenn er in derselben Runde noch einmal getroffen wird
- Änderung: «2» → «1»; «Runde, außer» → «Runde. Fällt nicht bei 0 LP, sondern erst, wenn»; «wurde» → «(gestrichen)»; «dieser» → «derselben»; «durch Feuer oder Energiewaffen verletzt» → «noch einmal getroffen wird»
<!-- daten: {"art":"gegner","name":"Kristallmutant","label":"Besonderheit"} -->

#### BA-de-2a7a89 · Gegner „Der Henker“, Zeile „Schwäche“ · Band S. 78 · prüfen
Freigabe: ja

- alt: Ein Freispruch. Ein Negotiator oder Investigator, der für einen Charakter vor ihm plädiert und eine Probe gegen 5 + 5 gewinnt, beendet seine Jagd auf diesen Charakter
- neu: Ein Freispruch. Ein Negotiator oder Investigator, der für einen Charakter vor ihm plädiert und eine vergleichende Probe auf CH + Überzeugen gegen 5 + 5 gewinnt, beendet seine Jagd auf diesen Charakter
- Änderung: «(nichts)» → «vergleichende»; «(nichts)» → «auf CH + Überzeugen»
<!-- daten: {"art":"gegner","name":"Der Henker","label":"Schwäche"} -->

#### BA-de-a3a622 · Gegner „Adept der Erleuchteten“, Zeile „Schwäche“ · Band S. 93 · prüfen
Freigabe: ja

- alt: Er weiß nicht, woher seine Kraft kommt. Wer es ihm sagt, würfelt Überzeugen gegen seine WK. Gelingt es, gibt er auf
- neu: Er weiß nicht, woher seine Kraft kommt. Wer es ihm sagt, würfelt eine vergleichende Probe auf CH +
- Änderung: «Überzeugen gegen seine WK. Gelingt es, gibt er» → «eine vergleichende Probe»; «(nichts)» → «CH +»
<!-- daten: {"art":"gegner","name":"Adept der Erleuchteten","label":"Schwäche"} -->

#### BA-de-5d7891 · Gegner „Keimling“, Zeile „Besonderheit“ · Band S. 65 · prüfen
Freigabe: ja

- alt: Schlüpft zu 1W6 aus jedem Stein. Wächst mit jedem Wirt: Nach jeder Szene, in der er fressen konnte, +2 LP
- neu: Tritt in Gruppen von 2W6 auf. Wächst mit jedem Wirt: Nach jeder Szene, in der er fressen konnte, +2 LP
- Änderung: «Schlüpft zu 1W6 aus jedem Stein.» → «Tritt in Gruppen von 2W6 auf.»
<!-- daten: {"art":"gegner","name":"Keimling","label":"Besonderheit"} -->

#### BA-de-c6ecde · Gegner „Abtrünniger Leser“, Zeile „Zaubern“ · Band S. 23 · prüfen
Freigabe: ja

- alt: 4 + 4, 15 ME, Rissfund (+2 Würfel, jede 1 auf den Bonuswürfeln kostet 2 Belastung)
- neu: 4 + 4, 15 ME, Rissfund (+2 Würfel, getrennt geworfen, jede 1 auf den Bonuswürfeln kostet 2 Belastung)
- Änderung: «(nichts)» → «getrennt geworfen,»
<!-- daten: {"art":"gegner","name":"Abtrünniger Leser","label":"Zaubern"} -->

#### BA-de-0d52e9 · Gegner „Besessener“, Zeile „Schwäche“ · Band S. 76 · prüfen
Freigabe: ja

- alt: Ein Invoker, ein Psychic Healer oder ein Paranormal Detective kann den Toten austreiben: ausgedehnte Probe, 6 Erfolge, der Tote wehrt sich mit 4 + 4. Ein Gegenstand des Toten erleichtert die Probe
- neu: Ein Invoker (WE + Ritualismus), ein Psychic Healer (WK + Psychische Heilung) oder ein Paranormal Detective (IN + Okkultismus) kann den Toten austreiben: ausgedehnte Probe, 6 Erfolge, der Tote wehrt sich mit 4 + 4. Ein Gegenstand des Toten erleichtert die Probe
- Änderung: «Invoker,» → «Invoker (WE + Ritualismus),»; «(nichts)» → «(WK + Psychische Heilung)»; «(nichts)» → «(IN + Okkultismus)»
<!-- daten: {"art":"gegner","name":"Besessener","label":"Schwäche"} -->

#### BA-de-eb6a02 · Gegner „Chorkind“, Zeile „Schwäche“ · Band S. 61 · prüfen
Freigabe: ja

- alt: Ein Helm, eine Kappe, ein Stück Legierung S. Ein Psychic Healer oder Telepath kann es beruhigen: WK + Telepathie gegen Schwer (3)
- neu: Ein Helm, eine Kappe, ein Stück Legierung S. Ein Telepath kann es beruhigen: WK + Telepathie gegen Schwer (3). Ein Psychic Healer schafft es mit WK + Psychische Heilung gegen Schwer (3)
- Änderung: «Psychic Healer oder» → «(gestrichen)»; «(nichts)» → «(3). Ein Psychic Healer schafft es mit WK + Psychische Heilung gegen Schwer»
<!-- daten: {"art":"gegner","name":"Chorkind","label":"Schwäche"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Abtrünniger Psion“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Psi, Kräfte, Pistole, Besonderheit.
- Gegner „Der Tiefe Kreis“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Die endlose Straße“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dienst-Agent“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Rüstung, Besonderheit.
- Gegner „Die Sänger“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit.
- Gegner „Dämon“, Zeile „Angriff“: „Klauen und Hörner 5 + 5, Schaden 5, Durchschlag 1, zwei Aktionen pro Runde“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dämon“, Zeile „Magie“: „5 + 5, Feuerball und Seelenschnitt je einmal pro Kampf“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Dämon“, Zeile „Besonderheit“: „Kann nur durch ein Bannritual (Ritualismus, ausgedehnte Probe, 10 Erfolge) endgültig vernichtet werden. Sonst kehrt er nach 13 Tagen zurück“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Elite-Söldner“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Rüstung, Besonderheit.
- Gegner „Der Hausgeist“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Söldner“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Besonderheit.
- Gegner „Kristallmutant“, Zeile „Angriff“: „Klauen 5 + 4, Schaden 4, zwei Angriffe pro Runde“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Grauer Mann“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Besonderheit.
- Gegner „Die Wartende“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Kultist“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff.
- Gegner „Ariadne“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Das Doppel“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Der Wanderraum“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Kultführer“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Zaubern, Zauber, Besonderheit.
- Gegner „Schattenwesen“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Angriff, Verteidigung / Rüstung / LP, Besonderheit.
- Gegner „Die Praxis“, Zeile „Hinweis“: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.

## Englisch

Bände: ODIN_EN_08_Game_Masters_Book (Seiten 136, Prüfsumme 332448b70f5e).

Gegner 80 mit 638 Zeilen, gleich 576; Vorschläge 24.
Hinweise ohne Vorschlag: 22.

### Gegnerwerte

#### BA-en-359c86 · Gegner „Crystal Mutant“, Zeile „Special“ · Band S. 66 · prüfen
Freigabe: ja

- alt: Regenerates 2 HP per round, unless they were injured by fire or energy weapons this round
- neu: Regenerates 1 HP per round. Does not fall at 0 HP, but only when they are hit again in the same round
- Änderung: «2» → «1»; «round, unless» → «round. Does not fall at 0 HP, but only when»; «were injured by fire or energy weapons this» → «are hit again in the same»
<!-- daten: {"art":"gegner","name":"Crystal Mutant","label":"Special"} -->

#### BA-en-744baa · Gegner „Crystal Hunter“, Zeile „Attack“ · Band S. 23 · prüfen
Freigabe: ja

- alt: Pistol 3 + 3, damage 3, or shotgun 3 + 3, damage 4, close
- neu: Pistol 3 + 3, damage 3, or shotgun 3 + 3, damage 4, Spread
- Änderung: «close» → «Spread»
<!-- daten: {"art":"gegner","name":"Crystal Hunter","label":"Attack"} -->

#### BA-en-f5f23d · Gegner „Adept of the Enlightened“, Zeile „Weakness“ · Band S. 92 · prüfen
Freigabe: ja

- alt: He does not know where his power comes from. Whoever tells him rolls Persuasion against his WIL. If it succeeds, he gives up
- neu: He does not know where his power comes from. Whoever tells him rolls an opposed test on CHA +
- Änderung: «Persuasion against his WIL. If it succeeds, he gives up» → «an opposed test on CHA +»
<!-- daten: {"art":"gegner","name":"Adept of the Enlightened","label":"Weakness"} -->

#### BA-en-350795 · Gegner „The Spectator“, Zeile „Encounter“ · Band S. 63 · prüfen
Freigabe: ja

- alt: The cell is at a rift, at a find, at a child, and realises it is not alone. The Watcher is almost always a puzzle, rarely a fight. The question is not how to defeat it, but to whom it reports.
- neu: The cell is at a rift, at a find, at a child, and realises it is not alone. The Spectator is almost always a puzzle, rarely a fight. The question is not how to defeat it, but to whom it reports.
- Änderung: «Watcher» → «Spectator»
<!-- daten: {"art":"gegner","name":"The Spectator","label":"Encounter"} -->

#### BA-en-6afb5d · Gegner „Renegade Reader“, Zeile „Casting“ · Band S. 23 · prüfen
Freigabe: ja

- alt: 4 + 4, 15 ME, rift find (+2 dice, each 1 on the bonus dice costs 2 strain)
- neu: 4 + 4, 15 ME, rift find (+2 dice, rolled separately, each 1 on the bonus dice costs 2 strain)
- Änderung: «(nichts)» → «rolled separately,»
<!-- daten: {"art":"gegner","name":"Renegade Reader","label":"Casting"} -->

#### BA-en-1ca2cd · Gegner „Possessed One“, Zeile „Weakness“ · Band S. 75 · prüfen
Freigabe: ja

- alt: An Invoker, a Psychic Healer or a Paranormal Detective can drive out the dead person: extended test, 6 successes, the dead person resists with 4 + 4. An object belonging to the dead person makes the test easier
- neu: An Invoker (WIS + Ritualism), a Psychic Healer (WIL + Psychic Healing) or a Paranormal Detective (INT + Occultism) can drive out the dead person: extended test, 6 successes, the dead person resists with 4 + 4. An object belonging to the dead person makes the test easier
- Änderung: «Invoker,» → «Invoker (WIS + Ritualism),»; «(nichts)» → «(WIL + Psychic Healing)»; «(nichts)» → «(INT + Occultism)»
<!-- daten: {"art":"gegner","name":"Possessed One","label":"Weakness"} -->

#### BA-en-aa7930 · Gegner „The Double“, Zeile „Horror“ · Band S. 88 · prüfen
Freigabe: ja

- alt: Disturbing (2) for the original, Eerie (1) for everyone else
- neu: Disturbing (2) for the original, Uncanny (1) for everyone else
- Änderung: «Eerie» → «Uncanny»
<!-- daten: {"art":"gegner","name":"The Double","label":"Horror"} -->

#### BA-en-8a7605 · Gegner „Remote Viewer of STILLWATER“, Zeile „Powers“ · Band S. 90 · prüfen
Freigabe: ja

- alt: Remote Viewing (sees a place within 100 km, one action), Mind Reading, Psionic Shock
- neu: Remote Viewing (sees a place within 100 km, one action), Thought Reading, Psionic Shock
- Änderung: «Mind» → «Thought»
<!-- daten: {"art":"gegner","name":"Remote Viewer of STILLWATER","label":"Powers"} -->

#### BA-en-a3faa5 · Gegner „Hand“, Zeile „Attack“ · Band S. 18 · prüfen
Freigabe: ja

- alt: Silenced pistol 3 + 3, damage 3, Quiet, or stun pistol 3 + 3, damage 3, Stunning
- neu: Silenced pistol 3 + 3, damage 3, Quiet, or stun pistol 3 + 3, damage 3, Stun
- Änderung: «Stunning» → «Stun»
<!-- daten: {"art":"gegner","name":"Hand","label":"Attack"} -->

#### BA-en-113deb · Gegner „Technician from Tunnel Zero“, Zeile „Attack“ · Band S. 38 · prüfen
Freigabe: ja

- alt: Taser pistol 3 + 3, damage 2, Stunning, or pistol 3 + 2, damage 3
- neu: Taser pistol 3 + 3, damage 2, Stun, or pistol 3 + 2, damage 3
- Änderung: «Stunning,» → «Stun,»
<!-- daten: {"art":"gegner","name":"Technician from Tunnel Zero","label":"Attack"} -->

#### BA-en-96b6ae · Gegner „Choir Child“, Zeile „Weakness“ · Band S. 61 · prüfen
Freigabe: ja

- alt: A helmet, a cap, a piece of Alloy S. A Psychic Healer or Telepath can calm it: WIL + Telepathy against Hard (3)
- neu: A helmet, a cap, a piece of Alloy S. A Telepath can calm it: WIL + Telepathy against Hard (3). A Psychic Healer can do the same with WIL + Psychic Healing against Hard (3)
- Änderung: «Psychic Healer or» → «(gestrichen)»; «(nichts)» → «(3). A Psychic Healer can do the same with WIL + Psychic Healing against Hard»
<!-- daten: {"art":"gegner","name":"Choir Child","label":"Weakness"} -->

#### BA-en-54b82c · Gegner „Hunter of Department 13“, Zeile „Attack“ · Band S. 91 · prüfen
Freigabe: ja

- alt: Silenced rifle 4 + 4, damage 4, Silent
- neu: Silenced rifle 4 + 4, damage 4, Quiet
- Änderung: «Silent» → «Quiet»
<!-- daten: {"art":"gegner","name":"Hunter of Department 13","label":"Attack"} -->

#### BA-en-6c5e2f · Gegner „The Dark Facility“, Zeile „Special“ · Band S. 80 · prüfen
Freigabe: ja

- alt: Each round it creates a security system henchman from scrap. As long as one core stands, it runs
- neu: Each round it creates a Guard System henchman from scrap. As long as one core stands, it runs
- Änderung: «security system» → «Guard System»
<!-- daten: {"art":"gegner","name":"The Dark Facility","label":"Special"} -->

#### BA-en-ef1b28 · Gegner „The Dark Facility“, Zeile „Encounter“ · Band S. 80 · prüfen
Freigabe: ja

- alt: An industrial area, an old military base, a tunnel. The cell must find and destroy three cores while the facility rebuilds itself and sends its security systems. A fight against a building.
- neu: An industrial area, an old military base, a tunnel. The cell must find and destroy three cores while the facility rebuilds itself and sends its Guard Systems. A fight against a building.
- Änderung: «security systems.» → «Guard Systems.»
<!-- daten: {"art":"gegner","name":"The Dark Facility","label":"Encounter"} -->

#### BA-en-b1f809 · Gegner „Glass Man“, Zeile „Horror“ · Band S. 68 · prüfen
Freigabe: ja

- alt: Eerie (1), Disturbing (2) for Thaumaturges who hear the Whisper in him
- neu: Uncanny (1), Disturbing (2) for Thaumaturges who hear the Whisper in him
- Änderung: «Eerie» → «Uncanny»
<!-- daten: {"art":"gegner","name":"Glass Man","label":"Horror"} -->

#### BA-en-096e51 · Gegner „Forest Walker“, Zeile „What remains“ · Band S. 71 · prüfen
Freigabe: ja

- alt: A kept promise, and a forest that is favourably disposed towards the cell from now on. Or the ranger’s staff from the Artefacts chapter, if someone has earned a gift
- neu: A kept promise, and a forest that is favourably disposed towards the cell from now on. Or the Staff of the Forest Walker from the Artefacts chapter, if someone has earned a gift
- Änderung: «ranger’s staff» → «Staff of the Forest Walker»; «(nichts)» → «Subtypes Subtype Difference Bog Spirit Lives in the bog. Misdirection becomes drowning: Anyone who is lost suffers 2 damage per round Mountain Elder Lives in caves and tunnels. Hears every word spoken in its passages The One from the Lake Leader, Creature · Old In every deep lake in Europe there is a story of a woman who lives at the bottom. Most are only stories. This one is not. She calls with the voice of a person one has lost. Whoever follows her goes into the water and does not return. She takes one person ever»
<!-- daten: {"art":"gegner","name":"Forest Walker","label":"What remains"} -->

#### BA-en-db6973 · Gegner „The Collector“, Zeile „Special“ · Band S. 84 · prüfen
Freigabe: ja

- alt: Always has 2D6 mercenaries, 1 elite mercenary and security systems. Offers every agent an offer from the table “The Lures of the Others”
- neu: Always has 2D6 mercenaries, 1 elite mercenary and Guard Systems. Offers every agent an offer from the table “The Lures of the Others”
- Änderung: «security systems.» → «Guard Systems.»
<!-- daten: {"art":"gegner","name":"The Collector","label":"Special"} -->

#### BA-en-ae05ca · Gegner „Open One“, Zeile „Psi“ · Band S. 18 · prüfen
Freigabe: ja

- alt: 4 + 4, 14 PSI points, no focus device, overload node Without Net
- neu: 4 + 4, 14 PSI points, no focus device, overload node Without a Net
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"gegner","name":"Open One","label":"Psi"} -->

#### BA-en-65faa6 · Gegner „Germling“, Zeile „Horror“ · Band S. 64 · prüfen
Freigabe: ja

- alt: Uncanny (1), Horrific (3) when it hatches from a human
- neu: Uncanny (1), Horrifying (3) when it hatches from a human
- Änderung: «Horrific» → «Horrifying»
<!-- daten: {"art":"gegner","name":"Germling","label":"Horror"} -->

#### BA-en-ffd887 · Gegner „Germling“, Zeile „Special“ · Band S. 64 · prüfen
Freigabe: ja

- alt: Hatches 1D6 from each stone. Grows with each host: After each scene in which it could feed, +2 HP
- neu: Appears in groups of 2D6. Grows with each host: After each scene in which it could feed, +2 HP
- Änderung: «Hatches 1D6 from each stone.» → «Appears in groups of 2D6.»
<!-- daten: {"art":"gegner","name":"Germling","label":"Special"} -->

#### BA-en-805da2 · Gegner „Germling“, Zeile „Encounter“ · Band S. 65 · prüfen
Freigabe: ja

- alt: A farm, a village, a research station. The cell must find all hatchlings before one reaches the third moult. A race against the clock with thermal cameras and salt
- neu: A farm, a village, a research station. The cell must find all Germlings before one reaches the third moult. A race against the clock with thermal cameras and salt
- Änderung: «hatchlings» → «Germlings»
<!-- daten: {"art":"gegner","name":"Germling","label":"Encounter"} -->

#### BA-en-0d6014 · Gegner „The Forgotten“, Zeile „Horror“ · Band S. 89 · prüfen
Freigabe: ja

- alt: Eerie (1), Disturbing (2) for anyone whom a friend no longer recognises
- neu: Uncanny (1), Disturbing (2) for anyone whom a friend no longer recognises
- Änderung: «Eerie» → «Uncanny»
<!-- daten: {"art":"gegner","name":"The Forgotten","label":"Horror"} -->

#### BA-en-79252b · Gegner „The Executioner“, Zeile „Weakness“ · Band S. 78 · prüfen
Freigabe: ja

- alt: An acquittal. A Negotiator or Investigator who pleads for a character before him and wins a test against 5 + 5 ends his hunt for that character
- neu: An acquittal. A Negotiator or Investigator who pleads for a character before him and wins an opposed test on CHA + Persuasion against 5 + 5 ends his hunt for that character
- Änderung: «a» → «an opposed»; «(nichts)» → «on CHA + Persuasion»
<!-- daten: {"art":"gegner","name":"The Executioner","label":"Weakness"} -->

#### BA-en-c848b0 · Gegner „The Black Dog“, Zeile „Horror“ · Band S. 73 · prüfen
Freigabe: ja

- alt: Horrific (3). Whoever botches the test rolls a D6 at the end of the campaign: on a 1 the character dies on their next mission if no one prevents it
- neu: Horrifying (3). Whoever botches the test rolls a D6 at the end of the campaign: on a 1 the character dies on their next mission if no one prevents it
- Änderung: «Horrific» → «Horrifying»
<!-- daten: {"art":"gegner","name":"The Black Dog","label":"Horror"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „Crystal Mutant“, Zeile „Attack“: „Claws 5 + 4, damage 4, two attacks per round“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Crystal Mutant“, Zeile „Horror“: „Horrifying (3) at first sight“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Demon“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Magic, Special.
- Gegner „Grey Man“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Special.
- Gegner „Returner (Elite)“: Name im Band nicht gefunden, Werte nicht geprüft.
- Gegner „Elite Mercenary“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Armour, Special.
- Gegner „Silver Thief“, Zeile „Special“: „Knows Suppressive Fire and Cover Fire. Carries six pieces of ashsilver. If he falls, his silver responds on a 1 or 2 on a D6.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Wandering Room“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Double“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Endless Road“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Singers“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special.
- Gegner „The House Spirit“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Waiting One“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Practice“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Cult Leader“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Casting, Spells, Armour, Special.
- Gegner „Ariadne“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Cultist“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack.
- Gegner „Shadow Being“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special.
- Gegner „Service Agent“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Armour, Special.
- Gegner „Renegade Psion“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Psi, Powers, Pistol, Special.
- Gegner „The Deep Circle“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Mercenary“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Special.
