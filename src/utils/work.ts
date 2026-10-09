import { creative } from '../data/creative';
import { projects } from '../data/projects';
import type { Work } from '../types/work';

const allWork: Work[] = [...projects, ...creative];

export function getWorkBySlug(slug: string): Work | undefined {
  return allWork.find((w) => w.slug === slug);
}

export function allWorkSlugs(): string[] {
  return allWork.map((w) => w.slug);
}

export function isCreative(slug: string): boolean {
  return creative.some((w) => w.slug === slug);
}

export function featuredProjects(limit = 6): Work[] {
  const f = projects.filter((p) => p.featured);
  return (f.length ? f : projects).slice(0, limit);
}

export function featuredCreative(limit = 6): Work[] {
  const f = creative.filter((c) => c.featured);
  return (f.length ? f : creative).slice(0, limit);
}
