import { DECOR, DecorEntry, DecorName, DecorSpec, Placed } from '@/types/decor';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';


const rand = (min: number, max: number) => min + Math.random() * (max - min);

function isName(s: DecorSpec): s is DecorName {
  return typeof s === 'string';
}

function resolve(spec: DecorSpec): DecorEntry {
  return isName(spec) ? DECOR[spec] : spec;
}

function generate(
  items: readonly DecorSpec[],
  count: number,
  boxW: number,
  boxH: number,
  size: [number, number],
  opacity: [number, number],
): Placed[] {
  if (!items.length) return [];

  const placed: Placed[] = [];
  const MAX_TRIES = 30;
  const minGap = Math.max(40, Math.min(boxW, boxH) * 0.08);

  for (let i = 0; i < count; i++) {
    const entry = resolve(items[Math.floor(Math.random() * items.length)]);
    const width = rand(size[0], size[1]);
    const height = width / entry.ratio;

    let ok = false;
    for (let t = 0; t < MAX_TRIES && !ok; t++) {
      const x = rand(0, Math.max(0, boxW - width));
      const y = rand(0, Math.max(0, boxH - height));

      const clash = placed.some((p) => {
        const dx = (p.x + p.width / 2) - (x + width / 2);
        const dy = (p.y + p.height / 2) - (y + height / 2);
        const minX = (p.width + width) / 2 + minGap;
        const minY = (p.height + height) / 2 + minGap;
        return Math.abs(dx) < minX && Math.abs(dy) < minY;
      });

      if (!clash) {
        placed.push({
          id: `decor-${i}`,
          source: entry.source,
          x, y, width, height,
          rotate: rand(-10, 10),
          opacity: rand(opacity[0], opacity[1]),
          flip: Math.random() > 0.5,
        });
        ok = true;
      }
    }
  }

  return placed;
}

type Props = {
  /** Which decor to draw from. Names from DECOR, or raw {source, ratio}. */
  items: readonly DecorSpec[];
  /** How many pieces to scatter. */
  count?: number;
  /** Opacity range, overrides the default 0.35–0.9. */
  opacity?: [number, number];
  /** Size range in px, overrides the default 70–180. */
  size?: [number, number];
};

export function DecorField({
  items,
  count = 8,
  opacity = [0.35, 0.6],
  size = [70, 180],
}: Props) {
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [placed, setPlaced] = useState<Placed[]>([]);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (width > 0 && height > 0) setBox({ w: width, h: height });
  };

  useEffect(() => {
    if (!box.w || !box.h) return;
    setPlaced(generate(items, count, box.w, box.h, size, opacity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.join(','), count, box.w, box.h, size.join(','), opacity.join(',')]);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none" onLayout={onLayout}>
      {placed.map((it) => (
        <Image
          key={it.id}
          source={it.source}
          cachePolicy="memory-disk"
          contentFit="contain"
          style={{
            position: 'absolute',
            left: it.x,
            top: it.y,
            width: it.width,
            height: it.height,
            opacity: it.opacity,
            transform: [
              { rotate: `${it.rotate}deg` },
              ...(it.flip ? [{ scaleX: -1 }] : []),
            ],
          }}
        />
      ))}
    </View>
  );
}