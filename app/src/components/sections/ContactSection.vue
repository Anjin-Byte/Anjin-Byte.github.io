<script setup lang="ts">
import ContactStrip from '../layout/ContactStrip.vue';
</script>

<template>
  <section id="contact" class="contact-section">
    <v-container class="contact-container content-surface">
      <div class="contact-head">
        <span class="section-eyebrow">Contact</span>
        <h2 class="contact-title">Open to interesting problems.</h2>
      </div>

      <ContactStrip class="contact-strip-wrap" />
    </v-container>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  z-index: 1;
  padding-block: 5rem 3rem;
  border-top: 1px solid var(--theme-grid-minor);
}

.contact-container {
  max-width: 820px;
  text-align: center;
  padding: clamp(2.5rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem);
}

.contact-head {
  margin-bottom: 2.25rem;
}

.section-eyebrow {
  display: block;
  color: var(--theme-text-tertiary);
  font-size: 0.82rem;
  font-variant: small-caps;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.contact-title {
  font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  font-weight: 500;
  color: var(--theme-text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.contact-strip-wrap {
  justify-content: center;
}
</style>
