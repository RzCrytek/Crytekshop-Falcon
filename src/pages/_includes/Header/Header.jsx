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
              <NavLink to="/personajes" activeClassName="active">
                Personajes
              </NavLink>
            </li>
            <li>
              <NavLink to="/series">Series</NavLink>
            </li>
            <li>
              <NavLink to="/events">Eventos</NavLink>
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
