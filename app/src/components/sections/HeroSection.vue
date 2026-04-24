<script setup lang="ts">
import { contactLinks, profile, skills } from '../../data/profile';

const heroLinks = contactLinks.filter((link) =>
  link.label === 'Email' || link.label === 'GitHub' || link.label === 'LinkedIn'
);
</script>

<template>
  <section id="hero" class="hero-section">
    <v-container class="hero-container">
      <div class="hero-frame glass-panel glass-panel--strong">
        <div class="hero-main">
          <span class="hero-kicker glass-chip section-kicker"><v-icon icon="mdi-map-marker-outline" class="hero-location-icon" />{{ profile.location }}</span>
          <h1 class="hero-name section-heading">{{ profile.name }}</h1>
          <p class="hero-tagline">{{ profile.tagline }}</p>
          <p class="hero-bio">{{ profile.bio }}</p>

          <div class="hero-actions">
            <a href="#projects" class="hero-link hero-link--primary">
              View selected work
              <v-icon icon="mdi-arrow-right" class="hero-link-icon" />
            </a>
            <a href="#resume" class="hero-link">Resume</a>
          </div>
        </div>

        <aside class="hero-rail">
          <section class="hero-note quiet-sheet">
            <p class="hero-note-label">Capabilities</p>
            <div class="skills-block">
              <div v-for="group in skills" :key="group.label" class="skill-group">
                <span class="skill-label">{{ group.label }}</span>
                <span class="skill-items">{{ group.items.join('  ·  ') }}</span>
              </div>
            </div>
          </section>

          <section class="hero-note quiet-sheet">
            <p class="hero-note-label">Elsewhere</p>
            <div class="hero-links">
              <a
                v-for="link in heroLinks"
                :key="link.label"
                :href="link.href"
                class="hero-meta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon :icon="link.icon" class="hero-meta-link-icon" />
                <span>{{ link.display ?? link.label }}</span>
              </a>
            </div>
          </section>
        </aside>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  z-index: 1;
  width: 100%;
  /* Pre-Safari-15.4 fallback; browsers that understand svh override below.
     svh is "small viewport height" — stable against the iOS Safari URL bar
     animation, so the hero height doesn't oscillate when the bar shows/hides
     and content below doesn't cascade-shift. */
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-block: 5rem;
}

.hero-container {
  max-width: 1160px;
}

.hero-frame {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.85fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  padding: clamp(2rem, 4vw, 3.25rem);
}

.hero-main {
  max-width: 58rem;
}

.hero-kicker {
  margin-bottom: 1.2rem;
}

.hero-location {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--theme-text-tertiary);
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  margin: 0 0 1.15rem;
}

.hero-location-icon {
  font-size: 0.95rem;
  opacity: 0.75;
}

.hero-name {
  max-width: 11ch;
  margin: 0 0 0.85rem;
}

.hero-tagline {
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  font-weight: 500;
  color: var(--theme-text-secondary);
  margin: 0 0 1.8rem;
  letter-spacing: 0.015em;
  max-width: 36ch;
}

.hero-bio {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--theme-text-primary);
  max-width: 62ch;
  margin: 0 0 2.4rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  padding: 0.8rem 1.05rem;
  border-radius: 999px;
  color: var(--theme-text-primary);
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 56%, white 6%);
  background: color-mix(in oklab, var(--theme-surface) 72%, transparent);
  transition: transform 150ms ease, border-color 150ms ease, color 150ms ease;
}

.hero-link--primary {
  background: color-mix(in oklab, var(--theme-surface) 82%, var(--theme-accent) 18%);
}

.hero-link:hover,
.hero-link:focus-visible {
  transform: translateY(-1px);
  border-color: var(--theme-grid-border);
  outline: none;
}

.hero-link-icon {
  font-size: 1rem;
}

.hero-rail {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: stretch;
}

.hero-note {
  padding: 1.15rem 1.2rem 1.25rem;
}

.hero-note-label {
  margin: 0 0 0.95rem;
  color: var(--theme-text-tertiary);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.skills-block {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.skill-group {
  display: grid;
  gap: 0.35rem;
}

.skill-label {
  color: var(--theme-text-tertiary);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.skill-items {
  color: var(--theme-text-secondary);
  font-size: 0.92rem;
  line-height: 1.65;
}

.hero-links {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.hero-meta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  color: var(--theme-text-secondary);
  font-size: 0.92rem;
  line-height: 1.4;
  transition: color 140ms ease, transform 140ms ease;
}

.hero-meta-link:hover,
.hero-meta-link:focus-visible {
  color: var(--theme-text-primary);
  transform: translateX(2px);
  outline: none;
}

.hero-meta-link-icon {
  font-size: 1rem;
  opacity: 0.78;
}

@media (max-width: 960px) {
  .hero-frame {
    grid-template-columns: 1fr;
  }

  .hero-name {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding-block: 4rem;
  }

  .hero-frame {
    padding: 1.5rem;
    border-radius: 20px;
  }
}
</style>
