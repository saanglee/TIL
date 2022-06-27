const fs = require("fs");

// 백준 제출시 주석 제거
// const readFileSyncAddress = "/dev/stdin"

// VScode 테스트시 주석 제거
const readFileSyncAddress = "example.txt";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const [N, ...arr] = input;

// A,B각각 요소 하나씩 자르고 하나씩 숫자로 바꿈
const [A, B] = arr.map((i) => i.split(" ").map((i) => +i));

solution(N, A, B);

function solution(n, listA, listB) {
  let answer = 0;
  listA.sort((a, b) => b - a);
  listB.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    answer += listA[i] * listB[i];
  }
  console.log(answer);
}
