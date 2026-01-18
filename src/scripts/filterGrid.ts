/**
 * Script de filtrage réutilisable et amélioré pour les grilles (Portfolio, Articles)
 */

interface FilterState {
  activeFilter: string;
  totalItems: number;
  visibleItems: number;
}

class FilterGrid {
  private containerId: string;
  private cardClass: string;
  private state: FilterState;
  private filterBtns: NodeListOf<Element>;
  private cards: NodeListOf<Element>;

  constructor(containerId: string, cardClass: string) {
    this.containerId = containerId;
    this.cardClass = cardClass;
    this.filterBtns = document.querySelectorAll(`#${containerId} .filter-btn`);
    this.cards = document.querySelectorAll(`.${cardClass}`);
    
    this.state = {
      activeFilter: 'all',
      totalItems: this.cards.length,
      visibleItems: this.cards.length
    };

    this.init();
  }

  private init(): void {
    if (this.filterBtns.length === 0 || this.cards.length === 0) {
      console.warn(`FilterGrid: No buttons or cards found for ${this.containerId}`);
      return;
    }

    this.attachEventListeners();
    this.updateCounter();
  }

  private attachEventListeners(): void {
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.getAttribute('data-filter');
        if (filter) {
          this.setActiveFilter(filter);
        }
      });
    });
  }

  private setActiveFilter(filter: string): void {
    if (this.state.activeFilter === filter) return;

    this.state.activeFilter = filter;
    this.updateButtonStates();
    this.filterCards(filter);
    this.updateCounter();
    this.announceFilterChange(filter);
  }

  private updateButtonStates(): void {
    this.filterBtns.forEach(btn => {
      const btnFilter = btn.getAttribute('data-filter');
      const isActive = btnFilter === this.state.activeFilter;
      
      // Utiliser les classes CSS définies dans buttons.css
      if (isActive) {
        btn.classList.add('active');
        btn.classList.remove('border-[var(--color-border)]', 'text-[var(--color-text-muted)]');
        btn.classList.add('bg-[var(--color-text)]', 'text-[var(--color-bg)]', 'border-[var(--color-text)]');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.classList.remove('bg-[var(--color-text)]', 'text-[var(--color-bg)]', 'border-[var(--color-text)]');
        btn.classList.add('border-[var(--color-border)]', 'text-[var(--color-text-muted)]');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  private filterCards(filter: string): void {
    let visibleCount = 0;

    this.cards.forEach((card, index) => {
      const category = card.getAttribute('data-category');
      const shouldShow = filter === 'all' || category === filter;
      
      if (shouldShow) {
        this.showCard(card as HTMLElement, index);
        visibleCount++;
      } else {
        this.hideCard(card as HTMLElement);
      }
    });

    this.state.visibleItems = visibleCount;
  }

  private showCard(card: HTMLElement, index: number): void {
    card.style.display = 'block';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    // Animation d'apparition avec délai échelonné
    setTimeout(() => {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  }

  private hideCard(card: HTMLElement): void {
    card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      card.style.display = 'none';
    }, 200);
  }

  private updateCounter(): void {
    const counter = document.querySelector(`#${this.containerId}-counter`);
    if (counter) {
      counter.textContent = `${this.state.visibleItems} / ${this.state.totalItems}`;
    }
  }

  private announceFilterChange(filter: string): void {
    // Accessibilité : annoncer le changement aux lecteurs d'écran
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Filtered to ${filter}. Showing ${this.state.visibleItems} of ${this.state.totalItems} items.`;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }

  // API publique
  public getState(): FilterState {
    return { ...this.state };
  }

  public setFilter(filter: string): void {
    this.setActiveFilter(filter);
  }

  public reset(): void {
    this.setActiveFilter('all');
  }
}

// Instance globale pour réutilisation
const filterInstances = new Map<string, FilterGrid>();

/**
 * Initialise un système de filtrage pour une grille
 * @param containerId - ID du conteneur des boutons de filtre
 * @param cardClass - Classe CSS des cartes à filtrer
 * @returns Instance FilterGrid pour contrôle programmatique
 */
export function initFilterGrid(containerId: string, cardClass: string): FilterGrid {
  const key = `${containerId}-${cardClass}`;
  
  if (filterInstances.has(key)) {
    return filterInstances.get(key)!;
  }

  const instance = new FilterGrid(containerId, cardClass);
  filterInstances.set(key, instance);
  
  return instance;
}

/**
 * Récupère une instance de FilterGrid existante
 */
export function getFilterGrid(containerId: string, cardClass: string): FilterGrid | undefined {
  const key = `${containerId}-${cardClass}`;
  return filterInstances.get(key);
}

/**
 * Nettoie toutes les instances (utile pour les SPA)
 */
export function cleanupFilterGrids(): void {
  filterInstances.clear();
}