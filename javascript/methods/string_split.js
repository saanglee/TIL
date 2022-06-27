/*
str.trim().split(/\s+/)

To split a string by multiple spaces
The regular expression will split the string on one or more spaces
and return an array containing the substrings
> https://bobbyhadz.com/blog/javascript-split-string-multiple-spaces
*/

const str = '  banana    kiwi    mango  ';
const result = str.trim().split(/\s+/);
console.log(result); // [ 'banana', 'kiwi', 'mango' ]

// ⛔️ without trim
const str2 = '  banana    kiwi    mango  ';
console.log(str2.split(/\s+/)); // ['', 'banana', 'kiwi', 'mango', '']

const str3 = '  banana, kiwi, mango  ';
const result3 = str3.trim().split(/\s+/);
console.log(result3); // [ 'banana,', 'kiwi,', 'mango' ]
