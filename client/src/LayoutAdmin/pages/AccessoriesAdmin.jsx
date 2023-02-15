import React from "react";
import { Link } from "react-router-dom";

function AccessoriesAdmin() {
  return (
    <div className="flex font-bold text-3xl">
      <h1>
        <span className="text-primary">Accessories!</span>
      </h1>
      <Link to="/create/accessory">
        <button
          type="button"
          className="absolute top-25 right-4 flex px-6 py-2.5 text-[#023047] font-bold bg-primary text-xs leading-tight uppercase rounded shadow-md hover:bg-[#219EBC] hover:shadow-lg focus:bg-[#219EBC] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#219EBC] active:shadow-lg  duration-150 ease-in-out"
        >
          Create new accessory
        </button>
      </Link>
    </div>
  );
}

export default AccessoriesAdmin;
