import React, { useEffect, useState } from 'react';

import Layout from './_layout';
import { ProductListContainer } from '../components';
import { collection, getDocs } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';
import { NavLink } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage = () => {
  // const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const getProducts = async () => {
    //   const data = await getDocs(collection(db, 'products'));
    //   console.log('data firebase:', data);

    //   data.forEach((document) => {
    //     console.log('document:', { id: document.id, ...document.data() });

    //     if (document.data().categoryKey) {
    //       console.log('document category:', {
    //         id: document.id,
    //         ...document.data(),
    //       });
    //     }
    //   });
    // };

    // getProducts();

    // const getCategories = async () => {
    //   const querySnapshot = await getDocs(collection(db, 'categories'));
    //   console.log('querySnapshot firebase:', querySnapshot);

    //   const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
    //     id: document.id,
    //     ...document.data(),
    //   }));

    //   setCategories(arrQuerySnapshot);
    // };

    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      console.log('querySnapshot firebase:', querySnapshot);

      const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setProducts(arrQuerySnapshot);
    };

    // getCategories();
    getProducts();
  }, []);

  return (
    <Layout pageId="product">
      <div className="container">
        <div className="options">
          <h2>LISTA DE COMICS</h2>
        </div>

        {/* <nav>
          <ul className="nav-category">
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  exact
                  className="btn btn--stroke"
                  to={`/${category.slug}`}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* <ProductListContainer typeProduct={true} /> */}
        <section className="cards-box">
          {products?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                comic={product}
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
