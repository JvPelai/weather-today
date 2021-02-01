// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component, useEffect, useState } from "react";
import "./style.css";
import {InfoContext} from "../App";

export default function Clock(){
  const [info,setInfo] = useState(InfoContext);
  const [date,setDate] = useState(new Date(info.dt*1000 + (info.timezone*1000)));
  useEffect(() => {  
    setInterval(() => {
      setInfo({
        cityName: InfoContext.cityName,
        temp: InfoContext.temp,
        description: InfoContext.description,
        windSpeed: InfoContext.windSpeed,
        dt: InfoContext.dt,
        timezone: InfoContext.timezone,
      })
      setDate(new Date(info.dt*1000 + (info.timezone*1000)))
  },1000)
    
  },[info.cityName, info.temp,info.description, info.windSpeed, info.dt, info.timezone])

  
  return(
    <div className="Clock">
      <h1> Hello, World! </h1>
      <h2> It is {date.toUTCString() + " in " + info.cityName}.</h2>
    </div>
  )
}


