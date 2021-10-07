import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import styles from './ProductCart.module.scss';

const ProductCart = ({ product, removeProduct }) => {
  return (
    <div className={styles.product_cart}>
      <picture>
        <img
          src="http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb.jpg"
          alt="Marvel"
        />
      </picture>

      <div className={styles.information}>
        <div className={styles.info_description}>
          <div className={styles.info_name}>
            <h5>
              <strong>{product.format}</strong>
            </h5>
            <h4>{product.title}</h4>
            <p className={styles.sku}>SKU: {product.sku}</p>
            <p className={styles.sku}>Cantidad: {product.quantity}</p>
          </div>

          <div className={styles.info_prices}>
            {product.original_price && (
              <del>S/. {product.price.toFixed(2)}</del>
            )}
            <h5>S/. {product.price.toFixed(2)}</h5>
          </div>
        </div>

        <div className={styles.actions}>
          <ItemCount
            stock={10}
            quantity={product.quantity}
            productId={product.id}
          />
          <button
            className={styles.delete_product}
            type="button"
            onClick={() => removeProduct(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
