/*
includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
Parameter: valueToFind, fromIndex(optional)
Return Value: Boolean
*/

console.log([1, 2, 3].includes(2)); // true

const arr = ['a', 'b', 'c'];
arr.includes('c', 3); // true
arr.includes('c', 100); // false
