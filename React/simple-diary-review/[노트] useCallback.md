# 컴포넌트 최적화

컴포넌트 최적화 하기위해서는 어떤 컴포넌트가 최적화가 필요한 지 찾아야 한다.

react developer tools 의 “ highlights render “ 기능 이용 : 어떤 컴포넌트가 낭비되고 있는 지 확인가능!

## 컴포넌트 최적화 해야 하는 이유

: 리렌더링 안해도 되는 다른 컴포넌트가 같이 리렌더링이 됨 - 낭비

**그럼 컴포넌트는 언제 렌더링 되지?**

- 해당 컴포넌트의 State에 변화가 생겼거나,
- 받은 prop에 변경이 있거나,
- 부모컴포넌트가 리렌더링 되는 경우 - 렌더링

문제 상황 : 일기 리스트 중, 일기 아이템 하나 삭제 시 `DiaryEditor` 컴포넌트 까지 같이 리렌더링이 된다.

`DiaryEditor` 컴포넌트

- onCreate함수( [저장하기] 클릭 시 data에 item추가 하는 기능) 하나를 prop으로 받고있음
- ▶️ **React.memo**를 활용하여 DiaryEditor 컴포넌트 최적화 해보기

_DiaryEditor.js_

React.memo 로 컴포넌트 전체 감싸주지 말고, (코드 기니까)

```jsx
export default React.memo(DiaryEditor);
```

이렇게 하면됨

❗️DiaryEditor 컴포넌트의 불필요한 리렌더링

- App컴포넌트가 마운트 되는 시점에 호출한 getData() 함수에서 filter 후 결과값을 `setData(initData)`로 전달 → data State 업데이트 → 리렌더링
- 앱 컴포넌트는 마운트 되자마자 2번의 렌더링이 된 것
  - ✅ 이 때 DiaryEditor 컴포넌트가 App 컴포넌트로부터 전달받는 프롭인 onCreate함수도 App이 렌더링 2번 되면서 함께 2번 생성됨 → 그래서 DiaryEditor도 쓸데없이 리렌더링이 되는 것!
    - 그런데, App 리렌더링 시 onCreate함수는 변경되는 부분이 없음
    - JS 비원시타입 자료형은 React.memo에서 얕은 비교가 된다.
    - 그래서 렌더링 될 때 마다 onCreate 함수는 이전과 다른 함수로 인식되서? 렌더링이 또 되는 것
    - App 컴포넌트가 리렌더링 될 때 마다 계속 onCreate 도 재생성, 그리고 DiaryEditor도 리렌더링
    - onCreate 함수가 재생성 되지 않아야 DiaryEditor 컴포넌트 리렌더링이 되지 않음 - 컴포넌트 최적화 필요

## useMemo

- 위 상황에서는 useMemo 사용하면 안됨
- useMemo는 반환하는 값을 (리렌더 하지 않고?) 다시 사용할 수 있도록, deps를 기준으로. Memoization을 도와주는 기능. useMemo는 함수가 아니라 “값”을 반환함
- onCreate”함수” 그대로 DiaryEditor로 보내야 함

# useCallback

## useCallback구조

[https://ko.reactjs.org/docs/hooks-reference.html#usecallback](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e4109c8-3f2a-47dd-ba5b-3a321c128219/Untitled.png)

- 구조는 useEffect와 useMemo와 같음
- useCallback은 메모이제이션된 “ 콜백 함수 “를 반환해준다.
- 그래서 deps(두번째 인자)에 들어있는 값이 변하지 않는 한, 첫번째 인자인 콜백함수를 계속 재사용 할 수 있다. (✅리렌더링이 안된다!)
- ✅ deps의 값이 바뀌면, 콜백함수를 재사용 하지 않는다. = 리렌더링 된다.

## onCreate함수에 useCallback 적용

onCreate함수에 useCallback 적용해본다. 두번째 인자는 빈 배열 → 마운트 되는 시점에 onCreate함수 한번만 생성하고 그 다음부터는 첫번째 만든 이 함수를 계속 재사용 하도록 함

### 함수형 update

setState 상태변화 함수: 이 함수에 “값"을 전달하면, 이 값이 state로 업데이트됨
여기서 상태변화 함수에 값이 아니라 “함수”를 전달하는 것 = “ 함수형update “

- setData함수에 인자로 data를 받아서, newItem을 추가한 data 배열을 리턴하는 콜백함수를 전달한다.

```jsx
const onCreate = useCallback((author, content, emotion) => {
  const created_date = new Date().getTime();
  const newItem = {
    author,
    content,
    emotion,
    created_date,
    id: dataId.current,
  };
  dataId.current += 1;
  setData((data) => [newItem, ...data]);
}, []);
```
