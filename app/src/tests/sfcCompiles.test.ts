import * as fs from 'fs';
import * as path from 'path';
import { parse, compileStyle } from '@vue/compiler-sfc';

// Every .vue file must actually COMPILE — template, script, and crucially the
// <style> blocks.
//
// Why this exists. A CSS syntax error inside a <style> block passes every other
// gate in this repo: `vue-tsc` type-checks script blocks and ignores CSS,
// eslint-plugin-vue parses template and script and ignores CSS, and the node
// test harness never touches .vue files at all. The only thing that parses CSS
// is `vite build`, which is the slow production build, so the failure surfaced
// in the dev server after a green typecheck + 16 green tests + a clean lint.
// (Real instance: a comment in App.vue whose prose landed after the closing
// `*/`, which postcss then read as a declaration — "Unknown word 660px".)
//
// This closes that hole in the fast loop rather than relying on remembering to
// run the slow one. It uses the same compiler Vite uses, so it agrees with the
// build by construction instead of approximating it.
//
// Deliberately a PARSE/COMPILE check, not a style linter. It has no opinions
// about properties, ordering or naming — that would be stylelint, a bigger
// decision with its own config to argue about. This only asserts the files are
// well-formed, which is the class of defect that got through.

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}

function walk(dir: string, ext: RegExp, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, ext, out);
    else if (ext.test(entry.name)) out.push(full);
  }
  return out;
}

/** Shared by the .vue <style> path and the standalone .css path. */
function checkCss(
  source: string, filename: string, label: string,
  scoped: boolean, failures: string[],
): void {
  // An UNTERMINATED comment is not a parse error — postcss swallows the rest of
  // the block as comment text and reports nothing, and `vite build` does exactly
  // the same (verified). So a stray `/*` silently deletes every rule after it,
  // in the build as well as here, and no tool in the toolchain says a word. That
  // is worth more than a syntax error, not less, so it gets its own check.
  const opens = (source.match(/\/\*/g) ?? []).length;
  const closes = (source.match(/\*\//g) ?? []).length;
  if (opens !== closes) {
    failures.push(
      `${label}: ${opens} \`/*\` vs ${closes} \`*/\` — an unterminated comment silently ` +
      'discards every rule after it, and neither postcss nor the build reports it',
    );
  }
  const result = compileStyle({
    source,
    filename,
    // `id` only matters for the scoped-attribute rewrite; any stable value
    // works, and the rewrite is worth exercising because a selector the scoped
    // transform cannot handle is also a build failure.
    id: 'data-v-test',
    scoped,
  });
  for (const e of result.errors) {
    failures.push(`${label}: ${String(e).replace(/\s+/g, ' ').slice(0, 220)}`);
  }
}

function run(): void {
  // Tests execute from app/ (pnpm test cwd); compiled test files live in
  // .tests-dist, so resolve src from the working directory, not __dirname.
  const srcRoot = path.resolve(process.cwd(), 'src');
  assert(fs.existsSync(srcRoot), `src root not found at ${srcRoot}`);

  const files = walk(srcRoot, /\.vue$/);
  assert(files.length > 0, 'no .vue files found — this test would pass vacuously');

  const failures: string[] = [];
  let styleBlocks = 0;

  // Standalone stylesheets are in the same blind spot as <style> blocks — no
  // typecheck, no eslint — and print.css is one of them.
  for (const file of walk(srcRoot, /\.css$/)) {
    styleBlocks++;
    const rel = path.relative(srcRoot, file).split(path.sep).join('/');
    checkCss(fs.readFileSync(file, 'utf8'), file, rel, false, failures);
  }

  for (const file of files) {
    const rel = path.relative(srcRoot, file).split(path.sep).join('/');
    const source = fs.readFileSync(file, 'utf8');

    const { descriptor, errors } = parse(source, { filename: file });
    for (const e of errors) {
      failures.push(`${rel}: ${e.message}`);
    }

    for (const style of descriptor.styles) {
      styleBlocks++;
      // `compileStyle` (not the async variant) so this stays synchronous — the
      // test runner `require()`s each file and never awaits, so a rejected
      // promise would surface as an unhandled rejection AFTER the pass line.
      // Sync is only safe because no <style> here uses a preprocessor (lang=""
      // throughout); if one ever does, this must move to compileStyleAsync and
      // the runner has to learn to await.
      assert(
        !style.lang,
        `${rel}: <style lang="${style.lang}"> needs compileStyleAsync — see the note here`,
      );
      checkCss(style.content, file, `${rel} <style>`, style.scoped ?? false, failures);
    }
  }

  assert(
    failures.length === 0,
    `SFC compile errors:\n  ${failures.join('\n  ')}`,
  );
  assert(styleBlocks > 0, 'no <style> blocks compiled — the check is not doing anything');
}

run();

console.log('sfcCompiles.test.ts passed');
