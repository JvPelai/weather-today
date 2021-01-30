// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from "react";
import "./style.css";


class Clock extends React.Component<{}, {date: Date}> {
  timerID:any;
  constructor(props:any){
    super(props);
    this.state = {date: new Date()}
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
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div className="clockDiv">
        <h1> Hello, World! </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}






export default Clock;