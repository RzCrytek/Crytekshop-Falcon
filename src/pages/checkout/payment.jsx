import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../context/CartContext';

import Layout from './_layout';
import ProductCart from '../../components/ProductCart/ProductCart';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const initialForm = {
  method_payment: '',
  email: '',
  name: '',
  last_name: '',
  address: '',
  phone: null,
};

const PaymentPage = () => {
  const { cart, getQuantityProducts, getTotalPriceProducts } = useCartContext();

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e);
    console.log('form: ', form);
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
        <form action="">
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

          <button
            className="btn btn-w-auto"
            type="submit"
            onClick={handleSubmit}
          >
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
