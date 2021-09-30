import React, { useContext, useState } from 'react';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, quantity) => {
    const newProduct = { ...product, quantity };

    // TODO: Find vs some: some devuelve true/false, find: el objeto. En performance, find es un poco más rápido

    const isSame = cart.some((p) => p.id === newProduct.id);
    console.log('some', isSame);

    if (isSame) {
      const newCart = cart.map((item) => {
        console.log('item:', item);
        if (item.id === newProduct.id) {
          return { ...item, quantity: item.quantity + newProduct.quantity };
        } else {
          return item;
        }
      });

      return setCart([...newCart]);
    }

    setCart([...cart, newProduct]);

    // if (some) {
    //   console.log('some:', some);
    //   cart.map((p) => {
    //     console.log('p:', p);
    //     if (p.id == newProduct.id) {
    //       console.log('cart cant:', p.quantity);
    //       console.log('new cant:', newProduct.quantity);
    //       p.quantity += newProduct.quantity;
    //     }
    //   });

    //   console.log('updateProduct:', cart);
    //   console.log('some:', cart);
    //   // setCart([...cart, (quantity = 5)]);
    //   return;
    // } else {
    //   setCart([...cart, newProduct]);
    // }
  };

  const removeProduct = () => {};

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = () => {};

  const getQuantity = () => {
    console.log('getQuantity cart:', cart);
    let quantity = 0;
    // cart.forEach((product) => {
    //   // console.log('product:', product);
    //   quantity += product.quantity;
    // });

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
