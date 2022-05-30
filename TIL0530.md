5월 30일 월요일

# JavaScript 정렬방법

```js
const numbers = [15, 52, 23, 11, 9];

console.log(numbers.sort()); // [ 11, 15, 23, 52, 9 ]

console.log(numbers.sort((a, b) => a - b)); // [ 9, 11, 15, 23, 52 ]

console.log(numbers.sort((b, a) => a - b)); // [ 52, 23, 15, 11, 9 ]
```

- 자바스크립트에서 배열을 정렬 할 때는 먼저 요소를 문자열로 변환한다. 그런 다음 UTF-16 코드 포인트를 비교하여 요소를 정렬한다.
- 이때 숫자의 경우 예기치 않은 순서가 발생할 수 있다.
- 따라서 기본 동작을 변경하고 `Array.sort`메서드에 함수를 전달한다. 항상 한 번에 두 요소를 비교하여 작동한다.
- 결과가 0보다 작으면 a먼저 표시되고 결과가 0보다 크면 b먼저 표시된다.
- 원본 배열인 numbers가 정렬이 되고, 리턴하는 값 또한 원본 배열인 numbers을 가리키고 있음에 유의해야 한다.

Reference: https://hohoya33.tistory.com/139

# Math.pow()

`square: 제곱하다 -> sq`

```js
console.log(Math.pow(2, 3)); // 2를 3번 곱한 값 반환 8
console.log(2 * 2 * 2);
console.log(Math.pow(3, 2)); // 3을 2번 곱한 값 반환 9
console.log(Math.pow(7, 4)); // 7을 4번 곱한 값 반환 2401
console.log(7 * 7 * 7 * 7);
```

```js
function one(n) {
  function two(value) {
    const squared = Math.pow(value, n);
    return squared;
  }
  return two;
}
const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
```

# Set 객체

## set객체 생성

```js
let mySet = new Set();
```

### set 메서드

```js
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
let obj = { a: 1, b: 2 };
mySet.has(1); // true
mySet.add(obj);
```

### set 반복

```js
for (let item of mySet) {
  console.log(item);
}
```

### Set 객체를 배열 객체로 반환

```js
let myArr = Array.from(mySet);
console.log(myArr); // [ 1, 5, 'some text', { a: 1, b: 2 } ]
```

### 배열 객체를 Set객체로

```js
let mySet2 = new Set([1, 2, 2, 3, 4]);
console.log(mySet2); // Set(4) { 1, 2, 3, 4 }
console.log(mySet2.size); // 4
```

Reference: MDN https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

---

# reduce 메서드

## 배열 총합 구하기

```js
let arr = [1, 2, 3, 4, 5];

const result = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(
    `accumulator ${accumulator}, currentValue ${currentValue}, currentIndex ${currentIndex}, array${array} `
  );
  return (accumulator += currentValue);
}, 0);
console.log(`result: ${result}`);
```

위 첫번째 console.log의 출력값

```txt
accumulator 0, currentValue 1, currentIndex 0, array1,2,3,4,5
accumulator 1, currentValue 2, currentIndex 1, array1,2,3,4,5
accumulator 3, currentValue 3, currentIndex 2, array1,2,3,4,5
accumulator 6, currentValue 4, currentIndex 3, array1,2,3,4,5
accumulator 10, currentValue 5, currentIndex 4, array1,2,3,4,5
```

두번째 console.log의 출력값 result

```
result: 15
```

## 최대값, 최소값 구하기

```js
let max = arr.reduce((previous, current) => {
  return previous > current ? previous : current;
});
console.log(max); // 5

let min = arr.reduce((previous, current) => {
  return previous > current ? current : previous;
});
console.log(min); // 1
```

## 음수와 양수의 개수 세기

```js
const numbers = [2, 5, -22, 63, 56, -84, -123, 464, -96, 7];
const result2 = numbers.reduce(
  (accumulator, currentValue) => {
    if (currentValue < 0) {
      accumulator[0]++;
    } else if (currentValue > 0) {
      accumulator[1]++;
    }
    return accumulator;
  },
  [0, 0]
);
console.log(result2); // [4,6]
```

---

1026번
제일 작은값 \* 제일 큰 값 = 제일 작은 합 나올 수 있음
그래서 A 배열은 오름차순으로, B는 내림차순으로 정렬해서 풀이

코테는 문제 양 때려 밖는 수 밖에 없음
코테 = 풀이 아이디어 떠올리는 것..

```js
const arr = [1, 2, 3, 4];
const [T, tempArr] = arr;
(T = 1), (tempArrarr = 2), 3, 4;
```
