import type { Detail } from '../types/detail';

/**
 * ────────────────────────────────────────────────────────────
 *  ADD A PROJECT = APPEND ONE OBJECT BELOW.
 *  No component or route edits needed. The grid, the home
 *  preview, and /work/<slug> all pick it up automatically.
 * ────────────────────────────────────────────────────────────
 */
export const projects: Detail[] = [
  {
    slug: 'wspeedrun',
    title: 'WSpeedrun',
    tagline: 'Microservices backend for a speedrun submission platform',
    description:
      'Three NestJS services (auth, game, run) behind independently-verified JWTs, each owning its own Prisma/MariaDB schema. Run-service orchestrates the others over HTTP to resolve categories and runner profiles into sorted leaderboards, with an admin accept/reject verification workflow.',
    year: 2026,
    tags: ['NestJS', 'Prisma', 'MariaDB', 'Microservices', 'JWT'],
    featured: true,
    preview: require('@/assets/projects/wspeedrun/wspeedrun.gif'),
    thumbnail: require('@/assets/projects/wspeedrun/wspeedrun.png'),
    links: [{
      label: "Github", 
      url: "https://github.com/Agerbav/wspeedrun"
    status: 'School Project',
  },
  {
    slug: 'mediavault',
    title: 'MediaVault',
    tagline: 'Cross-media tracker for movies, games, books, and music',
    description:
      'Flutter app backed by an Express/Prisma API that normalizes TMDB, RAWG, OpenLibrary, and MusicBrainz into one catalog. A genre-mapping table cross-links media types, so "Because you like horror" recommends a movie, game, and book from the same mood — with every external item cached locally on first fetch.',
    year: 2026,
    tags: ['Flutter', 'Express', 'Prisma', 'MySQL', 'Riverpod'],
    featured: true,
    thumbnail: require('@/assets/projects/mediavault/mediavault.png'),
    preview: require('@/assets/projects/mediavault/mediavault.gif'),
    links: [{
      label: "Github", 
      url: "https://github.com/Agerbav/mediaVault"
    }],
    status: 'School Project',
  },
  {
    slug: 'mrcoffee',
    title: 'Mr. Coffee',
    tagline: 'Fictional coffee brand site built as a CSS playground',
    description:
      'Five hand-written HTML pages with no framework and no build step. The interesting part is the styling: an asymmetric bento grid for featured items, scroll-driven reveal animations tied to the viewport via animation-timeline, four panning tile backgrounds running on independent loops, and a menu filter that toggles visibility by class. Passes order data between pages through the URL hash.',
    year: 2026,
    tags: ['HTML', 'CSS', 'Vanilla JS'],
    featured: true,
    thumbnail: require('@/assets/projects/mrcoffee/mrcoffee.png'),
    preview: require('@/assets/projects/mrcoffee/mrcoffee.gif'),
    links: [{
      label: "Github", 
      url: "https://github.com/Agerbav/mrcoffee"
    }],
    status: 'School Project',
  },
  {
    slug: 'gacha-merch',
    title: 'Teyvat Market',
    tagline: 'Genshin weapon storefront with a transaction-safe checkout',
    description:
      'Flutter storefront over an Express/MySQL API. Email-password and Google OAuth sign-in, role-gated admin CRUD with image upload, and a checkout that locks weapon rows with SELECT ... FOR UPDATE before decrementing stock, so concurrent orders can\'t oversell. The server self-migrates an older schema on boot, converting a flat weapons.type string into a categories FK.',
    year: 2026,
    tags: ['Flutter', 'Express', 'MySQL', 'Provider', 'JWT'],
    featured: true,
    thumbnail: require('@/assets/projects/gachamerch/gachamerch.png'),
    preview: require('@/assets/projects/gachamerch/gachamerch.gif'),
    links: [{
      label: "Github", 
      url: "https://github.com/Agerbav/gacha_merch"
    }],
    status: 'School Project',
  },
  {
    slug: 'playhub',
    title: 'PlayHub',
    tagline: 'A GoF pattern catalogue disguised as a multiplayer game server',
    description:
      'NestJS backend implementing 11 design patterns across three board games — Tic-Tac-Toe, Chess, and Connect Four — with a Next.js 16 frontend synced over WebSocket. Session lifecycle is a real State machine, moves run through a Template Method, and game construction is abstracted behind per-game Factories. Ships with 18 Jest specs mapping one-to-one onto the patterns, plus an in-app architecture page that renders the whole diagram.',
    year: 2026,
    tags: ['NestJS', 'Next.js', 'Socket.io', 'TypeScript', 'Zustand'],
    featured: true,
    thumbnail: require('@/assets/projects/playhub/playhub.png'),
    preview: require('@/assets/projects/playhub/playhub.gif'),
    links: [{
      label: "Github", 
      url: "https://github.com/Jessssswill/PlayHub-SoftwareArchitecture"
    }],
    status: 'School Project',
  },
  {
    slug: 'pm25-predictor',
    title: 'PM2.5 Predictor',
    tagline: 'Air quality prediction with an LLM-written explanation layer',
    description:
      'FastAPI endpoint serving a scikit-learn model that predicts PM2.5 from five pollutant readings, date, and monitoring station. A vanilla JS frontend collects the inputs, routes them through Gemini for JSON normalization, posts to the model, then sends the prediction back through Gemini to generate a plain-language health advisory in Indonesian.',
    year: 2025,
    tags: ['FastAPI', 'scikit-learn', 'JavaScript', 'Gemini API'],
    featured: false,
    links: [{
      label: "Github", 
      url: "https://github.com/Agerbav/pm2.5-Predictor"
    }],
    status: 'School Project',
  },
    {
    slug: 'letsmeet',
    title: 'LetsMeet',
    tagline: 'AI-powered sponsor matching for student organizations and corporations',
    description:
      'Express + TypeScript API backed by Prisma over PostgreSQL, where organizations publish events with tiered sponsorship packages and corporations browse them, with both sides ranked by Gemini-generated fit scores. The matching service prompts Gemini with structured JSON schemas to score corporation-event and corporation-organization pairs, persisting a score and short reasoning for each, while a React/Vite frontend serves separate organization and corporation portals with dashboards, an event workspace split into AI matches and a partnership inbox, and score-filtered corporation discovery.',
    year: 2026,
    tags: ['TypeScript', 'React', 'Express', 'Prisma', 'PostgreSQL', 'Gemini API', 'Docker'],
    featured: true,
    thumbnail: require('@/assets/projects/letsmeet/letsmeet.png'),
    preview: require('@/assets/projects/letsmeet/letsmeet.gif'),
    links: [{
      label: "Github", 
      url: "https://github.com/jeremzhg/LetsMeet"
    }],
    status: 'School Project',
  },
];
