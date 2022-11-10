import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { productsInCart } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {productsInCart.map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
