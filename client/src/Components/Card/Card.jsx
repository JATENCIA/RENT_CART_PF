import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { Rating } from "@mui/material";

<<<<<<< HEAD
export default function Card ({ image, brand, line, category, typeOfBox, doors, fuelType, price, location, discount, licensePlate }) {
=======
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
>>>>>>> 3d82f09ae61d378f4bdfe490f653736bce3a5992
  return (
    <div className="cardd">
      <div></div>
      <div>
<<<<<<< HEAD
        <div className="start">★★★☆☆</div>
        <img className="img" src={image} alt={"No"} />
=======
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
>>>>>>> 3d82f09ae61d378f4bdfe490f653736bce3a5992
      </div>

      <div className="texts">
        <div className="text1">
          {brand}-{line}
        </div>
        <div className="conText">
          <div className="text2">Category: {category} </div>
          <div className="text2">Transmision: {typeOfBox} </div>
          <div className="text2">Doors: {doors} </div>
          <div className="text2">Fuel Type: {fuelType} </div>
        </div>
        <div className="text3">US$ {price}</div>
        <div className="text4">{location} </div>
      </div>

      <div className="cardPart3">
        <div></div>
        <div className="Desc">discount</div>
        <div className="DescVal">{discount}%</div>
        <div></div>
        <Link to={`/detail/${licensePlate}`} className="link">
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
