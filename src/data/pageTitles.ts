import type { Lang } from '../i18n/translations';
import { siteConfig } from './config';

// Titres de pages centralisés
export const pageTitles = {
  home: {
    en: `${siteConfig.name} | M.Sc. Power Systems & IoT Developer`,
    fr: `${siteConfig.name} | M.Sc. Systèmes de Puissance & Développeur IoT`,
  },
  about: {
    en: `About | ${siteConfig.name}`,
    fr: `À Propos | ${siteConfig.name}`,
  },
  services: {
    en: `Services | ${siteConfig.name}`,
    fr: `Services | ${siteConfig.name}`,
  },
  portfolio: {
    en: `Portfolio | ${siteConfig.name}`,
    fr: `Portfolio | ${siteConfig.name}`,
  },
  articles: {
    en: `Articles | ${siteConfig.name}`,
    fr: `Articles | ${siteConfig.name}`,
  },
  contact: {
    en: `Contact | ${siteConfig.name}`,
    fr: `Contact | ${siteConfig.name}`,
  },
} as const;

export type PageKey = keyof typeof pageTitles;

export function getPageTitle(page: PageKey, lang: Lang): string {
  return pageTitles[page][lang];
}
