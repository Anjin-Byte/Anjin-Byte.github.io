<script setup lang="ts">
interface ContactLink {
  label: string;
  icon: string;
  href: string;
  color: string;
}

const links: ContactLink[] = [
  {
    label: 'GitHub',
    icon: 'mdi-github',
    href: 'https://github.com/Anjin-Byte',
    color: 'white',
  },
  {
    label: 'Email',
    icon: 'mdi-email-outline',
    href: 'mailto:thalesarkanzen@gmail.com',
    color: 'secondary',
  },
];
</script>

<template>
  <section id="contact">
    <v-container class="py-16 text-center">
      <h2 class="text-h4 font-weight-bold mb-4">Get in Touch</h2>
      <p class="text-body-1 text-medium-emphasis mb-8">
        Open to interesting problems. Reach out anytime.
      </p>
      <div class="d-flex justify-center flex-wrap ga-3">
        <v-btn
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :color="link.color"
          :prepend-icon="link.icon"
          variant="outlined"
          target="_blank"
          size="large"
        >
          {{ link.label }}
        </v-btn>
      </div>
    </v-container>
  </section>
</template>
