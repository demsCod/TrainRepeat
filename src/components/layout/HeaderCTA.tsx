interface HeaderCTAProps {
  isMobile?: boolean;
}

export const HeaderCTA = ({ isMobile = false }: HeaderCTAProps) => {
  if (isMobile) {
    return (
      <div className="border-t border-border-subtle pt-3 mt-3">
        <a
          href="/login"
          className="block px-3 py-2 text-text-muted hover:text-primary hover:bg-surface rounded-md transition-all duration-300"
        >
          Se connecter
        </a>
        <a
          href="/chat"
          className="block px-3 py-2 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary-strong text-white rounded-md transition-all duration-300 mt-2 text-center"
        >
          Commencer
        </a>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href="/login"
        className="text-text-muted hover:text-primary transition-colors duration-300 font-medium"
      >
        Se connecter
      </a>
      <a
        href="/chat"
        className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary-strong text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Commencer
      </a>
    </div>
  );
};
