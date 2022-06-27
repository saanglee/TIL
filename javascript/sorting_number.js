/*
sort() 메서드 
- 원본 배열도 정렬됨 
- 유니코드 값 순서대로 정렬 : number, string 타입 둘 다
*/
const arr1 = ['2', '1', '3', '10'];
console.log(arr1);

const sortedArr1 = arr1.sort();
console.log(sortedArr1); // [ 1, 10, 2, 3 ]
console.log(arr1); // [ 1, 10, 2, 3 ]

console.log('================================================');

/*
sort(compareFunction) 
- 원본 배열도 정렬됨
- number 큰 값, 작은 값 대로 정렬 가능
*/
const arr2 = [2, 1, 3, 10];
console.log(arr2);

let sortedArr2 = arr2.sort((a, b) => a - b);
console.log(arr2);
console.log(sortedArr2);

sortedArr2 = arr2.sort((b, a) => a - b);
console.log('내림차순: ', sortedArr2);

console.log('================================================');

// JSON.pars() 사용해서 copy한 후 sorting하기
const arr3 = [2, 1, 3, 10];
let copiedArr3 = JSON.parse(JSON.stringify(arr3));

copiedArr3 = copiedArr3.sort((a, b) => a - b);

console.log(`arr3: ${arr3}`); // 2,1,3,10
console.log(`copiedArr3: ${copiedArr3}`); // 1,2,3,10
