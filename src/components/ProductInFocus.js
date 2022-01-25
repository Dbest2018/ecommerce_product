import React from "react";
import styled from "styled-components";

import ProductItem from "./ProductItem";

const ProductInFocus = ({ toggleFocus }) => {
  return (
    <Container>
      <span onClick={toggleFocus}>x</span>
      <ProductItem />
    </Container>
  );
};

export default ProductInFocus;

const Container = styled.div`
  height: 70%;
  width: 30%;

  > span {
    color: hsl(26, 100%, 55%);
    cursor: pointer;
    margin: 87%;
    font-size: 1.5rem;
  }
`;
