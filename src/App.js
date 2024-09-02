import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.github.com/warrengslice">
          View Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.warren-peterson.com">
          Warren Peterson
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
