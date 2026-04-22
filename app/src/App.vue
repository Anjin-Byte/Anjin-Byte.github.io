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
:root {
  --font-display: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
  --font-ui: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
}

/*
  Strip Vuetify's opaque surface so the fixed canvas background shows through.
  Body sets the base color; the canvas layer draws on top of it.
*/
html {
  scroll-behavior: smooth;
}

html,
body {
  background-color: #0a0a0f;
  margin: 0;
}

body {
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

/* App header uses the same content-surface treatment as body surfaces, but
   with only a bottom border — so it reads as a floating bar of chrome over
   the Game-of-Life canvas rather than a full card.  The !important battles
   Vuetify's own !important on .bg-background. */
.v-app-bar.bg-background {
  background-color: color-mix(in oklab, var(--theme-surface) 84%, transparent) !important;
  backdrop-filter: blur(14px) saturate(1.08);
  -webkit-backdrop-filter: blur(14px) saturate(1.08);
  border-bottom: 1px solid color-mix(in oklab, var(--theme-grid-border) 68%, white 12%) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.glass-panel {
  background: color-mix(in oklab, var(--theme-surface) 84%, transparent);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 62%, white 10%);
  border-radius: 24px;
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
  background: color-mix(in oklab, var(--theme-surface) 70%, transparent);
  border: 1px solid color-mix(in oklab, var(--theme-grid-minor) 88%, white 6%);
  border-radius: 18px;
  backdrop-filter: blur(8px) saturate(1.04);
  -webkit-backdrop-filter: blur(8px) saturate(1.04);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.glass-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  max-width: max-content;
  min-height: 1.8rem;
  padding: 0.34rem 0.78rem 0.32rem;
  border-radius: 999px;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 58%, white 8%);
  background: color-mix(in oklab, var(--theme-surface) 74%, transparent);
  backdrop-filter: blur(10px) saturate(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.05);
  line-height: 1;
}

.content-surface {
  background: color-mix(in oklab, var(--theme-surface) 84%, transparent);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 62%, white 10%);
  border-radius: 24px;
  backdrop-filter: blur(14px) saturate(1.08);
  -webkit-backdrop-filter: blur(14px) saturate(1.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 18px 60px rgba(0, 0, 0, 0.14);
}

.section-kicker {
  align-self: start;
  color: var(--theme-text-secondary);
  font-size: 0.69rem;
  font-weight: 600;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  white-space: nowrap;
}

.section-heading {
  font-family: var(--font-display);
  font-size: clamp(2.15rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.03em;
  color: var(--theme-text-primary);
  margin: 0;
}

.section-intro {
  margin: 0;
  color: var(--theme-text-secondary);
  font-size: 0.98rem;
  line-height: 1.7;
  max-width: 56ch;
}
</style>
