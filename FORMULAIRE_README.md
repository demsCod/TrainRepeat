# Formulaire d'inscription utilisateur

## 📋 Vue d'ensemble

Ce formulaire d'inscription multi-étapes collecte les informations nécessaires pour créer un profil utilisateur personnalisé pour une application de fitness. Il est conçu avec une interface moderne et intuitive utilisant Next.js et Tailwind CSS.

## 🎯 Fonctionnalités

### Étapes du formulaire

1. **Nom/Pseudonyme** - Comment l'utilisateur souhaite être appelé
2. **Objectifs de fitness** - Sélection multiple des objectifs sportifs
3. **Informations physiques** - Poids actuel et poids cible (facultatif)
4. **Niveau d'expérience** - Débutant, Intermédiaire, ou Avancé
5. **Fréquence d'entraînement** - Combien de fois par semaine
6. **Activités préférées** - Sélection multiple des sports/activités
7. **Couleur préférée** - Étape facultative pour la personnalisation du thème

### Fonctionnalités UI/UX

- **Barre de progression** - Indicateur visuel de l'avancement
- **Validation en temps réel** - Vérification des données saisies
- **Navigation fluide** - Boutons Précédent/Suivant intelligents
- **Récapitulatif** - Page de résumé avec possibilité de modification
- **Design responsive** - Adapté mobile, tablette et desktop
- **Animations et transitions** - Interface moderne et engageante

## 🏗️ Structure des composants

```
src/app/
├── components/
│   ├── FormComps/
│   │   ├── UserRegistrationForm.tsx     # Composant principal
│   │   ├── ProgressBar.tsx              # Barre de progression
│   │   ├── FormSummary.tsx              # Récapitulatif final
│   │   └── Steps/
│   │       ├── StepName.tsx             # Étape 1: Nom
│   │       ├── StepGoals.tsx            # Étape 2: Objectifs
│   │       ├── StepWeight.tsx           # Étape 3: Poids
│   │       ├── StepLevel.tsx            # Étape 4: Niveau
│   │       ├── StepFrequency.tsx        # Étape 5: Fréquence
│   │       ├── StepActivities.tsx       # Étape 6: Activités
│   │       └── StepColor.tsx            # Étape 7: Couleur
│   └── RegisterCTA.tsx                  # Call-to-action
├── types/
│   └── form.ts                          # Types TypeScript
├── utils/
│   └── formValidation.ts                # Logique de validation
└── register/
    └── page.tsx                         # Page du formulaire
```

## 🎨 Personnalisation des couleurs

Le formulaire inclut une palette de couleurs personnalisable :

- **Jade** (par défaut) - #29a383
- **Océan** - #0ea5e9
- **Violet** - #8b5cf6
- **Rose** - #ec4899
- **Orange** - #f97316
- **Rouge** - #ef4444
- **Émeraude** - #10b981
- **Indigo** - #6366f1

La couleur sélectionnée peut être utilisée pour personnaliser l'interface utilisateur de l'application.

## 📊 Données collectées

```typescript
interface UserFormData {
  name: string; // Nom/pseudonyme
  fitnessGoals: string[]; // Objectifs multiples
  currentWeight: number; // Poids actuel (kg)
  targetWeight?: number; // Poids cible (facultatif)
  fitnessLevel: "beginner" | "intermediate" | "advanced";
  workoutFrequency: string; // Fréquence d'entraînement
  preferredActivities: string[]; // Activités préférées
  favoriteColor?: string; // Couleur thème (facultatif)
}
```

## 🚀 Utilisation

### Intégration dans une page

```tsx
import { UserRegistrationForm } from "../components/FormComps/UserRegistrationForm";

export default function RegisterPage() {
  return (
    <main>
      <UserRegistrationForm />
    </main>
  );
}
```

### Lien vers le formulaire

```tsx
import Link from "next/link";

<Link href="/register">
  <button>Créer mon profil</button>
</Link>;
```

## 🔧 Validation

Le formulaire inclut une validation robuste :

- **Nom** : Minimum 2 caractères
- **Objectifs** : Au moins un objectif sélectionné
- **Poids** : Valeur numérique positive
- **Niveau** : Une option sélectionnée
- **Fréquence** : Une option sélectionnée
- **Activités** : Au moins une activité sélectionnée
- **Couleur** : Facultative

## 📱 Responsive Design

Le formulaire est optimisé pour tous les écrans :

- **Mobile** : Interface tactile, boutons larges
- **Tablette** : Layout adaptatif, grilles optimisées
- **Desktop** : Pleine largeur, interactions avancées

## 🎭 Animations

- **Transitions fluides** entre les étapes
- **Effets de hover** sur les boutons et cartes
- **Animations d'apparition** pour le contenu
- **Indicateurs visuels** de progression
- **Feedback visuel** en temps réel

## 🔄 Gestion d'état

Le formulaire utilise React useState pour :

- **Données du formulaire** : État centralisé
- **Étape actuelle** : Navigation entre étapes
- **Validation** : Vérification en temps réel
- **Affichage** : Basculement entre formulaire et résumé

## 🎯 Conseils d'utilisation

1. **Personnalisation** : Modifiez les couleurs dans `types/form.ts`
2. **Validation** : Ajustez les règles dans `utils/formValidation.ts`
3. **Étapes** : Ajoutez/supprimez des étapes selon vos besoins
4. **Traitement** : Implémentez la logique de sauvegarde dans `handleSubmit`
5. **Thème** : Utilisez la couleur sélectionnée pour la personnalisation

Le formulaire est prêt à être utilisé et peut être facilement adapté à vos besoins spécifiques !
