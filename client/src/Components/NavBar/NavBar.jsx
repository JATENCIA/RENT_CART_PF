import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { NavLink, Outlet, Link } from "react-router-dom";
import { LoginButton } from "../Auth/LoginButton";
import { LogoutButton } from "../Auth/LogoutButton";

function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <ContainerStyled>
        <Link to="/home">RENT CAR</Link>
        <NavStyled>
          <ListStyled to="/home">HOME</ListStyled>
          <ListStyled to="/about">ABOUT US</ListStyled>
          <ListStyled to="/contact">CONTACT</ListStyled>
          <ListStyled to="/shopping">RESERVED</ListStyled>
          {isAuthenticated ? (
            <Link to={`/profile`} className="link">
              PROFILE
            </Link>
          ) : (
            ""
          )}
        </NavStyled>
        {isAuthenticated ? (
          <>
            {" "}
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </ContainerStyled>
      <Outlet />
    </>
  );
}

export const ContainerStyled = styled.div`
  width: 100%;
  height: 64px;
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

  &:hover {
    color: #ffb703;
  }
`;

export default NavBar;
