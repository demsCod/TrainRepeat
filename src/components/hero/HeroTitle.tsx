"use client";

import React, { useState, useEffect, useMemo } from "react";

export const HeroTitle: React.FC = () => {
  const texts = useMemo(
    () => ["de l'IA", "de l'organisation", "de la discipline"],
    []
  );
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Plus rapide pour effacer
    const pauseDuration = 2000; // Pause de 2 secondes avant d'effacer

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Phase d'écriture
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Texte complètement écrit, attendre avant d'effacer
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Phase d'effacement
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Texte complètement effacé, passer au suivant
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  // Animation du curseur clignotant
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-cyan-12 leading-tight tracking-tight">
        Développez votre{" "}
        <span className="text-cyan-11 block">forme physique</span>
        <span className="text-cyan-9 inline-block">
          avec {/* Conteneur avec largeur fixe et overflow hidden */}
          <span className="relative inline-flex w-[300px] sm:w-[400px] md:w-[460px] lg:w-[520px] xl:w-[600px] h-[3rem] sm:h-[3.5rem] md:h-[4rem] lg:h-[4.5rem] xl:h-[5.8rem] overflow-hidden text-left items-center">
            <span className="whitespace-nowrap leading-none">
              {displayedText}
              <span
                className={`inline-block w-0.5 h-8 sm:h-10 md:h-11 lg:h-12 xl:h-16 bg-cyan-9 ml-1 ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
              />
            </span>
          </span>
        </span>
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-cyan-11 leading-relaxed max-w-xl font-light">
        Maîtrisez votre condition physique grâce à des programmes personnalisés,
        un suivi intelligent et des conseils adaptés à vos objectifs.
      </p>
    </div>
  );
};
