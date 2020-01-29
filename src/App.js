import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PhotoOfTheDay from "./components/Card";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=wsIfZQBWeTafkOWECuHwkAJ60NVRXblh3bZMvibg"
      )
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <PhotoOfTheDay props={data} />
    </div>
  );
}
