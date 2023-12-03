import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { API_KEY } from "./API";

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
        "X-RapidAPI-Key": API_KEY,
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
      console.log('shearch')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-5/12 flex">
      <form
        action=""
        className={`w-full flex rounded-3xl overflow-hidden pr-1 justify-center items-center shadow-3xl ${theme?'bg-body':'bg-slate-200'}`}
      >
        <input
          type="text"
          className={`w-full h-full bg-inherit rounded-3xl px-3 outline-none ${theme?'text-white':'text-black'}`}
          placeholder="Search for your preffered city..."
          onChange={handleOnChange}
        />
        <CiSearch className={`h-10 w-10  hover:fill-orange-500 ${theme?'fill-slate-50':'fill-body'}`} onClick={handleClick} />
      </form>
    </div>
  );
}

export default Search;
