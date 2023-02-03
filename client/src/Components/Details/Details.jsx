import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Details.css"

export default function Details() {
const {state} = useLocation();
  
  return (
    <div className='container1'>
      <h1>{state.name}</h1>
      <img src={state.image} alt="car" height="120px"/>
      <h1>{state.price} </h1>
    </div>
  )
} 