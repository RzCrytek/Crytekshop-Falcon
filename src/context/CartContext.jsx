import React, { useContext, useEffect, useState } from 'react';
import { LsGetData, LsRemoveData, LsSaveData } from '../helpers/localStorage';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartWidgetAnimate, setCartWidgetAnimate] = useState(false);

  // Local Storage: setting & getting data
  useEffect(() => {
    const cartItemsData = LsGetData('cart');
    if (cartItemsData) setCart(cartItemsData);
  }, []);

  useEffect(() => {
    LsSaveData('cart', cart);
  }, [cart]);

  const validStockInCart = (newProduct) => {
    return cart.some((item) =>
      item.id === newProduct.id
        ? item.quantity + newProduct.quantity > item.stock
        : null
    );
  };

  const addProduct = (product, quantity) => {
    const newProduct = { ...product, quantity };

    const productInCart = cart.some((p) => p.id === newProduct.id);

    if (productInCart) {
      const noStockInCart = validStockInCart(newProduct);
      if (noStockInCart) return noStockInCart;

      const newCart = cart.map((item) =>
        item.id === newProduct.id
          ? { ...item, quantity: item.quantity + newProduct.quantity }
          : item
      );

      return setCart(newCart);
    }

    setCart([...cart, newProduct]);
  };

  const removeProduct = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    return setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    LsRemoveData('cart');
  };

  const getQuantityProducts = () => {
    const quantity = cart.reduce((acumulado, el) => acumulado + el.quantity, 0);
    return quantity;
  };

  const getTotalPriceProducts = () => {
    const totalPrice = cart
      .reduce((acc, el) => acc + el.price * el.quantity, 0)
      .toFixed(2);

    return totalPrice;
  };

  const decreaseProduct = (productId, qtyProduct) => {
    if (qtyProduct > 1) {
      const updateDecreaseQty = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );

      return setCart(updateDecreaseQty);
    }
  };

  const increaseProduct = (productId, qtyProduct, stock) => {
    if (qtyProduct < stock) {
      const updateIncreaseQty = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );

      return setCart(updateIncreaseQty);
    }
  };

  const value = {
    cart,
    cartWidgetAnimate,
    setCartWidgetAnimate,
    addProduct,
    removeProduct,
    clearCart,
    getQuantityProducts,
    getTotalPriceProducts,
    decreaseProduct,
    increaseProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCartContext debe usarse desde adentro de un CartProvider'
    );
  }

  return context;
};
