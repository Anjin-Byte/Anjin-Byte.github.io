<script setup lang="ts">
import { experience, education, profile, contactLinks } from '../../data/profile';

// Print-only identity block. On screen the name and contact details live on the
// hero, one camera flight away, which is fine — the reader can see they are on
// Taylor Hale's site. On PAPER that context is gone: the printed page arrived
// as a PDF attachment with no header, so without this it is a list of jobs
// belonging to nobody, which is not a résumé. Sourced from the same `profile`
// data as everywhere else, so it cannot drift.
const printContacts = contactLinks.filter(
  (l) => l.label === 'Email' || l.label === 'Phone'
    || l.label === 'Location' || l.label === 'GitHub' || l.label === 'LinkedIn',
);
</script>

<template>
  <section id="resume" class="resume-section">
    <v-container class="resume-container">
      <!-- `hidden` keeps it out of the a11y tree and the screen layout; the
           print stylesheet reveals it. Not v-if, because it must exist in the
           DOM for the browser's own print path to find it. -->
      <header class="resume-print-identity" hidden>
        <h1 class="resume-print-name">{{ profile.name }}</h1>
        <p class="resume-print-tagline">{{ profile.tagline }}</p>
        <ul class="resume-print-contacts">
          <li v-for="c in printContacts" :key="c.label">{{ c.display }}</li>
        </ul>
      </header>

      <div class="resume-head">
        <div class="resume-heading">
          <!-- <span class="glass-chip section-kicker">Resume</span> -->
          <h2 class="section-heading resume-title">Experience</h2>
        </div>
      </div>

      <ol class="timeline">
        <li
          v-for="job in experience"
          :key="`${job.company}-${job.dates}`"
          class="timeline-row"
        >
          <div class="entry-rail">
            <span class="entry-dates glass-chip">{{ job.dates }}</span>
          </div>
          <article class="entry quiet-sheet">
            <header class="entry-head">
              <div class="entry-titleblock">
                <h3 class="entry-role">{{ job.role }}</h3>
                <div class="entry-subhead">
                  <p class="entry-company">{{ job.company }}</p>
                  <span class="entry-work-location">{{ job.location }}</span>
                </div>
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
            <h3 class="entry-role">{{ e.degree }}: {{ e.field }}</h3>
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
  max-width: var(--container-max);
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

.timeline-row {
  position: relative;
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  gap: 1.2rem;
  align-items: start;
}

.entry-rail {
  display: grid;
  gap: 0;
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

/* The flex basis that keeps role and employer on one line before the meta
   wraps. `min-width: 16rem` alone is a hard floor measured in ROOT ems, so it
   grows with the reader's font size: at a 24px root it demands 384px, more than
   a 390px phone has after padding, and the row is then clipped by the panel.
   `min(16rem, 100%)` keeps the intent at the default size and yields when the
   container is genuinely smaller — the floor stops outranking the container. */
.entry-titleblock {
  min-width: min(16rem, 100%);
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

.entry-subhead {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.entry-work-location {
  color: var(--theme-text-tertiary);
  font-size: 0.8rem;
  line-height: 1.35;
  text-align: right;
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

@container island (max-width: 660px) {
  .resume-head {
    grid-template-columns: minmax(0, 1fr);
  }

  .timeline-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
  }

  .entry-rail {
    justify-items: start;
    padding-top: 0;
  }

  .entry-dates {
    justify-self: start;
  }

  .entry-subhead {
    justify-content: flex-start;
  }

  .entry-work-location {
    text-align: left;
  }

  .entry-location {
    text-align: left;
  }

  .entry-meta {
    justify-items: start;
  }
}
</style>
