/*
const obj = {
  1:'1입니다',
  false:'거짓'
}

console.log(Object.keys(obj));   // [ '1', 'false' ] 문자열로 반환됨
console.log(Object.values(obj)); // [ '1입니다', '거짓' ]

console.log(obj[1])         // 1입니다
console.log(obj["1"])       // 1입니다
console.log(obj[false]);    // 거짓
console.log(obj["false"]);  // 거짓

// 객체 프로퍼티 키는 문자열로 접근가능하다.
// 하나 더 접근 가능한 방법이 심볼형이다.
*/

// Symbol은 유일한 식별자를 만들 때 사용한다.
// new 연산자를 사용하지 않는다.
const a = Symbol(); 
const b = Symbol(); 

console.log(a); // Symbol()
console.log(b); // Symbol()

console.log( a == b);  // false
console.log( a === b); // false


// 유일성이 보장된다. 
//  Symbol만들 때 설명을 붙여줄 수 있다. (설명을 붙여주면 디버깅 할 때 편하다.)
const id = Symbol("id");
// 설명은 문자열로 전달되는데 심볼 생성에는 어떠한 영향도 없다.
// ()안에 같은 설명을 넣어도 다른 심볼 값이다. 
console.log(id); // Symbol(id)

// 심볼을 객체의 키로 사용하보자.
const user = {
  name: 'Mike',
  age: 30,
  [id]: 'myId' // computed property name
}

console.log(user);
// { name: 'Mike', age: 30, [Symbol(id)]: 'myId' }


// key가 sympol형인 프로퍼티들은 건너뛴다.
console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); // [ 'Mike', 30 ]
console.log(Object.entries(user)); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]