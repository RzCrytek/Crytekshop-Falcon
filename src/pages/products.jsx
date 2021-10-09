import React, { useEffect } from 'react';
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

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage = () => {
  const { category: categoryParam } = useParams();

  const { data: products, loader } = useGetDocs('products');
  const { data: categories } = useGetDocs('categories');

  console.log('category param ID:', categoryParam);
  // console.log('data-loader', products, categories);

  const getReferencia = async () => {
    const docRef = doc(db, 'categories', 'IgcwDaD8szJuH3P8XIF4');

    console.log('docRef:', docRef);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }

    const q = query(
      collection(db, 'products'),
      where('categoryKey', '==', docRef)
    );
    const querySnapshot = await getDocs(q);

    // console.log('querySnapshot:', querySnapshot);
  };

  getReferencia();

  // useEffect(() => {
  //   const category = categories.find(
  //     (category) => category.slug === categoryParam
  //   );

  //   console.log('category', category);
  //   const categoryId = category?.id;
  //   console.log('categoryID', categoryId);

  //   const productsCategory = products.filter(
  //     (product) => product.catID === categoryId
  //   );

  //   console.log('productsCategory:', productsCategory);
  // }, [categoryParam, categories, products]);

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
