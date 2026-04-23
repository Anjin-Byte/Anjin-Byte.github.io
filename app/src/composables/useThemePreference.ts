import { ref, computed, watch } from 'vue';
import type { ThemePalette } from '../types/theme';
import { LIGHT_THEME, DARK_THEME, lerpOkLab, oklabCss, oklchCss } from '../types/theme';

// Theme preference is genuinely app-global state — the toggle in the header
// and the WebGPU renderer in AppBackground both need to read the same value.
// Declaring the refs at module scope makes this a singleton; every call to
// useThemePreference() returns references to the same underlying state.

export type ThemePreference = 'light' | 'system' | 'dark';

const STORAGE_KEY = 'theme-preference';

// First-visit default is `light` — the site is calibrated and tuned around
// light mode as the primary experience; dark is available via the toggle and
// is persisted in localStorage once chosen.  (Using `system` here would mean
// users with OS dark-mode never see the intended presentation.)
function readStored(): ThemePreference {
  if (typeof window === 'undefined') return 'light';
  const v = window.localStorage?.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' || v === 'system' ? v : 'light';
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
if (typeof window !== 'undefined' && document?.documentElement) {
  const apply = (t: ThemePalette): void => {
    const root = document.documentElement;
    const s = (name: string, value: string): void => {
      root.style.setProperty(name, value);
    };
    root.dataset.themeMode = t.surface[0] > 0.5 ? 'light' : 'dark';
    // Surfaces + primary ink
    s('--theme-surface', oklabCss(t.surface));
    s('--theme-ink', oklabCss(t.ink));
    // Text tiers — lerped once here so CSS consumers get a direct color value
    s('--theme-ink-secondary', oklabCss(lerpOkLab(t.surface, t.ink, t.ink_secondary_t)));
    s('--theme-ink-tertiary',  oklabCss(lerpOkLab(t.surface, t.ink, t.ink_tertiary_t)));
    // Legacy aliases used across the HTML sections.
    s('--theme-text-primary',   oklabCss(t.ink));
    s('--theme-text-secondary', oklabCss(lerpOkLab(t.surface, t.ink, t.ink_secondary_t)));
    s('--theme-text-tertiary',  oklabCss(lerpOkLab(t.surface, t.ink, t.ink_tertiary_t)));
    // Grid-derived colors (minor/major/border) — same lerp the shader does
    s('--theme-grid-minor',  oklabCss(lerpOkLab(t.surface, t.ink, t.minor_t)));
    s('--theme-grid-major',  oklabCss(lerpOkLab(t.surface, t.ink, t.major_t)));
    s('--theme-grid-border', oklabCss(lerpOkLab(t.surface, t.ink, t.border_t)));
    // Accent in OKLCH with chroma scale applied; focus ring is accent + alpha
    s('--theme-accent',       oklchCss(t.accent, t.accent_chroma_scale));
    s('--theme-accent-ring',  oklchCss(t.accent, t.accent_chroma_scale, 0.45));
    s('--theme-selection-bg', oklchCss(t.accent, t.accent_chroma_scale, 0.20));
    // Also set `color-scheme` so native form controls follow along.
    s('color-scheme', t.surface[0] > 0.5 ? 'light' : 'dark');
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
