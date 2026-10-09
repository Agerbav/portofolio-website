import { layout } from '@/constants/theme';
import type { Work } from '@/types/work';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { WorkCard } from './WorkCard';

type Props = {
  items: readonly Work[];
  gap?: number;
};

export function WorkGrid({ items, gap = layout.gridGap }: Props) {
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
      {items.map((work) => (
        <View key={work.slug} style={{ width: itemW }}>
          <WorkCard work={work} />
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