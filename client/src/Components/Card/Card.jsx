import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { Rating } from "@mui/material";

const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
const Card = ({ car }) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  return (
    <div className="cardd">
      <div></div>
      <div>
        <div className="start">
        <Rating
            name="half-rating-read"
            value={value}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && (
            <div style={{marginTop:"0px" ,fontSize:"17px"}} sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</div>
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

      <div className="cardPart3">
        <div></div>
        <div className="Desc">discount</div>
        <div className="DescVal">{car.discount}%</div>
        <div></div>
        <Link to={`/detail/${car.licensePlate}`} state={car} className="link">
          <button> Details </button>
        </Link>
        <div></div>
      </div>
      <div>
        <div className="heart">
          <MdFavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default Card;
