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
  gap: 0.85rem;
  align-items: center;
}

.contact-strip.is-dense {
  gap: 0.75rem 1.25rem;
  justify-content: center;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--theme-text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  border: 1px solid color-mix(in oklab, var(--theme-grid-border) 52%, white 8%);
  background: color-mix(in oklab, var(--theme-surface) 72%, transparent);
  backdrop-filter: blur(10px) saturate(1.04);
  -webkit-backdrop-filter: blur(10px) saturate(1.04);
  transition: color 120ms ease-out, border-color 120ms ease-out, transform 120ms ease-out;
}

.contact-link:hover,
.contact-link:focus-visible {
  color: var(--theme-text-primary);
  border-color: var(--theme-grid-border);
  transform: translateY(-1px);
  outline: none;
}

.contact-link:focus-visible {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact-icon {
  font-size: 1rem;
  opacity: 0.78;
}

.is-dense .contact-text {
  font-size: 0.82rem;
}
</style>
