import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import useGetDocs from '../hooks/useGetDocs';
import useGetDocsFilterOnSnapshot from '../hooks/useGetDocsFilterOnSnapshot';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage = () => {
  const { category: categoryParam } = useParams();
  console.log('categoryParam:', categoryParam);

  const { data: categories } = useGetDocs('categories');
  console.log('categories:', categories);

  const paramData = categories.find(
    (document) => document.slug === categoryParam
  );
  console.log('paramData:', paramData);

  const filterQuery = paramData ? ['categoryKey', '==', paramData.key] : '';

  const { data: products, loader } = useGetDocsFilterOnSnapshot(
    'products',
    filterQuery
  );

  return (
    <Layout pageId="products">
      <div className="container">
        <div className="options">
          <h2>LISTA DE PRODUCTOS</h2>
        </div>

        <nav>
          <ul className="nav-category">
            <li>
              <NavLink exact className="btn btn--stroke" to="/productos">
                All
              </NavLink>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  className="btn btn--stroke"
                  to={`/productos/${category.slug}`}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <section className="cards-box">
          {loader && <Loader />}
          {products.map((product) => {
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

export default ProductsPage;
