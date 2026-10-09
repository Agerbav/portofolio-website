import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';


export function Clouds() {
  return (
    <View style={styles.cloudRow}>
      <Image source={require('../../assets/decor/Cloud.png')} style={[styles.cloud, styles.cloudA]} contentFit="contain" />
      <Image source={require('../../assets/decor/Cloud.png')} style={[styles.cloud, styles.cloudB]} contentFit="contain" />
      <Image source={require('../../assets/decor/Cloud.png')} style={[styles.cloud, styles.cloudC]} contentFit="contain" />
    </View>
  );
}

// Chevron birds on the blue band.
export function Birds({ align = 'left' }: { align?: 'left' | 'right' }) {
  return (
    <Image
      source={require('../../assets/decor/Bird.png')}
      style={[styles.birds, align === 'right' && styles.birdsRight]}
      contentFit="contain"
    />
  );
}

// Sand castle in the About band, bottom-right.
export function SandCastle() {
  return (
    <Image
      source={require('../../assets/decor/Castle.png')}
      style={styles.sandcastle}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  wave: {
    width: '100%',
    height: 14, // matches the mockup's thin scallop
  },

  cloudRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  cloud: {
    aspectRatio: 4.5, // wide, flat clouds
  },
  cloudA: { flex: 1.35 },
  cloudB: { flex: 1.1 },
  cloudC: { flex: 1.45 },

  birds: {
    width: 140,
    height: 34,
    marginLeft: 40,
    marginTop: 8,
    marginBottom: 16,
  },
  birdsRight: {
    marginLeft: 0,
    marginRight: 40,
    alignSelf: 'flex-end',
  },

  sandcastle: {
    width: 200,
    height: 160,
    alignSelf: 'flex-end',
    marginRight: 40,
  },
});