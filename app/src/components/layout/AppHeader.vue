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
      <span class="text-primary font-weight-bold">Anjin Byte</span>
    </v-app-bar-title>
    <template #append>
      <v-btn
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        variant="text"
        size="small"
        class="text-medium-emphasis"
      >
        {{ link.label }}
      </v-btn>
    </template>
  </v-app-bar>
</template>
