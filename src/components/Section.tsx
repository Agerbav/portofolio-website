// src/components/Section.tsx
import { layout, space } from '@/constants/theme';
import type { DecorSpec } from '@/types/decor';
import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { DecorField } from './Decor';

type Props = {
  bg: string;
  children: ReactNode;
  style?: ViewStyle;
  pad?: 'sm' | 'md' | 'lg';
  wide?: boolean;
  decor?: readonly DecorSpec[];
  decorCount?: number;
  decorOpacity?: [number, number];
  decorSize?: [number, number];
};

const PAD: Record<NonNullable<Props['pad']>, number> = {
  sm: space.lg,
  md: space.xl,
  lg: space.xxl,
};

export function Section({
  bg,
  children,
  style,
  pad = 'md',
  wide = false,
  decor,
  decorCount = 8,
  decorOpacity,
  decorSize,
}: Props) {
  return (
    <View style={[styles.outer, { backgroundColor: bg }, style]}>
      {decor?.length ? (
        <DecorField
          items={decor}
          count={decorCount}
          opacity={decorOpacity}
          size={decorSize}
        />
      ) : null}
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
    overflow: 'hidden',
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