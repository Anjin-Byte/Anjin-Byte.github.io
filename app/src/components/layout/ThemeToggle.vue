<script setup lang="ts">
import { mdiWeatherSunny, mdiThemeLightDark, mdiWeatherNight } from '@mdi/js';
import { useThemePreference } from '../../composables/useThemePreference';

const { preference } = useThemePreference();
</script>

<template>
  <v-btn-toggle
    v-model="preference"
    mandatory
    density="compact"
    variant="text"
    class="theme-toggle"
  >
    <v-btn value="light" :icon="mdiWeatherSunny" size="small">
      <v-icon :icon="mdiWeatherSunny" />
      <v-tooltip activator="parent" location="bottom" text="Light" />
    </v-btn>
    <v-btn value="system" :icon="mdiThemeLightDark" size="small">
      <v-icon :icon="mdiThemeLightDark" />
      <v-tooltip activator="parent" location="bottom" text="System" />
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
  box-shadow: inset 0 1px 2px var(--shadow-1);
  margin-inline-start: 8px;
  padding: 4px;
  gap: 2px;
}

.theme-toggle :deep(.v-btn) {
  color: var(--theme-text-tertiary) !important;
  opacity: 1 !important;
  border-radius: var(--radius-pill) !important;
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
  box-shadow: var(--island-lip), 0 0 0 2px var(--theme-accent-ring) !important;
}

.theme-toggle :deep(.v-icon) {
  opacity: 1 !important;
}

@media (max-width: 640px) {
  .theme-toggle {
    margin-inline-start: 0;
  }
}

/* Touch devices: give each segment a 44px+ tall target (51 × 0.875 ≈ 44.6).
   Height only — forcing full width per segment would make the 3-button pill
   too wide. Desktop (fine pointer) stays compact. */
@media (pointer: coarse) {
  .theme-toggle :deep(.v-btn) {
    min-height: var(--touch-min);
  }
}
</style>
