# Guide des Thèmes - TrainRepeat

Ce projet utilise le système de couleurs Radix UI pour garantir une cohérence visuelle et une accessibilité optimale.

## Configuration Actuelle

Dans `tailwind.config.js`, modifiez ces deux variables pour changer le thème :

```javascript
const CURRENT_THEME = "blue"; // Changez ici: "blue", "purple", "green"
const CURRENT_MODE = "light"; // Changez ici: "light", "dark"
```

## Thèmes Disponibles

### 🔵 Blue (Défaut)

- **Light** : Fond blanc/gris très clair, accents bleus
- **Dark** : Fond sombre, accents bleus lumineux

### 🟣 Purple

- **Light** : Fond blanc/gris très clair, accents violets
- **Dark** : Fond sombre, accents violets lumineux

### 🟢 Green

- **Light** : Fond blanc/gris très clair, accents verts
- **Dark** : Fond sombre, accents verts lumineux

## Échelle Radix UI (Respectée)

Chaque couleur suit l'échelle Radix 1-12 :

| Step | Usage                      | Alias dans le projet     |
| ---- | -------------------------- | ------------------------ |
| 1    | App background             | `app-bg`                 |
| 2    | Subtle background          | `bg-subtle`, `surface`   |
| 3    | UI element background      | `ui-bg`, `surface-hover` |
| 4    | Hovered UI element         | `ui-bg-hover`            |
| 5    | Active/Selected UI element | `ui-bg-active`           |
| 6    | Subtle borders             | `border-subtle`          |
| 7    | UI element border          | `border`                 |
| 8    | Hovered UI element border  | `border-hover`           |
| 9    | Solid backgrounds          | `primary`                |
| 10   | Hovered solid backgrounds  | `primary-hover`          |
| 11   | Low-contrast text          | `text-low`, `text-muted` |
| 12   | High-contrast text         | `text-high`, `text`      |

## Comment Changer de Thème

1. Ouvrez `tailwind.config.js`
2. Modifiez `CURRENT_THEME` (`"blue"`, `"purple"`, `"green"`)
3. Modifiez `CURRENT_MODE` (`"light"`, `"dark"`)
4. Redémarrez le serveur de développement

## Exemple de Changement

```javascript
// Pour un thème purple sombre
const CURRENT_THEME = "purple";
const CURRENT_MODE = "dark";
```

## Ajouter un Nouveau Thème

1. Ajoutez votre thème dans l'objet `THEMES`
2. Respectez l'échelle Radix 1-12 pour `gray` et votre couleur principale
3. Définissez les versions `light` et `dark`

```javascript
monTheme: {
  light: {
    gray1: "#...", // App background
    gray2: "#...", // Subtle background
    // ... gray3 à gray12
    blue1: "#...", // Votre couleur principale step 1
    // ... blue2 à blue12
  },
  dark: {
    // Même structure pour le mode sombre
  }
}
```

## Alias Utilisés dans les Composants

- `bg-app-bg` : Fond principal de l'app
- `bg-surface` : Fond des composants
- `bg-primary` : Boutons et éléments principaux
- `text-text` : Texte principal
- `text-text-muted` : Texte secondaire
- `border-border` : Bordures des composants

Tous les composants utilisent ces alias sémantiques, garantissant que le changement de thème se propage automatiquement partout.
