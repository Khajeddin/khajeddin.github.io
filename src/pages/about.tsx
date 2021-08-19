import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Education from 'components/Education';
import Skills from 'components/Skills';
import Services from 'components/Services';

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <hr />
    <Education />
    <hr />
    <Services />
  </Layout>
);

export default AboutPage;
