import { type Lang } from '../i18n/translations';

/**
 * Formate une date selon la langue
 */
export function formatDate(date: string, lang: Lang): string {
  return new Date(date).toLocaleDateString(
    lang === 'fr' ? 'fr-FR' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  );
}

/**
 * Formate une date relative (il y a X jours)
 */
export function formatRelativeDate(date: string, lang: Lang): string {
  const now = new Date();
  const then = new Date(date);
  const diffDays = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return lang === 'fr' ? "Aujourd'hui" : 'Today';
  if (diffDays === 1) return lang === 'fr' ? 'Hier' : 'Yesterday';
  if (diffDays < 7) return lang === 'fr' ? `Il y a ${diffDays} jours` : `${diffDays} days ago`;
  
  return formatDate(date, lang);
}
