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
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0a0a0f',
          surface: '#12121a',
          primary: '#7c4dff',
          secondary: '#00e5ff',
          accent: '#69ff47',
        },
      },
    },
  },
});
