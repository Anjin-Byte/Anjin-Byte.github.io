<script setup lang="ts">
import AppBackground from '@/components/layout/AppBackground.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
</script>

<template>
  <v-app>
    <AppBackground />
    <AppHeader />
    <v-main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
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
</style>
