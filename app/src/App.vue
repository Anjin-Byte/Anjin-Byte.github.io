<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import AppBackground from '@/components/layout/AppBackground.vue';
import AppChrome from '@/components/layout/AppChrome.vue';
import WorldStage from '@/components/space/WorldStage.vue';
import NavSidebar from '@/components/layout/NavSidebar.vue';

// DEV-only renderer backend switcher. Dynamically imported ONLY under
// import.meta.env.DEV so the whole component (and its dynamic-import chunk) is
// absent from the production bundle — a plain static import + `v-if` would
// leave the dead component code shipping. `null` in prod; the v-if drops it.
const RendererDebugToggle = import.meta.env.DEV
  ? defineAsyncComponent(() => import('@/components/layout/RendererDebugToggle.vue'))
  : null;
</script>

<template>
  <v-app class="app-shell">
    <AppBackground />
    <AppChrome />
    <WorldStage />
    <NavSidebar />
    <component :is="RendererDebugToggle" v-if="RendererDebugToggle" />
  </v-app>
</template>

<style>
:root {
  --font-display: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
  --font-ui: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
  --font-mono: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
  --safe-area-top: env(safe-area-inset-top, 0px);
  --safe-area-right: env(safe-area-inset-right, 0px);
  --safe-area-bottom: env(safe-area-inset-bottom, 0px);
  --safe-area-left: env(safe-area-inset-left, 0px);

  /* ── Design tokens ──────────────────────────────────────────────────────
     The scale everything derives from. */

  /* Foundation */
  --zoom: 0.875;
  --touch-min: 51px; /* 51 × 0.875 = 44.6 ≥ 44px visual touch target */

  /* Space scale (4px base) */
  --space-3xs: 4px;
  --space-2xs: 8px;
  --space-xs: 12px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* Fluid type scale (base 16px, ratio 1.25; clamp min@360 → max@1440) */
  --step--2: clamp(0.69rem, 0.66rem + 0.13vw, 0.75rem);
  --step--1: clamp(0.83rem, 0.78rem + 0.22vw, 0.94rem);
  --step-0: clamp(1rem, 0.95rem + 0.22vw, 1.13rem);
  --step-1: clamp(1.25rem, 1.16rem + 0.39vw, 1.41rem);
  --step-2: clamp(1.56rem, 1.43rem + 0.59vw, 1.76rem);
  --step-3: clamp(1.95rem, 1.75rem + 0.89vw, 2.2rem);
  --step-4: clamp(2.44rem, 2.11rem + 1.46vw, 3.43rem);

  /* Radius scale */
  --radius-xs: 11px;
  --radius-sm: 16px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  /* Layout */
  --inset-chrome: 16px; /* balanced corner inset (top = sides) */
  --measure: 64ch; /* prose line-length cap */
  --container-max: 1120px; /* content reading column (inside the 1200px panel) */
  --text-ui: 1.05rem; /* fixed chrome label — controls don't balloon */

  /* ── Island elevation (soft realism) ──────────────────────────────────────
     Islands are clean sheets of paper resting on the graph-paper field, lifted
     just off the page. Principles: light comes from straight ABOVE (shadows
     drop vertically, never diagonally); depth is a LAYERED penumbra — a tight
     contact shadow + a soft cast — tinted toward the scene, never pure black;
     a crisp hairline edge + a 1px lit top lip define the shape INDEPENDENT of
     the shadow, so an island stays legible over the busy grid and for low-
     vision users (the edge is structure, the shadow is flair). Elevation is a
     small fixed scale (--elev-1 resting, --elev-2 hero), not per-element
     guesses. Values are LIGHT defaults; `data-theme-mode="dark"` overrides. */
  --island-fill: color-mix(in oklab, var(--theme-surface) 97%, white 3%);
  --island-edge: color-mix(in oklab, var(--theme-surface) 90%, var(--theme-ink) 10%);
  --shadow-1: rgba(54, 48, 40, 0.12); /* contact: tight, slightly stronger */
  --shadow-2: rgba(54, 48, 40, 0.08); /* cast: soft, faint */
  /* The cut edge of the sheet, given thickness: top face lit, bottom face in
     shadow. Expressed as a perceptual lightness delta (--cut) from the sheet's
     OWN fill (not the field), so both themes get the SAME perceived edge depth
     and the OKLab [0,1] clamp handles the mode asymmetry for free: in light the
     lit face hits the white ceiling and becomes a whisper while the shadow
     carries it; in dark both faces have headroom. Keeping the origin's a/b
     tints the edge like lit/shadowed paper (never a glassy pure-white spec).
     One knob — --cut — tunes the edge across every surface and both themes. */
  /* Pre-JS fallback only — the authoritative value is CUT in types/theme.ts,
     which useThemePreference republishes as this var on every theme apply. */
  --cut: 0.05;
  --island-lip:
    inset 0  1px 0 oklab(from var(--island-fill) calc(l + var(--cut)) a b),
    inset 0 -1px 0 oklab(from var(--island-fill) calc(l - var(--cut)) a b);
  --elev-1: 0 1px 2px var(--shadow-1), 0 6px 18px var(--shadow-2);  /* resting */
  --elev-2: 0 2px 4px var(--shadow-1), 0 14px 34px var(--shadow-2); /* hero */
  --well-recess: color-mix(in oklab, var(--theme-surface) 96%, var(--theme-ink) 4%);
  /* Metadata badges (tech tags): a flat tonal token, not a plate. A wash of the
     INK color reads correctly in both modes (dark wash on light paper, light
     wash on dark) — so one token, no per-mode override. Pairs with
     --island-edge; no shadow, because depth cues this small read as grime. */
  --badge-fill: color-mix(in oklab, var(--theme-ink) 6%, transparent);

  /* Pressable keys (links, buttons, the active toggle segment): cut from the
     same paper, they rest proud and sink IN on :active. Hover warms the fill a
     step; the accent variant tints toward --theme-accent. All derive from
     --island-fill / --theme-accent, so they track the theme — no per-mode dup. */
  --key-hover-fill: color-mix(in oklab, var(--island-fill) 93%, var(--theme-ink) 7%);
  --key-primary-fill: color-mix(in oklab, var(--island-fill) 82%, var(--theme-accent) 18%);
  --key-primary-hover: color-mix(in oklab, var(--island-fill) 76%, var(--theme-accent) 24%);
}

/*
  Root background owns the page edge and safe-area fill so iOS Safari can
  always paint a themed surface behind its bottom toolbar, even when the live
  canvas is composited separately from the document.

  The fallbacks below match LIGHT_THEME (the first-visit default).  In the
  normal path the inline script in index.html overrides these with the user's
  resolved theme before paint, so these are only a last-resort defense.
*/
html {
  zoom: var(--zoom, .875);
  background-color: var(--theme-surface, oklab(0.985 -0.001 0.004));
  background-image:
    linear-gradient(
      to right,
      color-mix(in oklab, var(--theme-grid-minor, rgba(0, 0, 0, 0.08)) 44%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      color-mix(in oklab, var(--theme-grid-minor, rgba(0, 0, 0, 0.08)) 44%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      color-mix(in oklab, var(--theme-grid-major, rgba(0, 0, 0, 0.14)) 56%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      color-mix(in oklab, var(--theme-grid-major, rgba(0, 0, 0, 0.14)) 56%, transparent) 1px,
      transparent 1px
    );
  /* Pitch vars are set by useCanvasSurface from the renderer's device-px cell
     size ÷ the effective DPR, so this fallback grid matches the canvas grid on
     EVERY display density (the old hardcoded 16px/80px only matched at 2×).
     The 16px/80px fallbacks cover the pre-JS moment and remain correct for 2×. */
  background-size:
    var(--grid-pitch-minor, 16px) var(--grid-pitch-minor, 16px),
    var(--grid-pitch-minor, 16px) var(--grid-pitch-minor, 16px),
    var(--grid-pitch-major, 80px) var(--grid-pitch-major, 80px),
    var(--grid-pitch-major, 80px) var(--grid-pitch-major, 80px);
  background-position: 0 0, 0 0, 0 0, 0 0;
}

html,
body,
#app {
  min-height: 100%;
}

html,
body {
  margin: 0;
  /* Two-finger horizontal scroll drives lane navigation (useLaneScroll), so
     disable the browser's back/forward overscroll swipe on this axis. */
  overscroll-behavior-x: none;
}

body {
  background: transparent;
  color: var(--theme-text-primary, var(--theme-ink));
  font-family: var(--font-ui);
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
}

.v-application {
  background: transparent !important;
}

.app-shell {
  position: relative;
  isolation: isolate;
}

/* The space is navigated by camera traversal, not page scroll — lock the
   document so the only motion is the WorldStage transform. */
body {
  overflow: hidden;
}

/* Raised island — a clean paper plate lifted off the field. The lit top lip is
   listed first so it composites above the drop shadows. */
.glass-panel,
.content-surface {
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-lg);
  box-shadow: var(--island-lip), var(--elev-1);
}

/* The hero plate sits one elevation step higher. */
.glass-panel--strong {
  box-shadow: var(--island-lip), var(--elev-2);
}

/* Nested fields (skill notes, project items) — pressed INTO the plate. A single
   soft top-inner shadow reads as a recess under top-down light; this is the one
   inset cue that stays legible at low contrast, so it survives here. */
.quiet-sheet {
  background: var(--well-recess);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-md);
  box-shadow: inset 0 1px 3px var(--shadow-1);
}

/* Kicker / tag pills — small, so just the hairline + lit lip; a cast shadow on
   a pill this size reads as fussy. Crisp, essentially flat. */
.glass-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  max-width: max-content;
  min-height: 1.8rem;
  padding: 0.34rem 0.78rem 0.32rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--island-edge);
  background: var(--island-fill);
  box-shadow: var(--island-lip);
  line-height: 1;
}

/* ── Pressable keys ───────────────────────────────────────────────────────
   The interactive member of the paper family: rests raised (the cut edge),
   sinks into a recess on :active — "the press." Consuming components own
   layout (padding, size, gap); these own material + state only. Focus is an
   explicit ring, never depth alone (a11y — the lesson neumorphism skipped). */
.paper-key {
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-pill);
  box-shadow: var(--island-lip);
  color: var(--theme-text-primary);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 140ms ease, border-color 140ms ease, box-shadow 110ms ease;
}
.paper-key:hover {
  background: var(--key-hover-fill);
  border-color: var(--theme-grid-border);
}
.paper-key:active {
  box-shadow: inset 0 1px 2px var(--shadow-1);
}
.paper-key:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
}

/* Accent call-to-action: tinted fill + a touch of lift; same press. */
.paper-key--primary {
  background: var(--key-primary-fill);
  box-shadow: var(--island-lip), var(--elev-1);
}
.paper-key--primary:hover {
  background: var(--key-primary-hover);
  border-color: var(--theme-grid-border);
}
.paper-key--primary:active {
  box-shadow: inset 0 1px 2px var(--shadow-1);
}

/* Ghost key: flush until touched (icon buttons in a tray, inactive segments).
   No resting fill/edge/lip — just a hover wash + the press. Self-contained. */
.paper-key--ghost {
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  box-shadow: none;
  color: var(--theme-text-tertiary);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease, box-shadow 110ms ease;
}
.paper-key--ghost:hover {
  background: var(--key-hover-fill);
  border-color: var(--island-edge);
  color: var(--theme-text-primary);
}
.paper-key--ghost:active {
  box-shadow: inset 0 1px 2px var(--shadow-1);
}
.paper-key--ghost:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
}

.section-kicker {
  align-self: start;
  color: var(--theme-text-secondary);
  font-size: var(--step--2);
  font-weight: 600;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  white-space: nowrap;
}

.section-heading {
  font-family: var(--font-display);
  font-size: var(--step-4);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.03em;
  color: var(--theme-text-primary);
  margin: 0;
}

.section-intro {
  margin: 0;
  color: var(--theme-text-secondary);
  font-size: var(--step-0);
  line-height: 1.7;
  max-width: var(--measure);
}

/* Dark mode: a raised object catches more light, so the plate rides LIGHTER
   than the deep field; shadows go near-black and stronger (low-L surfaces need
   more shadow to read). Both --well-recess and the cut edge need NO override —
   they derive from --island-fill (+ --cut) in :root and `var()` resolves
   lazily, so they track this mode's fill on their own. The well sits a faint
   step below the plate (≈ΔL 0.05), not on the field floor — the inset shadow
   carries the recess, so the fill needn't go all the way dark. */
html[data-theme-mode="dark"] {
  --island-fill: color-mix(in oklab, var(--theme-surface) 88%, var(--theme-ink) 12%);
  --island-edge: color-mix(in oklab, var(--theme-surface) 80%, white 8%);
  --shadow-1: rgba(0, 0, 0, 0.55);
  --shadow-2: rgba(0, 0, 0, 0.40);
}
</style>
