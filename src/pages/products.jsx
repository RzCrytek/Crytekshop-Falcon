import React from 'react';
import { NavLink } from 'react-router-dom';

import useGetDocs from '../hooks/useGetDocs';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage = () => {
  const { data: products, loader } = useGetDocs('products');
  const { data: categories } = useGetDocs('categories');

  console.log('data-loader', products, categories);

  return (
    <Layout pageId="product">
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

        {/* <ProductListContainer typeProduct={true} /> */}
        <section className="cards-box">
          {loader && <Loader />}
          {products?.map((product) => {
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
