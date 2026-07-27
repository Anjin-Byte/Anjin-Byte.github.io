<script setup lang="ts">
import { projects, type Project } from '../../data/profile';
import {
  getProjectVisibleLinks,
  type ResolvedProjectLink,
} from '../../utils/projectLinks';

interface DisplayProject extends Project {
  visibleLinks: ResolvedProjectLink[];
  /** Where the print itself links: the live demo, or the first link if none. */
  thumbLink?: ResolvedProjectLink | undefined;
  /** The remaining links, rendered as badges ON the print. The print's own
   *  target is removed so the demo is not offered twice — once as the image,
   *  once as a badge — which usually leaves exactly the repository. */
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
        <div v-if="featuredProject.thumb" class="project-feature-print">
          <span class="project-feature-print-frame">
            <img
              class="project-feature-print-img"
              :style="featuredProject.thumbFocus ? { objectPosition: featuredProject.thumbFocus } : undefined"
              :src="featuredProject.thumb"
              :alt="featuredProject.thumbAlt ?? `${featuredProject.title} preview`"
              loading="lazy"
              decoding="async"
            />
          </span>

          <!-- The PRINT is the demo link. A stretched sibling rather than an <a>
               wrapping everything, because the repo button below sits on top of
               it and a link inside a link is invalid. Empty by design: the whole
               image is its hit area and `aria-label` carries its name. -->
          <a
            v-if="featuredProject.thumbLink"
            class="project-print-demo"
            :href="featuredProject.thumbLink.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="featuredProject.thumbLink.ariaLabel"
          />

          <!-- The ONE button, and the only thing the image itself cannot be.
               `actionLinks` is the visible links minus the print's own target,
               so on a project with a demo this is exactly the repository. -->
          <a
            v-for="link in featuredProject.actionLinks"
            :key="link.kind"
            class="project-print-repo paper-key"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon :icon="link.icon" size="18" />
            <span>{{ link.label }}</span>
          </a>
        </div>

        <!-- Title and blurb only. With the demo on the image and the repo on a
             badge over it, the card is TWO blocks, so there is no third element
             whose leftover height has to be parked somewhere. -->
        <div class="project-feature-body">
          <h3 class="project-feature-title">{{ featuredProject.title }}</h3>
          <p class="project-feature-blurb">{{ featuredProject.blurb }}</p>
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

/* A card with a thumbnail is TWO blocks: the print, and the title + blurb.
   Not three. Both entry points live on the print itself (the image is the demo
   link, a badge over it is the repo), which is what removed the third block —
   and with it the question of which column the leftover height belongs to.
   Every arrangement that had a separate button row could only choose where the
   gap appeared, never close it.

   TOP-ALIGNED, never stretched. Stretching is what made the print's aspect
   ratio a function of how long the blurb happened to be, measured swinging from
   0.68 (portrait) to 1.40. Centring was tried and is worse for unequal masses:
   nothing lines up. Top alignment puts the print's top edge on the same datum
   as the title's cap-height. */
/* DEFAULT is one column at every width: print, then title and blurb, then the
   links. The two-column spread is opt-in above --bp-island-media, because it
   only composes when there is room for it (see that token). */
.project-feature--media {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "print"
    "body";
  gap: 1.4rem;
  align-items: start;
}

.project-feature--media > .project-feature-print { grid-area: print; }
.project-feature--media > .project-feature-body { grid-area: body; }

@container island (min-width: 801px) {
  /* The spread: print left, text right. Two blocks, one row. */
  .project-feature--media {
    grid-template-columns: clamp(200px, 26%, 260px) minmax(0, 1fr);
    grid-template-areas: "print body";
    gap: clamp(1.4rem, 3vw, 2.4rem);
  }

  /* ── The tondo ──────────────────────────────────────────────────────────
     On a wide card the print becomes a CIRCLE, for a geometric reason rather
     than a decorative one. A 16:9 window is height = width / 1.78, so to stand
     as tall as the text column it would have to be far wider than the column
     allows — which is why every arrangement of a rectangle left a gap that
     could only be moved from one column to the other, never closed. A circle's
     height IS its diameter, so one number tunes it to the text's height at a
     width the column can afford.

     `--radius-circle` already exists in the die scale as "a round die", so this
     is the existing shape vocabulary.

     Cost, paid in art direction rather than layout: a circle keeps 45% of a
     1400x796 source, so it is a DETAIL, not the whole frame. Each project says
     which detail via `thumbFocus` (profile.ts) — Okra centres on the running
     DMG screen, because a centred crop there is unreadable debugger text. The
     narrow card keeps the full 16:9 frame, so nothing is permanently lost. */
  .project-feature--media > .project-feature-print,
  .project-feature--media .project-feature-print-frame {
    border-radius: var(--radius-circle);
  }

  /* Diameter, not a cap on a ratio. Sized to land near the text column's
     height so the two columns finish together. */
  .project-feature--media > .project-feature-print {
    width: min(100%, 15rem);
    max-width: min(100%, 15rem);
  }

  .project-feature--media .project-feature-print-frame {
    aspect-ratio: 1;
  }
}

/* ── The print's affordances ───────────────────────────────────────────────
   Two links, no nesting. The DEMO is a stretched, empty anchor covering the
   whole print, so clicking the image goes to the demo. The REPO is a small
   badge resting on the print above it: the single button on the card, and the
   only entry point the image itself cannot be.

   This is what settles the card's composition. With both links on the print,
   the text column is title and blurb and nothing else, so the card is TWO
   blocks. Every earlier arrangement had three, and the third block is what
   forced the leftover height into one column or the other. */
.project-print-demo {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: inherit;
}
.project-print-demo:focus-visible {
  outline: 2px solid var(--theme-accent);
  outline-offset: 3px;
}

.project-print-repo {
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 6%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.34rem 0.7rem;
  font-size: 0.82rem;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
}

@media (pointer: coarse) {
  .project-print-repo {
    min-height: var(--touch-min);
    padding-inline: 0.9rem;
  }
}

/* The print: a matted photographic print laid on the sheet. The link itself is
   the mat board (a border of paper stock), carrying the shared cut lip and a
   real contact + cast shadow so it rests proud of the card, a distinct object
   the eye separates from the paper behind it, rather than an image flush to the
   panel. The photo window is cut into the mat. */
.project-feature-print {
  position: relative;
  display: block;
  /* NEVER stretched. The parent grid is `align-items: stretch`, and a stretched
     item has a definite block size, which makes `aspect-ratio` ignorable — so
     the height came from the row, the row was auto-sized from content, and the
     content was absolutely positioned and therefore zero. Engines resolved that
     circularity differently: Chrome honoured the ratio, others collapsed the
     print to its 14px of padding, a clickable nub. An explicit `align-self`
     removes the competition, leaving exactly one height source (the window's
     ratio). Stated here as well as on the grid because the load-bearing part is
     that it is NEVER `stretch` — the grid's `align-items` is one edit away from
     bringing the nub back, and this is the line that stops it. */
  align-self: start;
  width: 100%;
  /* Height cap expressed as a width, so the RATIO is never violated to satisfy
     it (a max-height would squash the window and re-crop the photo). */
  max-width: calc(var(--print-max-h) * var(--print-ratio) + 2 * var(--print-mat));
  margin-inline: auto;
  padding: var(--print-mat);
  border-radius: var(--radius-die);
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
  /* In NORMAL FLOW, not absolute, and this is the load-bearing change: the
     window's own aspect-ratio is now what gives the print its height, so the
     box can never collapse and there is nothing for an engine to arbitrate.
     (Absolutely positioned children contribute no height, which is what left
     the old box with no size of its own.) */
  position: relative;
  display: block;
  aspect-ratio: var(--print-ratio);
  /* An inset window takes the NEXT DIE DOWN. Its mat is --radius-die (12) and
     the window sits at inset 7, so concentric would be 5 and the next die is 6:
     the physical rule and the concentric rule agree to within 1px here, which is
     why this needs no calc(). (The old calc subtracted 6 at a 7px inset.) */
  border-radius: var(--radius-die-fine);
  overflow: hidden;
  background: var(--well-recess);
  box-shadow: var(--cut-ring);
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
   the index cards below). The photo pushes in inside its fixed window.
   `:focus-within`, not `:focus-visible` — the print is a container now, and the
   thing that takes focus is the stretched demo link inside it. */
.project-feature-print:hover,
.project-feature-print:focus-within {
  transform: translateY(-2px);
  box-shadow:
    var(--island-lip),
    0 0 0 1px var(--island-edge),
    var(--elev-2);
}

.project-feature-print:hover .project-feature-print-img,
.project-feature-print:focus-within .project-feature-print-img {
  transform: scale(1.04);
}

@media (prefers-reduced-motion: reduce) {
  .project-feature-print,
  .project-feature-print-img {
    transition: none;
  }
  .project-feature-print:hover,
  .project-feature-print:focus-within {
    transform: none;
  }
  .project-feature-print:hover .project-feature-print-img,
  .project-feature-print:focus-within .project-feature-print-img {
    transform: none;
  }
}

.project-feature-body {
  min-width: 0;
}

/* The blurb's bottom margin is spacing BETWEEN paragraphs; as the last child it
   is spacing to whatever comes next, which the grid gap already owns. Left in,
   the two stack and the card gains a phantom band of padding. */
.project-feature-body > :last-child {
  margin-bottom: 0;
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
  max-width: var(--measure);
  color: var(--theme-text-secondary);
  font-size: 1rem;
  line-height: 1.75;
}

.project-item-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
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
  /* (shallow-sunken, control, rest) — same control ground as the nav pill
     and toggle track. NOT the flat metadata badge: this is interactive. */
  box-shadow: var(--well-shallow);
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

@container island (max-width: 660px) {
  .projects-head {
    grid-template-columns: minmax(0, 1fr);
  }

  .projects-intro {
    justify-self: start;
  }

  .project-index {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
