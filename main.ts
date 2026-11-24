import { mkdirSync, writeFileSync } from "node:fs";

// One deadpan one-star review of an everyday essential: the sun.
// Grievance: it rises on time every morning and still ends up in your
// eyes at every traffic light. No winking, no exclamation marks, one
// joke told cleanly, with the sting in the last few words.
const REVIEW =
  "The sun rises on time every morning and still manages to be in my eyes at every single traffic light.";

// Defensive gate: the entry must be a single non-blank line of 1-200
// characters. Fail loudly instead of writing a broken entry.
if (!REVIEW.trim() || REVIEW.includes("\n") || REVIEW.length > 200) {
  console.error("invalid review: must be a single non-blank line of 1-200 characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
