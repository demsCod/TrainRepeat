export interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

export interface WorkoutPlan {
  day: string;
  type: "Workout" | "Rest" | "Active Recovery";
  details: string;
  intensity?: "Low" | "Medium" | "High";
  duration?: number; // minutes
  exercises?: Exercise[];
}

export interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  weight?: string;
  notes?: string;
}

export interface WorkoutPlanResponse {
  plan: WorkoutPlan[];
  summary: string;
  goals: string[];
  duration: string; // e.g., "4 weeks"
}

export interface ChatState {
  messages: ChatMessage[];
  currentPlan: WorkoutPlan[] | null;
  isLoading: boolean;
  error: string | null;
}
