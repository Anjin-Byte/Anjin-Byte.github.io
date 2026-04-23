// Single source of truth for the portfolio's content.
// Sections import from here so content edits don't sprawl across components.

export interface ContactLink {
  label: string;
  icon: string;   // MDI name
  href: string;
  display?: string; // override text shown alongside icon
}

export const profile = {
  name: 'Taylor Hale',
  tagline: 'Systems Engineer · Rust · WebAssembly · TypeScript',
  bio:
    'I build systems-level software — WebGPU renderers, data pipelines, and ' +
    'prototype AI tooling — with a focus on clean abstraction and code that ' +
    'actually works. My background spans computer vision research, contract ' +
    'engineering, and full-stack web development.',
  location: 'Bentonville, AR',
  email: 'hale.taylor.dev@gmail.com',
  phone: '(615) 681-3779',
  github: 'https://github.com/Anjin-Byte',
  linkedin: 'https://linkedin.com/in/bits-for-bread',
};

export const contactLinks: ContactLink[] = [
  { label: 'Location',  icon: 'mdi-map-marker-outline', href: 'https://maps.google.com/?q=Bentonville,+AR', display: profile.location },
  { label: 'Email',     icon: 'mdi-email-outline',      href: `mailto:${profile.email}`,                    display: profile.email },
  { label: 'Phone',     icon: 'mdi-phone-outline',      href: `tel:${profile.phone.replace(/[^\d+]/g, '')}`,display: profile.phone },
  { label: 'GitHub',    icon: 'mdi-github',             href: profile.github,                               display: 'Anjin-Byte' },
  { label: 'LinkedIn',  icon: 'mdi-linkedin',           href: profile.linkedin,                             display: 'bits-for-bread' },
];

// ── Skills ──────────────────────────────────────────────────────────────────

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Languages',           items: ['Python', 'Java', 'Rust', 'C/C++', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Frameworks & Libraries', items: ['PyTorch', 'Pydantic', 'CUDA', 'OpenCV', 'Detectron2', 'React', 'Vue', 'OpenGL / WebGPU'] },
  { label: 'Tools & Platforms',   items: ['Git', 'Docker', 'FFmpeg', 'Google Cloud APIs'] },
];

// ── Projects / demos ────────────────────────────────────────────────────────

export type ProjectLinkKind = 'demo' | 'source' | 'writeup' | 'video' | 'docs';

export interface ProjectLink {
  kind: ProjectLinkKind;
  href: string;
}

export interface Project {
  title: string;
  blurb: string;
  tech: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: 'SM83 Emulator',
    blurb:
      'An SM83 CPU disassembler and emulator — translating Game Boy binaries ' +
      'into readable assembly and a custom microcode format, rendered with a ' +
      'WebGL2 LCD-substrate shader for material-grain authenticity.',
    tech: ['Rust', 'WASM', 'WebGL2', 'Svelte', 'TypeScript'],
    links: [
      { kind: 'demo', href: 'https://anjin-byte.github.io/fragile-canvas/' },
      { kind: 'source', href: 'https://github.com/Anjin-Byte/fragile-canvas' },
    ],
  },
  {
    title: 'Anjin-Byte.github.io',
    blurb:
      'This site. Conway\'s Game of Life running as a WebGPU-rendered ' +
      'engineering-paper background, with a theme system parameterized in OKLab.',
    tech: ['Rust', 'WebGPU', 'WASM', 'Vue 3', 'TypeScript', 'WGSL'],
    links: [
      // Intentionally no `demo` link — you're already on it.
      { kind: 'source', href: 'https://github.com/Anjin-Byte/Anjin-Byte.github.io' },
    ],
  },
  {
    title: 'Gestalt',
    blurb:
      'A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.',
    tech: ['Rust', 'WASM', 'WebGPU', 'Svelte 5'],
    links: [
      { kind: 'demo', href: 'https://anjin-byte.github.io/Gestalt/' },
      { kind: 'source', href: 'https://github.com/Anjin-Byte/Gestalt' },
    ],
  },
  {
    title: 'Adaptive Ray Tracer',
    blurb:
      'A first-principles ray tracer based on "Ray Tracing in One Weekend," ' +
      'extended with entropy-based heuristics that dynamically adjust sample ' +
      'density for rendering efficiency.',
    tech: ['C++', 'Rendering'],
    links: [
      { kind: 'source', href: 'https://github.com/Anjin-Byte/shiny-parakeet' },
    ],
  },
  {
    title: 'SIBR SDF Lattice Generator',
    blurb:
      'A Rust API for generating printable lattice meshes via SDF. Supports ' +
      'cubic, Kelvin, and BccXy unit cells; produces STL through a ' +
      'marching-cubes pipeline with Taubin smoothing and optional QEM decimation.',
    tech: ['Rust', 'SDF', 'Marching Cubes', 'Mesh Processing'],
    links: [
      { kind: 'demo', href: 'https://anjin-byte.github.io/WoodwardFormanLatticeGen/' },
      { kind: 'source', href: 'https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator' },
    ],
  },
  {
    title: 'Heightfield Filters',
    blurb:
      'A Rust image-processing suite for terrain heightfields — hexagonal-' +
      'kernel aggregation, Sobel/Prewitt edge detection, and extraction of ' +
      'structural lines (crests, thalwegs, convex/concave ridges) from raw ' +
      '.r32 elevation rasters. Parallelized with Rayon.',
    tech: ['Rust', 'Image Processing', 'Terrain Analysis', 'Rayon'],
    links: [
      { kind: 'source', href: 'https://github.com/Anjin-Byte/probable-eureka' },
    ],
  },
  {
    title: 'Schmith',
    blurb:
      'A Python CLI that generates C# DataObjects from API specifications. ' +
      'Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation ' +
      'with stable, reproducible output and partial regeneration that ' +
      'preserves downstream hand-edits as specs evolve.',
    tech: ['Python', 'C#', 'LLM', 'Anthropic', 'OpenAI', 'CLI'],
    links: [
      { kind: 'source', href: 'https://github.com/Anjin-Byte/Schmith' },
    ],
  },
];

// ── Experience ──────────────────────────────────────────────────────────────

export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  tech?: string[];
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: 'Dispatcher · NW: Nationwide Service & Projects',
    company: 'Wachter, Inc.',
    location: 'Bentonville, AR',
    dates: 'Nov 2025 – Present',
    highlights: [
      'Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.',
      'Act as central coordination point between project managers, field technicians, and clients — translating job requirements into execution and closing communication gaps.',
      'Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables.',
    ],
  },
  {
    role: 'Contract Developer — XChange Connector Engineering',
    company: 'Pipeline Data Services',
    location: 'Remote',
    dates: 'Sep 2025 – Present',
    tech: ['C#', '.NET', 'XChange SDK', 'REST', 'Python'],
    highlights: [
      'Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble\'s App Xchange platform.',
      'Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects — reducing T&E cycles by 45%.',
    ],
  },
  {
    role: 'AI Systems Developer — SBIR Phase I Prototype',
    company: 'Brynhild Industries',
    location: 'Washington, DC · Remote',
    dates: 'Feb 2024 – Apr 2025',
    tech: ['Python', 'Pydantic', 'anytree', 'OpenAI API'],
    highlights: [
      'Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.',
      'Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows.',
    ],
  },
  {
    role: 'Data Collection & Model Training',
    company: 'UARK Computer Vision & Image Understanding Lab',
    location: 'Fayetteville, AR',
    dates: 'Jul 2023 – Jun 2024',
    tech: ['Python', 'OpenCV', 'FFmpeg', 'Detectron2', 'PyTorch'],
    highlights: [
      'Engineered an end-to-end video-to-training pipeline — ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards — producing model-ready training data for gait-recognition research.',
    ],
  },
  {
    role: 'Graduate Research Assistant',
    company: 'UARK Computer Vision & Image Understanding Lab',
    location: 'Fayetteville, AR',
    dates: 'Aug 2021 – Feb 2022',
    highlights: [
      'Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification — targeting early-warning systems for agricultural pest outbreaks.',
    ],
  },
  {
    role: 'Internship',
    company: 'Daybright Financial',
    location: 'Brentwood, TN · Chennai, India',
    dates: 'Apr 2021 – May 2022',
    highlights: [
      'Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients.',
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  field: string;
  location: string;
  dates: string;
  focus?: string;
}

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
