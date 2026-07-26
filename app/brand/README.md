# brand/

SVG **sources** for the raster assets in `public/`. Not served and not imported
by the app: these exist so the icons and the social card can be regenerated
rather than being opaque binaries nobody can edit.

| source | output | size |
|---|---|---|
| `../public/favicon.svg` | `../public/favicon-32.png` | 32×32 |
| `apple-touch-icon.svg` | `../public/apple-touch-icon.png` | 180×180 |
| `og-card.svg` | `../public/og-card.png` | 1200×630 |

`favicon.svg` lives in `public/` instead of here because it is **served
directly** as the primary favicon (browsers prefer the vector); the PNG is only
a fallback for clients that do not take SVG favicons.

## Regenerating

Render with **headless Chrome**, not `qlmanage`.

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
# wrap the SVG in an exactly-sized page so the screenshot has no padding
cat > /tmp/card.html <<EOF
<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
svg{display:block}
</style></head><body>$(cat og-card.svg)</body></html>
EOF
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --screenshot=../public/og-card.png file:///tmp/card.html
```

Icons are the same recipe with a square `--window-size` and a matching
`width`/`height` on the wrapper.

### Why not `qlmanage`

macOS ships `qlmanage -t`, which *looks* like a working SVG rasteriser and is
tempting because it needs no install. It has two failure modes that both pass
silently:

1. **It drops `<text>` entirely.** The first render of `og-card.png` came out as
   grid-and-glider with no name, tagline, or domain, at a plausible file size.
   Nothing errored.
2. **It fits to a square bounding box**, so a 1200×630 source renders into
   1200×1200 with padding and the content offset, which a centred crop does not
   recover.

Headless Chrome renders the same engine the site targets, with real fonts. If
you change these, **open the PNG and look at it** before committing.

## Design notes

The mark is a Game-of-Life **glider**: the background simulation reduced to its
smallest recognisable form. Five cells with a 1px gutter is the most restraint
that still resolves at 16px in a browser tab.

Colours are the real theme endpoints from `src/types/theme.ts` (light surface
`#fafaf8`, ink at L 0.28) and the card's grid uses the shader's own `minor_t`
0.08 / `major_t` 0.14 lerps, so the card is the page's palette rather than an
approximation. The card is light-only and the touch icon is light-only and
square-cornered: unfurl cards and iOS home-screen icons are not theme-aware, and
iOS applies its own corner mask.
