import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaRegCalendarAlt, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  return (
    <header className="h-[7vh] md:h[10vh] border-b border-secondary-100 p-8 flex justify-end items-center ">
      <nav className="flex items-center gap-x-2">
        <button className="items-center flex gap-x-2 hover:text-white ">
          <Link className="text-[#023047] font-bold hover:text-white" to="/home">
            Go Home
          </Link>

          <FaArrowCircleRight />
        </button>
        <button className="items-center flex gap-x-2 hover:text-white">
          <FaRegCalendarAlt className="hover-white" />
          <h1>{`${day}/${month}/${year}`}</h1>
        </button>

        <button className="items-center flex gap-x-2">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQEHNiC---MRew/profile-displayphoto-shrink_100_100/0/1655515258716?e=1681344000&v=beta&t=RV3bXPH7DTEMf9exLIC3J8o58w8revqPRBWVuSxGDPM"
            className="w-6 h-6 object-cover rounded-full"
          />
          <h1>Hello!</h1>
          <span>Isidoro Francisco Hilario</span>
          <RiArrowDownSLine />
        </button>
      </nav>
    </header>
  );
}

export default Header;
