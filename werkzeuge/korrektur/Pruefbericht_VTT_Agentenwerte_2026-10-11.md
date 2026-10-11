# VTT-Abgleich, Prüfteil: Agentenwerte Nordlicht und Martha Kellner

Stand 11.10.2026, ODIN Checker. Aus der Common-Zeile „Gezielt korrigieren" vom 11.10.: die drei Fragen „Ist das Buch richtig?". Die Änderungslisten je Band bleiben beim ODIN Writer. Werkzeug und Korrektur liegen beim ODIN Coder.

Geprüft: `Zur_Sichtpruefung/Band18_Nordlicht_1977/ODIN_18_Nordlicht_1977.pdf` (189 S.) und `ODIN_EN_18_Nordlicht_1977.pdf` (187 S.), die alten Fassungen aus `ZUM_LOESCHEN/Alte_Fassungen/Nordlicht_Spielersicht_2026-10-10/`, `Finsih/ODIN_08_Spielleiterbuch.pdf`, die Realm-Quellen unter `vtt/odin-werkstatt/realm/abenteuer/nordlicht-1977/` und `.../haus-am-stausee/`.

## Die drei Antworten in einem Satz

| Frage | Antwort |
|---|---|
| Garn (1977) IN 6 im englischen Buch, Foundry 5 | Die Meldung beruht auf einer Verwechslung. Garn hat IN 5, überall. Die 6 gehört zu Lot, und dort steht in Realm ebenfalls 6. |
| Salz liegt im Buch in fünf Fertigkeiten 1 höher | Das Buch ist richtig, und der Befund ist größer: Realm ist bei allen zwölf Datensätzen zu niedrig, 104 Zeilen. |
| Martha Kellner und Spuk weichen vom Bedrohungsatlas ab | Die Abweichung gehört nicht zur Durchsicht. Der Band weist sie selbst aus, wortgleich schon vor der Durchsicht. Nichts anzugleichen, ein Kann-Punkt. |

## 1. Garn: kein Fehler, sondern eine verschobene Zuordnung

Garn ist Colette Marchais, Agent, Spy. IN steht bei ihr in beiden Jahren auf 5, und das in allen vier Quellen: deutsches Buch S. 174, englisches Buch S. 171 („INT 5 5"), alte englische Fassung S. 169, Realm-Datensatz `Garn (1947)` und `Garn (1977)`.

Der Wert 6 existiert im Anhang, aber bei einem anderen Agenten. **Lot**, Dr. Ingeborg Rask, hat 1977 IN 6, im deutschen Buch S. 176, im englischen S. 173 und in der alten Fassung S. 170. Realm führt für Lot (1977) ebenfalls IN 6. Auch dort stimmt alles.

Erklären lässt sich die Meldung durch die Zuordnung der Werteblöcke, und das ist der Punkt, der dem Coder nützt. Die Tabellen laufen über den Spalten- und Seitenbruch: Salz' Block beginnt auf S. 173 unten links und endet auf S. 174, der von Garn beginnt auf derselben Seite 174 rechts. Wer die Blöcke in Seitenreihenfolge liest und ihnen die Namen aus der Reihenfolge der Überschriften zuweist, bekommt jeden Agenten um eine Position versetzt. Mir ist dieser Fehler beim ersten Durchlauf selbst passiert, und er erzeugt exakt die gemeldete Zeile.

Verlässlich zuordnen lässt sich über das Alter, das jeden Agenten eindeutig bestimmt:

| Agent | Codename | Alter 1947 / 1977 |
|---|---|---|
| Harald Ness | Salz | 26 / 56 |
| Colette Marchais | Garn | 25 / 55 |
| Dr. Ingeborg Rask | Lot | 30 / 60 |
| Ilga Ozola | Möwe | 18 / 48 |
| Dilys Vaughan | Schiefer | 27 / 57 |
| Torsten Ekvall | Zeuge | 34 / 64 |

**Die Attribute insgesamt stimmen.** Neun Attribute bei sechs Agenten in zwei Jahren ergeben 108 Werte je Quelle, und beide Buchfassungen und Realm stimmen in jedem einzelnen überein. Auch Lebenspunkte, Belastbarkeit, Initiative, Verteidigung und Rang stimmen durchgehend. An den Attributen ist nichts zu korrigieren.

## 2. Salz und die anderen fünf: das Buch ist richtig, Realm hat die alte Fassung

Die Fertigkeiten sind bei **allen zwölf** Datensätzen betroffen, nicht nur bei Salz. Die Summen:

| Agent | 1947 Realm | 1947 Buch | 1977 Realm | 1977 Buch |
|---|---|---|---|---|
| Salz | 30 | 35 | 41 | 46 |
| Garn | 27 | 35 | 39 | 47 |
| Lot | 23 | 35 | 36 | 48 |
| Möwe | 22 | 35 | 31 | 44 |
| Schiefer | 22 | 35 | 32 | 45 |
| Zeuge | 24 | 35 | 34 | 45 |

Die Realm-Spalte ist nicht irgendeine Abweichung. Sie ist auf den Punkt die **alte Buchfassung vor der Durchsicht vom 10.10.** Der Vergleich mit `ZUM_LOESCHEN/Alte_Fassungen/Nordlicht_Spielersicht_2026-10-10/Finsih/ODIN_18_Nordlicht_1977.pdf` ergibt für 1947 genau 30, 27, 23, 22, 22, 24. Für 1977 ergibt er 41, 39, 36, 31, 32, 34. Realm wurde also aus dem Stand vor der Durchsicht gebaut. Einen eigenen Fehler hat es dabei nicht gemacht.

**Warum die neue Fassung die richtige ist.** Das Grundregelwerk gibt bei der Erschaffung in Schritt 5 „Fertigkeiten: 25 Punkte, dazu Grundausbildung +1 auf Ausweichen, Geistige Widerstandskraft und Wahrnehmung" und in Schritt 2 „Hauptklasse wählen: +1 auf drei Kernfertigkeiten". Das sind 31 Punkte, bevor ein einziger Erfahrungspunkt ausgegeben ist. Der Nordlicht-Anhang setzt darauf auf: „1947 ist jeder Agent mit den Regeln zur Erschaffung gebaut und hat 20 Erfahrungspunkte aus Kriegserfahrung erhalten."

Mit diesen 20 EP sind 35 erreichbar. Eine neue Fertigkeit auf 1 kostet 3 EP, eine 1 auf 2 kostet 4, also vier Punkte für 12 bis 16 EP. Die alten Summen lagen dagegen **unter** 31 und waren damit mit keiner Erschaffung erreichbar. Bei Möwe und Schiefer fehlten neun Punkte. Die Durchsicht hat genau das behoben, bei allen sechs Agenten gleichmäßig auf 35.

Deutsch gegen Englisch: alle zwölf Listen haben in beiden Sprachen dieselbe Summe. Zeuge 1977 sah im ersten Lauf englisch nach 32 aus, das war der Spaltenumbruch auf S. 175. Die Liste läuft rechts weiter, ab „Persuasion 2", und ergibt ebenfalls 45 bei 17 Fertigkeiten.

**Für die Freigabeliste.** 104 Zeilen, aufgeteilt nach Agent und Jahr. Die vollständige Aufstellung alt nach neu hängt unten an. Freigegeben ist damit die Richtung: Realm und Foundry ziehen auf die Buchwerte nach, das Buch bleibt, wie es ist.

Der Writer kommt in seinem LIESMICH vom 11.10. unabhängig zum selben Ergebnis und nennt den Grund aus seiner Sicht: „In der Durchsicht wurden alle sechs fertigen Agenten auf 35 Fertigkeitspunkte aufgefüllt, dazu gibt der Eskorte-Veteran jetzt +2 Schusswaffen." Zwei Wege, ein Befund.

## 3. Martha Kellner: eine ausgewiesene Setzung, kein Fehler

Der Spielleiterbuch-Anhang nennt die Abweichung selbst, im Kasten auf S. 132:

> MARTHA KELLNER, DIE WARTENDE
> Werte wie „Die Wartende" im Bedrohungsatlas, mit diesen Änderungen:
> Sie hält nur vier Spuke um sich … Ihr Angriff trifft nur Erwachsene. Kinder schützt sie. Wer versucht, Paul aus dem Haus zu bringen, erlebt den Ort als Gegner. Wer mit ihr redet, wird angehört. Ein Kristall im Seegrund macht sie stärker. Wird er gefunden und in Beryllium verpackt, würfeln alle ihre Angriffe mit −2 Würfeln.

Der Kasten steht in der alten Fassung vom 11.10. wortgleich. Die Durchsicht hat im Anhang nur die EP-Zeile und die Tatortbegehung-Stelle berührt. Die Antwort auf die Frage ist also: nein, die Abweichung gehört nicht zur Durchsicht, und sie ist auch keine, die korrigiert werden müsste. Vier Spuke liegen innerhalb der „bis zu zwölf" des Atlas.

**Realm bildet das bereits richtig ab**, und das sauber. Der Datensatz `Martha Kellner, die Wartende` nennt alle fünf Änderungen wörtlich in seiner Beschreibung. Initiative 5 und Grauen 3 stimmen mit dem Atlas, und das Blatt vermerkt von sich aus: „Keine regulären Kampfwerte laut Buch. Verteidigung, Rüstung und LP im Datenblatt sind Platzhalter (1 / 0 / 1)." Der Atlas sagt dort „Unverwundbar. Ihre Macht sinkt nur, wenn die Zelle ihr Warten beendet." Das ist nicht zu ändern.

Der Spuk stimmt ebenfalls. Realm führt Initiative 3, Verteidigung 2, Rüstung 0, LP 5 und Grauen 1, der Atlas auf S. 75 „Initiative 3", „2 / 0 / 5, nur durch Salz, Licht oder Silber verwundbar" und „Unheimlich (1)". Der Band ändert den Spuk nicht, Realm auch nicht.

**Ein Kann-Punkt.** Im Feld „Besonderheit" desselben Kellner-Datensatzes steht die Atlasfassung „Hält bis zu zwölf Tote als Spuk um sich", während die Beschreibung zwei Felder weiter „nur vier Spuke" sagt. Eine Spielleitung, die am Tisch das Datenblatt aufruft und nicht die Beschreibung liest, bekommt zwölf. Vorschlag: im Besonderheit-Feld „vier" einsetzen und den Atlaswert als Zusatz nennen, englisch entsprechend bei `Martha Kellner, the Waiting One`.

## Nicht abgedeckt

- Die Satzvergleiche der Journale (Graue Akten 72 und 91 Sätze, Nordlicht 167 und 197) sind nicht nachgezählt. Sie gehören zu den Änderungslisten beim Writer.
- Callum Ferris aus Fremdkörper ist nicht geprüft, dazu lag keine Frage vor.
- Geprüft sind die Realm-Quellen unter `vtt/odin-werkstatt/realm/`. Ob die Foundry-Kompendien in `release-0.4.0/packs` dieselben Werte führen, ist nicht geprüft; sie liegen als LevelDB vor. Die Angabe „Foundry 5" aus der Aufgabe stimmt mit Realm überein.
- Die Schützlinge der sechs Agenten haben keine Werteblöcke im Band und sind deshalb nicht verglichen.
- Geprüft sind die sechs fertigen Agenten aus Anhang A. Die Gegnerwerte aus Anhang B sind nicht gegen Realm gehalten. Der Writer nennt in seinem LIESMICH vom 11.10. Änderungen an den Söldnern des Sammlers, an den Hunden, am Verbindungsoffizier, an den Jägern der Abteilung 13, an Haugen, an den Polizisten und an Schwellenhüter und Kristallwächter. Diese Zeilen stehen in seinen Listen und brauchen eine eigene Freigabe.

## Anhang: Freigabeliste Realm nach Buch, 104 Zeilen

Alle Werte sind Fertigkeitspunkte. Links der Stand in Realm, rechts der Buchwert, der gilt.

### Salz (1947), 30 nach 35

| Fertigkeit | alt | neu |
|---|---|---|
| Heimlichkeit | 1 | 2 |
| Medizin | 1 | 2 |
| Nahkampf | 2 | 3 |
| Schusswaffen | 4 | 5 |
| Wahrnehmung | 2 | 3 |

### Salz (1977), 41 nach 46

| Fertigkeit | alt | neu |
|---|---|---|
| Heimlichkeit | 1 | 2 |
| Medizin | 1 | 2 |
| Nahkampf | 2 | 3 |
| Schusswaffen | 5 | 6 |
| Wahrnehmung | 3 | 4 |

### Garn (1947), 27 nach 35

| Fertigkeit | alt | neu |
|---|---|---|
| Fahren | 1 | 2 |
| Fingerfertigkeit | 0 | 2 |
| Kryptografie | 1 | 2 |
| Menschenkenntnis | 2 | 4 |
| Schusswaffen | 2 | 3 |
| Überzeugen | 2 | 3 |

### Garn (1977), 39 nach 47

| Fertigkeit | alt | neu |
|---|---|---|
| Fahren | 1 | 2 |
| Fingerfertigkeit | 0 | 2 |
| Kryptografie | 3 | 4 |
| Menschenkenntnis | 4 | 6 |
| Schusswaffen | 2 | 3 |
| Überzeugen | 2 | 3 |

### Lot (1947), 23 nach 35

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 3 | 4 |
| Chemie | 2 | 3 |
| Energiemanipulation | 1 | 2 |
| Ermittlung | 0 | 1 |
| Fahren | 0 | 1 |
| Handwerk | 1 | 2 |
| Ingenieurwesen | 2 | 3 |
| Medizin | 0 | 2 |
| Navigation | 2 | 3 |
| Technik | 3 | 4 |
| Wahrnehmung | 2 | 3 |

### Lot (1977), 36 nach 48

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 4 | 5 |
| Chemie | 3 | 4 |
| Energiemanipulation | 3 | 4 |
| Ermittlung | 0 | 1 |
| Fahren | 0 | 1 |
| Handwerk | 1 | 2 |
| Ingenieurwesen | 3 | 4 |
| Medizin | 0 | 2 |
| Navigation | 3 | 4 |
| Technik | 5 | 6 |
| Wahrnehmung | 3 | 4 |

### Möwe (1947), 22 nach 35

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 0 | 1 |
| Etikette | 0 | 1 |
| Fahren | 0 | 1 |
| Geschichte | 0 | 1 |
| Heimlichkeit | 1 | 2 |
| Konzentration | 3 | 4 |
| Medizin | 1 | 2 |
| Psi-Kampf | 1 | 2 |
| Täuschung | 0 | 2 |
| Wahrnehmung | 2 | 3 |
| Überzeugen | 1 | 3 |

### Möwe (1977), 31 nach 44

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 0 | 1 |
| Etikette | 0 | 1 |
| Fahren | 0 | 1 |
| Geschichte | 0 | 1 |
| Heimlichkeit | 1 | 2 |
| Konzentration | 5 | 6 |
| Medizin | 1 | 2 |
| Psi-Kampf | 3 | 4 |
| Täuschung | 0 | 2 |
| Wahrnehmung | 3 | 4 |
| Überzeugen | 1 | 3 |

### Schiefer (1947), 22 nach 35

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 2 | 4 |
| Alchemie | 1 | 3 |
| Geschichte | 1 | 3 |
| Handwerk | 0 | 1 |
| Konzentration | 3 | 4 |
| Medizin | 0 | 1 |
| Menschenkenntnis | 0 | 2 |
| Wahrnehmung | 1 | 2 |
| Überzeugen | 0 | 1 |

### Schiefer (1977), 32 nach 45

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 3 | 5 |
| Alchemie | 1 | 3 |
| Geschichte | 1 | 3 |
| Handwerk | 0 | 1 |
| Konzentration | 4 | 5 |
| Medizin | 0 | 1 |
| Menschenkenntnis | 0 | 2 |
| Wahrnehmung | 2 | 3 |
| Überzeugen | 0 | 1 |

### Zeuge (1947), 24 nach 35

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 0 | 1 |
| Einschüchtern | 0 | 1 |
| Geschichte | 1 | 2 |
| Heimlichkeit | 1 | 2 |
| Medizin | 0 | 1 |
| Okkultismus | 2 | 3 |
| Schusswaffen | 0 | 2 |
| Sicherheitssysteme | 0 | 1 |
| Spurenlesen | 2 | 3 |
| Überzeugen | 1 | 2 |

### Zeuge (1977), 34 nach 45

| Fertigkeit | alt | neu |
|---|---|---|
| Akademisches Wissen | 0 | 1 |
| Einschüchtern | 0 | 1 |
| Geschichte | 1 | 2 |
| Heimlichkeit | 1 | 2 |
| Medizin | 0 | 1 |
| Okkultismus | 4 | 5 |
| Schusswaffen | 0 | 2 |
| Sicherheitssysteme | 0 | 1 |
| Spurenlesen | 3 | 4 |
| Überzeugen | 1 | 2 |

Die englischen Datensätze führen dieselben Zahlen und dieselben Feldnamen wie die deutschen, geprüft über alle zwölf. Die Liste gilt deshalb für beide Sprachen.
