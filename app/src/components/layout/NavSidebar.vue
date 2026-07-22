<script setup lang="ts">
// A static "all destinations" dock — replaces the old bearing/distance compass
// with one fixed list, no per-frame layout. Each row IS a recessed groove; the
// coin nestles at its left edge with the label beside it, both inside the
// recess. Depth is stateful (ThemeToggle's idiom): inactive coins sit flush as
// ghosts; only the current page's coin is a raised key marked by an accent ring.
//
// Below a hairline, a footer of flat ghost icons holds the EXTERNAL exits
// (GitHub, LinkedIn, email). Deliberately a different grammar from the grooves:
// grooves fly the camera within this space; ghosts leave the site.
import { WAYPOINTS } from '../../space/waypoints';
import { contactLinks } from '../../data/profile';

const EXIT_LABELS = ['GitHub', 'LinkedIn', 'Email'] as const;
const exitLinks = EXIT_LABELS.map(
  (label) => contactLinks.find((l) => l.label === label),
).filter((l) => l !== undefined);
</script>

<template>
  <nav class="nav-sidebar" aria-label="Move to a section">
    <router-link
      v-for="wp in WAYPOINTS"
      :key="wp.id"
      :to="wp.route"
      class="nav-sidebar__entry"
    >
      <span class="nav-sidebar__coin">
        <v-icon :icon="wp.icon" size="20" />
      </span>
      <span class="nav-sidebar__label">{{ wp.label }}</span>
    </router-link>

    <div class="nav-sidebar__exits" aria-label="Elsewhere">
      <a
        v-for="link in exitLinks"
        :key="link.label"
        :href="link.href"
        class="nav-sidebar__exit"
        :aria-label="link.label"
        :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
        :rel="link.href.startsWith('mailto:') ? undefined : 'noopener'"
      >
        <v-icon :icon="link.icon" size="18" />
        <v-tooltip activator="parent" location="bottom" :text="link.label" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
/* One floating island holding the whole list, left of the world panels. */
.nav-sidebar {
  position: fixed;
  left: calc(var(--inset-chrome) + var(--safe-area-left));
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding: var(--space-xs);
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-lg);
  box-shadow: var(--island-lip), var(--elev-1);
}

/* The entry itself is the recessed track — same recipe as ThemeToggle's
   groove. The coin nestles at its left edge; the label sits beside it, both
   inside the recess. The inset shadow alone cuts the groove — no border, so
   the depth cue isn't doubled. */
.nav-sidebar__entry {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: 4px var(--space-md) 4px 4px;
  background: var(--well-recess);
  border-radius: var(--radius-pill);
  box-shadow: inset 0 1px 2px var(--shadow-1);
  text-decoration: none;
  color: var(--theme-text-tertiary);
  transition: color 160ms ease;
}
.nav-sidebar__entry:hover {
  color: var(--theme-text-primary);
}
.nav-sidebar__entry:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
}

/* Depth is stateful (ThemeToggle's idiom): inactive coins sit FLUSH in the
   groove as quiet ghosts — no stock, no shadow, just the glyph. */
.nav-sidebar__coin {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  color: inherit;
  transition: color 160ms ease, background-color 160ms ease, box-shadow 160ms ease;
}

/* Current page: the ONE raised thing — a plain-stock key seated in its
   groove, marked by an accent ring around its edge (box-shadow spread, so
   the circle's geometry doesn't shift). */
.nav-sidebar__entry.router-link-active {
  color: var(--theme-text-primary);
}
.nav-sidebar__entry.router-link-active .nav-sidebar__coin {
  color: var(--theme-text-primary);
  background: var(--island-fill);
  box-shadow: var(--island-lip), 0 0 0 2px var(--theme-accent-ring);
}

.nav-sidebar__label {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
}

/* External exits: flat ghost icons under a hairline — no groove, no coin.
   A different grammar on purpose: grooves fly, ghosts leave. */
.nav-sidebar__exits {
  display: flex;
  justify-content: space-evenly;
  margin-top: var(--space-3xs);
  padding-top: var(--space-2xs);
  border-top: 1px solid var(--island-edge);
}

.nav-sidebar__exit {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--theme-text-tertiary);
  transition: color 160ms ease;
}
.nav-sidebar__exit:hover {
  color: var(--theme-text-primary);
}
.nav-sidebar__exit:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
}
</style>
