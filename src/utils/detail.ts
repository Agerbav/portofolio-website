import { creative } from '../data/creative';
import { projects } from '../data/projects';
import type { Detail } from '../types/detail';

const allWork: Detail[] = [...projects, ...creative];

export function getDetailBySlug(slug: string): Detail | undefined {
  return allWork.find((w) => w.slug === slug);
}

export function allDetailSlugs(): string[] {
  return allWork.map((w) => w.slug);
}

export function isCreative(slug: string): boolean {
  return creative.some((w) => w.slug === slug);
}

export function featuredProjects(limit = 6): Detail[] {
  const f = projects.filter((p) => p.featured);
  return (f.length ? f : projects).slice(0, limit);
}

export function featuredCreative(limit = 6): Detail[] {
  const f = creative.filter((c) => c.featured);
  return (f.length ? f : creative).slice(0, limit);
}
