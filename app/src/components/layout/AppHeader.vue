<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';

const navLinks = [
  { label: 'Demos',   href: '#projects' },
  { label: 'Resume',  href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
</script>

<template>
  <v-app-bar elevation="0" color="background" border="b">
    <v-app-bar-title>
      <span class="title-ink font-weight-bold">Anjin Byte</span>
    </v-app-bar-title>
    <template #append>
      <v-btn
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        variant="text"
        size="default"
        class="nav-ink"
      >
        {{ link.label }}
      </v-btn>
      <ThemeToggle />
    </template>
  </v-app-bar>
</template>

<style>
/* Inset toolbar content to align with the canvas margin border */
.v-app-bar .v-toolbar__content {
  padding-inline: var(--grid-margin, 76px) !important;
}

/* Theme-bound. The custom properties are written to :root by
   useThemePreference and swap live when the user toggles light/dark. */
.title-ink {
  color: var(--theme-ink);
  font-family: var(--font-display);
  font-size: 1.45rem;
  letter-spacing: -0.02em;
}

.nav-ink {
  color: var(--theme-ink-secondary) !important;
  font-size: 0.88rem !important;
  letter-spacing: 0.08em;
}
.nav-ink:hover {
  color: var(--theme-ink) !important;
}
</style>
