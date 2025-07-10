# STRUCTURE DE L'APPLICATION TRAIN-REPEAT

## 📋 OVERVIEW GÉNÉRAL

**Train-Repeat** est une application Next.js/TypeScript d'entraînement connectée à une IA qui génère des plans d'entraînement personnalisés et les affiche dans un calendrier interactif.

## 🗂️ STRUCTURE DES DOSSIERS

```
/src/
├── app/                           # App Router Next.js
│   ├── page.tsx                   # Page d'accueil (Hero + ChatCTA)
│   ├── chat/
│   │   └── page.tsx              # Page du chat IA
│   ├── layout.tsx                # Layout principal avec Header
│   ├── globals.css               # Styles globaux
│   ├── api/
│   │   └── generate-plan/
│   │       └── route.ts          # API endpoint pour l'IA (À IMPLÉMENTER)
│   └── stores/
│       └── chatStore.ts          # Store Zustand pour le chat
├── components/
│   ├── hero/                     # Composants de la section Hero
│   │   ├── Hero.tsx              # Container principal Hero
│   │   ├── HeroTitle.tsx         # Titre animé
│   │   ├── HeroSignupForm.tsx    # Formulaire d'inscription simple
│   │   ├── HeroCTA.tsx           # Call-to-action principal
│   │   └── HeroAnimations.tsx    # Animations du Hero
│   ├── layout/                   # Composants de layout
│   │   ├── Header.tsx            # Header principal
│   │   ├── HeaderCTA.tsx         # Bouton CTA du header
│   │   ├── Navigation.tsx        # Navigation principale
│   │   ├── Logo.tsx              # Logo de l'app
│   │   ├── MobileMenu.tsx        # Menu mobile
│   │   ├── MobileMenuButton.tsx  # Bouton menu mobile
│   │   └── BackgroundLayout.tsx  # Layout avec background
│   ├── calendar/                 # Composants du calendrier
│   │   ├── WorkoutCalendar.tsx   # Calendrier principal
│   │   └── WorkoutModal.tsx      # Modal d'événement
│   ├── chat/                     # Composants du chat
│   │   └── ChatInterface.tsx     # Interface de chat IA
│   ├── ui/                       # Composants UI génériques
│   │   └── ChatCTA.tsx           # CTA vers le chat
│   └── WorkoutPlannerApp.tsx     # App principale (chat + calendrier)
├── types/                        # Types TypeScript
│   ├── chat.ts                   # Types pour le chat
│   ├── calendar.ts               # Types pour le calendrier
│   └── index.ts                  # Exports des types
└── styles/
    └── custom.css                # Styles personnalisés
```

## 🔗 CONNEXIONS ET FLUX DE NAVIGATION

### 1. Page d'accueil (`/`)

- **Composants** : `Hero` + `ChatCTA`
- **Boutons connectés** :
  - `HeroCTA` → `/chat` (bouton "Commencer maintenant")
  - `HeaderCTA` → `/chat` (bouton "Commencer" dans le header)
  - `ChatCTA` → `/chat` (bouton "Commencer votre plan" en bas de page)

### 2. Page Chat (`/chat`)

- **Composant principal** : `WorkoutPlannerApp`
- **Contient** : `ChatInterface` + `WorkoutCalendar`
- **Fonctionnalité** : Chat IA + Calendrier côte à côte

### 3. Navigation

- **Header** : Présent sur toutes les pages
- **Logo** → `/` (retour à l'accueil)
- **Navigation** : Liens vers différentes sections
- **Mobile** : Menu hamburger responsive

#### **Header (toutes les pages)**

- **Logo** → Retour à la page d'accueil (`/`)
- **Navigation** → Liens vers différentes sections
- **"Créer mon programme IA"** → Redirection vers `/chat`

#### **Page d'accueil (`/`)**

- **HeroSignupForm** :
  - Bouton "Continuer avec Google" → ⚠️ Non implémenté (doit rediriger vers `/chat`)
  - Bouton "Continuer avec Apple" → ⚠️ Non implémenté (doit rediriger vers `/chat`)
  - Formulaire email/password → `handleSubmit()` → `window.location.href = "/chat"`
- **HeroCTA** → Boutons d'action → ⚠️ À connecter vers `/chat`
- **ChatCTA** → Bouton "Commencer" → ⚠️ À connecter vers `/chat`

#### **Page Chat (`/chat`)**

- **Onglet "Chat IA"** → Interface de conversation
- **Onglet "Calendrier"** → Vue du calendrier d'entraînement
- **Bouton "Nouveau programme"** → `clearMessages()` + retour au chat

---

## 💬 SYSTÈME DE CHAT IA

### Store Zustand (`chatStore.ts`)

```typescript
interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  addMessage: (message: Message) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
}
```

### Types de messages (`chat.ts`)

```typescript
interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  workoutPlan?: WorkoutPlan; // Plan d'entraînement généré
}
```

### API Endpoint (`/api/generate-plan`)

**STATUS : ✅ IMPLÉMENTÉ** (avec OpenAI GPT-4o-mini et fallback simulation)

**Input attendu :**

```typescript
{
  message: string;           // Message de l'utilisateur
  userProfile?: {           // Profil utilisateur (optionnel)
    age?: number;
    fitnessLevel?: string;
    goals?: string[];
    equipment?: string[];
    timeAvailable?: number;
    injuries?: string[];
  }
}
```

**Output attendu :**

```typescript
{
  message: string;          // Réponse de l'IA
  workoutPlan?: {          // Plan d'entraînement structuré
    id: string;
    title: string;
    description: string;
    duration: number;
    difficulty: string;
    exercises: Exercise[];
    schedule: ScheduleItem[];
  }
}
```

## 📅 SYSTÈME DE CALENDRIER

### Types Calendar (`calendar.ts`)

```typescript
interface WorkoutEvent {
  id: string;
  title: string;
  date: Date;
  duration: number;
  exercises: Exercise[];
  difficulty: "beginner" | "intermediate" | "advanced";
  completed: boolean;
}

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
  restTime: number;
  instructions: string;
}
```

### Fonctionnalités actuelles

- **Affichage** : Vue hebdomadaire du calendrier
- **Interaction** : Clic sur un événement ouvre une modal responsive
- **Modal améliorée** : Interface large avec colonnes info/exercices, scroll pour les listes longues
- **UX/UI** : Design responsive desktop/mobile avec statistiques et actions
- **Status** : Marquer les entraînements comme terminés

### Fonctionnalités à implémenter

- **Multi-événements** : Plusieurs entraînements par jour
- **Vue mensuelle** : Basculer entre semaine/mois
- **Drag & Drop** : Déplacer les événements
- **Historique** : Voir les entraînements passés
- **Export** : PDF des plans d'entraînement

## 🤖 PROMPTS IA RECOMMANDÉS

### 1. Prompt de base pour générer un plan

```
En tant qu'expert en fitness, crée un plan d'entraînement personnalisé basé sur ces informations :
- Niveau : [niveau]
- Objectifs : [objectifs]
- Équipement disponible : [équipement]
- Temps disponible : [temps] minutes
- Restrictions : [blessures/limitations]

Fournis un plan structuré avec :
1. Titre du plan
2. Description générale
3. Durée totale
4. Niveau de difficulté
5. Liste d'exercices avec séries, répétitions, temps de repos
6. Planning sur 7 jours avec dates précises
7. Instructions détaillées pour chaque exercice
8. Conseils de sécurité

Format attendu : JSON structuré selon le type WorkoutPlan.
```

### 2. Prompt pour ajustement de plan

```
Ajuste le plan d'entraînement existant selon ces nouvelles informations :
- Plan actuel : [plan existant]
- Feedback utilisateur : [retours]
- Nouvelles contraintes : [contraintes]

Modifie uniquement les éléments nécessaires et explique les changements.
```

### 3. Prompt pour conseils personnalisés

```
En tant que coach fitness, donne des conseils personnalisés sur :
- Progression : [niveau actuel vs objectif]
- Nutrition : [objectifs fitness]
- Récupération : [intensité entraînement]
- Motivation : [défis rencontrés]

Réponds de manière encourageante et pratique.
```

## 🔧 POINTS À IMPLÉMENTER

### 1. ✅ COMPLÉTÉ - Intégration IA (PRIORITÉ HAUTE)

- ✅ **API OpenAI** : Implémentée dans `/api/generate-plan` avec clé API fonctionnelle
- ✅ **Parsing des réponses** : Conversion réponses IA en WorkoutPlan
- ✅ **Gestion d'erreurs** : Fallback sur simulation si l'IA ne répond pas
- ✅ **Rate limiting** : Gestion des erreurs API
- ✅ **Correction des IDs dupliqués** : Messages avec IDs uniques

### 2. ⚠️ EN COURS - Authentification (PRIORITÉ MOYENNE)

- ✅ **NextAuth.js** : Configuré mais temporairement désactivé
- ⚠️ **OAuth Google/Apple** : Boutons préparés mais non connectés (à faire plus tard)
- ⚠️ **Session management** : Basique, à améliorer
- ⚠️ **Profils utilisateur** : Structure prête, à implémenter

### 3. ✅ PARTIELLEMENT COMPLÉTÉ - Amélioration Calendrier (PRIORITÉ MOYENNE)

- ✅ **Affichage de base** : Vue hebdomadaire fonctionnelle
- ⚠️ **Multi-événements** : Gérer plusieurs entraînements/jour
- ⚠️ **Vue mensuelle** : Ajouter vue mois
- ⚠️ **Drag & Drop** : Déplacer les événements
- ⚠️ **Synchronisation** : Sync avec calendriers externes

### 4. ⚠️ EN COURS - UX/UI Améliorations (PRIORITÉ MOYENNE)

- ✅ **Loading states** : Indicateurs de chargement implémentés
- ✅ **Error handling** : Gestion des erreurs utilisateur
- ⚠️ **Notifications** : Rappels d'entraînement
- ⚠️ **Animations** : Transitions fluides

### 5. ⚠️ À FAIRE - Persistance des données (PRIORITÉ HAUTE)

- ⚠️ **Base de données** : Stocker plans et profils
- ⚠️ **Sauvegarde locale** : Cache navigateur
- ⚠️ **Sync** : Synchronisation multi-appareils
- ⚠️ **Export** : PDF, JSON des plans

- **Base de données** : Stocker plans et profils
- **Sauvegarde locale** : Cache navigateur
- **Sync** : Synchronisation multi-appareils
- **Export** : PDF, JSON des plans

## 🏗️ ARCHITECTURE TECHNIQUE

### Frontend

- **Next.js 14** : App Router, TypeScript
- **Tailwind CSS** : Styling responsive
- **Zustand** : State management
- **Framer Motion** : Animations (à ajouter)

### Backend

- **Next.js API Routes** : Endpoints serverless
- **IA Integration** : OpenAI/Claude/Anthropic
- **Database** : À choisir (Supabase, PlanetScale, etc.)
- **Auth** : NextAuth.js recommandé

### Déploiement

- **Vercel** : Déploiement automatique
- **Environment variables** : Clés API sécurisées
- **Analytics** : Suivi des performances

## 🎯 OBJECTIFS FINAUX

1. **Expérience utilisateur fluide** : Du chat à la génération de plan
2. **Plans d'entraînement intelligents** : Personnalisés par IA
3. **Calendrier interactif** : Gestion complète des entraînements
4. **Interface responsive** : Desktop et mobile
5. **Performance optimisée** : Chargement rapide, SEO

## 🚀 PROCHAINES ÉTAPES

1. ✅ **Implémenter l'API IA** : Route `/api/generate-plan` - COMPLÉTÉ
2. ✅ **Améliorer la modal calendrier** : Interface responsive et UX optimisée - COMPLÉTÉ
3. ⚠️ **Ajouter la persistance** : Base de données - PRIORITÉ HAUTE
4. ⚠️ **Améliorer le calendrier** : Multi-événements, vues - EN COURS
5. ⚠️ **Connecter l'authentification** : OAuth Google/Apple - Report à la fin
6. ⚠️ **Tester et optimiser** : Performance, UX
7. ⚠️ **Déployer en production** : Vercel, monitoring

## 📊 ÉTAT ACTUEL DU PROJET

**Progression : 80% terminé**

### ✅ FONCTIONNALITÉS TERMINÉES

- Interface utilisateur complète et responsive
- Chat IA fonctionnel avec OpenAI GPT-4o-mini
- Modal calendrier avec interface améliorée (large, scroll, responsive)
- Génération de plans d'entraînement personnalisés
- Navigation et connexions entre pages
- Génération de plans d'entraînement personnalisés
- Calendrier de base avec affichage des entraînements
- Gestion des erreurs et loading states
- Navigation fluide entre les pages

### ⚠️ FONCTIONNALITÉS EN COURS

- Authentification (préparée mais désactivée)
- Améliorations du calendrier
- Persistance des données

### ❌ FONCTIONNALITÉS À IMPLÉMENTER

- Base de données pour sauvegarder les plans
- Export PDF des programmes
- Notifications et rappels
- Synchronisation multi-appareils

**Le produit est maintenant fonctionnel pour les tests et démos. L'IA génère des plans personnalisés et les affiche dans le calendrier.**

---

**Ce fichier doit être maintenu à jour au fur et à mesure du développement pour servir de référence technique complète.**
error: string | null // Gestion d'erreurs
}

````

### **API Route (`/api/generate-plan`)**
**⚠️ STATUT : PARTIELLEMENT IMPLÉMENTÉ**

**Ce qui existe :**
- Route API configurée
- Types TypeScript définis
- Interface de chat fonctionnelle

**Ce qui manque :**
- **Intégration IA réelle** (OpenAI, Claude, etc.)
- **Logique de génération de plans**
- **Parsing des réponses IA**

### **Flux de Conversation**
1. **Utilisateur** saisit un message
2. **ChatInterface** → Ajoute le message au store
3. **Store** → Appel API `/api/generate-plan`
4. **API** → ⚠️ Doit traiter avec l'IA et retourner un plan
5. **Store** → Met à jour `currentPlan` et `messages`
6. **UI** → Affiche la réponse + bouton "Voir le calendrier"

---

## 📅 **Système de Calendrier**

### **Composants**
- **`WorkoutCalendar.tsx`** : Grille hebdomadaire (6h-21h)
- **`WorkoutModal.tsx`** : Modal de détails d'entraînement

### **Données Attendues**
Le calendrier attend un `WorkoutPlan[]` avec cette structure :

```typescript
interface WorkoutPlan {
  day: string                 // "Lundi", "Mardi", etc.
  type: "Workout" | "Rest" | "Active Recovery"
  details: string            // Description de l'entraînement
  intensity?: "Low" | "Medium" | "High"
  duration?: number          // Durée en minutes
  exercises?: Exercise[]     // Liste des exercices
}

interface Exercise {
  name: string              // Nom de l'exercice
  sets?: number            // Nombre de séries
  reps?: string           // Répétitions (ex: "8-12")
  weight?: string         // Poids (ex: "15kg")
  notes?: string          // Notes supplémentaires
}
````

### **Conversion pour le Calendrier**

Le `WorkoutPlan[]` est converti en `CalendarEvent[]` avec :

- **Positionnement temporel** (heures de début/fin)
- **Couleurs par type** d'entraînement
- **Gestion des conflits** (plusieurs événements/jour)

---

## 🤖 **Prompts IA Recommandés**

### **Données à Collecter**

L'IA devrait poser ces questions pour créer un plan personnalisé :

1. **Objectifs** :

   - Perte de poids, prise de muscle, endurance, force ?
   - Objectif principal et secondaire

2. **Niveau d'expérience** :

   - Débutant, intermédiaire, avancé
   - Expérience avec certains exercices

3. **Disponibilité** :

   - Combien de jours par semaine ?
   - Durée par séance (30min, 45min, 1h, 1h30+)
   - Créneaux horaires préférés

4. **Équipement** :

   - Salle de sport, maison, extérieur
   - Équipements disponibles (haltères, machines, etc.)

5. **Contraintes** :
   - Blessures ou limitations physiques
   - Préférences (pas de course, pas de squats, etc.)

### **Format de Réponse IA**

L'IA devrait retourner :

```json
{
  "plan": [
    {
      "day": "Lundi",
      "type": "Workout",
      "details": "Entraînement Haut du corps - Force",
      "intensity": "High",
      "duration": 60,
      "exercises": [
        {
          "name": "Développé couché",
          "sets": 4,
          "reps": "6-8",
          "weight": "70-80% 1RM",
          "notes": "Repos 2-3 min entre séries"
        }
      ]
    }
  ],
  "summary": "Programme force 4 jours/semaine",
  "goals": ["Gain de force", "Hypertrophie"],
  "duration": "8 semaines"
}
```

---

## 🔧 **Points à Implémenter**

### **⚠️ URGENT - API Chat IA**

1. **Intégrer un LLM** (OpenAI GPT, Claude, etc.)
2. **Créer les prompts système** pour la génération de plans
3. **Parser les réponses** en format `WorkoutPlanResponse`
4. **Gérer les erreurs** et timeouts

### **🔗 Connexions Manquantes**

1. **Boutons Google/Apple** → Authentification + redirection `/chat`
2. **HeroCTA buttons** → Liens vers `/chat`
3. **ChatCTA button** → Lien vers `/chat`

### **📱 Améliorations UX**

1. **Animation de chargement** pendant génération IA
2. **Gestion d'erreurs** avec messages utilisateur
3. **Sauvegarde locale** des plans générés
4. **Export PDF** des programmes
5. **Notifications** de rappel d'entraînement

### **🎨 Calendrier Avancé**

1. **Gestion multi-événements** par jour
2. **Vue mensuelle** en plus de la vue hebdomadaire
3. **Drag & drop** pour réorganiser les séances
4. **Historique** des entraînements complétés

---

## 🎯 **Objectif Final**

### **Expérience Utilisateur Cible**

1. **Inscription rapide** (Google/Apple/Email)
2. **Chat conversationnel** pour créer le plan
3. **Calendrier visuel** du programme
4. **Suivi des entraînements** semaine par semaine

### **MVP (Minimum Viable Product)**

- ✅ Interface complète
- ⚠️ **IA fonctionnelle** (principale lacune)
- ⚠️ **Authentification** basique
- ✅ Calendrier responsive
- ⚠️ **Sauvegarde** des données

**Le produit est à 70% terminé - il manque principalement l'intégration IA et l'authentification.**
