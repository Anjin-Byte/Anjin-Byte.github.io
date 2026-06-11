<script setup lang="ts">
import { contactLinks } from '../../data/profile';

defineProps<{
  // Compact variant for footer / dense placements; default is the hero-sized strip.
  dense?: boolean;
}>();
</script>

<template>
  <div class="contact-strip" :class="{ 'is-dense': dense }">
    <a
      v-for="link in contactLinks"
      :key="link.label"
      :href="link.href"
      :aria-label="link.label"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-link paper-key"
    >
      <v-icon :icon="link.icon" class="contact-icon" />
      <span class="contact-text">{{ link.display ?? link.label }}</span>
    </a>
  </div>
</template>

<style scoped>
.contact-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
}

.contact-strip.is-dense {
  gap: 0.75rem 1.25rem;
  justify-content: center;
}

/* Material (fill, edge, cut, press, focus ring) comes from .paper-key in
   App.vue; this owns only layout + the quieter resting ink colour. */
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--theme-text-secondary);
  font-size: 0.88rem;
  padding: 0.7rem 0.95rem;
}

.contact-link:hover,
.contact-link:focus-visible {
  color: var(--theme-text-primary);
}

.contact-icon {
  font-size: 1rem;
  opacity: 0.78;
}

.is-dense .contact-text {
  font-size: 0.82rem;
}
</style>
