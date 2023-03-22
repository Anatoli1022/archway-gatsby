import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/contractors/hero';
import Benefits from 'components/pages/contractors/benefits';
import Work from 'components/pages/contractors/work';

const Contractors = () => (
  <Layout>
    <Hero />
    <Benefits />
    <Work />
  </Layout>
);

export default Contractors;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
