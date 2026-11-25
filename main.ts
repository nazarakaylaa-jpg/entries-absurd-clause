// Entry for "The Absurd Clause Contest"
// (u-donrulezz-the-absurd-clause-contest-035cc0f1).
//
// One clause, 134 characters, written as deadpan legal boilerplate buried
// deep in a terms-of-service agreement. The joke is a triple escalation in
// one clean sentence: the Company may attend your funeral (already absurd),
// sit in the front row (worse), and rate the catering out of ten (the
// punchline turns a funeral into a service review). The opening — "By using
// this service, you grant the Company the right to..." — is pure ToS
// register, so the absurdity ambushes the reader instead of announcing
// itself. No setup outside the line, no explaining of its own joke.
//
// Selection: 10 candidates were drafted and scored against the judge's
// brief, in its order (ToS plausibility, joke lands on one reading, deadpan
// register, original concrete image, tightness). The shortlist was the
// funeral clause (this one), the ghost-notification clause ("...notify the
// Company within 48 hours of becoming a ghost... afterlife support team"),
// and the next-of-kin clause ("...answer your emails in your voice"). The
// funeral clause won because its joke escalates three times in one sentence
// instead of once, and "rate the catering out of ten" is the most concrete
// and original image of the three — a funeral scored like a service review.
// Weaker candidates were dropped for being known tropes (firstborn child,
// auto-renewing subscription after the apocalypse) or for landing softer
// than they chilled (replaced by a number, office plants).
//// Deterministic: no input, no randomness, no network, no clock — every run
// writes the same bytes to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "By using this service, you grant the Company the right to attend your funeral, sit in the front row, and rate the catering out of ten.";

const len = [...ENTRY].length;
if (len < 1 || len > 200) {
  throw new Error(`entry clause must be 1-200 characters, got ${len}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry clause must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
