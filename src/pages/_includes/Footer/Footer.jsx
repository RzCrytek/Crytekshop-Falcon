import React from 'react';

import './Footer.scss';

import icoDelivery from '../../../images/icons/delivery.svg';
import icoSend from '../../../images/icons/truck.svg';
import icoLock from '../../../images/icons/lock.svg';
import icoFree from '../../../images/icons/free.svg';

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="shipping">
        <div className="container">
          <div className="item">
            <picture className="icon">
              <img src={icoSend} alt="Envío" />
            </picture>

            <p className="text">ENVÍOS A NIVEL NACIONAL</p>
          </div>

          <div className="item">
            <picture className="icon">
              <img src={icoLock} alt="Seguro" />
            </picture>

            <p className="text">COMPRA FÁCIL Y SEGURO</p>
          </div>

          <div className="item">
            <picture className="icon">
              <img src={icoDelivery} alt="Delivery" />
            </picture>

            <p className="text">ENTREGA SEGURA</p>
          </div>

          <div className="item">
            <picture className="icon">
              <img src={icoFree} alt="Gratis" />
            </picture>

            <p className="text">ENVÍO GRATIS</p>
          </div>
        </div>
      </div>

      <div className="reserved">
        <div className="container">
          <p>CrytekSkp © Todos los derechos reservados {getYear} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
