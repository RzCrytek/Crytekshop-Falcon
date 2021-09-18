import React from 'react';

import Layout from './_layout';
import { ItemListContainer } from '../components';

const ProductsPage = () => {
  return (
    <Layout pageId="product">
      <ItemListContainer />
    </Layout>
  );
};

export default ProductsPage;
