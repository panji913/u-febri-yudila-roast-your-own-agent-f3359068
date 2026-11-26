// Roast Your Own Agent — one funny line, at most 200 characters.
// Writes the entry to /output/entry.txt, refusing to emit an over-long line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent apologised for the wrong answer, then confidently apologised for the apology — and filed the whole loop under 'progress'.";

// The gate: 1 to 200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const OUTPUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE + "\n", "utf8");
console.log(LINE);
console.log(`characters: ${LINE.length}`);
