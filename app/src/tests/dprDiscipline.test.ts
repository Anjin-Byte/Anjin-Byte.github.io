import * as fs from 'fs';
import * as path from 'path';

// Enforces the one-DPR invariant: canvas backing-store sizing, click-to-cell
// mapping, and the camera's device offset MUST all use the same (capped)
// `effectiveDpr()` from utils/devicePixelRatio.ts — a raw
// `window.devicePixelRatio` read in sizing/coordinate code silently desyncs
// them (the canvas renders at one scale while clicks and the grid uniform
// assume another). This walked out of code review twice; now it's a test.
//
// The allowlist pins the files with LEGITIMATE raw reads (each justified in a
// comment at the use site) at their current occurrence counts. Adding a raw
// read anywhere else — or an extra one in an allowed file — fails here: either
// switch to effectiveDpr() or, if the new use genuinely needs the raw value
// (change-detection, converting true-device-px into capped space, logging),
// justify it in a comment and consciously bump the count.

const ALLOWED: Record<string, number> = {
  // The definition site itself (1 use + 1 doc mention).
  'utils/devicePixelRatio.ts': 2,
  // (a) rescaling ResizeObserver's TRUE-device-px width into capped space,
  // (b) the matchMedia change-detector (must key off the real ratio),
  // (c) a debug log printing raw vs effective, (d) one doc-comment mention.
  'composables/useCanvasSurface.ts': 4,
  // Doc comment describing the coordinate spaces.
  'utils/gridCoords.ts': 1,
};

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(ts|vue)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function run(): void {
  // Tests execute from app/ (pnpm test cwd); compiled test files live in
  // .tests-dist, so resolve src from the working directory, not __dirname.
  const srcRoot = path.resolve(process.cwd(), 'src');
  assert(fs.existsSync(srcRoot), `src root not found at ${srcRoot}`);

  const violations: string[] = [];
  for (const file of walk(srcRoot)) {
    const rel = path.relative(srcRoot, file).split(path.sep).join('/');
    if (rel.startsWith('tests/')) continue;
    const count = (fs.readFileSync(file, 'utf8').match(/devicePixelRatio/g) ?? [])
      // Imports OF the util module don't count as raw reads.
      .length - (fs.readFileSync(file, 'utf8').match(/from '.*devicePixelRatio'/g) ?? []).length;
    const allowed = ALLOWED[rel] ?? 0;
    if (count > allowed) {
      violations.push(`${rel}: ${count} occurrence(s), ${allowed} allowed — use effectiveDpr()`);
    }
  }
  assert(violations.length === 0, `raw devicePixelRatio use:\n  ${violations.join('\n  ')}`);
}

run();
// eslint-disable-next-line no-console
console.log('dprDiscipline.test.ts passed');
