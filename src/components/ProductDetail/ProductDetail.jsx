import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductDetail.module.scss';

import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const initialAmount = 1;

const ProductDetail = ({ detail }) => {
  console.log('detail:', detail);
  const initialStock = 10;
  const inStock = !!(initialStock && initialStock > 0);

  // const pathImage = `${detail.thumbnail.path}.${detail.thumbnail.extension}`;
  // const image = detail.images.length ? pathImage : '/img/no-photo.png';

  const [amount, setAmount] = useState(initialAmount);
  const [isAddProduct, setIsAddProduct] = useState(false);

  const { setCartWidgetAnimate, addProduct } = useCartContext();

  const onAdd = () => {
    addProduct(detail, amount);
    setIsAddProduct(isAddProduct);
    setCartWidgetAnimate(true);

    setTimeout(() => {
      setCartWidgetAnimate(false);
    }, 500);
  };

  // return <p>hola {detail.original_price}</p>;

  return (
    <div className={styles.row}>
      <div className={styles.imageContent}>
        <picture>
          <img src={detail.images?.[1].src} alt={detail.images?.[1].alt} />
        </picture>
      </div>

      <div className={styles.dataContent}>
        <div className={styles.content}>
          <h2>Formato: {detail.brand}</h2>
          <h1>{detail.title}</h1>
          <p>
            <strong>SKU:</strong> {detail.sku}
          </p>
          <p className={styles.description}>{detail.description}</p>

          <div className={styles.price}>
            <p style={{ fontSize: '18px' }}>
              <strong>Precio:</strong>
            </p>
            <span className={styles.current}>S/. {detail.price}</span>
            {detail.original_price && <del>S/. {detail.original_price}</del>}
          </div>

          <div className={styles.wrap}>
            {!isAddProduct && (
              <ItemCount
                stock={initialStock}
                setAmount={setAmount}
                countDetail
              />
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
    </div>
  );
};

export default ProductDetail;
