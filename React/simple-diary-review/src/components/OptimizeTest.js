// 컴포넌트 재사용 연습
import React, { useEffect, useState } from "react";

// 자식 컴포넌트
const TextView = React.memo(({ txt }) => {
  useEffect(() => {
    console.log(`Update :: txt :: ${txt}`); // 렌더링 마다 콜백 호출
  });
  return <div>{txt}</div>;
});
const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: count :: ${count}`); // 렌더링 마다 콜백 호출
  });
  return <div>{count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [txt, setTxt] = useState("");
  return (
    <div style={{ padding: 20 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ➕
        </button>
      </div>
      <div>
        <h2>text</h2>
        <TextView txt={txt} />
        <input
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default OptimizeTest;
