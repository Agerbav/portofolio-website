/**
 * One shared shape for BOTH the Projects grid and the Creative grid.
 * Add a new item by appending one object to src/data/projects.ts or
 * src/data/creative.ts — no component edits required.
 */
export type Detail = {
  /** URL-safe, unique. Becomes /work/<slug> */
  slug: string;
  title: string;
  /** One-line summary shown under the card title */
  tagline?: string;
  /** Full write-up shown on the detail page */
  description?: string;
  /** Remote URL string, or a `require('...')` number for local assets */
  thumbnail?: string | number;
  preview?: string | number;
  year: number;
  tags?: string[];
  links?: { label: string; url: string }[];
  /** If true, shows on the home page preview */
  featured?: boolean;
  status?: string;
};
