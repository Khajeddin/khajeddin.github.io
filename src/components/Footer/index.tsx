import React from 'react';

import Container from 'components/ui/Container';

const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 py-4">
    <Container>
      <div className="flex items-center justify-center w-full">
        <a className="text-indigo-900 hover:text-indigo-600 mx-2" href="https://github.com/khajeddin" rel="noreferrer noopener" target="_blank">
          GitHub
        </a>
        <a className="text-indigo-900 hover:text-indigo-600 mx-2" href="https://linkedin.com/negarkhajeddin" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
