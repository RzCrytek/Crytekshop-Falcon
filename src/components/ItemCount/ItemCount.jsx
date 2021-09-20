import React, { useState } from 'react';

import './ItemCount.scss';

// import IconMinus from '../../img/icons/minus.svg';
// import IconPlus from '../../img/icons/minus.svg';

const ItemCount = ({ stock, initial, setAmount }) => {
  const [quantity, setQuantity] = useState(initial);
  // const inStock = !!(stock && stock > 0);
  // console.log('inStock', inStock);

  console.log('initial desde el hijo:', initial);

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
      {/* <button className="btn" onClick={onAdd} disabled={!inStock}>
        AGREGAR A CARRITO
      </button> */}
    </>
  );
};

export default ItemCount;
