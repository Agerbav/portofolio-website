// src/components/LinkIcon.tsx
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export type LinkIconName = 'github' | 'linkedin' | 'mail' | 'globe' | 'external';

type Props = {
  name: LinkIconName;
  size?: number;
  color?: string;
};

export function LinkIcon({ name, size = 16, color = '#1f2937' }: Props) {
  switch (name) {
    case 'github':
      return <FontAwesome name="github" size={size} color={color} />;
    case 'linkedin':
      return <FontAwesome name="linkedin" size={size} color={color} />;
    case 'mail':
      return <Ionicons name="mail-outline" size={size} color={color} />;
    case 'globe':
      return <Ionicons name="globe-outline" size={size} color={color} />;
    case 'external':
      return <Ionicons name="open-outline" size={size} color={color} />;
  }
}

export function iconForLink(link: {
  label?: string;
  icon?: LinkIconName;
}): LinkIconName {
  if (link.icon) return link.icon;

  const l = link.label?.toLowerCase();
  if (l?.includes('github')) return 'github';
  if (l?.includes('linkedin')) return 'linkedin';
  if (l?.includes('mail') || l?.includes('email')) return 'mail';
  if (l?.includes('http')) return 'globe';

  return 'external';
}