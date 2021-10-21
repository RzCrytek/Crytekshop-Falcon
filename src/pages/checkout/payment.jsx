import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useCartContext } from '../../context/CartContext';
import { addDoc, collection } from '@firebase/firestore';
import db from '../../firebase/firebaseConfig';

import Layout from './_layout';
import ProductCart from '../../components/ProductCart/ProductCart';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
// import { LsRemoveData } from '../../helpers/localStorage';

const initialForm = {
  method_payment: '',
  email: '',
  name: '',
  last_name: '',
  address: '',
  phone: '',
};

const PaymentPage = () => {
  const { cart, getQuantityProducts, getTotalPriceProducts } = useCartContext();
  const quantity = getQuantityProducts();

  const history = useHistory();

  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(true);

  useEffect(() => {
    if (
      !form.method_payment ||
      !form.email ||
      !form.name ||
      !form.last_name ||
      !form.address ||
      !form.phone
    ) {
      setFormErrors(true);
    } else {
      setFormErrors(false);
    }
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit', e);
    console.log('form: ', form);

    const newOrder = {
      method_payment: form.method_payment,
      buyer: {
        name: form.name,
        phone: form.phone,
        email: form.email,
      },
      items: [...cart],
      fecha: new Date(),
      quantity,
      total: getTotalPriceProducts(),
    };

    console.log(newOrder);

    const docRef = await addDoc(collection(db, 'orders'), newOrder);
    // console.log('Document written with ID: ', docRef);
    // console.log('Document written with ID: ', docRef.id);

    history.push('/checkout/order/' + docRef.id);
    // LsRemoveData('cart');
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

        <pre>{JSON.stringify(form, null, 2)}</pre>
        <form onSubmit={handleSubmit}>
          <h2>Método de pago en su domicilio</h2>

          <div className="form-half auto">
            <div className="form-group">
              <div className="radio-wrapper">
                <input
                  id="cash"
                  type="radio"
                  name="method_payment"
                  value="Efectivo"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="cash">Efectivo</label>
              </div>
            </div>

            <div className="form-group">
              <div className="radio-wrapper">
                <input
                  id="card"
                  type="radio"
                  name="method_payment"
                  value="Tarjeta"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="card">Tarjeta</label>
              </div>
            </div>
          </div>

          <h2>Información del cliente</h2>

          <div className="form-group">
            <div className="field-wrapper">
              <label htmlFor="">Correo</label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-half">
            <div className="form-group">
              <div className="field-wrapper">
                <label htmlFor="">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="field-wrapper">
                <label htmlFor="">Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="field-wrapper">
              <label htmlFor="">Dirección</label>
              <input
                className="form-control"
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="field-wrapper">
              <label htmlFor="">Celular</label>
              <input
                className="form-control"
                type="number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="btn" type="submit" disabled={formErrors}>
            FINALIZAR COMPRA
          </button>
        </form>
      </Layout.Information>

      <Layout.Sidebar>
        <div className="ordered-products">
          {cart.map((product) => {
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
          quantity={getQuantityProducts()}
          totalPriceProducts={getTotalPriceProducts()}
          SummaryReadOnly
        />
      </Layout.Sidebar>
    </Layout>
  );
};

export default PaymentPage;
