import React from "react";
import { UserFormData } from "../../types/form";

interface SuccessPageProps {
  formData: UserFormData;
  onRestart: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({
  formData,
  onRestart,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-app-bg via-jade-1 to-jade-2 py-8 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-jade-3 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-60 right-20 w-20 h-20 bg-jade-4 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-jade-5 rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-jade-6 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white/60 backdrop-blur-lg border border-jade-3 rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
          {/* Success decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-jade-8 to-jade-9"></div>

          <div className="space-y-8">
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-jade-8 rounded-full flex items-center justify-center shadow-2xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-strong tracking-tight">
                Félicitations, {formData.name} !
              </h1>
              <p className="text-2xl text-muted/80">
                Votre profil a été créé avec succès
              </p>
            </div>

            <div className="bg-gradient-to-r from-jade-1 to-jade-2 border border-jade-6 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-jade-11">
                Prochaines étapes :
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-jade-8 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <span className="text-muted">
                    Votre programme personnalisé est en cours de création
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-jade-8 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <span className="text-muted">
                    Vous recevrez vos premières recommandations dans quelques
                    instants
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-jade-8 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <span className="text-muted">
                    Commencez votre transformation dès aujourd&apos;hui !
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  // Simuler une redirection vers le dashboard
                  alert("Redirection vers votre dashboard...");
                }}
                className="group relative px-10 py-4 bg-gradient-to-r from-jade-8 to-jade-9 text-white rounded-2xl font-semibold text-lg hover:from-jade-9 hover:to-jade-10 transform hover:scale-105 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-jade-9 to-jade-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Accéder à mon dashboard
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

              <button
                onClick={onRestart}
                className="px-8 py-4 border-2 border-jade-6 text-jade-8 rounded-2xl font-medium hover:bg-jade-1 hover:border-jade-8 transition-all duration-300"
              >
                Recommencer le formulaire
              </button>
            </div>

            <div className="text-sm text-muted/60 pt-4">
              <p>
                ✨ Merci de nous faire confiance pour votre parcours fitness !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
