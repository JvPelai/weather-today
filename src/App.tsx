import React, { useState, useEffect } from 'react';
import './App.css';

const api_key = "ebe44c3dc4fb91f6b0c80c857f05ab66"

function App() {
  const [info, setInfo] = useState("");
  const [input, setInput] = useState(" "); 
  useEffect(() => {
    async function Weather(city:string){
      let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
      let info = await weatherData.json();
      console.log(info);
      setInfo(info.name)
    }
    Weather(input)
  },[input])
  
 

  return (
    <div className="App">
      <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}>
        <input type="text" name="city"></input>
        <button type="submit">search</button>
      </form>
     <p>{info}</p>
     <p>chama q é nois caraio</p>
    </div>
  );
}

export default App;
