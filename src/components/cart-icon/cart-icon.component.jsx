import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

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
    <div className="cart-icon-container" onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{getTotalProductCount()}</span>
    </div>
  );
};

export default CartIcon;
