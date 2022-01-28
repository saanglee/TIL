import React, { useEffect, useState } from "react";

// 하나의 파일에 두개의 컴포넌트도 가능함
const UnmountTest = () => {
  // 컴포넌트가 Unmount되는 순간 제어하기
  useEffect(() => {
    // Mount
    console.log("Mount!");
    // Unmount
    return () => {
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {/* 단락 회로 평가? 사용..(복습하기..) - isVisible이 True일 때 UnmountTest컴포넌트 화면에 렌더링 */}
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
