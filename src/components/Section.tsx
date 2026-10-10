import { layout, space } from '@/constants/theme';
import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';

type Props = {
  bg: string;
  children: ReactNode;
  style?: ViewStyle;
  /** Vertical padding preset */
  pad?: 'sm' | 'md' | 'lg';
  wide?: boolean;
};

const PAD: Record<NonNullable<Props['pad']>, number> = {
  sm: space.lg,
  md: space.xl,
  lg: space.xxl,
};

export function Section({ bg, children, style, pad = 'md', wide = false }: Props) {
  return (
    <View style={[styles.outer, { backgroundColor: bg }, style]}>
      <View
        style={[
          styles.inner,
          wide && styles.innerWide,
          { paddingVertical: PAD[pad] },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: '100%',
  },
  inner: {
    width: '100%',
    maxWidth: layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: layout.pagePadding,
  },
  innerWide: {
    maxWidth: layout.gridMaxWidth,
    paddingHorizontal: layout.gridPadding,
  },
});