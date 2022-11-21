// import { useContext } from "react";
// import { CartContext } from "../../contexts/dropdown.context";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectItemCount,
} from "../../store/cart/cart.selector";
import { isCartOpenToggle } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsCartOpen);
  const itemCount = useSelector(selectItemCount);
  //const { isOpen, setIsOpen, productsInCart } = useContext(CartContext);

  const toggleIsOpen = () => {
    //setIsOpen(() => !isOpen);
    dispatch(isCartOpenToggle(isOpen));
  };

  return (
    <IconContainer onClick={toggleIsOpen}>
      <ShoppingIcon />
      <ItemCounter>{itemCount}</ItemCounter>
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
