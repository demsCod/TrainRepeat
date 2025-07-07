import { WorkoutPlan } from "./chat";

export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  duration: number;
  workout: WorkoutPlan;
  color: string;
  top: number;
  height: number;
}

export interface WeekDay {
  date: Date;
  dayName: string;
  dayNumber: number;
  shortName: string;
  isToday: boolean;
  events: CalendarEvent[];
}
