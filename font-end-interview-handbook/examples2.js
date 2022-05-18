/*
const arr = [1, 2, 3, 4];

const newArr = arr.forEach((currentElem, index, array) => {
    console.log(`currentElem: ${currentElem}, index: ${index}, array: ${array}`)
});

console.log("newArr = ",newArr); // undefined
*/

const arr = [5,6,7,8];

const newArr = arr.map((currentElem, index, array) => {
    console.log(`currentElem: ${currentElem}, index: ${index}, array: ${array}`);
    return currentElem * 2
});

// 새로운 배열을 반환한다.
console.log(newArr); 
// 원본 배열을 수정하지 않는다.
console.log(arr);
