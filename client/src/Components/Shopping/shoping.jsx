import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./shoping.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useSelector,useDispatch} from 'react-redux';
import {acceso} from '../../redux/actions/actions'

export default function Details() {
  
const dispatch = useDispatch();
const acc = useSelector((state) => state.acceso);

var [Validate,setvalidate]= useState(0);

var str = localStorage.getItem('nombre');



var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var date =(`${day}-${month}-${year}`);

let arr = str.split('¬'); 
let shoping = []
const [ref, setref] = useState(0)
arr.map((data)=>{
  data !== ""? shoping.push (data.split('|')):null; 
})
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
  Swal.fire({
    title: 'The article was included!',                
    icon: 'warning',
    confirmButtonColor: '#e38e15',
    confirmButtonText: 'Exit',
  })
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
    str += dato[0]+"|" + dato[1]+"|" + dato[2]+"|"+ dato[3]+ "¬"
  })
  localStorage.setItem ('nombre',str)
}
function mercadoP(e) {
  e.preventDefault();
  if (Validate===0){
    dataMP.price !== 0? (
      dispatch(acceso(dataMP)),     
      document.getElementById("confir").innerText = "Pay bill",
      document.getElementById("Aprov").innerText = "✔️",
      setvalidate(1),
      window.open(acc.data.url)
      ): 
      Swal.fire({
      title: 'Select at least one vehicle or accessory',                
      icon: 'warning',
      confirmButtonColor: '#e38e15'}) 

  }
  else {
    dataMP.price !== 0? (
      dispatch(acceso(dataMP)),
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

let concat =[],total =0;
shoping.map((art)=>{
  art[3] === "tru"? (
    concat.push (art[0]),
    total += parseInt(art[1])
  ):null
}) 
const dataMP ={
  eMail:"test_user_1309324893@testuser.com",
  dni:"1231212",
  Image: "http://mydogger.com/wp-content/uploads/2019/06/logo-mercado-pago-png-7-1024x312.png",
  quantity:4,
  price:total,
  discount:0,
  line:[concat]
      }
  return (
    <>
      <NavBar></NavBar>
      <div className="ccontainer1"> 
        <div className="ccontainer1a">
      <div className="reservedTittle">Reserved items</div>       
          <div><br />
              <div className="clistaccesori">
                {shoping.map((acce) => (
                
                acce[3] === "tru"? (
                  <h4  className="crow2tru" >
                    <div>{acce[0]}</div>
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
                    <div>{acce[0]}</div>
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
                 <br /><h3 id="fra">
                  
                  <img className="mercadopago" src= "http://mydogger.com/wp-content/uploads/2019/06/logo-mercado-pago-png-7-1024x312.png" alt={"No"} />   
                  <div>

                    <div className="shoppingGroup">
                      <h1 className="titleText" >Rental Detail</h1>
                      <p className="shoppingText">{date} ref. #788852100004</p>
                    </div>

                    <div className="shoppingGroup">
                      <h1 className="shoppingTittle">Products for rent: </h1>
                      <p id="justi" className="shoppingText">{concat} </p>
                    </div>
                    <div className="shoppingGroup">
                      <h1 className="shoppingTittle">Total to pay: </h1>
                      <p className="shoppingText">${total} </p>
                    </div>
                    <div className="shoppingGroup">
                      <h1 className="shoppingTittle">Way to pay: </h1>
                      <p className="shoppingText"> Mercado Pago </p>
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