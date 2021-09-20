import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';

const ProductCard = ({ comic, withBuyButton }) => {
  // console.log('comic', comic);
  // console.log('comic', comic.format);
  // console.log('comic', comic.prices.length);

  console.log('withBuyButton:', withBuyButton);

  const pathImage = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const image = comic.images.length ? pathImage : '/img/no-photo.png';

  // console.log('image: ', image);

  return (
    <Link className={styles.card} to={`/producto/${comic.id}`}>
      <picture>
        <img src={image} alt={comic.title} />
      </picture>

      <div className={styles.summary}>
        <h2 className={styles.name}>{comic.title}</h2>
        <p className={styles.price}>
          <span className="current">
            S/. {(comic.prices[0].price + 10).toFixed(2)}
          </span>
          {!(comic.prices[0].price === 0) && (
            <del>S/. {(comic.prices[0].price + 15).toFixed(2)}</del>
          )}
        </p>
      </div>

      {withBuyButton && <button className="btn">AGREGAR A CARRITO</button>}
    </Link>
  );
};

export default ProductCard;
