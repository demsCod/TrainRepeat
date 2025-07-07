import React from "react";
import { COLOR_PALETTE, ColorOption } from "../../../types/form";

interface StepColorProps {
  selectedColor?: string;
  onChange: (color: string | undefined) => void;
  onBack: () => void;
  onFinish: () => void;
}

export const StepColor: React.FC<StepColorProps> = ({
  selectedColor,
  onChange,
  onBack,
  onFinish,
}) => {
  const handleColorSelect = (color: ColorOption) => {
    if (selectedColor === color.id) {
      onChange(undefined); // Désélectionner si déjà sélectionné
    } else {
      onChange(color.id);
    }
  };

  const handleSkip = () => {
    onChange(undefined);
    onFinish();
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
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-strong tracking-tight">
            Personnalisation
          </h2>
          <p className="text-muted/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Quelle est votre couleur préférée ?
          </p>
        </div>
        <div className="inline-flex items-center bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-6 py-2 shadow-sm">
          <span className="text-amber-600 text-sm font-semibold">
            Étape facultative
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {COLOR_PALETTE.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorSelect(color)}
              className={`group p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                selectedColor === color.id
                  ? "border-gray-800 bg-gray-50 transform scale-105 shadow-lg"
                  : "border-border-default hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              <div className="space-y-3">
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-br ${color.gradient} rounded-full flex items-center justify-center relative overflow-hidden`}
                  style={{ backgroundColor: color.value }}
                >
                  {selectedColor === color.id && (
                    <span className="text-white text-2xl font-bold">✓</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div>
                  <h3 className="font-medium text-muted">{color.name}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedColor && (
          <div className="mt-6 text-center">
            <div className="bg-jade-1 border border-jade-6 rounded-xl p-4 inline-block">
              <span className="text-muted font-medium">
                Couleur sélectionnée :{" "}
                {COLOR_PALETTE.find((c) => c.id === selectedColor)?.name}
              </span>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-muted/60">
            Cette couleur sera utilisée pour personnaliser votre expérience
            utilisateur
          </p>
        </div>
      </div>

      <div className="flex justify-between max-w-md mx-auto">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-border-default rounded-xl text-muted hover:bg-jade-1 transition-all duration-200"
        >
          Retour
        </button>
        <div className="flex space-x-3">
          <button
            onClick={handleSkip}
            className="px-6 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-all duration-200"
          >
            Ignorer
          </button>
          <button
            onClick={onFinish}
            className="px-8 py-3 bg-gradient-to-r from-jade-8 to-jade-9 text-white rounded-xl font-medium hover:from-jade-9 hover:to-jade-10 transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Terminer
          </button>
        </div>
      </div>
    </div>
  );
};
