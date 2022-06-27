const fs = require('fs');
const readFileSyncAddress = 'test.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().split('\n');

// console.log(input);

let [nk, ...coins] = input;
// console.log(nk, coins);

let [n, k] = nk.split(' ').map((item) => {
  return +item;
});

coins = coins.map((item) => {
  return +item;
});

let result = 0;

while (coins.length && k > 0) {
  const coin = coins.pop();
  while (coin <= k && k > 0) {
    k = k - coin;
    result++;
  }
}

console.log(result);
