import React from 'react';

import Layout from './_layout';
import { ProductListContainer } from '../components';

const EventsPage = () => {
  return (
    <Layout pageId="product">
      <div className="container">
        <div className="options">
          <h2>LISTA DE EVENTOS</h2>
        </div>
        <ProductListContainer url="/events" />
      </div>
    </Layout>
  );
};

export default EventsPage;
