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

export type ThemePreference = 'light' | 'system' | 'dark';

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

    const wellRecessShadow = clampL([wellRecess[0] - CUT, wellRecess[1], wellRecess[2]]);
    s('--well-recess-shadow', oklabCss(wellRecessShadow));

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
  preference: typeof preferenceRef;
  theme: typeof themeRef;
  setPreference: (v: ThemePreference) => void;
} {
  return {
    preference: preferenceRef,
    theme: themeRef,
    setPreference(v: ThemePreference) {
      preferenceRef.value = v;
    },
  };
}
