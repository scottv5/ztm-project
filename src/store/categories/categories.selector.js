import { createSelector } from "reselect";

const selectCategoryReducer = state => state.categories;

export const selectCategoriesArr = createSelector(
  [selectCategoryReducer],
  categories => categories.categoriesArr
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesArr],
  categoriesArr =>
    categoriesArr.reduce((accu, curr) => {
      accu[curr.title.toLowerCase()] = curr.items;
      return accu;
    }, {})
);
