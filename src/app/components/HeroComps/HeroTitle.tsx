import { AnimatedLetter } from "./AnimatedLetter";

export const HeroTitle = () => {
  return (
    <div className="space-y-4">
      {/* EAT, SLEEP */}
      <div className="overflow-hidden">
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-muted leading-none tracking-tight">
          <AnimatedLetter letter="E" delay={0.2} />
          <AnimatedLetter letter="A" delay={0.2} />
          <AnimatedLetter letter="T" delay={0.3} />
          <AnimatedLetter letter="," delay={0.4} />
          <AnimatedLetter letter="S" delay={0.4} />
          <AnimatedLetter letter="L" delay={0.5} />
          <AnimatedLetter letter="E" delay={0.6} />
          <AnimatedLetter letter="E" delay={0.7} />
          <AnimatedLetter letter="P" delay={0.8} />
        </h1>
      </div>

      {/* TRAIN */}
      <div className="overflow-hidden">
        <h2 className="text-7xl sm:text-8xl lg:text-9xl font-black text-strong leading-none tracking-tight">
          <AnimatedLetter letter="T" delay={0.9} />
          <AnimatedLetter letter="R" delay={0.9} />
          <AnimatedLetter letter="A" delay={1.1} />
          <AnimatedLetter letter="I" delay={1.2} />
          <AnimatedLetter letter="N" delay={1.3} />
        </h2>
      </div>

      {/* REPEAT */}
      <div className="overflow-hidden">
        <h3
          className="text-5xl sm:text-6xl lg:text-7xl font-light text-muted leading-none tracking-wider"
          style={{
            animation: `slideUp 0.8s ease-out 1.4s both`,
          }}
        >
          REPEAT
        </h3>
      </div>
    </div>
  );
};
