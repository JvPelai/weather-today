import React, { useState, useEffect } from 'react';
import './App.css';
import env from "react-dotenv";


const apiKey = env.API_KEY;


function App() {
  var cityInput = "";
  const [info, setInfo] = useState({
    cityName: "Piracicaba",
    temp: "0",
    description: "",
    windSpeed: 0
  });
  const [input, setInput] = useState("Piracicaba"); 

  useEffect(() => {
    async function Weather(city:string){
      let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      let info = await weatherData.json();
      console.log(info);
      setInfo({
          cityName: info.name,
          temp: (info.main.temp - 273.15).toFixed(2) + "°C",
          description: info.weather[0].description,
          windSpeed: info.wind.speed
        })
    }
    Weather(input)
  },[input])
  
 

  return (
    <div className="App">
      <form onSubmit={(e) => {
          e.preventDefault();
          setInput(cityInput);
        }}>
        <input onChange={(e) => {cityInput = e.target.value} } type="text" id="city"></input>
        <button type="submit">search</button>
      </form>
     <p>{info.cityName}</p>
     <p>{info.temp}</p>
     <p>{info.description}</p>
     <p>Wind: {info.windSpeed}</p>
    </div>
  );
}

export default App;
