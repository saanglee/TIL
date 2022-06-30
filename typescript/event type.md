> 이 포스팅은 [felixgerschau](https://felixgerschau.com/react-typescript-events/) 의 포스팅을 번역하였습니다.

브라우저 안에서의 JavaScript는 JavaScript가 사용할 수 있는 HTML 이벤트들을 이미 포함하고 있습니다. 예를 들어, 많이 사용되는 이벤트로는 `onclick` 또는 `onchange`같은 것들이 있죠.

하지만 이벤트가 동작하는 과정은 브라우저마다 다릅니다. 리액트는 모든 브라우저에서 동일하게 작동할 수 있는 이벤트를 만들었는데, 바로 기본 이벤트를 감싸는 합성 이벤트(synthetic event)라는 것입니다.

리액트에서 이벤트 핸들러를 추가할 때 우리는 타입스크립트가 DOM 라이브러리에서 포함하는 타입들을 사용하지 못합니다. 왜냐하면 리액트는 기본 이벤트들에 래퍼를 추가(synthetic event) 하고 있기 때문이죠. 대신에 우리는 리액트가 정의한 타입을 사용해야 합니다.

## React event types

우리는 이벤트에 타입스크립트의 타입 정의를 사용하지는 못하지만, 다행히 리액트는 모든 synthetic event에 상응하는 타입 정의를 갖고 있습니다.

아래 코드에서는 input 요소의 onChange이벤트를 넣고 있습니다.

```tsx
<input value={value} onChange={handleInputChange} />
```

함수 handleInputChanged 의 타입은 리액트의 타입 정의와 일치해야합니다. 여기서 리액트의 ChangeEvent를 사용할 수 있죠.

```tsx
import React, { ChangeEvent } from 'react';

const App = () => {
  const [value, setValue] = React.useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>Hi {value} 👋</h1>
      <input value={value} onChange={handleInputChange} />
    </>
  );
};
```

모든 합성 이벤트의 타입은 제네릭(generic)타입입니다. 그래서 이렇게 <> 괄호 안에 작성합니다.
TypeScript는 제네릭 타입 정의를 DOM 라이브러리에 포함시키기 때문에 `<HTMLInputElement>` 제네릭 타입을 따로 import 해올 필요가 없습니다.

## Alternative interfaces

함수의 인자에 타입을 적용하는 대신 handler함수 자체에 타입을 적용할 수 도 있습니다. (아래 1, 2 코드는 같은 동작을 합니다.)

```tsx
import React, { ChangeEventHandler, ChangeEvent } from 'react';

// 1. event 인자에 타입 적용
const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {

// 2. 함수에 타입 적용
const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {

```

## 타입스크립트에 맞는 타입이 없다면?

사용하려는 이벤트 핸들러에 대한 타입정의가 없는 경우에는 리액트의 SyntheticEvent타입을 사용할 수 있습니다.

모든 이벤트는 이 SyntheticEvent타입을 기반으로 합니다. 따라서 모든 이벤트와 호환이 됩니다.

## Tip: 이벤트 타입을 찾는 방법

당연히 모든 이벤트 타입을 외울 필요는 없습니다.

어떤 타입을 사용해야 할 지 모를 경우, JSX 속성을 추가한 다음 에디터의 타입 정의된 파일로 이동할 수 있습니다.
