// ── Registry ────────────────────────────────────────────────
// One entry per asset. Ratio = width / height, so we can size
// without stretching. Add new decor here and it becomes available
// everywhere DecorField is used.
export const DECOR = {
  cloud:  { source: require('@/assets/decor/cloud.png'),  ratio: 4.5 },
  bird:   { source: require('@/assets/decor/bird.png'),   ratio: 4.1 },
  castle: { source: require('@/assets/decor/castle.png'), ratio: 1.25 },
  star:   { source: require('@/assets/decor/star.png'), ratio: 1},
  wave:   { source: require('@/assets/decor/wave.png'), ratio: 3.93},
  seagull: { source: require('@/assets/decor/seagull.png'), ratio: 0.81}
} as const;

export type DecorName = keyof typeof DECOR;

export type DecorEntry = { source: number; ratio: number };

export type DecorSpec = DecorName | DecorEntry;

export type Placed = {
  id: string;
  source: number;
  x: number; y: number;
  width: number; height: number;
  rotate: number; opacity: number;
  flip: boolean;
};
