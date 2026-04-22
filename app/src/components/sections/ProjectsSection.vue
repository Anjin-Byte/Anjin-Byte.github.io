<script setup lang="ts">
import { projects } from '../../data/profile';
</script>

<template>
  <section id="projects" class="demos-section">
    <v-container class="demos-container">
      <div class="section-head">
        <span class="section-eyebrow">Demos</span>
        <h2 class="section-title">Selected projects</h2>
      </div>

      <div class="demo-grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="demo-card content-surface"
        >
          <header class="demo-card-head">
            <h3 class="demo-card-title">{{ project.title }}</h3>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="demo-github"
              aria-label="GitHub repository"
            >
              <v-icon icon="mdi-github" />
            </a>
          </header>
          <p class="demo-blurb">{{ project.blurb }}</p>
          <div class="demo-tech">
            <span
              v-for="t in project.tech"
              :key="t"
              class="demo-tag"
            >{{ t }}</span>
          </div>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.demos-section {
  position: relative;
  z-index: 1;
  padding-block: 6rem;
}

.demos-container {
  max-width: 1080px;
}

.section-head {
  margin-bottom: 3rem;
  /* No container here — the eyebrow carries its own chip backdrop; the
     heading is large enough to read on the GoL directly. */
}

/* Chip-style section label: the small category tag gets its own translucent
   pill so it stays legible against the animated background without forcing
   the entire heading into a card. */
.section-eyebrow {
  display: inline-block;
  color: var(--theme-text-secondary);
  font-size: 0.72rem;
  font-variant: small-caps;
  letter-spacing: 0.12em;
  padding: 0.3rem 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid var(--theme-grid-minor);
  border-radius: 999px;
  background: color-mix(in oklab, var(--theme-surface) 82%, transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.section-title {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.1;
  color: var(--theme-text-primary);
  margin: 0;
  letter-spacing: -0.015em;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}

/* Demo cards build on .content-surface (background + border + backdrop-blur)
   and add card-specific layout + hover behavior. */
.demo-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  transition: border-color 150ms ease, transform 150ms ease;
}

.demo-card:hover,
.demo-card:focus-within {
  border-color: var(--theme-grid-border);
  transform: translateY(-1px);
}

.demo-card-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.demo-card-title {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--theme-text-primary);
  margin: 0;
  letter-spacing: -0.005em;
}

.demo-github {
  color: var(--theme-text-tertiary);
  display: inline-flex;
  transition: color 120ms ease-out;
}

.demo-github:hover,
.demo-github:focus-visible {
  color: var(--theme-text-primary);
  outline: none;
}

.demo-blurb {
  font-size: 0.94rem;
  line-height: 1.6;
  color: var(--theme-text-secondary);
  margin: 0;
  flex: 1;
}

.demo-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.demo-tag {
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  color: var(--theme-text-tertiary);
  padding: 0.2rem 0.55rem;
  border: 1px solid var(--theme-grid-minor);
  border-radius: 999px;
}
</style>
