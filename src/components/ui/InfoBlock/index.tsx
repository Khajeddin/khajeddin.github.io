import React from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center }) => (
  <Styled.InfoBlock center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <h3 className="text-md mt-1 font-semibold">{title}</h3>
      <p className="mt-1">{content}</p>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;
