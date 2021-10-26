import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import {
  addDoc,
  collection,
  doc,
  getDoc,
  increment,
  updateDoc,
} from '@firebase/firestore';
import db from '../../firebase/firebaseConfig';

import { useCartContext } from '../../context/CartContext';

import Layout from './_layout';
import { Form, Sidebar } from '../../components/pages/Payment';

const PaymentPage = () => {
  const history = useHistory();

  const { cart, clearCart, getQuantityProducts, getTotalPriceProducts } =
    useCartContext();

  const handleSubmit = async (e, form) => {
    e.preventDefault();

    const asyncFilter = async (cart, predicate) => {
      const results = await Promise.all(cart.map(predicate));
      return cart.filter((_v, index) => results[index]);
    };

    const asyncRes = await asyncFilter(cart, async (product) => {
      const document = await getDoc(doc(db, 'products', product.id));
      const stockInBd = document.data().stock;
      return product.quantity > stockInBd;
    });

    if (asyncRes.length) {
      asyncRes.map((product, index) =>
        toast.warn(
          `¡El artículo ${product.title} no cuenta con la cantidad seleccionada!`,
          { delay: 1000 * (index + 1) }
        )
      );
      return;
    }

    const newOrder = {
      method_payment: form.method_payment,
      buyer: {
        name: form.name,
        phone: form.phone,
        email: form.email,
      },
      items: [...cart],
      fecha: new Date(),
      quantity: getQuantityProducts(),
      total: getTotalPriceProducts(),
    };

    const docRef = await addDoc(collection(db, 'orders'), newOrder);

    cart.map(async (product) => {
      const documentRef = doc(db, 'products', product.id);
      await updateDoc(documentRef, {
        stock: increment(-product.quantity),
      });
    });

    toast.success(`¡Compra realizada!`);

    history.push('/checkout/order/' + docRef.id);
    clearCart();
  };

  return (
    <Layout pageId="payment">
      <Layout.Information>
        <nav className="breadcrumb">
          <ol>
            <li>
              <Link to="/cart">Cart</Link>
              <span>{'>'}</span>
            </li>
            <li className="active">Payment </li>
          </ol>
        </nav>

        <Form handleSubmit={handleSubmit} />
      </Layout.Information>

      <Layout.Sidebar>
        <Sidebar />
      </Layout.Sidebar>
    </Layout>
  );
};

export default PaymentPage;
