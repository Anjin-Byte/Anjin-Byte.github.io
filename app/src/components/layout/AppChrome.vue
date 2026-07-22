<script setup lang="ts">
// Floating spatial chrome — replaces the dissolved app-bar. NavSidebar is the
// navigation now (visible at all viewport widths); this is just the
// persistent essentials: identity/home and theme. A full-viewport,
// click-through overlay: pointer-events are off on the container and on only
// the clusters, so the empty middle still falls through to the grid (cell
// toggle) and the sidebar below.
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <div class="chrome">
    <div class="chrome__bar">
      <!-- Identity, doubling as home. Routing to "/" flies to the hero via the
           router→camera sync (cameraSync.ts), so no direct camera call needed. -->
      <router-link to="/" class="chrome__mark glass-chip" aria-label="Taylor Hale, home">
        Taylor Hale
      </router-link>

      <div class="chrome__controls">
        <ThemeToggle />
      </div>
    </div>
  </div>
</template>

<style scoped>
.chrome {
  position: fixed;
  inset: 0;
  z-index: 10; /* above NavSidebar (5), so chrome sits over it */
  pointer-events: none;
}

/* A flex bar spanning the top inset-to-inset. A balanced corner inset (top =
   sides, via --inset-chrome) and vertical center-alignment of the two clusters
   both fall out of this for free. The bar is click-through; only its children
   take events, so the empty middle still falls to the grid/compass below. */
.chrome__bar {
  position: absolute;
  top: calc(var(--safe-area-top) + var(--inset-chrome));
  inset-inline:
    calc(var(--inset-chrome) + var(--safe-area-left))
    calc(var(--inset-chrome) + var(--safe-area-right));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}
.chrome__bar > * {
  pointer-events: auto;
}

.chrome__controls {
  display: flex;
  align-items: center;
  gap: var(--space-2xs);
}

/* Theme-bound: the custom props swap live on light/dark toggle. Chrome uses a
   FIXED label size (--text-ui) — controls shouldn't balloon with the content. */
.chrome__mark {
  color: var(--theme-ink-secondary);
  font-family: var(--font-display);
  font-size: var(--text-ui);
  letter-spacing: -0.01em;
  text-decoration: none;
  white-space: nowrap;
  transition: color 160ms ease;
}
.chrome__mark:hover {
  color: var(--theme-ink);
}
.chrome__mark:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--theme-ink-secondary) 70%, transparent);
  outline-offset: 2px;
}

/* Single mobile step: trim the wordmark a touch so it fits small phones. */
@media (max-width: 640px) {
  .chrome__mark {
    font-size: 0.95rem;
  }
}
</style>
