// Using map to reformat objects in an array

let arr = [
  { id: 1, pw: 123 },
  { id: 2, pw: 456 },
  { id: 3, pw: 789 },
];

let reformattedArray = arr.map((obj) => {
  let rObj = {};
  rObj[obj.id] = obj.pw;
  return rObj;
});

console.log(reformattedArray);
// reformattedArray is now [ { '1': 123 }, { '2': 456 }, { '3': 789 } ]

let reformattedArray2 = arr.map((obj) => {
  let rObj2 = {};
  (rObj2["아이디"] = obj.id), (rObj2["비밀번호"] = obj.pw);
  return rObj2;
});

console.log(reformattedArray2);
// reformattedArray2 is now
// [ { '아이디': 1, '비밀번호': 123 },
//   { '아이디': 2, '비밀번호': 456 },
//   { '아이디': 3, '비밀번호': 789 } ]
