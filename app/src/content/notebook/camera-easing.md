---
title: "Lorem ipsum: code & quotes"
date: 2026-06-10
summary: A stress page for code blocks (long lines, tiny blocks, unknown languages, consecutive blocks) and blockquotes (multi-paragraph, nested, containing lists and code).
tags: [lorem, code, blockquote]
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.

## Code blocks

A normal block:

```ts
function lorem(ipsum: string): number {
  // dolor sit amet
  return ipsum.length * 2;
}
```

A block with a very long line that cannot wrap and must scroll horizontally:

```ts
const veryLong = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud";
```

A one-liner:

```bash
echo "lorem ipsum"
```

Two consecutive blocks, different languages, back to back:

```rust
fn main() {
    println!("lorem ipsum");
}
```

```css
.lorem {
  color: var(--ipsum);
}
```

An unknown language (should still get a tab and render plainly):

```wgsl
@group(0) @binding(0) var<uniform> lorem: vec4<f32>;
```

## Blockquotes

A single-paragraph quote:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
> incididunt ut labore et dolore magna aliqua.

A multi-paragraph quote:

> First paragraph of the quotation. Lorem ipsum dolor sit amet, consectetur
> adipiscing elit.
>
> Second paragraph of the same quotation. Sed do eiusmod tempor incididunt ut
> labore et dolore magna aliqua.

A nested quote:

> Outer quote. Lorem ipsum dolor sit amet.
>
> > Nested quote inside it. Consectetur adipiscing elit, sed do eiusmod.

A quote containing a list:

> Lorem ipsum, with points:
>
> - alpha
> - beta

A quote containing code:

> As shown in the snippet below:
>
> ```js
> const x = "lorem";
> ```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

A paragraph dense with `inline.code()`, `more_code`, and `even.more(code)` spans
to see how repeated inline chips sit within a single line of prose.
