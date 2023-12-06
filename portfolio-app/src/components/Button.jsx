import React from "react";
import 'boxicons'

function Button(props) {
  return (
    <>
    <button className="text-white w-fit px-6 py-3 my-2 flex items-center 
    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200">
      {props.Button} <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
    </button>
    
    </>
  );
}
export default Button;
