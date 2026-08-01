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

// Address parts are the source; the display string is derived from them, so the
// structured-data `PostalAddress` and the visible "Bentonville, AR" can never
// disagree about where this person is.
const locality = 'Bentonville';
const region = 'AR';

export const profile = {
  name: 'Taylor Hale',
  // The GitHub handle, stated as a name rather than only as a URL. It is the one
  // search term for this person with no competition, so `Person.alternateName`
  // is where the entity gets its unambiguous label.
  alternateName: 'Anjin-Byte',
  // Schema.org `Person.jobTitle`. `tagline` is voice, not a job title, so the
  // structured-data value is stated separately rather than parsed out of it.
  jobTitle: 'Software Engineer',
  tagline: 'Engineer  ·  Designer  ·  Tinkerer',
  // Hero paragraph. Written for a general reader (a hiring manager outside
  // graphics), not for a specialist. The range across three unrelated domains is
  // the signal. Depth is left for Projects and Resume to prove.
  //
  // Style rules, applied deliberately: short declarative sentences, active
  // voice, no metrics, no adjective claims. Earlier drafts used a
  // "Different fields, same job:" setup with a three-part list after the colon.
  // Balanced constructions like that one read as machine-written. Keep the
  // sentences plain and uneven.
  bio:
    'I\'ve worked in a university computer vision lab, on enterprise data ' +
    'integration, and on GPU software for a federally funded program developing ' +
    '3D-printed respirator filters. I led the geometry pipeline behind the ' +
    'filters. Most of my work starts out underspecified but I help define the problem(s) and ' +
    'deliver on schedule...mostly. Away from work I like to draw and sculpt. I love the work ' +
    'that goes into building digital environments, and lately the tools for making them.',
  locality,
  region,
  country: 'US',
  location: `${locality}, ${region}`,
  email: 'hale.taylor.dev@gmail.com',
  phone: '(615) 681-3779',
  github: 'https://github.com/Anjin-Byte',
  linkedin: 'https://linkedin.com/in/bits-for-bread',
};

export interface SkillGroup {
  label: string;
  items: string[];
}

// Lives here rather than in `profile.ts` for the same reason `profile` does: the
// build imports it (JSON-LD `Person.knowsAbout`), and `profile.ts` pulls in
// `@mdi/js` + `.webp` assets that only resolve inside the app pipeline.
// `profile.ts` re-exports it, so the Hero is unchanged.
export const skills: SkillGroup[] = [
  { label: 'Languages',           items: ['Rust', 'TypeScript', 'Python', 'Java', 'C/C++', 'JavaScript', 'SQL'] },
  { label: 'Frameworks & Libraries', items: ['WebGPU', 'WGSL', 'WebAssembly', 'Three.js', 'Svelte', 'Vue', 'React', 'Tauri', 'PyTorch', 'CUDA', 'OpenCV', 'Detectron2', 'Pydantic'] },
  { label: 'Tools & Platforms',   items: ['Git', 'Docker', 'FFmpeg', 'Vite', 'Excel', 'Google Cloud APIs (Drive, Workspace)'] },
];

export interface Education {
  degree: string;
  school: string;
  field: string;
  location: string;
  dates: string;
  focus?: string;
}

// Here rather than in `profile.ts` for the same build-import reason as `skills`:
// JSON-LD `Person.alumniOf` derives from `education[0].school`, so the school the
// Resume renders and the school search is told about are one value, not two.
export const education: Education[] = [
  {
    degree: 'BA',
    school: 'University of Arkansas',
    field: 'Computer Science',
    location: 'Fayetteville, AR',
    dates: 'Graduated 2024',
    focus: 'GPGPU Programming',
  },
];

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
  'Taylor Hale is a software engineer working across computer vision, data '
  + 'integration, and GPU systems. Based in Bentonville, AR.';

/** 1200x630 social card in `public/`. Sources + regeneration: `app/brand/`. */
export const ogImagePath = '/og-card.png';
