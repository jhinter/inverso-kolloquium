import React, { useState } from "react";

function Counter({ title, color, initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>{title}</h1>
      <div style={{ color: color || "black" }}>
        <strong>{counter}</strong>
      </div>
      <div>
        <button onClick={handleClick}>+1</button>
      </div>
    </>
  );
}

export default Counter;
