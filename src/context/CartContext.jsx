import React, { useContext, useState } from 'react';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, quantity) => {
    const newProduct = { ...product, quantity };

    const some = cart.some((p) => p.id === newProduct.id);

    if (some) {
      alert('este artículo ya está agregado');
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const removeProduct = () => {};

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = () => {};

  const getQuantity = () => {
    console.log('getQuantity cart:', cart);
    let quantity = 0;
    cart.forEach((product) => {
      // console.log('product:', product);
      quantity += product.quantity;
    });

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
