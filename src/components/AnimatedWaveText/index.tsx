import { AnimatedChar, TextContainer } from "./styles";

interface AnimatedTextProps {
  children: string;
  highlightLetters?: string[]; // letras que devem ser destacadas
}

export function AnimatedWaveText({ children, highlightLetters = [] }: AnimatedTextProps) {
  return (
    <TextContainer>
      {Array.from(children).map((char, index) => (
        <AnimatedChar
          key={index}
          delay={index * 0.1}
          highlight={highlightLetters.includes(char)}
        >
          {char === ' ' ? '\u00A0' : char}
        </AnimatedChar>
      ))}
    </TextContainer>
  );
};