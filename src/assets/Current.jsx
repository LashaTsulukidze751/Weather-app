import React, { useEffect, useState } from "react";
import { API_KEY2 } from "./API";
import { GiWindHole } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa";

function Current({ Dataa, theme }) {
  const [data, setData] = useState({});
  const [wind, setWind] = useState({});

  useEffect(() => {
    searchCurrent();
  }, [Dataa]);

  const searchCurrent = async () => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${Dataa.place_id}&timezone=auto&language=en&units=auto`;
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
      setData(result.current);
      setWind(result.current.wind);
    } catch (error) {
      console.error(error);
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
  const getAngel = () => {
    if (wind && wind.angle !== undefined) {
      return `rotate(${wind.angle}deg)`;
    } else {
      return "";
    }
  };

  return (
    <div className="w-11/12 flex justify-center">
      <div
        className={`flex justify-around w-11/12 h-40 m-7 rounded border relative bg-opacity-50
                  ${theme ? " bg-dark_1" : " bg-slate-200 border-orange-500"}
                  md:w-9/12 lg:w-7/12 lg:h-56 lg:p-4 xl:w-5/12`}
      >
        <p
          className={`absolute left-1 rounded-t -top-[26px] font-bold text-sm p-0.5 border border-b-0 bg-opacity-50
          ${theme? "bg-dark_1": " bg-slate-200 border-orange-500 text-orange-500"}`}
        >
          Current Weather
        </p>
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">{`${Dataa.place_id}, ${Dataa.country}`}</h1>
          <h2 className="text-4xl lg:text-5xl">{`${data.temperature}°C`}</h2>
          <h2 className="lg:text-lg">{`Feels like ${data.feels_like}°C`}</h2>
          <div className="lg:text-lg">
            <h3>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h3>
            <h3>{Day[date.getDay()]}</h3>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center  w-1/4 ">
          <img
            src={`/src/assets/WeatherIcons/${data.icon_num}.png`}
            alt={`Weather ${data.icon}`}
            className="w-fit md:w-4/6 lg:w-5/6 xl:w-5/6"
          />
          <p className="font-bold lg:font-lg">{data.icon}</p>
        </div>
      </div>
      <div
        className={` hidden lg:flex justify-around w-11/12 h-40 m-7 rounded border relative bg-opacity-50
                  ${theme ? " bg-dark_1" : " bg-slate-200 border-orange-500"}
                  md:w-9/12 lg:w-7/12 lg:h-56 lg:p-4 xl:w-5/12`}
      >
        <p
          className={`absolute left-1 rounded-t -top-[26px] font-bold text-sm p-0.5 border border-b-0 bg-opacity-50
          ${theme? "bg-dark_1": " bg-slate-200 border-orange-500 text-orange-500"}`}
        >
          Wind and Pressure
        </p>
        <div className=" h-full flex items-end  w-1/6  justify-between">
          <div className="h-full flex items-end relative">
            <GiWindHole className=" fill-white absolute top-[44px] -left-[28px] w-16 h-16 animate-spin-rev lg:top-[58px]" />
            <div className=" w-2 h-3/6 bg-white rounded-t-3xl relative bottom-2"></div>
          </div>
          <div className="h-full flex items-end relative">
            <GiWindHole className=" fill-white absolute top-[24px] -left-[28px] w-16 h-16 animate-spin-rev lg:top-[34px]" />
            <div className=" w-2 h-4/6 bg-white rounded-t-3xl"></div>
          </div>
          <div className="h-full flex items-end relative">
            <GiWindHole className="fill-white absolute top-[44px] -left-[30px] w-16 h-16 animate-spin-rev lg:top-[58px]" />
            <div className=" w-2 h-3/6 bg-white rounded-t-3xl relative bottom-2"></div>
          </div>
        </div>
        <div className="lg:text-lg">
          <p>Wind speed: {wind.speed} kph</p>
          <p>pressure: {data.pressure} kpa</p>
          <p>humidity: {data.humidity}%</p>
          <p>wind direction: {wind.dir}</p>
          <div className="w-14 h-14 border flex rounded-full items-center justify-center border-red-500">
            <div className={`w-px h-px relative `} style={{ transform: getAngel()}}  >
              <FaArrowUp className=" absolute -top-7 -left-[14px]  w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
