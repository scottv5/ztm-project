import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log("asdf", products);
  return (
    <div className="products-container">
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
