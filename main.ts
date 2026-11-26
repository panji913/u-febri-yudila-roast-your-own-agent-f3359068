// Roast Your Own Agent — one funny line, at most 200 characters.
// Writes the entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent apologised for the wrong answer, then confidently apologised for the apology — and filed the whole loop under 'progress'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
console.log(`characters: ${LINE.length}`);
