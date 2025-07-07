import React from "react";

interface StepWeightProps {
  currentWeight: number;
  targetWeight?: number;
  onCurrentWeightChange: (weight: number) => void;
  onTargetWeightChange: (weight: number | undefined) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export const StepWeight: React.FC<StepWeightProps> = ({
  currentWeight,
  targetWeight,
  onCurrentWeightChange,
  onTargetWeightChange,
  onNext,
  onBack,
  canProceed,
}) => {
  const handleCurrentWeightChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value) || 0;
    onCurrentWeightChange(value);
  };

  const handleTargetWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value === "" ? undefined : parseFloat(e.target.value);
    onTargetWeightChange(value);
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
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-strong tracking-tight">
            Informations physiques
          </h2>
          <p className="text-muted/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Ces informations nous aident à personnaliser vos programmes
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="currentWeight"
              className="block text-sm font-medium text-muted mb-2"
            >
              Poids actuel (kg) *
            </label>
            <div className="relative">
              <input
                id="currentWeight"
                type="number"
                min="20"
                max="300"
                step="0.1"
                value={currentWeight || ""}
                onChange={handleCurrentWeightChange}
                placeholder="Ex: 70"
                className="w-full px-4 py-3 border border-border-default rounded-xl focus:ring-2 focus:ring-jade-8 focus:border-transparent outline-none transition-all duration-200 text-lg bg-white/50 backdrop-blur-sm"
              />
              <span className="absolute right-3 top-3 text-muted/60">kg</span>
            </div>
          </div>

          <div>
            <label
              htmlFor="targetWeight"
              className="block text-sm font-medium text-muted mb-2"
            >
              Poids cible (kg){" "}
              <span className="text-muted/60">- facultatif</span>
            </label>
            <div className="relative">
              <input
                id="targetWeight"
                type="number"
                min="20"
                max="300"
                step="0.1"
                value={targetWeight || ""}
                onChange={handleTargetWeightChange}
                placeholder="Ex: 65"
                className="w-full px-4 py-3 border border-border-default rounded-xl focus:ring-2 focus:ring-jade-8 focus:border-transparent outline-none transition-all duration-200 text-lg bg-white/50 backdrop-blur-sm"
              />
              <span className="absolute right-3 top-3 text-muted/60">kg</span>
            </div>
            <div className="mt-2 text-sm text-muted/60">
              Laissez vide si vous souhaitez maintenir votre poids actuel
            </div>
          </div>
        </div>

        {currentWeight && targetWeight && (
          <div className="bg-jade-1 border border-jade-6 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-muted font-medium">Objectif :</span>
              <span
                className={`font-semibold ${
                  targetWeight > currentWeight
                    ? "text-blue-600"
                    : targetWeight < currentWeight
                    ? "text-orange-600"
                    : "text-jade-9"
                }`}
              >
                {targetWeight > currentWeight
                  ? "Prise de poids"
                  : targetWeight < currentWeight
                  ? "Perte de poids"
                  : "Maintien"}
              </span>
            </div>
            <div className="mt-2 text-sm text-muted/80">
              Différence : {Math.abs(targetWeight - currentWeight).toFixed(1)}{" "}
              kg
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
