import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Layout from './_layout';

import imageNoPhoto from '../images/no-photo.png';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <Layout pageId="not-found">
      <div className="container">
        <h1>no se encontró la página</h1>
        <img src={imageNoPhoto} alt="No hay imagen" />

        <div className="buttons">
          <button className="btn" onClick={() => history.goBack()}>
            Volver a la vista anterior
          </button>

          <Link className="btn btn--back" to="/">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
