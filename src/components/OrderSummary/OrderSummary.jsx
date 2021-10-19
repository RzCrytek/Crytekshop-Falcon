import React from 'react';
import { Link } from 'react-router-dom';

import style from './OrderSummary.module.scss';

const OrderSummary = ({ quantity, totalPriceProducts, SummaryReadOnly }) => {
  console.log('SummaryReadOnly:', SummaryReadOnly);
  return (
    <div className={style.order_summary}>
      <div className={`${style.summary_row} ${style.subtotal}`}>
        <p className={style.text}>
          Subtotal<span> ({quantity})</span>
        </p>
        <p className={style.price}>
          <strong>S/ {totalPriceProducts}</strong>
        </p>
      </div>

      <div className={style.summary_row}>
        <p className={style.text}>Envío</p>
        <p className={style.price}>
          <strong>GRATIS</strong>
        </p>
      </div>

      <div className={`${style.summary_row} ${style.coupon}`}>
        <div className={style.coupon_code}>
          <p className={style.text}>Cupón de descuento</p>
          <p className={style.price}>
            <strong>S/ 0.00</strong>
          </p>
        </div>

        {!SummaryReadOnly && (
          <div className={style.apply_discount}>
            <input
              className="form-control"
              type="text"
              placeholder="Ingresa un código"
            />
            <button className="btn btn--stroke">APLICAR</button>
          </div>
        )}
      </div>

      <div className={`${style.summary_row} ${style.total_pay} total-pay`}>
        <p className={style.text}>TOTAL</p>
        <p className={style.price}>S/ {totalPriceProducts}</p>
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
