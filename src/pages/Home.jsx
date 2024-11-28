import React, { useState } from "react";
import homelogo from "../assets/home_icon.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

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
      <div className="bg-gradient-to-b from-white to-sky-200 h-[100vh] flex flex-col gap-8">
        <div className="flex justify-center items-center gap-4">
          <img src={homelogo} className="h-40 w-auto" />
          <p className="text-9xl font-semibold text-center">Girman</p>
        </div>
        <input
          placeholder="Search"
          className="w-[50%] mx-auto p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-200"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default Home;
