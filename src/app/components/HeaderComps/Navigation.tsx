interface NavigationProps {
  isMobile?: boolean;
}

export const Navigation = ({ isMobile = false }: NavigationProps) => {
  const navItems = [
    { href: "#home", label: "Accueil" },
    { href: "#workouts", label: "Workouts" },
    { href: "#features", label: "Fonctionnalités" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#about", label: "À propos" },
  ];

  if (isMobile) {
    return (
      <div className="space-y-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block px-3 py-2 text-muted hover:text-solid-bg hover:bg-ui-bg rounded-md transition-all duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-muted hover:text-solid-bg transition-colors duration-300 font-medium relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-solid-bg transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </nav>
  );
};
