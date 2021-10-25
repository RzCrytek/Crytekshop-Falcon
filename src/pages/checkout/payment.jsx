import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useCartContext } from '../../context/CartContext';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  increment,
  updateDoc,
} from '@firebase/firestore';
import db from '../../firebase/firebaseConfig';

import Layout from './_layout';
import Sidebar from '../../components/pages/Payment/Sidebar';
import Form from '../../components/pages/Payment/Form';

const initialForm = {
  method_payment: '',
  email: '',
  name: '',
  last_name: '',
  address: '',
  phone: '',
};

const PaymentPage = () => {
  const history = useHistory();

  const { cart, clearCart, getQuantityProducts, getTotalPriceProducts } =
    useCartContext();

  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = async (e) => {
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

    console.log('asyncRes:', asyncRes);

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
      method_payment: formData.method_payment,
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      },
      items: [...cart],
      fecha: new Date(),
      quantity: getQuantityProducts(),
      total: getTotalPriceProducts(),
    };

    console.log(newOrder);

    const docRef = await addDoc(collection(db, 'orders'), newOrder);
    console.log('docRef:', docRef);

    cart.map(async (product) => {
      const documentRef = doc(db, 'products', product.id);
      await updateDoc(documentRef, {
        stock: increment(-product.quantity),
      });
    });

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

        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <form onSubmit={handleSubmit}>
          <Form initialForm={initialForm} setFormData={setFormData} />
        </form>
      </Layout.Information>

      <Layout.Sidebar>
        <Sidebar />
      </Layout.Sidebar>
    </Layout>
  );
};

export default PaymentPage;
