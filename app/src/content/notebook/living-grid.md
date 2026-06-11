---
title: A grid that's alive
date: 2026-05-20
summary: Why the background is a real Game of Life running on the GPU, and what it cost to make it pan with the page.
tags: [webgpu, rust]
---

The graph paper behind everything isn't an image — it's **Conway's Game of Life,
simulated and rendered on the GPU** in a Rust/WASM worker, with the cells drawn
as sponge-stamped ink on procedurally-shaded paper.

It started as decoration. It became the spine of the navigation.

## Pages are coordinates

The site is one continuous space. "Going to a page" animates a camera across a
plane, and the living grid pans in lockstep with it — the same `scroll_x` /
`scroll_y` uniform drives both the content and the cells.

That lockstep is the hard part. The DOM scrolls on the compositor; the canvas
renders in a worker on its own clock. Keeping them in phase meant frame-locking
the grid offset to the render, sampled fresh every frame.

## What's cheap and what isn't

A surprising amount of the budget goes to *seeding*, not rendering:

1. The fragment shader is ~2ms on a desktop GPU.
2. The simulation tick is effectively free.
3. Re-seeding the world with fresh patterns is the expensive part.

Atmosphere, it turns out, is more work than it looks.
