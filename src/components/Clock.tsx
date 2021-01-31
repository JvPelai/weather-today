// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from "react";
import "./style.css";
import {InfoContext, InfoContextType} from "../App";

class Clock extends React.Component<{}, {date: Date, info:InfoContextType}> {
  timerID:any;
  constructor(props:any){
    super(props);
    this.state = {
      date: new Date(InfoContext.dt*1000 + (InfoContext.timezone*1000)),
      info: InfoContext
     };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }


  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    InfoContext.dt++;
    this.setState({
      date: new Date(InfoContext.dt*1000 + (InfoContext.timezone*1000))
    });

  }

  render(){
    return(
      <div className="Clock">
        <h1> Hello, World! </h1>
        <h2> It is {this.state.date.toUTCString() + " in " + InfoContext.cityName}.</h2>
      </div>
    )
  }
}






export default Clock;