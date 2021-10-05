import React from 'react';

import { useCartContext } from '../../context/CartContext';

import styles from './CartWidget.module.scss';

const CartWidget = () => {
  const { cartWidgetAnimate, getQuantityProducts } = useCartContext();

  const getQuantity = getQuantityProducts();

  const quantity =
    getQuantity > 9 ? (
      <>
        9<sup>+</sup>
      </>
    ) : (
      getQuantity
    );

  return (
    <button
      id={styles['btn-card']}
      className={cartWidgetAnimate ? styles.added : ''}
    >
      <img src="/img/icons/cart--white.svg" alt="Cart" />
      <span className={`${styles.counter} ${quantity ? styles.more : ''}`}>
        {quantity}
      </span>
    </button>
  );
};

export default CartWidget;
