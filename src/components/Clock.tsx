// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import {InfoContext} from "../index"
import "./style.css";


export default function Clock(){
  const { info, changeCity } = useContext(InfoContext);
  const [date,setDate] = useState(new Date(info.dt*1000 + (info.timezone*1000)).toUTCString());
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date((info.dt)*1000 + (info.timezone*1000)).toUTCString())
      info.dt+=1
    },2000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[date])
 
  return(
    <div className="Clock">
      <h1> Hello, World! </h1>
      <h2> It is {date + " in " + info.cityName}.</h2>
    </div>
  )
}


