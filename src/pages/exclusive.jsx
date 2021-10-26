import React from 'react';
import useGetDocsFilterOnSnapshot from '../hooks/useGetDocsFilterOnSnapshot';

import Layout from './_layout';

import { Loader, ProductCard } from '../components';

const ExclusivePage = () => {
  const filterQuery = ['exclusive', '==', true];
  const { data: products, loader } = useGetDocsFilterOnSnapshot(
    'products',
    filterQuery
  );

  return (
    <Layout pageId="products">
      <div className="container">
        <div className="options">
          <h2>PRODUCTOS EXCLUSIVOS</h2>
        </div>

        <section className="cards-box">
          {loader && <Loader />}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default ExclusivePage;
