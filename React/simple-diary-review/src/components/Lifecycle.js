import React, { useState, useEffect } from "react";
// useEffect, Component Lifecycle 개념 익히기

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!!");
    return () => {
      console.log("Unmount~~~");
    };
  }, []);
  return <div>Unmount Testing Component😉</div>;
};

const Lifecycle = () => {
  const [isVisible, setisVisible] = useState(false);
  const toggle = () => {
    setisVisible(!isVisible);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
      {/* isVisible이 true일 때 UnmountTest 컴포넌트 렌더링 */}
    </div>
  );
};

export default Lifecycle;
