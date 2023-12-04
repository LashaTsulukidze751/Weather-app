import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { API_KEY } from "../API";

function ChooseFrom({ onChoose, theme }) {
  const [dropDown, setDropDown] = useState(false);
  const [choosenValue, setChoosenValue] = useState("")

  const citys = [
    "Abu Dhabi",
    "Amsterdam",
    "Ankara",
    "Astana",
    "Athens",
    "Baku",
    "Bangkok",
    "Beijing",
    "Belgrade",
    "Berlin",
    "Bogota",
    "Brasilia",
    "Brussels",
    "Buenos Aires",
    "Helsinki",
    "Jerusalem",
    "Kiev",
    "London",
    "Madrid",
    "Mexico",
    "Moscow",
    "Prague",
    "Seoul",
    "Sofia",
    "Tbilisi",
    "Tokyo",
    "Vienna",
    "Warsaw",
    "Washington",
    "Wellington",
    "Yerevan",
    "Zagreb",
  ];

  useEffect(()=>{
    handleChoose();
  },[choosenValue])

  const handleClick = (city) =>{
    setChoosenValue(city);
    setDropDown(false)
    console.log(city)
  }

  const handleChoose = async () => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${choosenValue}&language=en`;
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
      onChoose({
        place_id:result[0].place_id,
        country: result[0].country        
      });
      console.log('choose')
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={`w-52 `}>
      <div
        onClick={() => setDropDown(!dropDown)}
        className={`cursor-pointer flex justify-around items-center rounded-3xl ${
          theme ? "bg-body" : "bg-slate-200"
        }`}
      >
        <button>Choose City</button>
        <IoIosArrowBack
          className={`h-10 w-10 duration-500   hover:fill-orange-500 ${
            theme ? "fill-slate-50" : "fill-body"
          } ${dropDown ? " -rotate-90" : ""} `}
        />
      </div>
      <div className={`flex flex-wrap absolute w-full -left-0 -top- bg-body color `}>
        {dropDown
          ? citys.map((city) => {
              return <button onClick={()=>{handleClick(city)}} className={`w-1/2 text-center h-8 text-white hover:bg-gray-700 duration-400`}>{city}</button>;
            })
          : ""}
      </div>
    </div>
  );
}

export default ChooseFrom;
