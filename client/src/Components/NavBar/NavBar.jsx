import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
import * as actionType from "../../redux/actions/actions";

import {
  RiArrowDownSLine,
  RiLogoutCircleRLine,
  RiProfileLine,
} from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useSelector, useDispatch } from "react-redux";
import { LoginButton } from "../Auth0/LoginButton";
import { LogoutButton } from "../Auth0/LogoutButton";
import {
  getAllBilling,
  getAllCarReview,
  getAllAccReview,
} from "../../redux/actions/actions";
import "./NavBar.css";

function NavBar() {
  const { isAuthenticated, user, logout } = useAuth0();
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();

  //-----------------------reviw
  // const logout = () => {
  //   dispatch({ type: actionType.LOGOUT });

  //   navigate.push("/auth");

  //   setUser(null);
  // };

  useEffect(() => {
    dispatch(getAllBilling());
    dispatch(getAllCarReview());
    dispatch(getAllAccReview());

    // const token = user?.token;
    // if (token) {
    //   const decodedToken = decode(token);
    //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }
    // setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch, location]);

  const allBilling = useSelector((state) => state.allbilling);
  const allCarReview = useSelector((state) => state.allcarreview);
  const allAccreview = useSelector((state) => state.allaccreview);

  return (
    <>
      <ContainerStyled>
        <Link to="/home">RENT CAR</Link>
        <NavStyled>
          <ListStyled to="/home">HOME</ListStyled>
          <ListStyled to="/about">ABOUT US</ListStyled>
          <ListStyled to="/contact">CONTACT</ListStyled>
        </NavStyled>
        {isAuthenticated ? (
          <ListStyled to="/shopping">RESERVED</ListStyled>
        ) : (
          ""
        )}

        {isAuthenticated ? (
          <ListStyled to="/dashboard">DASHBOARD</ListStyled>
        ) : null}
        {allBilling ? (
          <ListStyled to="/createReview" id="btnReview">
            REVIEW PENDING
          </ListStyled>
        ) : null}
        {isAuthenticated ? (
          <>
            {" "}
            <nav>
              <Menu
                menuButton={
                  <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#219EBC] p-2 rounded-lg transition-colors">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-6 h-6 object-cover rounded-full"
                    />
                    <span>Hi! {user.name}</span>
                    <RiArrowDownSLine />
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/profile/my-dates"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span className="text-sm">{user.name} </span>
                      <span className="text-xs text-gray-500">
                        {user.email}
                      </span>
                    </div>
                  </Link>
                </MenuItem>
                <hr className="my-4 border-gray-500" />
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/profile/my-dates"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <RiProfileLine /> My Profile
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/profile/favorites"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <MdOutlineFavorite /> Favorites
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="#"
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                  >
                    <RiLogoutCircleRLine /> Log Out
                  </Link>
                </MenuItem>
              </Menu>
            </nav>
          </>
        ) : (
          <Link to="/login">
            <button >Login</button>
          </Link>
        )}
        {/* <AppBar className={classes.appBar} position="static" color="inherit">
          <Toolbar className={classes.toolbar}> */}
        {/* {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout2
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In2
          </Button>
        )} */}
        {/* </Toolbar> */}
        {/* </AppBar> */}
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
  position: fixed;
  z-index: 1;
  top: 0;
  // left: 0px;
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
