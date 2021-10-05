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
            <p className={styles.sku}>SKU: {product.upc}</p>
            <p className={styles.sku}>Cantidad: {product.quantity}</p>
          </div>

          <div className={styles.info_prices}>
            {!(product.prices[0].price === 0) && (
              <del>S/. {(product.prices[0].price + 15).toFixed(2)}</del>
            )}
            <h5>S/. {(product.prices[0].price + 10).toFixed(2)}</h5>
          </div>
        </div>

        <div className={styles.actions}>
          {/* <ItemCount stock={10} initial={1} /> */}
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
