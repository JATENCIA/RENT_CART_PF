import React from "react";
import { Link } from "react-router-dom";

function Cars() {
  return (
    <div className="flex font-bold text-3xl">
      <h1>
        <span className="text-primary">Cars!</span>
      </h1>
      <Link to="/create/car">
          <button
            type="button"
            className="absolute top-25 right-4 flex px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  duration-150 ease-in-out"
          >
            Create new car
          </button>      
      </Link>
    </div>
  );
}

export default Cars;
