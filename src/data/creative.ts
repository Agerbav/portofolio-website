import type { Work } from '../types/work';

/**
 * Same shape as projects.ts — but a separate list, because
 * the Creative section is a different collection visually
 * and conceptually. Add a piece by appending one object.
 */
export const creative: Work[] = [
  {
    slug: 'poster-series-01',
    title: 'Poster Series 01',
    tagline: '12-piece typographic set',
    description:
      'A year-long study in grid-breaking type. Printed on risograph, one color per run.',
    year: 2025,
    tags: ['Type', 'Print'],
    featured: true,
  },
  {
    slug: 'motion-studies',
    title: 'Motion Studies',
    tagline: 'Short loops exploring easing',
    description:
      'Twenty 3-second loops, each built around a single easing curve. Published weekly for five months.',
    year: 2025,
    tags: ['Motion', 'After Effects'],
    featured: true,
  },
  {
    slug: 'night-market',
    title: 'Night Market',
    tagline: 'Photo essay, Jakarta 2024',
    description:
      'Forty frames shot over six weekends in Glodok and Blok M.',
    year: 2024,
    tags: ['Photography'],
    featured: true,
  },
  {
    slug: 'brand-kopi',
    title: 'Kopi Brand',
    tagline: 'Identity for a small-batch roaster',
    description:
      'Logo, packaging, and a two-color system that holds up on kraft paper.',
    year: 2024,
    tags: ['Identity', 'Packaging'],
  },
  {
    slug: 'generative-grids',
    title: 'Generative Grids',
    tagline: 'P5 sketches on 4×4 modules',
    description:
      'A small library of generative sketches, each constrained to a 4×4 grid.',
    year: 2023,
    tags: ['p5.js', 'Generative'],
  },
  {
    slug: 'sketchbook',
    title: 'Sketchbook',
    tagline: 'Daily drawings, scanned',
    description:
      '365 days of one drawing per day. Scanned, unedited, uploaded as-is.',
    year: 2023,
    tags: ['Drawing'],
  },
];
