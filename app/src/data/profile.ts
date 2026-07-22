// Single source of truth for the portfolio's content.
// Sections import from here so content edits don't sprawl across components.

import {
  mdiMapMarkerOutline,
  mdiEmailOutline,
  mdiPhoneOutline,
  mdiGithub,
  mdiLinkedin,
} from '@mdi/js';

// Featured-project thumbnails. Vite resolves each import to a hashed asset URL.
// Served as WebP downscaled to 1400px wide (from source PNGs ~1.5-4.4 MB): the
// print renders at ~460px, so 1400px covers 2x retina while cutting ~97% of the
// bytes. Regenerate from the source PNGs with, e.g.:
//   cwebp -q 86 -m 6 -sharp_yuv -resize 1400 0 okra_hero.png -o okra_hero.webp
import okraThumb from '../assets/thumb/okra_hero.webp';
import gestaltThumb from '../assets/thumb/gestalt_hero.webp';

export interface ContactLink {
  label: string;
  icon: string; // MDI SVG path (from @mdi/js)
  href: string;
  display?: string; // override text shown alongside icon
}

/*
I build careful software: graphics systems, codegen tools, 
integration work on short delivery cycles. My background spans 
computer vision research, contract engineering, and full-stack web 
development. I'm chasing elegance where low-level detail and 
high-level design meet. At least once.
*/

export const profile = {
  name: 'Taylor Hale',
  tagline: 'Engineer\u00A0\u00A0·\u00A0\u00A0Designer\u00A0\u00A0·\u00A0\u00A0Tinkerer',
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

export const contactLinks: ContactLink[] = [
  { label: 'Location', icon: mdiMapMarkerOutline, href: 'https://maps.google.com/?q=Bentonville,+AR', display: profile.location },
  { label: 'Email',    icon: mdiEmailOutline,     href: `mailto:${profile.email}`,                     display: profile.email },
  { label: 'Phone',    icon: mdiPhoneOutline,     href: `tel:${profile.phone.replace(/[^\d+]/g, '')}`, display: profile.phone },
  { label: 'GitHub',   icon: mdiGithub,           href: profile.github,                                display: 'Anjin-Byte' },
  { label: 'LinkedIn', icon: mdiLinkedin,         href: profile.linkedin,                              display: 'bits-for-bread' },
];

// ── Skills ──────────────────────────────────────────────────────────────────

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Languages',           items: ['Rust', 'TypeScript', 'Python', 'Java', 'C/C++', 'JavaScript', 'SQL'] },
  { label: 'Frameworks & Libraries', items: ['WebGPU', 'WGSL', 'WebAssembly', 'Three.js', 'Svelte', 'Vue', 'React', 'Tauri', 'PyTorch', 'CUDA', 'OpenCV', 'Detectron2', 'Pydantic'] },
  { label: 'Tools & Platforms',   items: ['Git', 'Docker', 'FFmpeg', 'Vite', 'Excel', 'Google Cloud APIs (Drive, Workspace)'] },
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
  /** Core algorithms / data structures, named with standard CS vocabulary rather than this repo's internal names. Experimental: not yet populated for every project. */
  concepts?: string[];
  links?: ProjectLink[];
  /** Rendered as a full-width featured card instead of an index-grid entry. */
  featured?: boolean;
  /** Hashed asset URL for the featured card's thumbnail print. Featured cards only. */
  thumb?: string;
  /** Alt text for the thumbnail. Describe what the image shows, for screen readers. */
  thumbAlt?: string;
}

export const projects: Project[] = [
  {
    title: 'Okra',
    featured: true,
    thumb: okraThumb,
    thumbAlt: 'The Okra debugger workbench: disassembly, CPU and PPU registers, and a running Game Boy screen.',
    blurb:
      'A cycle-accurate Game Boy (DMG) emulator in Rust, built out into an ' +
      'in-browser debugger workbench: live disassembly, CPU/PPU/APU/memory ' +
      'panels, and a WebGL2 LCD-substrate shader for authentic screen texture. ' +
      'Passes Blargg\'s CPU accuracy suite and is growing into a light IDE for ' +
      'DMG development.',
    tech: ['Rust', 'WASM', 'WebGL2', 'Svelte', 'TypeScript'],
    concepts: [
      'Finite-state machine emulation',
      'Instruction decode/dispatch',
      'ISA assembler/disassembler codec',
    ],
    links: [
      { kind: 'demo', href: 'https://anjin-byte.github.io/okra-emu/' },
      { kind: 'source', href: 'https://github.com/Anjin-Byte/okra-emu' },
    ],
  },
  {
    title: 'Gestalt',
    featured: true,
    thumb: gestaltThumb,
    thumbAlt: 'A voxel-rendered Japanese street scene from Gestalt, lit with deferred GTAO.',
    blurb:
      'A GPU-resident renderer for a sparse voxel structure, ray-marched ' +
      'directly with no polygon mesh. It voxelizes real 3D models (glTF, OBJ, ' +
      'STL) on the GPU, then lets you sculpt the result live under deferred ' +
      'GTAO lighting.',
    tech: ['Rust', 'WASM', 'WebGPU', 'WGSL', 'TypeScript'],
    concepts: [
      'Sparse voxel octree traversal',
      'Morton (Z-order) encoding',
      'SAT-based mesh voxelization',
    ],
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
      'A Rust image-processing suite for terrain heightfields: hexagonal-' +
      'kernel aggregation, Sobel/Prewitt edge detection, and extraction of ' +
      'structural lines (crests, thalwegs, convex/concave ridges) from raw ' +
      '.r32 elevation rasters. Parallelized with Rayon.',
    tech: ['Rust', 'Image Processing', 'Terrain Analysis', 'Rayon'],
    links: [
      { kind: 'source', href: 'https://github.com/Anjin-Byte/probable-eureka' },
    ],
  },
  {
    title: 'Aether Sonde',
    blurb:
      'An Ethernet network simulator modeling the MAC data-link sublayer: ' +
      'signal propagation, CSMA/CD collision detection, and bridge relay across ' +
      'half-duplex, full-duplex, and bridged topologies. Rust core with WASM ' +
      'bindings and a typed TypeScript adapter.',
    tech: ['Rust', 'WASM', 'TypeScript', 'Network Simulation'],
    links: [
      { kind: 'source', href: 'https://github.com/Anjin-Byte/aether_sonde' },
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
    role: 'Software Engineer, Consultant',
    company: 'Brynhild Industries',
    location: 'Washington, DC · Remote',
    dates: 'Feb 2024 – Present',
    tech: ['Rust', 'Python', 'Pydantic'],
    highlights: [
      'Led development of the lattice-geometry generation pipeline for an SBIR program developing 3D-printable PFAS-free respirator filters for warfighter PM2.5 protection; cut peak resource usage 221×, runtime 7×, and scaled output capacity ~1,700× against prior approaches that hit scale or topology ceilings.',
      'Built an intake-and-routing system that transformed open-ended requests into structured, hierarchical workflows, enabling automated assignment to specialists.',
    ],
  },
  {
    role: 'Dispatcher · NW: Nationwide Service & Projects',
    company: 'Wachter, Inc.',
    location: 'Bentonville, AR',
    dates: 'Oct 2025 – Jun 2026',
    highlights: [
      'Coordinated nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.',
      'Managed full lifecycle of service tickets (creation, assignment, tracking, closeout) across multiple concurrent projects.',
    ],
  },
  {
    role: 'Contract Developer · XChange Connector Engineering',
    company: 'Pipeline Data Services',
    location: 'Remote',
    dates: 'Sep 2025 – Present',
    tech: ['C#', '.NET', 'XChange SDK', 'Postman', 'REST', 'Python'],
    highlights: [
      'Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble\'s App Xchange platform.',
      'Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects, reducing T&E cycles by 45%.',
    ],
  },
  {
    role: 'Senior Capstone · Data Collection & Model Training',
    company: 'UARK Computer Vision & Image Understanding Lab',
    location: 'Fayetteville, AR',
    dates: 'Jul 2023 – Jun 2024',
    tech: ['Python', 'OpenCV', 'FFmpeg', 'Detectron2', 'PyTorch'],
    highlights: [
      'Engineered an end-to-end video-to-training pipeline: ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards to produce model-ready training data for gait-recognition research.',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'UARK Computer Vision & Image Understanding Lab',
    location: 'Fayetteville, AR',
    dates: 'Aug 2021 – Feb 2022',
    highlights: [
      'Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification, targeting early-warning systems for agricultural pest outbreaks.',
    ],
  },
  {
    role: 'IT Internship',
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
