import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

export default function Card ({ image, brand, line, category, typeOfBox, doors, fuelType, price, location, discount, licensePlate }) {
  return (
    <div className="cardd">
      <div></div>
      <div>
        <div className="start">★★★☆☆</div>
        <img className="img" src={image} alt={"No"} />
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
