"use client";

import React, { useState, useMemo } from "react";
import { useChatStore } from "../../app/stores/chatStore";
import { WorkoutPlan } from "../../types/chat";
import { CalendarEvent } from "../../types/calendar";
import { WorkoutModal } from "./WorkoutModal";

export const WorkoutCalendar: React.FC = () => {
  const { currentPlan } = useChatStore();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [currentWeek, setCurrentWeek] = useState(new Date());

  // Génération des jours de la semaine
  const weekDays = useMemo(() => {
    const startOfWeek = new Date(currentWeek);
    startOfWeek.setDate(currentWeek.getDate() - currentWeek.getDay() + 1);

    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);

      const events: CalendarEvent[] = [];

      if (currentPlan && currentPlan[i]) {
        const workout = currentPlan[i];

        // Créer 1-2 événements par jour
        const eventCount =
          workout.type === "Rest" ? 0 : Math.random() > 0.6 ? 2 : 1;

        for (let j = 0; j < eventCount; j++) {
          const startHour = 8 + Math.floor(Math.random() * 10);
          const duration =
            workout.duration || 45 + Math.floor(Math.random() * 75);

          events.push({
            id: `${i}-${j}`,
            title: getEventTitle(workout, j),
            startTime: `${startHour.toString().padStart(2, "0")}:${
              Math.floor(Math.random() * 4) * 15
            }`,
            duration,
            workout,
            color: getEventColor(workout.type, workout.details),
            top: (startHour - 6) * 120,
            height: Math.max(120, (duration / 60) * 120),
          });
        }
      }

      days.push({
        date,
        dayName: date.toLocaleDateString("fr-FR", { weekday: "long" }),
        dayNumber: date.getDate(),
        shortName: date.toLocaleDateString("fr-FR", { weekday: "short" }),
        isToday: date.toDateString() === today.toDateString(),
        events: events.sort((a, b) => a.top - b.top),
      });
    }

    return days;
  }, [currentPlan, currentWeek]);

  const navigateWeek = (direction: "prev" | "next") => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(currentWeek.getDate() + (direction === "next" ? 7 : -7));
    setCurrentWeek(newWeek);
  };

  const goToToday = () => {
    setCurrentWeek(new Date());
  };

  if (!currentPlan) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-app-bg rounded-2xl border-2 border-dashed border-border-subtle">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-display font-semibold text-text-high mb-2">
              Aucun programme généré
            </h3>
            <p className="text-text-low">
              Utilisez le chat pour créer votre programme personnalisé
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto border-2 border-border-subtle bg-app-bg rounded-3xl shadow-2xl overflow-hidden">
      {/* Header avec navigation */}
      <div className=" px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-text-high"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-high">
                  <span className="text-text-high font-bold font-poppins">
                    {currentWeek.toLocaleDateString("fr-FR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </h1>
                <p className="text-sm text-text-low">
                  Programme d&apos;entraînement
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateWeek("prev")}
              className="p-2 text-text-low hover:text-text-high hover:bg-ui-bg-hover rounded-xl transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToToday}
              className="px-3 py-1 text-sm font-medium text-text-low hover:text-text-high hover:bg-ui-bg-hover rounded-xl transition-all"
            >
              Aujourd&apos;hui
            </button>
            <button
              onClick={() => navigateWeek("next")}
              className="p-2 text-text-low hover:text-text-high hover:bg-ui-bg-hover rounded-xl transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Calendrier principal */}
      <div className="bg-app-bg max-h-[600px] overflow-y-auto">
        {/* En-têtes des jours */}
        <div className="grid grid-cols-8 bg-app-bg sticky top-0 z-10">
          <div className="p-3"></div>
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`p-3 text-center ${
                day.isToday
                  ? "bg-primary rounded-3xl text-text-high"
                  : "bg-app-bg/100 rounded-3xl text-text-high"
              }`}
            >
              <div
                className={`text-xs font-medium uppercase tracking-wider ${
                  day.isToday ? "text-text-high" : "text-text-low"
                }`}
              >
                {day.shortName}
              </div>
              <div
                className={`text-2xl font-bold mt-1 ${
                  day.isToday ? "text-text-high" : "text-text-high"
                }`}
              >
                {day.dayNumber}
              </div>
            </div>
          ))}
        </div>

        {/* Grille horaire */}
        <div className="relative bg-app-bg">
          {Array.from({ length: 16 }, (_, i) => i + 6).map((hour) => (
            <div key={hour} className="grid grid-cols-8 min-h-[120px]">
              <div className="p-3 text-right  flex items-start">
                <span className="text-lg font-medium text-text-low">
                  {hour.toString().padStart(2, "0")}:00
                </span>
              </div>

              {weekDays.map((day, dayIndex) => (
                <div
                  key={`${hour}-${dayIndex}`}
                  className="relative hover:bg-ui-bg-hover transition-colors min-h-[120px]"
                >
                  {day.events
                    .filter((event) => {
                      const eventHour = Math.floor(event.top / 120) + 6;
                      return eventHour === hour;
                    })
                    .map((event) => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className={`absolute inset-x-1 rounded-xl p-2 cursor-pointer transition-all hover:scale-102 hover:shadow-lg group ${event.color} shadow-md`}
                        style={{
                          height: `${Math.max(
                            80,
                            (event.height / 60) * 120
                          )}px`,
                          top: "4px",
                        }}
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-1.5 h-1.5 bg-text-high rounded-full"></div>
                          <div className="text-xs font-medium text-text-high">
                            {event.startTime}
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-text-high truncate mb-1">
                          {event.title}
                        </div>
                        <div className="text-xs text-text-low">
                          {event.duration} min
                        </div>
                        {event.workout.exercises &&
                          event.workout.exercises.length > 0 && (
                            <div className="flex -space-x-1 mt-1">
                              {event.workout.exercises
                                .slice(0, 2)
                                .map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-3 h-3 bg-ui-bg-hover rounded-full border border-border"
                                  />
                                ))}
                              {event.workout.exercises.length > 2 && (
                                <div className="w-3 h-3 bg-ui-bg-hover rounded-full border border-border flex items-center justify-center">
                                  <span className="text-xs text-text-low">
                                    +
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <WorkoutModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

// Utilitaires
function getEventTitle(workout: WorkoutPlan, index: number): string {
  if (workout.type === "Rest") return "Repos";
  if (workout.type === "Active Recovery") return "Récupération";

  const types = workout.details.split(" - ");
  const mainType = types[0] || workout.type;

  if (index > 0) {
    return types[1] || `${mainType} (2)`;
  }

  return mainType;
}

function getEventColor(type: string, details: string): string {
  const detailsLower = details.toLowerCase();

  if (type === "Rest") return "bg-ui-bg-hover";
  if (type === "Active Recovery") return "bg-ui-bg-active";

  // Cardio - Couleur principale
  if (detailsLower.includes("cardio") || detailsLower.includes("course")) {
    return "bg-primary";
  }
  // HIIT - Couleur intense
  if (detailsLower.includes("hiit") || detailsLower.includes("interval")) {
    return "bg-primary-hover";
  }
  // Yoga/Stretching - Couleur douce
  if (detailsLower.includes("yoga") || detailsLower.includes("stretching")) {
    return "bg-ui-bg-active";
  }
  // Natation - Couleur accent
  if (detailsLower.includes("natation") || detailsLower.includes("swimming")) {
    return "bg-accent-solid";
  }
  // Haut du corps - Couleur accent
  if (detailsLower.includes("haut") || detailsLower.includes("pectoraux")) {
    return "bg-accent-solid";
  }
  // Jambes - Couleur principale
  if (detailsLower.includes("jambes") || detailsLower.includes("quadriceps")) {
    return "bg-primary";
  }
  // Dos - Couleur intense
  if (detailsLower.includes("dos") || detailsLower.includes("rowing")) {
    return "bg-primary-hover";
  }

  // Couleurs par défaut avec vos aliases Radix
  const colors = [
    "bg-primary",
    "bg-primary-hover",
    "bg-accent-solid",
    "bg-ui-bg-active",
    "bg-accent-solid-hover",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
