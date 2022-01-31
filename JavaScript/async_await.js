// async
async function helloAsync() {
  return "hello Async";
}

console.log(helloAsync());
// Promise 객체 반환 > Promise { 'hello Async' }

helloAsync().then((res) => {
  console.log(res);
});
// > hello Async

//-----------------------------------
