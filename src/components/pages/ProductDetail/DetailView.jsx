import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { useCartContext } from '../../../context/CartContext';

import styles from './DetailView.module.scss';

import ItemCount from '../../ItemCount/ItemCount';

import imageNoPhoto from '../../../images/no-photo.png';
import icoCart from '../../../images/icons/cart--white.svg';

const DetailView = ({ detail }) => {
  const {
    images,
    brand,
    title,
    sku,
    stock,
    description,
    price,
    original_price,
  } = detail;

  const { setCartWidgetAnimate, addProduct } = useCartContext();
  const [amount, setAmount] = useState(1);

  const inStock = !!(stock && stock > 0);
  const imageSrc = images?.length ? images[1].src : imageNoPhoto;

  const onAdd = () => {
    const noStock = addProduct(detail, amount);

    if (noStock)
      return toast.warn('¡Este producto supera el stock en el carrito!');

    toast.success('¡Se agregó al carrito!');
    setCartWidgetAnimate(true);

    setTimeout(() => {
      setCartWidgetAnimate(false);
    }, 500);
  };

  return (
    <div className={styles.row}>
      <div className={styles.imageContent}>
        <picture>
          <img src={imageSrc} alt={images[1].alt} />
        </picture>
      </div>

      <div className={styles.dataContent}>
        <h2>Tipo: {brand}</h2>
        <h1>{title}</h1>
        <p>
          <strong>SKU:</strong> {sku} | <strong>Stock:</strong> {stock}
        </p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>

        <div className={styles.price}>
          <p style={{ fontSize: '18px' }}>
            <strong>Precio:</strong>
          </p>
          <span className={styles.current}>S/ {price.toFixed(2)}</span>
          {original_price && <del>S/ {original_price.toFixed(2)}</del>}
        </div>

        <div className={styles.wrap}>
          <ItemCount stock={stock} setAmount={setAmount} countDetail />

          <button
            className={`btn btn--animate-icon full ${styles.btn}`}
            onClick={onAdd}
            disabled={!inStock}
          >
            <img src={icoCart} alt="Cart" />
            <span>AGREGAR A CARRITO</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
