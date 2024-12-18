import React, { useState } from "react";
import homelogo from "../assets/home_icon.png";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      navigate("/cards", { state: { searchQuery: inputValue } });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center bg-gradient-to-b from-white to-sky-200 flex-col gap-8 h-dvh">
        <div className="flex justify-center items-center gap-4">
          <img src={homelogo} className="h-40 w-auto" />
          <p className="text-9xl font-semibold text-center">Girman</p>
        </div>
        <div className="flex items-center w-[50%] mx-auto bg-white rounded-lg border border-blue-800 ">
          {/* <IoSearchOutline className="text-3xl pl-2"/> */}
          <input
            placeholder="Search"
            className="p-3 rounded-lg w-full focus:outline-none"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
