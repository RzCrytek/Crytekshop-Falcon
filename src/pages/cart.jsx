import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addDoc, collection } from '@firebase/firestore';

import { useCartContext } from '../context/CartContext';
import db from '../firebase/firebaseConfig';

import Layout from './_layout';
import ProductCart from '../components/ProductCart/ProductCart';
import OrderSummary from '../components/OrderSummary/OrderSummary';

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
      quantity,
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
                Total: S/ {getTotalPriceProducts()} | PAGAR
              </button>
            </div>
          )}
        </div>

        <aside className="cart-summary">
          <div className="summary-content">
            <h2>RESUMEN DE TU PEDIDO</h2>
            <OrderSummary
              quantity={quantity}
              totalPriceProducts={getTotalPriceProducts()}
            />
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default CartPage;
