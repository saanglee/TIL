5월 13일 금

# JavaScript Set 객체

- Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있다.
- 하나의 Set 내 값은 한 번만 나타난다. - 값 중복 불가
- NaN과 undefined도 Set에 저장할 수 있습니다.
  - 원래 NaN !== NaN이지만, Set에서 NaN은 NaN과 같은 것으로 간주된다.
- 생성자: `Set()`

## Set객체 사용 예제

```js
let mySet = new Set();
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 } 중복 불가
mySet.add("some text"); // Set { 1, 5, 'some text' }

let obj = { a: 1, b: 2 };
mySet.add(obj);

mySet.add({ a: 1, b: 2 });
// obj와 다른 객체를 참조함. add가능, 중복 아님

mySet.has(1); // true
mySet.has(3); // false
mySet.has(Math.sqrt(25)); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(obj); // true

mySet.size; // 4

mySet.delete(5); // set에서 5를 제거함

console.log(mySet);
// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}
```
