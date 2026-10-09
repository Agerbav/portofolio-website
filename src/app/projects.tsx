import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { WorkGrid } from '@/components/WorkGrid';
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
      <Section bg={color.projectsBg} pad="lg">
        <SectionHeader title="Projects" />
        <WorkGrid items={projects} />
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
