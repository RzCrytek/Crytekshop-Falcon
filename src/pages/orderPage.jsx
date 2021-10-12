import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { doc, getDoc } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

import imageConfirmed from './../images/icons/confirmed.svg';

const OrderPage = () => {
  const { id } = useParams();
  const [isOrder, setIsOrder] = useState(true);
  const [loader, setLoader] = useState(true);
  const [order, setOrder] = useState([]);

  console.log('ciclo beforeUseEffect');

  useEffect(() => {
    console.log('ciclo UseEffect before');

    const getOrder = async () => {
      const docSnap = await getDoc(doc(db, 'orders', id));
      console.log('docSnap firebase:', docSnap);

      setLoader(false);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setOrder({ id: docSnap.id, ...docSnap.data() });
      } else {
        setIsOrder(false);
        console.log('No existe el documento y/o producto');
      }
    };

    getOrder();
  }, [id]);

  console.log('ciclo afterUseEffect');
  console.log('order:', order);
  console.log('order length:', order.length);

  if (loader) return '';

  if (!isOrder) return <Redirect to="/404" />;

  return (
    console.log('ciclo render'),
    (
      <main className="main" id="order">
        <div className="container">
          <picture>
            <img src={imageConfirmed} alt="Imagen de pago confirmado" />
          </picture>

          <h1>Order confirmada</h1>

          <p>Muchas gracias por comprar en CrytekShop</p>

          <div className="box-purchase-order">
            <p className="text">Su orden de compra es:</p>
            <h2 className="number-order">
              <strong className="semiBold">
                {loader ? 'cargando orden...' : order.id}
              </strong>
            </h2>
          </div>

          <p>
            Recuerda que te estaremos informando por whatsapp <br /> cuando tu
            pedido este camino a tu casa.
          </p>

          <Link className="btn btn-w-auto" to="/productos">
            Seguir comprando
          </Link>
        </div>
      </main>
    )
  );
};

export default OrderPage;
