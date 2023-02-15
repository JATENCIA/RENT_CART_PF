import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";

function Contact() {
  return (
    <React.Fragment>
      <NavBar />
      <ContainerStyled>
        <TitleStyled>Contact us, we are here to help you</TitleStyled>
        <p>
          It will be a pleasure to assist you in any question or comment you
          have about our services
        </p>
      </ContainerStyled>
      <Footer />
    </React.Fragment>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 100px;
  margin-bottom: 300px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const TitleStyled = styled.h1`
  color: #023047;
`;

export default Contact;
