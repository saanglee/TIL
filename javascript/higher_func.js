// 고차 함수

const getLog = () => {
  console.log("원래기능: 로그출력");
};

const higherFunc = (inputFunc) => {
  console.log("higherFunc의 어떤 기능 수행"); // 이 기능을 수행한 후,
  return inputFunc; // 입력받은 함수를 리턴한다.
};

const higherOrder = higherFunc(getLog);

higherOrder();
// higherFunc의 어떤 기능 수행
// 원래기능: 로그출력
// 고차함수의 어떤 기능이 수행된 뒤, 원래기능인 로그출력이 실행된다.
