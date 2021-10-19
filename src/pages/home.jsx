import React from 'react';

import Layout from './_layout';
import { Banner, RangeCollections } from '../components/pages/Home';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout pageId="home">
      <section id="announcements">
        <h3>ENVÍO GRATIS</h3>
      </section>

      <Banner />

      <section id="choose">
        <div className="container">
          <div className="item">
            <div className="data">
              <h2>COLECCIONABLES EXCLUSIVOS</h2>
              <Link class="btn btn--white btn-w-auto" to="/exclusivos">
                Comprar
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="data">
              <h2>TODOS LOS EVENTOS DE MARVEL</h2>
              <Link class="btn btn--white btn-w-auto" to="/eventos">
                Ver los eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RangeCollections />
    </Layout>
  );
};

export default HomePage;
