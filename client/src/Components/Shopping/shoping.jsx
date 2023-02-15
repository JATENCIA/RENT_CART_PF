import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./shoping.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Details() {

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
    str += dato[0]+"|" + dato[1]+"|" + dato[2]+"|"+ dato[3]+ "¬"
  })
  localStorage.setItem ('nombre',str)
}
let concat ="",total =0;
shoping.map((art)=>{
  art[3] === "tru"? (
    concat += art[0]+", ",
    total += parseInt(art[1])
  ):null
})

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
            <Link to={`/shopping`} className="clink">
              <button> Pay bill  </button>
            </Link>
        </div><br />
      </div>
      <Footer></Footer>
    </>
  );
}