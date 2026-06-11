---
title: Easing the camera
date: 2026-06-10
summary: The whole navigation runs on one line of exponential smoothing — here's the math, and why it's quietly frame-rate fragile.
tags: [math, animation]
---

Every "page" on this site is a camera move across one continuous plane. The move
itself is the simplest smoothing there is: each frame, step a fixed fraction of
the remaining distance toward the target.

## One line of math

Let $p_n$ be the camera position at frame $n$ and $t$ the target. The update is

$$
p_{n+1} = p_n + \alpha\,(t - p_n), \qquad 0 < \alpha < 1.
$$

The remaining distance $d_n = t - p_n$ shrinks geometrically:

$$
d_{n+1} = (1 - \alpha)\,d_n \;\Longrightarrow\; d_n = (1-\alpha)^n\,d_0 .
$$

So convergence is exponential, and the camera never *quite* arrives — it crosses
a settle threshold $\varepsilon$ and we snap the final sliver:

$$
n_{\text{settle}} = \left\lceil \frac{\ln(\varepsilon / d_0)}{\ln(1 - \alpha)} \right\rceil .
$$

With $\alpha = 0.18$, a full-viewport hop settles in well under half a second.

## The catch: frames aren't time

That update assumes a *fixed* step. At 120 Hz it runs twice as often as at
60 Hz, so the same $\alpha$ eases **twice as fast** on a ProMotion display. The
honest fix replaces the per-frame factor with a per-*second* one:

$$
\alpha_{\Delta t} = 1 - (1 - \alpha)^{\,\Delta t \cdot 60}.
$$

Here's the current (frame-based) core:

```ts
export function stepCamera(cur: Camera, target: Camera, ease: number): Camera {
  return {
    x: cur.x + (target.x - cur.x) * ease,
    y: cur.y + (target.y - cur.y) * ease,
    zoom: cur.zoom + (target.zoom - cur.zoom) * ease,
  };
}
```

One day that `ease` becomes a function of $\Delta t$. Today it's a constant — and
the constant is a small lie that mostly works.
