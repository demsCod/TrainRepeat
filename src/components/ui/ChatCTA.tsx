"use client";

import React from "react";
import Link from "next/link";
import {
  ChatBubbleIcon,
  LightningBoltIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";

export const ChatCTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-strong">
                Votre Coach IA Personnel
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                Décrivez vos objectifs et contraintes, notre IA crée
                instantanément votre programme d&apos;entraînement personnalisé
                et l&apos;organise dans un calendrier intelligent.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 my-16">
              <div className="bg-jade-3/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-jade-6/30">
                <div className="w-12 h-12 bg-gradient-to-br from-jade-8 to-jade-9 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleIcon className="w-6 h-6 text-strong" />
                </div>
                <h3 className="text-lg font-semibold text-strong mb-2">
                  Chat Intelligent
                </h3>
                <p className="text-muted">
                  Conversez naturellement avec notre IA pour définir vos
                  objectifs et préférences.
                </p>
              </div>

              <div className="bg-jade-3/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-jade-6/30">
                <div className="w-12 h-12 bg-gradient-to-br from-jade-8 to-jade-9 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LightningBoltIcon className="w-6 h-6  text-strong" />
                </div>
                <h3 className="text-lg font-semibold text-strong mb-2">
                  Programme Personnalisé
                </h3>
                <p className="text-muted">
                  Programmes adaptés à votre niveau, objectifs et disponibilité.
                </p>
              </div>

              <div className="bg-jade-3/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-jade-6/30">
                <div className="w-12 h-12 bg-gradient-to-br from-jade-8 to-jade-9 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CalendarIcon className="w-6 h-6  text-strong" />
                </div>
                <h3 className="text-lg font-semibold text-strong mb-2">
                  Calendrier Visuel
                </h3>
                <p className="text-muted">
                  Visualisez vos séances dans un calendrier interactif et
                  détaillé.
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-jade-3/40 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-jade-6/20">
              <h3 className="text-lg font-semibold text-strong mb-6">
                Exemples de demandes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-jade-4/80 text-jade-11 px-4 py-3 rounded-xl text-left border border-jade-6/30">
                  <div className="font-medium mb-1">💪 Musculation</div>
                  <div className="text-sm opacity-90">
                    &quot;Programme muscu 4x/semaine, objectif prise de masse,
                    débutant&quot;
                  </div>
                </div>
                <div className="bg-jade-4/80 text-jade-11 px-4 py-3 rounded-xl text-left border border-jade-6/30">
                  <div className="font-medium mb-1">🏃 Cardio</div>
                  <div className="text-sm opacity-90">
                    &quot;Entraînement cardio 3x/semaine pour perdre du
                    poids&quot;
                  </div>
                </div>
                <div className="bg-jade-4/80 text-jade-11 px-4 py-3 rounded-xl text-left border border-jade-6/30">
                  <div className="font-medium mb-1">🥋 Mixte</div>
                  <div className="text-sm opacity-90">
                    &quot;Programme complet force + cardio, 5 jours, niveau
                    intermédiaire&quot;
                  </div>
                </div>
                <div className="bg-jade-4/80 text-jade-11 px-4 py-3 rounded-xl text-left border border-jade-6/30">
                  <div className="font-medium mb-1">🧘 Bien-être</div>
                  <div className="text-sm opacity-90">
                    &quot;Yoga et stretching 3x/semaine, récupération
                    active&quot;
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Link
                href="/chat"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-jade-8 to-jade-9 text-white text-xl font-bold rounded-2xl hover:from-jade-9 hover:to-jade-10 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Créer mon programme
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <p className="text-sm text-muted/70">
                Gratuit • Instantané • Personnalisé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
