import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/business/hero';
import Save from 'components/pages/business/save';
import Work from 'components/pages/business/work';

const Business = () => (
  <Layout>
    <Hero />
    <Save />
    <Work />
  </Layout>
);

export default Business;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
