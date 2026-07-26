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
/* One floating island holding the whole list.
   RAIL, the wide form: a vertical strip left of the world panels. The width is
   FIXED to --nav-rail-w rather than growing to fit the longest label, because
   WorldPanel reserves exactly that much room — a content-derived width would
   let a new waypoint label silently push the dock over the island's text. */
.nav-sidebar {
  position: fixed;
  left: calc(var(--inset-chrome) + var(--safe-area-left));
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  width: var(--nav-rail-w);
  padding: var(--space-xs);
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-die-bold);
  /* (overlay, sheet, rest) — floating chrome, above content AND the camera. */
  box-shadow: var(--island-lip), var(--elev-overlay);
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
  /* (shallow-sunken, control, rest) — the ground a nav control sits in. */
  box-shadow: var(--well-shallow);
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
  border-radius: var(--radius-circle);
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
  /* The OUTSET placement: the ring goes around the coin's edge, so the 40px
     face stays whole and reads as stock with a rim. Legitimate here because the
     groove reserves room — 4px of padding for a 2px ring.
     This was briefly converted to the inset form for "consistency" with the
     theme toggle. That was wrong: it shrank the coin's visual diameter 44 → 40
     and doubled the gap to the groove wall 2px → 4px. The toggle needs inset
     because ITS container clips; this one does not. */
  box-shadow: var(--island-lip), var(--state-selected);
}

.nav-sidebar__label {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
  /* The rail is a fixed width, so a long label truncates rather than widening
     the dock past the room WorldPanel reserved for it. */
  overflow: hidden;
  text-overflow: ellipsis;
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
  border-radius: var(--radius-circle);
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

/* Touch: the exits are 32px squares, below the 44px floor. The grooves above
   are already 48px tall (40px coin + 4px padding), so only these need lifting.
   The glyph stays 18px — the TARGET grows, not the mark. */
@media (pointer: coarse) {
  .nav-sidebar__exit {
    width: var(--touch-min);
    height: var(--touch-min);
  }
}

/* ── BAR: the narrow form ─────────────────────────────────────────────────
   At and below --bp-content the rail cannot coexist with the island: measured
   at 320px it covered 189.5px of a 320px viewport, and it still sat on the
   hero's name at 1280px. So below that threshold the same island turns on its
   side and docks along the bottom, where it costs height (which the island can
   scroll past — WorldPanel reserves it) rather than width (which it cannot).

   Same material, same grooves, same coins. What changes is the axis, and that
   the labels go — at this size the row of glyphs IS the legend, and every coin
   keeps its accessible name from the label element, which is hidden visually
   but left in the a11y tree. */
@media (max-width: 960px) {
  .nav-sidebar {
    /* Centred on the bottom edge, sized to content rather than stretched: a
       full-bleed bar would read as a browser chrome strip, not as one more
       sheet of paper laid on the field. */
    top: auto;
    bottom: calc(var(--inset-chrome) + var(--safe-area-bottom));
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    flex-direction: row;
    align-items: center;
    width: max-content;
    max-width: calc(100vw - 2 * var(--inset-chrome) - var(--safe-area-left) - var(--safe-area-right));
    /* Sized to fit the narrowest supported viewport with the touch floor
       intact. At 320px there are 288px between the insets, and the bar needs
       4 + 5 × (4 + 44 + 4) + 4 × 4 + 4 = 284. That is the whole budget, and it
       is why the exits are dropped below. */
    gap: var(--space-3xs);
    padding: var(--space-3xs);
  }

  /* The groove becomes a square well holding just the coin. */
  .nav-sidebar__entry {
    padding: 4px;
  }

  /* Full touch target in the bar: this IS the primary navigation at this size,
     and the label is gone, so the coin is the whole control. */
  .nav-sidebar__coin {
    width: var(--touch-min);
    height: var(--touch-min);
  }

  /* Visually hidden, still announced — the coin's accessible name. */
  .nav-sidebar__label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  /* The external exits leave the bar entirely.
     MEASURED, not assumed: with the exits present the bar's content is 413px
     wide against the 288px a 320px phone has between the insets, so the last
     two icons were being clipped by the bar's own max-width clamp — silently,
     on every phone up to ~470px. There is no arrangement that fits eight 44px
     targets in 288px, so something had to go, and the exits are the right
     thing: they are DUPLICATED (the hero's "Elsewhere" card and the contact
     section both carry GitHub / LinkedIn / email), while the five destinations
     are not reachable any other way at this size. Five is also where the
     platform tab-bar conventions land, for the same arithmetic.

     This replaces a `@media (max-width: 400px)` tightening block that only
     recovered 4px — it shrank the gaps while GROWING the coins, so it never
     addressed the overflow. That block was also a third breakpoint value, the
     same kind of outlier as the 900px one retired in Stage 1. */
  .nav-sidebar__exits {
    display: none;
  }
}
</style>
