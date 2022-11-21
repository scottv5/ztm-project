import { useState, useEffect } from "react";
//useContext
//import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const ShopCategory = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  //const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <div>
      <h2>{category.slice(0, 1).toUpperCase() + category.slice(1)}</h2>
      <ProductsContainer>
        {products &&
          products.map((product, i) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </ProductsContainer>
    </div>
  );
};

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;

export default ShopCategory;
