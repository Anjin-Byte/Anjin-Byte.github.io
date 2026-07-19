import * as fs from 'fs';
import * as path from 'path';
import { LIGHT_THEME, DARK_THEME, lerpOkLab, oklabCss } from '../types/theme';

// Enforces the theme.ts ↔ index.html contract: the pre-paint script in
// index.html hardcodes the surface + grid colors for both palettes (it must —
// it runs before any module loads, so returning users don't flash the wrong
// theme). Those constants were previously kept in sync by a comment asking
// nicely; this test makes drift a build failure. If it fails after a palette
// change, update the SURFACE_*/MINOR_*/MAJOR_* constants in index.html.

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}

function expectConstant(html: string, name: string, expected: string): void {
  const m = html.match(new RegExp(`${name}\\s*=\\s*'([^']+)'`));
  assert(m, `index.html: constant ${name} not found`);
  assert(
    m![1] === expected,
    `index.html ${name} = '${m![1]}' but theme.ts derives '${expected}' — update index.html`,
  );
}

function run(): void {
  const htmlPath = path.resolve(process.cwd(), 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  expectConstant(html, 'SURFACE_LIGHT', oklabCss(LIGHT_THEME.surface));
  expectConstant(html, 'SURFACE_DARK', oklabCss(DARK_THEME.surface));
  expectConstant(
    html, 'MINOR_LIGHT',
    oklabCss(lerpOkLab(LIGHT_THEME.surface, LIGHT_THEME.ink, LIGHT_THEME.minor_t)),
  );
  expectConstant(
    html, 'MINOR_DARK',
    oklabCss(lerpOkLab(DARK_THEME.surface, DARK_THEME.ink, DARK_THEME.minor_t)),
  );
  expectConstant(
    html, 'MAJOR_LIGHT',
    oklabCss(lerpOkLab(LIGHT_THEME.surface, LIGHT_THEME.ink, LIGHT_THEME.major_t)),
  );
  expectConstant(
    html, 'MAJOR_DARK',
    oklabCss(lerpOkLab(DARK_THEME.surface, DARK_THEME.ink, DARK_THEME.major_t)),
  );

  // The static <meta name="theme-color"> ships the light surface (the
  // pre-paint script and useThemePreference overwrite it live).
  assert(
    html.includes(`<meta name="theme-color" content="${oklabCss(LIGHT_THEME.surface)}" />`),
    'index.html theme-color meta does not match LIGHT_THEME.surface',
  );
}

run();
// eslint-disable-next-line no-console
console.log('themeParity.test.ts passed');
