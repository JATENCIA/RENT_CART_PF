import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import styled from "styled-components";
function About() {
  return (
    <React.Fragment>
      <NavBar />
      <ContainerStyled>
        <TitleStyled>About Rent Car</TitleStyled>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum................
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
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom:200px;
`;

export const TitleStyled = styled.h1`
  color: #023047;
`;
export default About;
