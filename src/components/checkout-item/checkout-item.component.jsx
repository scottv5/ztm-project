import styled from "styled-components";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/dropdown.context";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsInCart } from "../../store/cart/cart.selector";
import {
  addProductToCart,
  decretmentQuanity,
  removeProductFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ checkoutItem }) => {
  // const { addProductToCart, decretmentQuanity, removeProductFromCart } =
  //   useContext(CartContext);
  const { imageUrl, name, quanity, price } = checkoutItem;
  const dispatch = useDispatch();
  const products = useSelector(selectProductsInCart);

  const incrementHandler = () => {
    dispatch(addProductToCart(products, checkoutItem));
  };
  const decrementHandler = () => {
    dispatch(decretmentQuanity(products, checkoutItem));
  };
  const removeItemHandler = () => {
    dispatch(removeProductFromCart(products, checkoutItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quanity>
        <Arrow onClick={decrementHandler}>&lt;</Arrow>
        <Value>{quanity}</Value>
        <Arrow onClick={incrementHandler}>&gt;</Arrow>
      </Quanity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeItemHandler}>&#10060;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

//styles
const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Name = styled.div`
  width: 23%;
`;
const Quanity = styled.div`
  width: 23%;
  display: flex;
`;
const Arrow = styled.span`
  cursor: pointer;
`;
const Value = styled.div`
  margin: 0 10px;
`;
const Price = styled(Name)``;
const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
