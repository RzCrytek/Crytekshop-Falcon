import React from 'react';

import { useCartContext } from '../../context/CartContext';

import styles from './CartWidget.module.scss';

const CartWidget = () => {
  const { getQuantity } = useCartContext();

  return (
    <button id={styles.btnCard}>
      <img src="/img/icons/cart--white.svg" alt="Cart" />
      <span className={styles.counter}>{getQuantity()}</span>
    </button>
  );
};

export default CartWidget;
