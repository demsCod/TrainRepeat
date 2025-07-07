import { HeroTitle } from "./HeroTitle";
import { HeroSignupForm } from "./HeroSignupForm";
import { HeroCTA } from "./HeroCTA";
import { HeroAnimations } from "./HeroAnimations";

export const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Main content using Z-pattern */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: Title (left) + Signup Form (right) */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start mb-20">
          {/* Zone 1: Title and description (top-left) */}
          <div className="pt-12 lg:pt-16">
            <HeroTitle />
          </div>

          {/* Zone 2: Signup form (top-right) - Aligned with header CTA */}
          <div className="pt-8 lg:pt-12 lg:flex lg:justify-end">
            <HeroSignupForm />
          </div>
        </div>

        {/* Bottom section: CTA and Stats (spanning full width) */}
        <div className="space-y-16">
          {/* Zone 3: Main CTA */}
          <div className="text-center">
            <HeroCTA />
          </div>

          {/* Zone 4: Stats and social proof */}
          {/*<div className="flex justify-center">
            <HeroStats />
          </div>*/}
        </div>
      </div>

      {/* Background animations */}
      <HeroAnimations />
    </div>
  );
};
