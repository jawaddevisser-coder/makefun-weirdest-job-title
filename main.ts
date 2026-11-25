import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: a real-sounding job with one hilariously specific twist.
const LINE = "Official Taste Tester for Airline Peanuts, First Class Only";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Self-check: the gate needs 1-60 chars of real text.
if (LINE.length < 1 || LINE.length > 60 || !LINE.trim()) {
  throw new Error(`job title must be 1-60 chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
