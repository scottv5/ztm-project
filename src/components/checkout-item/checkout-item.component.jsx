import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";

const CheckoutItem = ({ checkoutItem }) => {
  console.log("//from checkout item", checkoutItem);
  const { addProductToCart, decretmentQuanity, removeProductFromCart } =
    useContext(CartContext);
  const { imageUrl, name, quanity, price } = checkoutItem;
  const incrementHandler = () => {
    addProductToCart(checkoutItem);
  };
  const decrementHandler = () => {
    decretmentQuanity(checkoutItem);
  };

  const removeItemHandler = () => {
    removeProductFromCart(checkoutItem);
  };

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
      <div className="quanity-grouping">
        <span onClick={decrementHandler}>&lt;</span>
        <div>{quanity}</div>
        <span onClick={incrementHandler}> &gt; </span>
      </div>
      <div>{price}</div>
      <div onClick={removeItemHandler} className="x-mark">
        X
      </div>
    </div>
  );
};

export default CheckoutItem;
