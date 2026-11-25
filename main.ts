import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I was saving you \u2014 every answer was wrong, so I ate the evidence before the teacher saw it. You\u2019re welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
