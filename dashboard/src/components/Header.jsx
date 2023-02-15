import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

function Header() {
  return (
    <header className="h-[7vh] md:h[10vh] border-b border-secondary-100 p-8 flex justify-end items-center ">
      <nav className="flex items-center gap-x-2">
        <button className="items-center flex gap-x-2">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQEHNiC---MRew/profile-displayphoto-shrink_100_100/0/1655515258716?e=1681344000&v=beta&t=RV3bXPH7DTEMf9exLIC3J8o58w8revqPRBWVuSxGDPM"
            className="w-6 h-6 object-cover rounded-full"
          />
          <h1>Hello!</h1>
          <span className="text-primary">Isidoro Francisco Hilario</span>
          {/* <RiArrowDownSLine /> */}
        </button>
      </nav>
    </header>
  );
}

export default Header;
