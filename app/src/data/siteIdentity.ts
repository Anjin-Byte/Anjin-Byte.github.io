// Who the site is about, and how it describes itself to machines.
//
// Split out of `profile.ts` for ONE structural reason: this module has zero
// imports, so `vite.config.ts` can import it at build time to inject the
// document title, description, Open Graph and Twitter tags into index.html.
// `profile.ts` cannot be imported there — it pulls in `@mdi/js` and `.webp`
// asset imports that only resolve inside the app pipeline.
//
// That keeps the single-source-of-truth promise honest. Hand-writing the name,
// tagline and bio into index.html would have created a second copy of the same
// copy, silently drifting the moment the bio is edited — the exact failure this
// repo keeps designing out. `profile.ts` re-exports `profile`, so every existing
// consumer is unchanged.

export const profile = {
  name: 'Taylor Hale',
  tagline: 'Engineer  ·  Designer  ·  Tinkerer',
  bio:
    'I build careful software: graphics systems, codegen tools, ' +
    'integration work on short delivery cycles. My background spans ' +
    'computer vision research, contract engineering, and full-stack web ' +
    'development. I\'m chasing elegance where low-level detail and ' +
    'high-level design meet. At least once.',
  location: 'Bentonville, AR',
  email: 'hale.taylor.dev@gmail.com',
  phone: '(615) 681-3779',
  github: 'https://github.com/Anjin-Byte',
  linkedin: 'https://linkedin.com/in/bits-for-bread',
};

/** Absolute origin, no trailing slash. Required: Open Graph rejects relative
 *  `og:image` / `og:url`, so every injected URL is built from this. */
export const siteUrl = 'https://anjin-byte.github.io';

/** Browser-tab and search-result title.
 *  Uses a middle dot, not an em-dash — site-wide content rule. */
export const siteTitle = 'Taylor Hale · Engineer, Designer, Tinkerer';

/** Search-snippet and unfurl description.
 *  Written separately from `bio` rather than truncated from it: `bio` is ~290
 *  characters of first-person prose and search engines cut around 155, which
 *  would clip it mid-sentence. Same voice, same claims, sized for the slot.
 *  No em-dashes. */
export const siteDescription =
  'Taylor Hale builds careful software: graphics systems, codegen tools, and '
  + 'integration work on short delivery cycles. Based in Bentonville, AR.';

/** 1200x630 social card in `public/`. Sources + regeneration: `app/brand/`. */
export const ogImagePath = '/og-card.png';
