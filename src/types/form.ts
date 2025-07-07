export interface UserFormData {
  name: string;
  fitnessGoals: string[];
  currentWeight: number;
  targetWeight?: number;
  fitnessLevel: "beginner" | "intermediate" | "advanced";
  workoutFrequency: string;
  preferredActivities: string[];
  favoriteColor?: string;
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isRequired: boolean;
}

export interface ColorOption {
  id: string;
  name: string;
  value: string;
  gradient: string;
}

export const FITNESS_GOALS = [
  "Perdre du poids",
  "Gagner du muscle",
  "Améliorer l'endurance",
  "Maintenir la forme",
  "Réduire le stress",
  "Améliorer la flexibilité",
  "Préparer une compétition",
  "Rééducation/récupération",
] as const;

export const FITNESS_LEVELS = [
  {
    value: "beginner",
    label: "Débutant",
    description: "Moins de 6 mois d'expérience",
  },
  {
    value: "intermediate",
    label: "Intermédiaire",
    description: "6 mois à 2 ans d'expérience",
  },
  {
    value: "advanced",
    label: "Avancé",
    description: "Plus de 2 ans d'expérience",
  },
] as const;

export const WORKOUT_FREQUENCIES = [
  "1-2 fois par semaine",
  "3-4 fois par semaine",
  "5-6 fois par semaine",
  "Tous les jours",
] as const;

export const PREFERRED_ACTIVITIES = [
  "Musculation",
  "Cardio",
  "Yoga",
  "Pilates",
  "Course à pied",
  "Cyclisme",
  "Natation",
  "Sports collectifs",
  "Arts martiaux",
  "Danse",
  "Escalade",
  "Randonnée",
] as const;

export const COLOR_PALETTE: ColorOption[] = [
  {
    id: "jade",
    name: "Jade",
    value: "#29a383",
    gradient: "from-jade-8 to-jade-9",
  },
  {
    id: "blue",
    name: "Océan",
    value: "#0ea5e9",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: "purple",
    name: "Violet",
    value: "#8b5cf6",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    id: "pink",
    name: "Rose",
    value: "#ec4899",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    id: "orange",
    name: "Orange",
    value: "#f97316",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    id: "red",
    name: "Rouge",
    value: "#ef4444",
    gradient: "from-red-400 to-red-600",
  },
  {
    id: "emerald",
    name: "Émeraude",
    value: "#10b981",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    id: "indigo",
    name: "Indigo",
    value: "#6366f1",
    gradient: "from-indigo-400 to-indigo-600",
  },
];
