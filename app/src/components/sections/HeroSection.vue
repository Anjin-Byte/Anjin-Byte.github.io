<script setup lang="ts">
</script>

<template>
  <section id="hero" class="hero-section">
    <v-container>
      <h1 class="text-h3 font-weight-bold text-white mb-2">Taylor Hale</h1>
      <p class="text-h6 text-medium-emphasis mb-6">
        Systems Engineer &middot; Rust &middot; WebAssembly &middot; TypeScript
      </p>
      <v-btn color="primary" href="#projects" size="large" variant="elevated">
        View Projects
      </v-btn>
      <v-btn
        class="ml-3"
        href="#contact"
        size="large"
        variant="outlined"
        color="secondary"
      >
        Contact
      </v-btn>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
