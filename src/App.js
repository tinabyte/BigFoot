import React from "react";
import MyMap from "./myMap"; // Path to MyMap.js
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Operation BigFoot </h1>
      {/* need to wrap map in map container div*/}
      <MyMap />
      <div className="mapStyle"></div>
    </div>
  );
}

export default App;
