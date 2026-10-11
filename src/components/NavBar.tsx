import { color, font, space } from '@/constants/theme';
import { Link, usePathname } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/creative', label: 'Creative' },
  { href: '/about', label: 'About' },
] as const;

export function NavBar() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const compact = (width || 1024) < 640;
  return (
    <View style={styles.wrap}>
      <View style={[styles.bar, compact && styles.barCompact]}>
        <Link href="/" asChild>
          <Pressable hitSlop={10}>
            <Text style={[styles.brand, compact && styles.brandCompact]}>
              Vabregass
            </Text>
          </Pressable>
        </Link>

        <View style={[styles.links, compact && styles.linksCompact]}>
          {LINKS.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(l.href + '/');
            return (
              <Link key={l.href} href={l.href} asChild>
                <Pressable hitSlop={10}>
                  <Text style={[styles.link, active && styles.linkActive]}>
                    {l.label}
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space.xl,
    paddingVertical: 18,
    backgroundColor: color.navBg,
  },
  barCompact: {
    paddingHorizontal: space.md,
    paddingVertical: 12,
  },
  brand: {
    color: color.navText,
    fontSize: font.brand,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  brandCompact: {
    fontSize: 18,
  },
  links: {
    flexDirection: 'row',
    gap: 32,
  },
  linksCompact: {
    gap: 16,
  },
  link: {
    color: color.navText,
    fontSize: font.body,
    fontWeight: '700',
  },
  linkActive: {
    textDecorationLine: 'underline',
  },
});
