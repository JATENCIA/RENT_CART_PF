import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/actions.js";

export default function Search (){
  const dispatch= useDispatch();
  const [location, setLocation]= useState('');

  function handleInputChange (e){
    e.preventDefault();
    setLocation(e.target.value);
    console.log(location)
  }
  function handleSubmit(e){
    e.preventDefault();
    if(location){
      
      dispatch(setSearch(location))
      setLocation("");
  }
  else{
      alert('No se encontro localidad');
  }
    // dispatch(setSearch(location));
    // setLocation("");
  }

  return (
      <ContainerStyled>
        <div>
        <input
        type= "text"
        placeholder= "Search location... "
        onChange= {(e) => handleInputChange(e)}
        />
          <ButtonStyled type='submit' onClick={e => handleSubmit(e)}>SEARCH</ButtonStyled>
          </div>
      </ContainerStyled>
    
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const InputStyled = styled.input`
  background-color: white;
  width: 300px;
  border: 2px solid #fb8500;
  border-radius: 8px;
  margin-right: 3px;
  padding: 8px;
  outline: none;
  color: black;
`;

export const ButtonStyled = styled.button`
  background-color: #ffb703;
  border-radius: 7px;
  padding: 10px;
  border: none;
  color: #023047;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #219ebc;
    color: #fff;
  }
`;
