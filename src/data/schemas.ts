// Schémas de validation TypeScript pour les données

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

export type ProjectCategory = 'all' | 'blockchain' | 'iot' | 'software';
export type ArticleCategory = 'all' | 'power' | 'iot' | 'research';

// Fonctions de validation
export function validateProject(project: any): project is ProjectData {
  return (
    typeof project.id === 'string' &&
    typeof project.slug === 'string' &&
    project.title && typeof project.title.en === 'string' && typeof project.title.fr === 'string' &&
    project.category && typeof project.category.en === 'string' && typeof project.category.fr === 'string' &&
    typeof project.categoryKey === 'string' &&
    typeof project.image === 'string' &&
    Array.isArray(project.tags) &&
    project.tags.every((tag: any) => typeof tag === 'string')
  );
}

export function validateArticle(article: any): article is ArticleData {
  return (
    typeof article.id === 'string' &&
    article.title && typeof article.title.en === 'string' && typeof article.title.fr === 'string' &&
    article.excerpt && typeof article.excerpt.en === 'string' && typeof article.excerpt.fr === 'string' &&
    typeof article.image === 'string' &&
    typeof article.date === 'string' &&
    article.category && typeof article.category.en === 'string' && typeof article.category.fr === 'string' &&
    typeof article.categoryKey === 'string' &&
    typeof article.readTime === 'string'
  );
}

// Utilitaires de validation
export function validateProjects(projects: any[]): ProjectData[] {
  const validProjects = projects.filter(validateProject);
  if (validProjects.length !== projects.length) {
    console.warn(`${projects.length - validProjects.length} projets invalides détectés`);
  }
  return validProjects;
}

export function validateArticles(articles: any[]): ArticleData[] {
  const validArticles = articles.filter(validateArticle);
  if (validArticles.length !== articles.length) {
    console.warn(`${articles.length - validArticles.length} articles invalides détectés`);
  }
  return validArticles;
}