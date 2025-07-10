import Link from "next/link";
import { RocketIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export const HeroCTA = () => {
  return (
    <div className="space-y-6">
      {/* Main CTA */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Link
          href="/chat"
          className="group relative px-12 py-6 bg-cyan-9 hover:bg-cyan-10 text-white rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-9/25 flex items-center gap-3 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <RocketIcon className="w-6 h-6" />
            Essayer le Coach IA
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </Link>

        <Link
          href="/chat"
          className="group px-8 py-6 bg-transparent border-2 border-cyan-8 hover:bg-cyan-8 text-cyan-11 hover:text-white rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3"
        >
          <span className="flex items-center gap-3">
            Voir les programmes
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>

      {/* Trust indicators */}
      <div className="text-center space-y-2">
        <p className="text-cyan-11 text-sm font-medium">
          ✓ Gratuit • ✓ Instantané • ✓ Programmes personnalisés
        </p>
        <div className="flex items-center justify-center gap-6 text-cyan-11/60 text-xs font-light">
          <span>🔒 Sécurisé</span>
          <span>🎯 Personnalisé</span>
          <span>⚡ Rapide</span>
        </div>
      </div>
    </div>
  );
};
