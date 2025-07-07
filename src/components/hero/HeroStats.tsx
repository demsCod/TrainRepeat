interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="space-y-2">
      <div className="text-3xl font-bold text-solid-bg">{value}</div>
      <div className="text-muted font-medium">{label}</div>
    </div>
  );
};

export const HeroStats = () => {
  const stats = [
    { value: "10K+", label: "Utilisateurs actifs" },
    { value: "50K+", label: "Workouts générés" },
    { value: "4.9★", label: "Note moyenne" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center mt-16">
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-8">
          <StatItem value={stat.value} label={stat.label} />
          {index < stats.length - 1 && (
            <div className="hidden sm:block w-px h-12 bg-border-subtle"></div>
          )}
        </div>
      ))}
    </div>
  );
};
