# O.D.I.N. – Occult Dynamics Intelligence Network für Foundry VTT

Spielsystem für **O.D.I.N.**, das deutschsprachige Pen-&-Paper-Rollenspiel um die Agenten eines okkulten Geheimdienstes (Zweite Edition). Regelwerk und Charaktergenerator gibt es kostenlos auf [odin-rpg.pages.dev](https://odin-rpg.pages.dev).

## Installation

In Foundry unter **Spielsysteme → System installieren** diese Manifest-URL eintragen:

```
https://github.com/davidgerbs-beep/odin-foundry/releases/latest/download/system.json
```

## Was das System kann

- **Personalakte in drei Blättern**, gestaltet wie die Klassenbögen aus dem Charaktergenerator: Kopfbalken in der Farbe der Klasse mit Emblem, Attributkarten mit Kreisen, Kästchenleisten für Lebenspunkte, Belastung, PSI und Magie-Energie, Fertigkeiten in drei Spalten mit weißen und bunten Würfeln. Blatt 2 zeigt „Deine Würfel“, die Fähigkeiten der Subklasse zum Anklicken, Waffen, Ausrüstung und die Signatur. Blatt 3 enthält Signatur, Klassenbaum und Laufbahn.
- **Klassenbäume aller sechs Klassen** aus den Klassenbüchern: Stamm, Äste, Säulen, Siegel, Arsenal und Wand mit allen Knoten. Knoten werden per Klick gekauft; der Bogen prüft Rang, Voraussetzungen, fremde Äste mit Aufpreis und freie EP. Passive Boni (zum Beispiel Tiefe Reserve, Stabile Wand) wirken sofort.
- **Signatur der Klasse**: Helm, Kristall, Silber, Legenden, Prototypen und offene Akten als Tabellen wie auf dem Papierbogen. Der Preis der Klasse ergibt sich daraus und aus dem Klassenbaum automatisch, weitere Punkte lassen sich von Hand setzen.
- **Steigern mit EP** nach Kapitel VIII (Attribut neuer Wert × 5, Fertigkeit neuer Wert × 2, neue Fertigkeit 3). Jede Ausgabe landet in der Laufbahn.
- **Kompendien**: zehn fertige Agenten mit Porträts (Grundregelwerk und Schnellstart), Waffen, Rüstungen, Ausrüstung und Artefakte, das komplette Arsenal, Psi-Kräfte, Zauber und der Bedrohungsatlas mit Bildern. Dazu die Abenteuer als Journale mit Karten, Handouts und verlinkten Gegnern: Nexus-Splitter, Das Haus am Stausee, die acht Grauen Akten, die Kampagne Die Tür mit 24 Missionen und Die anderen Dienste mit 16 Dossiers.
- **Abenteuer mit einem Klick**: Schnellstart, Graue Akten, Die Tür und Die anderen Dienste als Abenteuerpakete. Ein Import legt Journale, Gegner, Szenen und Ordner in der Welt an, alle Verweise bleiben erhalten.
- **Szenen**: die acht Karten der Grauen Akten als spielfertige Szenen mit Notizen auf allen nummerierten Orten (ein Klick öffnet die Karte im Journal), dazu Stimmungsbilder für den Schnellstart und alle Missionen der Tür. Die Abenteuer-Journale verlinken ihre Szenen.
- **Würfeltabellen**: 152 Tabellen aus allen Büchern, darunter Trauma, Rückkopplung, Kristallriss, der Preis jeder Klasse, Vorzeichen, unbekannte Artefakte, Zufallsmission und „Eine Akte in zehn Minuten“, dazu alle Tabellen zur Charaktererschaffung aus den Klassenbüchern. Gewürfelt wird nur mit W6: Tabellen mit zwölf Zeilen nutzen zwei W6 (der erste gibt die Zeile, der zweite die Hälfte).
- **Makros**: Probe würfeln, Grauen-Probe für markierte Token, Angriff mit Waffe, Preis der Klasse, freier Würfelpool, Auffüllen sowie Zufallsmission und Akte in zehn Minuten als Chatkarte für die Spielleitung.
- **Regeln zum Nachschlagen**: Kompendium „Regeln“ mit elf Journalen aus dem Grundregelwerk (Kurzreferenz, Würfelsystem, Fertigkeiten, Kampf, Belastung und Grauen, Psi-Kräfte, Thaumaturgie, Aufstieg, Ressourcen und Artefakte, Spielleitung, Glossar). Würfeltabellen darin sind direkt verlinkt, Spieler dürfen das Kompendium lesen.
- **Gegner auf den Karten**: Die acht Karten der Grauen Akten tragen die Gegner der Akte als versteckte Token an ihren Orten. Die Spielleitung deckt sie im richtigen Moment auf.
- **Runde Token** für Agenten (Messingrand) und Gegner (roter Rand), aus den Porträts und Bildern des Bedrohungsatlas.
- **Bunte Würfel in Spielerfarbe** mit Dice So Nice (abschaltbar in den Einstellungen).
- **Empfohlene Module**: German [Core] (lang-de) für die deutsche Foundry-Oberfläche und Dice So Nice.
- **Eigene Kompendium-Banner** im Aktenlook aus der Kunst der Bücher.
- **Rüstung**: Helm, Schild und Energieschild zählen als Zuschlag und werden zur höchsten angelegten Rüstung addiert.
- **Agenten-Bogen** mit neun Attributen und 63 Fertigkeiten. Eigene Punkte werden eingetragen; Kernfertigkeiten, Grundausbildung und Boni der Subklasse rechnet der Bogen selbst. Abgeleitete Werte (Lebenspunkte, Belastbarkeit, Initiative, Verteidigung, PSI-Punkte, Magie-Energie, Startkapital) entstehen automatisch. Warnungen bei Punktbudgets, Nebengaben und falschen Fertigkeiten.
- **Proben** mit zwei Würfelfarben: weiße Würfel (Attribut) ab 5, bunte Würfel (Fertigkeit) ab 4. Dialog mit Attribut, Fertigkeit, Schwierigkeit, Bonus- und Maluswürfeln. Chatkarte mit Erfolgen, Überschuss, Patzer und grandiosem Erfolg. Mit Dice So Nice sind weiße und bunte Würfel farblich getrennt.
- **Kampf**: Angriff gegen das markierte Ziel, Schaden = Waffe + Überschuss − Rüstung (Durchschlag berücksichtigt), direkt auf die Lebenspunkte oder per Knopf durch die Spielleitung.
- **Grauen-Probe**: Belastung nach Stufe, bei voller Leiste Traumawurf, das Trauma landet als Eintrag auf dem Bogen.
- **Psi-Kräfte und Zauber** als Items: Kosten, Überziehen, Rangprüfung, Rückkopplung und Kristallriss bei Patzern.
- **Der Preis der Klasse** (Resonanz, Flüstern, Nachhall, Schwund, Kontamination, Verdacht): verdeckter W6 an die Spielleitung.
- **Import** einer Figur aus dem Charaktergenerator (JSON).
- **Gegner-Bogen** mit Stufe, Ursprung, Grauen und beliebig vielen Pools „weiß + bunt“.
- Item-Typen: Fertigkeit, Psi-Kraft, Zauber, Ausrüstung, Waffe, Rüstung, Signatur, Knoten, Trauma, Kontakt.

Sprachen: Deutsch (Standard) und Englisch. Bögen, Klassenbäume, Signaturen, Kompendien, Szenen, Würfeltabellen und Makros gibt es in beiden Sprachen, jeweils mit dem Wortlaut der deutschen bzw. englischen Bücher. „Die anderen Dienste“ liegt auch auf Englisch vor („The Other Services“). Die Kompendienliste zeigt nur die Kompendien der eingestellten Sprache (in den Einstellungen umschaltbar). Der Import nimmt Figuren aus dem deutschen und dem englischen Charaktergenerator an.

Languages: German (default) and English. Sheets, class trees, signatures, compendiums, scenes, roll tables and macros are available in both languages, using the wording of the German and English books. Characters from both the German and the English character generator can be imported.

## Regeln

Grundregelwerk Zweite Edition und Änderungsliste 2. Bei Widersprüchen gelten die Bücher.
