---
title: Bitpacking a million cells
date: 2026-05-28
summary: The Game of Life world is a 1024×1024 bit array. Here's how the cells pack, and how a neighbour count falls out of it.
tags: [rust, webgpu]
---

The background world is $1024 \times 1024 = 2^{20}$ cells — just over a million.
Stored one bit per cell that's 128 KiB; stored as bytes it'd be eight times that.
At a million cells the constant factor *is* the game.

## Packing

Each row of 1024 cells is 16 `u64` words. Cell $(x, y)$ lives in bit
$x \bmod 64$ of word $\lfloor x / 64 \rfloor$ in row $y$:

```rust
#[inline]
fn get(&self, x: usize, y: usize) -> bool {
    let word = self.cells[y * WORDS_PER_ROW + (x >> 6)];
    (word >> (x & 63)) & 1 == 1
}
```

The `x >> 6` and `x & 63` are exactly $\lfloor x/64 \rfloor$ and $x \bmod 64$ —
the compiler knows it, but it's worth seeing the arithmetic under the bit-twiddle.

## Counting neighbours

A cell's next state depends on its eight neighbours. The packed form can count a
whole word at a time, but the readable definition is just

$$
n(x,y) = \sum_{\substack{dx,\,dy \,\in\, \{-1,0,1\} \\ (dx,dy)\,\neq\,(0,0)}} \operatorname{cell}(x + dx,\; y + dy),
$$

and the rule itself is the classic $B3/S23$:

```rust
let alive = self.get(x, y);
let next = matches!((alive, n), (true, 2) | (_, 3));
```

> A live cell with two or three neighbours survives; a dead cell with exactly
> three is born. Everything else dies. Three integers of state, a universe of
> behaviour.

The GPU runs this over the whole grid in a compute pass in ~0.01 ms — the
simulation was never the expensive part. (The *seeding* is. But that's another note.)
