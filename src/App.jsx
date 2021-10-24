import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from './context/CartContext';

// import './styles/app.scss';

import HomePage from './pages/home';
import EventsPage from './pages/events';
import ExclusivePage from './pages/exclusive';

import ProductsPage from './pages/products';
import ProductDetailPage from './pages/productDetail';
import CartPage from './pages/cart';
import PaymentPage from './pages/checkout/payment';
import OrderPage from './pages/checkout/orderPage';

import NotFoundPage from './pages/notFound';

// import UploadDataFirestore from './UploadDataFirestore';

function App() {
  return (
    <CartProvider>
      {/* <UploadDataFirestore /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/eventos" component={EventsPage} />
          <Route exact path="/exclusivos" component={ExclusivePage} />
          <Route exact path="/productos" component={ProductsPage} />
          <Route exact path="/productos/:category" component={ProductsPage} />
          <Route path="/producto/:id" component={ProductDetailPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout/payment" component={PaymentPage} />
          <Route exact path="/checkout/order/:id" component={OrderPage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
      <ToastContainer
        theme="light"
        position={toast.POSITION.TOP_RIGHT}
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CartProvider>
  );
}

export default App;
