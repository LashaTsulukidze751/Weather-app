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
    <div className={`w-52 m-2 ${theme?'bg-dark_1':' bg-slate-200'}`}>
      <div
        onClick={() => setDropDown(!dropDown)}
        className={`cursor-pointer flex justify-between  items-center border rounded-r-lg`}
      >
        <button className="px-3">Choose City</button>
        <IoIosArrowBack
          className={`h-10 w-10 duration-500 hover:fill-orange-500 ${
            theme ? "fill-slate-50" : "fill-body"
          } ${dropDown ? " -rotate-90" : ""} `}
        />
      </div>
      <div className={`flex flex-wrap absolute w-full -left-0  bg-inherit border`}>
        {dropDown
          ? citys.map((city,index) => {
              return <button key={index} onClick={()=>{handleClick(city)}} className={`w-1/2 text-center h-8 text-white hover:bg-gray-700 hover:border border-white  duration-100`}>{city}</button>;
            })
          : ""}
      </div>
    </div>
  );
}

export default ChooseFrom;
