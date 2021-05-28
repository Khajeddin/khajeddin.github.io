import * as React from 'react';
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

export default function Component(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Negar Khajeddin</title>
        <meta name="description" content="Negar Khajeddin's Portfolio" />
      </Helmet>
      <div className="italic">Hello world</div>
    </>
  );
}
