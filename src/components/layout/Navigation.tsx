import Link from "next/link";
import {
  HomeIcon,
  ChatBubbleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

interface NavigationProps {
  isMobile?: boolean;
}

export const Navigation = ({ isMobile = false }: NavigationProps) => {
  const navItems = [
    { href: "/", label: "Accueil", isExternal: false, icon: HomeIcon },
    {
      href: "/chat",
      label: "Coach IA",
      isExternal: false,
      icon: ChatBubbleIcon,
    },
    {
      href: "#about",
      label: "À propos",
      isExternal: true,
      icon: InfoCircledIcon,
    },
  ];

  if (isMobile) {
    return (
      <div className="space-y-1">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return item.isExternal ? (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-3 text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl transition-all duration-300 group"
            >
              <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="font-medium">{item.label}</span>
            </a>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-3 text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl transition-all duration-300 group"
            >
              <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <nav className="hidden md:flex items-center space-x-2">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return item.isExternal ? (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl transition-all duration-300 font-medium relative group"
          >
            <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>{item.label}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-10 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 text-cyan-11 hover:text-cyan-12 hover:bg-cyan-3/50 rounded-xl transition-all duration-300 font-medium relative group"
          >
            <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>{item.label}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-10 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
        );
      })}
    </nav>
  );
};
