import { color, font, layout, space } from '@/constants/theme';
import { allWorkSlugs, getWorkBySlug, isCreative } from '@/utils/work';
import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**
 * Static export: tells expo-router which slugs to pre-render
 * when you run `expo export --platform web`.
 */
export async function generateStaticParams() {
  return allWorkSlugs().map((slug) => ({ slug }));
}

export default function WorkDetail() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const work = getWorkBySlug(slug);

  if (!work) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundTitle}>Not found</Text>
        <Link href="/" asChild>
          <Pressable>
            <Text style={styles.notFoundLink}>← Back home</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  const creative = isCreative(work.slug);
  const bg = creative ? color.creativeBg : color.projectsBg;
  const backHref = creative ? '/creative' : '/projects';
  const backLabel = creative ? 'Creative' : 'Projects';

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.inner}>
        <Link href={backHref} asChild>
          <Pressable hitSlop={8} style={styles.back}>
            <Text style={styles.backText}>← {backLabel}</Text>
          </Pressable>
        </Link>

        <Text style={styles.title}>{work.title}</Text>
        {work.tagline ? <Text style={styles.tagline}>{work.tagline}</Text> : null}

        <View style={styles.metaRow}>
          <Text style={styles.meta}>{work.year}</Text>
          {work.status ? <Text style={styles.meta}>· {work.status}</Text> : null}
          {work.tags?.length ? (
            <Text style={styles.meta}>· {work.tags.join(', ')}</Text>
          ) : null}
        </View>

        <View style={styles.hero}>
          {work.thumbnail !== undefined ? (
            <Image
              source={work.thumbnail}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              transition={200}
            />
          ) : (
            <View style={[StyleSheet.absoluteFill, styles.heroPlaceholder]} />
          )}
        </View>

        {work.description ? (
          <Text style={styles.description}>{work.description}</Text>
        ) : null}

        {work.links?.length ? (
          <View style={styles.links}>
            {work.links.map((l) => (
              <Link key={l.label} href={l.url as never} asChild>
                <Pressable style={styles.linkBtn} hitSlop={6}>
                  <Text style={styles.linkText}>{l.label} ↗</Text>
                </Pressable>
              </Link>
            ))}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { flexGrow: 1 },
  inner: {
    width: '100%',
    maxWidth: layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: layout.pagePadding,
    paddingTop: space.xl,
    paddingBottom: space.xxl,
  },
  back: { alignSelf: 'flex-start' },
  backText: {
    color: color.text,
    fontSize: font.body,
    fontWeight: '700',
    opacity: 0.9,
  },
  title: {
    marginTop: space.xl,
    color: color.text,
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: -1,
  },
  tagline: {
    marginTop: space.sm,
    color: color.textDim,
    fontSize: 20,
    lineHeight: 28,
    maxWidth: 720,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: space.lg,
  },
  meta: {
    color: color.text,
    fontSize: font.small,
    fontWeight: '600',
    opacity: 0.85,
  },
  hero: {
    marginTop: space.xl,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  heroPlaceholder: {
    backgroundColor: color.card,
  },
  description: {
    marginTop: space.xl,
    color: color.text,
    fontSize: 17,
    lineHeight: 28,
    maxWidth: 720,
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.md,
    marginTop: space.xl,
  },
  linkBtn: {
    paddingHorizontal: space.lg,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
  linkText: {
    color: '#1f2937',
    fontSize: font.body,
    fontWeight: '700',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.heroBg,
    gap: space.md,
  },
  notFoundTitle: {
    color: color.text,
    fontSize: font.h2,
    fontWeight: '800',
  },
  notFoundLink: {
    color: color.textDim,
    fontSize: font.body,
    fontWeight: '700',
  },
});
