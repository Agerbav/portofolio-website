import { CardGrid } from '@/components/CardGrid';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { color } from '@/constants/theme';
import { creative } from '@/data/creative';
import { ScrollView, StyleSheet } from 'react-native';

export default function CreativePage() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Section 
        bg={color.creativeBg} 
        pad="lg"
        decor={['wave']}
        decorCount={20}
        >
        <SectionHeader title="Others" />
        <CardGrid items={creative} maxRows={0} />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: color.creativeBg,
  },
  content: {
    flexGrow: 1,
  },
});
