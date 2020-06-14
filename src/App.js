import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./message.js";

function App() {
  let [counter, setCounter] = useState(0);
  let [isMorning, setMorning] = useState(false);
  return (
    <div
      className={`body ${isMorning ? "Morning" : "body"} ${
        counter >= 5 ? "semi-danger" : "body"
      } ${counter >= 7 ? "danger" : " "} `}
    >
      <h1>hi this is the msg</h1>
      <Message count={counter} />
      <button onClick={() => setCounter(++counter)}>Add value</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default App;
