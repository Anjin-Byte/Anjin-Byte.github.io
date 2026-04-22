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
      class="contact-link"
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
  gap: 1.25rem 1.75rem;
  align-items: center;
  row-gap: 0.75rem;
}

.contact-strip.is-dense {
  gap: 0.75rem 1.25rem;
  justify-content: center;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--theme-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 120ms ease-out;
}

.contact-link:hover,
.contact-link:focus-visible {
  color: var(--theme-text-primary);
  outline: none;
}

.contact-link:focus-visible {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact-icon {
  font-size: 1rem;
  opacity: 0.85;
}

.is-dense .contact-text {
  font-size: 0.82rem;
}
</style>
