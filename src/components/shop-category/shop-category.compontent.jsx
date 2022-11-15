import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ShopCategory = () => {
  console.log("PARAMS", useParams());
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

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
