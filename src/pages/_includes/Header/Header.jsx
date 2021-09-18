import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

import CartWidget from '../../../components/CartWidget/CartWidget';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <Link to="/">
          <img src="/img/logo.svg" alt="Logo" />
        </Link>

        <nav className="nav">
          <ul className="menu">
            <li>
              <NavLink to="/nosotros" activeClassName="active">
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/preguntas-frecuentes">Faq</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>

          <div className="options">
            <CartWidget />
            <Link className="btn btn--stroke" to="/productos">
              PRODUCTOS
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
