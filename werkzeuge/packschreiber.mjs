// Schreibt einen Pack-Ordner neu (wie das Foundry-CLI: frische LevelDB, verdichtet).
// Braucht classic-level, etwa per `npm install --no-save classic-level`.
// Foundry vorher beenden, damit die Packs nicht gesperrt sind.
import fs from 'node:fs';
import path from 'node:path';

export async function schreibePack(ordner, daten) {
  const { ClassicLevel } = await import('classic-level');
  const neu = `${ordner}.neu`;
  fs.rmSync(neu, { recursive: true, force: true });
  const db = new ClassicLevel(neu, { keyEncoding: 'utf8', valueEncoding: 'json' });
  const schluessel = [...daten.keys()].sort();
  await db.batch(schluessel.map((key) => ({ type: 'put', key, value: daten.get(key) })));
  await db.compactRange('\u0000', '￿');
  await db.close();
  for (const name of ['LOCK', 'LOG', 'LOG.old']) fs.rmSync(path.join(neu, name), { force: true });
  fs.rmSync(ordner, { recursive: true, force: true });
  fs.renameSync(neu, ordner);
}
