<script setup lang="ts">
import AppBackground from '@/components/layout/AppBackground.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ResumeSection from '@/components/sections/ResumeSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
</script>

<template>
  <v-app>
    <AppBackground />
    <AppHeader />
    <v-main>
      <HeroSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style>
/*
  Strip Vuetify's opaque surface so the fixed canvas background shows through.
  Body sets the base color; the canvas layer draws on top of it.
*/
html,
body {
  background-color: #0a0a0f;
  margin: 0;
}

.v-application {
  background: transparent !important;
}

/* App header uses the same content-surface treatment as body surfaces, but
   with only a bottom border — so it reads as a floating bar of chrome over
   the Game-of-Life canvas rather than a full card.  The !important battles
   Vuetify's own !important on .bg-background. */
.v-app-bar.bg-background {
  background-color: color-mix(in oklab, var(--theme-surface) 82%, transparent) !important;
  backdrop-filter: blur(8px) saturate(1.05);
  -webkit-backdrop-filter: blur(8px) saturate(1.05);
  border-bottom: 1px solid var(--theme-grid-minor) !important;
}

/*
  Content surface — a translucent backdrop for text blocks that sit over the
  Game-of-Life canvas.  Quiets the background variation specifically under
  content while letting it show through around the edges, preserving the
  atmospheric flair without hurting readability.

  - color-mix provides a solid-enough fill for browsers without backdrop-filter
    (the opacity alone is visually sufficient as a fallback)
  - backdrop-filter blurs the underlying canvas, giving a soft frosted feel
    where supported (Safari requires the -webkit- prefix)
  - border uses the theme's grid-minor tone so the surface edge reads as a
    proportional step from the background, consistent with the rest of the UI
*/
.content-surface {
  background: color-mix(in oklab, var(--theme-surface) 82%, transparent);
  border: 1px solid var(--theme-grid-minor);
  border-radius: 12px;
  backdrop-filter: blur(8px) saturate(1.05);
  -webkit-backdrop-filter: blur(8px) saturate(1.05);
}
</style>
