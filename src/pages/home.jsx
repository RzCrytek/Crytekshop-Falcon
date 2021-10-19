import React from 'react';

import Layout from './_layout';
import { Banner, Choose, RangeCollections } from '../components/pages/Home';

const HomePage = () => {
  return (
    <Layout pageId="home">
      <section id="announcements">
        <h3>ENVÍO GRATIS</h3>
      </section>

      <Banner />
      <Choose />
      <RangeCollections />
    </Layout>
  );
};

export default HomePage;
