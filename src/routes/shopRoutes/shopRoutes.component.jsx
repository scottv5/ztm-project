import { Routes, Route } from "react-router-dom";
import ShopCategoriesPreview from "../../components/shop-categories-preview/shop-categories-preview.component";
import ShopCategory from "../../components/shop-category/shop-category.compontent";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.action";

const ShopRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const categoriesArr = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArr));
    };
    getCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ShopCategoriesPreview />} />
      <Route path=":category" element={<ShopCategory />} />
    </Routes>
  );
};

export default ShopRoutes;
