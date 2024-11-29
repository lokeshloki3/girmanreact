import React from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    <div className="fixed w-full bg-white shadow-lg z-10">
      <div className="flex justify-around shadow-lg p-4">
        <img src={logo} alt="GirmanTech Logo" onClick={()=>navigate("/")}/>
        <div className="flex gap-4 justify-center items-center">
          <a
            href="https://girmantech.com/"
            className="cursor-pointer hover:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/"
            className="cursor-pointer hover:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:contact@girmantech.com"
            className="cursor-pointer hover:text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
