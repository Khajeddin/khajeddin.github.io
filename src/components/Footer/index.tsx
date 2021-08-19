import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 py-4">
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/khajeddin" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://linkedin.com/negarkhajeddin" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </footer>
);

export default Footer;
