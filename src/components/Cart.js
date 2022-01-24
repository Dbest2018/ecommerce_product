import React from "react";
import styled from "styled-components";

const Cart = () => {
  return (
    <CartContainer>
      <CartHead>Cart</CartHead>
      <CartBody>
        <p>Your cart is empty</p>
      </CartBody>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  width: 250px;
  height: 200px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.1), -5px 5px rgba(0, 0, 0, 0.1);
`;
const CartHead = styled.div`
  height: 20%;
  border-bottom: 2px solid hsl(223, 64%, 98%);
`;
const CartBody = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
