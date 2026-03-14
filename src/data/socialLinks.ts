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
  { name: 'linkedin', url: siteConfig.social.linkedin, label: 'LinkedIn' },
  { name: 'medium', url: siteConfig.social.medium, label: 'Medium' },
  { name: 'substack', url: siteConfig.social.substack, label: 'Substack' },
  { name: 'kaggle', url: siteConfig.social.kaggle, label: 'Kaggle' },
  { name: 'huggingface', url: siteConfig.social.huggingface, label: 'Hugging Face' },
  { name: 'whatsapp', url: siteConfig.social.whatsapp, label: 'WhatsApp' },
];

export const socialLinksWithEmail: SocialLink[] = [
  ...socialLinks,
  { name: 'email', url: `mailto:${siteConfig.email}`, label: siteConfig.email },
];
