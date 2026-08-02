<script setup lang="ts">
import { mdiMapMarkerOutline, mdiArrowRight } from '@mdi/js';
import { contactLinks, profile, skills } from '../../data/profile';

const heroLinks = contactLinks.filter((link) =>
  link.label === 'Email' || link.label === 'GitHub' || link.label === 'LinkedIn'
);
const locationLink = contactLinks.find((link) => link.label === 'Location');
</script>

<template>
  <section id="hero" class="hero-section">
    <v-container class="hero-container">
      <div class="hero-frame glass-panel glass-panel--strong">
        <div class="hero-main">
          <!-- Identity block: the tondo and the name read as one unit, so the
               first thing on the page is a person rather than a heading. The
               portrait is a CIRCLE for the same reason the featured project
               print is (ProjectsSection "the tondo"): the shape is already in
               the die scale, so this borrows the vocabulary instead of adding
               to it. Served from `public/` rather than imported from
               `src/assets/` because the same file is the JSON-LD
               `Person.image`, which needs a stable absolute URL the build can
               name before Vite has hashed anything. -->
          <div class="hero-identity">
            <div class="hero-portrait">
              <span class="hero-portrait-frame">
                <img
                  class="hero-portrait-img"
                  src="/portrait.webp"
                  width="560"
                  height="560"
                  alt="Taylor Hale sitting on a rock ledge above a snow-dusted canyon in Zion National Park."
                  fetchpriority="high"
                  decoding="async"
                />
              </span>
            </div>
            <div class="hero-identity-text">
              <a
                :href="locationLink?.href"
                target="_blank"
                rel="noopener noreferrer"
                class="hero-kicker glass-chip section-kicker"
                :aria-label="`${profile.location}, open in maps`"
              ><v-icon :icon="mdiMapMarkerOutline" class="hero-location-icon" />{{ profile.location }}</a>
              <h1 class="hero-name section-heading">{{ profile.name }}</h1>
              <p class="hero-tagline">{{ profile.tagline }}</p>
            </div>
          </div>

          <p class="hero-bio">{{ profile.bio }}</p>

          <div class="hero-actions">
            <router-link to="/projects" class="hero-link paper-key paper-key--primary">
              View selected work
              <v-icon :icon="mdiArrowRight" class="hero-link-icon" />
            </router-link>
            <router-link to="/resume" class="hero-link paper-key">Resume</router-link>
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
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-block: 5rem;
}

.hero-container {
  max-width: var(--container-max);
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

/* ── The identity block ─────────────────────────────────────────────────────
   Portrait and name on one row, bio full width beneath. `auto` on the first
   track lets the tondo size itself from its own clamp rather than from a
   fraction of the column, so the circle never collapses when the rail takes
   its minimum width. Centred, because the two masses are unequal and the name
   block is the shorter one. */
/* DEFAULT is one column at every width: portrait, then the name block. The
   two-column spread is opt-in above --bp-island-identity, the same shape as the
   project card's print-beside-text spread, but at a HIGHER floor: the card's
   text column holds prose, which reflows into any width, while this one holds a
   display name that either fits on one line or wraps. Derivation of the 960 in
   App.vue's token block.

   Measured below that floor, the spread failed three ways at once: "Taylor
   Hale" wrapped to two lines, "Tinkerer" broke mid-word, and the location chip
   floated above the portrait's top edge with nothing to sit against. All three
   are the text column being starved by a column that cannot shrink.

   Gap follows the print's two values: a flat 1.4rem stacked, the fluid clamp in
   the spread. Matching the neighbouring component rather than inventing a
   measure (the `--space-*` scale exists but its adoption is deferred, see
   docs/responsive/07). */
.hero-identity {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "portrait"
    "text";
  gap: 1.4rem;
  /* Inherited rhythm: the tagline used to own this 1.8rem gap to the bio. */
  margin-bottom: 1.8rem;
}

.hero-identity > .hero-portrait { grid-area: portrait; }
.hero-identity > .hero-identity-text { grid-area: text; }

@container island (min-width: 961px) {
  /* The spread: portrait left, name block right. Centred, because the two
     masses are unequal and the name block is the shorter one. */
  .hero-identity {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-areas: "portrait text";
    gap: clamp(1.4rem, 3vw, 2.4rem);
    align-items: center;
  }
}

/* ── The portrait, as a print ───────────────────────────────────────────────
   Same three-part structure as the featured project print (ProjectsSection):
   a MAT sheet, a WINDOW cut into it, and the image inside the window. An
   earlier pass shipped a bare `border-radius: 50%` image, which read as a
   circle but sat outside the elevation language entirely: no mat, no recessed
   well, no lit cut edge. Photographs on this site are prints laid on paper,
   and one that skips the frame is a different material.

   Circular via `--radius-circle` for the same reason as the project tondo:
   a circle's height IS its diameter, so one number tunes it against the name
   block beside it.

   NOT interactive, so the print's affordances are deliberately absent: no
   `cursor: pointer`, no hover lift, no scale transition. Interaction state
   belongs to things you can act on. */
.hero-portrait {
  width: clamp(6.5rem, 16vw, 11rem);
  /* Explicit, and never `stretch`. A stretched grid item has a definite block
     size, which makes the window's `aspect-ratio` ignorable and collapses the
     print (the nub bug documented on the project print). `center` is the
     composition; the load-bearing part is that it is stated at all, because the
     grid's `align-items` is one edit away from bringing that back. */
  align-self: center;
  padding: var(--print-mat);
  border-radius: var(--radius-circle);
  background: var(--island-fill);
  box-shadow:
    var(--island-lip),
    0 0 0 1px var(--island-edge),
    var(--elev-1);
}

/* The window. Recessed well plus the lit cut edge, exactly as the project
   print's window, so the two read as the same operation on the same stock. */
.hero-portrait-frame {
  position: relative;
  display: block;
  aspect-ratio: 1;
  border-radius: var(--radius-circle);
  overflow: hidden;
  background: var(--well-recess);
  box-shadow: var(--cut-ring);
  isolation: isolate;
}

.hero-portrait-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* The subject sits right of centre and looks left, so a centred crop is
     already correct. Stated rather than assumed: the source is pre-cropped
     square, so nudging this re-frames the circle without touching the file. */
  object-position: 50% 50%;
  display: block;
}

.hero-identity-text {
  min-width: 0;
}

/* The block owns the gap to the bio now, so the tagline stops carrying it. */
.hero-identity-text .hero-tagline {
  margin-bottom: 0;
}

.hero-kicker {
  margin-bottom: 1.2rem;
  text-decoration: none;
  transition: color 140ms ease;
}

.hero-kicker:hover {
  color: var(--theme-text-primary);
}

.hero-kicker:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
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
  max-width: var(--measure);
  margin: 0 0 2.4rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

/* Material + states come from .paper-key / .paper-key--primary (App.vue);
   this owns layout only. */
.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.05rem;
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

@container island (max-width: 660px) {
  .hero-frame {
    /* `minmax(0, 1fr)`, never a bare `1fr`. A bare `1fr` is `minmax(auto, 1fr)`
       and that `auto` floor is the element's MIN-CONTENT width, so the track
       refuses to shrink below its widest unbreakable child and pushes out of
       the panel — which clips, because .world-panel is overflow:hidden. It is
       invisible at the default text size and appears the moment a reader turns
       their font size up. Every desktop rule here already had the guard; only
       the mobile collapses were missing it. */
    grid-template-columns: minmax(0, 1fr);
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
    /* No radius override: shape is viewport-invariant. This was the only
       responsive radius in the codebase, and under the die metaphor it has no
       justification — the die does not change because the sheet is smaller. */
  }
}
</style>
