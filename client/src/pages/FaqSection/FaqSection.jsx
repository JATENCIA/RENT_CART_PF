import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

function FaqSection() {
  return (
    <ContainerStyled>
      <NavBar />
      <h1>Frequently asked questions about our car rentals</h1>
      <Footer />
    </ContainerStyled>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: #023047;
  margin-top: 400px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 200px;
`;

export default FaqSection;
