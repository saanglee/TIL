5월 13일 금

# JavaScript 객체

```js
const obj = {}; // 객체 생성
// 또는 let obj = new Object();

obj["key1"] = 10; // key: value 입력

console.log(obj); // { key1: 10 }

// key값으로 vlaue 찾기
console.log(obj["key1"]); // 10

obj["key2"] = "value2";

console.log(obj); //{ key1: 10, key2: 'value2' }
```

## Object로 Boolean 객체 생성하기

```js
let obj = new Object(true);
console.log(obj); // [Boolean: true]
```

```js
let obj = new Object(Boolean());
console.log(obj); // [Boolean: false]
```
