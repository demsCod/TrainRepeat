"use client";

import React from "react";
import { CalendarEvent } from "../../types/calendar";

interface WorkoutModalProps {
  event: CalendarEvent;
  onClose: () => void;
}

export const WorkoutModal: React.FC<WorkoutModalProps> = ({
  event,
  onClose,
}) => {
  const { workout } = event;

  const getIntensityBadge = (intensity?: string) => {
    const colors = {
      High: "bg-red-100 text-red-800 border-red-200",
      Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Low: "bg-green-100 text-green-800 border-green-200",
    };

    return (
      colors[intensity as keyof typeof colors] ||
      "bg-cyan-100 text-cyan-800 border-cyan-200"
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full shadow-2xl border border-cyan-6/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-bold text-cyan-12">
            {event.title}
          </h2>
          <button
            onClick={onClose}
            className="text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl p-2 transition-all"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium text-cyan-11 bg-cyan-2/50 px-3 py-1 rounded-lg">
              {event.startTime}
            </div>
            <div className="text-sm font-medium text-cyan-11 bg-cyan-2/50 px-3 py-1 rounded-lg">
              {event.duration} min
            </div>
            {workout.intensity && (
              <div
                className={`text-xs font-medium px-2 py-1 rounded-lg border ${getIntensityBadge(
                  workout.intensity
                )}`}
              >
                {workout.intensity}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-cyan-12 mb-2">
              Type d&apos;entraînement
            </h3>
            <p className="text-cyan-11 bg-cyan-2/30 p-3 rounded-lg">
              {workout.type}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cyan-12 mb-2">Description</h3>
            <p className="text-cyan-11 bg-cyan-2/30 p-3 rounded-lg leading-relaxed">
              {workout.details}
            </p>
          </div>

          {workout.exercises && workout.exercises.length > 0 && (
            <div>
              <h3 className="font-semibold text-cyan-12 mb-3">Exercices</h3>
              <div className="space-y-2">
                {workout.exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className="bg-cyan-2/30 rounded-lg p-3 border border-cyan-6/20"
                  >
                    <h4 className="font-medium text-cyan-12 mb-1">
                      {exercise.name}
                    </h4>
                    <div className="flex gap-4 text-sm text-cyan-11">
                      {exercise.sets && <span>{exercise.sets} séries</span>}
                      {exercise.reps && (
                        <span>{exercise.reps} répétitions</span>
                      )}
                      {exercise.weight && <span>{exercise.weight}</span>}
                    </div>
                    {exercise.notes && (
                      <p className="text-xs text-cyan-11 mt-2 italic">
                        {exercise.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-9 to-cyan-10 text-white rounded-xl font-medium hover:from-cyan-10 hover:to-cyan-11 transition-all shadow-lg"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
