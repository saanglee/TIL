# 1️⃣ React Lifecycle이란?

Lifecycle = 생애주기

탄생 : Component가 화면에 나타나는 것 , 나타나는 순간 **Mount,** 컴포넌트 마운트

변화 : state,prop등이 바뀌어 업데이트(리렌더) **Update**

죽음: Component가 화면에서 사라짐 **UnMount**

Component Lifecycle을 제어한다는 것은?

컴포넌트가 탄생, 변화, 죽음의 순간에 어떤 작업을 수행시킬 수 있다는 것
= 라이프사이클을 제어한다, 이용한다고 말할 수 있다.

---

# 2️⃣ useEffect

useEffect - 리엑트 라이프사이클 제어 하기 위한 메서드
컴포넌트가 렌더링 될 때 마다 리액트한테 어떤 일 실행시켜달라고 할 수 있음

## useEffect 구조

```jsx
import React, {useEffect} from “react”;
useEffect(()⇒{}, []) // ←원형
```

#### 두개의 파라미터를 받는다

첫번째 `{}` : 콜백함수

두번째 `[]`: Deps, 의존성 배열(dependency array)

의존성 배열의 값 중 하나라도 변화하면 첫번째 콜백함수가 수행이 된다.
변화할 때 마다 콜백함수 호출되는 것

## Mount

- useEffect에 두번째 인자(의존성 배열)에 빈 배열을 전달하면 컴포넌트 마운트 시점에만 콜백함수 호출
- 즉 “컴포넌트 마운트 시점에만” 뭔가 하고싶으면, useEffect의 첫번째인자인 콜백함수에 하고 싶은 동작을 넣고, 두번째 인자인 deps에는 빈 배열을 넣어주면 된다.

## Update

: 컴포넌트가 업뎃되는 순간을 제어해보기

- useEffect의 인자로 콜백함수만 넣고 두번째 인자는 아무것도 넣지 않는다. 컴포넌트 리렌더링 될 때 마다 콜백함수 호출된다.
- 두번째 인자 deps를 이용하면, 감지하고 싶은 것만 감지해서 그 값이 변화하는 순간에만 콜백함수를 수행하게 할 수 있다.

## Unmount

Unmount만들기

- useEffect에서 Mount를 제어하는 콜백함수(첫번째 인자)가 함수를 리턴한다. 이 함수는 언마운트 시점에 실행된다.

- 즉 useEffect의 콜백함수가 리턴하는 함수가 컴포넌트 언마운트 시점에 호출되는 함수이다.

---

[복습] useEffect - Mount, Unmount
_Lifecycle.js_

```JSX
import React, { useEffect, useState } from "react";

// 하나의 파일에 두개의 컴포넌트도 가능함
const UnmountTest = () => {
  // 컴포넌트가 Unmount되는 순간 제어하기
  useEffect(() => {
    // Mount
    console.log("Mount!");
    // Unmount
    return () => {
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {/* 단락 회로 평가? 사용..(복습하기..) - isVisible이 True일 때 UnmountTest컴포넌트 화면에 렌더링 */}
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
```
