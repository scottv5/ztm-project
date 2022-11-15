import styled from "styled-components";

const CartItem = ({ cartItem }) => {
  const { name, quanity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>{`$${price * quanity}`}</span>
        <span>{quanity}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

//styles
const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    width: 30%;
  }
`;
const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
const Name = styled.div`
  font-size: 16px;
`;
