---
title: "Lorem ipsum: lists & nesting"
date: 2026-06-11
summary: A stress page for nested lists, mixed ordered/unordered structures, and list items that carry paragraphs, quotes, and code.
tags: [lorem, lists]
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.

## Unordered, three levels deep

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo:

- Lorem ipsum dolor sit amet, with `inline_code()` and *emphasis* mixed in.
- Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
  - Nested item one: ut labore et dolore magna aliqua with **strong** text.
  - Nested item two: ut enim ad minim veniam, quis nostrud.
    - Third level: quis nostrud exercitation ullamco laboris nisi ut aliquip.
    - Third level again, and this one runs deliberately long so we can see how a deeply nested list item wraps across several lines and whether the marker stays put relative to the hanging indent of the wrapped text.
  - Back to the second level after the third.
- Duis aute irure dolor in reprehenderit in voluptate velit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.

## Ordered, with rich items

1. Primum: lorem ipsum dolor sit amet.
2. Secundum: consectetur adipiscing elit, sed do eiusmod.
3. Tertium, carrying a nested unordered list:
   - sub-point alpha, short
   - sub-point beta, long enough to wrap onto a second line within the item
4. Quartum: a list item that contains a whole second paragraph.

   This is a second paragraph inside the fourth list item. Lorem ipsum dolor sit
   amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

5. Quintum: a list item with a blockquote inside it.

   > Lorem ipsum dolor sit amet, a quotation nested within a list item, which is
   > a layout combination worth checking carefully.

6. Sextum: a list item with embedded code.

   ```ts
   const item = "lorem ipsum";
   ```

7. Septimum.
8. Octavum.
9. Nonum.
10. Decimum: note where the two-digit marker sits against the single-digit ones.

### Mixed ordered and unordered nesting

1. Ordered outer item one.
   - Unordered inner.
     1. Ordered, two levels deep inside an unordered list.
     2. Another deep ordered item that wraps a little to test alignment here too.
   - Back to the unordered level.
2. Ordered outer item two.

A list immediately followed by a heading, with no paragraph between them:

- last item alpha
- last item beta

## Heading directly after a list

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
error sit voluptatem accusantium doloremque laudantium.
