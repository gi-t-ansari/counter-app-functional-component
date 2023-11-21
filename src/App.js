import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div id="container">
      <h1>COUNTER APP</h1>
      <h2 id="counter">{count}</h2>
      <button className="button increment" onClick={increment}>
        Increment
      </button>
      {count === 0 ? (
        <button disabled className="disabled">
          Decrement
        </button>
      ) : (
        <button className="button decrement" onClick={decrement}>
          Decrement
        </button>
      )}
      {count === 0 ? <button disabled className="disabled">Reset</button> : 
      <button className="button reset" onClick={reset}>
        Reset
      </button>}
    </div>
  );
}