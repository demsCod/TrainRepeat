export const HeroSubtitle = () => {
  return (
    <div
      className="max-w-3xl mx-auto"
      style={{
        animation: `fadeIn 1s ease-out 1.8s both`,
      }}
    >
      <p className="text-xl sm:text-2xl text-muted leading-relaxed font-light">
        Transformez votre routine quotidienne en un mode de vie extraordinaire.
        <span className="text-solid-bg font-medium">
          {" "}
          L&apos;IA qui comprend vos objectifs
        </span>{" "}
        et vous accompagne vers votre meilleure version.
      </p>
    </div>
  );
};
