import { createSelector } from "reselect";

const selectCartReducer = state => {
  return state.cart;
};

export const selectTotal = createSelector([selectCartReducer], cart =>
  cart.productsInCart.reduce((accu, curr) => {
    return accu + curr.price * curr.quanity;
  }, 0)
);

export const selectItemCount = createSelector([selectCartReducer], cart =>
  cart.productsInCart.reduce((accu, curr) => {
    return accu + curr.quanity;
  }, 0)
);

export const selectProductsInCart = createSelector(
  [selectCartReducer],
  cart => cart.productsInCart
);

// export const selectIsCartOpen = state => {
//   return state.cart.isCartOpen;
// };
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);
