import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';

import Layout from './_layout';
import ProductCart from '../components/ProductCart/ProductCart';
import { addDoc, collection } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

const CartPage = () => {
  const { cart, removeProduct, getQuantityProducts, getTotalPriceProducts } =
    useCartContext();

  const history = useHistory();

  const quantity = getQuantityProducts();
  const messageQuantity = quantity > 1 ? 'Productos' : 'Producto';

  const handleCheckout = async () => {
    const newOrder = {
      buyer: {
        name: 'Ivan',
        phone: '+51986140325',
        email: 'rz.crytek@gmail.com',
      },
      items: [...cart],
      fecha: new Date(),
      total: getTotalPriceProducts(),
    };

    console.log(newOrder);

    const docRef = await addDoc(collection(db, 'orders'), newOrder);
    console.log('Document written with ID: ', docRef);
    console.log('Document written with ID: ', docRef.id);

    history.push('/order/' + docRef.id);
  };

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
              <button
                className="btn btn-w-auto"
                type="button"
                onClick={handleCheckout}
              >
                TOTAL: S/ {getTotalPriceProducts()} | Finalizar compra
              </button>
            </div>
          )}
        </div>

        <div className="order-summary">
          <div className="summary-content">
            <h2>RESUMEN DE TU PEDIDO</h2>
            <div className="summary">
              <div className="summary-row subtotal">
                <p className="text">
                  Subtotal<span> ({quantity})</span>
                </p>
                <p className="price">
                  <strong>S/ {getTotalPriceProducts()}</strong>
                </p>
              </div>

              <div className="summary-row">
                <p className="text">Envío</p>
                <p className="price">
                  <strong>GRATIS</strong>
                </p>
              </div>

              <div className="coupon-code">
                <div className="summary-row">
                  <p className="text">Cupón de descuento</p>
                  <p className="price">
                    <strong>S/ 0.00</strong>
                  </p>
                </div>

                <div className="apply-discount">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa un código"
                  />
                  <button className="btn btn--stroke">APLICAR</button>
                </div>
              </div>

              <hr />

              <div className="summary-row total-pay">
                <p className="text">TOTAL</p>
                <p className="price">S/ {getTotalPriceProducts()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
