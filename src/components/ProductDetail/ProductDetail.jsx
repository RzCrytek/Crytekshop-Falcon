import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductDetail.module.scss';

import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ProductDetail = ({ detail }) => {
  const initialAmount = 1;
  const initialStock = 10;
  const inStock = !!(initialStock && initialStock > 0);

  const pathImage = `${detail.thumbnail.path}.${detail.thumbnail.extension}`;
  const image = detail.images.length ? pathImage : '/img/no-photo.png';

  const [amount, setAmount] = useState(initialAmount);
  const [isAddProduct, setIsAddProduct] = useState(false);

  const { cartWidgetRef, addProduct } = useCartContext();

  const onAdd = () => {
    addProduct(detail, amount);
    setIsAddProduct(!isAddProduct);

    // if (cartWidgetRef.current) {
    //   console.log('cartWidgetRef:', cartWidgetRef);

    //   // cartWidgetRef.current.classList.add('added');
    //   cartWidgetRef.current.className = 'added';

    //   setTimeout(() => {
    //     cartWidgetRef.current.classList.remove('added');
    //   }, 1000);
    // }
  };

  // if (!detail.length) return <p>No existe el producto</p>;

  return (
    <div className={styles.row}>
      <div className={styles.imageContent}>
        <picture>
          <img src={image} alt={detail.title} />
        </picture>
      </div>

      <div className={styles.dataContent}>
        <div className={styles.content}>
          <h2>Formato: {detail.format}</h2>
          <h1>{detail.title}</h1>
          <p>
            <strong>UPC:</strong> {detail.upc}
          </p>
          <p className={styles.description}>{detail.description}</p>

          <div className={styles.price}>
            <p style={{ fontSize: '18px' }}>
              <strong>Precio:</strong>
            </p>
            <span className={styles.current}>
              S/. {(detail.prices[0].price + 10).toFixed(2)}
            </span>
            {!(detail.prices[0].price === 0) && (
              <del>S/. {(detail.prices[0].price + 15).toFixed(2)}</del>
            )}
          </div>

          <div className={styles.wrap}>
            {!isAddProduct && (
              <ItemCount
                stock={initialStock}
                initial={initialAmount}
                setAmount={setAmount}
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
