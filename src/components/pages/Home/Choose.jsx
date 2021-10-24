import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <section id="choose">
      <div className="container">
        <div className="item">
          <div className="data">
            <h2>COLECCIONABLES EXCLUSIVOS</h2>
            <Link className="btn btn--white" to="/exclusivos">
              Comprar
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="data">
            <h2>TODOS LOS EVENTOS DE MARVEL</h2>
            <Link className="btn btn--white" to="/eventos">
              Ver los eventos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
