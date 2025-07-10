"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HeaderCTA } from "./HeaderCTA";
import { MobileMenu } from "./MobileMenu";
import { MobileMenuButton } from "./MobileMenuButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border-subtle/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </div>

          {/* Navigation Desktop */}
          <Navigation />

          {/* CTA Desktop */}
          <HeaderCTA />

          {/* Mobile menu button */}
          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </header>
  );
};
