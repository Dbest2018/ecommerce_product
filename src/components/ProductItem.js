import React, { useState, useEffect } from "react";
import styled from "styled-components";

import imageOneSelected from "../images/image-product-1.jpg";
import imageOneThumbnail from "../images/image-product-1-thumbnail.jpg";
import imageTwoSelected from "../images/image-product-2.jpg";
import imageTwoThumbnail from "../images/image-product-2-thumbnail.jpg";
import imageThreeSelected from "../images/image-product-3.jpg";
import imageThreeThumbnail from "../images/image-product-3-thumbnail.jpg";
import imageFourSelected from "../images/image-product-4.jpg";
import imageFourThumbnail from "../images/image-product-4-thumbnail.jpg";

const ProductItem = ({ toggleFocus }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(imageOneSelected);
  }, []);
  return (
    <ItemContainer>
      <SelectedItem onClick={toggleFocus}>
        <img src={selectedImage} alt="selected" />
      </SelectedItem>
      <Selection>
        <img
          src={imageOneThumbnail}
          alt="selected"
          onClick={() => setSelectedImage(imageOneSelected)}
        />
        <img
          src={imageTwoThumbnail}
          alt="selected"
          onClick={() => setSelectedImage(imageTwoSelected)}
        />
        <img
          src={imageThreeThumbnail}
          alt="selected"
          onClick={() => setSelectedImage(imageThreeSelected)}
        />
        <img
          src={imageFourThumbnail}
          alt="selected"
          onClick={() => setSelectedImage(imageFourSelected)}
        />
      </Selection>
    </ItemContainer>
  );
};

export default ProductItem;

const ItemContainer = styled.div`
  height: 100%;
`;

const SelectedItem = styled.div`
  height: 70%;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  > img {
    width: 80%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Selection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  cursor: pointer;

  > img {
    height: 80px;
    width: 80px;
    border-radius: 5px;
  }
`;
