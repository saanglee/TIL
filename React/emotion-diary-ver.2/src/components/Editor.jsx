import React from "react";
import { useNavigate } from "react-router";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

const Editor = () => {
  const navigate = useNavigate();

  return (
    <div className="Editor">
      <MyHeader
        headText={"새로운 일기 쓰기"}
        leftChild={<MyButton text={"<뒤로가기"} onClick={() => navigate(-1)} />}
        rightChild={<MyButton />} // TODO: 오른쪽 버튼 생성
      />




    </div>
  );
};

export default Editor;
