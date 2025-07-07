interface HeaderCTAProps {
  isMobile?: boolean;
}

export const HeaderCTA = ({ isMobile = false }: HeaderCTAProps) => {
  if (isMobile) {
    return (
      <div className="border-t border-border-subtle pt-3 mt-3">
        <a
          href="/login"
          className="block px-3 py-2 text-muted hover:text-solid-bg hover:bg-ui-bg rounded-md transition-all duration-300"
        >
          Se connecter
        </a>
        <a
          href="/signup"
          className="block px-3 py-2 bg-solid-bg hover:bg-solid-hover-bg text-white rounded-md transition-all duration-300 mt-2 text-center"
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
        className="text-muted hover:text-solid-bg transition-colors duration-300 font-medium"
      >
        Se connecter
      </a>
      <a
        href="/signup"
        className="bg-solid-bg hover:bg-solid-hover-bg text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Commencer
      </a>
    </div>
  );
};
