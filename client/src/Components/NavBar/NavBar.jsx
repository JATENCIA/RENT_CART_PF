import React from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ContainerStyled>
        <ListStyled to="/home">RENT CAR</ListStyled>
        <NavStyled>
          <ListStyled to="/home">HOME</ListStyled>
          <ListStyled to="/about">ABOUT US</ListStyled>
          <ListStyled to="/contact">CONTACT</ListStyled>
        </NavStyled>
        <button>LOGIN</button>
      </ContainerStyled>
      <Outlet />
    </>
  );
}

export const ContainerStyled = styled.div`
  width: 100%;
  height: 54px;
  background: #023047;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const NavStyled = styled.nav`
  height: 100%;
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ListStyled = styled(NavLink)`
  padding-left: 15px;
  padding-right: 20px;
  text-decoration: none;
  color: #fff;

  :hover {
    border-radius: 5px;
    color: #ffb703;
  }
`;

export default NavBar;
