import React from 'react'
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({car}) => {
  return (
    <Link to={`/detail/${car.id_license_plare}`} className = 'link'>
		<div className='card'>
      <div className='texts'>		      
        <div className='text'>{car.name}</div>
        <div className='text2'>AUT 5P A/C  </div>	
        <div className='text3'>US$ {car.price}</div>	
      </div>
      <img className='img' src={car.image} alt={"No"} />
		</div>
      </Link>	
  )
}

export default Card