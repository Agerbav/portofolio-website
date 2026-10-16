import { DecorField } from '@/components/Decor';
import { iconForLink, LinkIcon } from '@/components/LinkIcon';
import { color, font, layout, space } from '@/constants/theme';
import { DecorName } from '@/types/decor';
import { allDetailSlugs, getDetailBySlug, isCreative } from '@/utils/detail';
import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export async function generateStaticParams() {
  return allDetailSlugs().map((slug) => ({ slug }));
}

export default function Detail() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const detail = getDetailBySlug(slug);

  if (!detail) {
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

  const creative = isCreative(detail.slug);
  const bg = creative ? color.creativeBg : color.projectsBg;
  const backHref = creative ? '/creative' : '/projects';
  const backLabel = creative ? 'Others' : 'Projects';

  const decorItems: readonly DecorName[] = creative ? ['wave'] : ['cloud', 'bird'];

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <DecorField items={decorItems} count={7}/>
      
      <View style={styles.inner}>
        <View style={styles.column}>
          <Link href={backHref} asChild>
            <Pressable hitSlop={8} style={styles.back}>
              <Text style={styles.backText}>← {backLabel}</Text>
            </Pressable>
          </Link>

          <Text style={styles.title}>{detail.title}</Text>
          {detail.tagline ? <Text style={styles.tagline}>{detail.tagline}</Text> : null}

          <View style={styles.metaRow}>
            <Text style={styles.meta}>{detail.year}</Text>
            {detail.status ? <Text style={styles.meta}>· {detail.status}</Text> : null}
            {detail.tags?.length ? (
              <Text style={styles.meta}>· {detail.tags.join(', ')}</Text>
            ) : null}
          </View>

          <View style={styles.hero}>
            {detail.preview !== undefined ? (
              <Image
                source={detail.preview}
                style={StyleSheet.absoluteFill}
                contentFit="cover"
                transition={200}
              />
            ) : (
              <View style={[StyleSheet.absoluteFill, styles.heroPlaceholder]} />
            )}
          </View>

          {detail.description ? (
            <Text style={styles.description}>{detail.description}</Text>
          ) : null}

          {detail.links?.length ? (
            <View style={styles.links}>
              {detail.links.map((l) => (
                <Link key={l.label} href={l.url as never} asChild>
                  <Pressable style={styles.linkBtn} hitSlop={6}>
                    <LinkIcon name={iconForLink(l)} size={16} color="#1f2937" />
                    <Text style={styles.linkText}>{l.label}</Text>
                  </Pressable>
                </Link>
              ))}
            </View>
          ) : null}
        </View>
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
  column: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
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
    textAlign: 'left',
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.md,
    marginTop: space.xl,
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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