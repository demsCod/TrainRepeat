import React from "react";

interface StepNameProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  canProceed: boolean;
}

export const StepName: React.FC<StepNameProps> = ({
  value,
  onChange,
  onNext,
  canProceed,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canProceed) {
      onNext();
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-strong tracking-tight">
            Comment souhaitez-vous qu&apos;on vous appelle ?
          </h2>
          <p className="text-muted/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Personnalisez votre expérience avec un nom qui vous ressemble
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-muted mb-3 ml-1"
            >
              Votre nom ou pseudonyme
            </label>
            <div className="relative group">
              <input
                id="name"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ex: Alex, Marie, Coach..."
                className="w-full px-6 py-4 border-2 border-border-default rounded-2xl focus:ring-4 focus:ring-jade-8/20 focus:border-jade-8 outline-none transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl group-hover:border-jade-6"
                autoFocus
              />
              <div className="absolute inset-0 bg-gradient-to-r from-jade-8/5 to-jade-9/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="text-sm text-muted/60">Minimum 2 caractères</div>
              {value.length >= 2 && (
                <div className="flex items-center gap-2 text-sm text-jade-8 font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Parfait !</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={!canProceed}
            className={`group relative px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
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
      </form>
    </div>
  );
};
