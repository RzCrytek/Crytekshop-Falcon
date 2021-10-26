import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useCartContext } from '../../../context/CartContext';

import './Header.scss';
import imageLogo from '../../../images/logo.svg';

import { CartWidget } from '../../../components';

const Header = () => {
  const { getQuantityProducts } = useCartContext();

  return (
    <header id="header">
      <div className="container">
        <Link to="/">
          <img src={imageLogo} alt="Logo" />
        </Link>

        <nav className="nav">
          <ul className="menu">
            <li>
              <NavLink to="/eventos">eventos</NavLink>
            </li>

            <li>
              <NavLink to="/exclusivos" activeClassName="active">
                exclusivos
              </NavLink>
            </li>
          </ul>

          <div className="options">
            {getQuantityProducts() > 0 && (
              <Link to="/cart">
                <CartWidget />
              </Link>
            )}

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
