import React from "react";
import { PREFERRED_ACTIVITIES } from "../../../types/form";

interface StepActivitiesProps {
  selectedActivities: string[];
  onChange: (activities: string[]) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export const StepActivities: React.FC<StepActivitiesProps> = ({
  selectedActivities,
  onChange,
  onNext,
  onBack,
  canProceed,
}) => {
  const handleActivityToggle = (activity: string) => {
    const newActivities = selectedActivities.includes(activity)
      ? selectedActivities.filter((a) => a !== activity)
      : [...selectedActivities, activity];
    onChange(newActivities);
  };

  const getActivityIcon = (activity: string) => {
    switch (activity) {
      case "Musculation":
        return "🏋🏻‍♀️";
      case "Cardio":
        return "🏃🏻‍♀️";
      case "Yoga":
        return "🧘🏻‍♀️";
      case "Pilates":
        return "🤸🏻‍♀️";
      case "Course à pied":
        return "🏃🏻‍♂️";
      case "Cyclisme":
        return "🚴🏻‍♀️";
      case "Natation":
        return "🏊🏻‍♀️";
      case "Sports collectifs":
        return "⚽";
      case "Arts martiaux":
        return "🥋";
      case "Danse":
        return "💃🏻";
      case "Escalade":
        return "🧗🏻‍♀️";
      case "Randonnée":
        return "🥾";
      default:
        return "🏃🏻‍♀️";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-jade-8 to-jade-9 rounded-full flex items-center justify-center">
          <span className="text-2xl">🏃‍♀️</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-strong">
          Activités préférées
        </h2>
        <p className="text-muted/80 text-lg">
          Sélectionnez les activités qui vous plaisent le plus
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PREFERRED_ACTIVITIES.map((activity) => (
            <button
              key={activity}
              onClick={() => handleActivityToggle(activity)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                selectedActivities.includes(activity)
                  ? "border-jade-8 bg-jade-3 text-jade-11 transform scale-105 shadow-lg"
                  : "border-border-default hover:border-jade-6 hover:bg-jade-1 text-muted"
              }`}
            >
              <div className="space-y-2">
                <div className="text-2xl">{getActivityIcon(activity)}</div>
                <div>
                  <h3 className="font-medium text-sm">{activity}</h3>
                </div>
                <div
                  className={`w-5 h-5 mx-auto rounded-full border-2 flex items-center justify-center ${
                    selectedActivities.includes(activity)
                      ? "border-jade-8 bg-jade-8"
                      : "border-gray-300"
                  }`}
                >
                  {selectedActivities.includes(activity) && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-muted/60">
          {selectedActivities.length} activité
          {selectedActivities.length > 1 ? "s" : ""} sélectionnée
          {selectedActivities.length > 1 ? "s" : ""}
        </div>
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
