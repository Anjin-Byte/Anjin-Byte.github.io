<script setup lang="ts">
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
</script>

<template>
  <v-app-bar elevation="0" color="background" border="b">
    <v-app-bar-title>
      <span class="title-ink font-weight-bold">Anjin Byte (Work in progress...)</span>
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
    </template>
  </v-app-bar>
</template>

<style>
/* Inset toolbar content to align with the canvas margin border */
.v-app-bar .v-toolbar__content {
  padding-inline: var(--grid-margin, 76px) !important;
}

.title-ink {
  /* Grid-line hue: major transmittance (0.34,0.68,0.86) × paper → oklab(0.793 -0.054 -0.032).
     Darkened to L=0.38 for ink depth; same a,b chroma keeps it in the same teal-green family. */
  color: #114a53;
  color: oklab(0.38 -0.054 -0.032);
  mix-blend-mode: multiply;
  font-size: 1.35rem;
  /* Ink bleed: radial bloom (capillary soak) + slight directional offset (fiber pull) */
  text-shadow:
    0 0 1.2px rgba(17, 74, 83, 0.45),
    0.4px 0.4px 1.0px rgba(17, 74, 83, 0.20);
}

.nav-ink {
  color: #114a53 !important;
  color: oklab(0.38 -0.054 -0.032) !important;
  mix-blend-mode: multiply;
  font-size: 1.0rem !important;
  text-shadow:
    0 0 1.0px rgba(17, 74, 83, 0.40),
    0.3px 0.3px 0.8px rgba(17, 74, 83, 0.18);
}
</style>
