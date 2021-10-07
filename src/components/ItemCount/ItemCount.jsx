import React, { useState } from 'react';

import { useCartContext } from '../../context/CartContext';

import './ItemCount.scss';

const ItemCount = ({
  stock,
  setAmount,
  quantity: qtyProduct,
  productId,
  countDetail,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { decreaseProduct, increaseProduct } = useCartContext();

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((initVal) => initVal - 1);
      setAmount(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      setQuantity((initVal) => initVal + 1);
      setAmount(quantity + 1);
    }
  };

  return (
    <div className="product-counter">
      <button
        className="decrease"
        id="decrease"
        type="button"
        style={{ backgroundImage: "url('/img/icons/minus.svg')" }}
        onClick={
          countDetail ? decrement : () => decreaseProduct(productId, qtyProduct)
        }
      ></button>

      <input
        className="qty"
        type="text"
        value={countDetail ? quantity : qtyProduct}
        readOnly
        disabled
      />

      <button
        className="increase"
        id="increase"
        type="button"
        style={{ backgroundImage: "url('/img/icons/plus.svg')" }}
        onClick={
          countDetail
            ? increment
            : () => increaseProduct(productId, qtyProduct, stock)
        }
      ></button>
    </div>
  );
};

export default ItemCount;
