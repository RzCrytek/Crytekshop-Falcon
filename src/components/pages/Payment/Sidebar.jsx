import React from 'react';
import { useCartContext } from '../../../context/CartContext';

import OrderSummary from '../../OrderSummary/OrderSummary';
import ProductCart from '../../ProductCart/ProductCart';

const Sidebar = () => {
  const { cart, getQuantityProducts, getTotalPriceProducts } = useCartContext();

  return (
    <>
      <div className="ordered-products">
        {cart.map((product) => (
          <ProductCart product={product} key={product.id} ProductCartReadOnly />
        ))}
      </div>
      <OrderSummary
        quantity={getQuantityProducts()}
        totalPriceProducts={getTotalPriceProducts()}
        SummaryReadOnly
      />
    </>
  );
};

export default Sidebar;
