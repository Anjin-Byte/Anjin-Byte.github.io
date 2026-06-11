---
title: The lightness of a cut edge
date: 2026-05-15
summary: Why the paper edges are a perceptual lightness delta in OKLab, and how one number tunes the whole system across both themes.
tags: [design, color, math]
---

Every surface here is a sheet of paper, and every edge is a *cut* — a lit lip on
top, a shadowed one beneath. The trick is that the edge isn't a fixed colour.
It's a **lightness delta** measured from the paper's own fill, in OKLab.

## Why OKLab

In OKLab the $L$ axis is built to be perceptually uniform: a step of
$\Delta L = 0.05$ reads as the same lightness change whether the paper is
near-white ($L \approx 0.98$) or charcoal ($L \approx 0.18$). That's the property
sRGB lacks, and it's exactly what an edge needs to look identical in both themes.

The lit and shadowed lips are simply

$$
L_{\text{lip}}^{\pm} = \operatorname{clamp}\!\left(L_{\text{fill}} \pm \Delta L,\; 0,\; 1\right),
$$

with a single knob $\Delta L = 0.05$ driving every edge in the system.

## In CSS

Relative-colour syntax lets the browser do the OKLab arithmetic at paint time —
no precomputed palette, no two-theme duplication:

```css
--island-lip:
  inset 0  1px 0 oklab(from var(--island-fill) calc(l + var(--cut)) a b),
  inset 0 -1px 0 oklab(from var(--island-fill) calc(l - var(--cut)) a b);
```

## A note on contrast

Text is tuned the same way. Weber's law says perceived contrast scales with the
*ratio* of luminances,

$$
C = \frac{\Delta L}{L_{\text{bg}}},
$$

so the dark theme needs a slightly larger gap between ink tiers to feel as
separated as the light one — which is why the tertiary ink is bumped from $0.54$
to $0.60$ in the dark palette rather than left to match.
