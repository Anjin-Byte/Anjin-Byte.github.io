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
    color="primary"
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
  background: transparent !important;
  margin-inline-start: 8px;
}
</style>
