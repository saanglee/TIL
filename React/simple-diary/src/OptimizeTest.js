import { useEffect, useState } from "react";
// 리렌더링 시 프롭스가 각각 어떻게 되는 지 확인하기 위해 useEffect

// 자식 컴포넌트
const TextView = ({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text :: ${text}`);
  });
  return <div>{text}</div>;
};

const CountView = ({ count }) => {
  useEffect(() => {
    console.log(`Update :: Count :: ${count}`);
  });
  return <div>{count}</div>;
};

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
