import * as fs from 'fs';
import * as path from 'path';

// Enforces the breakpoint set (responsive Stage 4). Two rules:
//
//   1. Every px threshold in a @media or @container query is one of the
//      canonical values below. A hand-typed number that is nobody's breakpoint
//      is how the retired 900px outlier happened — it created an inconsistent
//      901-960 band on landscape phones, where every section had collapsed to
//      one column except the contact band, and it existed only because no
//      constant did. A 400px one appeared and was retired the same way.
//
//   2. The CSS token and the TypeScript constant for the panel width agree.
//      `PANEL_MAX_WIDTH` in layoutConfig.ts and `--panel-max` in App.vue are
//      the same number described twice; report 01 caught that mirror already
//      being false (the docstring claimed it matched the CSS, and under the old
//      html{zoom} it did not).
//
// A media query cannot read a custom property, so the numbers below genuinely
// have to appear as literals in the stylesheets. That is exactly why this test
// exists: the tokens in App.vue are the authority, and this is what binds the
// literals to them. Same mould as dprDiscipline.test.ts / themeParity.test.ts.
//
// ── NOT ENFORCED YET: font sizes ────────────────────────────────────────────
// The Stage 4 plan also called for failing the build on a hard-coded
// `font-size` outside the type scale. That is deliberately absent, and the
// order matters: content currently carries 46 font-size declarations across 26
// distinct values, roughly half of them near-duplicate clusters (0.94 / 0.95 /
// 0.96rem, a 2% spread) that should be collapsed rather than blessed. Pinning
// an allowlist now would approve all 26 as canonical and make the smell
// permanent BY TEST. Add the rule after the dedupe in
// docs/responsive/07-type-and-space-adoption.md, not before.

/** The canonical set. Adding one is a decision — write down what content
 *  breaks at that width, in App.vue's token block, before adding it here. */
const VIEWPORT_BREAKPOINTS = new Set([
  640,  // --bp-small   : small-phone step (chrome trims, hero tightens)
  960,  // --bp-content : section grids collapse; nav dock switches rail <-> bar
  961,  // --bp-content + 1: the min-width half of a max/min pair
]);

/** Container-query thresholds, measured against `.world-panel`'s inline size.
 *  A different quantity from viewport width — in rail mode they differ by
 *  --nav-reserve — so they are a separate set, not extra viewport values. */
const CONTAINER_BREAKPOINTS = new Set([
  660,  // --bp-island       : the head grids stop fitting below this
  800,  // --bp-island-media : the project card's print-beside-text spread
  801,  // --bp-island-media + 1: the min-width half of the pair
  // --bp-island-identity: the hero's portrait-beside-NAME spread. A separate
  // floor from 800 because a display name at --step-4 does not reflow the way
  // the project card's blurb does: at an 808 container the name column is 254px
  // for a string needing 250-280px, so it wrapped and the tagline broke
  // mid-word. Full derivation in App.vue's token block.
  960,
  961,  // --bp-island-identity + 1: the min-width half of the pair
]);

/** Feature queries that carry no px threshold are not breakpoints at all. */
const FEATURE_QUERY = /\((?:prefers-|pointer|hover|forced-colors|resolution|orientation)/;

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}

/**
 * Blank out comments, preserving newlines so reported line numbers stay true.
 *
 * Not optional. These files explain their breakpoints in prose, and the prose
 * naturally quotes rules — the comment recording *why* the 400px block was
 * removed contains the literal `@media (max-width: 400px)`. Without this the
 * test fails on its own documentation, which trains people to delete the
 * documentation. A guard has to be able to tell code from writing about code.
 */
function stripComments(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1: string) => p1 + ' '.repeat(m.length - p1.length));
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(vue|css)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function checkThresholds(srcRoot: string, violations: string[]): void {
  // Matches `@media (max-width: 960px)` and `@container island (min-width: 40px)`
  // alike; the leading keyword decides which set applies.
  const rule = /@(media|container)\b([^{]*)/g;
  const px = /\((?:min|max)-width:\s*(\d+(?:\.\d+)?)px\)/g;

  for (const file of walk(srcRoot)) {
    const rel = path.relative(srcRoot, file).split(path.sep).join('/');
    if (rel.startsWith('tests/')) continue;
    const text = stripComments(fs.readFileSync(file, 'utf8'));
    for (const m of text.matchAll(rule)) {
      const kind = m[1];
      const conditions = m[2] ?? '';
      if (FEATURE_QUERY.test(conditions)) continue;
      const allowed = kind === 'container' ? CONTAINER_BREAKPOINTS : VIEWPORT_BREAKPOINTS;
      for (const hit of conditions.matchAll(px)) {
        const value = Number(hit[1]);
        if (!allowed.has(value)) {
          const line = text.slice(0, m.index).split('\n').length;
          violations.push(
            `${rel}:${line}: @${kind} uses ${value}px, which is not a canonical ` +
            `${kind === 'container' ? 'container' : 'viewport'} breakpoint ` +
            `(${[...allowed].join(', ')})`,
          );
        }
      }
    }
  }
}

function checkPanelMaxMirror(srcRoot: string, violations: string[]): void {
  const ts = fs.readFileSync(path.join(srcRoot, 'space/layoutConfig.ts'), 'utf8');
  const css = fs.readFileSync(path.join(srcRoot, 'App.vue'), 'utf8');

  const tsMatch = /export const PANEL_MAX_WIDTH\s*=\s*(\d+)/.exec(ts);
  const cssMatch = /--panel-max:\s*(\d+)px/.exec(css);
  // Throw rather than assert-then-`!`: if either declaration has been renamed
  // away, this test is silently guarding nothing, which is worse than failing.
  if (!tsMatch) throw new Error('PANEL_MAX_WIDTH not found in space/layoutConfig.ts');
  if (!cssMatch) throw new Error('--panel-max not found in App.vue');

  const tsValue = Number(tsMatch[1]);
  const cssValue = Number(cssMatch[1]);
  if (tsValue !== cssValue) {
    violations.push(
      `panel width mirror drifted: PANEL_MAX_WIDTH=${tsValue} (layoutConfig.ts) ` +
      `vs --panel-max=${cssValue}px (App.vue) — these are one number written twice`,
    );
  }

  // The token has to be the value WorldPanel actually uses, or the mirror is
  // real but irrelevant. Guards the literal creeping back into the SFC.
  const panel = fs.readFileSync(
    path.join(srcRoot, 'components/space/WorldPanel.vue'), 'utf8',
  );
  if (!/width:\s*min\(100vw,\s*var\(--panel-max\)\)/.test(panel)) {
    violations.push(
      'components/space/WorldPanel.vue: expected `width: min(100vw, var(--panel-max))` — ' +
      'the panel must consume the token, not a literal, or the mirror above guards nothing',
    );
  }
}

function checkTokensDeclared(srcRoot: string, violations: string[]): void {
  const css = fs.readFileSync(path.join(srcRoot, 'App.vue'), 'utf8');
  const declared: Record<string, number> = {};
  // `[a-z-]+`, not `[a-z]+`: token names are kebab-case and a hyphenated one
  // (--bp-island-media) silently failed to match, so the test reported its
  // value as undeclared while the declaration was sitting right there.
  for (const m of css.matchAll(/--bp-([a-z-]+):\s*(\d+)px/g)) {
    declared[`--bp-${m[1]}`] = Number(m[2]);
  }
  const declaredValues = new Set(Object.values(declared));
  for (const v of [...VIEWPORT_BREAKPOINTS, ...CONTAINER_BREAKPOINTS]) {
    // The +1 partner of a max/min pair is spelled by the token it brackets,
    // not by one of its own. Derived rather than hard-coded per value.
    if (declaredValues.has(v - 1)) continue;
    if (!declaredValues.has(v)) {
      violations.push(
        `${v}px is canonical here but no --bp-* token in App.vue declares it — ` +
        'the token block is the authority and must name every value',
      );
    }
  }
  // …and the reverse: a token nobody uses is a value pretending to be a rule.
  const allThresholds = new Set<number>();
  for (const file of walk(srcRoot)) {
    const rel = path.relative(srcRoot, file).split(path.sep).join('/');
    if (rel.startsWith('tests/')) continue;
    const text = stripComments(fs.readFileSync(file, 'utf8'));
    for (const m of text.matchAll(/\((?:min|max)-width:\s*(\d+(?:\.\d+)?)px\)/g)) {
      allThresholds.add(Number(m[1]));
    }
  }
  for (const [name, value] of Object.entries(declared)) {
    if (!allThresholds.has(value) && !allThresholds.has(value + 1)) {
      violations.push(`${name}: ${value}px is declared but no query uses it — dead breakpoint`);
    }
  }
}

function run(): void {
  // Tests execute from app/ (pnpm test cwd); compiled test files live in
  // .tests-dist, so resolve src from the working directory, not __dirname.
  const srcRoot = path.resolve(process.cwd(), 'src');
  assert(fs.existsSync(srcRoot), `src root not found at ${srcRoot}`);

  const violations: string[] = [];
  checkThresholds(srcRoot, violations);
  checkPanelMaxMirror(srcRoot, violations);
  checkTokensDeclared(srcRoot, violations);

  assert(violations.length === 0, `breakpoint discipline:\n  ${violations.join('\n  ')}`);
}

run();

console.log('breakpointDiscipline.test.ts passed');
