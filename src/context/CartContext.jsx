import React, { useContext, useState } from 'react';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, quantity) => {
    const newProduct = { ...product, quantity };

    // TODO: Find vs some: some devuelve true/false, find: el objeto. En performance, find es un poco más rápido
    const productInCart = cart.some((p) => p.id === newProduct.id);

    if (productInCart) {
      const newCart = cart.map((item) =>
        item.id === newProduct.id
          ? { ...item, quantity: item.quantity + newProduct.quantity }
          : item
      );

      return setCart([...newCart]);
    }

    setCart([...cart, newProduct]);
  };

  const removeProduct = () => {};

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = () => {};

  const getQuantity = () => {
    console.log('getQuantity cart:', cart);
    const quantity = cart.reduce((acumulado, el) => acumulado + el.quantity, 0);
    return quantity;
  };

  const value = { addProduct, removeProduct, clearCart, isInCart, getQuantity };

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
