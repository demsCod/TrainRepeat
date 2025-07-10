"use client";

import React, { useState } from "react";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
// import { signIn } from "next-auth/react";

export const HeroSignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Pour l'instant, on redirige simplement vers le chat
      // Dans une vraie implémentation, vous pourriez créer un compte avec email/password
      window.location.href = "/chat";
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Authentification Google désactivée temporairement
      // await signIn("google", { callbackUrl: "/chat" });

      // Redirection directe vers le chat pour les tests
      window.location.href = "/chat";
    } catch (error) {
      console.error("Erreur lors de la connexion Google:", error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      // Authentification Apple désactivée temporairement
      // await signIn("apple", { callbackUrl: "/chat" });

      // Redirection directe vers le chat pour les tests
      window.location.href = "/chat";
    } catch (error) {
      console.error("Erreur lors de la connexion Apple:", error);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-cyan-2/80 backdrop-blur-sm border border-cyan-6/30 rounded-2xl p-6 lg:p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-2xl font-display font-bold text-cyan-12 mb-2">
            Créez votre compte gratuit
          </h2>
          <p className="text-cyan-11 text-sm font-light">
            Commencez votre transformation dès aujourd&apos;hui
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white border border-cyan-6/30 hover:border-cyan-7 text-cyan-12 py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continuer avec Google
          </button>

          <button
            onClick={handleAppleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Continuer avec Apple
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-cyan-6/30"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-cyan-2/80 text-cyan-11">ou</span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-cyan-6/30 rounded-xl bg-cyan-1/50 text-cyan-12 placeholder-cyan-11/60 focus:outline-none focus:ring-2 focus:ring-cyan-8 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-cyan-6/30 rounded-xl bg-cyan-1/50 text-cyan-12 placeholder-cyan-11/60 focus:outline-none focus:ring-2 focus:ring-cyan-8 focus:border-transparent transition-all duration-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-11 hover:text-cyan-10 transition-colors"
            >
              {showPassword ? (
                <EyeClosedIcon className="w-5 h-5" />
              ) : (
                <EyeOpenIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-cyan-9 to-cyan-10 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-10 hover:to-cyan-11 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {isLoading ? "Création en cours..." : "Créer mon compte"}
          </button>
        </form>

        <p className="text-xs text-cyan-11/80 text-center mt-4">
          En vous inscrivant, vous acceptez nos{" "}
          <a href="#" className="text-cyan-10 hover:text-cyan-9 underline">
            conditions d&apos;utilisation
          </a>{" "}
          et notre{" "}
          <a href="#" className="text-cyan-10 hover:text-cyan-9 underline">
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
};
