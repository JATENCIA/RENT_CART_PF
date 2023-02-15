import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Details.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Details() {
  const { state } = useLocation();

  const [sw, setsw] = useState(0);
  const [selection, setselection] = useState([]);
  const [Accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const response = await fetch("http://localhost:3001/accessories");
    const accessories = await response.json();
    setAccessories(accessories);
  }
  function addClic(e) {
    let obj = e.target.className;
    let arrayLeno = selection;
    let arrayAux = [];

    if (arrayLeno.includes(obj)) {
      arrayAux = arrayLeno.filter((dato) => dato != obj);
      setselection([]);
      setselection(arrayAux);
    } else {
      arrayLeno.push(obj);
      setselection(arrayLeno);
    }
    setsw(sw + 1);
    var data = "";
    selection.map((name) => {
      Accessories.map((accesor) => {
        accesor.name === name
          ? (data +=
              accesor.name +
              "|" +
              accesor.price +
              "|" +
              accesor._id +
              "|" +
              "tru" +
              "¬")
          : null;
      });
    });

    let info =
      state.brand +
      " - " +
      state.line +
      "|" +
      state.price +
      "|" +
      state._id +
      "|" +
      "tru" +
      "¬" +
      data;
    localStorage.setItem("nombre", info);
  }

  return (
    <>
      <NavBar />
      <div className="container1">
        <div className="container1a">
          <div className="row1">
            <img src={state.image} alt="car" height="300px" />
            <div className="row1colum2">
              <div>
                <h1 className="brand">
                  {state.brand} {state.line}
                </h1>
              </div>

              <div className="row1colum21">
                <div className="row1colum211">
                  <div className="feature">
                    <h1 className="title">Price: </h1>
                    <p className="description">${state.price} /Day </p>
                  </div>
                  <div className="feature">
                    <h1 className="title">Discount: </h1>
                    <p className="description">${state.discount}% </p>
                  </div>
                  <div className="feature">
                    <h1 className="title">Doors: </h1>
                    <p className="description">{state.doors}</p>
                  </div>
                  <div className="feature">
                    <h1 className="title">Fuel Type: </h1>
                    <p className="description">{state.fuelType}</p>
                  </div>
                </div>

                <div className="row1colum212">
                  <div className="feature">
                    <h1 className="title">Fuel Consumption: </h1>
                    <p className="description">{state.fuelConsumption}</p>
                  </div>
                  <div className="feature">
                    <h1 className="title">Gearbox: </h1>
                    <p className="description">{state.typeOfBox}</p>
                  </div>
                  <div className="feature">
                    <h1 className="title">Category: </h1>
                    <p className="description">{state.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="title">Description: </h1>
            <p className="description">{state.description}</p>
          </div>
          <div>
            <br />
            <h1 className="title">Accessories: </h1>
            <div className="listaccesori">
              {Accessories.map((acce) => (
                <h4 className="row2">
                  <img className="img" src={acce.image} alt={"No"} />
                  <div>{acce.name}</div>{" "}
                  <div id="descri">
                    {" "}
                    {acce.description.slice(0, 38)}{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See more...{" "}
                  </div>
                  <div>Cost: ${acce.price}</div>
                  <div>Dis: {acce.discount}%</div> <div>Total:{acce.price}</div>
                  {selection.includes(acce.name) ? (
                    <div id="black" className={acce.name}>
                      Reserve
                    </div>
                  ) : (
                    <div id="gray" className={acce.name}>
                      Available
                    </div>
                  )}
                  {selection.includes(acce.name) ? (
                    <div
                      id="black2"
                      className={acce.name}
                      onClick={(e) => addClic(e)}
                    >
                      ❌
                    </div>
                  ) : (
                    <div
                      id="gray2"
                      className={acce.name}
                      onClick={(e) => addClic(e)}
                    >
                      ✔️
                    </div>
                  )}
                </h4>
              ))}
            </div>
          </div>
        </div>
        <div className="butondetail">
          <Link to={`/home`} className="link">
            <button> Go back </button>
          </Link>
          <div id="separa"></div>
          <Link to={`/shopping`} className="link">
            <button> Booking </button>
          </Link>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
}
