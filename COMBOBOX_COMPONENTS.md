# Composants Combobox pour Thème et Langue

## Vue d'ensemble

Remplacement des boutons simples de thème et langue par des composants combobox élégants et fonctionnels.

## Composants Créés

### 1. Combobox.astro (Composant Générique)
**Localisation** : `src/components/ui/Combobox.astro`

**Fonctionnalités** :
- Composant réutilisable pour tous types de sélecteurs
- Support des icônes SVG
- Animations fluides (scale, opacity)
- Gestion clavier (Escape pour fermer)
- Accessibilité complète (ARIA)
- Positionnement configurable (left/right)

**Props** :
```typescript
interface Props {
  id: string;
  options: Option[];
  currentValue: string;
  triggerClass?: string;
  dropdownClass?: string;
  position?: 'bottom-left' | 'bottom-right';
}
```

### 2. ThemeSelector.astro
**Localisation** : `src/components/ui/ThemeSelector.astro`

**Options disponibles** :
- **Clair** (Light) - Icône soleil
- **Sombre** (Dark) - Icône lune  
- **Système** (System) - Icône moniteur

**Fonctionnalités** :
- Détection automatique du thème système
- Sauvegarde des préférences utilisateur
- Intégration avec View Transitions API
- Mise à jour dynamique de l'icône du trigger
- Support multilingue (FR/EN)

### 3. LanguageSelector.astro
**Localisation** : `src/components/ui/LanguageSelector.astro`

**Options disponibles** :
- **English** - Drapeau US stylisé
- **Français** - Drapeau FR stylisé

**Fonctionnalités** :
- Changement de langue avec préservation du contexte
- Sauvegarde de la préférence utilisateur
- Redirection intelligente vers la page équivalente
- Icônes de drapeaux personnalisées

## Intégration dans Navigation

### Avant
```astro
<!-- Boutons simples -->
<button id="theme-toggle">
  <Icon name="sun" />
</button>
<a href={otherLangPath}>
  <Icon name="languages" />
</a>
```

### Après
```astro
<!-- Composants combobox -->
<ThemeSelector lang={lang} />
<LanguageSelector lang={lang} currentPath={currentPath} />
```

## Gestion des États

### ThemeSelector
```javascript
// États possibles
localStorage.setItem('theme', 'light|dark');
localStorage.setItem('theme-system', 'true');

// Détection système
window.matchMedia('(prefers-color-scheme: dark)').matches
```

### LanguageSelector
```javascript
// Sauvegarde préférence
localStorage.setItem('preferred-lang', 'en|fr');

// Redirection intelligente
window.location.href = newPath;
```

## Styles et Animations

### Dropdown
- **Apparition** : `opacity: 0 → 1`, `scale: 0.95 → 1`
- **Position** : Absolute avec z-index élevé
- **Backdrop** : Blur effect pour l'élégance

### Trigger
- **Forme** : Cercle de 40px (w-10 h-10)
- **Hover** : Bordure qui change de couleur
- **Focus** : Ring d'accessibilité avec couleur accent

### Options
- **Hover** : Background secondaire
- **Active** : Couleur accent + icône check
- **Icônes** : SVG 16px avec couleurs cohérentes

## Accessibilité

### ARIA
- `aria-expanded` sur les triggers
- `role="listbox"` sur les dropdowns
- `role="option"` sur les éléments
- `aria-selected` pour l'état actuel

### Clavier
- **Escape** : Ferme tous les combobox
- **Click outside** : Ferme automatiquement
- **Focus visible** : Rings d'accessibilité

## Icônes SVG Intégrées

### Thème
```svg
<!-- Soleil, Lune, Moniteur -->
<g id="icon-sun">...</g>
<g id="icon-moon">...</g>
<g id="icon-monitor">...</g>
```

### Drapeaux
```svg
<!-- Drapeaux stylisés -->
<g id="icon-flag-us">...</g>
<g id="icon-flag-fr">...</g>
```

## Avantages

1. **UX Améliorée** : Plus d'options visibles d'un coup d'œil
2. **Professionnalisme** : Interface moderne et élégante
3. **Accessibilité** : Support complet clavier + screen readers
4. **Flexibilité** : Composant générique réutilisable
5. **Performance** : Gestion optimisée des événements
6. **Cohérence** : Style uniforme avec le reste du site

---

**Résultat** : Interface premium avec sélecteurs élégants pour thème et langue, offrant une meilleure expérience utilisateur.