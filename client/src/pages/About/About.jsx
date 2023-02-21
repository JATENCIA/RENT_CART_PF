import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
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
        <CardGroup style={{ width: '50rem', height:'13rem', margin: '30px', border: '1px solid black' }}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1547038577-da80abbc4f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Card>
        </CardGroup>
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
