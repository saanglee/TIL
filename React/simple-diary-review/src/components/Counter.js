import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add1 = () => {
    setCount(count + 1);
  };
  const add10 = () => {
    setCount(count + 10);
  };
  const add100 = () => {
    setCount(count + 100);
  };
  const add1000 = () => {
    setCount(count + 1000);
  };
  const add10000 = () => {
    setCount(count + 10000);
  };

  return (
    <div style={{ padding: 30 }}>
      <hr />
      <h2>Counter.js</h2>
      <div>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={add1}>add 1</button>
      </div>
      <div>
        <button onClick={add10}>add 10</button>
      </div>
      <div>
        <button onClick={add100}>add 100</button>
      </div>
      <div>
        <button onClick={add1000}>add 1000</button>
      </div>
      <div>
        <button onClick={add10000}>add 10000</button>
      </div>
    </div>
  );
};
export default Counter;
