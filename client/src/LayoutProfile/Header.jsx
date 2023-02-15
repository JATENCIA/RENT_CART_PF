import React from "react";
import { FaRegCalendarAlt, FaArrowCircleRight } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
function Header() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <header className="h-[7vh] md:h[10vh] border-b border-secondary-100 p-8 flex justify-end items-center ">
        <nav className="flex items-center gap-x-2">
          <button className="items-center flex gap-x-2 hover:text-white ">
            <Link
              className="text-[#023047] font-bold hover:text-white"
              to="/home"
            >
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
              src={user.picture}
              alt={user.name}
              className="w-6 h-6 object-cover rounded-full"
            />
            <h1>Hello!</h1>
            <span>{user.name}</span>
            <RiArrowDownSLine />
          </button>
        </nav>
      </header>
    )
  );
}

export default Header;
