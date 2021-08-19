import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  percentage: number;
}

export const Bar = styled.div<StyledProps>`
  ${tw`h-2 bg-teal-400`};
  width: ${({ percentage }) => `${percentage}%`};
`;

