import React, { ReactNode } from 'react';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <span
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
