import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PhotoOfTheDay from "./components/Card";
import DatePicker from "react-date-picker";

export default function App() {
  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date());

  const onChange = date => setDate({ date });

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=wsIfZQBWeTafkOWECuHwkAJ60NVRXblh3bZMvibg"
      )
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(`In Axios: ${err.message}`));
  }, []);

  return (
    <div className="App">
      <DatePicker onChange={onChange} value={date} />
      <PhotoOfTheDay props={data} />
    </div>
  );
}
