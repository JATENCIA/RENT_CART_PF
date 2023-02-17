import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/actions/actions";


export default function LandingPage() {
  localStorage.setItem("nombre", "");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div className="information">
      <div className="container">
        <video className="back-video" autoPlay loop muted>
          <source
            src="https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className="titulo">RENT A CAR FROM $20/DAY</h1>
        <Link to="/home">
          <button className="button">RENT CAR</button>
        </Link>
      </div>
    </div>
  );
}
