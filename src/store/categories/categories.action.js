import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = categoriesArr => {
  return createAction(CATEGORIES_ACTION_TYPES.setCategories, categoriesArr);
};
