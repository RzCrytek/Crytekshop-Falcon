import React, { useContext, useState } from 'react';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartWidgetAnimate, setCartWidgetAnimate] = useState(false);

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
  };

  const getQuantityProducts = () => {
    const quantity = cart.reduce((acumulado, el) => acumulado + el.quantity, 0);
    return quantity;
  };

  const getTotalPriceProducts = () => {
    const totalPrice = cart
      .reduce((acc, el) => acc + (el.prices[0].price + 10) * el.quantity, 0)
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

  // const cartWidgetRef = useRef();

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
