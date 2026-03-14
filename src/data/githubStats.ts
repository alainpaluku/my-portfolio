/**
 * Statistiques GitHub statiques pour éviter les limites de l'API
 * À mettre à jour manuellement périodiquement
 */

export const githubStats = {
    repos: 15,
    stars: 42,
    followers: 28,
    lastUpdated: '2024-03-14'
};

/**
 * Fonction pour récupérer les stats GitHub avec fallback
 */
export async function getGitHubStats() {
    try {
        // En production, utiliser les stats statiques pour éviter les rate limits
        if (import.meta.env.PROD) {
            return githubStats;
        }

        // En développement, essayer l'API avec timeout court
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const userResponse = await fetch('https://api.github.com/users/alainpaluku', {
            signal: controller.signal,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        clearTimeout(timeoutId);

        if (!userResponse.ok) {
            throw new Error(`GitHub API error: ${userResponse.status}`);
        }

        const userData = await userResponse.json();

        return {
            repos: userData.public_repos || githubStats.repos,
            stars: githubStats.stars, // Garder la valeur statique pour les stars
            followers: userData.followers || githubStats.followers,
        };
    } catch (error) {
        console.warn('Utilisation des stats GitHub statiques:', error.message);
        return githubStats;
    }
}