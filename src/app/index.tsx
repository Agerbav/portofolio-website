import { CardGrid } from '@/components/CardGrid';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { color } from '@/constants/theme';
import { featuredCreative, featuredProjects } from '@/utils/detail';
import { ScrollView, StyleSheet, View } from 'react-native';


export default function Home() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Section */}
      <View style={styles.heroBand}>
        <Hero />
      </View>

      {/* Projects */}
      <Section bg={color.projectsBg}>
        <SectionHeader title="Projects" href="/projects" />
        <CardGrid items={featuredProjects(6)} />
      </Section>


      {/* Creative  */}
      <Section bg={color.creativeBg}>
        <SectionHeader title="Creative" href="/creative" />
        <CardGrid items={featuredCreative(6)} />
      </Section>

      {/* About */}
      <Section bg={color.aboutBg} pad="lg">
        <View style={styles.aboutSpacer} />
      </Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: color.heroBg,
  },
  content: {
    paddingBottom: 0,
  },
  heroBand: {
    backgroundColor: color.heroBg,
    paddingBottom: 8,
  },
  aboutSpacer: {
    height: 220,
  },
});
