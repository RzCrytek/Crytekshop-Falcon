import React from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Layout from './_layout';
import { ProductDetailContainer } from '../components';

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log('data:', id);

  const buttonCSS = {
    maxWidth: '150px',
    border: 0,
  };

  return (
    <Layout pageId="product-detail">
      <div className="options" style={{ backgroundColor: 'peru' }}>
        <div className="container" style={{ padding: 0 }}>
          <Link className="btn btn--back" to="/productos" style={buttonCSS}>
            <i
              className="ico"
              style={{ backgroundImage: "url('/img/icons/arrow--left.svg')" }}
            ></i>
            Regresar
          </Link>
        </div>
      </div>

      <div className="container">
        <ProductDetailContainer id={id} />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
