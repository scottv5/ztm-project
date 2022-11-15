import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import styled from "styled-components";

const CartIcon = () => {
  const { isOpen, setIsOpen, productsInCart } = useContext(CartContext);
  const toggleIsOpen = () => {
    setIsOpen(() => !isOpen);
  };
  const getTotalProductCount = () => {
    return productsInCart.reduce((accu, curr) => {
      return accu + curr.quanity;
    }, 0);
  };
  return (
    <IconContainer onClick={toggleIsOpen}>
      <ShoppingIcon />
      <ItemCounter>{getTotalProductCount()}</ItemCounter>
    </IconContainer>
  );
};

export default CartIcon;

//styles
const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;
const ItemCounter = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
