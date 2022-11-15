import styled from "styled-components";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { productsInCart } = useContext(CartContext);
  return (
    <DropdownContainer>
      <DropdownItems>
        {!productsInCart.length ? (
          <EmptyMessage>NO ITEMS IN CART</EmptyMessage>
        ) : (
          productsInCart.map(cartItem => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        )}
      </DropdownItems>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </DropdownContainer>
  );
};

export default CartDropdown;

//styles
const DropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  button {
    margin-top: auto;
  }
`;
const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

const DropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
