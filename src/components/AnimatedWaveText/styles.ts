import styled, { keyframes } from 'styled-components';

// Define a animação
const wave = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Componente de caractere animado
export const AnimatedChar = styled.span<{ delay: number; highlight: boolean }>`
  display: inline-block;
  animation: ${wave} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  color: ${({ highlight }) => (highlight ? '#FF0000' : 'inherit')}; // destaque opcional
`;

// Container principal (pode ser personalizado via styled-components também)
export const TextContainer = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.3rem;
  font-family: "Molle", serif;
  font-style: italic;
`;