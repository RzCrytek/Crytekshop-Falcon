import React, { useState } from 'react';

import './ItemCount.scss';

const ItemCount = ({ stock, initial, setAmount }) => {
  const [quantity, setQuantity] = useState(initial);

  const decrease = () => {
    if (quantity > initial) {
      setQuantity((initialValue) => initialValue - 1);
      setAmount(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < stock) {
      setQuantity((initialValue) => initialValue + 1);
      setAmount(quantity + 1);
    }
  };

  return (
    <>
      <div className="product-counter">
        <button
          className="decrease"
          id="decrease"
          type="button"
          style={{ backgroundImage: "url('/img/icons/minus.svg')" }}
          onClick={decrease}
        ></button>

        <input className="qty" type="text" value={quantity} disabled />

        <button
          className="increase"
          id="increase"
          type="button"
          style={{ backgroundImage: "url('/img/icons/plus.svg')" }}
          onClick={increase}
        ></button>
      </div>
    </>
  );
};

export default ItemCount;
