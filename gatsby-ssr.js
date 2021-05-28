import './src/styles/tailwind.css';
import React from 'react';

const HtmlAttributes = {
  lang: 'en',
  dir: 'ltr',
};

const BodyAttributes = {
  className: 'antialiased',
};

export const onRenderBody = (
  { setHtmlAttributes, setBodyAttributes },
  pluginOptions,
) => {
  setHtmlAttributes(HtmlAttributes);
  setBodyAttributes(BodyAttributes);
};
