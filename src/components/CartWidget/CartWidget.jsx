import React from 'react';

import { useCartContext } from '../../context/CartContext';

import styles from './CartWidget.module.scss';

import { ReactComponent as IcoCartWhite } from '../../images/icons/cart--white.svg';

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
      <IcoCartWhite />
      <span className={`${styles.counter} ${quantity ? styles.more : ''}`}>
        {quantity}
      </span>
    </button>
  );
};

export default CartWidget;
