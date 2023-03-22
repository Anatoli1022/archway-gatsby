import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/daos/hero';
import Benefits from 'components/pages/daos/benefits';
import Work from 'components/pages/daos/work';

const Dados = () => (
  <Layout>
    <Hero />
    <Benefits />
    <Work />
  </Layout>
);

export default Dados;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
