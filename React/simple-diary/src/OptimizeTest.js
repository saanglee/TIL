import React, { useEffect, useState } from "react";

const TextView = React.memo(({ text }) => {
  // prop text가 바뀌지 않으면 절대 렌더링되지 않음, count올릴 땐 count만 렌더링
  useEffect(() => {
    console.log(`Update :: Text :: ${text}`);
  });
  return <div>{text}</div>;
});

const CountView = React.memo(({ count }) => {
  // prop count가 바뀌지 않으면 절대 렌더링되지 않음, text입력 시 text만 렌더링
  useEffect(() => {
    console.log(`Update :: Count :: ${count}`);
  });
  return <div>{count}</div>;
});

const OptimizeTest = () => {
  // state생성
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  // Mark up
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>➕</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
