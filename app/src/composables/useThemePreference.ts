import { ref, computed, watch } from 'vue';
import type { ThemePalette, OkLab } from '../types/theme';
import {
  CUT, LIGHT_THEME, DARK_THEME, lerpOkLab, oklabCss, oklchCss,
  oklchToOklab, clampL, mixOkLab, fadeOkLab,
} from '../types/theme';
import { vuetify } from '../plugins/vuetify';

// Theme preference is genuinely app-global state — the toggle in the header
// and the WebGPU renderer in AppBackground both need to read the same value.
// Declaring the refs at module scope makes this a singleton; every call to
// useThemePreference() returns references to the same underlying state.

// Three STORED values, two OFFERED ones. `system` is not a third theme — it is
// the absence of a preference, which is a different kind of thing from 'light'
// and 'dark', and presenting all three as peers in one control was the reason
// the toggle read as over-provisioned. It stays in the storage vocabulary
// (it is the first-visit default, and existing visitors have it persisted), but
// the UI offers only the two real answers. See `mode` below.
export type ThemePreference = 'light' | 'system' | 'dark';

/** What the two-segment toggle offers. */
export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

// First-visit default is `system` — follows the user's OS preference on
// arrival.  Once the toggle in the header is used, the choice persists in
// localStorage and overrides this default forever after.
function readStored(): ThemePreference {
  if (typeof window === 'undefined') return 'system';
  const v = window.localStorage?.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
}

const preferenceRef = ref<ThemePreference>(readStored());
const systemIsDarkRef = ref(
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false,
);

// Track OS preference changes live, so users on 'system' follow their OS
// when it switches modes (e.g. macOS auto day/night). Browser-only; SSR noop.
if (typeof window !== 'undefined' && window.matchMedia) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = (e: MediaQueryListEvent): void => {
    systemIsDarkRef.value = e.matches;
  };
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', onChange);
  } else {
    // Safari < 14 fallback (MediaQueryList lacked EventTarget methods there)
    (mql as unknown as { addListener: (cb: (e: MediaQueryListEvent) => void) => void })
      .addListener(onChange);
  }
}

watch(preferenceRef, (v) => {
  if (typeof window !== 'undefined') {
    window.localStorage?.setItem(STORAGE_KEY, v);
  }
});

const themeRef = computed<ThemePalette>(() => {
  if (preferenceRef.value === 'light') return LIGHT_THEME;
  if (preferenceRef.value === 'dark') return DARK_THEME;
  return systemIsDarkRef.value ? DARK_THEME : LIGHT_THEME;
});

/**
 * The two-segment toggle's binding: RESOLVED on read, EXPLICIT on write.
 *
 * Reading resolves `system` against the OS, so the lit segment always equals
 * what the reader is actually looking at — the control is never lit for a mode
 * that is not on screen, and it never sits unlit looking inert.
 *
 * Writing always stores a concrete choice, so the first click pins the theme
 * and the OS stops being consulted. That is the whole behaviour: follow the
 * system silently until told otherwise, then obey.
 *
 * Consequence, accepted deliberately: once a visitor picks, there is no in-UI
 * route back to auto-switching (it would need a third state, which is the thing
 * being removed). Clearing `localStorage['theme-preference']` restores it.
 */
const modeRef = computed<ThemeMode>({
  get: () => {
    if (preferenceRef.value === 'system') return systemIsDarkRef.value ? 'dark' : 'light';
    return preferenceRef.value;
  },
  set: (v) => { preferenceRef.value = v; },
});

// ── CSS custom-property bridge ──────────────────────────────────────────────
// Mirror the active palette onto :root as --theme-* vars so HTML / Vuetify
// components can consume the same colors the shader uses, without each
// component re-importing the palette. Runs in the browser only; no SSR.
//
// The shader doesn't need these — it reads the OKLab uniform directly — but
// everything outside the canvas (header text, links, borders, focus rings)
// does. Exposing them at the document root gives every component the hook
// with a single CSS variable reference.
const WHITE: OkLab = [1, 0, 0];

if (typeof window !== 'undefined' && document?.documentElement) {
  const apply = (t: ThemePalette): void => {
    const root = document.documentElement;
    const s = (name: string, value: string): void => {
      root.style.setProperty(name, value);
    };
    const isDark = t.surface[0] <= 0.5;
    root.dataset.themeMode = isDark ? 'dark' : 'light';
    // Vuetify paints a few surfaces (tooltips, menu defaults) from ITS theme;
    // keep its active theme name in step so those never contradict the mode.
    vuetify.theme.global.name.value = isDark ? 'dark' : 'light';
    // Publish the cut-edge depth so stylesheet formulas still using
    // var(--cut) share the SAME constant the precomputed tokens below use.
    s('--cut', String(CUT));
    // Surfaces + primary ink
    s('--theme-surface', oklabCss(t.surface));
    s('--theme-ink', oklabCss(t.ink));
    // Text tiers — lerped once here so CSS consumers get a direct color value
    const inkSecondary = lerpOkLab(t.surface, t.ink, t.ink_secondary_t);
    const inkTertiary  = lerpOkLab(t.surface, t.ink, t.ink_tertiary_t);
    s('--theme-ink-secondary', oklabCss(inkSecondary));
    s('--theme-ink-tertiary',  oklabCss(inkTertiary));
    // Legacy aliases used across the HTML sections.
    s('--theme-text-primary',   oklabCss(t.ink));
    s('--theme-text-secondary', oklabCss(inkSecondary));
    s('--theme-text-tertiary',  oklabCss(inkTertiary));
    // Grid-derived colors (minor/major/border) — same lerp the shader does
    s('--theme-grid-minor',  oklabCss(lerpOkLab(t.surface, t.ink, t.minor_t)));
    s('--theme-grid-major',  oklabCss(lerpOkLab(t.surface, t.ink, t.major_t)));
    s('--theme-grid-border', oklabCss(lerpOkLab(t.surface, t.ink, t.border_t)));
    // Accent in OKLCH with chroma scale applied; focus ring is accent + alpha
    s('--theme-accent',       oklchCss(t.accent, t.accent_chroma_scale));
    s('--theme-accent-ring',  oklchCss(t.accent, t.accent_chroma_scale, 0.45));
    s('--theme-selection-bg', oklchCss(t.accent, t.accent_chroma_scale, 0.20));

    // ── Precomputed island/paper tokens ────────────────────────────────────
    // These were previously LIVE `color-mix()` / `oklab(from ...)` formulas in
    // App.vue's stylesheet, recomputed by the browser's style engine on every
    // element using them, every time --theme-surface/--theme-ink changed here.
    // That recompute is inexpensive on Chrome but was a measurable contributor
    // to a Firefox-specific flicker on theme toggle (relative-color syntax and
    // color-mix() are newer, less-optimized features there). Precomputing the
    // resolved color once, here, and pushing it as a flat inline override
    // (which wins the cascade over the stylesheet formula, so the browser
    // never needs to evaluate the formula at all) removes that cost entirely.
    // The stylesheet formulas are left in place as documentation and as a
    // pre-hydration fallback; they are dead weight only once this code runs.
    const accentOkLab = oklchToOklab(t.accent, t.accent_chroma_scale);

    const islandFill = isDark
      ? lerpOkLab(t.ink, t.surface, 0.88)   // 88% surface + 12% ink
      : lerpOkLab(WHITE, t.surface, 0.97);  // 97% surface + 3% white
    s('--island-fill', oklabCss(islandFill));

    if (isDark) {
      const { color, alpha } = mixOkLab(t.surface, 80, WHITE, 8);
      s('--island-edge', oklabCss(color, alpha));
    } else {
      s('--island-edge', oklabCss(lerpOkLab(t.ink, t.surface, 0.90))); // 90% surface + 10% ink
    }

    const wellRecess = lerpOkLab(t.surface, t.ink, 0.04); // 96% surface + 4% ink
    s('--well-recess', oklabCss(wellRecess));

    const badgeFill = fadeOkLab(t.ink, 6);
    s('--badge-fill', oklabCss(badgeFill.color, badgeFill.alpha));

    s('--key-hover-fill',    oklabCss(lerpOkLab(islandFill, t.ink, 0.07)));       // 93% island-fill + 7% ink
    s('--key-primary-fill',  oklabCss(lerpOkLab(islandFill, accentOkLab, 0.18))); // 82% island-fill + 18% accent
    s('--key-primary-hover', oklabCss(lerpOkLab(islandFill, accentOkLab, 0.24))); // 76% island-fill + 24% accent

    // The cut edge: island-fill's own lightness nudged ±CUT, keeping a/b (its
    // hue/chroma) unchanged — the "one knob tunes every surface" cut-paper
    // lip. Exposed as standalone tokens (not just baked into --island-lip)
    // because NotebookPage's heading rules and code-block borders need the
    // exact same two colors.
    const islandFillLit    = clampL([islandFill[0] + CUT, islandFill[1], islandFill[2]]);
    const islandFillShadow = clampL([islandFill[0] - CUT, islandFill[1], islandFill[2]]);
    s('--island-fill-lit',    oklabCss(islandFillLit));
    s('--island-fill-shadow', oklabCss(islandFillShadow));
    s('--island-lip', `inset 0  1px 0 ${oklabCss(islandFillLit)}, inset 0 -1px 0 ${oklabCss(islandFillShadow)}`);
    // Raised-flush plane (F8): the lip alone. Republished here rather than left
    // as a CSS alias so both halves of the Plane axis come from one place — the
    // sunken planes are derived just below, and a reader looking for "what are
    // the planes" finds them together instead of split across two files.
    s('--elev-flush', `inset 0  1px 0 ${oklabCss(islandFillLit)}, inset 0 -1px 0 ${oklabCss(islandFillShadow)}`);

    const wellRecessShadow = clampL([wellRecess[0] - CUT, wellRecess[1], wellRecess[2]]);
    s('--well-recess-shadow', oklabCss(wellRecessShadow));

    // ── PLANE tokens: the sunken half of the elevation language ──────────────
    //
    // These exist so the recess is a SYSTEM the way the raised half already is.
    // `--island-lip` above is one composite, theme-derived token used verbatim
    // everywhere, which is exactly why raised surfaces never drifted; the recess
    // had only a fill token, so its shadow was hand-rolled in six different
    // spellings across ten elements (elevation audit F1-F4).
    //
    // Two planes, not one: a data region you read content INTO sits deeper than
    // a control channel. Anchoring each depth to a material is what keeps them
    // legible — depth read in isolation is only distinguishable at ~3-4 levels,
    // but depth + an obvious role is far easier to tell apart.
    //
    //   --well-deep     data regions   : code blocks, blockquotes, quiet sheets
    //   --well-shallow  control ground : toggle track, nav pill
    //
    // OPAQUE, derived from the well fill minus CUT. That is correct precisely
    // because every element on these planes paints `background: var(--well-recess)`,
    // so the shadow blends into its own surface. Contrast `--state-pressed`
    // below, which must not assume a fill.
    const wellShadowCss = oklabCss(wellRecessShadow);
    s('--well-deep',    `inset 0 1px 3px ${wellShadowCss}`);
    s('--well-shallow', `inset 0 1px 2px ${wellShadowCss}`);

    // ── STATE token: transient, composes over ANY material ───────────────────
    //
    // A key being held is not a structural recess, and conflating the two is
    // audit F1: a recessed label ended up looking as interactive as a key that
    // is only recessed while pressed. This is deliberately a different physical
    // event — a momentary sink, not a basin.
    //
    // TRANSLUCENT, unlike the plane tokens above, and that difference is
    // structural rather than stylistic: `.paper-key:active` sets no background,
    // so it keeps its raised `--island-fill` while held. A shadow derived from
    // the WELL fill would be tinted for a surface the element does not have.
    // State deltas layer over whatever Material they land on, so they must be
    // fill-agnostic. Alpha tracks the theme (dark surfaces need more shadow to
    // read) via the same reasoning as `--shadow-1`'s dark override in App.vue.
    s('--state-pressed', `inset 0 1px 2px rgba(0, 0, 0, ${isDark ? 0.45 : 0.14})`);

    // ── CUT RING: an edge, not a depth ───────────────────────────────────────
    //
    // Audit F2: a hairline `inset 0 0 0 1px` outline and a `inset 0 1px Npx`
    // depth well are different metaphors (an edge vs a basin) that happened to
    // share the `inset` keyword, so which one an element got was an author's
    // choice rather than a rule. Naming it separates the two vocabularies.
    s('--cut-ring', `inset 0 0 0 1px ${oklabCss(islandFillShadow)}`);

    s('--theme-accent-underline', oklabCss(accentOkLab, 0.4));

    // Also set `color-scheme` so native form controls follow along.
    s('color-scheme', isDark ? 'dark' : 'light');
    // Mobile-browser chrome (iOS Safari URL bar + status-bar background
    // spillover, mobile Chrome's URL bar, Edge mobile, etc.) reads the
    // `theme-color` meta.  Keeping it on the active surface means the
    // top stripe of the screen always feels coordinated with the page.
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', oklabCss(t.surface));
  };
  apply(themeRef.value);
  watch(themeRef, apply);
}

export function useThemePreference(): {
  /** Raw stored preference, including `system`. Rarely what a component wants. */
  preference: typeof preferenceRef;
  /** Resolved light/dark for the two-segment toggle — see `modeRef`. */
  mode: typeof modeRef;
  theme: typeof themeRef;
  setPreference: (v: ThemePreference) => void;
} {
  return {
    preference: preferenceRef,
    mode: modeRef,
    theme: themeRef,
    setPreference(v: ThemePreference) {
      preferenceRef.value = v;
    },
  };
}
