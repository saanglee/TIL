import React, { useRef, useState } from "react";

const UseRef = () => {
  const [renderer, setRenderer] = useState(0);
  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const countRef = useRef(0);
  let countVar = 0;

  const increaseRef = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };
  const increaseVar = () => {
    countVar += 1;
    console.log(countVar);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar} `);
  };

  return (
    <div style={{ padding: 30 }}>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>Render!!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
};

export default UseRef;
