import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

// Components/directives are auto-imported per-use by vite-plugin-vuetify
// (autoImport), so the bundle ships only what's referenced instead of all of
// Vuetify. Icons use the SVG set (mdi-svg): each glyph is a tree-shaken path
// string from @mdi/js, replacing the ~395 KB webfont we shipped for a handful
// of icons.
export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  // Hex approximations of the cut-paper palette (theme.ts is authoritative —
  // these were derived from it via oklab→srgb; regenerate if the palette
  // changes). Vuetify paints few surfaces directly (tooltips, menu/list
  // defaults not overridden by component CSS), but those must not leak the
  // pre-redesign neon theme this block used to declare. The active theme NAME
  // is synced with the user's light/dark preference by useThemePreference.
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#fafaf7', // LIGHT_THEME.surface
          surface: '#fafaf7',
          'on-surface': '#2a2926', // LIGHT_THEME.ink
          primary: '#ffc3c7', // LIGHT_THEME.accent (pastel rose)
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#111213', // DARK_THEME.surface
          surface: '#111213',
          'on-surface': '#cacacc', // DARK_THEME.ink
          primary: '#ad9cc3', // DARK_THEME.accent (muted purple)
        },
      },
    },
  },
});
