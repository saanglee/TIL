// reduce 메서드

let arr = [1, 2, 3, 4, 5];

// 배열 총합 구하기
const result = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(
    `accumulator ${accumulator}, currentValue ${currentValue}, currentIndex ${currentIndex}, array${array} `
  );
  return (accumulator += currentValue);
}, 0);
console.log(`result: ${result}`);

// 최대값 구하기
let max = arr.reduce((previous, current) => {
  return previous > current ? previous : current;
});
console.log(`max: ${max}`);

let min = arr.reduce((previous, current) => {
  return previous > current ? current : previous;
});
console.log(`min: ${min}`);

// 음수와 양수의 개수 세기
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
console.log(`result2: ${result2}`); // [4,6]
