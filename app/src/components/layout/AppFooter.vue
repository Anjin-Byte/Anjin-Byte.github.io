<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <v-footer color="background" border="t" class="justify-center">
    <span class="text-medium-emphasis text-caption">
      &copy; {{ year }} Taylor Hale. Built with Rust, WebAssembly, and Vue 3.
    </span>
  </v-footer>
</template>
