import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

import logo from "../images/logo.svg";
import profilePicture from "../images/image-avatar.png";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const Header = ({ toggleShowCart }) => {
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
        <CartIcon onClick={toggleShowCart} />
        <AvatarStyled src={profilePicture} alt="profile" />
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
  border-bottom: 2px solid hsl(223, 64%, 98%);
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: auto;
  height: 100%;

  > p {
    margin-left: 20px;
    display: flex;
    height: 100%;
    align-items: center;
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
  align-items: center;
`;

const AvatarStyled = styled(Avatar)`
  cursor: pointer;
  :hover {
    border: 1px solid hsl(26, 100%, 55%);
  }
`;

const CartIcon = styled(ShoppingCartOutlined)`
  margin-right: 30px;
  color: hsl(219, 9%, 45%);
  cursor: pointer;
`;
