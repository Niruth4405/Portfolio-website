import React from "react";
// import Heroimage from "./assets/Heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "./Button"

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Front-End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            {" "}
            My name is Niruth Ananth. I'm Electronics and Telecomunications
            Engineering student at Dayananda Sagar College of Engineering.
            Currently, I'm learning Full-stack development
            <span></span>
          </p> 
          <Button Button="Portfolio"/>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
