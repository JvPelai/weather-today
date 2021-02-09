import React, { useContext } from 'react';
//import { getWeather } from "./api/getWeather";
import { InfoContext } from "./index";
import './App.css';

//import Clock from './components/Clock'



export interface InfoProps {
  cityName: string;
  temp: string;
  description: string;
  windSpeed: number;
  dt: number;
  timezone: number
}


export const WeatherDisplay = () => {
  var cityInput = "";
  const status:any = useContext(InfoContext);
  console.log(status)
  return (
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault(); 
        }}>
        <input onChange={(e) => {cityInput = e.target.value} } type="text" id="city"></input>
        <button type="submit">search</button>
      </form>
     <p>{status.cityName}</p>
     <p>{status.temp}</p>
     <p>{status.description}</p>
     <p>Wind: {status.windSpeed}</p>
     </div>
  );
}

export const App = () => {
  const info:any = useContext(InfoContext);
  console.log(info)
  return (
    <InfoContext.Provider value={info}>
      <WeatherDisplay />
    </InfoContext.Provider>
  )
}


