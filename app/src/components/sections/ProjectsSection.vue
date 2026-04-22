<script setup lang="ts">
import { projects } from '../../data/profile';

const [featuredProject, ...projectIndex] = projects;
</script>

<template>
  <section id="projects" class="demos-section">
    <v-container class="projects-container">
      <div class="projects-head">
        <div class="projects-heading">
          <span class="glass-chip section-kicker">Selected work</span>
          <h2 class="section-heading projects-title">Rendering systems, WASM, and interfaces with texture.</h2>
        </div>
        <p class="section-intro projects-intro">
          A featured build up front, then a quieter index behind it. The page
          stays readable, but it no longer relies on a wall of equal cards.
        </p>
      </div>

      <article v-if="featuredProject" class="project-feature glass-panel">
        <div class="project-feature-body">
          <span class="project-feature-label">Featured project</span>
          <h3 class="project-feature-title">{{ featuredProject.title }}</h3>
          <p class="project-feature-blurb">{{ featuredProject.blurb }}</p>
          <div class="project-feature-tech">
            <span
              v-for="t in featuredProject.tech"
              :key="t"
              class="project-tech-tag"
            >{{ t }}</span>
          </div>
        </div>
        <div class="project-feature-actions">
          <a
            v-if="featuredProject.github"
            :href="featuredProject.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            <v-icon icon="mdi-github" />
            <span>Source</span>
          </a>
        </div>
      </article>

      <div class="project-index">
        <article
          v-for="project in projectIndex"
          :key="project.title"
          class="project-item quiet-sheet"
        >
          <header class="project-item-head">
            <h3 class="project-item-title">{{ project.title }}</h3>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="project-item-link"
              aria-label="GitHub repository"
            >
              <v-icon icon="mdi-github" />
            </a>
          </header>
          <p class="project-item-blurb">{{ project.blurb }}</p>
          <div class="project-item-tech">
            <span
              v-for="t in project.tech"
              :key="t"
              class="project-tech-tag"
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

.projects-container {
  max-width: 1120px;
}

.projects-head {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.85fr);
  gap: 1.5rem 2rem;
  align-items: end;
  margin-bottom: 2.25rem;
}

.projects-heading {
  display: grid;
  gap: 1rem;
}

.projects-title {
  max-width: 13ch;
}

.projects-intro {
  justify-self: end;
}

.project-feature {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.5rem;
  align-items: end;
  padding: clamp(1.6rem, 3vw, 2.3rem);
  margin-bottom: 1.4rem;
}

.project-feature-label {
  display: inline-block;
  margin-bottom: 0.9rem;
  color: var(--theme-text-tertiary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.project-feature-title {
  margin: 0 0 0.75rem;
  color: var(--theme-text-primary);
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.project-feature-blurb {
  margin: 0 0 1.25rem;
  max-width: 62ch;
  color: var(--theme-text-secondary);
  font-size: 1rem;
  line-height: 1.75;
}

.project-feature-tech,
.project-item-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  color: var(--theme-text-primary);
  padding: 0.8rem 1rem;
  border-radius: 999px;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 56%, white 7%);
  background: color-mix(in oklab, var(--theme-surface) 70%, transparent);
  transition: transform 150ms ease, border-color 150ms ease;
}

.project-link:hover,
.project-link:focus-visible {
  transform: translateY(-1px);
  border-color: var(--theme-grid-border);
  outline: none;
}

.project-index {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  min-height: 230px;
  padding: 1.3rem;
  transition: border-color 150ms ease, transform 150ms ease, background-color 150ms ease;
}

.project-item:hover,
.project-item:focus-within {
  border-color: var(--theme-grid-border);
  transform: translateY(-1px);
}

.project-item-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.project-item-title {
  font-size: 1.22rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--theme-text-primary);
  margin: 0;
  letter-spacing: -0.02em;
}

.project-item-link {
  color: var(--theme-text-tertiary);
  display: inline-flex;
  transition: color 120ms ease-out;
}

.project-item-link:hover,
.project-item-link:focus-visible {
  color: var(--theme-text-primary);
  outline: none;
}

.project-item-blurb {
  font-size: 0.94rem;
  line-height: 1.72;
  color: var(--theme-text-secondary);
  margin: 0;
  flex: 1;
}

.project-tech-tag {
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--theme-text-tertiary);
  padding: 0.24rem 0.6rem;
  border: 1px solid var(--theme-grid-minor);
  border-radius: 999px;
}

@media (max-width: 960px) {
  .projects-head {
    grid-template-columns: 1fr;
  }

  .projects-intro {
    justify-self: start;
  }

  .project-feature {
    grid-template-columns: 1fr;
  }

  .project-index {
    grid-template-columns: 1fr;
  }
}
</style>
