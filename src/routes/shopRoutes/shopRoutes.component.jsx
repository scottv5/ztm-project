import { Routes, Route } from "react-router-dom";
import ShopCategoriesPreview from "../../components/shop-categories-preview/shop-categories-preview.component";
import ShopCategory from "../../components/shop-category/shop-category.compontent";

const ShopRoutes = () => {
  return (
    <Routes>
      <Route index element={<ShopCategoriesPreview />} />
      <Route path=":category" element={<ShopCategory />} />
    </Routes>
  );
};

export default ShopRoutes;
