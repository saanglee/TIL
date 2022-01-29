```js
const pr = new Promise(resolve, (reject) => {
  // code
});
```

# Promise 생성

함수를 전달받는데, 인수는 resolve(작업이 성공한 경우)와 reject(작업이 실패한 경우)
이렇게 어떤 작업이 완료되었을 때 실행되는 함수를 **콜백함수**라고 함

new Promise생성자가 반환하는 Promise객체는 state와 result를 프로퍼티로 갖는다.

- state는 초기에 pending(대기)이었다가
- resolve(작업 성공`resolve(value)`)가 호출되면, fulfilled(이행됨)이 된다.
- 이때 result는 초기에 undefined였다가 resolve호출 후 resolve함수로 전달된 값(value)이 된다.
- reject(`reject(error)`)가 호출되면 state는 rejected가 되고 이때 result는 reject함수로 전달된 `err`이다.

## resolve

```js
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});
```

state:pending
result:undefined

3초 후

state:fulfilled
result:`'OK'`

## reject

```js
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error..."));
  }, 3000);
});
```

state:pending
result:undefined

3초 후

state:rejected
result:`error`

여기까지가 '판매자'의 코드
(주문을 받으면 일정 시간동안 뭔가를 하고 성공인 지 실패인 지 알려줌)

---

```js
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});
```

여기부터 '소비자'의 코드

```js
pr.then(
  function (result) {}, //이행되었을 때 실행 result에는 'OK',
  function (err) {} // 거부 되었을 때 실행 err에는 에러값이 들어옴
);
```

then 부분 다시 작성

```js
pr.then(
  function (result) {
    console.log(result + "가지러 가자.");
  },
  function (err) {
    console.log("다시 주문해야해.");
  }
);
```

위에서 resolve가 실행되었기 때문에 이 코드에서 두번째 콜백err는 실행되지 않는다

## catch, finally

### catch: 에러가 발생한 경우, reject인 경우에만 실행된다.

위 코드는 catch를 사용하여 아래처럼 바꿔 쓸 수 있다.

```js
pr.then(function (result) {}).catch(function (err) {});
```

이렇게 catch로 구분해 주는 것이 가독성이 더 좋고 첫번째 콜백함수 실행 시 에러 나는 경우도 잡아줄 수 있기 때문에 catch를 사용하는 것이 더 좋다.

## finally : 이행이든 거부든, 처리가 완료되면 항상 실행

로딩화면 같은 걸 없앨 때 유용?

```js
pr.then(function (result) {})
  .catch(function (err) {})
  .finally(function () {
    console.log("--주문 끝--");
  });
```
