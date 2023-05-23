import { Link } from "react-router-dom";
import React, { useState } from "react";
import TateLogo from "../assets/chess/tate.jpg";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div class="flex relative z-3 justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex ">
        <img
          src={TateLogo}
          width={35}
          height={35}
          className="select-none"
        ></img>
        <h1
          className=" pl-3 text-lg  md:text-2xl font-bold text-[#c79c2f] select-none hover:text-white cursor-pointer ease-in-out duration-500"
          // style={{ color: "#c79c2f", hover: "white" }}
        >
          <Link
            className="select-none   text-sm sm:text-base lg:text-xl "
            to="/"
          >
            TopGChess
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
