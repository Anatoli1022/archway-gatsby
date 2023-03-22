import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/home/hero';
import Pay from 'components/pages/home/pay';
import Solution from 'components/pages/home/solution';
import Globally from 'components/pages/home/globally';
import Crypto from 'components/pages/home/crypto';
import Get from 'components/pages/home/get';

const HomePage = () => (
  <Layout>
    <Hero />
    <Pay />
    <Solution />
    <Crypto />
    <Globally />
    <Get />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
