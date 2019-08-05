import  React, { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";
import Card from "./components/Card";


export default function App () {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(res => {
              console.log(res)
              setData(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <Card 
                copyright={data.copyright}
                title={data.title}
                date={data.title}
                img={data.url}
                explanation={data.explanation} 
                />
        </div>
    );
};
