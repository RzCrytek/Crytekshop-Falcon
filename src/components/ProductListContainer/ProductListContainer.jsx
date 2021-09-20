import React from 'react';

import './ProductListContainer.scss';

import useFetchProducts from '../../hooks/useFetchProducts';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

const ProductListContainer = () => {
  const { data: comics, loader } = useFetchProducts('/comics');
  console.log('comics:', comics);

  return (
    <div className="cards-box">
      {loader && <Loader />}
      {comics?.map((comics) => {
        return <ProductCard key={comics.id} comic={comics} />;
      })}
    </div>
  );
};

export default ProductListContainer;
