# Train Repeat - Structure du Projet

## Organisation des Dossiers

### `/src/components/`

Structure principale des composants organisés par fonctionnalité :

#### `/calendar/`

- `WorkoutCalendar.tsx` - Composant principal du calendrier d'entraînement
- `WorkoutModal.tsx` - Modal de détail des entraînements

#### `/chat/`

- `ChatInterface.tsx` - Interface de chat avec l'IA

#### `/hero/`

- `Hero.tsx` - Composant principal de la section hero
- `HeroTitle.tsx` - Titre animé
- `HeroSignupForm.tsx` - Formulaire d'inscription
- `HeroCTA.tsx` - Call-to-action buttons
- `HeroAnimations.tsx` - Animations de la section hero
- `HeroBackground.tsx` - Arrière-plan animé
- `HeroStats.tsx` - Statistiques affichées
- `HeroSubtitle.tsx` - Sous-titre

#### `/layout/`

- `Header.tsx` - En-tête principal
- `Logo.tsx` - Logo de l'application
- `Navigation.tsx` - Menu de navigation
- `HeaderCTA.tsx` - Boutons d'action dans le header
- `MobileMenu.tsx` - Menu mobile
- `MobileMenuButton.tsx` - Bouton menu mobile
- `BackgroundLayout.tsx` - Layout avec arrière-plan

#### `/forms/`

- `UserRegistrationForm.tsx` - Formulaire d'inscription utilisateur

#### `/ui/`

- `ChatCTA.tsx` - Call-to-action pour le chat
- `RegisterCTA.tsx` - Call-to-action pour l'inscription

#### Composants principaux :

- `WorkoutPlannerApp.tsx` - Application principale de planification

### `/src/types/`

Types TypeScript organisés par domaine :

- `index.ts` - Export de tous les types
- `chat.ts` - Types pour le chat et les plans d'entraînement
- `calendar.ts` - Types pour le calendrier
- `form.ts` - Types pour les formulaires

### `/src/styles/`

Styles globaux et spécifiques :

- `custom.css` - Styles personnalisés

### `/src/lib/`

Utilitaires et fonctions partagées

### `/src/app/`

Structure Next.js :

- `layout.tsx` - Layout principal
- `page.tsx` - Page d'accueil
- `globals.css` - Styles globaux
- `/chat/page.tsx` - Page de chat
- `/register/page.tsx` - Page d'inscription
- `/stores/` - Stores Zustand

## Fonctionnalités Principales

### Calendrier d'Entraînement

- Vue hebdomadaire avec grille horaire (6h-21h)
- Événements colorés par type d'entraînement
- Navigation entre semaines
- Modal de détail des entraînements
- Responsive design

### Chat IA

- Interface conversationnelle pour créer des plans d'entraînement
- Génération de programmes personnalisés
- Historique des conversations

### Inscription Utilisateur

- Formulaire multi-étapes
- Validation en temps réel
- Collecte des préférences d'entraînement

## Technologies Utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Zustand** - Gestion d'état
- **React Hook Form** - Gestion des formulaires

## Structure Supprimée

Les anciens dossiers suivants ont été supprimés lors de la restructuration :

- `/src/app/components/CalendarComps/` (contenait les anciens composants de calendrier)
- `/src/app/components/ChatComps/` (déplacé vers `/src/components/chat/`)
- `/src/app/components/HeroComps/` (déplacé vers `/src/components/hero/`)
- `/src/app/components/HeaderComps/` (déplacé vers `/src/components/layout/`)
- `/src/app/components/FormComps/` (déplacé vers `/src/components/forms/`)
- `/src/app/types/` (déplacé vers `/src/types/`)

## Développement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build de production
npm run build
```

L'application est maintenant accessible sur http://localhost:3001
