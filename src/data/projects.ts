import type { Work } from '../types/work';

/**
 * ────────────────────────────────────────────────────────────
 *  ADD A PROJECT = APPEND ONE OBJECT BELOW.
 *  No component or route edits needed. The grid, the home
 *  preview, and /work/<slug> all pick it up automatically.
 * ────────────────────────────────────────────────────────────
 */
export const projects: Work[] = [
  {
    slug: 'ledgerly',
    title: 'Ledgerly',
    tagline: 'Offline-first expense tracker for freelancers',
    description:
      'Built with Expo and SQLite. Syncs when online, queues mutations when not. Moved hydration off the JS thread and cut cold-start from 1.8s to 400ms.',
    year: 2026,
    tags: ['Expo', 'React Native', 'SQLite'],
    featured: true,
    status: 'shipped',
  },
  {
    slug: 'pulse-dashboard',
    title: 'Pulse',
    tagline: 'Realtime dashboard for IoT sensor fleets',
    description:
      'WebSocket ingest with a canvas-rendered chart layer. Holds 60fps with 4,000 live data points on screen.',
    year: 2025,
    tags: ['React', 'WebSockets', 'Canvas'],
    featured: true,
    status: 'shipped',
  },
  {
    slug: 'binus-course-planner',
    title: 'Course Planner',
    tagline: 'Timetable builder for BINUS students',
    description:
      'Conflict-aware scheduler with drag-and-drop. Used by a few hundred students each semester.',
    year: 2025,
    tags: ['Next.js', 'TypeScript', 'Postgres'],
    featured: true,
    status: 'shipped',
  },
  {
    slug: 'kilat',
    title: 'Kilat',
    tagline: 'Minimal CLI for scaffolding Expo apps',
    description:
      'One command, sane defaults: router, theme tokens, typed routes, and a data folder wired up.',
    year: 2024,
    tags: ['Node', 'CLI', 'Expo'],
    status: 'shipped',
  },
  {
    slug: 'warung-map',
    title: 'Warung Map',
    tagline: 'Crowd-sourced map of late-night food in Jakarta',
    description:
      'Map-first mobile app. Offline tile cache, and a lightweight moderation queue for submissions.',
    year: 2024,
    tags: ['React Native', 'Maps', 'Supabase'],
    status: 'wip',
  },
  {
    slug: 'type-lab',
    title: 'Type Lab',
    tagline: 'Browser playground for variable fonts',
    description:
      'Live axis scrubbing for variable fonts, with a shareable URL for every configuration.',
    year: 2023,
    tags: ['Svelte', 'Fonts', 'Web'],
    status: 'archived',
  },
];
