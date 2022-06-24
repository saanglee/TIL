// let list = [3, 2, 7, 6, 8, 4];
// let p = 6;
// let les = [];
// list.forEach((x) => {
//   if (x < p) les.push(x);
// });
// les;
// console.log(list.map((x) => x < p));

// 3 2 4
/*
function reverse(list) {
  list.forEach((x, i) => {
    list[list.length - i - 1] = x;
  });
}
let list = [1, 2, 3, 4];
reverse(list);
console.log(list);

let list = [[1, 2], [3], [4, 5, 6]];
console.log(list.map((x) => [...x]));



let list = [1, 2, 3, 4, 5];
let st = true;
list.forEach((x, i) => {
  if (i < list.length - 2) st = st && x + 1 === list[i + 1];
});
st;
console.log(st);

console.log("17: ", 2 < 13 < 123 < 1230);

let list = [3, 2, 7, 6, 8, 4];
console.log(list.map((x) => x % 2 === 0).every((x) => x));
console.log(list.filter((x) => !(x % 2)));
let even = [];
list.forEach((x) => {
  if (x % 2 === 0) even.push(x);
});
even;
console.log(even);



class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
let p1 = new Point(0, 0);
let p2 = p1;
p1.move(1, 1);
console.log(p1, p2);


let list = [3, 2, 7, 6, 8, 4];
let sum = 0;
for (let x of list) {
  sum += x;
}
sum;
console.log(sum);
console.log(list.reduce((x, y) => x + y));
let sum2 = 0;
list.forEach((x) => (sum2 += x));
console.log(sum2);


let list1 = [1, 2];
let list2 = [3, 3];
let list3 = [6, 4, 5];
console.log([...list1, ...list2, ...list3]);
console.log(list1 + list2 + list3);
console.log();
console.log();
*/

let list = [3, 2, 7, 6, 8, 4];
// console.log(list.reduce((m, x) => (x < m ? x : m)));
// console.log(list.sort()[0]);

console.log(sort(list)[0]);
