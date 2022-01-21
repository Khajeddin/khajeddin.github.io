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
    ${tw`px-2 mt-2 text-gray-900`};

    p {
      ${tw`pt-4 leading-relaxed text-justify`}
      text-indent: 1rem;
    }

    em {
      ${tw`italic`};
    }

    strong {
      ${tw`font-bold`};
    }

    h2 {
      ${tw`pt-6 text-xl font-medium`};
    }

    h3 {
        ${tw`pt-5 text-lg font-medium`};
    }

    h4 {
        ${tw`pt-5 text-base font-medium`};
    }

    a {
        ${tw`underline`};
    }

    ul {
        ${tw`pb-10 pl-10 text-justify list-disc`};

        text-indent: 0.5rem;
    }

    ol {
        ${tw`pb-10 pl-10 text-justify list-decimal`};

        text-indent: 0.5rem;
    }

  }
`;
