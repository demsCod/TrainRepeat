import { Navigation } from "./Navigation";
import { HeaderCTA } from "./HeaderCTA";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-app-bg/95 backdrop-blur-md rounded-lg mt-2 border border-border-subtle animate-[slideDown_0.3s_ease-out]">
        <Navigation isMobile={true} />
        <HeaderCTA isMobile={true} />
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
