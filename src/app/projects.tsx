import { CardGrid } from '@/components/CardGrid';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { color } from '@/constants/theme';
import { projects } from '@/data/projects';
import { ScrollView, StyleSheet } from 'react-native';

export default function ProjectsPage() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Section 
        bg={color.projectsBg} 
        pad="lg"
        decor={['cloud', 'bird']}
        decorCount={15}
        >
        <SectionHeader title="Projects" />
        <CardGrid items={projects} maxRows={0} />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: color.projectsBg,
  },
  content: {
    flexGrow: 1,
  },
});
