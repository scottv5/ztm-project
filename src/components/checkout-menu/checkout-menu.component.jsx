import "./checkout-menu.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/dropdown.context";

const CheckoutMenu = () => {
  const { productsInCart } = useContext(CartContext);
  const total = productsInCart.reduce((accu, curr) => {
    return accu + curr.price * curr.quanity;
  }, 0);
  return (
    <Fragment>
      <div className="checkout-menu-container">
        {productsInCart.map(checkoutItem => {
          return (
            <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem} />
          );
        })}
      </div>
      {total ? <div className="total">TOTAL: ${total}</div> : null}
    </Fragment>
  );
};

export default CheckoutMenu;
