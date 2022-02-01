import "./App.css";
import React, { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Counter from "./Counter";
import UseRef from "./UseRef";

function App() {
  const [data, setdata] = useState([]);

  // id값 변수 - 0번 부터 시작
  const dataId = useRef(0);

  // 일기 배열에 새로운 일기 추가 함수
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1; // id값 한번 쓸 때 마다 +1
    setdata([newItem, ...data]);
    // 새로운 일기데이터를 맨 위로, 그 밑으로 기존 데이터들
  };

  return (
    <div>
      <Counter />
      <UseRef />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
