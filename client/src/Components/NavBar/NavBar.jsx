import React from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ContainerStyled>
        <a href="/home">RENT CAR</a>
        <NavStyled>
          <ListStyled to="/home">Home</ListStyled>
          <ListStyled to="/offers">Promociones</ListStyled>
          <ListStyled to="/fleet">Flota</ListStyled>
          <ListStyled to="/about">Sobre nosotros</ListStyled>
          <ListStyled to="/contac">Contacto</ListStyled>
          <ListStyled to="/blog">Blog</ListStyled>
        </NavStyled>
        <ButtonStyled>Ingresar</ButtonStyled>
      </ContainerStyled>
      <Outlet />
    </>
  );
}
export const ContainerStyled = styled.div`
  width: 100%;
  height: 54px;
  background: #1d1c1d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;

  a {
    text-decoration: none;
  }
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
  color: #ffbb00da;

  :hover {
    background: #b0920c;
    border-radius: 5px;
    color: white;
  }
`;

const ButtonStyled = styled.button`
  background-color: #ffbb00da;
  border-radius: 5px;
  border: 1px solid #ffbb00da;
  padding: 5px;
  color: black;
  cursor: pointer;
`;
export default NavBar;
