import React from 'react';

import styles from './CartWidget.module.scss';

const CartWidget = () => {
  return (
    <button id={styles.btnCard}>
      <img src="/img/icons/cart--white.svg" alt="Cart" />
      <span className={styles.counter}>1</span>
    </button>
  );
};

export default CartWidget;
