/**
 * Script pour rendre les tableaux responsifs dans les articles
 * Ajoute des wrappers et gère le scroll horizontal
 */

export function initResponsiveTables() {
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTables);
  } else {
    setupTables();
  }
}

function setupTables() {
  // Sélectionner tous les tableaux dans le contenu des articles
  const tables = document.querySelectorAll('.article-content table');
  
  tables.forEach((table) => {
    // Vérifier si le tableau n'est pas déjà wrappé
    if (table.parentElement?.classList.contains('table-wrapper')) {
      return;
    }
    
    // Créer un wrapper pour le scroll horizontal
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    
    // Insérer le wrapper avant le tableau
    table.parentNode?.insertBefore(wrapper, table);
    
    // Déplacer le tableau dans le wrapper
    wrapper.appendChild(table);
    
    // Ajouter les labels data-label pour le mode mobile
    addDataLabels(table as HTMLTableElement);
    
    // Gérer l'indicateur de scroll sur tablet
    handleScrollIndicator(wrapper);
  });
}

function addDataLabels(table: HTMLTableElement) {
  const headers = Array.from(table.querySelectorAll('thead th')).map(
    (th) => th.textContent?.trim() || ''
  );
  
  const rows = table.querySelectorAll('tbody tr');
  
  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    cells.forEach((cell, index) => {
      if (headers[index]) {
        cell.setAttribute('data-label', headers[index]);
      }
    });
  });
}

function handleScrollIndicator(wrapper: HTMLElement) {
  const table = wrapper.querySelector('table');
  if (!table) return;
  
  // Vérifier si on peut scroller
  const checkScroll = () => {
    const isScrollable = wrapper.scrollWidth > wrapper.clientWidth;
    const isAtEnd = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 5;
    
    if (isScrollable && isAtEnd) {
      wrapper.classList.add('scrolled-end');
    } else {
      wrapper.classList.remove('scrolled-end');
    }
  };
  
  // Vérifier au chargement et au resize
  checkScroll();
  window.addEventListener('resize', checkScroll);
  wrapper.addEventListener('scroll', checkScroll);
}

// Auto-initialiser si le module est importé
if (typeof window !== 'undefined') {
  initResponsiveTables();
}
