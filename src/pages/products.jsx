import React from 'react';

import Layout from './_layout';
import { ProductListContainer } from '../components';

const ProductsPage = () => {
  return (
    <Layout pageId="product">
      <div className="container">
        <div className="options">
          <h2>LISTA DE COMICS</h2>
        </div>
        <ProductListContainer typeProduct={true} />
      </div>
    </Layout>
  );
};

export default ProductsPage;
