import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });

  return <div>{count}</div>;
});

// areEqual함수를 사용해 CounterB컴포넌트에서  obj프롭을 얕은 비교를 하지 않도록 하여 렌더링 최적화
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true; // 이전 프롭스와 현재프롭스가 같다 => 리렌더링 하지 않음
  }
  return false; // count달라지면 리렌더링
};

const MemoizedCounterB = React.memo(CounterB, areEqual); // CounterB는 areEqual함수의 판단에 따라서 리렌더링 할 지 말 지 결정

//--------------------------------------------------------------------------------

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  //--------------------------------------------------------------------------------
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
