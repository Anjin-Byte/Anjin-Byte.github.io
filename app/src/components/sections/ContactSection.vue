<script setup lang="ts">
import ContactStrip from '../layout/ContactStrip.vue';
</script>

<template>
  <section id="contact" class="contact-section">
    <v-container class="contact-container">
      <div class="contact-band glass-panel">
        <div class="contact-head">
          <span class="glass-chip section-kicker">Contact</span>
          <h2 class="contact-title">Open to interesting problems.</h2>
          <p class="contact-copy">
            Best when the work sits somewhere between systems, interfaces, and
            practical experimentation.
          </p>
        </div>

        <ContactStrip class="contact-strip-wrap" />
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  z-index: 1;
  padding-block: 5rem 3rem;
}

.contact-container {
  max-width: 1120px;
}

.contact-band {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1.5rem 2rem;
  align-items: center;
  padding: clamp(1.5rem, 3vw, 2.2rem);
}

.contact-head {
  display: grid;
  gap: 0.9rem;
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  font-weight: 500;
  color: var(--theme-text-primary);
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.02;
}

.contact-copy {
  margin: 0;
  color: var(--theme-text-secondary);
  font-size: 0.96rem;
  line-height: 1.7;
  max-width: 42ch;
}

.contact-strip-wrap {
  justify-content: flex-end;
}

@media (max-width: 900px) {
  .contact-band {
    grid-template-columns: 1fr;
  }

  .contact-strip-wrap {
    justify-content: flex-start;
  }
}
</style>
