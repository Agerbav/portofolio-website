import { color, font, radius, space } from '@/constants/theme';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { site } from '../data/site';

export function Hero() {
  const { width } = useWindowDimensions();
  const compact = width < 768;

  return (
    <View style={[styles.wrap, compact && styles.wrapCompact]}>
      <View style={[styles.avatar, compact && styles.avatarCompact]}>
        {/*
          Drop a real photo here:
          <Image source={require('../../assets/avatar.jpg')} style={StyleSheet.absoluteFill} contentFit="cover" />
        */}
        <View style={styles.avatarPlaceholder} />
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
    width: 340,
    height: 190,
    backgroundColor: color.card,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  avatarCompact: {
    width: '100%',
    height: 200,
  },
  avatarPlaceholder: {
    flex: 1,
    backgroundColor: color.card,
  },
  text: {
    flex: 1,
    gap: space.sm,
  },
  textCompact: {
    width: '100%',
  },
  headline: {
    color: color.text,
    fontSize: font.h3,
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
