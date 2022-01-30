import React, { useEffect, useState } from "react";

// 5. count obj state를 prop으로 받아서 활용할 자식 컴포넌트 2개
// 7. React.memo로 감싸주기
const CounterA = React.memo(({ count }) => {
  // 8. React.memo가 잘 작동 되는 지 확인 하기 위해 useEffect적용

  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count: ${obj.count}`);
  });

  // 8-1. CounterA 업데이트 시 CounterA가 리렌더링이 됬고 그 때 count prop의 값은 : ... 이다.
  // 8-2. CounterB 업데이트 시 CounterB가 리렌더링이 됬고 그 때 obj prop의 count 프로퍼티의 값은 : ... 이다.
  return <div>{obj.count}</div>;
  // obj가 객체니까 점 표기법으로 count꺼내 씀
});
//--------------------------------------------------------------------------------

const OptimizeTest = () => {
  // 1. state 2개 생성
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    // 2. 초기값으로 객체 - count : 1이라는 프로퍼티 넣음  - 객체로 카운터를 쓸 것
    count: 1,
  });
  //--------------------------------------------------------------------------------
  return (
    <div style={{ padding: 50 }}>
      <div>
        {/* 3. count state 사용하기 위한 div */}
        <h2>Counter A</h2>
        {/* 6. 자식 컴포넌트 렌더 */}
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
        {/* 원래 count 기본값이 1인데 setCount(count)를 하면, 상태변화 함수를 실행시켰지만 원래 값이랑 똑같음 (버그같은?상태변화 일으켜봄) */}
      </div>
      <div>
        {/* 4. setObj  */}
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
              // 똑같은 count 프로퍼티를 할당, setObj 호출 - 새로운 객체 할당, 근데 같은 값임
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
