import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  productsInCart: [],
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.setProductsInCart:
      return { ...state, productsInCart: payload };
    case CART_ACTION_TYPES.isCartOpenToggle:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};
