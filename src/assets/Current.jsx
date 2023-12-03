import React, { useEffect, useState } from "react";
import { API_KEY } from "./API";
function Current({ Dataa, theme }) {
  const [data, setData] = useState({});
  useEffect(() => {
    searchCurrent();
  }, [Dataa]);

  const searchCurrent = async () => {
    const check = localStorage.getItem("data");

    if (check) {//es wasashlelia
      setData(JSON.parse(check));//es wasashlelia
    } else {//es wasashlelia
      const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${Dataa.place_id}&timezone=auto&language=en&units=auto`;
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
        localStorage.setItem('data',JSON.stringify(result.current));
        setData(result.current);
        console.log('current');//es wasashlelia
      } catch (error) {
        console.error(error);
      }
    }//es wasashlelia
  };

  const date = new Date();
  const Day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <div
        className={`flex justify-evenly w-3/4 m-16 p-7 ${
          theme ? "text-white bg-body" : "text-black bg-slate-200"
        }`}
      >
        <div>
          <h1 className="text-3xl">{`${Dataa.place_id},${Dataa.country}`}</h1>
          <h2 className="text-6xl">{`${data.temperature}°C`}</h2>
          <h2>{`feels like ${data.feels_like}°C`}</h2>
          <div>
            <h3>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h3>
            <h3>{Day[date.getDay()]}</h3>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-40 h-40">
          <img
            src={`./WeatherIcons/${data.icon}.png`}
            alt={`WeatherIcons ${data.icon}`}
            className=""
          />
          <p>{data.icon}</p>
        </div>
      </div>
    </>
  );
}

export default Current;
