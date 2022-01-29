import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import Lifecycle from "./Lifecycle";

function App() {
  const [data, SetData] = useState([]);

  const dataId = useRef(0);

  // 함수 만들어서 API 호출하기
  // fetch와 await를 함께 쓸것이기 때문에 async 키워드를 붙여준다. getData함수가 promise를 반환하는 비동기 함수되도록 함
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    console.log(res);
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        create_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    SetData(initData);
  };
  // getData함수 호출 - App컴포넌트가 마운트 되자마자 (depth에 빈배열)
  useEffect(() => {
    getData();
  }, []);

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

  // 수정 기능 함수
  const onEdit = (targetId, newContent) => {
    SetData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      {/* <Lifecycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
