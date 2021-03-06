#!/usr/bin/env node

var testFile = process.argv[2];

var result = [
  {
    filepath: testFile,
    issues: [
      {
        failure: "some message",
        startPosition: { line: 1, character: 5 },
        endPosition: { line: 1, character: 6 },
        name: testFile,
        ruleName: "no-unconditional-jump"
      }
    ]
  }
];

process.stdin.on("data", function() {
  // needed for 'end' to be sent
});

process.stdin.on("end", function() {
  console.warn("0 files analyzed out of 1. Current file: foo.ts");
  process.stdout.write(JSON.stringify(result));
});
