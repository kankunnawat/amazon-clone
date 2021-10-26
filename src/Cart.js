import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import styled from "styled-components";

function Cart(props) {
  const { cartItems } = props;
  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
`;
