import React from 'react';

import Layout from './_layout';
import { ProductListContainer } from '../components';

const CharactersPage = () => {
  return (
    <Layout pageId="product">
      <div className="container">
        <div className="options">
          <h2>LISTA DE PERSONAJES</h2>
        </div>
        <ProductListContainer url="/characters" />
      </div>
    </Layout>
  );
};

export default CharactersPage;
