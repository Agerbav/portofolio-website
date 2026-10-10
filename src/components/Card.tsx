import { color, font, radius, space } from '@/constants/theme';
import type { Detail } from '@/types/detail';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  detail: Detail;
  titleColor?: string;
  taglineColor?: string;
};

export function Card({
  detail,
  titleColor = color.text,
  taglineColor = color.textDim,
}: Props) {
  const [hovered, setHovered] = useState(false);

  const showPreview =
    Platform.OS === 'web' && hovered && detail.preview !== undefined;

  const source = showPreview ? detail.preview : detail.thumbnail;

  return (
    <Link href={{ pathname: '/detail/[slug]', params: { slug: detail.slug } }} asChild>
      <Pressable
        style={styles.wrap}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
      >
        <View style={styles.thumb}>
          {source !== undefined ? (
            <Image
              key={showPreview ? 'preview' : 'still'}
              source={source}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              transition={showPreview ? 0 : 200}
            />
          ) : (
            <View style={[StyleSheet.absoluteFill, styles.placeholder]} />
          )}
        </View>

        <View style={styles.meta}>
          <Text style={[styles.title, { color: titleColor }]} numberOfLines={1}>
            {detail.title}
          </Text>
          {detail.tagline ? (
            <Text
              style={[styles.tagline, { color: taglineColor }]}
              numberOfLines={2}
            >
              {detail.tagline}
            </Text>
          ) : null}
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '100%', gap: space.sm },
  thumb: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: color.card,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  placeholder: { backgroundColor: color.card },
  meta: { gap: 2 },
  title: { fontSize: font.body, fontWeight: '700' },
  tagline: { fontSize: font.small, lineHeight: 19, opacity: 0.85 },
});