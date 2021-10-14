import React from 'react';
import { Link } from 'react-router-dom';

import './OrderSummary.scss';

const OrderSummary = ({ quantity, totalPriceProducts, SummaryReadOnly }) => {
  console.log('SummaryReadOnly:', SummaryReadOnly);
  return (
    <div className="order-summary">
      <div className="summary-row subtotal">
        <p className="text">
          Subtotal<span> ({quantity})</span>
        </p>
        <p className="price">
          <strong>S/ {totalPriceProducts}</strong>
        </p>
      </div>

      <div className="summary-row">
        <p className="text">Envío</p>
        <p className="price">
          <strong>GRATIS</strong>
        </p>
      </div>

      <div className="summary-row coupon">
        <div className="coupon-code">
          <p className="text">Cupón de descuento</p>
          <p className="price">
            <strong>S/ 0.00</strong>
          </p>
        </div>

        {!SummaryReadOnly && (
          <div className="apply-discount">
            <input
              className="form-control"
              type="text"
              placeholder="Ingresa un código"
            />
            <button className="btn btn--stroke">APLICAR</button>
          </div>
        )}
      </div>

      <div className="summary-row total-pay">
        <p className="text">TOTAL</p>
        <p className="price">S/ {totalPriceProducts}</p>
      </div>
      {!SummaryReadOnly && (
        <>
          <br />
          <Link className="btn btn--primary" to="/checkout/payment">
            PROCESAR COMPRA
          </Link>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
