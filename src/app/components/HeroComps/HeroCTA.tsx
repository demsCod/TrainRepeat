export const HeroCTA = () => {
  return (
    <div
      style={{
        animation: `fadeIn 1s ease-out 2.2s both`,
      }}
    >
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="/workouts"
          className="group relative px-12 py-6 bg-solid-bg hover:bg-solid-hover-bg hover:ring-2 ring-border-strong text-white rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-solid-bg/25 flex items-center gap-3 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Commencer Gratuitement
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </a>
      </div>
    </div>
  );
};
