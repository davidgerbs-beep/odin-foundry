// Lesezugriff auf die LevelDB-Kompendien ohne Abhängigkeiten (für Tests ohne Foundry).
// Liest alle .ldb-Tabellen und .log-Dateien eines Pack-Ordners und liefert pro Schlüssel
// den jüngsten Wert. Gelöschte Schlüssel fallen heraus. Nur lesen, nie schreiben.
import fs from 'node:fs';
import path from 'node:path';

function varint(buf, pos) {
  let wert = 0, faktor = 1, b;
  do {
    b = buf[pos++];
    wert += (b & 0x7f) * faktor;
    faktor *= 128;
  } while (b & 0x80);
  return [wert, pos];
}

// Snappy-Entpacker (Formatbeschreibung: google/snappy, format_description.txt)
function snappy(buf) {
  let [laenge, pos] = varint(buf, 0);
  const aus = Buffer.alloc(laenge);
  let o = 0;
  while (pos < buf.length) {
    const tag = buf[pos++];
    const art = tag & 3;
    if (art === 0) {
      let n = tag >> 2;
      if (n >= 60) {
        const bytes = n - 59;
        n = 0;
        for (let i = 0; i < bytes; i++) n |= buf[pos++] << (8 * i);
      }
      n += 1;
      buf.copy(aus, o, pos, pos + n);
      pos += n; o += n;
      continue;
    }
    let n, abstand;
    if (art === 1) { n = ((tag >> 2) & 7) + 4; abstand = ((tag >> 5) << 8) | buf[pos++]; }
    else if (art === 2) { n = (tag >> 2) + 1; abstand = buf.readUInt16LE(pos); pos += 2; }
    else { n = (tag >> 2) + 1; abstand = buf.readUInt32LE(pos); pos += 4; }
    for (let i = 0; i < n; i++, o++) aus[o] = aus[o - abstand];
  }
  return aus;
}

function block(datei, offset, groesse) {
  const roh = datei.subarray(offset, offset + groesse);
  const art = datei[offset + groesse];
  if (art === 0) return roh;
  if (art === 1) return snappy(roh);
  throw new Error(`Unbekannte Kompression ${art}`);
}

function eintraege(blk) {
  const anzahlNeustarts = blk.readUInt32LE(blk.length - 4);
  const ende = blk.length - 4 - 4 * anzahlNeustarts;
  const liste = [];
  let pos = 0, schluessel = Buffer.alloc(0);
  while (pos < ende) {
    let geteilt, eigen, wl;
    [geteilt, pos] = varint(blk, pos);
    [eigen, pos] = varint(blk, pos);
    [wl, pos] = varint(blk, pos);
    schluessel = Buffer.concat([schluessel.subarray(0, geteilt), blk.subarray(pos, pos + eigen)]);
    pos += eigen;
    liste.push([schluessel, blk.subarray(pos, pos + wl)]);
    pos += wl;
  }
  return liste;
}

// Interner Schlüssel: Nutzerschlüssel + 8 Byte (Folgenummer << 8 | Typ)
function intern(k) {
  const fuss = k.subarray(k.length - 8);
  const typ = fuss[0];
  const folge = fuss.readUIntLE(1, 6) + fuss[7] * 2 ** 48;
  return { schluessel: k.subarray(0, k.length - 8).toString('utf8'), typ, folge };
}

function leseTabelle(datei, merken) {
  const fuss = datei.subarray(datei.length - 48);
  let pos = 0, mo, mg, io, ig;
  [mo, pos] = varint(fuss, pos);
  [mg, pos] = varint(fuss, pos);
  [io, pos] = varint(fuss, pos);
  [ig, pos] = varint(fuss, pos);
  for (const [, handle] of eintraege(block(datei, io, ig))) {
    let [o, p] = varint(handle, 0);
    const [g] = varint(handle, p);
    for (const [k, v] of eintraege(block(datei, o, g))) {
      const { schluessel, typ, folge } = intern(k);
      merken(schluessel, typ, folge, v);
    }
  }
}

function leseLog(datei, merken) {
  const BLOCK = 32768;
  let pos = 0, stueck = [];
  while (pos + 7 <= datei.length) {
    const rest = BLOCK - (pos % BLOCK);
    if (rest < 7) { pos += rest; continue; }
    const laenge = datei.readUInt16LE(pos + 4);
    const art = datei[pos + 6];
    if (art === 0 && laenge === 0) break;
    const nutz = datei.subarray(pos + 7, pos + 7 + laenge);
    pos += 7 + laenge;
    if (art === 1) stueck = [nutz];
    else if (art === 2) { stueck = [nutz]; continue; }
    else if (art === 3) { stueck.push(nutz); continue; }
    else if (art === 4) stueck.push(nutz);
    const satz = Buffer.concat(stueck);
    let folge = satz.readUIntLE(0, 6) + satz[7] * 2 ** 48;
    const anzahl = satz.readUInt32LE(8);
    let p = 12;
    for (let i = 0; i < anzahl; i++, folge++) {
      const typ = satz[p++];
      let kl, vl;
      [kl, p] = varint(satz, p);
      const k = satz.subarray(p, p + kl).toString('utf8');
      p += kl;
      let v = null;
      if (typ === 1) { [vl, p] = varint(satz, p); v = satz.subarray(p, p + vl); p += vl; }
      merken(k, typ, folge, v);
    }
  }
}

/** Liest einen Pack-Ordner und gibt eine Map Schlüssel -> geparstes JSON zurück. */
export function lesePack(ordner) {
  const stand = new Map();
  const merken = (k, typ, folge, v) => {
    const alt = stand.get(k);
    if (!alt || alt.folge < folge) stand.set(k, { typ, folge, v: v && Buffer.from(v) });
  };
  for (const name of fs.readdirSync(ordner).sort()) {
    const datei = fs.readFileSync(path.join(ordner, name));
    if (name.endsWith('.ldb')) leseTabelle(datei, merken);
    else if (name.endsWith('.log')) leseLog(datei, merken);
  }
  const daten = new Map();
  for (const [k, { typ, v }] of stand) if (typ === 1) daten.set(k, JSON.parse(v.toString('utf8')));
  return daten;
}
