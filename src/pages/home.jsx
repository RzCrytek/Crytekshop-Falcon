import React from 'react';
import { Link } from 'react-router-dom';

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

      <div className="all-products">
        <Link className="btn btn--animate-stroke" to="/productos">
          <span>Ver todos los productos {'>'}</span>
          <svg>
            <rect x="0" y="0" fill="none"></rect>
          </svg>
        </Link>
      </div>

      <RangeCollections />
    </Layout>
  );
};

export default HomePage;
