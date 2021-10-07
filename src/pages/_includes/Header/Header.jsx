import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useCartContext } from '../../../context/CartContext';

import './Header.scss';
import imageLogo from '../../../images/logo.svg';

import CartWidget from '../../../components/CartWidget/CartWidget';

const Header = () => {
  const { getQuantityProducts } = useCartContext();

  return (
    <header id="header">
      <div className="container">
        <Link to="/">
          <img src={imageLogo} alt="Logo" />
        </Link>

        <nav className="nav">
          {/* <ul className="menu">
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
          </ul> */}

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
