import React from 'react';

import './Footer.scss';

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <p>CrytekSkp © Todos los derechos reservados {getYear} </p>
      </div>
    </footer>
  );
};

export default Footer;
