<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

import ThemeToggle from './ThemeToggle.vue';

const navLinks = [
  { label: 'Demos',   href: '#projects' },
  { label: 'Resume',  href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const { smAndDown } = useDisplay();
const isMenuOpen = ref(false);
</script>

<template>
  <v-app-bar elevation="0" color="background" border="b">
    <v-app-bar-title class="header-title">
      <span class="title-ink font-weight-bold"></span>
    </v-app-bar-title>
    <template #append>
      <template v-if="smAndDown">
        <ThemeToggle />
        <v-menu
          v-model="isMenuOpen"
          location="bottom end"
          offset="10"
        >
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-menu"
              variant="text"
              size="small"
              class="menu-ink"
              aria-label="Open navigation menu"
            />
          </template>

          <v-list class="header-menu-list" density="compact">
            <v-list-item
              v-for="link in navLinks"
              :key="link.label"
              :href="link.href"
              :title="link.label"
              @click="isMenuOpen = false"
            />
          </v-list>
        </v-menu>
      </template>

      <template v-else>
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
    </template>
  </v-app-bar>
</template>

<style>
/* Inset toolbar content to align with the canvas margin border */
.v-app-bar .v-toolbar__content {
  min-height: calc(64px + var(--safe-area-top)) !important;
  padding-top: var(--safe-area-top);
  padding-inline:
    calc(var(--grid-margin, 76px) + var(--safe-area-left))
    calc(var(--grid-margin, 76px) + var(--safe-area-right)) !important;
}

.header-title {
  min-width: 0;
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

.menu-ink {
  color: var(--theme-ink-secondary) !important;
  margin-inline-start: 8px;
}

.header-menu-list {
  min-width: 11rem;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 55%, white 8%);
  border-radius: 18px;
  background: color-mix(in oklab, var(--theme-surface) 88%, transparent);
  backdrop-filter: blur(14px) saturate(1.06);
  -webkit-backdrop-filter: blur(14px) saturate(1.06);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 16px 40px rgba(0, 0, 0, 0.16);
}

@media (max-width: 960px) {
  .v-app-bar .v-toolbar__content {
    padding-inline:
      calc(24px + var(--safe-area-left))
      calc(24px + var(--safe-area-right)) !important;
  }
}

@media (max-width: 640px) {
  .v-app-bar .v-toolbar__content {
    padding-inline:
      calc(16px + var(--safe-area-left))
      calc(16px + var(--safe-area-right)) !important;
  }

  .title-ink {
    font-size: 1.2rem;
  }
}
</style>
