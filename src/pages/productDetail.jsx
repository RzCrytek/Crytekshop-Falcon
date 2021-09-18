import React from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Layout from './_layout';
import { ItemDetailContainer } from '../components';

const ProductDetailPage = () => {
  const { id } = useParams();

  console.log('data:', id);

  return (
    <Layout pageId="product-detail">
      <Link className="btn btn--primary" to="/productos">
        Regresar
      </Link>
      <div className="container">
        <div className="options">
          <h2>DETALLE DE UN PERSONAJE</h2>
        </div>

        <ItemDetailContainer id={id} />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
