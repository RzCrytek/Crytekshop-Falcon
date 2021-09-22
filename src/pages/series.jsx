import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import Layout from './_layout';
import { ProductListContainer } from '../components';

const SeriesPage = () => {
  const { year } = useParams();

  return (
    <Layout pageId="product">
      <div className="container">
        <div className="options">
          <h2>LISTA DE SERIES</h2>
        </div>

        <nav>
          <ul className="nav-category">
            <li>
              <NavLink exact className="btn btn--stroke" to="/series">
                Todas
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn--stroke" to="/series/2009">
                Año 2009
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn--stroke" to="/series/2019">
                Año 2019
              </NavLink>
            </li>
            <li>
              <NavLink className="btn btn--stroke" to="/series/2020">
                Año 2020
              </NavLink>
            </li>
          </ul>
        </nav>

        <ProductListContainer url="/series" year={year} />
      </div>
    </Layout>
  );
};

export default SeriesPage;
