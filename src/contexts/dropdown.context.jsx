import { createContext, useReducer } from "react";
//useState
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const found = cartItems.find(item => item.id === productToAdd.id);
  if (found) {
    return cartItems.map(obj => {
      if (obj.id === found.id) {
        const quanity = obj.quanity + 1;
        return { ...obj, quanity };
      }
      return obj;
    });
  }
  return [...cartItems, { ...productToAdd, quanity: 1 }];
};

const decrementCartItem = (cartItems, productToRemove) => {
  const found = cartItems.find(item => item.id === productToRemove.id);
  if (found.quanity > 1) {
    return cartItems.map(item => {
      if (item.id === found.id) {
        const quanity = item.quanity - 1;
        return { ...item, quanity };
      }
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

export const CART_ACTION_TYPES = {
  setProductsToCart: "SET_PRODUCTS_TO_CART",
  isCartOpenToggle: "TOGGLE_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.setProductsToCart:
      return { ...state, productsInCart: payload };
    case CART_ACTION_TYPES.isCartOpenToggle:
      return { ...state, isOpen: payload };
    default:
      throw new Error(`unhandled type ${type} in cart reducer`);
  }
};

const INITIAL_STATE = {
  productsInCart: [],
  isOpen: false,
};

export const CartProvider = ({ children }) => {
  //const [productsInCart, setProductsToCart] = useState([]);
  //const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { productsInCart, isOpen } = state;

  const addProductToCart = productToAdd => {
    const newProducts = addCartItem(state.productsInCart, productToAdd);
    dispatch(createAction(CART_ACTION_TYPES.setProductsToCart, newProducts));
  };

  const decretmentQuanity = productToDecrement => {
    const newProducts = decrementCartItem(
      state.productsInCart,
      productToDecrement
    );
    dispatch(createAction(CART_ACTION_TYPES.setProductsToCart, newProducts));
  };

  const removeProductFromCart = productToRemove => {
    const newProducts = removeCartItem(state.productsInCart, productToRemove);
    dispatch(createAction(CART_ACTION_TYPES.setProductsToCart, newProducts));
  };
  const setIsOpen = () => {
    const toggled = !state.isOpen;
    dispatch(createAction(CART_ACTION_TYPES.isCartOpenToggle, toggled));
  };

  // const addProductToCart = productToAdd => {
  //   setProductsToCart(() => addCartItem(productsInCart, productToAdd));
  // };

  // const removeProductFromCart = productToRemove => {
  //   setProductsToCart(() => removeCartItem(productsInCart, productToRemove));
  // };

  // const decretmentQuanity = productToRemove => {
  //   setProductsToCart(() => decrementCartItem(productsInCart, productToRemove));
  // };

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
