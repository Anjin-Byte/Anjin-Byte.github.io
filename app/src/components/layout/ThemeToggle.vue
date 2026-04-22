<script setup lang="ts">
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
    <v-btn value="light" icon="mdi-weather-sunny" size="small">
      <v-icon>mdi-weather-sunny</v-icon>
      <v-tooltip activator="parent" location="bottom" text="Light" />
    </v-btn>
    <v-btn value="system" icon="mdi-theme-light-dark" size="small">
      <v-icon>mdi-theme-light-dark</v-icon>
      <v-tooltip activator="parent" location="bottom" text="System" />
    </v-btn>
    <v-btn value="dark" icon="mdi-weather-night" size="small">
      <v-icon>mdi-weather-night</v-icon>
      <v-tooltip activator="parent" location="bottom" text="Dark" />
    </v-btn>
  </v-btn-toggle>
</template>

<style scoped>
.theme-toggle {
  background: color-mix(in oklab, var(--theme-surface) 74%, transparent) !important;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 55%, white 8%);
  border-radius: 999px;
  backdrop-filter: blur(10px) saturate(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.05);
  margin-inline-start: 8px;
  padding: 2px;
}

.theme-toggle :deep(.v-btn) {
  color: var(--theme-text-tertiary) !important;
  opacity: 1 !important;
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
  background: color-mix(in oklab, var(--theme-grid-accent) 24%, var(--theme-surface) 76%) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.theme-toggle :deep(.v-icon) {
  opacity: 1 !important;
}

@media (max-width: 640px) {
  .theme-toggle {
    margin-inline-start: 0;
  }
}
</style>
