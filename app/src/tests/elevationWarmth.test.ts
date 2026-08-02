import * as fs from 'fs';
import * as path from 'path';
import {
  LIGHT_THEME, DARK_THEME, SPINE_HUE, LIFT_HUE, LIFT_CHROMA,
  liftOkLab, lerpOkLab, type OkLab,
} from '../types/theme';

// Guards the warm-lift contract: elevation is carried by hue and chroma as well
// as lightness. A plane that rises is WARMER and slightly more chromatic; a
// plane that sinks is cooler and greyer. Getting the sign backwards would still
// compile, still look like "some colour", and quietly read as lit-from-below.
//
// It also pins the magnitude under the spine's C <= 0.010 ceiling, because the
// whole justification for this device is that it stays below the threshold at
// which anyone would call it colour (docs/color/03 §1.1).

const SPINE_CEILING = 0.010;

function assert(cond: unknown, message: string): asserts cond {
  if (!cond) throw new Error(message);
}

function chroma([, a, b]: OkLab): number {
  return Math.hypot(a, b);
}

/** Hue in degrees. Lower is warmer within the warm-earth band. */
function hue([, a, b]: OkLab): number {
  return ((Math.atan2(b, a) * 180) / Math.PI + 360) % 360;
}

// The three planes, derived the same way useThemePreference derives them.
function planes(t: typeof LIGHT_THEME, isDark: boolean) {
  const WHITE: OkLab = [1, 0, 0];
  const raised = liftOkLab(
    isDark ? lerpOkLab(t.ink, t.surface, 0.88) : lerpOkLab(WHITE, t.surface, 0.97),
    1,
  );
  const sunken = liftOkLab(lerpOkLab(t.surface, t.ink, 0.04), -1);
  return { raised, field: t.surface, sunken };
}

// Rising warms and saturates; sinking cools and desaturates. Stated as a strict
// ordering across all three planes so a sign flip on either knob fails.
function testLiftDirection(): void {
  for (const [name, t, isDark] of [
    ['light', LIGHT_THEME, false],
    ['dark', DARK_THEME, true],
  ] as const) {
    const { raised, field, sunken } = planes(t, isDark);
    assert(
      hue(raised) < hue(field) && hue(field) < hue(sunken),
      `${name}: hue must warm as elevation rises (raised ${hue(raised).toFixed(1)} < ` +
        `field ${hue(field).toFixed(1)} < sunken ${hue(sunken).toFixed(1)})`,
    );
    assert(
      chroma(raised) > chroma(field) && chroma(field) > chroma(sunken),
      `${name}: chroma must rise with elevation (raised ${chroma(raised).toFixed(4)} > ` +
        `field ${chroma(field).toFixed(4)} > sunken ${chroma(sunken).toFixed(4)})`,
    );
  }
}

// The device only earns its place while it stays a whisper. If a future edit
// raises the knobs into visible-tint territory, this is the line that objects.
function testStaysUnderSpineCeiling(): void {
  for (const [name, t, isDark] of [
    ['light', LIGHT_THEME, false],
    ['dark', DARK_THEME, true],
  ] as const) {
    for (const [plane, color] of Object.entries(planes(t, isDark))) {
      assert(
        chroma(color) <= SPINE_CEILING,
        `${name}/${plane}: chroma ${chroma(color).toFixed(4)} exceeds the spine ceiling ${SPINE_CEILING}`,
      );
    }
  }
}

// Lightness is CUT's axis, not the lift's. If the lift ever moved L it would
// fight the cut-paper edge model instead of composing with it.
function testLiftHoldsLightness(): void {
  const sample: OkLab = [0.5, 0.001, 0.004];
  for (const level of [-2, -1, 0, 1, 2]) {
    assert(
      liftOkLab(sample, level)[0] === sample[0],
      `lift must not move L (level ${level})`,
    );
  }
}

// A neutral has no hue to rotate. Anchor to the spine rather than to whatever
// atan2(0, 0) happens to return, which is 0 degrees, i.e. red.
function testNeutralAnchorsToSpine(): void {
  const lifted = liftOkLab([0.5, 0, 0], 1);
  const expected = (SPINE_HUE - LIFT_HUE + 360) % 360;
  assert(
    Math.abs(hue(lifted) - expected) < 0.001,
    `a neutral must lift from the spine (${expected}), got ${hue(lifted).toFixed(3)}`,
  );
  assert(
    Math.abs(chroma(lifted) - LIFT_CHROMA) < 1e-9,
    'a neutral lifted one step should carry exactly one chroma step',
  );
}

// Everything above tests `liftOkLab` in isolation, which means all of it would
// still pass if `useThemePreference` never called it and the planes shipped
// flat. That is the failure this file exists to prevent, so the call sites are
// asserted at the source level, the same shape as dprDiscipline.test.ts.
//
// A DOM-level assertion would be better, but `apply()` only runs against a real
// `document`, and the node harness has none.
function testComposableAppliesTheLift(): void {
  const raw = fs.readFileSync(
    path.resolve(process.cwd(), 'src/composables/useThemePreference.ts'),
    'utf8',
  );
  // Comments are stripped first, same as breakpointDiscipline.test.ts. The
  // `islandFill` call spans several lines with a trailing `//` comment between
  // its arguments, and no whitespace pattern can cross that. Matching the raw
  // text failed on correct code, which is the worst kind of guard.
  const src = raw
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, (_m, p1: string) => p1);
  assert(
    /import\s*{[^}]*\bliftOkLab\b[^}]*}\s*from\s*'\.\.\/types\/theme'/s.test(src),
    'useThemePreference must import liftOkLab',
  );
  // Raised: the island fill is lifted one step UP.
  assert(
    /const\s+islandFill\s*=\s*liftOkLab\([\s\S]*?,\s*1,?\s*\)/.test(src),
    'useThemePreference must lift --island-fill by +1 (the raised plane)',
  );
  // Sunken: the well recess is lifted one step DOWN.
  assert(
    /const\s+wellRecess\s*=\s*liftOkLab\([\s\S]*?,\s*-1,?\s*\)/.test(src),
    'useThemePreference must lift --well-recess by -1 (the sunken plane)',
  );
}

testLiftDirection();
testStaysUnderSpineCeiling();
testLiftHoldsLightness();
testNeutralAnchorsToSpine();
testComposableAppliesTheLift();

console.log('elevationWarmth.test.ts passed');
