import React from 'react';

import { useCartContext } from '../context/CartContext';

import Layout from './_layout';
import ProductCart from '../components/ProductCart/ProductCart';
import ItemCount from '../components/ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeProduct, getQuantity } = useCartContext();

  const quantity = getQuantity();
  const messageQuantity = quantity > 1 ? 'Productos' : 'Producto';
  console.log('cart:', cart);

  return (
    <Layout pageId="cart">
      <div className="container cart-container">
        <div className="order-details" style={{ width: '100%' }}>
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
              <hr />
              TOTAL:{' '}
              {cart
                .reduce(
                  (acc, el) => acc + (el.prices[0].price + 10) * el.quantity,
                  0
                )
                .toFixed(2)}
            </div>
          ) : (
            <div className="empty-cart">
              <p>Agrega productos al carrito para poder comprar</p>
              <Link className="btn" to="/productos">
                Seguir comprando
              </Link>
            </div>
          )}
        </div>

        {/* <div className="order-summary">
          <div className="summary-content">
            <h2>RESUMEN DE TU PEDIDO</h2>
            <div className="summary">
              <div className="summary-row">
                <p className="text">Subtotal (2)</p>
                <p className="price">S/.00.00</p>
              </div>

              <div className="summary-row">
                <p className="text">Envío</p>
                <p className="price">S/.00.00</p>
              </div>

              <div className="coupon-code">
                <div className="summary-row">
                  <p className="text">Cupón de descuento</p>
                  <p className="price">S/.00.00</p>
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
                  <strong>S/.00.00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
       */}
      </div>
    </Layout>
  );
};

export default CartPage;
