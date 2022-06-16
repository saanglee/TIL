# React는 왜 프레임워크가 아니고 "라이브러리"일까?

## 프레임워크(Frame Work)란?

Application 개발 시 코드의 품질, 필수적인 코드, 알고리즘, 암호화, 데이터 베이스 연동 등과 같은 기능들이 어느 정도 구성 되어있는 뼈대(구조)를 제공하기위해 만들어 진 것을 프레임워크라고 합니다. 즉 개발 설계 시 제공되는 인터페이스의 집합이라고 할 수 있습니다.
(이해 잘 안됨 ..)

## 라이브러리(Library)란?

특정 기능에대한 API(도구, 함수)를 모아놓은 집합입니다.
기능을 사용하기위해 호출하는 방식을 생각하면 쉽습니다.

# React 사용하는 이유

1. 컴포넌트 기반의 화면 구성

- 컴포넌트는 역할과 기능에 따라 관리하기가 쉽고, 반복되는 부분에서 재사용할 수 있도록(코드 재사용성) 해줍니다. 컴포넌트 기반의 화면을 구성한다면 블록을 쌓듯이 컴포넌트를 쌓아 효율적으로 화면을 구성할 수 있습니다.

2. Virtual DOM으로 인한 빠른 속도

- Virtual DOM??
  - DOM을 추상화한 가상의 객체
  - UI의 가상적인 표현을 메모리에 저장하고 ReactDOM과 같은 라이브러리에 의해 실제 DOM과 동기화하는 프로그래밍 개념
  - 실제 DOM과 동기화하는 과정을 재조정이라고 함

3. SPA (Single Page Application)

- 서버의 자원을 아낄 수 있고 사용자 경험을 향상시킨다는 장점이 있습니다.
- 하지만 사용자와 인터랙션이 많은 경우 서버의 자원이 많이 사용되고 트래픽이 불필요하게 낭비될 수 있습니다.

트래픽?

## 정리

- 컴포넌트를 사용하여 유지보수가 용이합니다.
- 생태계가 넓고 다양한 라이브러리를 사용할 수 있습니다.
- Virtual DOM을 활용하여 빠른 렌더링이 가능합니다.
- 리액트 네이티브활용 앱 개발 가능

# 클래스 컴포넌트와 함수 컴포넌트의 차이

## 클래스 컴포넌트

객체지향 프로그래밍의 구조를 띄고 있습니다. state를 초기화하기 위해서는 constructor(생성자)함수를 필요로 합니다. 생성자 함수를 통해 state를 초기화해야 하기 때문에 함수 컴포넌트에 비해 코드가 길어질 수 있습니다.
render함수를 통해 JSX를 반환합니다.

## 함수 컴포넌트

반면 함수 컴포넌트는 useState와 같은 Hooks를 사용하기 때문에 생성자 함수를 통해 state를 초기화 하지 않아도 됩니다. 선언하기가 더 편하고 메모리 자원을 덜 사용한다는 장점이 있습니다.
프로젝트를 완성하여 빌드한 후에 배포할 때에 클래스 컴포넌트보다 파일의 크기가 더 작습니다.

# props와 state의 차이

## props

컴포넌트 속성을 설정할 때 사용하는 요소입니다. props값은 props가 적용된 컴포넌트를 불러와서 사용하는 부모 컴포넌트에서 설정할 수 있습니다. props가 설정된 컴포넌트는 해당 props를 읽기 전용으로만 사용할 수 있습니다.

부모에서 자식으로만 데이터를 줄 수 있습니다.

## state

컴포넌트 내부에서 바뀔 수 있는 값입니다.

# state의 불변성을 유지하라?

# Reducer내부에서 불변성을 지키는 이유는?

## 컴포넌트가 업데이트되는 경우

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때

# 컴포넌트의 라이프 사이클 메서드

# Hooks의 종류

## useState

가장 기본적인 ReactHook입니다. 첫번째 원소는 **상태값**, 두번째 원소는 **상태를 설정하는 함수**입니다. useState()안의 인자로는 초기값이 들어갑니다.

## useEffect

컴포넌트의 라이프사이클에 따라 특정 작업을 수행하도록 설정하는 Hook입니다.

1. 컴폰넌트 Mount시에 실행할 경우: dependency array을 빈 배열로 설정한다.
2. 특정 값이 업데이트 될 때 실행할 경우: dependency array에 검사할 값을 넣어준다.
3.

## useReducer

- 상태를 관리하게 될 때 useState 를 사용하는것 말고도 다른 방법이 있습니다. 바로, useReducer 를 사용하는 것. 이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.
- 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태에 반환하는 함수입니다.

Reference: https://react.vlpt.us/basic/20-useReducer.html

## useMemo

useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다.

먼저 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여 주는 함수 컴포넌트를 작성해 봅시다.

그런데 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정될 때도 우리가 만든 getAverage 함수가 호출되는 것을 확인할 수 있습니다. 인풋 내용이 바뀔 때는 평균값을 다시 계산할 필요가 없는데, 이렇게 렌더링할 때마다 계산하는 것은 낭비겠지요?

useMemo Hook을 사용하면 이러한 작업을 최적화할 수 있습니다. **렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식입니다.**

## useCallback

useMemo와 상당히 비슷한 함수이다. 주로 렌더링 성능을 최적화 해야하는 상황에서 사용한다. 이 Hook을 사용하면 만들어놨던 함수를 재사용할 수 있다.
useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 된다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 한다.

### ✅ useMemo와 useCallback의 차이

- useMemo함수는 메모이제이션된 "값"을 반환합니다.
- useCallback함수는 메모이제이션된 "함수"을 반환합니다.
- "Memoization" ? 원하는 값(<- 의존성배열dependency array안에 들어가는 값)에 변경이 없다면 이전에 연산했던 결과를 다시 사용하는 방식입니다.

불필요한 리렌더링은 성능 저하에 큰 원인이 됩니다. 특정 상황(값이 OR 함수가 변경될 때)에 맞게 리렌더링이 될 수 있도록 useMemo, useCallback함수를 사용합니다. 언제 리렌더링이 되는 지 확인하기 위해서는 의존성 배열, 즉 해당 함수의 두 번째 인자인 [] 배열 내부 값을 보면 됩니다.

## useRef

바닐라 자바스크립트에서 DOM 요소를 조작하기 위해 querySelector나 getElementById 등을 사용했다면, 리액트에서는 useRef 훅 함수를 사용합니다.
useRef는 .current 프로퍼티에 변경가능한 값을 담고있는 객체입니다
.current프로퍼티를 변경하더라도 리렌더링을 유발하지 않습니다. ref 객체 안의 값은 리액트 생명주기에 독립적이기 때문입니다