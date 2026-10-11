import { CardGrid } from '@/components/CardGrid';
import { DecorField } from '@/components/Decor';
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
        <DecorField items={["star"]} count={7}/>
        <Hero />
      </View>

       {/* Projects */}
      <Section 
        bg={color.projectsBg} 
        wide
        decor={['cloud', 'bird']}
        decorCount={7}
        >
        <SectionHeader title="Projects" href="/projects" />
        <CardGrid items={featuredProjects(6)} />
      </Section>

      {/* Creative  */}
      <Section 
        bg={color.creativeBg} 
        wide
        decor={["wave"]} 
        decorCount={7}
        >
        <SectionHeader title="Others" href="/creative" />
        <CardGrid items={featuredCreative(6)} />
      </Section>

      {/* About */}
      <Section 
        bg={color.aboutBg}  
        pad="lg"
        decor={['seagull', 'castle']}
        decorCount={7}
        >
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
