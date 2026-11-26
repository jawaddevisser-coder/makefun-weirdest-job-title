import { mkdirSync, writeFileSync } from "node:fs";

// Weirdest Job Title — Blind Judge Showdown
// One job title, 60 characters at most. A real-sounding corporate title
// with one hilariously specific twist beats a generic oddity.
const TITLE = "Senior Vice President of Lost Remote Controls";

// The gate rejects anything over 60 characters or blank, so enforce it
// here instead of trusting the string by eye.
const title = TITLE.trim();
if (title.length === 0 || title.length > 60) {
  throw new Error(`Title must be 1-60 characters, got ${title.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title + "\n", "utf8");
console.log(`Wrote ${title.length} characters to /output/entry.txt`);
console.log(title);
