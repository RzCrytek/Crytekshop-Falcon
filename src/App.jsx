import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import AboutUsPage from './pages/about-us';
import FaqPage from './pages/faq';
import ContactPage from './pages/contact';
import ProductsPage from './pages/products';
import ProductDetailPage from './pages/productDetail';
import NotFound from './pages/notFound';
// import { Footer, Header } from './pages/_includes';
// import Layout from './pages/_layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/nosotros" component={AboutUsPage} />
        <Route exact path="/preguntas-frecuentes" component={FaqPage} />
        <Route exact path="/Contacto" component={ContactPage} />
        <Route exact path="/productos" component={ProductsPage} />
        <Route path="/producto/:id" component={ProductDetailPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
