import React, { useEffect, useState } from "react";
import { API_KEY } from "./API";
function Current({ Dataa, theme }) {
  const [data, setData] = useState({});
  useEffect(() => {
    searchCurrent();
  }, [Dataa]);

  const searchCurrent = async () => {
    const check = localStorage.getItem("current");

    if (check) {
      setData(JSON.parse(check));
    } else {
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
        localStorage.setItem('current',JSON.stringify(result.current))
        setData(result.current);
        console.log("current");
      } catch (error) {
        console.error(error);
      }
    }
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
        className={`flex justify-around w-11/12 h-40 mb-7 rounded border overflow-hidden ${
          theme ? " bg-dark_1" : " bg-slate-200"
        }`}
      >
        <div>
          <h1 className="text-2xl">{`${Dataa.place_id}, ${Dataa.country}`}</h1>
          <h2 className="text-4xl">{`${data.temperature}°C`}</h2>
          <h2>{`Feels like ${data.feels_like}°C`}</h2>
          <div>
            <h3 className="">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h3>
            <h3>{Day[date.getDay()]}</h3>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center  w-1/4">
          <img
            src={`./WeatherIcons/${data.icon_num}.png`}
            alt={`WeatherIcons ${data.icon}`}
            className=" min-w-fit"
          />
          <p>{data.icon}</p>
        </div>
      </div>
    </>
  );
}

export default Current;
