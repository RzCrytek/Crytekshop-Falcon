import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

import useGetDocs from '../hooks/useGetDocs';
import useGetCategoryId from '../hooks/useGetCategoryId';
import useGetDocsFilter from '../hooks/useGetDocsFilter';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage = () => {
  const { category: categoryParam } = useParams();

  const { data: categories } = useGetDocs('categories');

  console.log('categories:', categories);

  const paramData = categories.find(
    (document) => document.slug === categoryParam
  );
  console.log('categoryData:', paramData);

  const categoryKey = paramData?.key;

  const filterQuery = ['categoryKey', '==', categoryKey];
  const filter = categoryParam ? filterQuery : '';

  const { data: products, loader } = useGetDocsFilter('products', filter);

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

export default ProductsPage;
