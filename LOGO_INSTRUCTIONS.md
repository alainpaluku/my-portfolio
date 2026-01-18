# Instructions pour le Logo

## Ajout de votre logo.png

Pour que votre site fonctionne correctement, vous devez ajouter votre fichier `logo.png` dans le dossier `public/`.

### Spécifications recommandées :

- **Format** : PNG avec transparence
- **Taille** : 512x512 pixels (minimum 192x192)
- **Qualité** : Haute résolution pour un rendu net sur tous les appareils
- **Nom** : Exactement `logo.png` (respecter la casse)

### Utilisation :

Le logo sera utilisé pour :
- ✅ **Favicon** (icône dans l'onglet du navigateur)
- ✅ **PWA** (icône de l'application web progressive)
- ✅ **Apple Touch Icon** (icône sur iOS)
- ✅ **Manifest** (icône dans le manifest PWA)

### Emplacement :

```
portfolio-site/
├── public/
│   ├── logo.png  ← Votre logo ici
│   └── manifest.json
```

### Note :

Le logo n'apparaîtra PAS dans le site lui-même (navigation, footer, etc.). 
Le site utilise le logo textuel "ALAIN PALUKU" pour la navigation.

Si vous voulez modifier le texte du logo, éditez les fichiers :
- `src/components/Navigation.astro`
- `src/components/Footer.astro`