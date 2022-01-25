import React from "react";
import styled from "styled-components";

import itemImage from "../images/image-product-1.jpg";
import deleteIcon from "../images/icon-delete.svg";

const CartItem = ({ numberOfItem }) => {
  return (
    <ItemContainer>
      <Item>
        <Image>
          <img src={itemImage} alt="item" />
        </Image>
        <Detail>
          Fall Limited Edition Sneakers <br />
          $125.00 x {numberOfItem} <span>${125.0 * numberOfItem} </span>
        </Detail>
        <DeleteIcon>
          <img src={deleteIcon} alt="delete" />
        </DeleteIcon>
      </Item>

      <CheckOut>
        <button>Checkout</button>
      </CheckOut>
    </ItemContainer>
  );
};

export default CartItem;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.div`
  width: fit-content;
  margin: 0 5px;
  > img {
    height: 50px;
    border-radius: 5px;
    object-fit: contain;
  }
`;

const Detail = styled.div`
  width: 70%;
  font-size: 12px;
  color: hsl(220, 14%, 75%);

  > span {
    color: black;
    font-size: 16px;
  }
`;

const DeleteIcon = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
  }
`;

const CheckOut = styled.button`
  border: none;
  background: none;
  width: 100%;
  margin-top: 10px;
  > button {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: hsl(26, 100%, 55%);
    border: none;
    color: white;
    cursor: pointer;
  }
`;
