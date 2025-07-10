"use client";

import React from "react";
import { CalendarEvent } from "../../types/calendar";
import {
  Cross2Icon,
  InfoCircledIcon,
  ActivityLogIcon,
  ClockIcon,
  BarChartIcon,
  ListBulletIcon,
  CheckCircledIcon,
  FileTextIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

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
      High: "bg-intensity-high text-intensity-high-text border-intensity-high-text/20",
      Medium:
        "bg-intensity-medium text-intensity-medium-text border-intensity-medium-text/20",
      Low: "bg-intensity-low text-intensity-low-text border-intensity-low-text/20",
    };

    return (
      colors[intensity as keyof typeof colors] ||
      "bg-surface text-primary border-border"
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl border border-border/20 flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-6 border-b border-border/20 bg-gradient-to-r from-app-bg to-surface/50 rounded-t-2xl">
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-display font-bold text-text mb-1">
              {event.title}
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="text-sm font-medium text-text-muted bg-surface/50 px-3 py-1 rounded-lg">
                {event.startTime}
              </div>
              <div className="text-sm font-medium text-text-muted bg-surface/50 px-3 py-1 rounded-lg">
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
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text hover:bg-surface-hover/50 rounded-xl p-2 transition-all ml-4"
          >
            <Cross2Icon className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Info */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-2 flex items-center gap-2">
                  <ActivityLogIcon className="w-4 h-4" />
                  Type d&apos;entraînement
                </h3>
                <p className="text-text-muted bg-surface/30 p-3 rounded-lg">
                  {workout.type}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text mb-2 flex items-center gap-2">
                  <InfoCircledIcon className="w-4 h-4" />
                  Description
                </h3>
                <p className="text-text-muted bg-surface/30 p-3 rounded-lg leading-relaxed">
                  {workout.details}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-surface/50 to-surface-hover/30 rounded-lg p-4">
                <h4 className="font-medium text-text mb-3 flex items-center gap-2">
                  <BarChartIcon className="w-4 h-4" />
                  Statistiques
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-muted flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      Durée :
                    </span>
                    <span className="font-medium text-text">
                      {event.duration} min
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted flex items-center gap-1">
                      <LightningBoltIcon className="w-3 h-3" />
                      Intensité :
                    </span>
                    <span className="font-medium text-text">
                      {workout.intensity || "Normale"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Exercices :</span>
                    <span className="font-medium text-text">
                      {workout.exercises?.length || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Exercises */}
            <div className="lg:col-span-2">
              {workout.exercises && workout.exercises.length > 0 ? (
                <div>
                  <h3 className="font-semibold text-text mb-4 flex items-center gap-2">
                    <ListBulletIcon className="w-4 h-4" />
                    Liste des exercices ({workout.exercises.length})
                  </h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {workout.exercises.map((exercise, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-border-subtle/20 hover:bg-surface/30 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-text flex-1">
                            {exercise.name}
                          </h4>
                          <div className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                            #{index + 1}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                          {exercise.sets && (
                            <div className="flex items-center gap-1">
                              <span className="text-text-muted">Séries:</span>
                              <span className="font-medium text-text">
                                {exercise.sets}
                              </span>
                            </div>
                          )}
                          {exercise.reps && (
                            <div className="flex items-center gap-1">
                              <span className="text-text-muted">Reps:</span>
                              <span className="font-medium text-text">
                                {exercise.reps}
                              </span>
                            </div>
                          )}
                          {exercise.weight && (
                            <div className="flex items-center gap-1">
                              <span className="text-text-muted">Poids:</span>
                              <span className="font-medium text-text">
                                {exercise.weight}
                              </span>
                            </div>
                          )}
                        </div>

                        {exercise.notes && (
                          <div className="mt-3 p-2 bg-app-bg/50 rounded-lg">
                            <p className="text-xs text-text-muted italic">
                              💡 {exercise.notes}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-text-muted mb-2">
                    <FileTextIcon className="w-12 h-12 mx-auto mb-2" />
                  </div>
                  <p className="text-text-muted">
                    Aucun exercice spécifique pour cet entraînement
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer - Fixed */}
        <div className="border-t border-border-subtle/20 p-6 bg-gradient-to-r from-app-bg to-surface/50 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary-hover text-white rounded-xl font-medium hover:from-primary-hover hover:to-primary-strong transition-all shadow-lg"
            >
              Fermer
            </button>
            <button className="flex-1 px-6 py-3 bg-white/80 text-text-muted border border-border-subtle/30 rounded-xl font-medium hover:bg-surface/50 hover:text-text transition-all flex items-center justify-center gap-2">
              <CheckCircledIcon className="w-4 h-4" />
              Marquer comme terminé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
