/**
 * Script de filtrage réutilisable pour les grilles (Portfolio, Articles)
 */
export function initFilterGrid(containerId: string, cardClass: string) {
  const filterBtns = document.querySelectorAll(`#${containerId} .filter-btn`);
  const cards = document.querySelectorAll(`.${cardClass}`);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Reset tous les boutons
      filterBtns.forEach(b => {
        b.classList.remove('bg-[var(--color-accent)]', 'text-[var(--color-bg)]', 'border-[var(--color-accent)]');
        b.classList.add('border-[var(--color-border)]', 'text-[var(--color-text-muted)]');
      });
      
      // Active le bouton cliqué
      btn.classList.add('bg-[var(--color-accent)]', 'text-[var(--color-bg)]', 'border-[var(--color-accent)]');
      btn.classList.remove('border-[var(--color-border)]', 'text-[var(--color-text-muted)]');
      
      // Filtre les cartes
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        (card as HTMLElement).style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
      });
    });
  });
}
