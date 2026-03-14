/**
 * Définitions centralisées des catégories pour projets et articles
 */

export const projectCategories = {
    all: { en: 'All', fr: 'Tous' },
    blockchain: { en: 'Blockchain', fr: 'Blockchain' },
    iot: { en: 'IoT', fr: 'IoT' },
    software: { en: 'Software', fr: 'Logiciel' },
} as const;

export const articleCategories = {
    all: { en: 'All', fr: 'Tous' },
    power: { en: 'Power Systems', fr: 'Électroénergétique' },
    iot: { en: 'IoT & Embedded', fr: 'IoT & Embarqué' },
    research: { en: 'Research', fr: 'Recherche' },
} as const;

export type ProjectCategory = keyof typeof projectCategories;
export type ArticleCategory = keyof typeof articleCategories;
