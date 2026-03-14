/**
 * Définitions centralisées des catégories pour projets et articles
 */

export const projectCategories = {
    all: { en: 'All', fr: 'Tous' },
    ai: { en: 'Artificial Intelligence', fr: 'Intelligence Artificielle' },
    iot: { en: 'Internet of Things', fr: 'Internet des Objets' },
    robotics: { en: 'Robotics', fr: 'Robotique' },
    power: { en: 'Electrical Networks', fr: 'Réseaux Électriques' },
    renewable: { en: 'Renewable Energy', fr: 'Énergies Renouvelables' },
    crypto: { en: 'Cryptography', fr: 'Cryptographie' },
} as const;

export const articleCategories = {
    all: { en: 'All', fr: 'Tous' },
    ai: { en: 'Artificial Intelligence', fr: 'Intelligence Artificielle' },
    iot: { en: 'Internet of Things', fr: 'Internet des Objets' },
    robotics: { en: 'Robotics', fr: 'Robotique' },
    power: { en: 'Electrical Networks', fr: 'Réseaux Électriques' },
    renewable: { en: 'Renewable Energy', fr: 'Énergies Renouvelables' },
} as const;

export type ProjectCategory = keyof typeof projectCategories;
export type ArticleCategory = keyof typeof articleCategories;
