<script setup lang="ts">
import { projects, type Project } from '../../data/profile';
import {
  getProjectVisibleLinks,
  type ResolvedProjectLink,
} from '../../utils/projectLinks';

interface DisplayProject extends Project {
  visibleLinks: ResolvedProjectLink[];
  /** Where the thumbnail print links: the live demo, or the first link if none. */
  thumbLink?: ResolvedProjectLink;
  /** Action-row links with the print's own target removed, so the demo isn't
   *  offered twice (once as the clickable print, once as a button). */
  actionLinks: ResolvedProjectLink[];
}

const featuredProjects: DisplayProject[] = projects
  .filter((project) => project.featured)
  .map((project) => {
    const visibleLinks = getProjectVisibleLinks(project, 'featured');
    const thumbLink = project.thumb
      ? visibleLinks.find((l) => l.kind === 'demo') ?? visibleLinks[0]
      : undefined;
    const deduped = visibleLinks.filter((l) => l !== thumbLink);
    return {
      ...project,
      visibleLinks,
      thumbLink,
      // If dedup would empty the row (a single-link project), keep the links
      // rather than leave the card with no action at all.
      actionLinks: deduped.length ? deduped : visibleLinks,
    };
  });

// Compact cards need only the resolved links, not the featured-card extras.
const projectIndex: (Project & { visibleLinks: ResolvedProjectLink[] })[] = projects
  .filter((project) => !project.featured)
  .map((project) => ({
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

      <article
        v-for="featuredProject in featuredProjects"
        :key="featuredProject.title"
        class="project-feature glass-panel"
        :class="{ 'project-feature--media': featuredProject.thumb }"
      >
        <!-- A photographic print set into a window cut in the sheet. Links to
             the live demo (or the first available link) so it acts as the card's
             primary affordance. -->
        <a
          v-if="featuredProject.thumb"
          class="project-feature-print"
          :href="featuredProject.thumbLink?.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="featuredProject.thumbLink?.ariaLabel ?? `${featuredProject.title} preview`"
          :tabindex="featuredProject.thumbLink ? undefined : -1"
        >
          <span class="project-feature-print-frame">
            <img
              class="project-feature-print-img"
              :src="featuredProject.thumb"
              :alt="featuredProject.thumbAlt ?? `${featuredProject.title} preview`"
              loading="lazy"
              decoding="async"
            />
            <span v-if="featuredProject.thumbLink?.kind === 'demo'" class="project-feature-print-cue">
              <v-icon :icon="featuredProject.thumbLink.icon" size="18" />
              <span>Live demo</span>
            </span>
          </span>
        </a>
        <div class="project-feature-content">
          <div class="project-feature-body">
            <h3 class="project-feature-title">{{ featuredProject.title }}</h3>
            <p class="project-feature-blurb">{{ featuredProject.blurb }}</p>
          </div>
          <div v-if="featuredProject.actionLinks.length" class="project-feature-actions">
            <a
              v-for="link in featuredProject.actionLinks"
              :key="link.kind"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link paper-key"
              :class="{ 'paper-key--primary': link.kind === 'demo' }"
            >
              <v-icon :icon="link.icon" />
              <span>{{ link.label }}</span>
            </a>
          </div>
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
  display: block;
  padding: clamp(1.6rem, 3vw, 2.3rem);
  margin-bottom: 1.4rem;
}

/* With a thumbnail, the card is a two-panel spread: the print on the left, the
   content column (body + actions) on the right, both stretched to a shared
   height so the print reads as a full-height inset window, not a floating
   image. */
.project-feature--media {
  display: grid;
  grid-template-columns: clamp(240px, 40%, 460px) minmax(0, 1fr);
  gap: clamp(1.4rem, 3vw, 2.4rem);
  align-items: stretch;
}

/* The print: a matted photographic print laid on the sheet. The link itself is
   the mat board (a border of paper stock), carrying the shared cut lip and a
   real contact + cast shadow so it rests proud of the card, a distinct object
   the eye separates from the paper behind it, rather than an image flush to the
   panel. The photo window is cut into the mat. */
.project-feature-print {
  position: relative;
  display: block;
  min-height: 210px;
  padding: 7px;
  border-radius: var(--radius-md);
  background: var(--island-fill);
  box-shadow:
    var(--island-lip),
    0 0 0 1px var(--island-edge),
    var(--elev-1);
  cursor: pointer;
  transition: box-shadow 260ms ease, transform 260ms ease;
}

/* The window cut into the mat: recessed, hairline-edged, and overflow-clipped so
   the photo takes the window's corners and the hover push-in stays inside it. */
.project-feature-print-frame {
  position: absolute;
  inset: 7px;
  border-radius: calc(var(--radius-md) - 6px);
  overflow: hidden;
  background: var(--well-recess);
  box-shadow: inset 0 0 0 1px var(--island-edge);
  isolation: isolate;
}

.project-feature-print-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* Lifts a touch and deepens its shadow on hover/focus: the print reacts, the
   card stays put (a lifting container reads as a giant button, per the note on
   the index cards below). The photo pushes in inside its fixed window. */
.project-feature-print:hover,
.project-feature-print:focus-visible {
  transform: translateY(-2px);
  box-shadow:
    var(--island-lip),
    0 0 0 1px var(--island-edge),
    var(--elev-2);
}

.project-feature-print:hover .project-feature-print-img,
.project-feature-print:focus-visible .project-feature-print-img {
  transform: scale(1.04);
}

.project-feature-print:focus-visible {
  outline: 2px solid var(--theme-accent);
  outline-offset: 3px;
}

/* A caption plate in the corner of the window: names the affordance so the
   print reads as the live-demo entry point. An opaque paper chip laid on the
   photo (matte stock + cut lip, never glass, per the cut-paper direction), so
   it stays legible over any image. Rests quiet, brightens on hover. */
.project-feature-print-cue {
  position: absolute;
  left: 0.7rem;
  bottom: 0.7rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.34rem 0.66rem 0.34rem 0.5rem;
  border-radius: var(--radius-pill);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--theme-text-primary);
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  box-shadow: var(--island-lip), var(--elev-1);
  opacity: 0.94;
  transform: translateY(0);
  transition: opacity 220ms ease, transform 220ms ease;
}

.project-feature-print:hover .project-feature-print-cue,
.project-feature-print:focus-visible .project-feature-print-cue {
  opacity: 1;
  transform: translateY(-1px);
}

@media (prefers-reduced-motion: reduce) {
  .project-feature-print,
  .project-feature-print-img,
  .project-feature-print-cue {
    transition: none;
  }
  .project-feature-print:hover,
  .project-feature-print:focus-visible {
    transform: none;
  }
  .project-feature-print:hover .project-feature-print-img,
  .project-feature-print:focus-visible .project-feature-print-img {
    transform: none;
  }
}

/* Content column: body grows, actions sink to the baseline so multiple cards
   with differing blurb lengths keep their action rows aligned to the bottom. */
.project-feature-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.project-feature-body {
  flex: 1;
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
  justify-content: flex-start;
  gap: 0.7rem;
  margin-top: 1.5rem;
}

.project-index {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

/* A recessed field, not a control: it stays put. Only its keys react to the
   pointer (see .paper-key--ghost) — a container that lifted on hover read as a
   giant button it isn't. */
.project-item {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  min-height: 230px;
  padding: 1.3rem;
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

  /* Stack: the print becomes a full-width banner above the content. A fixed
     landscape ratio replaces the full-height fill it had beside the text. */
  .project-feature--media {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .project-feature-print {
    min-height: 0;
    aspect-ratio: 16 / 9;
  }

  .project-feature-actions {
    margin-top: 1.25rem;
  }

  .project-index {
    grid-template-columns: 1fr;
  }
}
</style>
