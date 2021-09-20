import React from 'react';

import useFetchProducts from '../../hooks/useFetchProducts';
import Loader from '../Loader/Loader';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductDetailContainer = ({ id }) => {
  const { data: comics, loader } = useFetchProducts('/comics/' + id);

  return <>{loader ? <Loader /> : <ProductDetail detail={comics[0]} />}</>;
};

export default ProductDetailContainer;
