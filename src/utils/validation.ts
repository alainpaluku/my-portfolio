/**
 * Utilitaires de validation pour les données du portfolio
 */

import type { Lang } from '../i18n/translations';

export interface ArticleData {
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  category: { en: string; fr: string };
  image: string;
  date: string;
  readTime: string;
  slug?: string;
  categoryKey: string;
}

export interface ProjectData {
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  category: { en: string; fr: string };
  image: string;
  tags: string[];
  tools: { en: string; fr: string };
  slug?: string;
  categoryKey: string;
}

/**
 * Valide les données d'un article
 */
export function validateArticle(data: any): data is ArticleData {
  if (!data || typeof data !== 'object') {
    console.error('Article data must be an object');
    return false;
  }

  const requiredFields = ['title', 'excerpt', 'category', 'image', 'date', 'readTime'];
  
  for (const field of requiredFields) {
    if (!data[field]) {
      console.error(`Article missing required field: ${field}`);
      return false;
    }
  }

  // Vérifier les champs multilingues
  const multilingualFields = ['title', 'excerpt', 'category'];
  for (const field of multilingualFields) {
    if (!data[field].en || !data[field].fr) {
      console.error(`Article field ${field} missing language variants`);
      return false;
    }
  }

  return true;
}

/**
 * Valide les données d'un projet
 */
export function validateProject(data: any): data is ProjectData {
  if (!data || typeof data !== 'object') {
    console.error('Project data must be an object');
    return false;
  }

  const requiredFields = ['title', 'description', 'category', 'image', 'tags', 'tools'];
  
  for (const field of requiredFields) {
    if (!data[field]) {
      console.error(`Project missing required field: ${field}`);
      return false;
    }
  }

  // Vérifier les champs multilingues
  const multilingualFields = ['title', 'description', 'category', 'tools'];
  for (const field of multilingualFields) {
    if (!data[field].en || !data[field].fr) {
      console.error(`Project field ${field} missing language variants`);
      return false;
    }
  }

  // Vérifier que tags est un array
  if (!Array.isArray(data.tags)) {
    console.error('Project tags must be an array');
    return false;
  }

  return true;
}

/**
 * Valide une URL d'image
 */
export function validateImageUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }

  // Vérifier si c'est une URL valide ou un chemin local
  try {
    new URL(url);
    return true;
  } catch {
    // Si ce n'est pas une URL, vérifier si c'est un chemin local valide
    return url.startsWith('/') || url.startsWith('./') || url.startsWith('../');
  }
}

/**
 * Nettoie et valide les données d'entrée
 */
export function sanitizeData<T>(data: T): T {
  if (!data || typeof data !== 'object') {
    return data;
  }

  const sanitized = { ...data } as any;

  // Nettoyer les chaînes de caractères
  for (const [key, value] of Object.entries(sanitized)) {
    if (typeof value === 'string') {
      sanitized[key] = value.trim();
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeData(value);
    }
  }

  return sanitized;
}

/**
 * Crée un fallback pour les données manquantes
 */
export function createFallback(type: 'article' | 'project', lang: Lang) {
  const fallbacks = {
    article: {
      title: { en: 'Untitled Article', fr: 'Article sans titre' },
      excerpt: { en: 'No excerpt available', fr: 'Aucun extrait disponible' },
      category: { en: 'General', fr: 'Général' },
      image: '/images/placeholder-article.png',
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min',
      categoryKey: 'general'
    },
    project: {
      title: { en: 'Untitled Project', fr: 'Projet sans titre' },
      description: { en: 'No description available', fr: 'Aucune description disponible' },
      category: { en: 'General', fr: 'Général' },
      image: '/images/placeholder-project.png',
      tags: [],
      tools: { en: 'Various tools', fr: 'Outils divers' },
      categoryKey: 'general'
    }
  };

  return fallbacks[type];
}

/**
 * Valide et nettoie les données avec fallback
 */
export function validateAndSanitize<T>(
  data: any,
  type: 'article' | 'project',
  lang: Lang
): T {
  // Nettoyer les données
  const sanitized = sanitizeData(data);

  // Valider selon le type
  const isValid = type === 'article' 
    ? validateArticle(sanitized)
    : validateProject(sanitized);

  if (!isValid) {
    console.warn(`Invalid ${type} data, using fallback:`, sanitized);
    return { ...createFallback(type, lang), ...sanitized } as T;
  }

  return sanitized as T;
}