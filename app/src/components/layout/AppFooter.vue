<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <v-footer color="background" border="t" class="app-footer justify-center">
    <span class="text-medium-emphasis text-caption">
      &copy; {{ year }} Taylor Hale. Built with Rust, WebAssembly, and Vue 3.
    </span>
  </v-footer>
</template>

<style scoped>
.app-footer {
  padding-inline:
    calc(1rem + var(--safe-area-left))
    calc(1rem + var(--safe-area-right));
}
</style>
