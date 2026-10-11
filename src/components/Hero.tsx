import { color, font, space } from '@/constants/theme';
import { Image } from 'expo-image';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { site } from '../data/site';

const INTRO_MS = 3000;

export function Hero() {
  const { width } = useWindowDimensions();
  const effectiveWidth = width || 1024;   
  const compact = effectiveWidth < 1024; 

  const [looping, setLooping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const startLoop = () => {
    if (timer.current || looping) return;
    timer.current = setTimeout(() => {
      timer.current = null;
      setLooping(true);
    }, INTRO_MS);
  };

  return (
    <View style={[styles.wrap, compact && styles.wrapCompact]}>
      <View style={[styles.avatar, compact && styles.avatarCompact]}>
        <Image
          key={looping ? 'loop' : 'intro'}
          source={
            looping
              ? require('@/assets/decor/raccoon-loop.gif')
              : require('@/assets/decor/raccoon.gif')
          }
          style={StyleSheet.absoluteFill}
          contentFit="contain"
          transition={0}
          onLoad={looping ? undefined : startLoop}
        />
      </View>

      <View style={[styles.text, compact && styles.textCompact]}>
        <Text style={styles.headline}>{site.headline}</Text>
        <Text style={styles.sub}>{site.subhead}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.xl,
    paddingHorizontal: space.xl,
    paddingTop: space.xxl,
    paddingBottom: space.xl,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  wrapCompact: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: space.lg,
    paddingHorizontal: space.md,
    paddingTop: space.xl,
  },
  avatar: {
    marginTop: 100,
    marginBottom: 100,
    width: 480,
    height: 432,
  },
  avatarCompact: {
    marginTop: 0,
    marginBottom: 0,
    height: 200,
    alignSelf: 'center'
  },

  text: {
    flex: 1,
    gap: space.sm,
  },
  textCompact: {
    width: '80%',
    alignSelf: 'center'
  },
  headline: {
    color: color.text,
    fontSize: font.h1,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  sub: {
    color: color.textDim,
    fontSize: font.body,
    lineHeight: 24,
    maxWidth: 520,
  },
});
