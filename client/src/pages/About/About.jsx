import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
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
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
          <Card style={{ width: '50%', height:'10rem', margin: '30px', border: '1px solid black' }}>
            <Card.Img
              variant="top"
              src="https://ucarecdn.com/1d37eb94-1205-47a0-94dc-7c5315eb5244/logorentcar.jpg"
            />
          </Card>
      </ContainerStyled>
      <Footer />
    </React.Fragment>
  );
}
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 50px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 200px;
  margin-top: 150px;
  background-color: trasnparent;
  border: 1px solid black;
`;

export const TitleStyled = styled.h1`
  color: #023047;
  font-size: 30px;
  margin: 30px;
`;
export default About;
