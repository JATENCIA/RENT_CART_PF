import React from 'react'
import {Link} from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="information">
      {/* <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWjjlMTibcTWRyZBCpc-4a-Q87TzZ4-f4n3UXvXAh6TLq5Bgi_" alt="car" className='image' /> */}
      <div class="container">
			<h1 className="titulo">RENT A CAR FROM $20/DAY</h1>
            <Link to ='/home'>

            <button class="custom-btn btn-12"><span>Click!</span><span>Rent a car</span></button>
      {/* <button className="button">Rent a car</button> */}
            </Link>
</div>
		</div>
  )
}
