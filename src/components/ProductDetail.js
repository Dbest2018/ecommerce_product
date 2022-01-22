import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";

const ProductDetail = () => {
  return (
    <DetailContainer>
      <OrangeText>SNEAKER COMPANY</OrangeText>
      <LargeText>
        Fall Limited Edition <br />
        Sneakers
      </LargeText>
      <SmallText>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </SmallText>
      <PriceContainer>
        <PriceLeft>
          <LargeText>$125.00</LargeText>
          <SmallText>
            <span>$250.00</span>
          </SmallText>
        </PriceLeft>
        <PriceRight>
          <OrangeText>50%</OrangeText>
        </PriceRight>
      </PriceContainer>
      <CartContainer>
        <GreyContainer>
          <Sign>-</Sign>
          <p>0</p>
          <Sign>+</Sign>
        </GreyContainer>
        <OrangeContainer>
          <ShoppingCartOutlined />
          <p>Add to cart</p>
        </OrangeContainer>
      </CartContainer>
    </DetailContainer>
  );
};

export default ProductDetail;

const DetailContainer = styled.div`
  padding: 50px;
`;

const OrangeText = styled.p`
  color: hsl(26, 100%, 55%);
  font-size: 16px;
`;

const LargeText = styled.p`
  font-size: 32px;
  margin: 0;
`;

const SmallText = styled.p`
  font-size: 16px;
  color: hsl(219, 9%, 45%);

  > span {
    text-decoration: line-through;
  }
`;

const PriceContainer = styled.div`
  display: flex;
`;

const PriceLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const PriceRight = styled.div`
  width: fit-content;
  height: fit-content;

  > p {
    background-color: hsl(25, 100%, 94%);
  }
`;

const CartContainer = styled.div`
  display: flex;
`;

const GreyContainer = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: hsl(223, 64%, 98%);
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
`;

const OrangeContainer = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background-color: hsl(26, 100%, 55%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  > p {
    margin-left: 10px;
  }
`;

const Sign = styled.p`
  cursor: pointer;
  color: hsl(26, 100%, 55%);
`;
