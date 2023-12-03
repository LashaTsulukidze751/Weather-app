import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function ChooseFrom({ onChoose, theme }) {
  const [dropDown, setDropDown] = useState(false);
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

  const Citys = [];
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
              return <button onClick={()=>{onChoose(city)}} className={`w-1/2 text-center h-8 text-white hover:bg-gray-700 duration-400`}>{city}</button>;
            })
          : ""}
      </div>
    </div>
  );
}

export default ChooseFrom;
