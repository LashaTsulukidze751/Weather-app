import React, { useEffect, useState } from "react";
import { API_KEY2 } from "./API";

function Daily({ Dataa, theme }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleDailyForcastFetch();
  }, [Dataa]);

  const handleDailyForcastFetch = async () => {
      const url = `https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=${Dataa.place_id}&language=en&units=auto`;
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
        setData(result.daily.data);
      } catch (error) {
        console.error(error);
      } 
  };
  
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={`w-full min-h-40 border  rounded flex items-center flex-wrap relative bg-opacity-50  ${theme?' bg-gray-800':' bg-slate-200 border-orange-500'}`}>
      <p className={`absolute left-1 rounded-t -top-[26px] font-bold text-sm p-0.5  border border-b-0  bg-opacity-50 ${theme?'bg-dark_1':' bg-slate-200  border-orange-500 text-orange-500'}`}>21 Day Forcast</p>
      {data.map((dat,index) => {
        let currentDate = new Date(dat.day);
        return (
          <div key={index} className={`w-1/3 rounded p-5 flex flex-col items-center  ${theme?'hover:bg-dark_3':'hover:bg-slate-300'} lg:w-1/4 xl:w-1/5`}>
            <p className=" font-bold">{days[currentDate.getDay()]}</p>
            <p>{`${currentDate.getDate()} ${months[currentDate.getMonth()]}`}</p>
            <img src={`./WeatherIcons/${dat.icon}.png`} alt="" />
            <div className="flex justify-center  w-1/2">
              <p>{`${dat.dew_point_min}°`}</p>
              <p className=" ml-3">{`${dat.dew_point_max}°`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Daily;
