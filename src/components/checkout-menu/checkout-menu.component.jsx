import styled from "styled-components";
import CheckoutItem from "../checkout-item/checkout-item.component";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/dropdown.context";
import { useSelector } from "react-redux";
import {
  selectProductsInCart,
  selectTotal,
} from "../../store/cart/cart.selector";

const CheckoutMenu = () => {
  //const { productsInCart } = useContext(CartContext);
  const productsInCart = useSelector(selectProductsInCart);
  const total = useSelector(selectTotal);

  return (
    <CheckoutMenuContainer>
      <CheckoutMenuHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quanity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutMenuHeader>
      {productsInCart.map(checkoutItem => {
        return (
          <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem} />
        );
      })}
      {total ? <Total>TOTAL: ${total}</Total> : null}
    </CheckoutMenuContainer>
  );
};

export default CheckoutMenu;

//styles
const CheckoutMenuContainer = styled.div`
  width: 85%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
const CheckoutMenuHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;
const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
