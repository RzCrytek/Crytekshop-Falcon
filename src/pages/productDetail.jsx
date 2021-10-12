import React from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import useGetDoc from '../hooks/useGetDoc';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import { DetailView } from '../components/pages';
import NotFoundPage from './notFound';

const ProductDetailPage = () => {
  const { id } = useParams();

  const {
    document: product,
    loader,
    isDocument: isProduct,
  } = useGetDoc('products', id);

  console.log('product:', product);

  if (!isProduct) return <NotFoundPage />;

  return (
    <Layout pageId="product-detail">
      <div className="options">
        <div className="container">
          <Link className="btn btn--back" to="/productos">
            <i
              className="ico"
              style={{ backgroundImage: "url('/img/icons/arrow--left.svg')" }}
            ></i>
            Regresar
          </Link>
        </div>
      </div>

      <div className="container">
        {loader ? <Loader /> : <DetailView detail={product} />}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
