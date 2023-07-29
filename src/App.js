import React from "react";
import MyMap from "./myMap"; // Path to MyMap.js
import "./App.css";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <h1>
        iosfoajdsoifjdsijfoiasdjfiojsdoifjadoisjfioadjsfiajdsfiojasdoijfoijs
      </h1>
      <nav>
        <ul className="headerNav">
          <li>
            <Link to="section1" smooth={true} duration={500}>
              Header 1
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Header 2
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Operation BigFoot</h1>
      {/* need to wrap map in map container div*/}

      <div id="section1" className="sectionStyle">
        <h2>Section 1</h2>
        <p>
          width: 100%;width: 100%;width: 100%;width: 100%;width: 100%;width:
          100%;width: 100%;width: 100%;width: 100%;width: 100%;width: 100%;
        </p>
      </div>

      <div id="section2" className="sectionStyle">
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
      </div>
      <MyMap />
      <div className="mapStyle"></div>
    </div>
  );
}

export default App;
