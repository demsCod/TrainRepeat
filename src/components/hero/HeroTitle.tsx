export const HeroTitle: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-cyan-12 leading-tight tracking-tight">
        Développez votre{" "}
        <span className="text-cyan-11 block">forme physique</span>
        <span className="text-cyan-9">avec l&apos;IA</span>
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-cyan-11 leading-relaxed max-w-xl font-light">
        Maîtrisez votre condition physique grâce à des programmes personnalisés,
        un suivi intelligent et des conseils adaptés à vos objectifs.
      </p>
    </div>
  );
};
