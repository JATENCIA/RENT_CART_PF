import React, { useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import "./Home.css";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import { Filter } from "../filtro/Filter";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Home() {

let cars = useSelector((state) => state.cars);
//---------------------------------------
  
  let [ordeno,setordeno]=useState ("Ascending");
  let [indexo, setindexo] =useState ("Brand")
  let [arCar,setarCar]=useState (cars);
  let [pag, setPag] = useState(1);
  let [xclude] =useState([[],[],[],[],[]])
  let ordenado =[];
  //functions-------------------------------------

  function paginate(e, num) {
    e.preventDefault();
    setPag(num);
  }
  function uddateForFilter (e, obj,index){
    e.preventDefault();

		let arrayTemp =[], filt1=[], filt2=[], filt3=[], filt4=[], filt5=[];
    xclude[index].includes(obj)?(
      arrayTemp = xclude[index].filter(dato => dato != obj),
		  xclude[index] = arrayTemp
    ):(
      xclude[index].push(obj)
    )
      //----filter brand----
      cars.map((objCar)=>{xclude[0].includes(objCar.brand)? null: filt1.push(objCar)})
      //----filter category----
      filt1.map((objCar)=>{xclude[1].includes(objCar.category)? null: filt2.push(objCar)})
      //----filter typeOfBox----
      filt2.map((objCar)=>{xclude[2].includes(objCar.typeOfBox)? null: filt3.push(objCar)})
      //----filter fuelType----
      filt3.map((objCar)=>{xclude[3].includes(objCar.fuelType)? null: filt4.push(objCar)})
      //----filter discount----
      filt4.map((objCar)=>{xclude[4].includes(objCar.discount)? null: filt5.push(objCar)})


      setarCar (filt5);


	}

  function ordenate (e){
    setordeno(e.target.value)
  }
  function ordenate2 (e){
    setindexo(e.target.value)
  }
  
  //---------------ordenate-------------------------------
  
  if (ordeno === "Ascending" && indexo === "Brand"){     
    ordenado = arCar.sort(function (a, b) {
      if (a.brand > b.brand) {return 1; }
      if (a.brand < b.brand) { return -1;}
      return 0;
    });
  }
  else if (ordeno === "Descending" && indexo === "Brand"){
    ordenado = arCar.sort(function (a, b) {
      if (a.brand < b.brand) {return 1; }
      if (a.brand > b.brand) { return -1;}
      return 0;
    });
  }
  else if (ordeno === "Ascending" && indexo === "Category"){     
    ordenado = arCar.sort(function (a, b) {
      if (a.category > b.category) {return 1; }
      if (a.category < b.category) { return -1;}
      return 0;
    });
  }
  else if (ordeno === "Descending" && indexo === "Category"){
    ordenado = arCar.sort(function (a, b) {
      if (a.category < b.category) {return 1; }
      if (a.category > b.category) { return -1;}
      return 0;
    });
  }else if (ordeno === "Descending" && indexo === "Transmission"){     
    ordenado = arCar.sort(function (a, b) {
      if (a.typeOfBox > b.typeOfBox) {return 1; }
      if (a.typeOfBox < b.typeOfBox) { return -1;}
      return 0;
    });
  }
  else if (ordeno === "Ascending" && indexo === "Transmission"){
    ordenado = arCar.sort(function (a, b) {
      if (a.typeOfBox < b.typeOfBox) {return 1; }
      if (a.typeOfBox > b.typeOfBox) { return -1;}
      return 0;
    });
  }
  else if (ordeno === "Descending" && indexo === "Fuel"){     
    ordenado = arCar.sort(function (a, b) {
      if (a.fuelType > b.fuelType) {return 1; }
      if (a.fuelType < b.fuelType) { return -1;}
      return 0;
    });
  }
  else if (ordeno === "Ascending" && indexo === "Fuel"){
    ordenado = arCar.sort(function (a, b) {
      if (a.fuelType < b.fuelType) {return 1; }
      if (a.fuelType > b.fuelType) { return -1;}
      return 0;
    });
  }
  //-------------------------------------------------
  
  var until = pag * 6;
  var since = until - 6;
  let carPag = ordenado.slice(since, until);
  return (
    
    
    
    <React.Fragment>
      
    <Filter cars = {cars} filterInHome = {uddateForFilter} paginate={paginate} xclude ={xclude} />
    <div className="Filteredout">Filtered out</div>
      <NavBar />
      <div className="homen">
        <Cards cars={carPag} ttFilt = {ordenado.length}/>
        <Pagination total={ordenado.length} paginate={paginate} />
      </div>
      <div className='ordenado'>
					<div></div>
					<div id="inorder" className='DeaZ2'>Order for_</div>		

					<select id="Deaz2" className='DeaZ2' onChange={(e)=>ordenate2(e)}>
						<option value={"Brand"}>Brand</option> 
						<option value={"Category"}>Category</option> 
						<option value={"Transmission"}>Transmission</option>
						<option value={"Fuel"}>Fuel Type</option> 
					</select>	

					<div id="inorder" className='DeaZ2'>In order_</div>

					<select id="Deaz2" className='DeaZ2' onChange={(e)=>ordenate(e)}>
						<option value={"Ascending"}>Ascending</option> 
						<option value={"Descending"}>Descending</option> 
					</select>
			</div>
      <Footer />
    </React.Fragment>
  );
}
