import React, { useState, useReducer } from "react";

const ACTION_TYPES = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const reducer = (state, action) => {
  console.log("reducer가 일을 함!", state, action);
  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;
    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

const Reducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h1>useReducer 은행</h1>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.DEPOSIT, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.WITHDRAW, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default Reducer;
