import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
function CartItems(props) {
  const { cartItems } = props;
  //   console.log("cartItems", cartItems);

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  background-color: white;
  margin-right: 18px;
  flex: 0.8;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;
