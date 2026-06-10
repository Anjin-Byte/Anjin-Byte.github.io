<script setup lang="ts">
import { profile } from '@/data/profile';
</script>

<template>
  <section class="about-section">
    <v-container class="about-container">
      <div class="content-surface about-card">
        <p class="section-kicker">About</p>
        <h2 class="section-heading">{{ profile.name }}</h2>
        <p class="about-tagline">{{ profile.tagline }}</p>
        <p class="section-intro">{{ profile.bio }}</p>
        <p class="about-meta">{{ profile.location }}</p>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  padding-block: 6rem;
}

.about-container {
  max-width: var(--container-max);
}

.about-card {
  padding: clamp(1.5rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-tagline {
  margin: 0;
  color: var(--theme-text-secondary);
  font-size: 1rem;
  letter-spacing: 0.02em;
}

.about-meta {
  margin: 0;
  color: var(--theme-text-tertiary);
  font-size: 0.85rem;
}
</style>
