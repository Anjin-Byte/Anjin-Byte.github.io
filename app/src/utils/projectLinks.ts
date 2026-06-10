import {
  mdiPlayCircleOutline,
  mdiGithub,
  mdiTextBoxOutline,
  mdiFileDocumentOutline,
} from '@mdi/js';
import type { Project, ProjectLink, ProjectLinkKind } from '../data/profile';

export type ProjectCardVariant = 'featured' | 'compact';

export interface ResolvedProjectLink extends ProjectLink {
  ariaLabel: string;
  icon: string;
  label: string;
  priority: number;
}

const projectLinkMeta = {
  demo: {
    ariaLabel: 'Live demo',
    icon: mdiPlayCircleOutline,
    label: 'Demo',
    priority: 0,
  },
  source: {
    ariaLabel: 'GitHub repository',
    icon: mdiGithub,
    label: 'Source',
    priority: 1,
  },
  writeup: {
    ariaLabel: 'Project writeup',
    icon: mdiTextBoxOutline,
    label: 'Writeup',
    priority: 2,
  },
  video: {
    ariaLabel: 'Project video',
    icon: mdiPlayCircleOutline,
    label: 'Video',
    priority: 3,
  },
  docs: {
    ariaLabel: 'Project documentation',
    icon: mdiFileDocumentOutline,
    label: 'Docs',
    priority: 4,
  },
} satisfies Record<ProjectLinkKind, Omit<ResolvedProjectLink, 'href' | 'kind'>>;

function sortByPriority(a: ProjectLinkKind, b: ProjectLinkKind) {
  return projectLinkMeta[a].priority - projectLinkMeta[b].priority;
}

export function resolveProjectLinks(project: Project): ResolvedProjectLink[] {
  return [...(project.links ?? [])]
    .sort((a, b) => sortByPriority(a.kind, b.kind))
    .map((link) => ({
      ...link,
      ...projectLinkMeta[link.kind],
    }));
}

export function getProjectVisibleLinks(
  project: Project,
  variant: ProjectCardVariant,
): ResolvedProjectLink[] {
  const links = resolveProjectLinks(project);
  return variant === 'featured' ? links : links.slice(0, 2);
}

export function getProjectPrimaryLink(project: Project): ResolvedProjectLink | undefined {
  return getProjectVisibleLinks(project, 'compact')[0];
}
