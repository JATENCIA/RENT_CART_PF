import React from "react";
import styled from "styled-components";
function NotFound() {
  return (
    <ContainerStyled>
      <h3>¡OOPS! Esta pagína no existe</h3>

      <h1>{"{ ERROR 404 }"}</h1>
    </ContainerStyled>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export default NotFound;
