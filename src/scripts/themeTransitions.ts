/**
 * Gestion avancée des transitions de thème avec View Transitions API
 */

export interface ThemeTransitionOptions {
    duration?: number;
    easing?: string;
    type?: 'fade' | 'slide' | 'zoom' | 'circle';
}

export class ThemeTransitionManager {
    private static instance: ThemeTransitionManager;
    private isTransitioning = false;

    static getInstance(): ThemeTransitionManager {
        if (!ThemeTransitionManager.instance) {
            ThemeTransitionManager.instance = new ThemeTransitionManager();
        }
        return ThemeTransitionManager.instance;
    }

    /**
     * Vérifie si les View Transitions sont supportées
     */
    isViewTransitionSupported(): boolean {
        return 'startViewTransition' in document;
    }

    /**
     * Effectue une transition de thème avec View Transitions API
     */
    async toggleTheme(options: ThemeTransitionOptions = {}): Promise<void> {
        if (this.isTransitioning) return;

        const { duration = 500, type = 'fade' } = options;
        this.isTransitioning = true;

        try {
            if (!this.isViewTransitionSupported()) {
                // Fallback pour navigateurs non supportés
                this.toggleThemeImmediate();
                return;
            }

            // Préparer l'animation selon le type
            this.prepareTransitionAnimation(type, duration);

            // Démarrer la transition
            const transition = document.startViewTransition(() => {
                this.toggleThemeImmediate();
            });

            await transition.ready;
            await transition.finished;
        } finally {
            this.isTransitioning = false;
        }
    }

    /**
     * Change le thème immédiatement sans animation
     */
    private toggleThemeImmediate(): void {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateThemeIcon();
    }

    /**
     * Met à jour les icônes du bouton de thème
     */
    private updateThemeIcon(): void {
        const isDark = document.documentElement.classList.contains('dark');
        const lightIcon = document.getElementById('theme-icon-light');
        const darkIcon = document.getElementById('theme-icon-dark');

        if (isDark) {
            lightIcon?.classList.add('opacity-0', 'scale-75', 'rotate-180');
            lightIcon?.classList.remove('opacity-100', 'scale-100', 'rotate-0');
            darkIcon?.classList.add('opacity-100', 'scale-100', 'rotate-0');
            darkIcon?.classList.remove('opacity-0', 'scale-75', 'rotate-180');
        } else {
            lightIcon?.classList.add('opacity-100', 'scale-100', 'rotate-0');
            lightIcon?.classList.remove('opacity-0', 'scale-75', 'rotate-180');
            darkIcon?.classList.add('opacity-0', 'scale-75', 'rotate-180');
            darkIcon?.classList.remove('opacity-100', 'scale-100', 'rotate-0');
        }
    }
    /**
     * Prépare les animations CSS pour différents types de transitions
     */
    private prepareTransitionAnimation(type: string, duration: number): void {
        const style = document.createElement('style');
        style.id = 'theme-transition-styles';

        let css = '';

        switch (type) {
            case 'circle':
                css = `
          ::view-transition-old(root) {
            animation: theme-circle-out ${duration}ms ease-in-out;
          }
          ::view-transition-new(root) {
            animation: theme-circle-in ${duration}ms ease-in-out;
          }
          @keyframes theme-circle-out {
            0% { clip-path: circle(100% at 50% 50%); }
            100% { clip-path: circle(0% at 50% 50%); }
          }
          @keyframes theme-circle-in {
            0% { clip-path: circle(0% at 50% 50%); }
            100% { clip-path: circle(100% at 50% 50%); }
          }
        `;
                break;

            case 'slide':
                css = `
          ::view-transition-old(root) {
            animation: theme-slide-out ${duration}ms ease-in-out;
          }
          ::view-transition-new(root) {
            animation: theme-slide-in ${duration}ms ease-in-out;
          }
          @keyframes theme-slide-out {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes theme-slide-in {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }
        `;
                break;

            case 'zoom':
                css = `
          ::view-transition-old(root) {
            animation: theme-zoom-out ${duration}ms ease-in-out;
          }
          ::view-transition-new(root) {
            animation: theme-zoom-in ${duration}ms ease-in-out;
          }
          @keyframes theme-zoom-out {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.8); opacity: 0; }
          }
          @keyframes theme-zoom-in {
            0% { transform: scale(1.2); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `;
                break;

            default: // fade
                css = `
          ::view-transition-old(root) {
            animation: theme-fade-out ${duration}ms ease-in-out;
          }
          ::view-transition-new(root) {
            animation: theme-fade-in ${duration}ms ease-in-out;
          }
        `;
        }

        style.textContent = css;
        document.head.appendChild(style);

        // Nettoyer après la transition
        setTimeout(() => {
            style.remove();
        }, duration + 100);
    }

    /**
     * Initialise le gestionnaire de thème
     */
    init(): void {
        this.updateThemeIcon();

        // Écouter les changements de préférence système
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                // Seulement si l'utilisateur n'a pas de préférence définie
                if (e.matches) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
                this.updateThemeIcon();
            }
        });
    }
}

// Export de l'instance singleton
export const themeManager = ThemeTransitionManager.getInstance();