import React from "react";
import { FITNESS_LEVELS } from "../../../types/form";

interface StepLevelProps {
  selectedLevel: "beginner" | "intermediate" | "advanced" | "";
  onChange: (level: "beginner" | "intermediate" | "advanced") => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export const StepLevel: React.FC<StepLevelProps> = ({
  selectedLevel,
  onChange,
  onNext,
  onBack,
  canProceed,
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "from-green-400 to-green-600";
      case "intermediate":
        return "from-orange-400 to-orange-600";
      case "advanced":
        return "from-red-400 to-red-600";
      default:
        return "from-gray-400 to-gray-600";
    }
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-strong tracking-tight">
            Quel est votre niveau d&apos;expérience ?
          </h2>
          <p className="text-muted/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Cela nous aide à adapter l&apos;intensité de vos programmes
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FITNESS_LEVELS.map((level) => (
            <button
              key={level.value}
              onClick={() => onChange(level.value)}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-center ${
                selectedLevel === level.value
                  ? "border-jade-8 bg-jade-3 text-jade-11 transform scale-105 shadow-lg"
                  : "border-border-default hover:border-jade-6 hover:bg-jade-1 text-muted"
              }`}
            >
              <div className="space-y-3">
                <div
                  className={`w-12 h-12 mx-auto bg-gradient-to-br ${getLevelColor(
                    level.value
                  )} rounded-full flex items-center justify-center`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{level.label}</h3>
                  <p className="text-sm text-muted/70 mt-1">
                    {level.description}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 mx-auto rounded-full border-2 flex items-center justify-center ${
                    selectedLevel === level.value
                      ? "border-jade-8 bg-jade-8"
                      : "border-gray-300"
                  }`}
                >
                  {selectedLevel === level.value && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedLevel && (
          <div className="mt-6 text-center">
            <div className="bg-jade-1 border border-jade-6 rounded-xl p-4 inline-block">
              <span className="text-muted font-medium">
                Niveau sélectionné :{" "}
                {FITNESS_LEVELS.find((l) => l.value === selectedLevel)?.label}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between max-w-md mx-auto">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-border-default rounded-xl text-muted hover:bg-jade-1 transition-all duration-200"
        >
          Retour
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
            canProceed
              ? "bg-gradient-to-r from-jade-8 to-jade-9 text-white hover:from-jade-9 hover:to-jade-10 transform hover:scale-105 shadow-lg hover:shadow-xl"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continuer
        </button>
      </div>
    </div>
  );
};
