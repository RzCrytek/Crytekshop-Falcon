import React from 'react';
import { Link } from 'react-router-dom';

import image1 from '../../../images/banner/image-1.png';

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="data">
          <div className="data-content">
            <h1>FIGURAS COLECCIONABLES</h1>

            <p className="description">
              ¡Agrega algo extra a tu colección con Pop!
            </p>

            <Link className="btn btn--white btn-w-auto" to="/productos">
              COMPRAR
            </Link>
          </div>
        </div>

        <picture>
          <img src={image1} alt="Imagen banner" />
        </picture>
      </div>
    </section>
  );
};

export default Banner;
