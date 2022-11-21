import { Fragment } from "react";
//useContext
//import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const ShopCategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("cat map from shop cat prev", categoriesMap);
  //const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => {
        return (
          <Fragment key={title}>
            <Link to={`/shop/${title}`}>
              <h2>{title}</h2>
            </Link>
            <ProductsContainer>
              {categoriesMap[title].map((product, i) => {
                if (i < 4) {
                  return <ProductCard key={product.id} product={product} />;
                }
                return null;
              })}
            </ProductsContainer>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

//styles
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;

export default ShopCategoriesPreview;
