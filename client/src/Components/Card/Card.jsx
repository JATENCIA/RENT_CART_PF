import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Rating } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";
import { postFavorite } from "../../redux/actions/actions";

const Card = ({ car }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const onClick = () => {
    if (isAuthenticated && user) {
      const newFavorite = {
        favori: car.licensePlate,
        eMail: user.email,
      };
      console.log(newFavorite);
      dispatch(postFavorite(newFavorite));

      if (!click) {
        setClick(true);
      } else {
        setClick(false);
      }
    } else {
      Swal.fire({
        title: "You need to log in,do you want to continue.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      axios.get("/users").then((e) => {
        const userDB = e.data.find((e) => e.eMail === user.email);
        let _id = car._id;
        const favorite = userDB.favorites.map((e) => e._id);
        console.log(favorite);

        for (let i = 0; i < favorite.length; i++) {
          if (favorite[i] === _id) {
            setClick(true);
          }
        }
      });
    }
  }, [user]);

  return (
    <div className="cardd">
      <div></div>
      <div>
        <div className="start">
          <Rating name="half-rating-read" value={car.avg} readOnly />
          {car.avg !== null && (
            <div style={{ marginTop: "0px", fontSize: "17px" }} sx={{ ml: 2 }}>
              {"(" + car.avg + ")"}
            </div>
          )}
        </div>
        <img className="img" src={car.image} alt={"No"} />
      </div>

      <div className="texts">
        <div className="text1">
          {car.brand}-{car.line}
        </div>
        <div className="conText">
          <div className="text2">Category: {car.category} </div>
          <div className="text2">Transmision: {car.typeOfBox} </div>
          <div className="text2">Doors: {car.doors} </div>
          <div className="text2">Fuel Type: {car.fuelType} </div>
        </div>
        <div className="text3">US$ {car.price}</div>
        <div className="text4">{car.location} </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="heart">
          <span className="icon" onClick={onClick}>
            {click ? (
              <MdFavorite className="heart-border" />
            ) : (
              <MdFavoriteBorder className="heart-fill" />
            )}
          </span>
        </div>
        <div className="cardPart3">
          <div className="Desc">discount</div>
          <div className="DescVal">{car.discount}%</div>
        </div>
        <div>
          <Link to={`/detail/${car.licensePlate}`} state={car} className="link">
            <button> Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
