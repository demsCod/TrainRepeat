export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-jade-400/20 to-jade-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-jade-300/15 to-jade-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-jade-500/20 to-jade-700/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-jade-400 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-jade-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-jade-600 rounded-full animate-bounce delay-1500"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#059669_1px,transparent_1px),linear-gradient(to_bottom,#059669_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.02]"></div>
    </div>
  );
};
