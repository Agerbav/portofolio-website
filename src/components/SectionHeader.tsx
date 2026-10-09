import { color, font, space } from '@/constants/theme';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  href?: '/projects' | '/creative' | '/about';
  color?: string;
  linkColor?: string;
};

export function SectionHeader({
  title,
  href,
  color: titleColor = color.text,
  linkColor = color.textDim,
}: Props) {
  return (
    <View style={styles.row}>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      {href ? (
        <Link href={href} asChild>
          <Pressable hitSlop={8}>
            <Text style={[styles.link, { color: linkColor }]}>View all →</Text>
          </Pressable>
        </Link>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: space.lg,
  },
  title: {
    fontSize: font.h2,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  link: {
    fontSize: font.small,
    fontWeight: '700',
  },
});
