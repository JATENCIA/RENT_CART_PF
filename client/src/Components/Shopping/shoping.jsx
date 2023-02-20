import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./shoping.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useSelector,useDispatch} from 'react-redux';
import {acceso} from '../../redux/actions/actions'

import { useAuth0 } from "@auth0/auth0-react";;

export default function Details() {
  const { isAuthenticated, user } = useAuth0();
  
const dispatch = useDispatch();
const acc = useSelector((state) => state.acceso);

var [Validate,setvalidate]= useState(0);

var str = localStorage.getItem('nombre');


let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date =(`${day}-${month}-${year}`);
const [validate,setValidate] = useState ({dni:""});
const [dniok,setdniok] = useState (false);

let arr = str.split('¬'); 
let shoping = []
const [ref, setref] = useState(0)
arr.map((data)=>{
  data !== ""? shoping.push (data.split('|')):null; 
})
function validate1(e){
  setValidate ((statePrev)=>({...statePrev,dni:e.target.value}));
  e.target.value.length>4? setdniok(true):setdniok (false);
}
function deleteReserved (e){
  Swal.fire({
    title: 'The article was excluded!',                
    icon: 'warning',
    confirmButtonColor: '#e38e15',
    confirmButtonText: 'Exit',
  })
  e.preventDefault();
  let arrTemp = [];
  shoping.map((inf)=>{
    inf[2] === e.target.className?(
      inf[3] = "fal",
      arrTemp.push(inf)
    )
    :(
      arrTemp.push(inf)
    )
  })  
  setref(ref+1)
  aLocalS(arrTemp)  
}
function trueReserved (e){
  e.preventDefault();
  let arrTemp = [];
  shoping.map((inf)=>{
    inf[2] === e.target.className?(
      inf[3] = "tru",
      arrTemp.push(inf)
    )
    :(
      arrTemp.push(inf)
    )
  })  
  setref(ref+1)
  aLocalS(arrTemp)  
}
function aLocalS (array){
  let str ="";
  array.map((dato)=>{
    str += dato[0]+"|" + dato[1]+"|" + dato[2]+"|"+ dato[3] +"|"+ dato[4] + "¬"
  })
  localStorage.setItem ('nombre',str)
}
function mercadoP(e) {
  e.preventDefault();
  if (dniok){
    if (Validate===0){
      dataMP.price !== 0 && isAuthenticated ? (
        dispatch(acceso(dataMP)),     
        document.getElementById("confir").innerText = "Pay bill",
        document.getElementById("Aprov").innerText = "✔️",
        setvalidate(1)
        ): 
        Swal.fire({
        title: 'Must have at least one item selected and must be authenticated',                
        icon: 'warning',
        confirmButtonColor: '#e38e15'}) 
        console.log(dataMP);
    }
    else {
      dataMP.price !== 0? (
        window.open(acc.data.url),localStorage.setItem ('nombre',""),
        document.getElementById("Aprov").innerText = "",
        document.getElementById("confir").innerText = "Validate",
        setvalidate(0)
        ): 
        Swal.fire({
        title: 'Select at least one vehicle or accessory',                
        icon: 'warning',
        confirmButtonColor: '#e38e15'}) 

    }
  }
  else {
    Swal.fire({
      title: 'Enter a valid DNI',                
      icon: 'warning',
      confirmButtonColor: '#e38e15'}) 
  }

  
}

let concat =[],total =0,disc=0;
shoping.map((art)=>{
  art[3] === "tru"? (
    concat.push(art[0]),
    total += parseInt(art[1]),
    disc += parseInt(art[1])*(parseInt(art[4])/100)
  ):null
}) 
const dataMP ={
  eMail:user.email,
  dni:validate,
  Image: user.picture,
  quantity:1,
  price:total,
  discount:disc,
  line:concat
      }

  return (
    <>
      <NavBar></NavBar>
      <div className="ccontainer18"> 
        <div className="ccontainer1a">
      <div className="reservedTittle">Reserved items</div>       
          <div><br />
              <div >
                {shoping.map((acce) => (
                
                acce[3] === "tru"? (
                  <h4  className="crow2tru" >
                    <div id="nameShopping">{acce[0]}</div>
                    <div>${acce[1]}.00</div>
                    <div id="carButton">
                      <div className={acce[2]} onClick={(e)=>deleteReserved (e)} >❌</div>
                    </div>                   
                    <div id="carButton">
                      <div className={acce[2]} onClick={(e)=>trueReserved (e)} >♻️</div>
                    </div>
                  </h4>)
                :(
                  <h4  className="crow2fal" >
                    <div id="nameShopping">{acce[0]}</div>
                    <div>${acce[1]}.00</div>
                    <div id="carButton">
                      <div className={acce[2]} onClick={(e)=>deleteReserved (e)} >❌</div>
                    </div>                    
                    <div id="carButton">
                      <div className={acce[2]} onClick={(e)=>trueReserved (e)} >♻️</div>
                    </div>
                  </h4>
                )   
                ))}  

                <br /><br /><br />
                
                 <br /><h3 id="fra">
                  <div>
                    <p id="dni">Confirm your identification document (DNI): <input id="boxdni" type="text" maxlength="12" value={validate.dni} onChange={(e)=>validate1(e)} /></p> <br />
                    <img className="mercadopago" src= "http://mydogger.com/wp-content/uploads/2019/06/logo-mercado-pago-png-7-1024x312.png" alt={"No"} />  
                  </div>
                  <div id="preFra">
                    <div className="shoppingGroup">
                      <h1 className="titleText" >Rental Detail</h1>
                      <p className="shoppingText">{date} ref. #788852100004</p>
                    </div>

                    <div className="shoppingGroup">
                      <h1 className="shoppingTittle">Products for rent: </h1>
                      <p id="justi" className="shoppingText">{concat} </p>
                    </div>
                    <div className="shoppingGroup">
                      <h1 className="shoppingTittle">Discount: </h1>
                      <p className="shoppingText">${disc} </p>
                    </div>                    
                    <div className="shoppingGroup">
                      <h1 className="shoppingTittle">Total to pay: </h1>
                      <p className="shoppingText">${total} </p>
                    </div>
                  </div>

                </h3> 
              </div>  
          </div>
        </div>
        <div className="cbutondetail">
        <Link to={`/home`} className="link">
              <button> Go back </button>
            </Link>
            <div id="csepara"></div>
            <button id="confir" onClick={(e)=>mercadoP(e)}>Validate </button> <div id="Aprov"></div>
        </div><br />
      </div>
      <Footer></Footer>
    </>
  );
}