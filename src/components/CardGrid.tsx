import { layout } from '@/constants/theme';
import type { Detail } from '@/types/detail';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
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
  const vw = winW || layout.gridMaxWidth;
  const inner = Math.max(
    200,
    Math.min(vw, layout.gridMaxWidth) - layout.gridPadding * 2,
  );

  const columns = inner >= 900 ? 3 : inner >= 560 ? 2 : 1;
  const itemW = Math.floor((inner - gap * (columns - 1)) / columns);

  const visible = maxRows > 0 ? items.slice(0, columns * maxRows) : items;

  return (
    <View style={[styles.grid, { gap }]}>
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