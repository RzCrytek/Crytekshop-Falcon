import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../../context/CartContext';

import styles from './DetailView.module.scss';
import imageNoPhoto from '../../../images/no-photo.png';

import ItemCount from '../../ItemCount/ItemCount';

const DetailView = ({ detail }) => {
  const {
    images,
    brand,
    title,
    sku,
    description,
    price,
    original_price,
    stock,
  } = detail;

  const { setCartWidgetAnimate, addProduct } = useCartContext();

  const [amount, setAmount] = useState(1);
  const [isAddProduct, setIsAddProduct] = useState(false);

  const inStock = !!(stock && stock > 0);

  const imageSrc = images?.length ? images[1].src : imageNoPhoto;

  const onAdd = () => {
    addProduct(detail, amount);
    setCartWidgetAnimate(true);
    setIsAddProduct(isAddProduct);

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
          <strong>SKU:</strong> {sku}
        </p>
        <p className={styles.description}>{description}</p>

        <div className={styles.price}>
          <p style={{ fontSize: '18px' }}>
            <strong>Precio:</strong>
          </p>
          <span className={styles.current}>S/. {price.toFixed(2)}</span>
          {original_price && <del>S/. {original_price.toFixed(2)}</del>}
        </div>

        <div className={styles.wrap}>
          {!isAddProduct && (
            <ItemCount stock={stock} setAmount={setAmount} countDetail />
          )}

          {isAddProduct ? (
            <Link to="/cart" className={`btn ${styles.btn}`}>
              TERMINAR MI COMPRA
            </Link>
          ) : (
            <button
              className={`btn ${styles.btn}`}
              onClick={onAdd}
              disabled={!inStock}
            >
              AGREGAR A CARRITO
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailView;
