import React, { useEffect, useState } from "react";
import { API_KEY } from "./API";
function Daily({ Dataa }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleDailyForcastFetch();
  }, [Dataa]);

  const handleDailyForcastFetch = async () => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=${Dataa.place_id}&language=en&units=auto`;
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
      setData(result.daily.data);
      console.log(result);
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
    <div className=" w-full min-h-40 border-y border-black flex items-center flex-wrap ">
      {data.map((dat) => {
        let currentDate = new Date(dat.day);
        return (
          <div className=" w-1/6 hover:bg-slate-500 flex flex-col items-center">
            <p>{days[currentDate.getDay()]}</p>
            <p>{`${currentDate.getDate()} ${months[currentDate.getMonth()]}`}</p>
            <img src={`./WeatherIcons/${dat.icon}.png`} alt="" />
            <div className="flex justify-evenly w-full">
              <p>{`${dat.dew_point_min}°`}</p>
              <p>{`${dat.dew_point_max}°`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Daily;
