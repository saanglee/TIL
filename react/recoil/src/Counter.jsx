import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { counterState } from './globalCounter';

function Counter() {
  const [tempCounter, setTempCounter] = useState(0);
  const [globalCounter, setGlobalCounter] = useRecoilState(counterState);

  const navigate = useNavigate();

  const handleIncrease = () => {
    setTempCounter((current) => current + 1);
  };

  const handleDecrease = () => {
    setTempCounter((current) => current - 1);
  };

  const handleUpdateState = () => {
    setGlobalCounter(tempCounter);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>Temp Counter: {tempCounter}</h2>
      <h2>Global Counter!: {globalCounter}</h2>
      <section>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
      </section>
      <section>
        <button type="button" onClick={handleUpdateState}>
          Update Global Counter!
        </button>
        <br />
        <button type="button" onClick={() => navigate('counter')}>
          Go to Global Counter Page
        </button>
      </section>
    </div>
  );
}

export default Counter;
