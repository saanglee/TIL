// 계산 기능을 하는 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
// 내보내기 - 모듈을 내보냄 (모듈? 어떤 기능을 담당하는 분리된 파일 각각 - calc.js는 계산기능을 담당하는 모듈, 계산모듈을 만드는 파일)

// 객체 단위로 모듈을 내보냄
module.exports = {
  moduleName: "calc module",
  add: add,
  sub: sub,
};
// module exports 내장함수는 node js에서의 내장함수이기 때문에 바닐라JS에서는 사용이 제한됨
// 기능별 파일 분리, 각각 기능을 다른 파일에서 구현하기 & 불러와서 사용하기
// module.exports , require() 이런 모듈 시스템은 node js 의 common js라는 모듈 시스템
// 모듈 시스템 : 모듈을 내보낼 수 있고 가져와서 사용할 수 있는 함수 같은 시스템