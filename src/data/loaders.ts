/**
 * Factory functions pour charger et valider les données
 * Élimine la duplication entre projects.ts et articles.ts
 */

/**
 * Crée un loader de données générique avec validation
 */
export function createDataLoader<T>(
    rawData: any[],
    validator: (items: any[]) => T[]
): T[] {
    return validator(rawData);
}

/**
 * Crée un objet de catégories multilingues
 */
export function createCategories<K extends string>(
    categories: Record<K, { en: string; fr: string }>
): Record<K, { en: string; fr: string }> {
    return categories;
}

/**
 * Filtre les items par catégorie
 */
export function filterByCategory<T extends { categoryKey: string }>(
    items: T[],
    categoryKey: string
): T[] {
    if (categoryKey === 'all') return items;
    return items.filter(item => item.categoryKey === categoryKey);
}

/**
 * Filtre les items featured
 */
export function getFeaturedItems<T extends { featured?: boolean }>(
    items: T[],
    limit?: number
): T[] {
    const featured = items.filter(item => item.featured);
    return limit ? featured.slice(0, limit) : featured;
}

/**
 * Trie les items par date (plus récent en premier)
 */
export function sortByDate<T extends { date?: string }>(items: T[]): T[] {
    return [...items].sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
