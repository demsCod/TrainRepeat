# 🏋️‍♂️ Train Repeat - Générateur de Programmes d'Entraînement IA

## 📁 Structure du Projet

```
src/app/
├── components/
│   ├── HeaderComps/          # Composants d'en-tête
│   ├── HeroComps/            # Composants de section héro
│   ├── FormComps/            # Formulaire d'inscription multi-étapes
│   │   └── Steps/            # Étapes du formulaire
│   ├── ChatComps/            # Interface de chat avec IA
│   ├── CalendarComps/        # Calendrier d'entraînement
│   ├── ChatCTA.tsx           # Call-to-action pour le chat
│   └── WorkoutPlannerApp.tsx # App principale chat + calendrier
├── api/
│   └── generate-plan/        # API pour générer les programmes
├── types/
│   ├── form.ts              # Types pour le formulaire
│   └── chat.ts              # Types pour chat et calendrier
├── stores/
│   └── chatStore.ts         # Store Zustand pour le chat
├── utils/
│   └── formValidation.ts    # Validation du formulaire
├── chat/                    # Page du chat IA
├── register/                # Page d'inscription
└── globals.css              # Styles globaux
```

## 🚀 Fonctionnalités

### 1. 📝 Formulaire d'Inscription Multi-Étapes

- **Localisation** : `/register`
- **Composants** : `FormComps/`
- **Étapes** : Nom, Objectifs, Poids, Niveau, Fréquence, Activités, Couleur
- **Features** : Validation temps réel, navigation fluide, design sobre

### 2. 🤖 Chat IA pour Programmes d'Entraînement

- **Localisation** : `/chat`
- **Composants** : `ChatComps/`, `CalendarComps/`
- **Features** :
  - Interface de chat conversationnel
  - Génération automatique de programmes
  - Visualisation en calendrier interactif
  - Détails des séances en modal

### 3. 📅 Calendrier d'Entraînement

- **Librairie** : `react-big-calendar`
- **Features** :
  - Vue mensuelle, hebdomadaire, quotidienne
  - Événements colorés par type (workout, rest, recovery)
  - Modals détaillés pour chaque séance
  - Responsive design

## 🛠️ Technologies Utilisées

- **Frontend** : Next.js 14, React 18, TypeScript
- **Styling** : Tailwind CSS
- **State Management** : Zustand
- **Calendar** : React Big Calendar + Moment.js
- **API** : Next.js API Routes

## 🎨 Design System

### Palette de Couleurs (Jade)

- **Primary** : `jade-8` (#059669), `jade-9` (#047857)
- **Secondary** : `jade-1` (#f0fdfa), `jade-2` (#ccfbf1)
- **Accents** : Gradients jade, ombres subtiles

### Principes de Design

- **Sobriété** : Design épuré, émojis uniquement pour les activités
- **Modernité** : Bordures arrondies, animations fluides
- **Accessibilité** : Contrastes respectés, navigation clavier

## 📡 API

### `POST /api/generate-plan`

Génère un programme d'entraînement personnalisé

**Body** :

```json
{
  "prompt": "Programme muscu 4x/semaine, objectif prise de masse"
}
```

**Response** :

```json
{
  "plan": [
    {
      "day": "Monday",
      "type": "Workout",
      "details": "Haut du corps - Pectoraux, épaules, triceps",
      "intensity": "High",
      "duration": 60,
      "exercises": [...]
    }
  ],
  "summary": "Programme créé avec succès...",
  "goals": ["Développer la masse musculaire"],
  "duration": "4 semaines"
}
```

## 🔧 Installation & Développement

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build
npm run build
```

## 🌟 Features Avancées

### Chat IA

- **Analyse intelligente** : Extraction automatique des paramètres (fréquence, focus, objectifs)
- **Réponses contextuelles** : Programmes adaptés au niveau et disponibilité
- **Historique** : Sauvegarde des conversations et programmes

### Calendrier

- **Interactivité** : Clic sur événements pour détails
- **Personnalisation** : Couleurs par type d'entraînement
- **Responsive** : Adaptation mobile/desktop

### Formulaire

- **Validation** : Temps réel avec feedback visuel
- **Progression** : Barre de progression dynamique
- **Récapitulatif** : Page de synthèse avant soumission

## 📱 Responsive Design

- **Mobile-first** : Optimisé pour tous les écrans
- **Navigation** : Menu hamburger sur mobile
- **Calendrier** : Vues adaptées par taille d'écran
- **Chat** : Interface tactile optimisée

## 🔜 Évolutions Possibles

1. **Intégration IA réelle** : Connexion API OpenAI, Hugging Face
2. **Authentification** : Comptes utilisateurs, sauvegarde cloud
3. **Notifications** : Rappels push pour les séances
4. **Export** : PDF, iCal, partage social
5. **Analyse** : Statistiques de progression, métriques
6. **Communauté** : Partage de programmes, challenges

## 📄 Licence

Ce projet est un prototype de démonstration pour l'intégration d'IA dans le fitness.
