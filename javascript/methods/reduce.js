/* 배열 총합 구하기 */
const arr = [1, 2, 3, 4, 5];

// 선택 속성 다 넣은 경우
/* 
const sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(
    `accumulator ${accumulator}, currentValue ${currentValue}, currentIndex ${currentIndex}, array${array}`
  );

  return (accumulator += currentValue);
}, 0);

console.log(`sum: ${sum}`);

출력 
accumulator 0, currentValue 1, currentIndex 0, array1,2,3,4,5
accumulator 1, currentValue 2, currentIndex 1, array1,2,3,4,5
accumulator 3, currentValue 3, currentIndex 2, array1,2,3,4,5
accumulator 6, currentValue 4, currentIndex 3, array1,2,3,4,5
accumulator 10, currentValue 5, currentIndex 4, array1,2,3,4,5
sum: 15
*/

// 필요한 속성만

const sum = arr.reduce((prev, cur) => {
  return (prev += cur);
}, 0);
console.log(`sum: ${sum}`); // 15

/* 배열 평균 구하기 */

const avg = sum / arr.length;
console.log(`avg: ${avg}`); // 3

/* 배열 최대값, 최소값 구하기 */

const max = arr.reduce((prev, cur) => {
  return prev > cur ? prev : cur;
});

console.log(`max: ${max}`); // 5

const min = arr.reduce((prev, cur) => {
  return prev > cur ? cur : prev;
});
console.log(`min: ${min}`); // 1

/* 배열 음수의 개수, 양수의 개수 구하기 */

const numbers = [2, 5, -22, 63, 56, -84, -123, 464, -96, 7];

const result = numbers.reduce(
  (acc, cur) => {
    if (cur < 0) {
      acc[0]++;
    } else if (cur > 0) {
      acc[1]++;
    }
    return acc;
  },
  [0, 0]
);
console.log(`result: ${result}`); // 4, 6

// 배열을 객체로
const obj = { ...result };
console.log(obj);

const obj2 = {
  minus: result[0],
  plus: result[1],
};
console.log(obj2);

// reduceRight();
// reduce()함수와 기능은 동일, 배열 오른쪽 부터 연산 수행

const str = ['a', 'b', 'c'];

const reverse = str.reduceRight((prev, cur) => {
  return prev + cur;
}, '');

console.log(reverse); // cba
