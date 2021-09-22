import React from 'react';

import './ProductListContainer.scss';

import useFetchProducts from '../../hooks/useFetchProducts';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

const ProductListContainer = ({
  url = '/comics',
  typeProduct = false,
  year,
}) => {
  const { data: comics, loader } = useFetchProducts(url);
  console.log('comics:', comics);
  console.log('year:', year);

  const filterYear = comics.filter((y) => y.startYear == year);
  const result = year ? filterYear : comics;

  console.log('filterYear:', filterYear);

  return (
    <section className="cards-box">
      {loader && <Loader />}
      {result?.map((comics) => {
        return (
          <ProductCard
            key={comics.id}
            comic={comics}
            typeProduct={typeProduct}
          />
        );
      })}
    </section>
  );
};

export default ProductListContainer;
