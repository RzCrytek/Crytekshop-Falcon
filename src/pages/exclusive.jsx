import React from 'react';
import useGetDocsFilter from '../hooks/useGetDocsFilter';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import ProductCard from '../components/ProductCard/ProductCard';

const ExclusivePage = () => {
  const filterQuery = ['exclusive', '==', true];
  const { data: products, loader } = useGetDocsFilter('products', filterQuery);

  return (
    <Layout pageId="exclusive">
      <div className="container">
        <div className="options">
          <h2>PRODUCTOS EXCLUSIVOS</h2>
        </div>

        <section className="cards-box">
          {loader && <Loader />}
          {products.map((product) => {
            /* console.log('product:', product); */
            return (
              <ProductCard
                key={product.id}
                product={product}
                typeProduct={true}
              />
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default ExclusivePage;
