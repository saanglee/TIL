import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  // 렌더링 될 때  마다 실행됨
  useEffect(() => {
    console.log("Rendering ~");
  });

  return (
    <div style={{ padding: 30 }}>
      <hr />
      <h2>UseEffect.js</h2>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
    </div>
  );
};

export default UseEffect;
