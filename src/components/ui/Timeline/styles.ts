import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Timeline = styled.div`
  ${tw`flex flex-col sm:flex-row w-full p-4 relative border-l border-indigo-200`};

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Date = styled.div`
  ${tw`text-xs border  border-green-200 rounded-full px-2`};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute`};
  left: -6px;
  top: 20px;
`;
