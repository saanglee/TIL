const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
      rej("XXX");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

console.log("시작");
console.time("Promise chaning");
// resole함수를 실행하면서 넘겨준 값을 f2로 넘겨준다.
// f2는 메세지(res)를 받아서 로그 찍어주고 promise를 반환, 이때 resolve함수로 전달한 값을 3번에서 사용
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    // console.log("끝!");
    console.timeEnd("Promise chaning");
  });
// ----------------------------------------------------------------------

// Promise.all
console.time("Promise.all");
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("Promise.all");
});
// Promise.all([배열]) 배열 부분이 모두 완료 된 후에 then이 실행
// Promise all은 한꺼번에 시작하고 모두 이행되면 값을 사용할 수 있다.
