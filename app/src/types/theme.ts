// Palette definition for the background renderer + the rest of the UI.
//
// Two kinds of parameters live here:
//
//   (1) Shader-bound — pushed to a WebGPU uniform via `serializeTheme()`.
//       These drive the Game-of-Life background directly.
//
//   (2) CSS-bound — exposed as `--theme-*` custom properties on :root by the
//       useThemePreference bridge, so HTML/Vuetify components can pick them up.
//
// Both kinds share a common goal: a theme is fully described by two OKLab
// endpoints (`surface`, `ink`) plus a handful of proportional parameters
// (lerp positions, opacities, a single accent). Everything visible in the
// scene is derived from these inputs, which means swapping light ↔ dark is
// a single substitution — the perceptual relationships are invariant.
//
// Color-space coordinates:
//   OKLab (L, a, b):  L ∈ [0, 1] perceptual lightness; a/b are chroma axes
//                     with near-zero = neutral.  Good for interpolation.
//   OKLCH (L, C, H):  same space, polar form.  L like OKLab; C ≥ 0 is chroma
//                     magnitude; H ∈ [0, 360) is hue in degrees.  Good for
//                     authoring an accent because hue is a single scalar.

export type OkLab = readonly [L: number, a: number, b: number];
export type OkLch = readonly [L: number, C: number, H: number];

/**
 * The cut-paper edge depth: a perceptual lightness half-step (OKLab ΔL)
 * applied ± to a surface's own fill to produce its lit top lip and shadowed
 * cut edge — "one knob tunes the edge across every surface and both themes".
 * SINGLE SOURCE: useThemePreference both consumes this for the precomputed
 * lip/shadow tokens AND publishes it as the `--cut` CSS var, so the
 * stylesheet formulas that still reference var(--cut) (App.vue,
 * NotebookPage.vue fallbacks) can never disagree with the precomputed values.
 */
export const CUT = 0.05;

/**
 * The neutral spine: the OKLCH hue every neutral in the system rides.
 * Both endpoints of both palettes sit here. See docs/color/03 §1.1.
 */
export const SPINE_HUE = 85;

/**
 * ── Warm lift: elevation expressed in hue and chroma, not only lightness ────
 *
 * `CUT` above nudges L to cut an edge. These do the other half: a plane that
 * rises catches more light, so it goes WARMER (hue rotates down the warm-earth
 * band, toward sienna) and gains a little chroma. A plane that sinks is in
 * shadow, so it goes cooler and greyer. That is how real material behaves, and
 * it is the oldest device in representational painting.
 *
 * Why this earns its place rather than being decoration: in LIGHT mode the
 * raised island fill and the page surface resolve to the same 8-bit color
 * (#fcfaf6 both). Elevation there is carried entirely by the lip and the edge,
 * never by the fill, so a raised sheet reads as an outlined region rather than
 * as a different piece of stock. Hue and chroma are the only channels left to
 * say "this is lit" without touching L and flattening the cut.
 *
 * Magnitudes are deliberately below the threshold at which anyone would call
 * it colour: one plane step is 5° of hue and 0.002 of chroma. Across the full
 * range (sunken to raised) that is 10° and 0.004, which keeps every plane
 * inside the spine's C ≤ 0.010 ceiling. It compounds with the existing
 * lightness separation rather than replacing it.
 */
export const LIFT_HUE = 5;
export const LIFT_CHROMA = 0.002;

/**
 * Apply the warm lift for an elevation `level`: +1 raised, 0 field, -1 sunken.
 * Rotates hue and scales chroma while holding L, so it composes with `CUT`
 * (which moves L and holds hue) instead of competing with it.
 *
 * A colour at negligible chroma has no meaningful hue to rotate, so it is
 * anchored to the spine rather than to whatever `atan2(0, 0)` returns.
 */
export function liftOkLab([L, a, b]: OkLab, level: number): OkLab {
  const chroma = Math.hypot(a, b);
  const hue = chroma < 1e-6 ? (SPINE_HUE * Math.PI) / 180 : Math.atan2(b, a);
  const lifted = Math.max(0, chroma + LIFT_CHROMA * level);
  const rotated = hue - ((LIFT_HUE * Math.PI) / 180) * level;
  return [L, lifted * Math.cos(rotated), lifted * Math.sin(rotated)];
}

export interface ThemePalette {
  // ── Shader-bound ─────────────────────────────────────────────────────────
  surface: OkLab;        // paper / page background
  ink: OkLab;            // cell fill + text primary endpoint
  minor_t: number;       // minor grid: lerp position from surface toward ink
  major_t: number;       // major grid
  border_t: number;      // page border
  ink_opacity: number;   // max alpha of cell ink at coverage=1
  grain_intensity: number; // ± dither amplitude added post-tone-map (0 = off).
                           // ~0.015–0.02 in dark mode kills OLED banding on
                           // the surface→ink gradient without being visible.

  // ── CSS-bound (text tiers + accent) ──────────────────────────────────────
  ink_secondary_t: number; // lerp for "secondary" body text (≈ WCAG 4.5:1)
  ink_tertiary_t: number;  // lerp for "tertiary" metadata (≈ WCAG 3:1)
  accent: OkLch;           // brand accent, authored in OKLCH
  accent_chroma_scale: number; // multiplier on `accent.C` (dark mode < 1.0
                               // to prevent OLED bloom on saturated hues)
}

// ── Calibration notes ───────────────────────────────────────────────────────
//
// The background is *flair*, not content.  It should read as atmosphere and
// step out of the way when a user is looking at copy.  Concrete target:
// effective cell-vs-surface ΔL around 0.05–0.10 in OKLab — roughly the band
// occupied by watermark patterns, SVG dot grids at 7–10% alpha, and other
// decorative layers that decorate without distracting.  WCAG's 3:1 rule
// doesn't apply here; decorative patterns are explicitly exempt.
//
// Math: effective ΔL ≈ |surface_L − ink_L| × ink_opacity.  With ink endpoints
// at L=0.28 (light) / L=0.84 (dark) — chosen for *grid* legibility and text
// tier headroom — an `ink_opacity` of ~0.10 puts cells squarely in the
// atmospheric band while leaving grid lines (which don't scale by opacity)
// at their structural ΔL of ~0.05–0.17.
//
// "Light" and "dark" as distinct moods, not inversions — grid lerp positions
// and text tiers are shared (perceptual parity in OKLab holds), but endpoint
// L, `ink_opacity`, `grain_intensity`, and accent chroma are asymmetric:
//
//   Light:  paper-on-desk feel; ink readable where it matters, cells ghostly;
//           accent is a pastel rose — warm, quiet, one perceptual step below
//           surface.
//   Dark:   night-surface feel; grain masks OLED banding; accent shifts to a
//           muted purple — same magenta hue family as the light rose (~50°
//           rotation) so the two modes read as a transposed pair rather than
//           different palettes; chroma compressed to prevent bloom.
//
// Reference survey: Linear, Vercel Geist, rauno.me, paco.me, emilkowal.ski,
// Josh Comeau, Radix Colors.  None are pure inversions of their counterpart,
// and none run their backgrounds at the contrast level we started with.

// NOTE: index.html contains an inline pre-paint script that mirrors the
// `surface`, `minor_t`, and `major_t`-derived CSS values for both palettes
// (so the page background matches the active theme before this module
// loads).  If you change `surface`, `ink`, `minor_t`, or `major_t` in either
// preset below, update the corresponding constants in index.html or returning
// users will see a brief flash of the previous theme on load.

/** Light palette: airy paper, ghostly cells, no grain needed. */
export const LIGHT_THEME: ThemePalette = {
  // Both endpoints ride the NEUTRAL SPINE at OKLCH hue 85° (warm amber-straw).
  // They already carried a warm cast before this (surface 104°, ink 79°); the
  // rotation onto one shared axis is what makes them one family instead of two
  // near-neutrals that happen to be warm. See docs/color/03 §1.1.
  //
  // Chroma: ink is UNCHANGED at 0.005, so text moves by 6° of hue at a chroma
  // below the visible-cast floor, i.e. not at all. Only the surface gains
  // anything, 0.0041 → 0.006, which is the smallest step that reads as paper
  // rather than as grey. The spine ceiling is 0.010; this deliberately stops
  // short of it. The canvas picks the tint up for free through `surface_linear`
  // (docs/color/07 §4.1 D4), so the largest surface on the site warms with no
  // shader change.
  surface: [0.985,  0.0005, 0.0060],  // ≈ #fcfaf6 — warm paper, C 0.006 @ H 85
  ink:     [0.280,  0.0004, 0.0050],  // C 0.005 @ H 85 — same chroma as before
  minor_t:  0.08,
  major_t:  0.14,
  border_t: 0.24,
  ink_opacity: 0.10,                  // atmospheric: ΔL_eff ≈ 0.705 × 0.10 = 0.07
  grain_intensity: 0.0,               // no banding at L=0.985; grain unnecessary

  ink_secondary_t: 0.78,              // ≈ L 0.435 — body-adjacent
  ink_tertiary_t:  0.54,              // ≈ L 0.607 — metadata / placeholder
  // Pastel rose — OKLCH(L, C, H). L=0.88 sits one perceptual step below the
  // surface (0.985), so the accent is audible without punching into body-text
  // contrast.  C=0.08 is pastel (audible, not saturated).  H=15° is rose with
  // a slight warm edge — harmonizes with the surface's faint warm cast.
  accent:          [0.88, 0.08, 15],
  accent_chroma_scale: 1.0,
};

/** Dark palette: deep cool surface, faint-glow cells, subtle dither. */
export const DARK_THEME: ThemePalette = {
  // Dark rides the SAME 85° spine as light. This is the one place the spine
  // changes character rather than formalising it: dark's endpoints were faintly
  // COOL (both ≈270°). docs/color/03 §1.1 treats that cast as noise rather than
  // intent, since dark ink sits at C 0.002, below the visible-cast floor, and a
  // shared axis is the "one family" tell. Chroma stays at a whisper: the surface
  // moves 0.003 → 0.005 and ink is unchanged at 0.002.
  //
  // This does NOT touch the transposed-pair asymmetry, which lives in the
  // endpoint L values, ink_opacity, grain, and the rose↔purple accent. Those are
  // all still authored per mode. Only the neutral hue axis is now shared.
  surface: [0.180,  0.0004, 0.0050],  // ≈ #13110f — deep warm, C 0.005 @ H 85
  ink:     [0.840,  0.0002, 0.0020],  // C 0.002 @ H 85 — same chroma as before
  minor_t:  0.08,                     // proportions identical to light
  major_t:  0.14,
  border_t: 0.24,
  ink_opacity: 0.12,                  // atmospheric: ΔL_eff ≈ 0.66 × 0.12 = 0.079
  grain_intensity: 0.008,             // subtle dither — enough to break banding

  ink_secondary_t: 0.78,              // same proportions as light
  // Dark-only: most text now sits on islands (--island-fill, L≈0.26), not the
  // bare field, so tertiary needs a higher t than light's 0.54 to keep its
  // intended ~3:1 metadata contrast there (→ 3.58:1 on islands vs 3.03 at 0.54).
  // Future tier tuning should measure against the island, not --surface.
  // GUARDRAIL: low tiers must not sit on accent keys in dark — tertiary on
  // --key-primary is ≈2.28:1; accent keys (hero CTA, demo links) use primary text.
  ink_tertiary_t:  0.60,
  // Muted purple — OKLCH(L, C, H).  H=305° is magenta-leaning purple: only
  // ~50° rotation from the light-mode rose, so the two modes feel like a
  // transposition of the same harmonic family rather than different brands.
  // L=0.72 pulls toward the ink endpoint so the accent reads as "light" on
  // the dark surface.  Authored chroma is 0.08 like the light preset; the
  // dark-mode chroma_scale below compresses to effective C≈0.06 — below the
  // OLED bloom threshold for saturated hues against low-L backgrounds.
  accent:          [0.72, 0.08, 305],
  accent_chroma_scale: 0.75,          // 25% compression — OLED-safe purple
};

/** Pick the preset matching the user's system preference (SSR-safe fallback). */
export function systemPreferredTheme(): ThemePalette {
  if (typeof window === 'undefined' || !window.matchMedia) return LIGHT_THEME;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_THEME
    : LIGHT_THEME;
}

/** The shader-bound subset, as the plain object the WASM renderer deserializes
 *  (serde-wasm-bindgen — interface-audit #3). `border_t` is omitted: the page
 *  border was removed from the shader and the Rust side ignores it. */
export interface ThemeWire {
  surface: OkLab;
  ink: OkLab;
  minor_t: number;
  major_t: number;
  ink_opacity: number;
  grain_intensity: number;
}

/** Project a palette onto the shader-bound wire object passed to `set_theme`. */
export function serializeTheme(theme: ThemePalette): ThemeWire {
  return {
    surface: theme.surface,
    ink: theme.ink,
    minor_t: theme.minor_t,
    major_t: theme.major_t,
    ink_opacity: theme.ink_opacity,
    grain_intensity: theme.grain_intensity,
  };
}

// ── OKLab utilities ─────────────────────────────────────────────────────────
//
// These helpers compute CSS color strings for the `:root` custom-property
// bridge.  Interpolation happens in OKLab (the shader already does this
// internally); we expose both OKLab and OKLCH results so CSS consumers can
// pick whichever color-space the browser supports most cleanly.

/** Interpolate in OKLab from surface toward ink by fraction `t ∈ [0, 1]`. */
export function lerpOkLab(a: OkLab, b: OkLab, t: number): OkLab {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

/** Format as CSS `oklab(L a b)`.  All modern browsers support this natively. */
export function oklabCss([L, a, b]: OkLab, alpha = 1): string {
  return alpha === 1
    ? `oklab(${L.toFixed(4)} ${a.toFixed(4)} ${b.toFixed(4)})`
    : `oklab(${L.toFixed(4)} ${a.toFixed(4)} ${b.toFixed(4)} / ${alpha.toFixed(3)})`;
}

/** Format as CSS `oklch(L C H)`, applying a chroma multiplier. */
export function oklchCss([L, C, H]: OkLch, chromaScale = 1, alpha = 1): string {
  const cs = C * chromaScale;
  return alpha === 1
    ? `oklch(${L.toFixed(4)} ${cs.toFixed(4)} ${H.toFixed(2)})`
    : `oklch(${L.toFixed(4)} ${cs.toFixed(4)} ${H.toFixed(2)} / ${alpha.toFixed(3)})`;
}

/** Convert an OKLCH color (with an optional chroma multiplier) to OKLab. */
export function oklchToOklab([L, C, H]: OkLch, chromaScale = 1): OkLab {
  const c = C * chromaScale;
  const hRad = (H * Math.PI) / 180;
  return [L, c * Math.cos(hRad), c * Math.sin(hRad)];
}

/** Clamp OKLab lightness to the valid [0, 1] range (matches the display-gamut
 *  clamp the browser already applies to `oklab()` values). */
export function clampL([L, a, b]: OkLab): OkLab {
  return [Math.min(1, Math.max(0, L)), a, b];
}

/**
 * Replicates CSS `color-mix(in oklab, a aPct%, b bPct%)`: normalizes the two
 * percentages to sum to 100 (the mix ratio) and, per the CSS Color 5 spec,
 * scales the result's alpha by `min(1, (aPct + bPct) / 100)` when they don't
 * already sum to (at least) 100 — e.g. `color-mix(in oklab, X 80%, Y 8%)`
 * mixes at a 80:8 ratio but the result is only 88% opaque, not fully opaque.
 */
export function mixOkLab(
  a: OkLab, aPct: number,
  b: OkLab, bPct: number,
): { color: OkLab; alpha: number } {
  const sum = aPct + bPct;
  const t = sum === 0 ? 0 : bPct / sum;
  return { color: lerpOkLab(a, b, t), alpha: Math.min(1, sum / 100) };
}

/** Replicates CSS `color-mix(in oklab, a aPct%, transparent)`: the opaque
 *  color's own channels pass through unchanged; only alpha scales down. */
export function fadeOkLab(a: OkLab, aPct: number): { color: OkLab; alpha: number } {
  return { color: a, alpha: Math.min(1, aPct / 100) };
}
