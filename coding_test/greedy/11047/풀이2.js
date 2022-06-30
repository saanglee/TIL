const fs = require('fs');
const readFileSyncAddress = 'test.txt';
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

/*
동전 값 내림차순 정렬
배열 순회
- k보다 큰 동전 -> continue, 
- k보다 작은 동전 -> 최대 개수만큼 빼준다?
ex) k 4500원, 동전 [5000, 1000, 500]인 경우 
  : 5000은 넘기고(continue), 
    -> 1000에서 4번 빼주고(4500/1000 에서 몫, 남은 값 500원) 
    -> 500에서 1번 빼주는 것이 최적
*/

console.log(input);

let [n, k, ...coins] = input;

coins.sort((a, b) => b - a); // 내림차순 정렬
console.log(`coins: ${coins}`);

let count = 0;

for (let i = 0; i < coins.length; i++) {
  if (k < coins[i]) {
    // i번째 coin이 k보다 큰 경우 - 넘김
    continue;
  } else {
    const quotient = Math.floor(k / coins[i]);
    /*
    console.log(`coins[i]: ${coins[i]}`);
    console.log(`k: ${k}원`);
    console.log(`quetient: ${quotient}`);
    */
    k -= quotient * coins[i];
    count += quotient;

    if (k === 0) {
      break;
    }
  }
}

console.log(`count: ${count}`);
