import React from 'react';
import { useParams, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import useGetDoc from '../../hooks/useGetDoc';

import { Loader, OrderSummary, ProductCart } from '../../components';

import imageLogo from '../../images/logo.svg';
import imageConfirmedOutline from '../../images/icons/confirmed-outline.svg';

const OrderPage = () => {
  const { id } = useParams();

  const {
    document: order,
    loader,
    isDocument: isOrder,
  } = useGetDoc('orders', id);

  const { buyer, items } = order;

  if (loader) return <Loader />;

  if (!isOrder) return <Redirect to="/404" />;

  return (
    <main className="lyt-checkout" id="order">
      <div className="banner">
        <Link to="/">
          <picture>
            <img src={imageLogo} alt="Logo" />
          </picture>
        </Link>
      </div>

      <div className="container">
        <section className="information">
          <div className="information-content">
            <div className="header">
              <picture>
                <img
                  src={imageConfirmedOutline}
                  alt="Imagen de orden confirmada"
                  width="50"
                />
              </picture>
              <div>
                <h2>¡Gracias {buyer.name}!</h2>
                <p style={{ fontSize: '12px' }}>Orden: {order.id}</p>
              </div>
            </div>

            <div className="content-data-box">
              <h3>Tu pedido está confirmado</h3>
              <p>
                recibirás un correo electrónico y un mensaje de texto cuando tu
                pedido esté listo
              </p>
            </div>

            <div className="content-data-box">
              <h3>Tu número de orden</h3>
              <code>{order.id}</code>
            </div>

            <div className="content-data-box">
              <h3>Método de pago al recibir el producto</h3>
              <p>{order.method_payment}</p>
            </div>

            <div className="content-data-box">
              <h3>Información del cliente</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Correo</strong>
                      </p>

                      <p>{buyer.email}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>
                        <strong>Nombre</strong>
                      </p>

                      <p>{buyer.name}</p>
                    </td>

                    <td>
                      <p>
                        <strong>Apellido</strong>
                      </p>

                      <p>{buyer.last_name}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>
                        <strong>Dirección</strong>
                      </p>

                      <p>{buyer.address}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>
                        <strong>Celular</strong>
                      </p>

                      <p>{buyer.phone}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link className="btn btn--green" to="/productos">
              Seguir comprando
            </Link>
          </div>
        </section>

        <aside className="summary-sidebar">
          <div className="sidebar-content">
            <div className="ordered-products">
              {items.map((product) => (
                <ProductCart
                  product={product}
                  key={product.id}
                  ProductCartReadOnly
                />
              ))}
            </div>

            <div className="order-summary">
              <OrderSummary
                quantity={order.quantity}
                totalPriceProducts={order.total}
                SummaryReadOnly
              />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default OrderPage;
