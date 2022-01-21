import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

import logo from "../images/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import profilePicture from "../images/image-avatar.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Image>
          <img src={logo} alt="logo" />
        </Image>
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </HeaderLeft>
      <HeaderRight>
        <ShoppingCartIcon />
        <Avatar src={profilePicture} alt="profile" />
      </HeaderRight>
      <HeaderRight></HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  border-bottom: 1px solid hsl(223, 64%, 98%);
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: auto;

  > p {
    margin-left: 20px;
    color: hsl(219, 9%, 45%);
  }

  > p:hover {
    border-bottom: 3px solid hsl(26, 100%, 55%);
    cursor: pointer;
  }
`;

const Image = styled.div`
  margin-right: 20px;
`;

const HeaderRight = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-around;
  align-items: center;
`;
