/**
 * Utilitaires de routing pour la gestion des chemins multilingues
 */
import type { Lang } from '../i18n/translations';

/**
 * Génère un chemin localisé
 * @example getLocalizedPath('/portfolio', 'fr') => '/fr/portfolio'
 */
export function getLocalizedPath(path: string, lang: Lang): string {
    // Nettoyer le path (enlever les slashes multiples)
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/${lang}${cleanPath}`;
}

/**
 * Génère le chemin de base pour une langue
 * @example getBasePath('en') => '/en'
 */
export function getBasePath(lang: Lang): string {
    return `/${lang}`;
}

/**
 * Remplace la langue dans un chemin
 * @example switchLangInPath('/en/portfolio', 'en', 'fr') => '/fr/portfolio'
 */
export function switchLangInPath(path: string, fromLang: Lang, toLang: Lang): string {
    // Si le chemin commence par /fromLang, le remplacer par /toLang
    if (path.startsWith(`/${fromLang}/`)) {
        return path.replace(`/${fromLang}/`, `/${toLang}/`);
    }
    // Si le chemin est exactement /fromLang, le remplacer par /toLang
    if (path === `/${fromLang}`) {
        return `/${toLang}`;
    }
    // Si le chemin ne contient pas de langue, ajouter la langue cible
    if (!path.startsWith('/en') && !path.startsWith('/fr')) {
        return `/${toLang}${path}`;
    }
    // Fallback: remplacer la première occurrence
    return path.replace(`/${fromLang}`, `/${toLang}`);
}

/**
 * Extrait la langue depuis un chemin
 * @example getLangFromPath('/fr/portfolio') => 'fr'
 */
export function getLangFromPath(path: string): Lang | null {
    const match = path.match(/^\/(en|fr)(\/|$)/);
    return match ? (match[1] as Lang) : null;
}

/**
 * Génère l'URL complète pour un projet
 */
export function getProjectUrl(slug: string, lang: Lang): string {
    return getLocalizedPath(`/projects/${slug}`, lang);
}

/**
 * Génère l'URL complète pour un article
 */
export function getArticleUrl(slug: string, lang: Lang): string {
    return getLocalizedPath(`/articles/${slug}`, lang);
}

/**
 * Props standard pour les composants avec langue
 */
export interface LangProps {
    lang?: Lang;
}

/**
 * Langues supportées
 */
export const supportedLangs: Lang[] = ['en', 'fr'];

/**
 * Retourne l'autre langue
 */
export function getOtherLang(lang: Lang): Lang {
    return lang === 'en' ? 'fr' : 'en';
}

/**
 * Vérifie si un lien est actif
 */
export function isActivePath(currentPath: string, linkPath: string, lang: Lang): boolean {
    const normalizedCurrent = currentPath.replace(/\/$/, '') || '/';
    const normalizedLink = `/${lang}${linkPath}`.replace(/\/$/, '') || `/${lang}`;
    
    // Pour la page d'accueil
    if (linkPath === '' || linkPath === '/') {
        return normalizedCurrent === `/${lang}` || normalizedCurrent === `/${lang}/`;
    }
    
    return normalizedCurrent === normalizedLink;
}

/**
 * Génère les paramètres statiques pour les pages multilingues
 * Utilisé dans getStaticPaths() des pages Astro
 */
export function getStaticLangPaths() {
    return supportedLangs.map((lang) => ({ params: { lang } }));
}
