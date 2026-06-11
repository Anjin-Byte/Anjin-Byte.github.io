<script setup lang="ts">
import { projects, type Project } from '../../data/profile';
import {
  getProjectVisibleLinks,
  type ResolvedProjectLink,
} from '../../utils/projectLinks';

interface FeaturedProject extends Project {
  visibleLinks: ResolvedProjectLink[];
}

interface ProjectIndexItem extends Project {
  visibleLinks: ResolvedProjectLink[];
}

const [rawFeaturedProject, ...rawProjectIndex] = projects;

const featuredProject: FeaturedProject | null = rawFeaturedProject
  ? {
      ...rawFeaturedProject,
      visibleLinks: getProjectVisibleLinks(rawFeaturedProject, 'featured'),
    }
  : null;

const projectIndex: ProjectIndexItem[] = rawProjectIndex.map((project) => ({
  ...project,
  visibleLinks: getProjectVisibleLinks(project, 'compact'),
}));
</script>

<template>
  <section id="projects" class="demos-section">
    <v-container class="projects-container">
      <div class="projects-head">
        <div class="projects-heading">
          <span class="glass-chip section-kicker">Selected work</span>
          <h2 class="section-heading projects-title">Small things, built carefully.</h2>
        </div>
        <p class="section-intro projects-intro">
          Projects spanning graphics, emulation, mesh generation, and interface
          engineering.
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
            v-for="link in featuredProject.visibleLinks"
            :key="link.kind"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link paper-key"
            :class="{ 'paper-key--primary': link.kind === 'demo' }"
            :aria-label="link.ariaLabel"
          >
            <v-icon :icon="link.icon" />
            <span>{{ link.label }}</span>
            <v-tooltip activator="parent" location="top" :text="link.ariaLabel" />
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
            <div v-if="project.visibleLinks.length" class="project-item-links" aria-label="Project links">
              <a
                v-for="link in project.visibleLinks"
                :key="link.kind"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="project-item-link paper-key--ghost"
                :class="{ 'project-item-link--demo': link.kind === 'demo' }"
                :aria-label="link.ariaLabel"
              >
                <v-icon :icon="link.icon" />
                <v-tooltip activator="parent" location="top" :text="link.ariaLabel" />
              </a>
            </div>
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
  max-width: var(--container-max);
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

/* Material + states from .paper-key (demo links also carry .paper-key--primary);
   layout only here. */
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1rem;
}

.project-feature-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 0.7rem;
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

/* Ghost key (flush until touched) from .paper-key--ghost; size + centring here. */
.project-item-link {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.project-item-link :deep(.v-icon) {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

/* A shallow groove cut into the card, holding the ghost icon keys. */
.project-item-links {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.18rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--island-edge);
  background: var(--well-recess);
  box-shadow: inset 0 1px 2px var(--shadow-1);
}

/* Demo icon rests a touch darker so it reads as the primary action. */
.project-item-link--demo {
  color: var(--theme-text-primary);
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
  color: var(--theme-text-secondary);
  padding: 0.26rem 0.62rem;
  background: var(--badge-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-pill);
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
