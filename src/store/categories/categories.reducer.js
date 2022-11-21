import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const CATEGORIES_INTIAL_STATE = {
  categoriesArr: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INTIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.setCategories:
      return { ...state, categoriesArr: payload };
    default:
      return state;
  }
};
