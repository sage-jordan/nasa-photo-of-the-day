import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function PhotoOfTheDay() {
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
      .catch(err => console.log(`In Axios: ${err.message}`));
  }, []);

  return <Card props={data} />;
}
