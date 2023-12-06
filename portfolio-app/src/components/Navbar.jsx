import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About Me",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Contact Me",
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-1 p-2 text-white bg-black fixed">
      <div>
        <h1 className="text-[aqua] font-extrabold text-[25px] ml-1 cursor-pointer">
          Portfolio.
        </h1>
      </div>

      <ul className={`md:flex ${nav ? "flex" : "hidden"}`}>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize cursor-pointer font-medium px-4 hover:scale-105 duration-200 hover:text-[aqua]"
          >
            {link}
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
         <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize mt-4 cursor-pointer font-medium px-4 hover:scale-105 duration-200 hover:text-[aqua]"
          >
            {link}
          </li>
        ))}
      </ul>
      )}
     
    </div>
  );
}

export default Navbar;
