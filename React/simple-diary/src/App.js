import "./App.css";
import React, { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// 1. 예시 임시 배열 생성
// const dummyList = [
//   {
//     id: 1,
//     author: "이상지",
//     content: "화이팅",
//     emotion: 1,
//     created_date: new Date().getTime(), // getTime()메서드 - Date객체를 밀리세컨즈로 , 숫자로 변환해서 저장
//   },
//   {
//     id: 2,
//     author: "봄이",
//     content: "츄르..",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "장군이",
//     content: "난 너무 기여워",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, SetData] = useState([]);

  const dataId = useRef(1);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    SetData([newItem, ...data]); // 새로운 데이터(new Item)를 맨위로, 그 다음에 기존 데이터들(...data)
  };

  // onRemove함수 생성
  const onRemove = (targetId) => {
    console.log(`${targetId}번째 일기가 삭제되었습니다.`);
    // targetId를 가진 아이템을 제외한 새로운 배열을 생성
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    // newDiaryList setData함수에 전달해서 data 상태를 바꿔주면 삭제 완료
    SetData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
