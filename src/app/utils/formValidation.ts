import { UserFormData } from "../types/form";

export const validateStep = (step: number, formData: UserFormData): boolean => {
  switch (step) {
    case 1:
      return formData.name.trim().length >= 2;
    case 2:
      return formData.fitnessGoals.length > 0;
    case 3:
      return formData.currentWeight > 0;
    case 4:
      return formData.fitnessLevel !== undefined;
    case 5:
      return formData.workoutFrequency !== "";
    case 6:
      return formData.preferredActivities.length > 0;
    case 7:
      return true; // Étape facultative
    default:
      return false;
  }
};

export const getStepProgress = (
  currentStep: number,
  totalSteps: number
): number => {
  return Math.round((currentStep / totalSteps) * 100);
};

export const formatUserData = (formData: UserFormData): string => {
  return JSON.stringify(formData, null, 2);
};

export const getStepTitle = (step: number): string => {
  const titles = {
    1: "Présentations",
    2: "Vos objectifs",
    3: "Informations physiques",
    4: "Votre niveau",
    5: "Fréquence d'entraînement",
    6: "Activités préférées",
    7: "Personnalisation",
  };
  return titles[step as keyof typeof titles] || "Étape inconnue";
};

export const getStepDescription = (step: number): string => {
  const descriptions = {
    1: "Comment souhaitez-vous qu'on vous appelle ?",
    2: "Quels sont vos objectifs de fitness ?",
    3: "Parlez-nous de votre situation actuelle",
    4: "Quel est votre niveau d'expérience ?",
    5: "À quelle fréquence souhaitez-vous vous entraîner ?",
    6: "Quelles activités vous plaisent le plus ?",
    7: "Choisissez votre couleur préférée (facultatif)",
  };
  return (
    descriptions[step as keyof typeof descriptions] ||
    "Description indisponible"
  );
};

export const isStepRequired = (step: number): boolean => {
  return step !== 7; // Seule l'étape 7 (couleur) est facultative
};

export const canProceedToNextStep = (
  step: number,
  formData: UserFormData
): boolean => {
  if (!isStepRequired(step)) return true;
  return validateStep(step, formData);
};

export const getCompletedSteps = (formData: UserFormData): number[] => {
  const completedSteps: number[] = [];

  for (let i = 1; i <= 7; i++) {
    if (validateStep(i, formData)) {
      completedSteps.push(i);
    }
  }

  return completedSteps;
};

export const calculateFormCompletionPercentage = (
  formData: UserFormData
): number => {
  const completedSteps = getCompletedSteps(formData);
  const requiredSteps = 6; // Étapes 1-6 sont obligatoires
  const completedRequiredSteps = completedSteps.filter(
    (step) => step <= 6
  ).length;

  return Math.round((completedRequiredSteps / requiredSteps) * 100);
};
