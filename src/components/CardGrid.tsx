import { layout } from '@/constants/theme';
import type { Detail } from '@/types/detail';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Card } from './Card';

type Props = {
  items: readonly Detail[];
  gap?: number;
};

export function CardGrid({ items, gap = layout.gridGap }: Props) {
  const { width } = useWindowDimensions();
  const w = width || 1024;

  const inner = Math.max(
    200,
    Math.min(w, layout.maxWidth) - layout.pagePadding * 2,
  );

  const columns = inner >= 880 ? 3 : inner >= 560 ? 2 : 1;
  const itemW = (inner - gap * (columns - 1)) / columns;

  return (
    <View style={[styles.grid, { gap }]}>
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