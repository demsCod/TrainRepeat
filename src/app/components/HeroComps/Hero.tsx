import { HeroTitle } from "./HeroTitle";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroCTA } from "./HeroCTA";
import { HeroStats } from "./HeroStats";
import { HeroBackground } from "./HeroBackground";
import { HeroAnimations } from "./HeroAnimations";

export const Hero = () => {
  return (
    <div className="relative min-h-screen mt-20 sm:mt-0  flex items-center justify-center overflow-hidden bg-gradient-to-br from-app-bg via-subtle-bg to-ui-bg">
      {/* Background decorative elements */}
      <HeroBackground />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Main title with staggered animation */}
          <HeroTitle />

          {/* Subtitle with fade in */}
          <HeroSubtitle />

          {/* CTA section */}
          <div className="space-y-8">
            <HeroCTA />
            <HeroStats />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <HeroAnimations />
    </div>
  );
};
