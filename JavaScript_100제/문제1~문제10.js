// 1. 배열의 삭제: 다음 배열에서 400, 500을 삭제
// 123
let nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);

// 2. 배열의 내장함수
// <pass> 부분에 배열 내장함수를 이용해 코드를 입력하고 다음과 같이 출력

let arr = [200, 100, 300];
arr.splice(2, 0, 1000);
console.log(arr);

// 3. 변수의 타입

let arr2 = [100, 200, 300];
console.log(typeof arr); // object

// 4. 변수의 타입2
// typeof(a)

// 5. for문 계산

let a = 10;
let b = 2;
for (let i = 1; i < 5; i += 2) {
  // i : 1, 3
  a += i;
}
console.log(a + b); // 16

// 6. JS문법 중 False로 취급하는 것들
console.log("NaN", NaN);
console.log('""', "");
console.log("0", 0);
console.log("undefined", undefined);

// 7. 변수명으로 사용할 수 없는 것

// 8. 객체의 키 이름 중복
let d = {
  height: 180,
  weight: 78,
  weight: 44,
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]); // 44

// 9. concat을 활용한 출력방법
let year = "2019";
let month = "04";
let day = "26";
let h = "11";
let m = "34";
let s = "27";

let result = year.concat("/", month, "/", day, " ", h, ":", m, ":", s);

console.log(result);

// 10. 별찍기
