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
            top: (startHour - 6) * 60,
            height: Math.max(60, (duration / 60) * 60),
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
      <div className="flex flex-col items-center justify-center h-96 bg-cyan-2/50 rounded-2xl border-2 border-dashed border-cyan-6/50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-9 to-cyan-10 rounded-full flex items-center justify-center mx-auto">
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
            <h3 className="text-lg font-display font-semibold text-cyan-12 mb-2">
              Aucun programme généré
            </h3>
            <p className="text-cyan-11">
              Utilisez le chat pour créer votre programme personnalisé
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header moderne */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg border border-cyan-6/20 mb-6">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-display font-bold text-cyan-12">
              {currentWeek.toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
              })}
            </h1>
            <div className="flex gap-1 bg-cyan-2/50 rounded-xl p-1">
              <button className="px-4 py-2 bg-cyan-9 text-white rounded-lg text-sm font-medium shadow-sm">
                Semaine
              </button>
              <button className="px-4 py-2 text-cyan-11 hover:text-cyan-12 rounded-lg text-sm font-medium transition-colors">
                Jour
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateWeek("prev")}
              className="p-2 text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl transition-all"
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
              className="px-4 py-2 text-sm font-medium text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl transition-all"
            >
              Aujourd&apos;hui
            </button>
            <button
              onClick={() => navigateWeek("next")}
              className="p-2 text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl transition-all"
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
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-cyan-6/20 overflow-hidden">
        {/* En-têtes des jours */}
        <div className="grid grid-cols-8 border-b border-cyan-6/20">
          <div className="p-4"></div>
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`p-4 text-center border-r border-cyan-6/20 last:border-r-0 transition-all ${
                day.isToday
                  ? "bg-gradient-to-br from-cyan-500 to-cyan-600 text-white"
                  : "bg-cyan-1/30 hover:bg-cyan-2/50"
              }`}
            >
              <div
                className={`text-sm font-medium uppercase tracking-wider ${
                  day.isToday ? "text-cyan-100" : "text-cyan-11"
                }`}
              >
                {day.shortName}
              </div>
              <div
                className={`text-2xl font-bold mt-1 ${
                  day.isToday ? "text-white" : "text-cyan-12"
                }`}
              >
                {day.dayNumber}
              </div>
            </div>
          ))}
        </div>

        {/* Grille horaire */}
        <div className="relative">
          {Array.from({ length: 16 }, (_, i) => i + 6).map((hour) => (
            <div
              key={hour}
              className="grid grid-cols-8 border-b border-cyan-6/10 min-h-[70px]"
            >
              <div className="p-3 text-right border-r border-cyan-6/20 bg-cyan-1/20 flex items-start">
                <span className="text-xs font-medium text-cyan-11 bg-cyan-2/50 px-2 py-1 rounded-md">
                  {hour.toString().padStart(2, "0")}:00
                </span>
              </div>

              {weekDays.map((day, dayIndex) => (
                <div
                  key={`${hour}-${dayIndex}`}
                  className="relative border-r border-cyan-6/10 last:border-r-0 hover:bg-cyan-2/20 transition-colors min-h-[70px]"
                >
                  {day.events
                    .filter((event) => {
                      const eventHour = Math.floor(event.top / 60) + 6;
                      return eventHour === hour;
                    })
                    .map((event) => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className={`absolute inset-x-1 rounded-xl p-3 cursor-pointer transition-all hover:scale-105 hover:shadow-lg group ${event.color}`}
                        style={{
                          height: `${Math.max(50, event.height)}px`,
                          top: "4px",
                        }}
                      >
                        <div className="text-xs font-medium text-white/90 mb-1">
                          {event.startTime}
                        </div>
                        <div className="text-sm font-semibold text-white truncate">
                          {event.title}
                        </div>
                        <div className="text-xs text-white/80 mt-1">
                          {event.duration} min
                        </div>
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

  if (type === "Rest") return "bg-gradient-to-br from-gray-400 to-gray-500";
  if (type === "Active Recovery")
    return "bg-gradient-to-br from-green-400 to-green-500";

  if (detailsLower.includes("cardio") || detailsLower.includes("course")) {
    return "bg-gradient-to-br from-red-500 to-pink-500";
  }
  if (detailsLower.includes("hiit") || detailsLower.includes("interval")) {
    return "bg-gradient-to-br from-orange-500 to-red-500";
  }
  if (detailsLower.includes("yoga") || detailsLower.includes("stretching")) {
    return "bg-gradient-to-br from-purple-400 to-purple-500";
  }
  if (detailsLower.includes("natation") || detailsLower.includes("swimming")) {
    return "bg-gradient-to-br from-blue-400 to-blue-500";
  }

  return "bg-gradient-to-br from-cyan-500 to-cyan-600";
}
