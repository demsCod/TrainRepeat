import React from "react";
import { WORKOUT_FREQUENCIES } from "../../../types/form";

interface StepFrequencyProps {
  selectedFrequency: string;
  onChange: (frequency: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export const StepFrequency: React.FC<StepFrequencyProps> = ({
  selectedFrequency,
  onChange,
  onNext,
  onBack,
  canProceed,
}) => {
  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case "1-2 fois par semaine":
        return "from-blue-400 to-blue-500";
      case "3-4 fois par semaine":
        return "from-green-400 to-green-500";
      case "5-6 fois par semaine":
        return "from-orange-400 to-orange-500";
      case "Tous les jours":
        return "from-red-400 to-red-500";
      default:
        return "from-gray-400 to-gray-500";
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-strong tracking-tight">
            Fréquence d&apos;entraînement
          </h2>
          <p className="text-muted/70 text-xl max-w-2xl mx-auto leading-relaxed">
            À quelle fréquence souhaitez-vous vous entraîner ?
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WORKOUT_FREQUENCIES.map((frequency) => (
            <button
              key={frequency}
              onClick={() => onChange(frequency)}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-center ${
                selectedFrequency === frequency
                  ? "border-jade-8 bg-jade-3 text-jade-11 transform scale-105 shadow-lg"
                  : "border-border-default hover:border-jade-6 hover:bg-jade-1 text-muted"
              }`}
            >
              <div className="space-y-3">
                <div
                  className={`w-12 h-12 mx-auto bg-gradient-to-br ${getFrequencyColor(
                    frequency
                  )} rounded-full flex items-center justify-center`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{frequency}</h3>
                </div>
                <div
                  className={`w-6 h-6 mx-auto rounded-full border-2 flex items-center justify-center ${
                    selectedFrequency === frequency
                      ? "border-jade-8 bg-jade-8"
                      : "border-gray-300"
                  }`}
                >
                  {selectedFrequency === frequency && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedFrequency && (
          <div className="mt-6 text-center">
            <div className="bg-jade-1 border border-jade-6 rounded-xl p-4 inline-block">
              <span className="text-muted font-medium">
                Fréquence sélectionnée : {selectedFrequency}
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
