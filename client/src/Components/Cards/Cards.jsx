
import Card from "../Card/Card";
import React from 'react';
import './Cards.css';



function Cards({cars,ttFilt}) {

	return (			
		<div>		
			
			<div className="cards">	
				{cars.length > 0 ?
				cars.map((car) => (<Card car={car} />))
				: <h3>Sin Cars...</h3>
				}
			</div>	
				<h1 className="tittleCar">Cars({ttFilt})</h1>
		</div>	
	  );
}

export default Cards;




  