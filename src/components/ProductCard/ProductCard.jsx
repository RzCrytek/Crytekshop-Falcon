import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import imageNoPhoto from '../../images/no-photo.png';

const ProductCard = ({ product }) => {
  const { id, images, title, price, original_price, stock } = product;

  const link = stock > 0 ? `/producto/${id}` : '#!';
  const imageSrc = images?.length ? images[0].src : imageNoPhoto;
  const classStock = stock < 1 ? styles.out_stock : '';

  return (
    <Link className={`${styles.card} ${classStock}`} to={link}>
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
    </Link>
  );
};

export default ProductCard;
