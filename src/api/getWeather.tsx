import env from "react-dotenv";
import { InfoProps } from "../App";

const apiKey = env.API_KEY;

export const getWeather = async (city:string):Promise<InfoProps> => {
  let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  let info = await weatherData.json();
  info = {
    cityName: info.name,
    temp: (info.main.temp - 273.15).toFixed(2) + "°C",
    description: info.weather[0].description,
    windSpeed: info.wind.speed,
    dt: info.dt,
    timezone: info.timezone
  }
  return info
}