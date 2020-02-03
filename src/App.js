import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PhotoOfTheDay from "./components/PhotoOfTheDay";
import DatePhoto from "./components/DatePhoto";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={PhotoOfTheDay} />
      <Route path="/date" component={DatePhoto} />
    </div>
  );
}
