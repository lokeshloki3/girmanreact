// Card.js
import React, { useState } from "react";
import profile from "../assets/profile.png";
import Popup from "./Popup";

const Card = ({ user }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFetchClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="m-8 bg-white p-8 rounded-lg shadow-lg">
      <img src={profile} className="h-20 w-auto rounded-full" />
      <p className="text-3xl font-semibold mt-2">
        {user.first_name} {user.last_name}
      </p>
      <p className="text-sm">{user.city}</p>
      <div className="flex mt-8 border-t-2 border-black justify-between">
        <div className="text-sm pt-2 mt-1">
          <p>{user.contact_number}</p>
          <p>Available on Phone</p>
        </div>
        <button
          onClick={handleFetchClick}
          className="p-3 mt-2 bg-black text-white rounded-lg"
        >
          Fetch Details
        </button>
      </div>

      {isPopupOpen && <Popup user={user} onClose={handleClosePopup} />}
    </div>
  );
};

export default Card;
