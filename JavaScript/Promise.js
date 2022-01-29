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

// Promise.race
console.time("x");
Promise.race([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("x");
});

// all과 사용방법 동일
// all은 모든 작업이 완료될 때 까지 기다리지만, race는 하나라도 1등으로 완료되면 끝낸다.
// 1번 주문 완료 후 실행 종료 - 이미 1번이 완료되었기 때문에 그 뒤로 무시
// 용량이 큰 이미지들을 로딩하는데 그 중 하나라도 로딩 되면 그 이미지를 보여줄 때 이런 방식을 사용한다.
