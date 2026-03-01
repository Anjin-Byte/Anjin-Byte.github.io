<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

const projects: Project[] = [
  {
    title: 'Conway\'s Game of Life',
    description:
      'Classic cellular automaton implemented in Rust, compiled to WebAssembly, ' +
      'and rendered via the Canvas API. Cell state is read directly from WASM linear memory.',
    tags: ['Rust', 'WebAssembly', 'Canvas', 'Vue 3'],
    href: 'https://github.com/Anjin-Byte/Anjin-Byte.github.io',
  },
];
</script>

<template>
  <section id="projects">
    <v-container class="py-16">
      <h2 class="text-h4 font-weight-bold mb-8">Projects</h2>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.title"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            color="surface"
            border
            height="100%"
            class="d-flex flex-column"
          >
            <v-card-title class="text-h6 pt-5 px-5">
              {{ project.title }}
            </v-card-title>
            <v-card-text class="text-medium-emphasis flex-grow-1 px-5">
              {{ project.description }}
            </v-card-text>
            <v-card-text class="pt-0 px-5">
              <div class="d-flex flex-wrap ga-1">
                <v-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  size="x-small"
                  color="secondary"
                  variant="tonal"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>
            <v-card-actions v-if="project.href" class="px-5 pb-5">
              <v-btn
                :href="project.href"
                target="_blank"
                variant="text"
                color="primary"
                size="small"
                append-icon="mdi-open-in-new"
              >
                View on GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
