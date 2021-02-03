// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component, useEffect, useState } from "react";
import "./style.css";


export default function Clock(props:any){
  const [info,setInfo] = useState(props.state);
  const [date,setDate] = useState(new Date(info.dt*1000 + (info.timezone*1000)).toUTCString());
  useEffect(() => {
    async function UpdateTime() {
        setInfo({
          cityName: props.state.cityName,
          temp: props.state.temp,
          description: props.state,
          windSpeed: props.state.windSpeed,
          dt: props.state.dt,
          timezone: props.state.timezone
        })
    }
    setTimeout(() => {
      UpdateTime()
      setDate(new Date((info.dt)*1000 + (info.timezone*1000)).toUTCString())
      props.state.dt+=1
    },2000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[info])
 
  return(
    <div className="Clock">
      <h1> Hello, World! </h1>
      <h2> It is {date + " in " + info.cityName}.</h2>
    </div>
  )
}


