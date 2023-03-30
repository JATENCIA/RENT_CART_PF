import React, { useState, useEffect } from "react";
import "./Faq.css";

import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../redux/actions/actions";
function Faq({ pregunta, respuesta }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq ${isOpen ? "open" : ""}`} onClick={toggleAccordion}>
      <div className="pregunta">{pregunta}</div>
      <div className="respuesta">{isOpen && respuesta}</div>
    </div>
  );
}

export default Faq;
