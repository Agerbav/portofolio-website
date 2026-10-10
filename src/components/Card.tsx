import { color, font, radius, space } from '@/constants/theme';
import { Detail } from '@/types/detail';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  detail: Detail;
  /** Text colour — white on blue/cyan, dark on yellow */
  titleColor?: string;
  taglineColor?: string;
};

export function Card({
  detail,
  titleColor = color.text,
  taglineColor = color.textDim,
}: Props) {
  const hasThumb = detail.thumbnail !== undefined;

  return (
    <Link href={{ pathname: '/detail/[slug]', params: { slug: detail.slug } }} asChild>
      <Pressable style={styles.wrap}>
        <View style={styles.thumb}>
          {hasThumb ? (
            <Image
              source={detail.thumbnail!}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              transition={200}
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
  wrap: {
    width: '100%',
    gap: space.sm,
  },
  thumb: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: color.card,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: color.card,
  },
  meta: {
    gap: 2,
  },
  title: {
    fontSize: font.body,
    fontWeight: '700',
  },
  tagline: {
    fontSize: font.small,
    lineHeight: 19,
    opacity: 0.85,
  },
});
