import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import HomePage from './pages/home';
import CharactersPage from './pages/characters';
import SeriesPage from './pages/series';
import EventsPage from './pages/events';
import ProductsPage from './pages/products';
import ProductDetailPage from './pages/productDetail';
import CartPage from './pages/cart';
import NotFoundPage from './pages/notFound';
// import { Footer, Header } from './pages/_includes';
// import Layout from './pages/_layout';

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          {/* <Route exact path="/">
          <Redirect to="productos" />
        </Route> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/personajes" component={CharactersPage} />
          <Route exact path="/series" component={SeriesPage} />
          <Route exact path="/series/:year" component={SeriesPage} />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/productos" component={ProductsPage} />
          <Route path="/producto/:id" component={ProductDetailPage} />
          <Route exact path="/cart" component={CartPage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
