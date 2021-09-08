import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

import './Header.scss';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <a href="/">
          <img src="img/logo.svg" alt="Logo" />
        </a>

        <nav className="nav">
          <ul className="menu">
            <li>
              <a href="#!">Nosotros</a>
            </li>
            <li>
              <a href="#!">Faq</a>
            </li>
            <li>
              <a href="#!">Contacto</a>
            </li>
          </ul>

          <div className="options">
            <CartWidget />
            <a className="btn" href="#!">
              PRODUCTOS
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
