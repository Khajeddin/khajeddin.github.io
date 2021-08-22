import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-900 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
  
  .format-html {
    ${tw`mt-2 px-2 text-gray-900`};

    p {
      ${tw`leading-relaxed pt-4 text-justify`}
      text-indent: 1rem;
    }

    em {
      ${tw`italic`};
    }

    strong {
      ${tw`font-bold`};
    }

    h2 {
      ${tw`font-medium text-xl pt-6`};
    }

    h3 {
        ${tw`font-medium text-lg pt-5`};
    }

    h4 {
        ${tw`font-medium text-base pt-5`};
    }

    a {
        ${tw`underline`};
    }

    ul {
        ${tw`list-disc pb-10 text-justify`};

        text-indent: 0.5rem;
    }

    ol {
        ${tw`list-decimal pb-10 text-justify`};

        text-indent: 0.5rem;
    }

  }
`;
