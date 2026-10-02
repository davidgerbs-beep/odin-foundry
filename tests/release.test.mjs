// Test der Ausschlussliste für das Release-ZIP ohne Foundry: node --test tests/release.test.mjs
// Jeder Eintrag in .github/release-ausschluss.txt muss existieren und darf vom System nicht
// verwendet werden, sonst fehlte die Datei im ZIP.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lesePack } from '../werkzeuge/leveldb.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const eintraege = fs.readFileSync(path.join(wurzel, '.github/release-ausschluss.txt'), 'utf8')
  .split('\n').map((z) => z.trim()).filter((z) => z && !z.startsWith('#'));

// Alles, was das System zur Laufzeit liest: Packs, Code, Vorlagen, Stile, Sprachen, Zuordnungen
function laufzeitText() {
  const teile = [];
  for (const p of fs.readdirSync(path.join(wurzel, 'packs'))) {
    for (const d of lesePack(path.join(wurzel, 'packs', p)).values()) teile.push(JSON.stringify(d));
  }
  const dateien = ['odin.mjs', 'system.json'];
  for (const ordner of ['module', 'templates', 'styles', 'lang', 'assets', 'daten']) {
    for (const d of fs.readdirSync(path.join(wurzel, ordner), { recursive: true })) {
      if (/\.(mjs|js|json|hbs|html|css)$/.test(d)) dateien.push(path.join(ordner, d));
    }
  }
  for (const d of dateien) {
    if (!eintraege.includes(d.split(path.sep).join('/'))) teile.push(fs.readFileSync(path.join(wurzel, d), 'utf8'));
  }
  return teile.join('\n');
}

test('Ausschlussliste ist nicht leer und ohne doppelte Einträge', () => {
  assert.ok(eintraege.length > 0);
  assert.equal(new Set(eintraege).size, eintraege.length);
});

test('Jeder ausgeschlossene Pfad existiert', () => {
  for (const e of eintraege) assert.ok(fs.existsSync(path.join(wurzel, e)), e);
});

test('Kein ausgeschlossener Pfad wird vom System verwendet', () => {
  const text = laufzeitText();
  for (const e of eintraege) {
    // Bilder können auch nur mit Dateinamen verwiesen sein (Zuordnungen), Daten mit ihrem Pfad
    const suche = e.startsWith('assets/') ? path.basename(e) : e;
    assert.equal(text.includes(suche), false, `${e} wird verwendet`);
  }
});

test('Kern des Systems ist nie ausgeschlossen', () => {
  for (const e of eintraege) {
    assert.ok(!/^(system\.json|odin\.mjs|packs\/|module\/|lang\/|templates\/|styles\/)/.test(e), e);
  }
});
