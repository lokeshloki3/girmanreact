import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLocation, useNavigate } from "react-router-dom";
import notfound from "../assets/notfound.png";
import logo from "../assets/logo.svg";
import loadingGif from "../assets/loading.gif";
import { IoSearchOutline } from "react-icons/io5";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = location.state?.searchQuery?.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://49356e3b-5162-474d-97ed-bc5bd909e500.mock.pstmn.io/users"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = searchQuery
    ? data.filter(
        (user) =>
          user.first_name.toLowerCase().startsWith(searchQuery) ||
          user.last_name.toLowerCase().startsWith(searchQuery)
      )
    : [];

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      navigate("/cards", { state: { searchQuery: inputValue } });
    }
  };

  return (
    <>
      <div className="flex justify-between shadow-lg p-4 pl-52 pr-52 fixed top-0 left-0 w-full z-50 bg-white">
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        <div className="flex items-center justify-start bg-white rounded-lg border border-blue-800 w-[50%]">
          <IoSearchOutline className="text-3xl pl-2 pr-0" />
          <input
            placeholder="Search"
            className="p-2 mx-auto w-full rounded-lg focus:outline-none"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-white to-sky-200 min-h-screen mt-20">
        {loading ? (
          <div className="absolute inset-0 flex justify-center items-center bg-slate-200 bg-opacity-50 z-50">
            <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
          </div>
        ) : (
          <>
            {filteredData.length > 0 ? (
              <div
                id="cards-space"
                className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 p-6"
              >
                {filteredData.map((user, index) => (
                  <Card key={index} user={user} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center mt-28">
                <img src={notfound} className="h-56 w-auto" />
                <p className="text-center text-lg text-gray-400">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
