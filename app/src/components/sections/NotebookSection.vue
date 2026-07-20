<script setup lang="ts">
import { notebookNodes } from '../../space/notebookNodes';

// `YYYY-MM-DD` → "Jun 11, 2026". Parse at local noon so the calendar date never
// shifts under a timezone offset (a bare ISO date parses as UTC midnight).
const dateFmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
const formatDate = (iso: string): string => dateFmt.format(new Date(`${iso}T12:00:00`));
</script>

<template>
  <section id="notebook" class="notebook-section">
    <v-container class="notebook-container">
      <div class="notebook-head">
        <span class="glass-chip section-kicker">Notebook</span>
        <h2 class="section-heading notebook-title">Field notes.</h2>
        <p class="section-intro notebook-intro">
          Working notes on building this site: design, graphics, and the
          occasional dead end.
        </p>
      </div>

      <ol class="note-index">
        <li v-for="note in notebookNodes" :key="note.slug">
          <router-link :to="note.route" class="note-item quiet-sheet">
            <div class="note-item-head">
              <time class="note-date" :datetime="note.date">{{ formatDate(note.date) }}</time>
              <h3 class="note-title">{{ note.title }}</h3>
            </div>
            <p class="note-summary">{{ note.summary }}</p>
            <div v-if="note.tags.length" class="note-tags">
              <span v-for="tag in note.tags" :key="tag" class="note-tag">{{ tag }}</span>
            </div>
          </router-link>
        </li>
      </ol>
    </v-container>
  </section>
</template>

<style scoped>
.notebook-section {
  position: relative;
  z-index: 1;
  padding-block: 6rem;
}

.notebook-container {
  max-width: var(--container-max);
}

.notebook-head {
  display: grid;
  gap: 1rem;
  margin-bottom: 2.25rem;
  max-width: var(--measure);
}

.notebook-title {
  max-width: 14ch;
}

.note-index {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.note-item {
  display: grid;
  gap: 0.7rem;
  padding: 1.3rem 1.4rem;
  text-decoration: none;
  transition: border-color 140ms ease;
}

.note-item:hover {
  border-color: var(--theme-grid-border);
}

.note-item:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
}

.note-item-head {
  display: flex;
  align-items: baseline;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.note-date {
  color: var(--theme-text-tertiary);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

.note-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--theme-text-primary);
}

.note-summary {
  margin: 0;
  color: var(--theme-text-secondary);
  font-size: 0.96rem;
  line-height: 1.7;
  max-width: 62ch;
}

.note-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

/* Metadata badge — the flat-token tier (shared --badge-fill / --island-edge). */
.note-tag {
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--theme-text-secondary);
  padding: 0.26rem 0.62rem;
  background: var(--badge-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-pill);
}
</style>
