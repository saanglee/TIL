import React, { useState, useEffect } from "react";
// useEffect, Component Lifecycle 개념 익히기

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Mount!!");
  }, []);

  useEffect(() => {
    console.log("Update⭐️");
  });

  useEffect(() => {
    console.log(`"count" state is updated : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다. 0으로 초기화 합니다.");
      setCount(0);
    }
  }, [count]);

  useEffect(() => {
    console.log(`"text" state is update ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ➕
        </button>
      </div>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Lifecycle;
