import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';

const ProductCard = ({ comic, typeProduct }) => {
  // console.log('comic', comic);
  console.log('comic', comic);
  // console.log('comic', comic.prices.length);

  // const pathImage = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  // const image = comic.images?.length ? pathImage : '/img/no-photo.png';

  if (!typeProduct) {
    return (
      <div className={styles.card}>
        <picture>
          {/* <img src={pathImage || image} alt={comic.name} /> */}
          <img src={comic.images[0]} alt={comic.images[0].alt} />
        </picture>

        <div className={styles.summary}>
          <h2 className={styles.name}>{comic.title || comic.name}</h2>
        </div>
      </div>
    );
  }

  return (
    <Link className={styles.card} to={`/producto/${comic.id}`}>
      <picture>
        <img src={comic.images[0].src} alt={comic.images[0].alt} />
      </picture>

      <div className={styles.summary}>
        <h2 className={styles.name}>{comic.title}</h2>
        <p className={styles.price}>
          <span className="current">S/. {comic.price.toFixed(2)}</span>
          {comic.original_price && (
            <del>S/. {comic.original_price.toFixed(2)}</del>
          )}
        </p>
      </div>

      {/* {typeProduct && <button className="btn">AGREGAR A CARRITO</button>} */}
    </Link>
  );
};

export default ProductCard;
