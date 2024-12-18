// Card.js
import React, { useState } from "react";
import profile from "../assets/profile.png";
import Popup from "./Popup";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Card = ({ user }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFetchClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="m-2 bg-white p-4 rounded-lg shadow-lg">
      <img src={profile} className="h-16 w-auto rounded-full" />
      <p className="text-2xl font-semibold mt-2">
        {user.first_name} {user.last_name}
      </p>
      <div className="flex justify-start items-center text-sm">
        <IoLocationSharp className="text-base" />
        <p>{user.city}</p>
      </div>

      <div className="flex mt-6 border-t-2 border-black justify-between">
        <div className="text-xs pt-1 mt-1">
          <div className="flex justify-start items-center text-sm">
            <IoIosCall className="text-base" />
            <p>{user.contact_number}</p>
          </div>
          <p className="text-xs"></p>
        </div>
        <button
          onClick={handleFetchClick}
          className="pr-3 pl-3 mt-2 bg-black text-white rounded-lg text-sm"
        >
          Fetch Details
        </button>
      </div>

      {isPopupOpen && <Popup user={user} onClose={handleClosePopup} />}
    </div>
  );
};

export default Card;
