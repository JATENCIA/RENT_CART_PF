import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <ContainerStyled>
      <FooterStyled>
        <TitleStyled>
          <h3>COMPANY</h3>
          <Link to={"/about"}>
            <p>About us</p>
          </Link>
          <Link to={"#"}>
            <p>Our Team</p>
          </Link>
        </TitleStyled>

        <TitleStyled>
          <h3>SUPPORT</h3>
          <Link to={"/faq"}>
            <p>FAQ section</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact</p>
          </Link>
        </TitleStyled>
        <TitleStyled>
          <h3>CONTACT</h3>
          <p>
            <FaPhone /> +52 998 492 1643
          </p>
          <p>
            <MdEmail /> contact@rentcar.com.ar
          </p>
          <p>
            <FaMapMarkerAlt /> Buenos Aires, Argentina
          </p>
        </TitleStyled>
      </FooterStyled>
      <CopyrightStyled>
        <p className="footer">Copyright © 2023 Rent Car. All rights reserved</p>
      </CopyrightStyled>
    </ContainerStyled>
  );
}
export const ContainerStyled = styled.div`
  background-color: #56859a;
  color: #023047;
  position: absolute;
  width: 100%;
  top: 1200px;
  padding-top: 20px;
  font-size: 20px;
`;

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-around;
  background-color: #56859a;
`;
export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: space-around;
`;

export const CopyrightStyled = styled.div`
  color: white;
  padding: 10px 10px;
  border-top: 1px solid white;
`;
export default Footer;
