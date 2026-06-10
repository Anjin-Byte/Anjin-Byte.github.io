<script setup lang="ts">
// Floating spatial chrome — replaces the dissolved app-bar. The compass is the
// navigation now; this is just the persistent essentials: identity/home, theme,
// and a plain "all destinations" menu (the keyboard-reachable escape hatch +
// touch-primary nav). A full-viewport, click-through overlay: pointer-events
// are off on the container and on only the clusters, so the empty middle still
// falls through to the grid (cell toggle) and the compass below.
import { ref } from 'vue';
import { mdiMenu } from '@mdi/js';
import { WAYPOINTS } from '../../space/waypoints';
import ThemeToggle from './ThemeToggle.vue';

const isMenuOpen = ref(false);
</script>

<template>
  <div class="chrome">
    <div class="chrome__bar">
      <!-- Identity, doubling as home. Routing to "/" flies to the hero via the
           router→camera sync (cameraSync.ts), so no direct camera call needed. -->
      <router-link to="/" class="chrome__mark glass-chip" aria-label="Taylor Hale — home">
        Taylor Hale
      </router-link>

      <div class="chrome__controls">
        <ThemeToggle />
        <v-menu v-model="isMenuOpen" location="bottom end" offset="10">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              :icon="mdiMenu"
              variant="text"
              size="small"
              class="chrome__menu-btn"
              aria-label="All destinations"
            />
          </template>
          <v-list class="chrome-menu-list" density="compact">
            <v-list-item
              v-for="wp in WAYPOINTS"
              :key="wp.id"
              :to="wp.route"
              :title="wp.label"
              @click="isMenuOpen = false"
            />
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chrome {
  position: fixed;
  inset: 0;
  z-index: 10; /* above CompassNav (5), so chrome sits over any marker */
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
.chrome__mark:focus-visible,
.chrome__menu-btn:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--theme-ink-secondary) 70%, transparent);
  outline-offset: 2px;
}

/* Match ThemeToggle's glass pill so the controls read as one set. */
.chrome__menu-btn {
  color: var(--theme-ink-secondary) !important;
  background: color-mix(in oklab, var(--theme-surface) 74%, transparent) !important;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 55%, white 8%);
  backdrop-filter: blur(10px) saturate(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.05);
}
.chrome__menu-btn:hover {
  color: var(--theme-ink) !important;
}

/* Touch devices get a 44px+ target (51 × 0.875 ≈ 44.6); desktop stays compact. */
@media (pointer: coarse) {
  .chrome__menu-btn {
    min-width: var(--touch-min);
    min-height: var(--touch-min);
  }
}

/* Single mobile step: trim the wordmark a touch so it fits small phones. */
@media (max-width: 640px) {
  .chrome__mark {
    font-size: 0.95rem;
  }
}
</style>

<!-- Global: the v-menu list is teleported out of this component, so scoped
     styles can't reach it. Vuetify's v-list paints from ITS theme (not our
     custom --theme-* props), so we force the glass surface + our ink onto the
     list and items, and override Vuetify's hover/active state layer. The
     compound `.v-list` selectors + !important out-specify Vuetify's base. -->
<style>
/* Glass recipe matches .glass-chip / ThemeToggle exactly (surface 74%,
   blur 10) so the menu reads as the same family as the floating chips. */
.chrome-menu-list.v-list {
  padding: 6px;
  min-width: 11.5rem;
  overflow: hidden;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 58%, white 8%);
  border-radius: var(--radius-sm);
  background: color-mix(in oklab, var(--theme-surface) 74%, transparent) !important;
  color: var(--theme-ink) !important;
  backdrop-filter: blur(10px) saturate(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.05);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 12px 30px rgba(0, 0, 0, 0.1);
}

/* Light-theme adjustment, mirroring `html[data-theme-mode="light"] .glass-chip`. */
html[data-theme-mode="light"] .chrome-menu-list.v-list {
  background: color-mix(in oklab, var(--theme-surface) 92%, white 8%) !important;
  border-color: color-mix(in oklab, var(--theme-grid-major) 36%, white 45%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    0 12px 30px rgba(130, 120, 108, 0.08);
}

.chrome-menu-list .v-list-item {
  min-height: 38px;
  border-radius: var(--radius-xs);
  padding-inline: var(--space-xs) !important;
  color: var(--theme-ink-secondary);
}
.chrome-menu-list .v-list-item:hover,
.chrome-menu-list .v-list-item--active {
  color: var(--theme-ink);
}

.chrome-menu-list .v-list-item-title {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

/* Vuetify paints hover/active via this state layer; tint it to our ink so the
   highlight reads in both themes instead of Vuetify's default. */
.chrome-menu-list .v-list-item__overlay {
  background: var(--theme-ink);
}
</style>
