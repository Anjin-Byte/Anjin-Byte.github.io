<script setup lang="ts">
// TWO segments, not three. `system` was never a third theme — it is the absence
// of a preference, and offering it alongside two real answers presented three
// peers where there are only two. It remains the first-visit default and the
// stored value; it just is not a button.
//
// Bound to `mode`, which resolves `system` on read and stores a concrete choice
// on write. So the lit segment always matches what is on screen, and the first
// click pins the theme. Full rationale on `modeRef` in useThemePreference.ts.
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
import { useThemePreference } from '../../composables/useThemePreference';

const { mode } = useThemePreference();
</script>

<template>
  <v-btn-toggle
    v-model="mode"
    mandatory
    density="compact"
    variant="text"
    class="theme-toggle"
  >
    <v-btn value="light" :icon="mdiWeatherSunny" size="small">
      <v-icon :icon="mdiWeatherSunny" />
      <v-tooltip activator="parent" location="bottom" text="Light" />
    </v-btn>
    <v-btn value="dark" :icon="mdiWeatherNight" size="small">
      <v-icon :icon="mdiWeatherNight" />
      <v-tooltip activator="parent" location="bottom" text="Dark" />
    </v-btn>
  </v-btn-toggle>
</template>

<style scoped>
/* A recessed track cut into the chrome — same idiom as NavSidebar's grooves:
   the inset shadow alone cuts it (no border, so the depth cue isn't doubled),
   inactive segments sit flush as quiet ghosts, and the active mode is the ONE
   raised thing — plain stock, marked by an accent ring around its edge. */
.theme-toggle {
  background: var(--well-recess) !important;
  border-radius: var(--radius-pill);
  /* (shallow-sunken, control, rest) — a control channel, not a data well. */
  box-shadow: var(--well-shallow);
  margin-inline-start: 8px;
  padding: 4px;
  gap: 2px;
}

.theme-toggle :deep(.v-btn) {
  color: var(--theme-text-tertiary) !important;
  opacity: 1 !important;
  border-radius: var(--radius-pill) !important;
  /* Square, and big enough to hold BOTH the glyph and the ring.
     Vuetify's density-compact segment is 20 × 28, and the glyph is 18 — which
     left 1px of clearance either side, enough while the selected ring was drawn
     OUTSIDE the box. Once the ring moved inset (App.vue --state-selected, so an
     ancestor could not clip it) it took the outer 2px of that 20, leaving 16 for
     an 18px glyph: the icon crossed its own ring. 28 = 18 glyph + 2×2 ring +
     2×3 clearance, and it matches the existing height, so the pill's outer
     dimensions are unchanged. The container sizes to its contents rather than
     the contents being trimmed to the container. */
  width: 28px !important;
  min-width: 28px !important;
  height: 28px !important;
  transition:
    color 160ms ease,
    background-color 160ms ease,
    box-shadow 160ms ease;
}

.theme-toggle :deep(.v-btn:hover) {
  color: var(--theme-text-secondary) !important;
}

.theme-toggle :deep(.v-btn--active) {
  color: var(--theme-text-primary) !important;
  background: var(--island-fill) !important;
  /* The INSET placement, because this container clips: Vuetify's group is
     `overflow: auto hidden` with `border-radius: 999px`, so a ring painted
     outside the segment is cut by the stadium curve. The nav coin uses the
     outset form — same ring, different container. (App.vue token note.) */
  box-shadow: var(--island-lip), var(--state-selected-inset) !important;
}

.theme-toggle :deep(.v-icon) {
  opacity: 1 !important;
}

@media (max-width: 640px) {
  .theme-toggle {
    margin-inline-start: 0;
  }
}

/* Touch devices: a real 44 × 44 target per segment (WCAG 2.5.5). Width was
   previously left out on the grounds that it would make the 3-button pill too
   wide — but the measured segment was 17.5px across, which is not a target, and
   the pill still fits: 3 × 44 + padding ≈ 140px against a 320px viewport that
   only also carries the wordmark. Desktop (fine pointer) stays compact. */
@media (pointer: coarse) {
  /* THE ACTUAL TOUCH BUG, and the reason this looked broken on phones and
     tablets while desktop was fine.
     Vuetify gives `.v-btn-group` a FIXED `height: 36px` and `overflow: auto
     hidden`. The touch rule below grows each segment to 44px. 44 does not fit
     in 36, so the group clipped its own buttons — measured 12px cut off the
     bottom of every segment, taking the selected ring with it. The ring was
     never the problem on touch; the button was being guillotined.
     `height: auto` makes the container size to its contents instead of
     trimming them. The pill becomes 52px tall here (44 + 2×4 padding), which is
     correct: it is a touch control. */
  .theme-toggle {
    height: auto !important;
  }

  .theme-toggle :deep(.v-btn) {
    /* `!important` is not decoration here. The base rule above needs it to beat
       Vuetify, and `!important` outranks a normal declaration regardless of
       source order or media query — so without it the base `min-width: 28px`
       would quietly win and touch targets would silently drop back to 28. */
    min-height: var(--touch-min) !important;
    min-width: var(--touch-min) !important;
    width: var(--touch-min) !important;
    height: var(--touch-min) !important;
  }
}
</style>
