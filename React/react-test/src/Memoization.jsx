import React, { useState, memo } from "react";

const Counter = ({ count }) => {
  return <div>{count}</div>;
};

const Text = ({ text }) => {
  return <div>{text}</div>;
};

// higher components
const MemoedCounter = memo(Counter);
const MemoedText = memo(Text);

const Memoization = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <h2>Counter componenet</h2>
        <MemoedCounter count={count} />

        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>Text componenet</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <MemoedText text={text} />
      </div>
    </div>
  );
};

export default Memoization;
