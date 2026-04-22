<script setup lang="ts">
import { experience, education } from '../../data/profile';
</script>

<template>
  <section id="resume" class="resume-section">
    <v-container class="resume-container">
      <div class="resume-head">
        <div class="resume-heading">
          <span class="glass-chip section-kicker">Resume</span>
          <h2 class="section-heading resume-title">Experience arranged like a page, not a dashboard.</h2>
        </div>
        <p class="section-intro resume-intro">
          The content stays dense where it needs to be, but the framing moves
          out of the way. Dates and locations become the rail; the writing stays
          on a quieter sheet.
        </p>
      </div>

      <ol class="timeline">
        <li
          v-for="job in experience"
          :key="`${job.company}-${job.dates}`"
          class="timeline-row"
        >
          <div class="entry-rail">
            <span class="entry-dates glass-chip">{{ job.dates }}</span>
            <span class="entry-location">{{ job.location }}</span>
          </div>
          <article class="entry quiet-sheet">
            <header class="entry-head">
              <div class="entry-titleblock">
                <h3 class="entry-role">{{ job.role }}</h3>
                <p class="entry-company">{{ job.company }}</p>
              </div>
            </header>
            <ul class="entry-bullets">
              <li v-for="(h, i) in job.highlights" :key="i">{{ h }}</li>
            </ul>
            <div v-if="job.tech" class="entry-tech">
              <span class="entry-tech-label">Stack</span>
              <span class="entry-tech-items">{{ job.tech.join('  ·  ') }}</span>
            </div>
          </article>
        </li>
      </ol>

      <div class="edu-head">
        <span class="glass-chip section-kicker">Education</span>
      </div>

      <div
        v-for="e in education"
        :key="`${e.school}-${e.degree}`"
        class="education-card glass-panel"
      >
        <header class="entry-head">
          <div class="entry-titleblock">
            <h3 class="entry-role">{{ e.degree }} — {{ e.field }}</h3>
            <p class="entry-company">{{ e.school }}</p>
          </div>
          <div class="entry-meta">
            <span class="entry-dates">{{ e.dates }}</span>
            <span class="entry-location">{{ e.location }}</span>
          </div>
        </header>
        <p v-if="e.focus" class="entry-focus">
          <span class="entry-tech-label">Focus</span>
          {{ e.focus }}
        </p>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.resume-section {
  position: relative;
  z-index: 1;
  padding-block: 6rem;
}

.resume-container {
  max-width: 1080px;
}

.resume-head {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.8fr);
  gap: 1.5rem 2rem;
  align-items: end;
  margin-bottom: 2.4rem;
}

.resume-heading {
  display: grid;
  gap: 1rem;
}

.resume-title {
  max-width: 13ch;
}

.timeline {
  list-style: none;
  position: relative;
  margin: 0 0 3.25rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 11.45rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--theme-grid-major) 8%,
    var(--theme-grid-major) 92%,
    transparent
  );
}

.timeline-row {
  position: relative;
  display: grid;
  grid-template-columns: 10.25rem minmax(0, 1fr);
  gap: 1.2rem;
  align-items: start;
}

.entry-rail {
  display: grid;
  gap: 0.35rem;
  justify-items: end;
  padding-top: 0.55rem;
}

.entry {
  padding: 1.2rem 1.35rem;
}

.entry-head {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.95rem;
  flex-wrap: wrap;
}

.entry-titleblock {
  min-width: 16rem;
}

.entry-role {
  font-size: 1.14rem;
  font-weight: 600;
  color: var(--theme-text-primary);
  margin: 0 0 0.15rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.entry-company {
  font-size: 0.96rem;
  color: var(--theme-text-secondary);
  margin: 0;
}

.entry-meta {
  display: grid;
  gap: 0.25rem;
  justify-items: end;
}

.entry-dates {
  justify-self: end;
  color: var(--theme-text-secondary);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0.38rem 0.72rem 0.34rem;
}

.entry-location {
  color: var(--theme-text-tertiary);
  font-size: 0.79rem;
  max-width: 10.25rem;
  text-align: right;
  line-height: 1.35;
}

.entry-bullets {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--theme-text-secondary);
  font-size: 0.94rem;
  line-height: 1.6;
}

.entry-bullets li::marker {
  color: var(--theme-text-tertiary);
}

.entry-tech {
  margin-top: 0.95rem;
  font-size: 0.82rem;
  color: var(--theme-text-tertiary);
  display: flex;
  gap: 0.6rem;
  align-items: baseline;
  flex-wrap: wrap;
}

.entry-tech-label {
  font-variant: small-caps;
  letter-spacing: 0.05em;
  color: var(--theme-text-tertiary);
}

.entry-tech-items {
  color: var(--theme-text-secondary);
}

.entry-focus {
  margin: 0;
  font-size: 0.9rem;
  color: var(--theme-text-secondary);
  display: flex;
  gap: 0.6rem;
  align-items: baseline;
}

.edu-head {
  margin-bottom: 1rem;
}

.education-card {
  padding: 1.4rem 1.5rem;
}

@media (max-width: 960px) {
  .resume-head {
    grid-template-columns: 1fr;
  }

  .timeline::before {
    display: none;
  }

  .timeline-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .entry-rail {
    justify-items: start;
    padding-top: 0;
  }

  .entry-location {
    text-align: left;
  }

  .entry-meta {
    justify-items: start;
  }
}
</style>
