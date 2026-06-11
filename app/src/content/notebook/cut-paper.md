---
title: Cut and laid
date: 2026-06-11
summary: How the site's surfaces stopped pretending to be glass and became sheets of paper, cut and laid on the grid.
tags: [design, css]
---

The surfaces here used to be frosted glass — `backdrop-filter`, a floaty drop
shadow, the whole 2020 aesthetic. It read as *clever but tacky*, and worse, it
fought the one thing the site is actually about: an engineering notebook.

So we tore the glass out and rebuilt every panel as **a sheet of paper, cut and
laid** on the graph-paper field. The metaphor turned out to be generative —
every later decision fell out of it.

## The rules that followed

- **Edges are cuts, not strokes.** A hairline plus a 1px lit top lip; no glows,
  no blur. The cut catches the light.
- **Depth is a layered penumbra** — a tight contact shadow and a soft cast,
  dropped straight down (light from above), never diagonal.
- **Matte, opaque stock.** The living grid breathes in the gaps *between* sheets,
  not behind them.

## The one trick worth remembering

The cut edge is expressed as a perceptual lightness delta, derived from the
sheet's own fill, so both themes get the same edge and the clamp handles the
asymmetry for free:

```css
--island-lip:
  inset 0  1px 0 oklab(from var(--island-fill) calc(l + var(--cut)) a b),
  inset 0 -1px 0 oklab(from var(--island-fill) calc(l - var(--cut)) a b);
```

One knob — `--cut` — tunes every edge in the system.
