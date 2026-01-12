import { siteConfig } from './config';
import type { IconName } from '../components/icons';

// Liens sociaux centralisés
export interface SocialLink {
  name: IconName;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'github', url: siteConfig.social.github, label: 'GitHub' },
  { name: 'medium', url: siteConfig.social.medium, label: 'Medium' },
  { name: 'huggingface', url: siteConfig.social.huggingface, label: 'Hugging Face' },
  { name: 'reddit', url: siteConfig.social.reddit, label: 'Reddit' },
];

export const socialLinksWithEmail: SocialLink[] = [
  ...socialLinks,
  { name: 'email', url: `mailto:${siteConfig.email}`, label: siteConfig.email },
];
