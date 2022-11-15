import styled from "styled-components";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addProductToCart } = useContext(CartContext);
  const onClickHandler = () => {
    addProductToCart(product);
  };
  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ProductCardButton buttonType={"inverted"} onClick={onClickHandler}>
        Add to cart
      </ProductCardButton>
    </ProductCardContainer>
  );
};

//styles
const ProductCardButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
const ProductCardImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;
const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${ProductCardImage} {
      opacity: 0.8;
    }
    ${ProductCardButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const Price = styled.span`
  width: 10%;
`;

export default ProductCard;
