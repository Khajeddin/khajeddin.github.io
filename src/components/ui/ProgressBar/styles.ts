import styled from 'styled-components';
import tw from 'twin.macro';

export interface StyledProps {
  percentage: number;
}

export const Bar = styled.div<StyledProps>`
  ${tw`h-2 bg-green-200`};
  width: ${({ percentage }) => `${percentage}%`};
`;

