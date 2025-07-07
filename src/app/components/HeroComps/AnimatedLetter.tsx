interface AnimatedLetterProps {
  letter: string;
  delay: number;
  className?: string;
}

export const AnimatedLetter = ({
  letter,
  delay,
  className = "",
}: AnimatedLetterProps) => {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        animation: `slideUp 0.8s ease-out ${delay}s both`,
      }}
    >
      {letter}
    </span>
  );
};
