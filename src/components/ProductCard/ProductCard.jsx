import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import imageNoPhoto from '../../images/no-photo.png';

const ProductCard = ({ product, typeProduct }) => {
  const { id, images, title, price, original_price } = product;
  const imageSrc = images?.length ? images[0].src : imageNoPhoto;

  if (!typeProduct) {
    return (
      <div className={styles.card}>
        <picture>
          <img src={images[0].src} alt={images[0].alt} />
        </picture>

        <div className={styles.summary}>
          <h2 className={styles.name}>{title}</h2>
        </div>
      </div>
    );
  }

  return (
    <Link className={styles.card} to={`/producto/${id}`}>
      <picture>
        <img src={imageSrc} alt={images[0].alt} />
      </picture>

      <div className={styles.summary}>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.price}>
          <span className="current">S/ {price.toFixed(2)}</span>
          {original_price && <del>S/ {original_price.toFixed(2)}</del>}
        </p>
      </div>

      {/* {typeProduct && <button className="btn">AGREGAR A CARRITO</button>} */}
    </Link>
  );
};

export default ProductCard;
