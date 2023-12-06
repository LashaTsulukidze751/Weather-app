import React, { useEffect, useState } from "react";
import { API_KEY } from "./API";
function Current({ Dataa, theme }) {
  const [data, setData] = useState({});
  useEffect(() => {
    searchCurrent();
  }, [Dataa]);

  const searchCurrent = async () => {
    const check = localStorage.getItem("current");

    // if (check) {
    //   setData(JSON.parse(check));
    // } else {
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
     //   localStorage.setItem("current", JSON.stringify(result.current));
        setData(result.current);
        console.log("current");
      } catch (error) {
        console.error(error);
      }
   // }
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
        className={`flex justify-around w-11/12 h-40 m-7 rounded border relative
                  ${theme ? " bg-dark_1" : " bg-slate-200 border-orange-500"}
                  md:w-9/12 lg:w-7/12 lg:h-56 lg:p-4 xl:w-5/12`}
      >
        <p className={`absolute left-1 rounded-t -top-6 font-bold text-sm p-0.5 border border-b-0 
          ${theme? "bg-dark_1": " bg-slate-200 border-orange-500 text-orange-500"}`}
        >
          Current Weather
        </p>
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">{`${Dataa.place_id}, ${Dataa.country}`}</h1>
          <h2 className="text-4xl lg:text-5xl">{`${data.temperature}°C`}</h2>
          <h2 className="lg:text-lg">{`Feels like ${data.feels_like}°C`}</h2>
          <div className="lg:text-lg">
            <h3 >{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h3>
            <h3 >{Day[date.getDay()]}</h3>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center  w-1/4 ">
          <img
            src={`./WeatherIcons/${data.icon_num}.png`}
            alt={`Weather ${data.icon}`}
            className="w-fit md:w-4/6 lg:w-5/6 xl:w-5/6"
          />
          <p className="font-bold lg:font-lg">{data.icon}</p>
        </div>
      </div>
    </>
  );
}

export default Current;
