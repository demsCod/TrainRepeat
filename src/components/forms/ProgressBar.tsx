import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  completedSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-strong">
            Étape {currentStep}
          </span>
          <span className="text-muted/60">sur {totalSteps}</span>
        </div>
        <div className="flex items-center gap-2 bg-jade-1 rounded-full px-4 py-2">
          <span className="text-sm font-medium text-jade-9">
            {Math.round(progress)}% complété
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-jade-8 via-jade-9 to-jade-10 h-3 rounded-full transition-all duration-700 ease-out shadow-lg relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          {Array.from({ length: totalSteps }, (_, i) => {
            const stepNumber = i + 1;
            const isCompleted = completedSteps.includes(stepNumber);
            const isCurrent = stepNumber === currentStep;
            const isAccessible = stepNumber <= currentStep;

            return (
              <div
                key={stepNumber}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-jade-8 text-white shadow-lg transform scale-110"
                    : isCurrent
                    ? "bg-jade-6 text-jade-11 ring-4 ring-jade-8/30 shadow-lg animate-pulse"
                    : isAccessible
                    ? "bg-jade-3 text-jade-8 shadow-md"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  stepNumber
                )}
                {isCurrent && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
