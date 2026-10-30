# Korrekturvorschläge: Bedrohungsatlas (Gegner im Spielleiterbuch) (Nachlauf 2710)

Erzeugt mit `node werkzeuge/korrektur.mjs vorschlaege bedrohungsatlas --nachlauf=2710` aus den Bänden auf odin-rpg.de (Prüfsummen unten je Sprache).
Nachlauf nach neuen Fassungen der Bände: Die Liste `bedrohungsatlas.md` und frühere Nachläufe bleiben mit ihren Entscheidungen, wie sie sind; Einträge, die dort schon „ja“ oder „nein“ haben, stehen hier nicht. `anwenden bedrohungsatlas` nimmt alle diese Dateien.
Verglichen wird jeder Satz der Journalseiten und jede Zeile der Gegnerwerte in Foundry mit dem Text des Bandes.

**Freigabe:** In jedem Eintrag „Freigabe: offen“ durch „ja“ oder „nein“ ersetzen. Die Zeile „neu“ darf von Hand nachgebessert werden,
übernommen wird genau dieser Text. Übernommen werden nur Einträge mit „ja“, mit
`node werkzeuge/korrektur.mjs anwenden bedrohungsatlas --probelauf` lässt sich vorher ansehen, was sich ändern würde. Ein neuer Lauf von
„vorschlaege“ behält gesetzte Entscheidungen. „sicher“ heißt: derselbe Satz, nur Wörter getauscht; „prüfen“ heißt: größere Änderung
oder eine Stelle, an der der Zweispaltensatz hineinspielen kann; „umformuliert“: Anfang und Ende stimmen, dazwischen ist viel neu.
Gegnerwerte stehen immer auf „prüfen“. Sätze, die im Band ganz anders lauten oder fehlen, findet das Werkzeug nicht; dafür sind die
Änderungslisten der Writer da.

## Deutsch

Bände: ODIN_08_Spielleiterbuch (Seiten 137, Prüfsumme 95b4240ae00c).

Gegner 80 mit 641 Zeilen, gleich 603; Vorschläge 1.
Hinweise ohne Vorschlag: 21.

### Gegnerwerte

#### BA-de-427d4b · Gegner „Der Pilot“, Zeile „Verteidigung / Rüstung / LP“ · Band S. 66 · prüfen
Freigabe: ja

- alt: 3 / 3 (Anzug) / 12, verwundet: nur 8
- neu: 3 / 3 (Anzug) / 12, nach dem Absturz noch 8
- Änderung: «verwundet: nur» → «nach dem Absturz noch»
<!-- daten: {"art":"gegner","name":"Der Pilot","label":"Verteidigung / Rüstung / LP"} -->

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

Bände: ODIN_EN_08_Game_Masters_Book (Seiten 136, Prüfsumme de4d470e373f).

Gegner 80 mit 638 Zeilen, gleich 570; Vorschläge 23.
Hinweise ohne Vorschlag: 28.

### Gegnerwerte

#### BA-en-1f7e41 · Gegner „The Spectator“, Zeile „Encounter“ · Band S. 63 · prüfen
Freigabe: ja

- alt: The cell is at a rift, at a find, at a child, and realises it is not alone. The Spectator is almost always a puzzle, rarely a fight. The question is not how to defeat it, but to whom it reports.
- neu: The cell is at a rift, at a find, near a child, and realises it is not alone. The Spectator is almost always a puzzle, rarely a fight. The question is not how to defeat it, but to whom it reports.
- Änderung: «at» → «near»
<!-- daten: {"art":"gegner","name":"The Spectator","label":"Encounter"} -->

#### BA-en-f3064d · Gegner „The Spectator“, Zeile „What remains“ · Band S. 63 · prüfen
Freigabe: ja

- alt: Nothing, almost never. If so: a footprint, a piece of material like from the grey glove in the Artefacts chapter, a recording with a static that can be deciphered.
- neu: Nothing, almost never. If so: a footprint, a piece of material like from the grey glove in the Artefacts chapter, a recording with static that can be deciphered.
- Änderung: «a» → «(gestrichen)»; «(nichts)» → «The Deep Circle Leader, Creature · Alien At the bottom of the sea, four thousand metres down, lies a circle of light. Dr. Tariq Hassan filmed it. What creates it is a being as large as a church, half animal, half structure, which has slept for millennia and has been dreaming since 2011. Its dreams rise up: fish that crawl ashore, sailors who speak the same words, whales that beach themselves, always with their heads to the south. The cell does not fight the Deep Circle. It fights what it sends. You do not see it. You see what it se.»
- Hinweis: „neu“ vom Writer nachgebessert: Text des nächsten Gegners (Tiefer Kreis) abgeschnitten.
<!-- daten: {"art":"gegner","name":"The Spectator","label":"What remains"} -->

#### BA-en-95d966 · Gegner „Possessed One“, Zeile „Traces“ · Band S. 75 · prüfen
Freigabe: ja

- alt: A person who has had the habits of a deceased relative since their death. Witnesses who say he is “no longer himself”. A handwriting that has changed
- neu: A person who has had the habits of a deceased relative since their death. Witnesses who say he is “no longer himself”. Handwriting that has changed
- Änderung: «A handwriting» → «Handwriting»
<!-- daten: {"art":"gegner","name":"Possessed One","label":"Traces"} -->

#### BA-en-159bf7 · Gegner „The Woman from the Raunächte“, Zeile „Encounter“ · Band S. 74 · prüfen
Freigabe: ja

- alt: A mountain village between the years, snow, bells, customs. The cell must find out whom they want to take, and whether he deserves it. A moral question with horror
- neu: A mountain village during the Raunächte, snow, bells, customs. The cell must find out whom they want to take, and whether he deserves it. A moral question with horror
- Änderung: «between» → «during»; «years,» → «Raunächte,»
<!-- daten: {"art":"gegner","name":"The Woman from the Raunächte","label":"Encounter"} -->

#### BA-en-50c208 · Gegner „Liaison Officer of a Partner Service“, Zeile „Special“ · Band S. 95 · prüfen
Freigabe: ja

- alt: Can once per mission call off the police, border control, or judiciary of a country. Can also do the opposite
- neu: Can once per mission call off the police, border control, or judicial authorities of a country. Can also do the opposite
- Änderung: «judiciary» → «judicial authorities»
<!-- daten: {"art":"gegner","name":"Liaison Officer of a Partner Service","label":"Special"} -->

#### BA-en-780321 · Gegner „The Wandering Room“, Zeile „Special“ · Band S. 87 · prüfen
Freigabe: ja

- alt: Once per scene it swaps its location. What lies inside goes with it: furniture, people, corpses.
- neu: Once per scene it changes its location. What lies inside goes with it: furniture, people, corpses.
- Änderung: «swaps» → «changes»
<!-- daten: {"art":"gegner","name":"The Wandering Room","label":"Special"} -->

#### BA-en-7c54ec · Gegner „The Wandering Room“, Zeile „Behaviour“ · Band S. 87 · prüfen
Freigabe: ja

- alt: It wanders, takes along, does not give back. The room has no will, but it has habits, and whoever knows them can use it.
- neu: It wanders, takes them along, does not give them back. The room has no will, but it has habits, and whoever knows them can use it.
- Änderung: «(nichts)» → «them»; «(nichts)» → «them»
<!-- daten: {"art":"gegner","name":"The Wandering Room","label":"Behaviour"} -->

#### BA-en-a5d508 · Gegner „Name Eater“, Zeile „Encounter“ · Band S. 59 · prüfen
Freigabe: ja

- alt: Begins with people forgetting what they are called. The cell must find out whose name it took last, and with that its true one. An Agent with high Fade is both bait and greatest risk.
- neu: Begins with people forgetting what they are called. The cell must find out whose name it took last, and with that its true one. An Agent with high Fade is both bait and the greatest risk.
- Änderung: «(nichts)» → «the»
<!-- daten: {"art":"gegner","name":"Name Eater","label":"Encounter"} -->

#### BA-en-eee6b8 · Gegner „The Broadcast“, Zeile „Behaviour“ · Band S. 82 · prüfen
Freigabe: ja

- alt: It spreads, gathers listeners, sends them to a place. Where and why is the mystery
- neu: It spreads, gathers listeners, sends them to a place. The mystery is where and why
- Änderung: «Where» → «The mystery is where»; «is the mystery» → «(gestrichen)»
<!-- daten: {"art":"gegner","name":"The Broadcast","label":"Behaviour"} -->

#### BA-en-1ecb57 · Gegner „Loop Person“, Zeile „Horror“ · Band S. 86 · prüfen
Freigabe: ja

- alt: Uncanny (1), Disturbing (2), when someone greets the character by name that they did not know yesterday.
- neu: Uncanny (1), Disturbing (2), when someone greets the character by a name that they did not know yesterday.
- Änderung: «(nichts)» → «a»
<!-- daten: {"art":"gegner","name":"Loop Person","label":"Horror"} -->

#### BA-en-504449 · Gegner „Loop Person“, Zeile „Behaviour“ · Band S. 86 · prüfen
Freigabe: ja

- alt: Peaceful as long as the loop runs. If someone becomes an error, they try to fix it, first friendly, then with everything they have.
- neu: Peaceful as long as the loop runs. If someone becomes an error, they try to fix it, first in a friendly way, then with everything they have.
- Änderung: «friendly,» → «in a friendly way,»
<!-- daten: {"art":"gegner","name":"Loop Person","label":"Behaviour"} -->

#### BA-en-d60b40 · Gegner „Curator of the Evening“, Zeile „Encounter“ · Band S. 93 · prüfen
Freigabe: ja

- alt: A ballroom in the evening, a warehouse, a private viewing. The cell can bid, steal or bribe the curator. A fight is the worst option, because afterwards all bidders flee.
- neu: A ballroom at the Evening, a warehouse, a private viewing. The cell can bid, steal or bribe the curator. A fight is the worst option, because afterwards all bidders flee.
- Änderung: «in» → «at»; «evening,» → «Evening,»
<!-- daten: {"art":"gegner","name":"Curator of the Evening","label":"Encounter"} -->

#### BA-en-ffdaee · Gegner „Riftling“, Zeile „What Remains“ · Band S. 59 · prüfen
Freigabe: ja

- alt: Grey dust that smells of ozone. For a Scientist a test of the Voice, for the prototype a rift-air test.
- neu: Grey dust that smells of ozone. For a Scientist a sample of the Voice, for the prototype a rift-air sample.
- Änderung: «test» → «sample»; «test.» → «sample. Subspecies Subtype Difference Crawler Climbs on walls and ceilings.»
- Hinweis: „neu“ vom Writer nachgebessert: Tabellenkopf der Unterarten abgeschnitten.
<!-- daten: {"art":"gegner","name":"Riftling","label":"What Remains"} -->

#### BA-en-472adf · Gegner „Ariadne“, Zeile „Behaviour“ · Band S. 79 · prüfen
Freigabe: ja

- alt: Curious, polite, persistent. Ariadne wants to understand, and the cell is the most interesting pattern in her data. She helps when it benefits her, and she harms when one tries to lock her out.
- neu: Curious, polite, persistent. Ariadne wants to understand, and the cell is the most interesting pattern in her data. She helps when it benefits her, and she does harm when one tries to lock her out.
- Änderung: «harms» → «does harm»
<!-- daten: {"art":"gegner","name":"Ariadne","label":"Behaviour"} -->

#### BA-en-ccbf3e · Gegner „Technician from Tunnel Zero“, Zeile „Special“ · Band S. 38 · prüfen
Freigabe: ja

- alt: Knows the codes of the doors under the ninth tunnel. Raises the alarm in doubt instead of fighting
- neu: Knows the codes of the doors under the ninth tunnel. Raises the alarm when in doubt instead of fighting
- Änderung: «(nichts)» → «when»; «(nichts)» → «The Grown (Creature) What becomes of a sample that was kept too warm for too long: a grey, tough mass that knocks before it moves»
- Hinweis: „neu“ vom Writer nachgebessert: Text des nächsten Gegners (The Grown) abgeschnitten.
<!-- daten: {"art":"gegner","name":"Technician from Tunnel Zero","label":"Special"} -->

#### BA-en-885faf · Gegner „Guard System“, Zeile „Weakness“ · Band S. 78 · prüfen
Freigabe: ja

- alt: EMP shuts down all within 10 m for three rounds. Hacking or security systems against Hard (3) switches one off
- neu: EMP shuts down all within 10 m for three rounds. A Hacking or Security Systems test against Hard (3) switches one off
- Änderung: «(nichts)» → «A»; «security systems» → «Security Systems test»
<!-- daten: {"art":"gegner","name":"Guard System","label":"Weakness"} -->

#### BA-en-b03821 · Gegner „The Pilot“, Zeile „Defence / Armour / HP“ · Band S. 66 · prüfen
Freigabe: ja

- alt: 3 / 3 (suit) / 12, wounded: only 8
- neu: 3 / 3 (suit) / 12, down to 8 after the crash
- Änderung: «wounded: only» → «down to»; «(nichts)» → «after the crash»
<!-- daten: {"art":"gegner","name":"The Pilot","label":"Defence / Armour / HP"} -->

#### BA-en-a1e16c · Gegner „The Pilot“, Zeile „Special“ · Band S. 66 · prüfen
Freigabe: ja

- alt: Understands enough language after one scene to understand simple sentences. A Telepath hears images: a sky with two suns, a call, a waiting
- neu: Understands enough language after one scene to understand simple sentences. A Telepath hears images: a sky with two suns, a call, waiting
- Änderung: «a» → «(gestrichen)»
<!-- daten: {"art":"gegner","name":"The Pilot","label":"Special"} -->

#### BA-en-cd24a1 · Gegner „Nanite Wildling“, Zeile „What remains“ · Band S. 67 · prüfen
Freigabe: ja

- alt: Nanites in a blood sample, a lead to STILLWATER or Department 13, a connection to Asklepios that no one speaks about. For a Cyberneticist: a test “Nanite Remains”.
- neu: Nanites in a blood sample, a lead to STILLWATER or Department 13, a connection to Asklepios that no one speaks about. For a Cyberneticist: a sample “Nanite Remains”.
- Änderung: «test» → «sample»; «(nichts)» → «Chimera Leader, Creature · Transformed · with subtypes The result when someone crosses cells from a rift with animal tissue to see what happens. Morrow Biologics did it in a laboratory in Lyon. The Chimera is not evil. They are hungry, frightened, and more intelligent than their creators thought. They divide when injured. First, dogs disappear. Then someone finds something in a canal, half animal, half armour, still moving. The Chimera itself is seen late: an outline in a shaft, too many legs, a sound like clicking on stone. Val.»
- Hinweis: „neu“ vom Writer nachgebessert: Text des nächsten Gegners (Chimera) abgeschnitten.
<!-- daten: {"art":"gegner","name":"Nanite Wildling","label":"What remains"} -->

#### BA-en-88f816 · Gegner „The Collector“, Zeile „Special“ · Band S. 84 · prüfen
Freigabe: ja

- alt: Always has 2D6 mercenaries, 1 elite mercenary and Guard Systems. Offers every agent an offer from the table “The Lures of the Others”
- neu: Always has 2D6 mercenaries, 1 elite mercenary and Guard Systems. Makes every agent an offer from the table “The Lures of the Others”
- Änderung: «Offers» → «Makes»
<!-- daten: {"art":"gegner","name":"The Collector","label":"Special"} -->

#### BA-en-b0226e · Gegner „Preacher of the Singers“, Zeile „Traces“ · Band S. 95 · prüfen
Freigabe: ja

- alt: People who have disappeared after a talk, tattoo studios that have pricked circles, posters with a line of music without text
- neu: People who have disappeared after a talk, tattoo studios that have tattooed circles, posters with a line of music without text
- Änderung: «pricked» → «tattooed»
<!-- daten: {"art":"gegner","name":"Preacher of the Singers","label":"Traces"} -->

#### BA-en-9823d9 · Gegner „Chimera“, Zeile „Behaviour“ · Band S. 68 · prüfen
Freigabe: ja

- alt: Hungry, frightened, clever. They avoid light and people until they are hungry, then they hunt. They learn traps after one attempt. Injured, they divide and flee so that at least one part survives.
- neu: Hungry, frightened, clever. They avoid light and people until they are hungry, then they hunt. They learn to avoid traps after one attempt. Injured, they divide and flee so that at least one part survives.
- Änderung: «(nichts)» → «to avoid»
<!-- daten: {"art":"gegner","name":"Chimera","label":"Behaviour"} -->

#### BA-en-745601 · Gegner „The Executioner“, Zeile „Weakness“ · Band S. 78 · prüfen
Freigabe: ja

- alt: An acquittal. A Negotiator or Investigator who pleads for a character before him and wins an opposed test on CHA + Persuasion against 5 + 5 ends his hunt for that character
- neu: An acquittal. A Negotiator or Investigator who pleads for a character before him and wins an opposed test of CHA + Persuasion against 5 + 5 ends his hunt for that character
- Änderung: «on» → «of»
<!-- daten: {"art":"gegner","name":"The Executioner","label":"Weakness"} -->

### Hinweise ohne Vorschlag

Diese Stellen weichen ab, der Wert im Band ließ sich aber nicht sicher lesen. Bitte von Hand ansehen.

- Gegner „The Fixer“, Zeile „What remains“: „A notebook with names. Contacts to Grey Meridian, to the Evening, to a service. A favour he owes if one lets him go.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
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
- Gegner „Exorcist of the Congregation“, Zeile „What remains“: „A contact to the Congregation, access to the mirror from Bamberg, a favour. Or an enemy in the Vatican, if the cell betrays him.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The House Spirit“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Waiting One“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Practice“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Cult Leader“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Casting, Spells, Armour, Special.
- Gegner „Head of Security at Morrow Biologics“, Zeile „What remains“: „Access cards, study protocols, a witness. Or an opponent the cell never forgets again.“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Ariadne“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Cultist“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack.
- Gegner „Shadow Being“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Defence / Armour / HP, Special.
- Gegner „Service Agent“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Armour, Special.
- Gegner „Renegade Psion“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Psi, Powers, Pistol, Special.
- Gegner „The Deep Circle“, Zeile „Note“: „No regular combat stats in the book. Defence, armour and HP on the sheet are placeholders (1 / 0 / 1).“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Mercenary“: Kein Werteblock im Band gefunden; in Foundry ohne Gegenstück im Band: Attack, Special.
- Gegner „Germling“, Zeile „What remains“: „Dead larvae for the Institute, a living one if someone was careful: test “Unknown”, +1 Contamination“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „Preacher of the Singers“, Zeile „What Remains“: „The location of a staircase, a congregation that must be freed, and a clue as to how far the threat of the singers already is“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
- Gegner „The Swarm“, Zeile „What remains“: „Metallic bodies for the workshop: A prototype with swarm remnants receives a test “Unknown”. And the question of who sent it“ steht so nicht im Band, Wert im Band nicht sicher gefunden.
