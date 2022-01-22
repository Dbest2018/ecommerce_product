import React from "react";
import styled from "styled-components";

import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";

const Product = () => {
  return (
    <ProductContainer>
      <ProductLeft>
        <ProductItem />
      </ProductLeft>
      <ProductRight>
        <ProductDetail />
      </ProductRight>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 80%;
  margin-top: 40px;
  overflow: hidden;
`;

const ProductLeft = styled.div``;

const ProductRight = styled.div``;
