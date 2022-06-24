import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from './globalCounter';

const RenderGlobal = () => {
  const globalCounter = useRecoilValue(counterState);
  return (
    <div>
      <h1>Test Global Counter</h1>
      <div>{globalCounter}</div>
    </div>
  );
};

export default RenderGlobal;
