import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quanity, price, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <div className="name">{name}</div>
        <span>{`$${price * quanity}`}</span>
        <span>{quanity}</span>
      </div>
    </div>
  );
};

export default CartItem;
