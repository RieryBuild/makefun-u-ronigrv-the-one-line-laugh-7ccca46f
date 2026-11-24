import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I checked my pockets before the laundry and still washed my headphones, my bus pass, and the last shred of faith I had in myself.";

const FALLBACK_OUTPUT_DIR = "/output";

function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR || FALLBACK_OUTPUT_DIR, JOKE);
