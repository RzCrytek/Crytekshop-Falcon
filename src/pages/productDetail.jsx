import React from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import useGetDocOnSnapshot from '../hooks/useGetDocOnSnapshot';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';
import DetailView from '../components/pages/ProductDetail/DetailView';

import { ReactComponent as IcoArrowLeft } from '../images/icons/arrow--left.svg';

import NotFoundPage from './notFound';

const ProductDetailPage = () => {
  const { id } = useParams();

  const {
    document: product,
    loader,
    isDocument: isProduct,
  } = useGetDocOnSnapshot('products', id);

  console.log('product:', product);

  if (!isProduct) return <NotFoundPage />;

  return (
    <Layout pageId="product-detail">
      <div className="options">
        <div className="container">
          <Link className="btn btn--back" to="/productos">
            <IcoArrowLeft className="ico" />
            Regresar
          </Link>
        </div>
      </div>

      <div className="container">
        {loader ? (
          <Loader />
        ) : (
          <ErrorBoundary FallbackComponent={ErrorBoundaryMessage}>
            <DetailView detail={product} />
          </ErrorBoundary>
        )}
      </div>
    </Layout>
  );
};

const ErrorBoundaryMessage = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      Ha habido un error en este componente:
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
    </div>
  );
};

export default ProductDetailPage;
