/*
charAt(index)
substring(start, end)
slice(start, end)
split()
map(), trim()
https://codechacha.com/ko/javascript-extract-words-from-string/
*/

// charAt() : 문자열에서 Index에 해당하는 문자 1개를 리턴

const str = "Hello, World, Javascript";

let ch = str.charAt(0);
console.log(ch); // H

ch = str.charAt(7);
console.log(ch); // W

ch = str.charAt(7, 8);
console.log(ch); // W 한개만 리턴함

// substring() : 인자로 전달된 index의 start를 포함하고 end를 포함하지 않는 범위의 문자열을 잘라서 리턴
// substring(0, 5)는 Index 0에서 4까지의(Index 5를 포함하지 않는) 문자열
let word = str.substring(0, 5);
console.log(word); // Hello

// slice() : substring()과 동일하게 인자로 전달된 범위의 문자열을 잘라서 리턴
word = str.slice(0, 5);
console.log(word); // Hello

// split() : 인자로 전달된 구분자를 기준으로 문자열을 분리하여 배열로 리턴

let words = str.split(",");
console.log(words); // [ 'Hello', ' World', ' Javascript' ] <- , 뒤 공백이 포함되어 있음

// 공백 있는 경우, map()으로 배열의 모든 요소를 순회하며 trim()을 호출하여 공백 제거
words = words.map((element) => element.trim());
console.log(words); // [ 'Hello', 'World', 'Javascript' ]
