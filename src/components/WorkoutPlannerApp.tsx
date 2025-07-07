"use client";

import React, { useState } from "react";
import { ChatInterface } from "./chat/ChatInterface";
import { WorkoutCalendar } from "./calendar/WorkoutCalendar";
import { useChatStore } from "../app/stores/chatStore";

export const WorkoutPlannerApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "calendar">("chat");
  const { currentPlan, clearMessages } = useChatStore();

  const handleClearAll = () => {
    if (
      confirm(
        "Êtes-vous sûr de vouloir effacer tout l'historique et recommencer ?"
      )
    ) {
      clearMessages();
      setActiveTab("chat");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold text-cyan-12 mb-2">
                Planificateur d&apos;Entraînement IA
              </h1>
              <p className="text-xl text-cyan-11 font-light">
                Créez votre programme personnalisé avec l&apos;intelligence
                artificielle
              </p>
            </div>
            {currentPlan && (
              <button
                onClick={handleClearAll}
                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl font-medium transition-colors shadow-sm"
              >
                Nouveau programme
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("chat")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === "chat"
                ? "bg-gradient-to-r from-cyan-9 to-cyan-10 text-white shadow-lg"
                : "bg-cyan-2/80 text-cyan-11 hover:bg-cyan-3/80 border border-cyan-6/30"
            }`}
          >
            <div className="flex items-center gap-2">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Chat IA
            </div>
          </button>
          <button
            onClick={() => setActiveTab("calendar")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === "calendar"
                ? "bg-gradient-to-r from-cyan-9 to-cyan-10 text-white shadow-lg"
                : "bg-cyan-2/80 text-cyan-11 hover:bg-cyan-3/80 border border-cyan-6/30"
            }`}
          >
            <div className="flex items-center gap-2">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Calendrier
              {currentPlan && (
                <div className="w-2 h-2 bg-cyan-3 rounded-full animate-pulse" />
              )}
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="relative">
          {activeTab === "chat" ? (
            <div className="animate-fade-in">
              <ChatInterface />
            </div>
          ) : (
            <div className="animate-fade-in">
              <WorkoutCalendar />
            </div>
          )}
        </div>

        {/* Quick Actions */}
        {currentPlan && (
          <div className="mt-8 bg-cyan-2/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-6/30">
            <h3 className="text-lg font-display font-semibold text-cyan-12 mb-4">
              Actions rapides
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-9 to-cyan-10 text-white rounded-lg font-medium hover:from-cyan-10 hover:to-cyan-11 transition-all transform hover:scale-105 shadow-sm">
                Exporter en PDF
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Partager le programme
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm">
                Modifier le programme
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors shadow-sm">
                Rappels notifications
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
