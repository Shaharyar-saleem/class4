import React, { useState } from "react";
import "./App.css";
import Message from "./message.js";

function App() {
  let [counter, setCounter] = useState(0);
  return (
    <div
      className={`body ${counter >= 5 ? "semi-danger" : "body"} ${
        counter >= 7 ? "danger" : " "
      } `}
    >
      <h1>hi this is the {counter < 5 ? "Safe State" : "Danger State"}</h1>
      <Message count={counter} />
      <button onClick={() => setCounter(++counter)}>Add value</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default App;
