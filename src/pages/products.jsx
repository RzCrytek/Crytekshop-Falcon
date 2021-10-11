import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import useGetDocs from '../hooks/useGetDocs';
import useGetDocsFilter from '../hooks/useGetDocsFilter';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage = () => {
  const { category } = useParams();
  const categoryParam = category ? category : 'all';

  console.log('categoryParam:', categoryParam);

  const { data: categories } = useGetDocs('categories');

  const paramData = categories.find(
    (document) => document.slug === categoryParam
  );

  console.log('paramData:', !!paramData);

  // let isParamData =
  //   category && !!paramData ? ['categoryKey', '==', paramData.key] : [];

  let isParamData = category && !!paramData ? true : false;

  console.log('isParamData:', isParamData);

  let other = isParamData ? ['categoryKey', '==', paramData.key] : [];

  console.log('other:', other);

  let final = category ? other : 'all';

  console.log('final:', final);

  const filterQuery = paramData ? ['categoryKey', '==', paramData.key] : [];

  const { data: products, loader } = useGetDocsFilter('products', final);

  console.log('products:', products);

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
