import type { Detail } from '../types/detail';

/**
 * Same shape as projects.ts — but a separate list, because
 * the Creative section is a different collection visually
 * and conceptually. Add a piece by appending one object.
 */
export const creative: Detail[] = [
  {
    slug: 'lnt-praetorian-backend',
    title: 'LnT Praetorian — Back End',
    tagline: 'Selected to teach Laravel to BNCC members',
    description:
      'Chosen as a Praetorian in BNCC\'s Learning & Training program. Taught backend fundamentals and Laravel over 12 sessions — routing, Eloquent, authentication, deployment.',
    year: 2025,
    tags: ['Teaching', 'Laravel', 'Community'],
    thumbnail: require('@/assets/creative/bncc.png'),
    preview: require('@/assets/creative/bncc.png'),
    featured: true,
  },
];
