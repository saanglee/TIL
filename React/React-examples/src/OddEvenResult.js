const OddEvenResult = ({ count }) => {
  console.log(count); // STATE가 바뀔 때 마다 계속해서 count props를 받아서 console에 출력함
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};
// Counter 컴포넌트의 count를 props로 받아옴
export default OddEvenResult;
