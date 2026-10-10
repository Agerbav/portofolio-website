import { layout } from '@/constants/theme';
import type { Detail } from '@/types/detail';
import { useState } from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  View,
  type LayoutChangeEvent,
} from 'react-native';
import { Card } from './Card';

type Props = {
  items: readonly Detail[];
  gap?: number;
};

export function CardGrid({ items, gap = layout.gridGap }: Props) {
  const { width: winW } = useWindowDimensions();
  const [measured, setMeasured] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w > 0 && Math.abs(w - measured) > 0.5) setMeasured(w);
  };

  const fallback = Math.max(
    200,
    Math.min(winW || 1024, layout.gridMaxWidth) - layout.gridPadding * 2,
  );
  const inner = measured || fallback;

  const columns = inner >= 900 ? 3 : inner >= 560 ? 2 : 1;
  const itemW = (inner - gap * (columns - 1)) / columns;

  return (
    <View style={[styles.grid, { gap }]} onLayout={onLayout}>
      {items.map((detail) => (
        <View key={detail.slug} style={{ width: itemW }}>
          <Card detail={detail} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});