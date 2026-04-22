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
//   Light:  paper-on-desk feel; ink readable where it matters, cells ghostly.
//   Dark:   night-surface feel; grain masks OLED banding; accent chroma
//           compressed to prevent bloom.
//
// Reference survey: Linear, Vercel Geist, rauno.me, paco.me, emilkowal.ski,
// Josh Comeau, Radix Colors.  None are pure inversions of their counterpart,
// and none run their backgrounds at the contrast level we started with.

/** Light palette: airy paper, ghostly cells, no grain needed. */
export const LIGHT_THEME: ThemePalette = {
  surface: [0.985, -0.001,  0.004],   // ≈ #fafaf8 — faintly warm near-white
  ink:     [0.280,  0.001,  0.005],   // kept at readable L for grid/text use
  minor_t:  0.08,
  major_t:  0.14,
  border_t: 0.24,
  ink_opacity: 0.10,                  // atmospheric: ΔL_eff ≈ 0.705 × 0.10 = 0.07
  grain_intensity: 0.0,               // no banding at L=0.985; grain unnecessary

  ink_secondary_t: 0.78,              // ≈ L 0.435 — body-adjacent
  ink_tertiary_t:  0.54,              // ≈ L 0.607 — metadata / placeholder
  accent:          [0.55, 0.10, 220], // soft blue at L=0.55
  accent_chroma_scale: 1.0,
};

/** Dark palette: deep cool surface, faint-glow cells, subtle dither. */
export const DARK_THEME: ThemePalette = {
  surface: [0.180,  0.000, -0.003],   // ≈ #181819 — deep, faintly cool
  ink:     [0.840,  0.000, -0.002],   // kept at readable L for grid/text use
  minor_t:  0.08,                     // proportions identical to light
  major_t:  0.14,
  border_t: 0.24,
  ink_opacity: 0.12,                  // atmospheric: ΔL_eff ≈ 0.66 × 0.12 = 0.079
  grain_intensity: 0.008,             // subtle dither — enough to break banding

  ink_secondary_t: 0.78,              // same proportions as light
  ink_tertiary_t:  0.54,
  accent:          [0.70, 0.10, 220], // brighter L for dark; chroma compressed below
  accent_chroma_scale: 0.7,           // 30% chroma reduction masks OLED bloom
};

/** Pick the preset matching the user's system preference (SSR-safe fallback). */
export function systemPreferredTheme(): ThemePalette {
  if (typeof window === 'undefined' || !window.matchMedia) return LIGHT_THEME;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_THEME
    : LIGHT_THEME;
}

/** Serialize the shader-bound subset into JSON for the WASM renderer. */
export function serializeTheme(theme: ThemePalette): string {
  return JSON.stringify({
    surface: theme.surface,
    ink: theme.ink,
    minor_t: theme.minor_t,
    major_t: theme.major_t,
    border_t: theme.border_t,
    ink_opacity: theme.ink_opacity,
    grain_intensity: theme.grain_intensity,
  });
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
