import React, { useState, useEffect, memo } from "react";

const CounterA = ({ count }) => {
  console.log(`Updated CounterA - count: ${count}`);
  return <div>{count}</div>;
};

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`Updated CounterB - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const MemoizationObj = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <h1> --------- MemoisationObj ---------</h1>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />

        <button onClick={() => setCount(count)}>Button A</button>
      </div>
      <h2>Counter B</h2>
      <CounterB obj={obj} />
      <button onClick={() => setObj({ count: 1 })}>Button B</button>
    </div>
  );
};

export default MemoizationObj;
