// Using map to reformat objects in an array

let kvArr = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let reformattedArray = kvArr.map((obj) => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray);
// [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
