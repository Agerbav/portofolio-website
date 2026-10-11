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
  maxRows?: number;
};

export function CardGrid({
  items,
  gap = layout.gridGap,
  maxRows = 2,
}: Props) {
  const { width: winW } = useWindowDimensions();
  const [measured, setMeasured] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w > 0 && Math.abs(w - measured) > 0.5) setMeasured(w);
  };

  const vw = winW || layout.gridMaxWidth;
  const fallbackInner = Math.max(
    200,
    Math.min(vw, layout.gridMaxWidth) - layout.gridPadding * 2,
  );
  const inner = measured || fallbackInner;

  const columns = inner >= 900 ? 3 : inner >= 560 ? 2 : 1;
  const itemW = Math.floor((inner - gap * (columns - 1)) / columns);

  const visible = maxRows > 0 ? items.slice(0, columns * maxRows) : items;

  return (
    <View style={[styles.grid, { gap }]} onLayout={onLayout}>
      {visible.map((detail) => (
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