# Guide des Thèmes - TrainRepeat

## Comment changer de thème

1. Ouvrir `tailwind.config.js`
2. Modifier les constantes en haut du fichier :

```javascript
const CURRENT_THEME = "blue"; // Options: "blue", "purple", "green", "orange"
const CURRENT_MODE = "light"; // Options: "light", "dark"
```

3. Sauvegarder le fichier
4. Le serveur de développement redémarrera automatiquement

## Thèmes disponibles

### 🔵 Blue (Défaut)

- **Clair** : Bleu moderne avec fond blanc, excellent contraste
- **Sombre** : Fond noir profond avec accents bleus vibrants
- Usage : Professionnel, technologie, santé

### 🟣 Purple

- **Clair** : Violet élégant avec fond blanc
- **Sombre** : Fond noir avec accents violets créatifs
- Usage : Créatif, lifestyle, premium

### 🟢 Green

- **Clair** : Vert naturel avec fond blanc
- **Sombre** : Fond noir avec accents verts énergiques
- Usage : Santé, sport, nature, écologie

### 🟠 Orange

- **Clair** : Orange dynamique avec fond blanc
- **Sombre** : Fond noir avec accents oranges chaleureux
- Usage : Énergie, motivation, sport intensif

## Échelle de couleurs Radix UI

Notre système respecte les conventions Radix UI avec 12 niveaux :

### Backgrounds (1-2)

- `app-bg` : Fond principal de l'application
- `bg-subtle` : Fond subtil pour les sections

### UI Components (3-5)

- `ui-bg` : Fond des composants
- `ui-bg-hover` : Survol des composants
- `ui-bg-active` : État actif/sélectionné

### Borders (6-8)

- `border-subtle` : Bordures subtiles
- `border` : Bordures principales
- `border-hover` : Bordures au survol

### Solid Colors (9-10)

- `primary` : Couleur principale solide
- `primary-hover` : Survol de la couleur principale

### Text (11-12)

- `text-low` : Texte à faible contraste
- `text-high` : Texte à fort contraste

## Couleurs sémantiques

- `success` : Vert pour les succès
- `warning` : Orange pour les avertissements
- `error` : Rouge pour les erreurs
- `info` : Couleur principale pour l'info
- `neutral` : Gris neutre (boutons comme Apple)

## Exemples d'utilisation

```tsx
// Fond principal
<div className="bg-app-bg">

// Carte avec fond subtil
<div className="bg-ui-bg border border-border">

// Bouton principal
<button className="bg-primary hover:bg-primary-hover text-white">

// Texte principal et secondaire
<h1 className="text-text-high">Titre</h1>
<p className="text-text-low">Description</p>
```

## Améliorer les contrastes

✅ **Améliorations apportées** :

- Fonds sombres vraiment sombres (#0a0a0a)
- Textes blancs purs (#ffffff) en mode sombre
- Accents vibrants et lisibles
- Bordures avec bon contraste
- Respect des guidelines d'accessibilité

## Testez facilement

Pour tester rapidement tous les thèmes :

1. **Bleu clair** : `CURRENT_THEME = "blue"`, `CURRENT_MODE = "light"`
2. **Bleu sombre** : `CURRENT_THEME = "blue"`, `CURRENT_MODE = "dark"`
3. **Violet sombre** : `CURRENT_THEME = "purple"`, `CURRENT_MODE = "dark"`
4. **Vert clair** : `CURRENT_THEME = "green"`, `CURRENT_MODE = "light"`
5. **Orange sombre** : `CURRENT_THEME = "orange"`, `CURRENT_MODE = "dark"`
