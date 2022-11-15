import CheckoutMenu from "../../components/checkout-menu/checkout-menu.component";
import styled from "styled-components";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutMenu />
    </CheckoutContainer>
  );
};

//styles
const CheckoutContainer = styled.div`
  width: 100%;
`;

export default Checkout;
