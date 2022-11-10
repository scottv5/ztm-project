import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const found = cartItems.find(item => item.id === productToAdd.id);
  if (found) {
    return cartItems.map(obj => {
      if (obj.id === found.id) return { ...obj, quanity: obj.quanity++ };
      return obj;
    });
  }
  return [...cartItems, { ...productToAdd, quanity: 1 }];
};

const decrementCartItem = (cartItems, productToRemove) => {
  const found = cartItems.find(item => item.id === productToRemove.id);
  if (found.quanity > 1) {
    return cartItems.map(item => {
      if (item.id === found.id) return { ...item, quanity: item.quanity-- };
      return item;
    });
  }
  return cartItems.map(item => {
    if (item.id === found.id) return { ...item, quanity: 1 };
    return item;
  });
};

const removeCartItem = (cartItems, productToRemove) => {
  const found = cartItems.find(item => item.id === productToRemove.id);
  return cartItems.filter(item => item.id !== found.id);
};

export const CartContext = createContext({
  productsInCart: [],
  setProductsToCart: () => null,
  isOpen: false,
  setIsOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsToCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addProductToCart = productToAdd => {
    setProductsToCart(() => addCartItem(productsInCart, productToAdd));
  };

  const removeProductFromCart = productToRemove => {
    setProductsToCart(() => removeCartItem(productsInCart, productToRemove));
  };

  const decretmentQuanity = productToRemove => {
    setProductsToCart(() => decrementCartItem(productsInCart, productToRemove));
  };

  const value = {
    productsInCart,
    addProductToCart,
    removeProductFromCart,
    decretmentQuanity,
    isOpen,
    setIsOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
