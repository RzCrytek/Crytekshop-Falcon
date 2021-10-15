import React from 'react';

import Layout from './_layout';

import banner1 from '../images/banner/1.png';
import image1 from '../images/banner/image-1.png';
import imageOptions from '../images/options.png';

const HomePage = () => {
  return (
    <Layout pageId="home">
      <section id="announcements">
        <h2>ENVÍO GRATIS</h2>
      </section>

      <section id="banner">
        <div className="container">
          <div className="data">
            <h1>demo</h1>
          </div>

          <picture>
            <img src={image1} alt="Imagen banner" />
          </picture>
        </div>
      </section>

      <section id="options">
        <img src={imageOptions} alt="Imagen de opciones" />
      </section>
    </Layout>
  );
};

export default HomePage;
