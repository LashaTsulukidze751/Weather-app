import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { API_KEY2 } from "../API";

function Search({ onSearchChange, theme }) {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClick = async () => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${input}&language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY2,
        "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      onSearchChange({
        place_id:result[0].place_id,
        country: result[0].country        
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-52 flex rounded-md overflow-hidden  ">
      <form className={`w-full flex border pr-1 justify-center items-center ${theme?' bg-dark_1':'bg-slate-200 border-orange-500' }`}>
        <input
          type="text"
          className={`w-full h-full bg-inherit rounded-3xl px-3 outline-none  ${theme?'text-white':'text-black'}`}
          placeholder="Search for city"
          onChange={handleOnChange}
        />
        <CiSearch className={`h-10 w-10 hover:fill-orange-500 duration-300 ${theme?'fill-slate-200':'fill-body'}`} onClick={handleClick} />
      </form>
    </div>
  );
}

export default Search;
