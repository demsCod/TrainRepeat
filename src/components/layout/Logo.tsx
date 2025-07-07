export const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-jade-11 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-jade-12 tracking-tight">
          TrainRepeat
        </span>
        <span className="text-xs text-jade-11 font-medium -mt-1">AI Coach</span>
      </div>
    </div>
  );
};
