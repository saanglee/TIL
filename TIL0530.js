let names = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
let resultObj = {};
let winnerName = "";

console.log(names);

for (index in names) {
  let name = names[index];
  // console.log(name, index);
  resultObj[name] = resultObj[name] === undefined ? 1 : (resultObj[name] += 1);
}
console.log(resultObj); // { '원범': 2, '혜원': 4, '유진': 2 }
console.log(Object.keys(resultObj)); // [ '원범', '혜원', '유진' ]

winnerName = Object.keys(resultObj).reduce((a, b) => {
  return resultObj[a] > resultObj[b] ? a : b;
});
console.log(winnerName);

console.log("=======================================");

// let arr = "A B C C D".split(" ");
// let obj = {};

// for (index in arr) {
//   // console.log(index);
//   let alphabet = arr[index];
//   // console.log(alphabet, index);
//   obj[alphabet] = 1;
//   // console.log(obj);
// }

// reduce 함수
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0);
