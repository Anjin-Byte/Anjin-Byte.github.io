<script setup lang="ts">
const skills = [
  'Rust', 'WebAssembly', 'TypeScript', 'Vue 3', 'Vite',
  'C++', 'Python', 'Linux', 'OpenGL / WGPU', 'Git',
];
</script>

<template>
  <section id="about">
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="text-h4 font-weight-bold mb-6">About</h2>
          <p class="text-body-1 text-medium-emphasis mb-8">
            I build high-performance systems with Rust and WebAssembly, bringing
            low-level computation to the web without sacrificing developer experience.
            I care about clean architecture, rigorous testing, and shipping things
            that actually work.
          </p>
          <div class="d-flex flex-wrap ga-2">
            <v-chip
              v-for="skill in skills"
              :key="skill"
              color="primary"
              variant="tonal"
              size="small"
            >
              {{ skill }}
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
