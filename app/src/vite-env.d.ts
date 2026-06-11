/// <reference types="vite/client" />

declare module 'vuetify/styles' {}

// markdown-it-texmath ships no types; declare it as a markdown-it plugin so the
// KaTeX wiring in data/notebook.ts typechecks.
declare module 'markdown-it-texmath' {
  import type { PluginWithOptions } from 'markdown-it';
  const texmath: PluginWithOptions<unknown>;
  export default texmath;
}
