// A working u-rama-melon-make-the-ai-judge-laugh-302d0825 entry (Node 22, standard library only):
// it writes one fixed joke about office life, a single line under 200 characters, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 200 characters that is not only white space, and the judge
// reads exactly the bytes written, line ends included, so the text is one line with no line end.
// The joke: a daily standup that drags on so long the intern is promoted mid-meeting and ends up
// running it — a true office observation (standups that never end) with a surprising last turn.
// Tightened in revision: "yesterday" and "that" were cut, so the line reads cleanly aloud in one breath.
// The program runs twice with no network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'Our daily standup ran so long the intern aged out of the internship, got promoted, and now runs the standup.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
