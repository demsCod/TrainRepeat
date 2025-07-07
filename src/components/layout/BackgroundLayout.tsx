"use client";

import React from "react";

interface BackgroundLayoutProps {
  children: React.ReactNode;
  variant?: "default" | "chat" | "form";
}

export const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({
  children,
  variant = "default",
}) => {
  const getBackgroundStyle = () => {
    switch (variant) {
      case "chat":
        return "bg-gradient-to-br from-cyan-1 via-cyan-2 to-cyan-3";
      case "form":
        return "bg-gradient-to-br from-cyan-2 via-cyan-1 to-cyan-3";
      default:
        return "bg-gradient-to-br from-cyan-1 via-cyan-2 to-cyan-3";
    }
  };

  return (
    <div className={`relative min-h-screen ${getBackgroundStyle()}`}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#107d98_1px,transparent_1px),linear-gradient(to_bottom,#107d98_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.05]"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-3/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
