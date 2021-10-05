import React from 'react';

import { useCartContext } from '../context/CartContext';

import Layout from './_layout';
import ProductCart from '../components/ProductCart/ProductCart';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeProduct, getQuantityProducts, getTotalPriceProducts } =
    useCartContext();

  const quantity = getQuantityProducts();
  const messageQuantity = quantity > 1 ? 'Productos' : 'Producto';

  console.log('cart page:', cart);

  return (
    <Layout pageId="cart">
      <div className="container cart-container">
        <div className="order-details">
          <h2>
            {cart.length ? 'CARRITO DE COMPRAS' : 'CARRITO VACÍO'}{' '}
            {cart.length > 0 && (
              <span> - {`${quantity} ${messageQuantity}`}</span>
            )}
          </h2>

          {cart.length ? (
            <div className="product-cart-box">
              {cart.map((product) => (
                <ProductCart
                  key={product.id}
                  product={product}
                  removeProduct={removeProduct}
                />
              ))}
            </div>
          ) : (
            <div className="empty-cart">
              <p>Agrega productos al carrito para poder comprar</p>
              <Link className="btn" to="/productos">
                Seguir comprando
              </Link>
            </div>
          )}

          {cart.length > 0 && (
            <div className="buttons">
              <button className="btn btn-w-auto" type="button">
                TOTAL: S/.{getTotalPriceProducts()} | Siguiente
              </button>
            </div>
          )}
        </div>

        <div className="order-summary">
          <div className="summary-content">
            <h2>RESUMEN DE TU PEDIDO</h2>
            <div className="summary">
              <div className="summary-row">
                <p className="text">Subtotal ({quantity})</p>
                <p className="price">S/.{getTotalPriceProducts()}</p>
              </div>

              <div className="summary-row">
                <p className="text">Envío</p>
                <p className="price">GRATIS</p>
              </div>

              <div className="coupon-code">
                <div className="summary-row">
                  <p className="text">Cupón de descuento</p>
                  <p className="price">S/.0.00</p>
                </div>

                <div className="apply-discount">
                  <input className="form-control" type="text" />
                  <button className="btn btn--primary">APLICAR</button>
                </div>
              </div>

              <hr />

              <div className="summary-row">
                <p className="text">
                  <strong>TOTAL</strong>
                </p>
                <p className="price">
                  <strong>S/.{getTotalPriceProducts()}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
