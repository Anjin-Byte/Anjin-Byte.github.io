<script setup lang="ts">
import AppBackground from '@/components/layout/AppBackground.vue';
import AppChrome from '@/components/layout/AppChrome.vue';
import WorldStage from '@/components/space/WorldStage.vue';
import CompassNav from '@/components/space/CompassNav.vue';
</script>

<template>
  <v-app class="app-shell">
    <AppBackground />
    <AppChrome />
    <WorldStage />
    <CompassNav />
  </v-app>
</template>

<style>
:root {
  --font-display: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
  --font-ui: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
  --safe-area-top: env(safe-area-inset-top, 0px);
  --safe-area-right: env(safe-area-inset-right, 0px);
  --safe-area-bottom: env(safe-area-inset-bottom, 0px);
  --safe-area-left: env(safe-area-inset-left, 0px);

  /* ── Design tokens ──────────────────────────────────────────────────────
     The scale everything derives from. The compass solver mirrors the marker
     geometry in space/tokens.ts — keep the two in sync. */

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
  background-size: 16px 16px, 16px 16px, 80px 80px, 80px 80px;
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

.glass-panel {
  background: color-mix(in oklab, var(--theme-surface) 84%, transparent);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 62%, white 10%);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(14px) saturate(1.08);
  -webkit-backdrop-filter: blur(14px) saturate(1.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 18px 60px rgba(0, 0, 0, 0.14);
}

.glass-panel--strong {
  background: color-mix(in oklab, var(--theme-surface) 88%, transparent);
}

.quiet-sheet {
  background: color-mix(in oklab, var(--theme-surface) 78%, transparent);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 54%, white 8%);
  border-radius: var(--radius-md);
  backdrop-filter: blur(8px) saturate(1.04);
  -webkit-backdrop-filter: blur(8px) saturate(1.04);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 10px 28px rgba(0, 0, 0, 0.07);
}

.glass-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  max-width: max-content;
  min-height: 1.8rem;
  padding: 0.34rem 0.78rem 0.32rem;
  border-radius: var(--radius-pill);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 58%, white 8%);
  background: color-mix(in oklab, var(--theme-surface) 74%, transparent);
  backdrop-filter: blur(10px) saturate(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.05);
  line-height: 1;
}

.content-surface {
  background: color-mix(in oklab, var(--theme-surface) 84%, transparent);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 62%, white 10%);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(14px) saturate(1.08);
  -webkit-backdrop-filter: blur(14px) saturate(1.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 18px 60px rgba(0, 0, 0, 0.14);
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

html[data-theme-mode="light"] .glass-panel {
  background: color-mix(in oklab, var(--theme-surface) 93%, white 7%);
  border-color: color-mix(in oklab, var(--theme-grid-major) 38%, white 42%);
  backdrop-filter: blur(10px) saturate(1.02);
  -webkit-backdrop-filter: blur(10px) saturate(1.02);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.92),
    0 16px 44px rgba(130, 120, 108, 0.08);
}

html[data-theme-mode="light"] .glass-panel--strong {
  background: color-mix(in oklab, var(--theme-surface) 96%, white 4%);
}

html[data-theme-mode="light"] .quiet-sheet {
  background: color-mix(in oklab, var(--theme-surface) 95%, white 5%);
  border-color: color-mix(in oklab, var(--theme-grid-major) 36%, white 42%);
  backdrop-filter: blur(6px) saturate(1.01);
  -webkit-backdrop-filter: blur(6px) saturate(1.01);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    0 10px 24px rgba(130, 120, 108, 0.06);
}

html[data-theme-mode="light"] .glass-chip {
  background: color-mix(in oklab, var(--theme-surface) 92%, white 8%);
  border-color: color-mix(in oklab, var(--theme-grid-major) 36%, white 45%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.88);
}
</style>
