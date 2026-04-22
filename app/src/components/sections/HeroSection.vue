<script setup lang="ts">
import { profile, skills } from '../../data/profile';
</script>

<template>
  <section id="hero" class="hero-section">
    <v-container class="hero-container content-surface">
      <p class="hero-location">
        <v-icon icon="mdi-map-marker-outline" class="hero-location-icon" />
        {{ profile.location }}
      </p>
      <h1 class="hero-name">{{ profile.name }}</h1>
      <p class="hero-tagline">{{ profile.tagline }}</p>
      <p class="hero-bio">{{ profile.bio }}</p>

      <div class="skills-block">
        <div v-for="group in skills" :key="group.label" class="skill-group">
          <span class="skill-label">{{ group.label }}</span>
          <span class="skill-items">{{ group.items.join('  ·  ') }}</span>
        </div>
      </div>

      <a href="#contact" class="hero-cta">
        Get in touch
        <v-icon icon="mdi-arrow-right" class="hero-cta-arrow" />
      </a>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-block: 5rem;
}

.hero-container {
  max-width: 820px;
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
}

.hero-location {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--theme-text-tertiary);
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
}

.hero-location-icon {
  font-size: 0.95rem;
  opacity: 0.75;
}

.hero-name {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--theme-text-primary);
  margin: 0 0 0.6rem;
}

.hero-tagline {
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  font-weight: 400;
  color: var(--theme-text-secondary);
  margin: 0 0 2.25rem;
  letter-spacing: 0.01em;
}

.hero-bio {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--theme-text-primary);
  max-width: 60ch;
  margin: 0 0 2.75rem;
}

.skills-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.skill-group {
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
  flex-wrap: wrap;
  font-size: 0.9rem;
  line-height: 1.5;
}

.skill-label {
  color: var(--theme-text-tertiary);
  font-variant: small-caps;
  letter-spacing: 0.05em;
  min-width: 10rem;
  flex-shrink: 0;
}

.skill-items {
  color: var(--theme-text-secondary);
}

/* Single CTA pointing to the canonical contact section.  Underline-on-hover
   + arrow translation is a quiet, modern affordance that reads "action here"
   without shouting. */
.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--theme-text-primary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--theme-grid-major);
  transition: border-color 150ms ease, gap 150ms ease;
}

.hero-cta:hover,
.hero-cta:focus-visible {
  border-bottom-color: var(--theme-text-primary);
  gap: 0.75rem;
  outline: none;
}

.hero-cta-arrow {
  font-size: 1rem;
  transition: transform 150ms ease;
}

.hero-cta:hover .hero-cta-arrow,
.hero-cta:focus-visible .hero-cta-arrow {
  transform: translateX(2px);
}
</style>
