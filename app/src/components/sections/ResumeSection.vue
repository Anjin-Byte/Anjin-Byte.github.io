<script setup lang="ts">
import { experience, education } from '../../data/profile';
</script>

<template>
  <section id="resume" class="resume-section">
    <v-container class="resume-container content-surface">
      <div class="section-head">
        <span class="section-eyebrow">Resume</span>
        <h2 class="section-title">Experience</h2>
      </div>

      <ol class="timeline">
        <li
          v-for="job in experience"
          :key="`${job.company}-${job.dates}`"
          class="entry"
        >
          <header class="entry-head">
            <div class="entry-titleblock">
              <h3 class="entry-role">{{ job.role }}</h3>
              <p class="entry-company">{{ job.company }}</p>
            </div>
            <div class="entry-meta">
              <span class="entry-dates">{{ job.dates }}</span>
              <span class="entry-location">{{ job.location }}</span>
            </div>
          </header>
          <ul class="entry-bullets">
            <li v-for="(h, i) in job.highlights" :key="i">{{ h }}</li>
          </ul>
          <div v-if="job.tech" class="entry-tech">
            <span class="entry-tech-label">Stack</span>
            <span class="entry-tech-items">{{ job.tech.join('  ·  ') }}</span>
          </div>
        </li>
      </ol>

      <div class="edu-head">
        <h2 class="section-title">Education</h2>
      </div>

      <div
        v-for="e in education"
        :key="`${e.school}-${e.degree}`"
        class="entry"
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
  max-width: 820px;
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
}

.section-head {
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: block;
  color: var(--theme-text-tertiary);
  font-size: 0.82rem;
  font-variant: small-caps;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.1;
  color: var(--theme-text-primary);
  margin: 0;
  letter-spacing: -0.015em;
}

.timeline {
  list-style: none;
  margin: 0 0 4rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.entry {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--theme-grid-minor);
}

.entry:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 0.9rem;
  flex-wrap: wrap;
}

.entry-titleblock {
  flex: 1;
  min-width: 16rem;
}

.entry-role {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--theme-text-primary);
  margin: 0 0 0.15rem;
  line-height: 1.35;
}

.entry-company {
  font-size: 0.92rem;
  color: var(--theme-text-secondary);
  margin: 0;
}

.entry-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  text-align: right;
  font-size: 0.82rem;
  color: var(--theme-text-tertiary);
  white-space: nowrap;
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
  margin-top: 0.85rem;
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
  margin-bottom: 2rem;
}
</style>
