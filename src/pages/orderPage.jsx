import React from 'react';
import { useParams, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import useGetDoc from '../hooks/useGetDoc';

import Loader from '../components/Loader/Loader';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import ProductCart from '../components/ProductCart/ProductCart';

import imageConfirmed from './../images/icons/confirmed.svg';
import imageLogo from '../images/logo.svg';

const OrderPage = () => {
  const { id } = useParams();

  const {
    document: order,
    loader,
    isDocument: isOrder,
  } = useGetDoc('orders', id);

  if (loader) return <Loader />;

  if (!isOrder) return <Redirect to="/404" />;

  return (
    <main className="main" id="order">
      <div className="banner">
        <picture>
          <img src={imageLogo} alt="Logo" />
        </picture>
      </div>

      <div className="container">
        <section className="information">
          <h1>demo</h1>
        </section>

        <aside className="summary-sidebar">
          <div className="sidebar-content">
            <div className="ordered-products">
              {order.items.map((product) => {
                console.log('product: ', product);
                return (
                  <ProductCart
                    product={product}
                    key={product.id}
                    ProductCartReadOnly
                  />
                );
              })}
            </div>

            <OrderSummary
              quantity={order.quantity}
              totalPriceProducts={order.total}
              SummaryReadOnly
            />
          </div>
        </aside>

        {/* <picture>
          <img
            src={imageConfirmed}
            alt="Imagen de pago confirmado"
            width="100px"
          />
        </picture>

        <h1>ORDER CONFIRMADA</h1>

        <p>Muchas gracias por comprar en CrytekShop</p>

        <div className="box-purchase-order">
          <p className="text">Su orden de compra es:</p>
          <h2 className="number-order">
            <strong className="semiBold">{order.id}</strong>
          </h2>
        </div>

        <p>
          Recuerda que te estaremos informando por whatsapp <br /> cuando tu
          pedido este camino a tu casa.
        </p>

        <Link className="btn btn-w-auto" to="/productos">
          Seguir comprando
        </Link> */}
      </div>
    </main>
  );
};

export default OrderPage;
