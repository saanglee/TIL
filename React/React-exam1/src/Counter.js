import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}> + </button>
      <button onClick={onDecrease}> - </button>
      <OddEvenResult count={count} />
      {/* OddEvenResult를 Counter의 자식요소로 배치하고 count를 props로 전달함 */}
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
