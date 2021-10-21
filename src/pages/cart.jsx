import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';

import Layout from './_layout';
import ProductCart from '../components/ProductCart/ProductCart';
import OrderSummary from '../components/OrderSummary/OrderSummary';

const CartPage = () => {
  const { cart, removeProduct, getQuantityProducts, getTotalPriceProducts } =
    useCartContext();

  const quantity = getQuantityProducts();
  const messageQuantity = quantity > 1 ? 'Productos' : 'Producto';

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
              <Link className="btn btn-w-auto" to="/checkout/payment">
                Total: S/ {getTotalPriceProducts()} | PAGAR
              </Link>
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
