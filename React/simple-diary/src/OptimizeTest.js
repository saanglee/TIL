// 컴포넌트 재사용하는 실습용 컴포넌트
import { useEffect, useState } from "react";

// 자식 컴포넌트 2개 생성
const TextView = ({ text }) => {
  return <div>{text}</div>; // text를 prop으로 받아 렌더링만
};

const CountView = ({ count }) => {
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
