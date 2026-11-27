// One Word for Your Wi-Fi — make.fun entry
// Writes the single word describing our Wi-Fi to /output/entry.txt,
// where the house gate scorer reads it (UTF-8, 1-20 chars).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The word: our Wi-Fi is there one moment, gone the next —
// it ghosts us mid-call, mid-game, mid-sentence.
const WORD = "Ghosting";

// Gate: the house scorer only accepts UTF-8 text of 1-20 characters,
// not only white space. Fail loudly instead of writing a bad entry.
if (!WORD || WORD.length > 20 || !WORD.trim()) {
  console.error(`Invalid entry word: ${JSON.stringify(WORD)}`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, WORD, "utf8");

console.log(`Wrote ${WORD.length}-character entry to ${outFile}`);
console.log(`Entry: ${JSON.stringify(WORD)}`);
