/**
 * Schémas de validation TypeScript consolidés pour les données du portfolio
 * Fusion de schemas.ts et validation.ts pour éliminer la duplication
 */

import type { Lang } from '../i18n/translations';
import type { ProjectCategory, ArticleCategory } from './categories';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface MultiLangText {
  en: string;
  fr: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: MultiLangText;
  category: MultiLangText;
  categoryKey: ProjectCategory;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ArticleData {
  id: string;
  slug: string;
  title: MultiLangText;
  excerpt: MultiLangText;
  image: string;
  date: string;
  category: MultiLangText;
  categoryKey: ArticleCategory;
  readTime: string;
}

export interface ServiceData {
  id: string;
  title: MultiLangText;
  description: MultiLangText;
  tools: MultiLangText;
  icon: string;
}

// Ré-exporter les types de catégories
export type { ProjectCategory, ArticleCategory };

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Valide les champs multilingues
 */
function validateMultiLangText(field: any, fieldName: string): boolean {
  if (!field || typeof field !== 'object') {
    console.error(`${fieldName} must be an object with en and fr properties`);
    return false;
  }
  if (!field.en || typeof field.en !== 'string') {
    console.error(`${fieldName}.en is required and must be a string`);
    return false;
  }
  if (!field.fr || typeof field.fr !== 'string') {
    console.error(`${fieldName}.fr is required and must be a string`);
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

  try {
    new URL(url);
    return true;
  } catch {
    return url.startsWith('/') || url.startsWith('./') || url.startsWith('../');
  }
}

/**
 * Valide les données d'un projet
 */
export function validateProject(project: any): project is ProjectData {
  if (!project || typeof project !== 'object') {
    console.error('Project data must be an object');
    return false;
  }

  // Validation des champs requis
  if (typeof project.id !== 'string' || !project.id) {
    console.error('Project.id is required and must be a non-empty string');
    return false;
  }

  if (typeof project.slug !== 'string' || !project.slug) {
    console.error('Project.slug is required and must be a non-empty string');
    return false;
  }

  // Validation des champs multilingues
  if (!validateMultiLangText(project.title, 'Project.title')) return false;
  if (!validateMultiLangText(project.category, 'Project.category')) return false;

  // Validation categoryKey
  if (typeof project.categoryKey !== 'string') {
    console.error('Project.categoryKey must be a string');
    return false;
  }

  // Validation image
  if (typeof project.image !== 'string' || !validateImageUrl(project.image)) {
    console.error('Project.image must be a valid URL or path');
    return false;
  }

  // Validation tags
  if (!Array.isArray(project.tags)) {
    console.error('Project.tags must be an array');
    return false;
  }
  if (!project.tags.every((tag: any) => typeof tag === 'string')) {
    console.error('All project tags must be strings');
    return false;
  }

  return true;
}

/**
 * Valide les données d'un article
 */
export function validateArticle(article: any): article is ArticleData {
  if (!article || typeof article !== 'object') {
    console.error('Article data must be an object');
    return false;
  }

  // Validation des champs requis
  if (typeof article.id !== 'string' || !article.id) {
    console.error('Article.id is required and must be a non-empty string');
    return false;
  }

  // Validation slug
  if (typeof article.slug !== 'string' || !article.slug) {
    console.error('Article.slug is required and must be a non-empty string');
    return false;
  }

  // Validation des champs multilingues
  if (!validateMultiLangText(article.title, 'Article.title')) return false;
  if (!validateMultiLangText(article.excerpt, 'Article.excerpt')) return false;
  if (!validateMultiLangText(article.category, 'Article.category')) return false;

  // Validation image
  if (typeof article.image !== 'string' || !validateImageUrl(article.image)) {
    console.error('Article.image must be a valid URL or path');
    return false;
  }

  // Validation date
  if (typeof article.date !== 'string' || !article.date) {
    console.error('Article.date is required and must be a string');
    return false;
  }

  // Validation categoryKey
  if (typeof article.categoryKey !== 'string') {
    console.error('Article.categoryKey must be a string');
    return false;
  }

  // Validation readTime
  if (typeof article.readTime !== 'string' || !article.readTime) {
    console.error('Article.readTime is required and must be a string');
    return false;
  }

  return true;
}

// ============================================================================
// BATCH VALIDATION
// ============================================================================

/**
 * Valide un tableau de projets
 */
export function validateProjects(projects: any[]): ProjectData[] {
  if (!Array.isArray(projects)) {
    console.error('validateProjects expects an array');
    return [];
  }

  const validProjects = projects.filter(validateProject);
  const invalidCount = projects.length - validProjects.length;

  if (invalidCount > 0) {
    console.warn(`⚠️ ${invalidCount} projet(s) invalide(s) détecté(s) et ignoré(s)`);
  }

  return validProjects;
}

/**
 * Valide un tableau d'articles
 */
export function validateArticles(articles: any[]): ArticleData[] {
  if (!Array.isArray(articles)) {
    console.error('validateArticles expects an array');
    return [];
  }

  const validArticles = articles.filter(validateArticle);
  const invalidCount = articles.length - validArticles.length;

  if (invalidCount > 0) {
    console.warn(`⚠️ ${invalidCount} article(s) invalide(s) détecté(s) et ignoré(s)`);
  }

  return validArticles;
}

// ============================================================================
// SANITIZATION & FALLBACKS
// ============================================================================

/**
 * Nettoie et valide les données d'entrée
 */
export function sanitizeData<T>(data: T): T {
  if (!data || typeof data !== 'object') {
    return data;
  }

  const sanitized = { ...data } as any;

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
export function createFallback(type: 'article' | 'project', lang: Lang = 'en') {
  const fallbacks = {
    article: {
      id: 'fallback-article',
      title: { en: 'Untitled Article', fr: 'Article sans titre' },
      excerpt: { en: 'No excerpt available', fr: 'Aucun extrait disponible' },
      category: { en: 'General', fr: 'Général' },
      image: '/images/placeholder-article.png',
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min',
      categoryKey: 'all' as ArticleCategory
    },
    project: {
      id: 'fallback-project',
      slug: 'fallback-project',
      title: { en: 'Untitled Project', fr: 'Projet sans titre' },
      category: { en: 'General', fr: 'Général' },
      image: '/images/placeholder-project.png',
      tags: [],
      categoryKey: 'all' as ProjectCategory
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
  lang: Lang = 'en'
): T {
  const sanitized = sanitizeData(data);

  const isValid = type === 'article'
    ? validateArticle(sanitized)
    : validateProject(sanitized);

  if (!isValid) {
    console.warn(`⚠️ Invalid ${type} data, using fallback:`, sanitized);
    return { ...createFallback(type, lang), ...sanitized } as T;
  }

  return sanitized as T;
}