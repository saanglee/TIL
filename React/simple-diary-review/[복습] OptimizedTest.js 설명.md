# React.memo

컴포넌트로 이전과 변경 없는 프롭스 받을 시 해당 컴포넌트 리렌더링 하지 않는다
고차컴포넌트로 리렌더링 하지 않을 컴포넌트를 감싸주면, 해당 컴포넌트의 prop가 바뀌지 않는 한 리렌더링 하지 않는 강화된 컴포넌트를 돌려준다.
물론 자기자신의 state가 바뀌면 그건 리렌더 됨

A btn 누름 → onClick setCount(count) 호출 → 상태변화 수행은 하지만 ** 상태 변경 없음** 값이 1 그대로 니까. ➡️✅ 콘솔에 아무것도 출력이 안됨 변경된 것 없으니까 리렌더 안되는 것

B btn 누름 → counterB 업데이트 됬다고 출력 됨 : 리렌더링 된 것 → 왜 리렌더링? prop인 obj가 **객체**이기 때문

✅ JS에서는 객체를 비교 시, **얕은 비교**를 하기 때문에 이런 문제가 발생

## 얕은 비교?

```js
let a = { count: 1 };
let b = { count: 1 };
```

#### a 와 b에 각각 동일한 객체 할당 - JS는 두 객체가 다르다고 판단. 왜?

- 이유는 JS가 객체나 함수, 배열 등 비원시타입의 자료형을 비교할 때, 값에 의한 비교가 아니라 **주소**에 의한 비교인 **얕은 비교**를 하기 때문!

- 객체는 생성되자마자 고유한 메모리 주소를 갖음.
- 얕은 비교라는 것은 객체의 **값**을 비교하는 것이 아니라, 이 두 객체가 같은 **주소**에 있냐를 비교하기 때문에 값이 같더라도 다르다고 판단하는 것!!

## areEqual 함수

??? (아직 잘 이해 안됨ㅠ)

- areEqual함수를 사용해 CounterB컴포넌트에서 obj프롭을 얕은 비교를 하지 않도록 함
- 렌더링 최적화..

```jsx
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

const MemoizedCounterB = React.memo(CounterB, areEqual);
```

CounterB는 areEqual함수의 판단에 따라서 리렌더링 할 지 말 지 결정
