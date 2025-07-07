import React from "react";
import { UserFormData } from "../../types/form";

interface FormSummaryProps {
  formData: UserFormData;
  onEdit: (step: number) => void;
  onSubmit: () => void;
}

export const FormSummary: React.FC<FormSummaryProps> = ({
  formData,
  onEdit,
  onSubmit,
}) => {
  const getSelectedColor = () => {
    if (!formData.favoriteColor) return null;

    const colorMap: { [key: string]: string } = {
      jade: "#29a383",
      blue: "#0ea5e9",
      purple: "#8b5cf6",
      pink: "#ec4899",
      orange: "#f97316",
      red: "#ef4444",
      emerald: "#10b981",
      indigo: "#6366f1",
    };

    return colorMap[formData.favoriteColor] || "#29a383";
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-jade-8 to-jade-9 rounded-full flex items-center justify-center">
          <span className="text-2xl">📋</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-strong">
          Récapitulatif de votre profil
        </h2>
        <p className="text-muted/80 text-lg">
          Vérifiez vos informations avant de finaliser votre inscription
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white/50 backdrop-blur-sm border border-border-default rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-muted">Nom</h3>
              <p className="text-strong text-lg">{formData.name}</p>
            </div>
            <button
              onClick={() => onEdit(1)}
              className="text-jade-8 hover:text-jade-9 text-sm font-medium transition-colors"
            >
              Modifier
            </button>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border border-border-default rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-muted">Objectifs de fitness</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.fitnessGoals.map((goal) => (
                  <span
                    key={goal}
                    className="px-3 py-1 bg-jade-3 text-jade-11 rounded-full text-sm"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => onEdit(2)}
              className="text-jade-8 hover:text-jade-9 text-sm font-medium transition-colors"
            >
              Modifier
            </button>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border border-border-default rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-muted">
                Informations physiques
              </h3>
              <div className="mt-2 space-y-1">
                <p className="text-strong">
                  Poids actuel: {formData.currentWeight} kg
                </p>
                {formData.targetWeight && (
                  <p className="text-strong">
                    Poids cible: {formData.targetWeight} kg
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => onEdit(3)}
              className="text-jade-8 hover:text-jade-9 text-sm font-medium transition-colors"
            >
              Modifier
            </button>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border border-border-default rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-muted">
                Niveau d&apos;expérience
              </h3>
              <p className="text-strong text-lg capitalize">
                {formData.fitnessLevel}
              </p>
            </div>
            <button
              onClick={() => onEdit(4)}
              className="text-jade-8 hover:text-jade-9 text-sm font-medium transition-colors"
            >
              Modifier
            </button>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border border-border-default rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-muted">
                Fréquence d&apos;entraînement
              </h3>
              <p className="text-strong text-lg">{formData.workoutFrequency}</p>
            </div>
            <button
              onClick={() => onEdit(5)}
              className="text-jade-8 hover:text-jade-9 text-sm font-medium transition-colors"
            >
              Modifier
            </button>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border border-border-default rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-muted">Activités préférées</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.preferredActivities.map((activity) => (
                  <span
                    key={activity}
                    className="px-3 py-1 bg-jade-3 text-jade-11 rounded-full text-sm"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => onEdit(6)}
              className="text-jade-8 hover:text-jade-9 text-sm font-medium transition-colors"
            >
              Modifier
            </button>
          </div>
        </div>

        {formData.favoriteColor && (
          <div className="bg-white/50 backdrop-blur-sm border border-border-default rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-muted">Couleur préférée</h3>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className="w-6 h-6 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: getSelectedColor() || "#29a383" }}
                  ></div>
                  <span className="text-strong capitalize">
                    {formData.favoriteColor}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onEdit(7)}
                className="text-jade-8 hover:text-jade-9 text-sm font-medium transition-colors"
              >
                Modifier
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onSubmit}
          className="px-12 py-4 bg-gradient-to-r from-jade-8 to-jade-9 text-white rounded-xl font-semibold text-lg hover:from-jade-9 hover:to-jade-10 transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Créer mon profil
        </button>
      </div>
    </div>
  );
};
