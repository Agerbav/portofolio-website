import { color, font, layout, space } from '@/constants/theme';
import { site } from '@/data/site';
import { Link } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export default function AboutPage() {
  const { width } = useWindowDimensions();
  const compact = width < 720;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.inner}>
        <Text style={styles.kicker}>About</Text>
        <Text style={[styles.h1, compact && styles.h1Compact]}>
          {site.name}
        </Text>
        <Text style={styles.meta}>
          {site.role} · {site.location}
        </Text>

        <View style={styles.body}>
          {site.about.map((p, i) => (
            <Text key={i} style={styles.paragraph}>
              {p}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Find me</Text>
        <View style={styles.socials}>
          {site.socials.map((s) => (
            <Link key={s.label} href={s.url as never} asChild>
              <Pressable style={styles.socialBtn} hitSlop={6}>
                <Text style={styles.socialText}>{s.label} ↗</Text>
              </Pressable>
            </Link>
          ))}
        </View>

        {/* Decorative arrows, matching the mockup's bottom-right */}
        {/* <View style={styles.decor}>
          <Svg width={120} height={80} viewBox="0 0 120 80">
            <Path
              d="M20 80 L20 40 L35 55 L50 40 L50 80 Z"
              fill="rgba(34,211,238,0.55)"
            />
            <Path
              d="M70 80 L70 25 L88 43 L106 25 L106 80 Z"
              fill="rgba(34,211,238,0.85)"
            />
            <Path
              d="M98 68 Q110 70 116 78 Q108 80 100 78 Z"
              fill="rgba(37,99,235,0.9)"
            />
          </Svg>
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: color.aboutBg,
  },
  content: {
    flexGrow: 1,
  },
  inner: {
    width: '100%',
    maxWidth: layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: layout.pagePadding,
    paddingTop: space.xxl,
    paddingBottom: space.xxl,
  },
  kicker: {
    color: '#2563eb',
    fontSize: font.small,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: space.sm,
  },
  h1: {
    color: color.aboutText,
    fontSize: 56,
    fontWeight: '800',
    letterSpacing: -1.5,
  },
  h1Compact: {
    fontSize: 40,
  },
  meta: {
    color: '#4b5563',
    fontSize: font.body,
    marginTop: space.sm,
  },
  body: {
    marginTop: space.xl,
    gap: space.md,
    maxWidth: 720,
  },
  paragraph: {
    color: '#1f2937',
    fontSize: 17,
    lineHeight: 28,
  },
  sectionLabel: {
    marginTop: space.xxl,
    color: '#2563eb',
    fontSize: font.small,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  socials: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: space.md,
    marginTop: space.md,
  },
  socialBtn: {
    paddingHorizontal: space.lg,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(31,41,55,0.12)',
  },
  socialText: {
    color: '#1f2937',
    fontSize: font.body,
    fontWeight: '700',
  },
  decor: {
    marginTop: space.xxl,
    alignItems: 'flex-end',
  },
});
