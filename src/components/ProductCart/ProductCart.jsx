import React from 'react';

import ItemCount from '../ItemCount/ItemCount';

import styles from './ProductCart.module.scss';
import imageNoPhoto from '../../images/no-photo.png';

const ProductCart = ({ product, removeProduct, ProductCartReadOnly }) => {
  const {
    images,
    brand,
    title,
    stock,
    sku,
    quantity,
    original_price,
    price,
    id,
  } = product;

  const imageSrc = images?.length ? images[0].src : imageNoPhoto;

  const classReadOnly = ProductCartReadOnly ? `${styles.read_only}` : '';

  return (
    <div className={`${styles.product_cart} ${classReadOnly}`}>
      <picture>
        <img src={imageSrc} alt={product.images[0].alt} />

        {ProductCartReadOnly && (
          <span className={styles.thumbnail_quantity}>{quantity}</span>
        )}
      </picture>

      <div className={styles.information}>
        <div className={styles.info_description}>
          <div className={styles.info_name}>
            <h5>
              <strong>{brand}</strong>
            </h5>
            <h4>{title}</h4>
            <p>SKU: {sku}</p>
            {/* <p>Cantidad: {quantity}</p> */}
          </div>

          <div className={styles.info_prices}>
            {original_price && <del>S/ {original_price.toFixed(2)}</del>}
            <h5>S/ {price.toFixed(2)}</h5>
          </div>
        </div>

        {!ProductCartReadOnly && (
          <div className={styles.actions}>
            <ItemCount stock={stock} quantity={quantity} productId={id} />
            <button
              className={styles.delete_product}
              type="button"
              onClick={() => removeProduct(id)}
            >
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
