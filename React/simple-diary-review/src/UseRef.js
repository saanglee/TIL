import React, { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // {curreng : 1}
  // console.log(countRef); // ref객체 출력
  console.log("rendering...."); // state변경 될 때 마다 출력됨

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    console.log("Ref: ", countRef.current);
    countRef.current += 1;
  };

  return (
    <div style={{ padding: 30 }}>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>

      <button onClick={increaseCountState}>State 올려~!</button>
      <button onClick={increaseCountRef}>Ref 올려~!</button>
    </div>
  );
};

export default UseRef;
