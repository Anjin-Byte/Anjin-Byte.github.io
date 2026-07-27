<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import AppBackground from '@/components/layout/AppBackground.vue';
import AppChrome from '@/components/layout/AppChrome.vue';
import WorldStage from '@/components/space/WorldStage.vue';
import NavSidebar from '@/components/layout/NavSidebar.vue';

// DEV-only live frame-budget HUD (toggle with `\`, or `?perf=1` to start open).
// Also hosts the renderer-backend switcher, which used to be its own always-on
// overlay in the opposite corner — same subject, and a debug control that is
// permanently on screen ends up in every screenshot.
//
// Dynamically imported ONLY under import.meta.env.DEV so the whole component
// (and its dynamic-import chunk) is absent from the production bundle — a plain
// static import + `v-if` would leave the dead component code shipping. `null`
// in prod; the v-if drops it.
const PerfHud = import.meta.env.DEV
  ? defineAsyncComponent(() => import('@/components/layout/PerfHud.vue'))
  : null;

// Skip link target. Focus is moved directly rather than letting the browser
// resolve the fragment: a plain `#main-content` navigation pushes a history
// entry and fires popstate, which vue-router resolves as a route change and
// cameraSync then answers with a camera fly. Focusing the element does the one
// thing the link is for and leaves the URL alone.
function skipToContent(): void {
  document.getElementById('main-content')?.focus();
}
</script>

<template>
  <v-app class="app-shell">
    <!-- First focusable element in the document, by DOM order. -->
    <a class="skip-link" href="#main-content" @click.prevent="skipToContent">Skip to content</a>
    <AppBackground />
    <AppChrome />
    <WorldStage />
    <NavSidebar />
    <component :is="PerfHud" v-if="PerfHud" />
  </v-app>
</template>

<style>
:root {
  --font-display: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
  --font-ui: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
  --font-mono: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
  --safe-area-top: env(safe-area-inset-top, 0px);
  --safe-area-right: env(safe-area-inset-right, 0px);
  --safe-area-bottom: env(safe-area-inset-bottom, 0px);
  --safe-area-left: env(safe-area-inset-left, 0px);

  /* ── Design tokens ──────────────────────────────────────────────────────
     The scale everything derives from. */

  /* Foundation */
  /* Minimum interactive target on touch. 44px is the WCAG 2.5.5 figure and it
     is now literal — there is no `html { zoom }` multiplying it down, so what
     is written here is what a finger gets. (It was 51px, back-computed as
     51 × 0.875 = 44.6, which is the kind of constant that silently becomes
     wrong the moment the multiplier moves. See docs/responsive/06.) */
  --touch-min: 44px;

  /* Space scale (4px base) */
  --space-3xs: 4px;
  --space-2xs: 8px;
  --space-xs: 12px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* Fluid type scale (base 16px, ratio 1.25; min@360 → max@1440).
     The endpoints are unchanged — those are the designed sizes. What changed is
     the middle term, which did not match the comment: each step reached its max
     at a DIFFERENT viewport (809px for step-3, 895 for step-2, 1026, 1108, 1164,
     1309, and 1447 for step-4), so the scale stopped being a scale partway up
     and the ratio between adjacent steps depended on viewport width. Recomputed
     from `a = min - (max-min)/3` and `slope = (max-min)/10.8 vw`, which is the
     algebra for hitting min at exactly 360px and max at exactly 1440px. Only
     step-4 was already right.

     KNOWN, DELIBERATE: step-3 → step-4 is 1.25 at the min end and 1.56 at the
     max end. That is a display jump for the one element that carries the page
     (.section-heading), not an error, and it is left as-is rather than
     "corrected" to 2.75rem — which would visibly shrink every page title. */
  --step--2: clamp(0.69rem, 0.67rem + 0.09vw, 0.75rem);
  --step--1: clamp(0.83rem, 0.79rem + 0.16vw, 0.94rem);
  --step-0: clamp(1rem, 0.96rem + 0.19vw, 1.13rem);
  --step-1: clamp(1.25rem, 1.2rem + 0.24vw, 1.41rem);
  --step-2: clamp(1.56rem, 1.49rem + 0.3vw, 1.76rem);
  --step-3: clamp(1.95rem, 1.87rem + 0.37vw, 2.2rem);
  --step-4: clamp(2.44rem, 2.11rem + 1.47vw, 3.43rem);

  /* ── Shape: the die scale ─────────────────────────────────────────────────
     Surfaces are paper CUT and laid on the field, so corners are die corners.
     A die is a steel rule bent to a shape; its radius is a property of the
     TOOL, not of the piece — cut a business card and a large sheet with the
     same die and both get the same corner. So radius here does NOT scale with
     element size (the usual design-system rule); it says *which die made this
     cut*, and most things are cut with the same one.

     The trade's standard sizes land on exact CSS pixels because CSS defines
     1in = 96px, which is where these numbers come from — 1/16in increments of
     a real tool rather than taste. (Nominal, not physical: the CSS px is a
     reference pixel, so this is a rationale in the way print work reasons in
     points, not a claim about millimetres on your monitor.)

     Replaced the previous xs/sm/md/lg scale (11/16/18/24), of which 18 and 24
     were already exactly 3/16in and 1/4in by instinct, while 11 and 16 matched
     no die and nothing else in the system. See docs/shape-language-audit. */
  --radius-die-fine:  6px;  /* 1/16" — inline code, inset windows            */
  --radius-die:      12px;  /* 1/8"  — the default cut: regions, data wells  */
  --radius-die-bold: 18px;  /* 3/16" — large stock: cards, panels, sidebar   */
  --radius-pill:    999px;  /* a fully-rounded die (lozenge label)           */
  --radius-circle:    50%;  /* a round die                                   */

  /* ── STATE: selected ──────────────────────────────────────────────────────
     The accent ring marking "this is the current one". TWO placements, one
     width, and choosing between them is a property of the CONTAINER, not of
     the element.

     --state-selected        a ring AROUND the edge. The default expression:
                             the coin keeps its full face and gains a rim, which
                             is what "a raised key marked by a ring" means. Paints
                             OUTSIDE the border box, so it is only safe where the
                             container reserves room for it — the nav groove has
                             4px of padding for a 2px ring, so it does.

     --state-selected-inset  the same ring cut INTO the face. For elements whose
                             container clips: the theme toggle sits in Vuetify's
                             `overflow: auto hidden` group with `border-radius:
                             999px`, so an outset ring is cut by the stadium
                             curve. Inset paint cannot be clipped by an ancestor,
                             so there the question stops being askable.

     They are not interchangeable, and the difference is visible: converting the
     nav coin to the inset form shrank its visual diameter from 44 to 40 and
     doubled the gap to the groove wall from 2px to 4px. Sharing --ring-selected-w
     keeps the one thing that would actually drift — the thickness — in one place.
     See docs/clipped-ink-2026-07.md for the general rule. */
  --ring-selected-w: 2px;
  --state-selected:       0 0 0 var(--ring-selected-w) var(--theme-accent-ring);
  --state-selected-inset: inset 0 0 0 var(--ring-selected-w) var(--theme-accent-ring);

  /* ── Media: the print ─────────────────────────────────────────────────────
     An image on this site is a photographic PRINT set into a window cut in the
     sheet. A print has ONE shape. It does not change because the page got
     narrower, and the window never re-crops it.

     That was not true before. Above the collapse breakpoint the print had no
     declared shape at all: it was `align-items: stretch`-ed to whatever height
     the adjacent text column happened to be, measured swinging from 0.68
     (PORTRAIT) through 1.02 (square) to 1.40 as the viewport moved, while below
     the breakpoint a separate rule declared 16/9. Two shape systems either side
     of one threshold, and neither matched the source.

     16/9 because the content is SCREEN CAPTURES — the sources are 1400x796
     (1.76). A print of a screen is screen-shaped, and any other ratio makes
     `object-fit: cover` throw away the interface the image exists to show; at
     0.68 it was showing a narrow vertical slice of a 16:9 screenshot. At 16/9
     the crop is ~1%.

     --print-max-h caps how much of the view a print may take, so it stays
     evidence rather than the headline. Bound in VIEWPORT height, because that
     is the axis dominance is felt on: it barely engages on a tall phone
     (a 390x844 print is already only 201px) and bites hard in landscape, where
     a full-width 16:9 banner would otherwise eat most of the screen. Width
     follows from the ratio, so a capped print centres on the sheet with paper
     either side, which is what a print laid on paper does. */
  --print-ratio: 16 / 9;
  --print-mat: 7px;   /* the mat board between the print's edge and its window */
  --print-max-h: min(32vh, 18rem);

  /* Layout */
  --inset-chrome: 16px; /* balanced corner inset (top = sides) */
  /* Prose line-length cap, and the ONE authority for it. Was 64ch and bound to
     nothing: it was declared on .section-intro but every section then set
     `max-width: 62ch` in a scoped rule, which outranks it (scoping adds an
     attribute selector). 62ch is therefore what actually rendered, so that is
     the value here — the token now describes reality instead of contradicting
     it, and the scoped overrides are gone. Contact's intro keeps a deliberately
     shorter 42ch; heading measures (11-14ch) are a different quantity, a
     display measure for a two- or three-word title, not a reading measure. */
  --measure: 62ch;
  /* Island width cap; mirrors PANEL_MAX_WIDTH in layoutConfig.ts.
     ULTRAWIDE POSITION (was R10, an open question because it was never written
     down): the island DOES NOT grow past this. On a 3440px display the content
     occupies about a third of the width and the rest is grid. That is the
     intent, not neglect — an island is a sheet of paper laid on the field, and
     a sheet does not grow to fill a wall. Growing it would also buy nothing:
     --measure caps prose at 62ch, so the extra width would land as whitespace
     inside the sheet or as over-wide cards. What ultrawide gets instead is more
     visible field and a longer camera traverse between islands, which is the
     thing the spatial model is for. */
  --panel-max: 1200px;
  --container-max: 1120px; /* content reading column (inside the island) */
  --text-ui: 1.05rem; /* fixed chrome label — controls don't balloon */

  /* ── Breakpoints ────────────────────────────────────────────────────────
     TWO, and only two. Both are derived from where CONTENT stops working,
     not from device classes:

     --bp-content 960px — below this the two-column section grids collapse to
       one, AND the nav dock changes form (see below). Kept at 960 on evidence,
       not inheritance: the grids are `minmax(0, ~1.4fr) minmax(280px, ~0.85fr)`
       and the 280px floor now binds in a band just ABOVE the breakpoint (961 to
       ~1010 on projects/resume, ~1180 on the hero) because the rail reserve
       takes 216px off the content. Measured at 961 the hero's left column is
       325px. An arithmetic target of >= ~380px (45ch) would have pushed this
       breakpoint to 1024, but rendering it at 961 shows 325px reads
       comfortably for a short bio — so the arithmetic was wrong, not the
       breakpoint. See docs/responsive/roadmap.md 1.6.

     --bp-small 640px — the small-phone step: chrome trims, hero tightens.

     The old third value (900) is GONE. It was the only one of its kind and it
     produced an inconsistent 901-960 band on landscape phones, where every
     other section had collapsed to one column and the contact band had not.

     A media query cannot read a custom property, so these numbers still appear
     as literals in @media rules; these tokens are the authority those literals
     must match, and `breakpointDiscipline.test.ts` is what pins them.

     --bp-island 660px is a CONTAINER threshold, not a viewport one, and the
     distinction matters: it is measured against `.world-panel`'s inline size,
     which in rail mode is the viewport minus --nav-reserve. Derived in Stage
     2.2 from where two columns stop working: `left = C - padding - gap - 280`,
     and 660 is the container width at which the left column reaches the 325px
     validated by eye in 1.6.

     THREE values, and that is the whole set. `breakpointDiscipline.test.ts`
     fails the build on any other. */
  --bp-content: 960px;
  --bp-small: 640px;
  --bp-island: 660px;

  /* ── Navigation dock ────────────────────────────────────────────────────
     The dock is fixed chrome floating OVER the world plane, so it can cover
     the island beneath it — measured covering the words "Taylor Hale" at a
     1280px viewport. Two forms, switching at --bp-content, so "multi-column
     layout" and "left rail" are one state and "single column" and "bottom bar"
     are the other.

     RAIL (> 960px): the vertical island at the left edge. Its width is FIXED
     rather than content-derived, so --nav-reserve stays exact when a waypoint
     label changes length.
     BAR (<= 960px): a horizontal island along the bottom, where it costs
     height (which the island can scroll) instead of width (which it cannot). */
  --nav-rail-w: 176px;
  --nav-reserve: calc(var(--inset-chrome) + var(--nav-rail-w) + var(--space-md));
  --nav-bar-h: calc(var(--touch-min) + 2 * var(--space-xs));

  /* ── Island elevation (soft realism) ──────────────────────────────────────
     Islands are clean sheets of paper resting on the graph-paper field, lifted
     just off the page. Principles: light comes from straight ABOVE (shadows
     drop vertically, never diagonally); depth is a LAYERED penumbra — a tight
     contact shadow + a soft cast — tinted toward the scene, never pure black;
     a crisp hairline edge + a 1px lit top lip define the shape INDEPENDENT of
     the shadow, so an island stays legible over the busy grid and for low-
     vision users (the edge is structure, the shadow is flair). Elevation is a
     small fixed scale (--elev-1 resting, --elev-2 hero), not per-element
     guesses. Values are LIGHT defaults; `data-theme-mode="dark"` overrides. */
  --island-fill: color-mix(in oklab, var(--theme-surface) 97%, white 3%);
  --island-edge: color-mix(in oklab, var(--theme-surface) 90%, var(--theme-ink) 10%);
  --shadow-1: rgba(54, 48, 40, 0.12); /* contact: tight, slightly stronger */
  --shadow-2: rgba(54, 48, 40, 0.08); /* cast: soft, faint */
  /* The cut edge of the sheet, given thickness: top face lit, bottom face in
     shadow. Expressed as a perceptual lightness delta (--cut) from the sheet's
     OWN fill (not the field), so both themes get the SAME perceived edge depth
     and the OKLab [0,1] clamp handles the mode asymmetry for free: in light the
     lit face hits the white ceiling and becomes a whisper while the shadow
     carries it; in dark both faces have headroom. Keeping the origin's a/b
     tints the edge like lit/shadowed paper (never a glassy pure-white spec).
     One knob — --cut — tunes the edge across every surface and both themes. */
  /* Pre-JS fallback only — the authoritative value is CUT in types/theme.ts,
     which useThemePreference republishes as this var on every theme apply. */
  --cut: 0.05;
  --island-lip:
    inset 0  1px 0 oklab(from var(--island-fill) calc(l + var(--cut)) a b),
    inset 0 -1px 0 oklab(from var(--island-fill) calc(l - var(--cut)) a b);
  --elev-1: 0 1px 2px var(--shadow-1), 0 6px 18px var(--shadow-2);  /* resting */
  --elev-2: 0 2px 4px var(--shadow-1), 0 14px 34px var(--shadow-2); /* hero */
  /* Floating chrome: the nav sidebar (and future modals / popovers / tooltips)
     sit above BOTH the content sheets and the flying camera, which is a
     different plane from a content card — yet they previously borrowed
     --elev-1 and read as just another resting sheet (elevation audit §6, "the
     one genuine gap"). Topmost plane, so it casts furthest; kept diffuse rather
     than dark so a small piece of chrome floats instead of shouting. This is
     the CEILING of the z-axis, not an open ladder — nothing goes above it. */
  --elev-overlay: 0 3px 7px var(--shadow-1), 0 18px 42px var(--shadow-2);
  /* Raised-flush: proud of the field but not lifted off it (chips, keys at
     rest). Previously unnamed — "a card with --elev-1 omitted" — which is a
     level the author could see and the vocabulary could not express (F8).
     Deliberately the lip ALONE: at the flush plane the cut edge IS the depth
     cue, there being no gap to cast into. Named so the level can be referred
     to, and so adding a flush surface is a choice rather than an omission. */
  --elev-flush: var(--island-lip);
  --well-recess: color-mix(in oklab, var(--theme-surface) 96%, var(--theme-ink) 4%);
  /* ── The sunken planes, mirroring --elev-1/2 on the raised side ────────────
     Composite depth tokens so a recess is one var() and cannot be hand-rolled
     (elevation audit F1-F4: raised had one token and stayed uniform, recessed
     had none and drifted into six spellings across ten elements).

     Two planes because a data region sits deeper than a control channel, and
     each is anchored to a material so the two depths stay tellable apart:
       --well-deep     data regions   : code blocks, blockquotes, quiet sheets
       --well-shallow  control ground : toggle track, nav pill
     Opaque and derived from the well's OWN fill, which is valid because every
     element on these planes paints `background: var(--well-recess)`.

     Pre-JS fallbacks only; useThemePreference republishes all four from OKLab
     on every theme apply. */
  --well-deep:    inset 0 1px 3px oklab(from var(--well-recess) calc(l - var(--cut)) a b);
  --well-shallow: inset 0 1px 2px oklab(from var(--well-recess) calc(l - var(--cut)) a b);
  /* Transient press. Translucent, NOT derived from the well fill: a held key
     keeps its raised --island-fill, so a state delta has to compose over any
     material rather than assume one. Distinct from a well by design (F1). */
  --state-pressed: inset 0 1px 2px rgba(0, 0, 0, 0.14);
  /* A hairline cut edge, not a basin. Separated from the wells because both
     were spelled `inset` and the metaphors got confused (F2). */
  --cut-ring: inset 0 0 0 1px oklab(from var(--island-fill) calc(l - var(--cut)) a b);
  /* Metadata badges (tech tags): a flat tonal token, not a plate. A wash of the
     INK color reads correctly in both modes (dark wash on light paper, light
     wash on dark) — so one token, no per-mode override. Pairs with
     --island-edge; no shadow, because depth cues this small read as grime. */
  --badge-fill: color-mix(in oklab, var(--theme-ink) 6%, transparent);

  /* Pressable keys (links, buttons, the active toggle segment): cut from the
     same paper, they rest proud and sink IN on :active. Hover warms the fill a
     step; the accent variant tints toward --theme-accent. All derive from
     --island-fill / --theme-accent, so they track the theme — no per-mode dup. */
  --key-hover-fill: color-mix(in oklab, var(--island-fill) 93%, var(--theme-ink) 7%);
  --key-primary-fill: color-mix(in oklab, var(--island-fill) 82%, var(--theme-accent) 18%);
  --key-primary-hover: color-mix(in oklab, var(--island-fill) 76%, var(--theme-accent) 24%);
}

/*
  Root background owns the page edge and safe-area fill so iOS Safari can
  always paint a themed surface behind its bottom toolbar, even when the live
  canvas is composited separately from the document.

  The fallbacks below match LIGHT_THEME (the first-visit default).  In the
  normal path the inline script in index.html overrides these with the user's
  resolved theme before paint, so these are only a last-resort defense.
*/
/* No `zoom` here. It used to be `zoom: var(--zoom, .875)` — a global "make
   everything a bit smaller" knob applied during a tokenization pass, with no
   stated reason. It created a SECOND coordinate space: media queries evaluated
   in unzoomed px while layout ran in logical px 14.3% larger, `100vw` rendered
   12.5% short, every `rem` was silently ×0.875, and `vw` inside `clamp()`
   resolved against the unzoomed width so every fluid slope was weaker than
   authored. Removing it collapsed `.world-stage` clientWidth from 1463 to 1280
   at a 1280 viewport and lifted body copy from 14.7 to 16.8 visual px.
   Full measurement + rationale: docs/responsive/06-zoom-decision.md. If some
   surface genuinely wants to be smaller, that is a per-token decision with a
   reason, which is the standard every other axis here is held to. */
html {
  background-color: var(--theme-surface, oklab(0.985 -0.001 0.004));
  background-image:
    linear-gradient(
      to right,
      color-mix(in oklab, var(--theme-grid-minor, rgba(0, 0, 0, 0.08)) 44%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      color-mix(in oklab, var(--theme-grid-minor, rgba(0, 0, 0, 0.08)) 44%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      color-mix(in oklab, var(--theme-grid-major, rgba(0, 0, 0, 0.14)) 56%, transparent) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      color-mix(in oklab, var(--theme-grid-major, rgba(0, 0, 0, 0.14)) 56%, transparent) 1px,
      transparent 1px
    );
  /* Pitch vars are set by useCanvasSurface from the renderer's device-px cell
     size ÷ the effective DPR, so this fallback grid matches the canvas grid on
     EVERY display density (the old hardcoded 16px/80px only matched at 2×).
     The 16px/80px fallbacks cover the pre-JS moment and remain correct for 2×. */
  background-size:
    var(--grid-pitch-minor, 16px) var(--grid-pitch-minor, 16px),
    var(--grid-pitch-minor, 16px) var(--grid-pitch-minor, 16px),
    var(--grid-pitch-major, 80px) var(--grid-pitch-major, 80px),
    var(--grid-pitch-major, 80px) var(--grid-pitch-major, 80px);
  background-position: 0 0, 0 0, 0 0, 0 0;
}

html,
body,
#app {
  min-height: 100%;
}

html,
body {
  margin: 0;
  /* No `overscroll-behavior-x: none`. It existed to protect the two-finger
     lane-navigation gesture (useLaneScroll) from the browser's back/forward
     swipe; that gesture is `GESTURE_NAV_ENABLED = false` and compiled out, so
     the rule was only costing users the back gesture. */
}

body {
  background: transparent;
  color: var(--theme-text-primary, var(--theme-ink));
  font-family: var(--font-ui);
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
}

.v-application {
  background: transparent !important;
}

.app-shell {
  position: relative;
  isolation: isolate;
}

/* The space is navigated by camera traversal, not page scroll — lock the
   document so the only motion is the WorldStage transform. */
body {
  overflow: hidden;
}

/* Raised island — a clean paper plate lifted off the field. The lit top lip is
   listed first so it composites above the drop shadows. */
.glass-panel,
.content-surface {
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-die-bold);
  box-shadow: var(--island-lip), var(--elev-1);
}

/* The hero plate sits one elevation step higher. */
.glass-panel--strong {
  box-shadow: var(--island-lip), var(--elev-2);
}

/* Nested fields (skill notes, project items) — pressed INTO the plate. A single
   soft top-inner shadow reads as a recess under top-down light; this is the one
   inset cue that stays legible at low contrast, so it survives here. */
.quiet-sheet {
  background: var(--well-recess);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-die);
  /* (deep-sunken, data-region, rest) — a region you read content into. */
  box-shadow: var(--well-deep);
}

/* ── Skip link ────────────────────────────────────────────────────────────
   Off-screen until focused, then a raised paper key at the chrome inset. Not
   `display: none` / `visibility: hidden` — either would make it unfocusable,
   which defeats the point. z-index clears AppChrome (10). It is styled from
   the tokens directly rather than reusing .paper-key so it stays legible if
   that class is restyled; a skip link failing silently is invisible in review. */
.skip-link {
  position: fixed;
  top: calc(var(--safe-area-top) + var(--inset-chrome));
  left: calc(var(--safe-area-left) + var(--inset-chrome));
  z-index: 100;
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-die-fine);
  background: var(--island-fill);
  box-shadow: var(--island-lip), var(--elev-1);
  color: var(--theme-text-primary, var(--theme-ink));
  font-family: var(--font-ui);
  font-size: var(--text-ui);
  text-decoration: none;
  /* Parked off the top edge rather than moved on focus with a transition —
     a slide here would animate under prefers-reduced-motion for no benefit. */
  transform: translateY(calc(-100% - var(--inset-chrome) - var(--safe-area-top) - 8px));
}

.skip-link:focus {
  transform: none;
  outline: 2px solid var(--theme-ink-secondary);
  outline-offset: 2px;
}

/* Kicker / tag pills — small, so just the hairline + lit lip; a cast shadow on
   a pill this size reads as fussy. Crisp, essentially flat. */
.glass-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  max-width: max-content;
  min-height: 1.8rem;
  padding: 0.34rem 0.78rem 0.32rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--island-edge);
  background: var(--island-fill);
  box-shadow: var(--elev-flush);
  line-height: 1;
}

/* ── Pressable keys ───────────────────────────────────────────────────────
   The interactive member of the paper family: rests raised (the cut edge),
   sinks into a recess on :active — "the press." Consuming components own
   layout (padding, size, gap); these own material + state only. Focus is an
   explicit ring, never depth alone (a11y — the lesson neumorphism skipped). */
.paper-key {
  background: var(--island-fill);
  border: 1px solid var(--island-edge);
  border-radius: var(--radius-pill);
  box-shadow: var(--elev-flush);
  color: var(--theme-text-primary);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 140ms ease, border-color 140ms ease, box-shadow 110ms ease;
}
.paper-key:hover {
  background: var(--key-hover-fill);
  border-color: var(--theme-grid-border);
}
.paper-key:active {
  box-shadow: var(--state-pressed);
}
.paper-key:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
}

/* Accent call-to-action: tinted fill + a touch of lift; same press. */
.paper-key--primary {
  background: var(--key-primary-fill);
  box-shadow: var(--island-lip), var(--elev-1);
}
.paper-key--primary:hover {
  background: var(--key-primary-hover);
  border-color: var(--theme-grid-border);
}
.paper-key--primary:active {
  box-shadow: var(--state-pressed);
}

/* Ghost key: flush until touched (icon buttons in a tray, inactive segments).
   No resting fill/edge/lip — just a hover wash + the press. Self-contained. */
.paper-key--ghost {
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  box-shadow: none;
  color: var(--theme-text-tertiary);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease, box-shadow 110ms ease;
}
.paper-key--ghost:hover {
  background: var(--key-hover-fill);
  border-color: var(--island-edge);
  color: var(--theme-text-primary);
}
.paper-key--ghost:active {
  box-shadow: var(--state-pressed);
}
.paper-key--ghost:focus-visible {
  outline: 2px solid var(--theme-accent-ring);
  outline-offset: 2px;
}

.section-kicker {
  align-self: start;
  color: var(--theme-text-secondary);
  font-size: var(--step--2);
  font-weight: 600;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  white-space: nowrap;
}

.section-heading {
  font-family: var(--font-display);
  font-size: var(--step-4);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.03em;
  color: var(--theme-text-primary);
  margin: 0;
}

.section-intro {
  margin: 0;
  color: var(--theme-text-secondary);
  font-size: var(--step-0);
  line-height: 1.7;
  max-width: var(--measure);
}

/* Dark mode: a raised object catches more light, so the plate rides LIGHTER
   than the deep field; shadows go near-black and stronger (low-L surfaces need
   more shadow to read). Both --well-recess and the cut edge need NO override —
   they derive from --island-fill (+ --cut) in :root and `var()` resolves
   lazily, so they track this mode's fill on their own. The well sits a faint
   step below the plate (≈ΔL 0.05), not on the field floor — the inset shadow
   carries the recess, so the fill needn't go all the way dark. */
html[data-theme-mode="dark"] {
  --island-fill: color-mix(in oklab, var(--theme-surface) 88%, var(--theme-ink) 12%);
  --island-edge: color-mix(in oklab, var(--theme-surface) 80%, white 8%);
  --shadow-1: rgba(0, 0, 0, 0.55);
  --shadow-2: rgba(0, 0, 0, 0.40);
  /* The press delta needs the same treatment as --shadow-1/-2: a low-lightness
     surface needs a stronger shadow to read at all. The well planes need NO
     override — they derive from --well-recess via `oklab(from ...)`, which
     resolves lazily and tracks this mode's fill on its own. */
  --state-pressed: inset 0 1px 2px rgba(0, 0, 0, 0.45);
}
</style>
