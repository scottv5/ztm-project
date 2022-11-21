import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

///////////////////HELPER FUNCTIONS///////////////////////
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
////////////////////////////////////////////////////////////

export const isCartOpenToggle = currToggleBool => {
  return createAction(CART_ACTION_TYPES.isCartOpenToggle, !currToggleBool);
};

export const addProductToCart = (cartItems, productToAdd) => {
  const newProducts = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.setProductsInCart, newProducts);
};

export const decretmentQuanity = (cartItems, productToDecrement) => {
  const newProducts = decrementCartItem(cartItems, productToDecrement);
  return createAction(CART_ACTION_TYPES.setProductsInCart, newProducts);
};

export const removeProductFromCart = (cartItems, productToRemove) => {
  const newProducts = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.setProductsInCart, newProducts);
};

// export const totalPrice = cartItems => {
//   const total = cartItems.reduce((accu, curr) => {
//     return accu + curr.pirce * curr.quanity;
//   }, 0);
//   return createAction()
// };

// export const itemCount = cartItems => {
//   cartItems.reduce((accu, curr) => {
//     return accu + curr.quanity;
//   }, 0);
// };
