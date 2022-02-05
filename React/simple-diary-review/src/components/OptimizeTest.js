// 컴포넌트 재사용 연습
import React, { useState } from "react";

// 자식 컴포넌트
const CounterA = React.memo(({ count }) => {
  return <div>{count}</div>;
});
const CounterB = React.memo(({ obj }) => {
  return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div style={{ padding: 20 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={setCount(count)}>A btn</button>
        {/* prop으로 같은 값이 전달됨 */}
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button onClick={setObj({ count: obj.count })}>B btn</button>
        {/* prop으로 같은 값이 전달됨 */}
      </div>
    </div>
  );
};

export default OptimizeTest;
