import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

const Cart = ({ numberOfItem, setNumberOfItem }) => {
  return (
    <CartContainer>
      <CartHead>Cart</CartHead>
      <CartBody>
        {numberOfItem ? (
          <CartItem
            numberOfItem={numberOfItem}
            setNumberOfItem={setNumberOfItem}
          />
        ) : (
          <p>Your cart is empty</p>
        )}
      </CartBody>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.1), -5px 5px rgba(0, 0, 0, 0.1);
`;
const CartHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  padding-left: 10px;
  border-bottom: 2px solid hsl(223, 64%, 98%);
`;
const CartBody = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
