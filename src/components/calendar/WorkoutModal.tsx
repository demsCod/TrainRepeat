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
  LightningBoltIcon
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl border border-cyan-6/20 flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-6 border-b border-cyan-6/20 bg-gradient-to-r from-cyan-1 to-cyan-2/50 rounded-t-2xl">
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-display font-bold text-cyan-12 mb-1">
              {event.title}
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
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
          </div>
          <button
            onClick={onClose}
            className="text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl p-2 transition-all ml-4"
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
                <h3 className="font-semibold text-cyan-12 mb-2 flex items-center gap-2">
                  <ActivityLogIcon className="w-4 h-4" />
                  Type d&apos;entraînement
                </h3>
                <p className="text-cyan-11 bg-cyan-2/30 p-3 rounded-lg">
                  {workout.type}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-cyan-12 mb-2 flex items-center gap-2">
                  <InfoCircledIcon className="w-4 h-4" />
                  Description
                </h3>
                <p className="text-cyan-11 bg-cyan-2/30 p-3 rounded-lg leading-relaxed">
                  {workout.details}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-cyan-2/50 to-cyan-3/30 rounded-lg p-4">
                <h4 className="font-medium text-cyan-12 mb-3 flex items-center gap-2">
                  <BarChartIcon className="w-4 h-4" />
                  Statistiques
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-cyan-11 flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      Durée :
                    </span>
                    <span className="font-medium text-cyan-12">
                      {event.duration} min
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-11 flex items-center gap-1">
                      <LightningBoltIcon className="w-3 h-3" />
                      Intensité :
                    </span>
                    <span className="font-medium text-cyan-12">
                      {workout.intensity || "Normale"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-11">Exercices :</span>
                    <span className="font-medium text-cyan-12">
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
                  <h3 className="font-semibold text-cyan-12 mb-4 flex items-center gap-2">
                    <ListBulletIcon className="w-4 h-4" />
                    Liste des exercices ({workout.exercises.length})
                  </h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {workout.exercises.map((exercise, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-cyan-6/20 hover:bg-cyan-2/30 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-cyan-12 flex-1">
                            {exercise.name}
                          </h4>
                          <div className="text-xs bg-cyan-9 text-white px-2 py-1 rounded-full">
                            #{index + 1}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                          {exercise.sets && (
                            <div className="flex items-center gap-1">
                              <span className="text-cyan-11">Séries:</span>
                              <span className="font-medium text-cyan-12">
                                {exercise.sets}
                              </span>
                            </div>
                          )}
                          {exercise.reps && (
                            <div className="flex items-center gap-1">
                              <span className="text-cyan-11">Reps:</span>
                              <span className="font-medium text-cyan-12">
                                {exercise.reps}
                              </span>
                            </div>
                          )}
                          {exercise.weight && (
                            <div className="flex items-center gap-1">
                              <span className="text-cyan-11">Poids:</span>
                              <span className="font-medium text-cyan-12">
                                {exercise.weight}
                              </span>
                            </div>
                          )}
                        </div>

                        {exercise.notes && (
                          <div className="mt-3 p-2 bg-cyan-1/50 rounded-lg">
                            <p className="text-xs text-cyan-11 italic">
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
                  <div className="text-cyan-11 mb-2">
                    <FileTextIcon className="w-12 h-12 mx-auto mb-2" />
                  </div>
                  <p className="text-cyan-11">
                    Aucun exercice spécifique pour cet entraînement
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer - Fixed */}
        <div className="border-t border-cyan-6/20 p-6 bg-gradient-to-r from-cyan-1 to-cyan-2/50 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-9 to-cyan-10 text-white rounded-xl font-medium hover:from-cyan-10 hover:to-cyan-11 transition-all shadow-lg"
            >
              Fermer
            </button>
            <button className="flex-1 px-6 py-3 bg-white/80 text-cyan-11 border border-cyan-6/30 rounded-xl font-medium hover:bg-cyan-2/50 hover:text-cyan-12 transition-all flex items-center justify-center gap-2">
              <CheckCircledIcon className="w-4 h-4" />
              Marquer comme terminé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
