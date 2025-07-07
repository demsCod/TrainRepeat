import { NextRequest, NextResponse } from "next/server";
import { WorkoutPlanResponse, WorkoutPlan, Exercise } from "../../types/chat";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Le prompt est requis" },
        { status: 400 }
      );
    }

    // Simulation d'un appel à une API IA (remplacez par votre API réelle)
    const response = await generateWorkoutPlan(prompt);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Erreur lors de la génération du plan:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

// Fonction simulée - remplacez par votre appel API réel
async function generateWorkoutPlan(
  prompt: string
): Promise<WorkoutPlanResponse> {
  // Simuler un délai d'API
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Analyser le prompt pour extraire des informations
  const lowerPrompt = prompt.toLowerCase();
  const frequency = extractFrequency(lowerPrompt);
  const focus = extractFocus(lowerPrompt);

  // Générer un plan basé sur l'analyse
  const plan = generatePlanBasedOnPrompt(frequency, focus);

  return {
    plan,
    summary: `J'ai créé un programme d'entraînement personnalisé de ${frequency} séances par semaine, axé sur ${focus}. Le programme inclut des jours de repos pour une récupération optimale.`,
    goals: extractGoals(lowerPrompt),
    duration: "4 semaines",
  };
}

function extractFrequency(prompt: string): number {
  if (prompt.includes("6 fois") || prompt.includes("6x")) return 6;
  if (prompt.includes("5 fois") || prompt.includes("5x")) return 5;
  if (prompt.includes("4 fois") || prompt.includes("4x")) return 4;
  if (prompt.includes("3 fois") || prompt.includes("3x")) return 3;
  if (prompt.includes("2 fois") || prompt.includes("2x")) return 2;
  return 3; // par défaut
}

function extractFocus(prompt: string): string {
  if (prompt.includes("muscu") || prompt.includes("musculation"))
    return "la musculation";
  if (prompt.includes("cardio")) return "le cardio";
  if (prompt.includes("yoga")) return "le yoga";
  if (prompt.includes("pilates")) return "le pilates";
  if (prompt.includes("force")) return "la force";
  if (prompt.includes("endurance")) return "l'endurance";
  return "le fitness général";
}

function extractGoals(prompt: string): string[] {
  const goals = [];
  if (prompt.includes("muscle") || prompt.includes("masse"))
    goals.push("Développer la masse musculaire");
  if (prompt.includes("force")) goals.push("Augmenter la force");
  if (prompt.includes("cardio") || prompt.includes("endurance"))
    goals.push("Améliorer l'endurance cardiovasculaire");
  if (prompt.includes("poids") || prompt.includes("maigrir"))
    goals.push("Perdre du poids");
  if (prompt.includes("forme"))
    goals.push("Améliorer la forme physique générale");
  if (goals.length === 0) goals.push("Améliorer la condition physique");
  return goals;
}

function generatePlanBasedOnPrompt(
  frequency: number,
  focus: string
): WorkoutPlan[] {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const plan = [];

  for (let i = 0; i < 7; i++) {
    const day = days[i];

    if (i < frequency) {
      // Jours d'entraînement
      plan.push({
        day,
        type: "Workout" as const,
        details: getWorkoutDetails(focus, i),
        intensity: getIntensity(i, frequency),
        duration: 60,
        exercises: getExercises(focus, i),
      });
    } else if (i === frequency && frequency < 6) {
      // Jour de récupération active
      plan.push({
        day,
        type: "Active Recovery" as const,
        details: "Récupération active - marche, étirements, mobilité",
        intensity: "Low" as const,
        duration: 30,
      });
    } else {
      // Jours de repos
      plan.push({
        day,
        type: "Rest" as const,
        details: "Repos complet - récupération et régénération",
        intensity: "Low" as const,
        duration: 0,
      });
    }
  }

  return plan;
}

function getWorkoutDetails(focus: string, dayIndex: number): string {
  const workoutTypes = {
    "la musculation": [
      "Haut du corps - Pectoraux, épaules, triceps",
      "Dos et biceps - Développement de la largeur",
      "Jambes - Quadriceps, ischio-jambiers, mollets",
      "Corps complet - Circuit training",
      "Haut du corps - Volume et définition",
      "Jambes et fessiers - Force et puissance",
    ],
    "le cardio": [
      "HIIT - Entraînement par intervalles",
      "Endurance - Course/vélo longue durée",
      "Circuit cardio - Exercices variés",
      "Cardio doux - Récupération active",
      "Fractionné - Amélioration VO2 max",
      "Cross-training - Activités mixtes",
    ],
  };

  return (
    workoutTypes[focus]?.[dayIndex] ||
    `Entraînement ${focus} - Séance ${dayIndex + 1}`
  );
}

function getIntensity(
  dayIndex: number,
  frequency: number
): "Low" | "Medium" | "High" {
  if (frequency <= 3) return dayIndex === 0 ? "High" : "Medium";
  if (frequency <= 5) return dayIndex % 2 === 0 ? "High" : "Medium";
  return dayIndex % 3 === 0 ? "High" : dayIndex % 3 === 1 ? "Medium" : "Low";
}

function getExercises(focus: string, dayIndex: number): Exercise[] {
  const exercises = {
    "la musculation": [
      [
        {
          name: "Développé couché",
          sets: 4,
          reps: "8-12",
          notes: "Progression en poids",
        },
        { name: "Développé incliné", sets: 3, reps: "10-15" },
        { name: "Dips", sets: 3, reps: "12-15" },
        { name: "Élévations latérales", sets: 3, reps: "15-20" },
      ],
      [
        { name: "Tractions", sets: 4, reps: "6-10", notes: "Prise large" },
        { name: "Rowing barre", sets: 4, reps: "8-12" },
        { name: "Curl biceps", sets: 3, reps: "12-15" },
        { name: "Hammer curl", sets: 3, reps: "12-15" },
      ],
    ],
  };

  return exercises[focus]?.[dayIndex] || [];
}
