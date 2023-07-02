import React, { useState } from "react";

function App() {
  const [msg, setValue] = useState("");
  const [items, setItem] = useState([]);
  function add(e) {
    setValue(e.target.value);
  }
  function adder() {
    setItem((prev) => {
      return [...prev, msg];
    });
    setValue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={add} type="text" value={msg} />
        <button onClick={adder}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((item) => {
            return <li>{item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
