import type { Lang, defaultLang } from '../i18n/translations';

/**
 * Props standard pour les composants avec langue
 */
export interface LangProps {
  lang?: Lang;
}

/**
 * Génère le chemin de base pour une langue
 */
export function getBasePath(lang: Lang): string {
  return `/${lang}`;
}

/**
 * Retourne l'autre langue
 */
export function getOtherLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

/**
 * Remplace la langue dans un chemin
 */
export function switchLangInPath(path: string, fromLang: Lang, toLang: Lang): string {
  return path.replace(`/${fromLang}`, `/${toLang}`);
}

/**
 * Langues supportées pour getStaticPaths
 */
export const supportedLangs: Lang[] = ['en', 'fr'];

/**
 * Génère les paramètres statiques pour les pages multilingues
 */
export function getStaticLangPaths() {
  return supportedLangs.map((lang) => ({ params: { lang } }));
}
