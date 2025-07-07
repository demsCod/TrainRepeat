import React from "react";
import { FITNESS_GOALS } from "../../../types/form";

interface StepGoalsProps {
  selectedGoals: string[];
  onChange: (goals: string[]) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export const StepGoals: React.FC<StepGoalsProps> = ({
  selectedGoals,
  onChange,
  onNext,
  onBack,
  canProceed,
}) => {
  const handleGoalToggle = (goal: string) => {
    const newGoals = selectedGoals.includes(goal)
      ? selectedGoals.filter((g) => g !== goal)
      : [...selectedGoals, goal];
    onChange(newGoals);
  };

  return (
    <div className="space-y-10">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-jade-8 to-jade-9 rounded-full flex items-center justify-center shadow-lg">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-strong tracking-tight">
            Quels sont vos objectifs de fitness ?
          </h2>
          <p className="text-muted/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Sélectionnez tous les objectifs qui vous correspondent
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FITNESS_GOALS.map((goal) => (
            <button
              key={goal}
              onClick={() => handleGoalToggle(goal)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden ${
                selectedGoals.includes(goal)
                  ? "border-jade-8 bg-gradient-to-br from-jade-3 to-jade-4 text-jade-11 transform scale-105 shadow-xl"
                  : "border-border-default hover:border-jade-6 hover:bg-gradient-to-br hover:from-jade-1 hover:to-jade-2 text-muted hover:shadow-lg"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-jade-8/5 to-jade-9/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-between">
                <span className="font-semibold text-lg">{goal}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    selectedGoals.includes(goal)
                      ? "border-jade-8 bg-jade-8 shadow-lg"
                      : "border-gray-300 group-hover:border-jade-6"
                  }`}
                >
                  {selectedGoals.includes(goal) && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-jade-1 border border-jade-6 rounded-full px-6 py-3">
            <span className="text-jade-9 font-semibold">
              {selectedGoals.length} objectif
              {selectedGoals.length > 1 ? "s" : ""} sélectionné
              {selectedGoals.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-md mx-auto pt-4">
        <button
          onClick={onBack}
          className="group px-8 py-4 border-2 border-border-default rounded-2xl text-muted hover:bg-jade-1 hover:border-jade-6 transition-all duration-300 font-medium"
        >
          <span className="flex items-center gap-2">
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
            Retour
          </span>
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`group relative px-10 py-4 rounded-2xl font-semibold transition-all duration-300 ${
            canProceed
              ? "bg-gradient-to-r from-jade-8 to-jade-9 text-white hover:from-jade-9 hover:to-jade-10 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {canProceed && (
            <div className="absolute inset-0 bg-gradient-to-r from-jade-9 to-jade-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
          <span className="relative flex items-center gap-2">
            Continuer
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
          </span>
        </button>
      </div>
    </div>
  );
};
